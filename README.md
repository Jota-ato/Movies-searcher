# 🎬 Movie Searcher

A modern web application to explore popular movies using The Movie Database (TMDb) API. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🔥 **Trending Movies**: View the most popular movies of the week in an interactive slider
- 📊 **Detailed Information**: Check ratings, release dates, and synopses
- 🎨 **Modern Design**: Responsive interface with Tailwind CSS
- 📱 **Responsive**: Optimized for mobile and desktop devices
- ⚡ **Optimized Performance**: High-quality images with efficient loading
- 🔄 **Global State**: State management with Zustand
- ✅ **Data Validation**: Schema validation with Zod

## 🛠️ Tech Stack

- **React 19** - UI Library
- **TypeScript** - Static typing
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling framework
- **Zustand** - State management
- **Axios** - HTTP client
- **Swiper** - Image carousel
- **Zod** - Schema validation

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jota-ato/Movies-searcher.git
   cd Movies-searcher
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the project root:
   ```env
   VITE_API_KEY=your_tmdb_api_key
   ```
   
   > 💡 Get your free API key at [The Movie Database](https://www.themoviedb.org/settings/api)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Visit `http://localhost:5173`

## 📦 Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Build the application for production
npm run preview  # Preview the production build
npm run lint     # Run the linter
```

## 📁 Project Structure

```
Movie-searcher/
├── src/
│   ├── components/
│   │   ├── BarraSuperior.tsx      # Navigation bar
│   │   ├── DarkBackground.tsx     # Dark overlay
│   │   ├── PeliculaMasVista.tsx   # Featured movie component
│   │   └── Slider.tsx             # Movie carousel
│   ├── db/
│   │   └── index.ts               # Database utilities
│   ├── helpers/
│   │   └── index.ts               # Helper functions
│   ├── store.ts                   # Global state with Zustand
│   ├── App.tsx                    # Main component
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles
├── public/                        # Static files
└── package.json
```

## 🎯 Key Features

### Popular Movies Slider
- Automatic carousel with the top 6 most-watched movies of the week
- Manual navigation with arrows
- Clickable pagination dots
- Original resolution images for maximum quality
- Smooth transitions and autoplay functionality

### Featured Movie
- Displays the #1 trending movie
- Detailed information: title, synopsis, rating, and release date
- Two-column layout (40% image / 60% information)
- Action button for more details
- Responsive design that adapts to different screen sizes

### Error Handling
- Data validation with Zod schemas
- User-friendly error messages
- Loading states while fetching data
- Graceful fallbacks for API failures

## 🌐 API

This project uses [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to fetch movie information.

### Endpoints used:
- `GET /trending/movie/week` - Trending movies of the week

### Data Schema
The application validates all API responses using Zod to ensure type safety:
- Movie ID, title, and overview
- Backdrop and poster paths
- Release date and vote average
- Adult content flag

## 🎨 Design Highlights

- **Dark Theme**: Modern dark color scheme for comfortable viewing
- **Glassmorphism Effects**: Subtle blur and transparency effects
- **Smooth Animations**: Transitions and hover effects throughout
- **Responsive Grid**: Adapts seamlessly from mobile to desktop
- **High-Quality Images**: Uses TMDb's original image resolution

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Jota-ato**
- GitHub: [@Jota-ato](https://github.com/Jota-ato)

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the API
- [Swiper](https://swiperjs.com/) for the excellent carousel component
- The React community for the amazing tools and libraries

---
##Prove by yourself
```
    https://movie-searcher-ts.netlify.app/
```
⭐ If you like this project, give it a star on GitHub!
