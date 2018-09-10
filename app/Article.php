<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    public function get_last_article($limit=100)
    {
        return $this->orderBy('created_at', 'desc')
        ->take($limit)
        ->get();
    }

    public function top_article_view($limit=100)
    {
        return $this->orderBy('view', 'desc')
        ->take($limit)
        ->get();
    }

    public function top_article_view_by_idCat($limit=100,$idCat)
    {
        return $this->orderBy('view', 'desc')
        ->where('categorie_id',$idCat)
        ->take($limit)
        ->get();
    }
}
