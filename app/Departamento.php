<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Departamento extends Model
{
    protected $table = 'departamento';

    
  public function escuela() {
    return $this->belongsTo('App\Escuela', 'id_escuela');
  }
}