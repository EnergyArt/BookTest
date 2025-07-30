<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Review;
use App\Http\Resources\BookResource;
use App\Http\Resources\ReviewResource;

class BookController extends Controller
{
    public function GetBookList() {

        $books = BookResource::collection(Book::all());

        return response()->json([
            'books' => $books
        ]);
    }

    public function ShowBook($id) {
        $book = Book::where('id', $id)->first();
        $reviews = ReviewResource::collection(
            Review::where('book_id', $id)->get()
        )->toArray(request());
        
        return Inertia::render('BookInfo', [
            'book' => $book,
            'reviews' => $reviews
        ]);
    }
}
