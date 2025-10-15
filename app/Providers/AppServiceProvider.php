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
  if ($this->app->environment('local')) {
   $this->app->register(\Barryvdh\Debugbar\ServiceProvider::class);
  }
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
