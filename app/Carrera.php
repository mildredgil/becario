<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Carrera extends Model {
   
  use SoftDeletes;
  protected $table = 'carrera';

  protected $fillable = [
    'siglas_carrera',
  ];

  public function escuela() {
    return $this->belongsTo('App\Escuela', 'id_escuela');
  }
}