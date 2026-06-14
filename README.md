# ⌚ Reloj Digital — Cyberpunk Alarm Clock

> Un reloj digital interactivo con estilo cyberpunk-neón, sistema de alarmas y soporte para modo claro/oscuro. Proyecto personal para aprender JavaScript, HTML y CSS.

![Neon theme](https://img.shields.io/badge/theme-neon--cyberpunk-ff00aa?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## ✨ Funcionalidades

- **Reloj en vivo** — Hora actualizada en tiempo real con formato HH:MM:SS AM/PM y fecha.
- **Sistema de alarmas** — Agrega alarmas personalizadas, suenan con un efecto visual pulsante.
- **Tema oscuro / claro** — Interfaz cyberpunk-neón por defecto con transición suave a modo claro.
- **Persistencia de tema** — La preferencia de tema se guarda en `localStorage`.
- **Diseño responsive** — Adaptado a dispositivos móviles (portrait y landscape) y escritorio.
- **Efectos visuales** — Líneas de scan CRT, cuadrícula retro, sombras neón animadas.
- **Tipografía Orbitron** — Fuente de estilo digital / retro-futurista.

---

## 🚀 Cómo usar

1. Clona el repositorio:
   ```bash
   git clone https://github.com/TU-USUARIO/reloj-digital.git
   ```
2. Abre `index.html` en tu navegador favorito.
3. Haz clic en **⌨ VER HORA** para mostrar el reloj.
4. Haz clic en **⏰ ALARMA** para desplegar el panel de alarmas.
5. Agrega alarmas con el selector de hora y el botón **+**.
6. Usa el botón **☾ / ☀** (esquina superior derecha) para cambiar entre tema oscuro y claro.

---

## 🧠 Lo que aprendí (JavaScript)

| Concepto | Aplicación |
|----------|------------|
| `setInterval` / `clearInterval` | Actualización del reloj en tiempo real |
| `setTimeout` | Retardo controlado al ocultar el reloj |
| `Date` API | Formateo de hora, fecha y detección de alarmas |
| `classList.toggle` / `classList.contains` | Control de estados visuales (activo/inactivo) |
| `localStorage` | Persistencia del tema seleccionado |
| `Audio` API | Reproducción y control del sonido de alarma |
| Event delegation | Manejo de clics en elementos dinámicos |
| `padStart` | Formateo de dígitos con doble cero |
| `toLocaleTimeString` | Obtención del sufijo AM/PM |

## 🎨 Lo que aprendí (CSS)

| Concepto | Aplicación |
|----------|------------|
| `clamp()` | Tipografía y espaciado fluido responsive |
| `min()` / `max()` | Dimensiones adaptables al viewport |
| CSS custom properties (`var()`) | Sistema de temas oscuro/claro |
| `::before` / `::after` | Capas de scanlines y cuadrícula retro |
| `skew()` | Efecto de inclinación 3D en botones |
| `backdrop-filter: blur()` | Overlay de alarma con desenfoque |
| `@keyframes` | Animación pulsante del botón de alarma |
| `@media (orientation)` | Breakpoints específicos para landscape / portrait |
| `transition` | Animaciones suaves en cambios de estado |
| `box-shadow` multi-capa | Efectos de resplandor neón |

---

## 📁 Estructura del proyecto

```
reloj-digital/
├── index.html          # Estructura principal
├── index.css           # Estilos con sistema de temas
├── reloj.js            # Lógica del reloj y alarmas
├── Sonido/
│   └── alarma-good-morning-ringtones.mp3  # Sonido de alarma
└── README.md           # Este archivo
```

---

## 🎨 Temas

### 🌑 Oscuro (default)
Fondo azul profundo con resplandores cian, magenta y dorado, líneas de scan CRT y cuadrícula retro — inspirado en la estética cyberpunk.

### ☀️ Claro
Fondo gris claro con acentos de color suaves, sin efectos de scan ni glow, ideal para uso diurno.

El cambio de tema es instantáneo y se recuerda entre sesiones gracias a `localStorage`.

---

## 📄 Licencia

Distribuido bajo licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

<p align="center">
  Hecho con 💜 por <a href="https://github.com/TU-USUARIO">Jean</a> — 2026
</p>
