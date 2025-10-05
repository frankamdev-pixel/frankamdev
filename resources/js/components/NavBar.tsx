import { Transition } from '@headlessui/react';
import { Link, usePage } from '@inertiajs/react';
import {
    BookOpen,
    ChevronDown,
    Home,
    Info,
    LayoutDashboard,
    LogOut,
    Mail,
    Pointer,
    Settings,
    User,
} from 'lucide-react';
import { Fragment, useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const { auth } = usePage().props;
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const navLinks = [

    {
   
              name: 'Tableau de bord', href: 'dashboard', icon: <Home size={16} /> 
            },         
{          name: 'Formations',
            href: '/formations',
            icon: <BookOpen size={16} />,
        },
      
        { name: 'Contact', href: '/contact', icon: <Mail size={16} /> },
        {
            name: 'Dashboard',
            href: '/dashboard',
            icon: <LayoutDashboard size={16} />,
        },
    ];

    // Scroll background effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 z-50 w-full transition-all ${
                scrolled
                    ? 'border-b border-gray-700/50 bg-black/30 backdrop-blur-md'
                    : 'bg-transparent'
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
                        Frankam<span className="text-white">Dev</span>
                    </div>

                    {/* Center nav links */}
                    <div className="hidden space-x-8 font-medium text-white md:flex">
                        {navLinks.map(
                            (link) =>
                                link.name !== 'Dashboard' && (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="transition hover:text-blue-400"
                                    >
                                        {link.name}
                                    </Link>
                                ),
                        )}
                    </div>

                    {/* Avatar / Dropdown */}
                    <div className="relative ml-4" ref={dropdownRef}>
                        <div
                             onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="group relative flex items-center gap-2 text-white focus:outline-none"
                        >
                            {auth.user?.profile_photo_url ? (
                                <div className="relative">
                                    <img
                                        src={auth.user.profile_photo_url}
                                        alt={auth.user.name}
                                        className="h-10 w-10 transform rounded-full border-2 border-blue-600 object-cover transition group-hover:scale-105"
                                    />
                                    {/* Animated pointing hand */}
                                    <Pointer
                                        className="absolute top-12 -right-6 -translate-y-1/2 animate-bounce text-yellow-400"
                                        size={20}
                                    />
                                </div>
                            ) : auth.user ? (
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 font-bold text-white">
                                    {auth.user.name.charAt(0)}
                                </div>
                            ) : (
                                <Link href="/login" className="rounded bg-blue-600 px-4 py-2 text-white">
                                    Se Connecter
                                </Link>
                            )}
                            {

                              auth.user ? (
                                <ChevronDown
                                    className={`transform text-white transition-transform ${
                                        dropdownOpen ? 'rotate-180' : 'rotate-0'
                                    }`}
                                    size={16}
                                />

                              ): null

                            }
                        </div>

                        {/* Dropdown */}
                        <Transition
                            show={dropdownOpen}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-2 scale-95"
                            enterTo="opacity-100 translate-y-0 scale-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0 scale-100"
                            leaveTo="opacity-0 translate-y-2 scale-95"
                        >
                            <div className="ring-opacity-5 absolute right-0 z-50 mt-2 w-64 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black">
                                {/* Greeting */}
                                {auth.user && (
                                    <div className="rounded-t-lg bg-blue-50 px-4 py-3 text-sm font-semibold text-gray-800">
                                        👋 Salut,{' '}
                                        <span className="text-blue-600">
                                            {auth.user.name}
                                        </span>
                                    </div>
                                )}

                                {/* Dashboard only stays here */}
                                <Link
                                    href="/dashboard"
                                    className="flex items-center gap-2 px-4 py-2 text-gray-800 transition hover:bg-gray-100"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    <LayoutDashboard size={16} /> Dashboard
                                </Link>

                                {auth.user && (
                                    <>
                                        <div className="my-1 border-t border-gray-200" />
                                        <Link
                                            href="/profile"
                                            className="flex items-center gap-2 px-4 py-2 text-gray-800 transition hover:bg-gray-100"
                                            onClick={() =>
                                                setDropdownOpen(false)
                                            }
                                        >
                                            <User size={16} /> Profile
                                        </Link>
                                        <Link
                                            href="/settings"
                                            className="flex items-center gap-2 px-4 py-2 text-gray-800 transition hover:bg-gray-100"
                                            onClick={() =>
                                                setDropdownOpen(false)
                                            }
                                        >
                                            <Settings size={16} /> Paramètres
                                        </Link>
                                        <Link
                                            href="/logout"
                                            method="post"
                                            className="flex w-full items-center gap-2 rounded bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                                            onClick={() =>
                                                setDropdownOpen(false)
                                            }
                                        >
                                            <LogOut size={16} /> Se déconnecter
                                        </Link>
                                    </>
                                )}
                            </div>
                        </Transition>
                    </div>
                </div>

                {/* Mobile nav links (centered) */}
                <div className="flex items-center justify-center space-x-6 py-2 font-medium text-white md:hidden">
                    {navLinks.map(
                        (link) =>
                            link.name !== 'Dashboard' && (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="transition hover:text-blue-400"
                                >
                                    {link.name}
                                </Link>
                            ),
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
