<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;

class ReviewController extends Controller
{
    public function AddReview($id, Request $req) {
        $validatedData = $req->validate([
            'rating' => 'required|integer|min:1|max:5',
            'username' => 'required|string|max:50',
            'comment' => 'nullable|string'
        ]);

        $review = Review::create([
            'rating' => $validatedData['rating'],
            'username' => $validatedData['username'],
            'comment' => $validatedData['comment'],
            'book_id' => $id
        ]);

        $review->save();

        return response()->json([
            'success' => true
        ], 201);
    }
}
