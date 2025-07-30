<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Http\Resources\BookResource;

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

        return Inertia::render('BookInfo', [
            'book' => $book
        ]);
    }
}
