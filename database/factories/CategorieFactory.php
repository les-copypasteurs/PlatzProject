<?php

namespace Database\Factories;

use App\Models\Categorie;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategorieFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Categorie::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->randomElement(['psd', 'ai', 'ai2', 'eye', 'font', 'photo', 'themes', 'burst']),
            'created_at' => $this->faker->dateTimeBetween('-20 days', now()),        ];
    }
}
