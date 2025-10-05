import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState, Fragment } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const { auth } = usePage().props; // auth.user contient l'utilisateur connecté
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Formations', href: '/formations' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];
console.log(auth.user.profile_photo_url);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all ${
        scrolled
          ? 'border-b border-gray-700/50 bg-black/30 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            Frankam<span className="text-white">Dev</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 text-white font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-blue-400 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* User / Auth */}
          <div className="hidden md:flex items-center space-x-4 relative">
            {auth.user ? (
              <>
                {/* Avatar with dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 focus:outline-none"
                  >
                    {auth.user.profile_photo_url ? (
                      <img
                        src={auth.user.profile_photo_url}
                        alt={auth.user.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-blue-600"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold">
                        {auth.user.name.charAt(0)}
                      </div>
                    )}
                    <ChevronDown className="text-white" size={16} />
                  </button>

                  <Transition
                    show={dropdownOpen}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 ring-1 ring-black ring-opacity-5 z-50">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Settings
                      </Link>
                      <Link
                        href="/logout"
                        method="post"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Logout
                      </Link>
                    </div>
                  </Transition>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-lg border border-blue-600 px-4 py-2 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                >
                  Connexion
                </Link>
                <Link
                  href="/register"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                  Inscription
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        show={mobileOpen}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div className="md:hidden bg-black/90 backdrop-blur-md px-4 pt-2 pb-4 space-y-2 text-white font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block hover:text-blue-400 transition"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {auth.user ? (
            <>
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-800 rounded transition"
                onClick={() => setMobileOpen(false)}
              >
                Profile
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 hover:bg-gray-800 rounded transition"
                onClick={() => setMobileOpen(false)}
              >
                Settings
              </Link>
              <Link
                href="/logout"
                method="post"
                className="block px-4 py-2 hover:bg-red-600 rounded bg-red-500 transition"
                onClick={() => setMobileOpen(false)}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="block px-4 py-2 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
                onClick={() => setMobileOpen(false)}
              >
                Connexion
              </Link>
              <Link
                href="/register"
                className="block px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700 transition"
                onClick={() => setMobileOpen(false)}
              >
                Inscription
              </Link>
            </>
          )}
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
