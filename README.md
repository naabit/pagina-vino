# Sitio Web de Asesoría Jurídica | React + Vite

Landing page profesional desarrollada con React y Vite para un servicio independiente de asesoría jurídica.

El proyecto fue diseñado con foco en experiencia de usuario, conversión, diseño responsive, SEO técnico y una arquitectura sencilla de mantener y desplegar.

## Demo

Sitio en producción:

`https://elenafryderup.cl`

> Proyecto desarrollado para una clienta real. Por privacidad, este repositorio y su documentación omiten datos personales, configuraciones sensibles y detalles internos del servicio.

## Características

* Landing responsive de una sola página.
* Navegación adaptable con menú móvil.
* Hero orientado a conversión.
* Secciones de servicios, presentación, proceso y contacto.
* Formulario integrado con un servicio externo.
* Contacto directo mediante WhatsApp.
* Animaciones de entrada activadas durante el scroll.
* Componentes reutilizables en React.
* Identidad visual personalizada.
* Optimización SEO técnica y on-page.
* Metadatos para compartir el sitio en redes sociales.
* Datos estructurados mediante JSON-LD.
* `robots.txt` y `sitemap.xml`.
* Build optimizada mediante Vite.

## Stack

* React
* Vite
* JavaScript
* HTML5
* CSS3
* Integración con servicios externos de formularios

## Instalación local

```bash
npm install
npm run dev
```

Vite iniciará el servidor de desarrollo y mostrará una dirección local similar a:

```text
http://localhost:5173
```

## Scripts disponibles

### Desarrollo

```bash
npm run dev
```

Inicia el servidor de desarrollo local.

### Producción

```bash
npm run build
```

Genera la versión optimizada para producción en `dist/`.

### Vista previa

```bash
npm run preview
```

Permite revisar localmente la build de producción.

## Estructura del proyecto

```text
project/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── AnimatedScales.jsx
│   │   ├── Contact.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Icons.jsx
│   │   ├── Logo.jsx
│   │   ├── Process.jsx
│   │   └── Services.jsx
│   ├── App.jsx
│   ├── hooks.js
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Arquitectura

La interfaz está dividida en componentes independientes para facilitar el mantenimiento y la modificación del contenido.

Entre los principales componentes se encuentran:

* `Header.jsx`: navegación principal y menú responsive.
* `Hero.jsx`: presentación y llamadas a la acción.
* `Services.jsx`: presentación de los servicios.
* `About.jsx`: sección informativa.
* `Process.jsx`: explicación del flujo de atención.
* `Contact.jsx`: formulario y canales de contacto.
* `Logo.jsx`: identidad gráfica en formato reutilizable.
* `AnimatedScales.jsx`: elemento visual animado.

Los estilos generales están centralizados en:

```text
src/styles.css
```

## SEO

El proyecto incorpora optimización SEO técnica y on-page desde su implementación.

### Metadatos

Se configuraron:

* `title`
* `meta description`
* `canonical`
* meta robots
* Open Graph
* Twitter Card

### Datos estructurados

Se implementaron datos estructurados mediante `schema.org` y JSON-LD para facilitar la interpretación del sitio por parte de los motores de búsqueda.

### Indexación

El directorio `public/` incluye:

```text
robots.txt
sitemap.xml
```

Estos recursos permiten definir directrices de rastreo y facilitar el descubrimiento de las URLs públicas del sitio.

### SEO de contenido

La estructura semántica y el copy fueron trabajados considerando:

* intención de búsqueda;
* SEO local;
* jerarquía de encabezados;
* descripción clara de servicios;
* llamadas a la acción;
* lenguaje natural;
* relevancia temática sin keyword stuffing.

## Diseño

La interfaz fue desarrollada específicamente para este proyecto, buscando transmitir una identidad profesional sin recurrir a una plantilla prediseñada.

El sistema visual incluye:

* paleta personalizada;
* tipografía de alta legibilidad;
* composición responsive;
* iconografía propia;
* elementos gráficos abstractos;
* animaciones sutiles;
* estados interactivos;
* adaptación para dispositivos móviles.

La identidad gráfica, favicon y diferentes elementos visuales también fueron preparados como parte del desarrollo.

## Formulario

El formulario de contacto se integra con un servicio externo para recibir solicitudes sin necesidad de implementar un backend propio.

La interfaz mantiene el formulario dentro de la experiencia visual del sitio mientras el procesamiento de las respuestas se realiza mediante el servicio externo.

Los identificadores, endpoints y demás parámetros específicos de producción se omiten de esta documentación.

## Responsive design

El sitio fue diseñado para funcionar en distintos tamaños de pantalla, incluyendo:

* escritorio;
* tablets;
* smartphones.

La navegación, composición del hero, formularios, botones y espaciados se adaptan según el ancho disponible.

## Rendimiento y producción

Antes del despliegue se valida el proyecto mediante:

```bash
npm run build
```

Vite genera los recursos optimizados para producción dentro de:

```text
dist/
```

La build de producción fue validada correctamente antes de su publicación.

## Privacidad

Este proyecto corresponde a un trabajo realizado para una clienta real.

Por este motivo, la documentación pública evita exponer informacion personal

El repositorio tiene como finalidad documentar principalmente las decisiones de diseño, desarrollo frontend, integración y optimización técnica realizadas durante el proyecto.

## Desarrollo

Diseñado y desarrollado por [naabit.cl](https://naabit.cl).
