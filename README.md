# 🎬 Movie Searcher

Una aplicación web moderna para explorar películas populares utilizando la API de The Movie Database (TMDb). Construida con React, TypeScript, y Tailwind CSS.

## ✨ Características

- 🔥 **Películas en Tendencia**: Visualiza las películas más populares de la semana en un slider interactivo
- 📊 **Información Detallada**: Consulta calificaciones, fechas de estreno y sinopsis
- 🎨 **Diseño Moderno**: Interfaz responsiva con Tailwind CSS
- 📱 **Responsive**: Adaptado para dispositivos móviles y desktop
- ⚡ **Rendimiento Optimizado**: Imágenes de alta calidad con carga eficiente
- 🔄 **Estado Global**: Gestión de estado con Zustand
- ✅ **Validación de Datos**: Esquemas de validación con Zod

## 🛠️ Tecnologías

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS 4** - Framework de estilos
- **Zustand** - Gestión de estado
- **Axios** - Cliente HTTP
- **Swiper** - Carrusel de imágenes
- **Zod** - Validación de esquemas

## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Jota-ato/Movies-searcher.git
   cd Movies-searcher
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   
   Crea un archivo `.env` en la raíz del proyecto:
   ```env
   VITE_API_KEY=tu_api_key_de_tmdb
   ```
   
   > 💡 Obtén tu API key gratis en [The Movie Database](https://www.themoviedb.org/settings/api)

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador**
   
   Visita `http://localhost:5173`

## 📦 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run preview  # Previsualiza la build de producción
npm run lint     # Ejecuta el linter
```

## 📁 Estructura del Proyecto

```
Movie-searcher/
├── src/
│   ├── components/
│   │   ├── BarraSuperior.tsx      # Barra de navegación
│   │   ├── DarkBackground.tsx     # Overlay oscuro
│   │   ├── PeliculaMasVista.tsx   # Componente de película destacada
│   │   └── Slider.tsx             # Carrusel de películas
│   ├── helpers/
│   │   └── index.ts               # Funciones auxiliares
│   ├── store.ts                   # Estado global con Zustand
│   ├── App.tsx                    # Componente principal
│   └── main.tsx                   # Punto de entrada
├── public/                        # Archivos estáticos
└── package.json
```

## 🎯 Características Principales

### Slider de Películas Populares
- Carrusel automático con las 6 películas más vistas de la semana
- Navegación manual con flechas
- Paginación con puntos clickeables
- Imágenes en resolución original para máxima calidad

### Película Destacada
- Muestra la película #1 en tendencia
- Información detallada: título, sinopsis, calificación y fecha de estreno
- Diseño de dos columnas (40% imagen / 60% información)
- Botón de acción para más detalles

### Manejo de Errores
- Validación de datos con Zod
- Mensajes de error amigables
- Estados de carga mientras se obtienen los datos

## 🌐 API

Este proyecto utiliza [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) para obtener información de películas.

### Endpoints utilizados:
- `GET /trending/movie/week` - Películas en tendencia de la semana

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Jota-ato**
- GitHub: [@Jota-ato](https://github.com/Jota-ato)

## 🙏 Agradecimientos

- [The Movie Database (TMDb)](https://www.themoviedb.org/) por proporcionar la API
- [Swiper](https://swiperjs.com/) por el excelente componente de carrusel
- La comunidad de React por las increíbles herramientas y librerías

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
