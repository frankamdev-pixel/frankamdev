// const LoginForm = () => {
//     return (
//         <div className="flex h-screen w-screen items-center justify-center bg-gray-900 p-6 text-white">
//             <div className="w-full max-w-md">
//                 <button className="mb-4 text-blue-400 hover:text-blue-300">
//                     &larr; Go back
//                 </button>
//                 <div className="text-center">
//                     <img
//                         src="https://via.placeholder.com/40"
//                         alt="Logo"
//                         className="mx-auto mb-4"
//                     />
//                     <h2 className="text-2xl font-bold">
//                         Sign in to your account
//                     </h2>
//                     <p className="mt-2 text-blue-400">
//                         Don't have an account?{' '}
//                         <span className="underline">Create one</span>
//                     </p>
//                 </div>
//                 <div className="mt-6">
//                     <button className="mb-4 flex w-full items-center justify-center rounded bg-gray-800 py-2 text-white">
//                         <span className="mr-2">&times;</span> Sign in with SSO
//                     </button>
//                     <div className="mb-4 text-center text-gray-500">OR</div>
//                     <form>
//                         <div className="mb-4">
//                             <label className="mb-1 block text-sm">Email</label>
//                             <input
//                                 type="email"
//                                 placeholder="your.email@provider.com"
//                                 className="w-full rounded border border-gray-700 bg-gray-800 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="mb-1 block text-sm">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 placeholder="••••••••"
//                                 className="w-full rounded border border-gray-700 bg-gray-800 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                             />
//                             <a
//                                 href="#"
//                                 className="float-right mt-1 text-sm text-blue-400"
//                             >
//                                 Forgot?
//                             </a>
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-500"
//                         >
//                             Sign in
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginForm;


import React from 'react';

const GridBackground = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* L'élément pour l'effet de grille */}
      <div className="absolute inset-0 z-0 opacity-10">
        {/* L'effet de grille est créé par une très grande image de fond répétée */}
        {/* Note: Dans un environnement réel, on utiliserait une image ou un SVG généré pour plus de performance */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '25px 25px', // Taille de la grille
          }}
        />
      </div>

      {/* Le contenu du composant (la page de connexion) est positionné au-dessus de la grille */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;