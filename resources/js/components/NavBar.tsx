// import { Transition } from '@headlessui/react';
// import { Link, usePage } from '@inertiajs/react';
// import { ChevronDown, Menu, X } from 'lucide-react';
// import { Fragment, useEffect, useState } from 'react';

// const Navbar = () => {
//     const { auth } = usePage().props; // auth.user contient l'utilisateur connecté
//     const [scrolled, setScrolled] = useState(false);
//     const [mobileOpen, setMobileOpen] = useState(false);
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 10);
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const navLinks = [
//         { name: 'Accueil', href: '/' },
//         { name: 'Formations', href: '/formations' },
//         { name: 'À propos', href: '/about' },
//         { name: 'Contact', href: '/contact' },
//         { name: 'Dashboard', href: '/dashboard' },
//     ];
//     console.log(auth.user.profile_photo_url);

//     return (
//         <nav
//             className={`fixed top-0 left-0 z-50 w-full transition-all ${
//                 scrolled
//                     ? 'border-b border-gray-700/50 bg-black/30 backdrop-blur-md'
//                     : 'bg-transparent'
//             }`}
//         >
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                 <div className="flex h-16 items-center justify-between">
//                     {/* Logo */}
//                     <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
//                         Frankam<span className="text-white">Dev</span>
//                     </div>

//                     {/* Desktop links */}
//                     <div className="hidden space-x-8 font-medium text-white md:flex">
//                         {navLinks.map((link) => (
//                             <Link
//                                 key={link.name}
//                                 href={link.href}
//                                 className="transition hover:text-blue-400"
//                             >
//                                 {link.name}
//                             </Link>
//                         ))}
//                     </div>

//                     {/* User / Auth */}
//                     <div className="relative hidden items-center space-x-4 md:flex">
//                         {auth.user ? (
//                             <>
//                                 {/* Avatar with dropdown */}
//                                 <div className="relative">
//                                     <button
//                                         onClick={() =>
//                                             setDropdownOpen(!dropdownOpen)
//                                         }
//                                         className="flex items-center gap-2 focus:outline-none"
//                                     >
//                                         {auth.user.profile_photo_url ? (
//                                             <img
//                                                 src={
//                                                     auth.user.profile_photo_url
//                                                 }
//                                                 alt={auth.user.name}
//                                                 className="h-10 w-10 rounded-full border-2 border-blue-600 object-cover"
//                                             />
//                                         ) : (
//                                             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 font-bold text-white">
//                                                 {auth.user.name.charAt(0)}
//                                             </div>
//                                         )}
//                                         <ChevronDown
//                                             className="text-white"
//                                             size={16}
//                                         />
//                                     </button>

//                                     <Transition
//                                         show={dropdownOpen}
//                                         as={Fragment}
//                                         enter="transition ease-out duration-200"
//                                         enterFrom="opacity-0 translate-y-1"
//                                         enterTo="opacity-100 translate-y-0"
//                                         leave="transition ease-in duration-150"
//                                         leaveFrom="opacity-100 translate-y-0"
//                                         leaveTo="opacity-0 translate-y-1"
//                                     >
//                                         <div className="ring-opacity-5 absolute right-0 z-50 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black">
//                                             <Link
//                                                 href="/profile"
//                                                 className="block px-4 py-2 text-gray-800 transition hover:bg-gray-100"
//                                                 onClick={() =>
//                                                     setDropdownOpen(false)
//                                                 }
//                                             >
//                                                 <div className="flex justify-between">
//                                                     {auth.user.name}
//                                                     <span>👋</span> {''}
//                                                 </div>
//                                             </Link>
//                                             <div className="h-[1px] w-full bg-black px-2" />
//                                             <Link
//                                                 href="/profile"
//                                                 className="block px-4 py-2 text-gray-800 transition hover:bg-gray-100"
//                                                 onClick={() =>
//                                                     setDropdownOpen(false)
//                                                 }
//                                             >
//                                                 Profile
//                                             </Link>
//                                             <Link
//                                                 href="/dashboard"
//                                                 className="block px-4 py-2 text-gray-800 transition hover:bg-gray-100"
//                                                 onClick={() =>
//                                                     setDropdownOpen(false)
//                                                 }
//                                             >
//                                                 Tableau de bord
//                                             </Link>
//                                             <Link
//                                                 href="/settings"
//                                                 className="block px-4 py-2 text-gray-800 transition hover:bg-gray-100"
//                                                 onClick={() =>
//                                                     setDropdownOpen(false)
//                                                 }
//                                             >
//                                                 Parametres
//                                             </Link>
//                                             <Link
//                                                 href="/logout"
//                                                 method="post"
//                                                 className="rounded-10xl text-bold block w-full bg-red-400 px-4 py-2 text-gray-800 transition hover:bg-gray-100"
//                                                 onClick={() =>
//                                                     setDropdownOpen(false)
//                                                 }
//                                             >
//                                                 Se deconnecter
//                                             </Link>
//                                         </div>
//                                     </Transition>
//                                 </div>
//                             </>
//                         ) : (
//                             <>
//                                 <Link
//                                     href="/login"
//                                     className="rounded-lg border border-blue-600 px-4 py-2 text-blue-600 transition hover:bg-blue-600 hover:text-white"
//                                 >
//                                     Connexion
//                                 </Link>
//                                 <Link
//                                     href="/register"
//                                     className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
//                                 >
//                                     Inscription
//                                 </Link>
//                             </>
//                         )}
//                     </div>

//                     {/* Mobile menu button */}
//                     <div className="flex items-center md:hidden">
//                         <button
//                             onClick={() => setMobileOpen(!mobileOpen)}
//                             className="text-2xl text-white focus:outline-none"
//                         >
//                             {mobileOpen ? <X /> : <Menu />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile menu */}
//             <Transition
//                 show={mobileOpen}
//                 as={Fragment}
//                 enter="transition ease-out duration-200"
//                 enterFrom="opacity-0 -translate-y-2"
//                 enterTo="opacity-100 translate-y-0"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 translate-y-0"
//                 leaveTo="opacity-0 -translate-y-2"
//             >
//                 <div className="space-y-2 bg-black/90 px-4 pt-2 pb-4 font-medium text-white backdrop-blur-md md:hidden">
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.name}
//                             href={link.href}
//                             className="block transition hover:text-blue-400"
//                             onClick={() => setMobileOpen(false)}
//                         >
//                             {link.name}
//                         </Link>
//                     ))}

