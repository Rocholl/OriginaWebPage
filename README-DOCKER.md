# Docker Setup para Origina

## Construcción y Ejecución

### Opción 1: Usando Docker Compose (Recomendado)

```bash
# Construir y ejecutar
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener
docker-compose down
```

### Opción 2: Usando Docker directamente

```bash
# Construir la imagen
docker build -t origina:latest .

# Ejecutar el contenedor
docker run -d -p 3000:3000 --name origina origina:latest

# Ver logs
docker logs -f origina

# Detener y eliminar
docker stop origina && docker rm origina
```

## Variables de Entorno

Puedes personalizar la configuración usando variables de entorno:

```bash
docker run -d \
  -p 3000:3000 \
  -e PORT=3000 \
  -e HOST=0.0.0.0 \
  --name origina \
  origina:latest
```

## Acceso

Una vez ejecutado, la aplicación estará disponible en:
- http://localhost:3000

## Notas

- El Dockerfile usa un build multi-stage para optimizar el tamaño de la imagen
- La aplicación se ejecuta con un usuario no-root para mayor seguridad
- El puerto por defecto es 3000, pero puede cambiarse con la variable de entorno PORT

