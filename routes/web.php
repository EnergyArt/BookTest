<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;

Route::get('/', function () {
    return Inertia::render('BookList');
})->name('bookList');

Route::prefix('/api/books')
->group(function() {
    Route::get('/', [BookController::class, 'GetBookList'])
    ->name('getBooks');
    Route::get('/{id}', [BookController::class, 'ShowBook'])
    ->name('showBook');
});
