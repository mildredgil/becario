<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Carrera extends Model {
   
  protected $table = 'carrera';
  public function escuela() {
    return $this->belongsTo('App\Escuela', 'id_escuela');
  }
}