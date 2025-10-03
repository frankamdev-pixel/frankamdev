// import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';


// import InputError from '@/components/input-error';
// import TextLink from '@/components/text-link';
// import { Button } from '@/components/ui/button';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import AuthLayout from '@/layouts/auth-layout';
// import { register } from '@/routes';
// import { request } from '@/routes/password';
// import { Form, Head } from '@inertiajs/react';
// import { LoaderCircle } from 'lucide-react';

// interface LoginProps {
//     status?: string;
//     canResetPassword: boolean;
// }

// export default function Login({ status, canResetPassword }: LoginProps) {
//     return (
//         <AuthLayout
//             title="Log in to your account"
//             description="Enter your email and password below to log in"
//         >
//             <Head title="Log in" />

//             <Form
//                 {...AuthenticatedSessionController.store.form()}
//                 resetOnSuccess={['password']}
//                 className="flex flex-col gap-6"
//             >
//                 {({ processing, errors }) => (
//                     <>
//                         <div className="grid gap-6">
//                             <div className="grid gap-2">
//                                 <Label htmlFor="email">Email address</Label>
//                                 <Input
//                                     id="email"
//                                     type="email"
//                                     name="email"
//                                     required
//                                     autoFocus
//                                     tabIndex={1}
//                                     autoComplete="email"
//                                     placeholder="email@example.com"
//                                 />
//                                 <InputError message={errors.email} />
//                             </div>

//                             <div className="grid gap-2">
//                                 <div className="flex items-center">
//                                     <Label htmlFor="password">Password</Label>
//                                     {canResetPassword && (
//                                         <TextLink
//                                             href={request()}
//                                             className="ml-auto text-sm"
//                                             tabIndex={5}
//                                         >
//                                             Forgot password?
//                                         </TextLink>
//                                     )}
//                                 </div>
//                                 <Input
//                                     id="password"
//                                     type="password"
//                                     name="password"
//                                     required
//                                     tabIndex={2}
//                                     autoComplete="current-password"
//                                     placeholder="Password"
//                                 />
//                                 <InputError message={errors.password} />
//                             </div>

//                             <div className="flex items-center space-x-3">
//                                 <Checkbox
//                                     id="remember"
//                                     name="remember"
//                                     tabIndex={3}
//                                 />
//                                 <Label htmlFor="remember">Remember me</Label>
//                             </div>

//                             <Button
//                                 type="submit"
//                                 className="mt-4 w-full"
//                                 tabIndex={4}
//                                 disabled={processing}
//                                 data-test="login-button"
//                             >
//                                 {processing && (
//                                     <LoaderCircle className="h-4 w-4 animate-spin" />
//                                 )}
//                                 Log in
//                             </Button>
//                         </div>

//                         <div className="text-center text-sm text-muted-foreground">
//                             Don't have an account?{' '}
//                             <TextLink href={register()} tabIndex={5}>
//                                 Sign up
//                             </TextLink>
//                         </div>
//                     </>
//                 )}
//             </Form>

//             {status && (
//                 <div className="mb-4 text-center text-sm font-medium text-green-600">
//                     {status}
//                 </div>
//             )}
//         </AuthLayout>
//     );
// }

// // import React from 'react';

// // const LoginForm = () => {
// //   return (
// //     <div className="bg-gray-900 text-white h-screen w-screen flex items-center justify-center p-6">
// //       <div className="w-full max-w-md">
// //         <button className="mb-4 text-blue-400 hover:text-blue-300">&larr; Go back</button>
// //         <div className="text-center">
// //           <img src="https://via.placeholder.com/40" alt="Logo" className="mx-auto mb-4" />
// //           <h2 className="text-2xl font-bold">Sign in to your account</h2>
// //           <p className="text-blue-400 mt-2">Don't have an account? <span className="underline">Create one</span></p>
// //         </div>
// //         <div className="mt-6">
// //           <button className="w-full bg-gray-800 text-white py-2 rounded flex items-center justify-center mb-4">
// //             <span className="mr-2">&times;</span> Sign in with SSO
// //           </button>
// //           <div className="text-center text-gray-500 mb-4">OR</div>
// //           <form>
// //             <div className="mb-4">
// //               <label className="block text-sm mb-1">Email</label>
// //               <input type="email" placeholder="your.email@provider.com" className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-sm mb-1">Password</label>
// //               <input type="password" placeholder="••••••••" className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
// //               <a href="#" className="text-blue-400 text-sm float-right mt-1">Forgot?</a>
// //             </div>
// //             <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">Sign in</button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginForm;

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
            backgroundSize: '25px 25px', 
          }}
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;