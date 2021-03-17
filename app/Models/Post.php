<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    /**
     * GETTER de la categorie à qui appartient ce post.
     */
    public function categorie(){
        return $this->belongsToMany('App\Models\Categorie', 'posts_has_categories');
    }
    /**
     * GETTER du user à qui appartient ce post.
     */
    public function user(){
        return $this->belongsTo('App\Models\User');
    }
    /**
     * GETTER des comments de ce post.
     */
    public function comment() {
        return $this->hasMany('App\Models\Comment');
    }
}
