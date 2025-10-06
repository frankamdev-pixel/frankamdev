import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import { login } from '@/routes';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

export default function Register() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <AuthLayout
      title="Create Your Account"
      description="Sign up quickly and start your journey"
    >
      <Head title="Register" />
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-8 md:p-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Create an Account
        </h2>
        <p className="text-center text-gray-500">Fill in your details to get started</p>

        <Form
          {...RegisteredUserController.store.form()}
          resetOnSuccess={['password', 'password_confirmation', 'profile_photo']}
          disableWhileProcessing
          className="flex flex-col gap-6"
          encType="multipart/form-data"
        >
          {({ processing, errors, data, setData }) => {
            useEffect(() => {
              if (data?.profile_photo instanceof File) {
                const url = URL.createObjectURL(data.profile_photo);
                setPreview(url);
                return () => URL.revokeObjectURL(url);
              } else {
                setPreview(null);
              }
            }, [data?.profile_photo]);

            return (
              <>
                <div className="grid gap-5">
                  {/* Name */}
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      autoFocus
                      name="name"
                      placeholder="John Doe"
                      className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <InputError message={errors.name} />
                  </div>

                  {/* Email */}
                  <div className="grid gap-2">
                    <Label htmlFor="email">Addresse Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      name="email"
                      placeholder="FrankamDev@email.com"
                      className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <InputError message={errors.email} />
                  </div>

                  {/* Password */}
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      required
                      name="password"
                      placeholder="••••••••"
                      className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <InputError message={errors.password} />
                  </div>

                  {/* Confirm Password */}
                  <div className="grid gap-2">
                    <Label htmlFor="password_confirmation">Confirm Password</Label>
                    <Input
                      id="password_confirmation"
                      type="password"
                      required
                      name="password_confirmation"
                      placeholder="••••••••"
                      className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <InputError message={errors.password_confirmation} />
                  </div>

                  {/* Profile Photo */}
                  <div className="grid gap-2">
                    <Label htmlFor="profile_photo">Profile Photo (optional)</Label>
                    <Input
                      id="profile_photo"
                      type="file"
                      accept="image/*"
                      name="profile_photo"
                      onChange={(e) => {
                        const file = e.target.files?.[0] ?? null;
                        setData('profile_photo', file);
                      }}
                    />
                    <InputError message={errors.profile_photo} />
                  </div>

                  {/* Photo Preview */}
                  {preview && (
                    <div className="flex items-center gap-4 mt-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <img
                        src={preview}
                        alt="Preview"
                        className="h-20 w-20 rounded-full object-cover border"
                      />
                      <div className="flex flex-col gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setData('profile_photo', null)}
                        >
                          Remove
                        </Button>
                        <Button
                          type="button"
                          variant="secondary"
                          size="sm"
                          onClick={() => document.getElementById('profile_photo')?.click()}
                        >
                          Change
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full mt-4 py-2 flex justify-center items-center gap-2"
                    disabled={processing}
                  >
                    {processing && <LoaderCircle className="h-5 w-5 animate-spin" />}
                    Create Account
                  </Button>
                </div>

                <p className="text-center text-gray-500 text-sm mt-4">
                  Already have an account?{' '}
                  <TextLink href={login()} className="text-indigo-600 font-medium">
                    Log in
                  </TextLink>
                </p>
              </>
            );
          }}
        </Form>
      </div>
    </AuthLayout>
  );
}







