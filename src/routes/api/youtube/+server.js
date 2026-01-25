/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const maxResults = parseInt(url.searchParams.get('max') || '12');
	
	try {
		const channelHandle = 'origina.memoria';
		
		// Intentar obtener el channel_id desde la página del canal
		let channelId = null;
		try {
			const channelPageResponse = await fetch(`https://www.youtube.com/@${channelHandle}`, {
				headers: {
					'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
				}
			});
			
			if (channelPageResponse.ok) {
				const html = await channelPageResponse.text();
				// Buscar el channel_id en el HTML
				const channelIdMatch = html.match(/"channelId":"([^"]+)"/) || 
				                       html.match(/channelId["\s]*:["\s]*"([^"]+)"/) ||
				                       html.match(/<link[^>]*rel="canonical"[^>]*href="[^"]*\/channel\/([^"]+)"/);
				if (channelIdMatch) {
					channelId = channelIdMatch[1];
				}
			}
		} catch (e) {
			console.error('Error obteniendo channel_id:', e);
		}
		
		// Si no tenemos channel_id, intentamos usar el RSS feed con el user parameter
		let rssUrl;
		if (channelId) {
			rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
		} else {
			// Fallback: intentar con el handle directamente en el RSS
			// Nota: Esto puede no funcionar, pero es un intento
			rssUrl = `https://www.youtube.com/feeds/videos.xml?user=${channelHandle}`;
		}
		
		// Obtener el RSS feed
		const rssResponse = await fetch(rssUrl, {
			headers: {
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
			}
		});
		
		if (!rssResponse.ok) {
			throw new Error(`Error al obtener RSS feed: ${rssResponse.status}`);
		}
		
		const rssXml = await rssResponse.text();
		
		// Parsear el XML manualmente (sin DOMParser que es del navegador)
		const videos = [];
		const entryRegex = /<entry[^>]*>([\s\S]*?)<\/entry>/g;
		let match;
		let count = 0;
		
		while ((match = entryRegex.exec(rssXml)) !== null && count < maxResults) {
			const entryXml = match[1];
			
			// Extraer videoId
			const videoIdMatch = entryXml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/) ||
			                     entryXml.match(/<videoId>([^<]+)<\/videoId>/);
			if (!videoIdMatch) continue;
			
			const videoId = videoIdMatch[1];
			
			// Extraer título
			const titleMatch = entryXml.match(/<title[^>]*>([^<]+)<\/title>/);
			const title = titleMatch ? titleMatch[1] : '';
			
			// Extraer fecha de publicación
			const publishedMatch = entryXml.match(/<published>([^<]+)<\/published>/);
			const published = publishedMatch ? publishedMatch[1] : '';
			
			// Extraer descripción
			const descriptionMatch = entryXml.match(/<media:description[^>]*>([^<]+)<\/media:description>/) ||
			                         entryXml.match(/<description[^>]*>([^<]+)<\/description>/);
			const description = descriptionMatch ? descriptionMatch[1] : '';
			
			// Extraer thumbnail
			const thumbnailMatch = entryXml.match(/<media:thumbnail[^>]*url="([^"]+)"/);
			const thumbnail = thumbnailMatch ? thumbnailMatch[1] : 
			                 `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
			
			// Extraer autor
			const authorMatch = entryXml.match(/<author>[\s\S]*?<name>([^<]+)<\/name>[\s\S]*?<\/author>/);
			const author = authorMatch ? authorMatch[1] : '';
			
			videos.push({
				id: videoId,
				title: title.trim(),
				description: description.substring(0, 200).trim() + (description.length > 200 ? '...' : ''),
				thumbnail,
				published,
				author: author.trim(),
				url: `https://www.youtube.com/watch?v=${videoId}`
			});
			
			count++;
		}
		
		return new Response(JSON.stringify({ videos }), {
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'public, max-age=3600' // Cache por 1 hora
			}
		});
		
	} catch (error) {
		console.error('Error obteniendo videos de YouTube:', error);
		return new Response(
			JSON.stringify({ 
				error: 'Error al obtener videos del canal',
				message: error instanceof Error ? error.message : String(error),
				videos: [] // Devolver array vacío en caso de error
			}),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}
}
