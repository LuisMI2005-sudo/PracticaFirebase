# Órbita · Landing page

Landing en español para un estudio digital, con servicios, proceso y contacto a través de las conversaciones de este repositorio.

Sitio publicado: https://device-streaming-11595a3b.web.app

## Desarrollo

La aplicación Next.js se encuentra en `tinygay/`.

```sh
npm --prefix tinygay ci
npm --prefix tinygay run dev
```

## Publicación

Desde la raíz del repositorio, con Firebase CLI y una sesión autorizada para el proyecto:

```sh
firebase deploy --only hosting --project device-streaming-11595a3b
```

El comando compila primero la aplicación y publica `tinygay/out`. Los workflows de GitHub Actions también compilan la app y publican en Hosting al actualizar `main`. Requieren el secreto `FIREBASE_SERVICE_ACCOUNT_DEVICE_STREAMING_11595A3B` configurado en GitHub.

```sh
npm --prefix tinygay run lint
npm --prefix tinygay run build
```