//                     {auth.user ? (
//                         <>
//                             <Link
//                                 href="/profile"
//                                 className="block rounded px-4 py-2 transition hover:bg-gray-800"
//                                 onClick={() => setMobileOpen(false)}
//                             >
//                                 Profile
//                             </Link>
//                             <Link
//                                 href="/settings"
//                                 className="block rounded px-4 py-2 transition hover:bg-gray-800"
//                                 onClick={() => setMobileOpen(false)}
//                             >
//                                 Settings
//                             </Link>
//                             <Link
//                                 href="/logout"
//                                 method="post"
//                                 className="block rounded bg-red-500 px-4 py-2 transition hover:bg-red-600"
//                                 onClick={() => setMobileOpen(false)}
//                             >
//                                 Logout
//                             </Link>
//                         </>
//                     ) : (
//                         <>
//                             <Link
//                                 href="/login"
//                                 className="block rounded border border-blue-600 px-4 py-2 transition hover:bg-blue-600 hover:text-white"
//                                 onClick={() => setMobileOpen(false)}
//                             >
//                                 Connexion
//                             </Link>
//                             <Link
//                                 href="/register"
//                                 className="block rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
//                                 onClick={() => setMobileOpen(false)}
//                             >
//                                 Inscription
//                             </Link>
//                         </>
//                     )}
//                 </div>
//             </Transition>
//         </nav>
//     );
// };

// export default Navbar;


import { Transition } from '@headlessui/react';
import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, Home, BookOpen, Info, Mail, User, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import { Fragment, useEffect, useState } from 'react';

const Navbar = () => {
  const { auth } = usePage().props;
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '/', icon: <Home size={16} /> },
    { name: 'Formations', href: '/formations', icon: <BookOpen size={16} /> },
    { name: 'À propos', href: '/about', icon: <Info size={16} /> },
    { name: 'Contact', href: '/contact', icon: <Mail size={16} /> },
    { name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full transition-all ${scrolled ? 'border-b border-gray-700/50 bg-black/30 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            Frankam<span className="text-white">Dev</span>
          </div>

          {/* Dropdown */}
          <div className="relative ml-4">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 focus:outline-none text-white"
            >
              {auth.user?.profile_photo_url ? (
                <img
                  src={auth.user.profile_photo_url}
                  alt={auth.user.name}
                  className="h-10 w-10 rounded-full border-2 border-blue-600 object-cover"
                />
              ) : auth.user ? (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 font-bold text-white">
                  {auth.user.name.charAt(0)}
                </div>
              ) : (
                <div className="px-4 py-2 bg-blue-600 rounded text-white">Menu</div>
              )}
              <ChevronDown className="text-white" size={16} />
            </button>

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
              <div className="absolute right-0 z-50 mt-2 w-60 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 py-2">
                
                {/* Greeting */}
                {auth.user && (
                  <div className="px-4 py-3 bg-blue-50 rounded-t-lg text-gray-800 font-semibold text-sm">
                    👋 Salut, {auth.user.name} !
                  </div>
                )}

                {/* Navigation links */}
                {navLinks.map(link => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {link.icon} {link.name}
                  </Link>
                ))}

                {auth.user && (
                  <>
                    <div className="border-t border-gray-200 my-1" />
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <User size={16} /> Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <Settings size={16} /> Paramètres
                    </Link>
                    <Link
                      href="/logout"
                      method="post"
                      className="flex items-center gap-2 w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <LogOut size={16} /> Se déconnecter
                    </Link>
                  </>
                )}

                {!auth.user && (
                  <>
                    <div className="border-t border-gray-200 my-1" />
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Connexion
                    </Link>
                    <Link
                      href="/register"
                      className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Inscription
                    </Link>
                  </>
                )}
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
