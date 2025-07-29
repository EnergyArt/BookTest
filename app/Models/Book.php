<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'author',
        'year',
        'genre',
        'description'
    ];

    public function review(): HasMany
    {
        return $this->hasMany(Review::class, 'book_id', 'id');
    }
}
