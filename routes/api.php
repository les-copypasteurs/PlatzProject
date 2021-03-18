<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Models\Comment;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('posts', PostController::class);
Route::resource('comments', CommentController::class);

// Route::resource('comments', 'CommentController', [
//     'except' => ['show', 'create', 'edit']
//     ]);

// Route::post('/comments/store', [CommentController::class, 'store']);

Route::get('/posts/{q?}', [PostController::class, 'index']);
// Route::get('/', [PostController::class, 'index']);
