# ACDE · acde.cl

Sitio de Alejandro Troncoso para servicios de migración a Jumpseller, desarrollo e integraciones. Plataformas de origen: Shopify, WooCommerce, Wix y VTEX.

## Desarrollo

```sh
npm ci
npm run dev
```

## Verificación

```sh
npm run lint
npm run build
```

Next.js exporta el sitio estático a `out/`. El workflow de GitHub Pages publica esa carpeta al recibir cambios en `main` del repositorio `aatronco/portfolio`. El dominio `acde.cl` está configurado en GitHub Pages.

## Contenido

- `src/components/Hero.tsx`: propuesta principal y plataformas.
- `src/components/Migration.tsx`: alcance y proceso.
- `src/components/Projects.tsx`: ejemplos públicos de integraciones.
- `src/components/About.tsx`: presentación de Alejandro.
- `src/components/Contact.tsx`: canal de contacto y primera conversación.
- `src/app/globals.css`: diseño adaptable y accesibilidad.

La propuesta prioriza el acompañamiento y la evaluación de cada operación. El alcance y los plazos se acuerdan con cada cliente. Los proyectos enlazados son ejemplos de desarrollo, no testimonios de migraciones.

## Software nutricional

La segunda línea comercial presenta NutriCal y proyectos a medida para nutricionistas. Las funciones descritas se contrastaron con el código de `aatronco/nutrical` el 27 de septiembre de 2026: registro de pacientes y evaluaciones, cálculos antropométricos, comparativas, gráficos, informes imprimibles y conexión con Google Sheets.

`src/components/Nutrition.tsx` contiene la sección. Las modalidades por paciente y Enterprise con tarifa fija son propuestas comerciales a cotizar. No implican que NutriCal ya incluya facturación, gestión de suscripciones ni funciones de administración para múltiples profesionales. La definición de paciente facturable, período, tarifas, volumen y soporte se acuerda en cada propuesta. Las adaptaciones para organizaciones se evalúan como trabajo adicional.

El repositorio de NutriCal es privado. La web comercial dirige sus consultas a la sección de contacto, sin enlazar a su código.

## Contacto por WhatsApp normal

`WhatsAppButton.tsx` construye un enlace de Click to Chat al pulsar el botón. El número se guarda codificado en `src/lib/whatsapp.mjs` para evitar su aparición literal en el HTML inicial. **Es ofuscación, no cifrado ni privacidad del número:** se puede recuperar desde JavaScript y se ve al abrir WhatsApp. El usuario revisa el mensaje y pulsa Enviar; el sitio no envía mensajes automáticamente.

No requiere WhatsApp Business API, servidor, Cloudflare ni credenciales. Si JavaScript está desactivado, se muestra el contacto alternativo por X. `npm test` comprueba la URL y el componente.
