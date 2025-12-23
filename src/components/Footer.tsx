import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

/**
 * Professional Footer component using semantic HTML5 tags.
 * Includes branding, navigation links, and social media icons.
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="inline-block mb-6 group">
                            <h2 className="text-3xl font-black text-white">
                                Movie<span className="text-primary">Searcher</span>
                            </h2>
                        </Link>
                        <p className="text-text-muted text-lg max-w-sm">
                            Your ultimate cinema collection. Explore, search, and save your favorite movies and TV shows from the world's largest database.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Navigation</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-text-muted hover:text-primary transition-colors">Home</Link></li>
                            <li><a href="#moviesSection" className="text-text-muted hover:text-primary transition-colors">Movies</a></li>
                            <li><a href="#seriesSection" className="text-text-muted hover:text-primary transition-colors">Series</a></li>
                            <li><a href="#favoritesSection" className="text-text-muted hover:text-primary transition-colors">Favorites</a></li>
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Connect</h3>
                        <div className="flex gap-4">
                            <a href="https://github.com/Jota-ato" className="p-3 bg-background rounded-lg text-text-muted hover:text-primary hover:scale-110 transition-all">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-3 bg-background rounded-lg text-text-muted hover:text-primary hover:scale-110 transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-3 bg-background rounded-lg text-text-muted hover:text-primary hover:scale-110 transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-3 bg-background rounded-lg text-text-muted hover:text-primary hover:scale-110 transition-all">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-sm text-center md:text-left">
                        © {currentYear} MovieSearcher. Built with React, TypeScript & TMDB API.
                    </p>
                    <div className="flex gap-8 text-sm text-text-muted">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}