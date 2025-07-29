<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3),
            'author' => fake()->name(),
            'year' => fake()->numberBetween(1800, 2025),
            'genre' => fake()->randomElement(['Роман', 'Фантастика', 'Детектив', 'Драма']),
            'description' => fake()->paragraph(2),
        ];
    }
}
