# 🎬 Movie Searcher

A modern web application to explore popular movies using The Movie Database (TMDb) API. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- � **Movie Search**: Real-time search functionality to find any movie in the TMDb database
- �🔥 **Trending Movies**: View the most popular movies of the week in an interactive slider
- 🎬 **Individual Movie Pages**: Detailed view for each movie with full information and backdrop images
- 📊 **Comprehensive Information**: Ratings, release dates, synopses, and high-quality posters
- 🎨 **Modern Design**: Sleek dark theme with responsive interface using Tailwind CSS
- 📱 **Fully Responsive**: Optimized grid layouts that adapt from mobile to desktop (2 columns on tablet, 4 on desktop)
- ⚡ **Optimized Performance**: Efficient image loading with placeholder fallbacks for missing images
- 🔄 **Global State Management**: Centralized state with Zustand for seamless data flow
- ✅ **Type-Safe Data Validation**: Runtime schema validation with Zod for API responses
- 🎯 **Smart Error Handling**: Graceful error states and loading indicators throughout the app

## 🛠️ Tech Stack

- **React 19** - UI Library
- **TypeScript** - Static typing
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling framework
- **React Router** - Client-side routing
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
│   │   ├── UpperBar.tsx            # Navigation bar with search
│   │   ├── SearchedMovies.tsx      # Search results display
│   │   ├── FullPageMovie.tsx       # Individual movie detail page
│   │   ├── PeliculaMasVista.tsx    # Featured movie component
│   │   ├── MoviesSection.tsx       # Trending movies grid
│   │   ├── Slider.tsx              # Movie carousel
│   │   ├── Spinner.tsx             # Loading indicator
│   │   ├── ErrorLoading.tsx        # Error state component
│   │   ├── Modal.tsx               # Modal overlay component
│   │   └── DarkBackground.tsx      # Dark overlay
│   ├── types/
│   │   └── index.ts                # TypeScript types and Zod schemas
│   ├── helpers/
│   │   └── index.ts                # Helper functions (image URLs, etc.)
│   ├── store.ts                    # Global state with Zustand
│   ├── App.tsx                     # Main component with routing
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles with Tailwind
├── public/                         # Static files
└── package.json
```

## 🎯 Key Features

### Real-Time Movie Search
- Instant search functionality in the navigation bar
- Search across the entire TMDb database
- Controlled input component for smooth typing experience
- Results displayed in responsive grid layout
- Automatic fallback to placeholder images for movies without posters

### Popular Movies Slider
- Automatic carousel with the top 6 most-watched movies of the week
- Manual navigation with arrows
- Clickable pagination dots
- Original resolution images for maximum quality
- Smooth transitions and autoplay functionality

### Individual Movie Pages
- Dedicated page for each movie with full details
- Large backdrop images with hero section design
- Complete movie information including cast and crew details
- Dynamic routing with React Router
- Error handling for invalid movie IDs

### Featured Movie Section
- Displays the #1 trending movie on the homepage
- Detailed information: title, synopsis, rating, and release date
- Two-column responsive layout
- Action button to navigate to full movie page
- Adapts seamlessly across different screen sizes

### Error Handling
- Data validation with Zod schemas
- User-friendly error messages
- Loading states while fetching data
- Graceful fallbacks for API failures

## 🌐 API

This project uses [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to fetch movie information.

### Endpoints used:
- `GET /trending/movie/week` - Trending movies of the week
- `GET /movie/{movie_id}` - Individual movie details
- `GET /search/movie` - Search for movies by query

### Data Schema
The application validates all API responses using Zod to ensure type safety:
- **Movie Schema**: ID, title, overview, backdrop_path (nullable), poster_path (nullable), release_date, vote_average, adult flag
- **Search Result Schema**: page, results array, total_pages, total_results
- Nullable image paths handle cases where movies don't have posters or backdrops

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

## 🌟 Live Demo

Try it yourself: [https://movie-searcher-ts.netlify.app/](https://movie-searcher-ts.netlify.app/)

---

⭐ If you like this project, give it a star on GitHub!
