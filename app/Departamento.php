<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Departamento extends Model
{
  use SoftDeletes;
    protected $table = 'departamento';

    
  public function escuela() {
    return $this->belongsTo('App\Escuela', 'id_escuela');
  }
}