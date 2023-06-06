<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'App\Http\Controllers\NewsController@index');
Route::post('/news', 'App\Http\Controllers\NewsController@store')->middleware(['auth', 'verified'])->name('create.news');
Route::get('/news', 'App\Http\Controllers\NewsController@show')->middleware(['auth', 'verified'])->name('my.news');
Route::get('/news/edit', 'App\Http\Controllers\NewsController@edit')->middleware(['auth', 'verified'])->name('edit.news');
Route::post('/news/update', 'App\Http\Controllers\NewsController@update')->middleware(['auth', 'verified'])->name('update.news');
Route::post('/news/delete', 'App\Http\Controllers\NewsController@destroy')->middleware(['auth', 'verified'])->name('delete.news');

// Route::get('/welcome', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
