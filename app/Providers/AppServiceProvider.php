<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
 /**
  * Register any application services.
  */
 public function register(): void
 {
  //
 }

 /**
  * Bootstrap any application services.
  */
 public function boot(): void
 {
  Inertia::share([
   'auth' => function () {
    $user = Auth::user();
    return [
     'name' => $user?->name,
     'email' => $user?->email,
     'avatar' => $user?->avatar ?? '/avatars/default.jpg',
    ];
   },
  ]);
 }
}
