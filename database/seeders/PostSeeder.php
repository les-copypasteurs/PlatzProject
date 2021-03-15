<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Post::factory(40)->create();

        foreach(range(1, 40) as $index)
        {
            \DB::table('posts_has_categories')->insert([
                'categorie_id' => rand(1,10),
                'post_id' => $index
            ]);
        }
    }
}
