# Bitácora Cañaña — guía de edición
Abre `index.html` en el navegador (no requiere servidor ni instalación).

## Dónde se edita
- **Todo el contenido:** `js/data.js` (zonas marcadas INICIO/FIN). Los textos "PENDIENTE" están por completar.
- Estilos: `css/styles.css` (colores como variables en `:root`). Render: `js/app.js` (no hace falta tocarlo).

## Actualizar un perfil
En `integrantes`, edita nombre, bio y fortalezas. Foto: guarda la imagen en `assets/img/` y escribe `foto: "assets/img/mi-foto.jpg"`.
Botón de ejercicio: `ejercicio: "tercer-corte/actividad.html?id=mi-id"` (o URL externa). Vacío = botón "pendiente".

## Añadir una actividad / semana / subpágina del Tercer corte
Copia un objeto dentro de `actividades` y cambia `id` (único, sin espacios), `semana`, `fecha`, `titulo`, `resumen` y `bloques`.
Bloques: `texto`, `imagen`, `galeria`, `cita` (ver el ejemplo "demo"). Aparece sola en el índice y en
`tercer-corte/actividad.html?id=<id>`. Borra el ejemplo `demo` cuando ya no lo necesites.

## Cambiar una imagen
Copia el archivo a `assets/img/`, actualiza su ruta en `data.js` y escribe siempre el texto alternativo (`alt`).

## Pendiente / límites
Misión, visión, nombres, fotos y biografías están por completar. El slogan es una propuesta editable. No hay panel de administración.
