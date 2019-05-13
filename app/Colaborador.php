<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Colaborador extends Model
{   
  use SoftDeletes;
  protected $table = 'colaboradores';
  const CATEDRA        = 1;
  const PLANTA         = 2;
  const ADMINISTRATIVO = 3;

  public function departamento() {
    return $this->belongsTo('App\Departamento', 'id_departamento');
  }
}