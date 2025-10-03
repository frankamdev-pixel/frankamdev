import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all ${
                scrolled
                    ? 'border-b border-gray-700/50 bg-black/30 backdrop-blur-md'
                    : 'bg-transparent'
            } px-4 py-5 md:px-8`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <span className="text-xl font-semibold text-white">
                        FrankamDev
                    </span>
                </div>

                {/* Links */}
                <nav className="hidden items-center space-x-6 text-sm font-medium text-gray-400 lg:flex">
                    <a href="#" className="transition-colors hover:text-white">
                        Features
                    </a>
                    <a href="#" className="transition-colors hover:text-white">
                        Testimonials
                    </a>
                    <a href="#" className="transition-colors hover:text-white">
                        Pricing
                    </a>
                    <a
                        href="#"
                        className="flex items-center transition-colors hover:text-white"
                    >
                        Careers
                        <ChevronDown className="ml-1 h-4 w-4" />
                    </a>
                </nav>

                {/* Buttons */}
                <div className="flex items-center space-x-4">
                    <button className="hidden text-sm font-medium text-gray-400 transition-colors hover:text-white sm:block">
                        Sign up
                    </button>
                    <button
                        className="rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
                        style={{
                            background:
                                'linear-gradient(90deg, #3B82F6 0%, #2563EB 100%)',
                        }}
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
