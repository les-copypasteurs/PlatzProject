<?php

namespace Database\Factories;

use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\Factory;

class works_has_tagsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Model::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
        'post_id' => $this->faker->numberBetween($min = 1, $max = 40),
        'categorie_id' => $this->faker->numberBetween($min = 1, $max = 10),
        ];
    }
}
