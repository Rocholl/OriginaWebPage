/** @type {import('./$types').Actions} */
export const actions = {
	contact: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');
		
		// Here you can add logic to send the email
		// For example, using a service like SendGrid, Nodemailer, etc.
		console.log('Form received:', { name, email, message });
		
		return {
			success: true,
			message: 'Message sent successfully'
		};
	}
};

