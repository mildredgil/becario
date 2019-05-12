<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{
    protected $table = 'administrator';
    public function users() {
        return $this->belongsTo('App\User', 'id_user');
      }
}
