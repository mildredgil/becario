<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ColaboradorDepartamento extends Model
{
    protected $table = 'colaborador_departamento';

    
  public function colaborador() {
    return $this->belongsTo('App\Colaborador', 'id_colaborador');
  }

  public function departamento() {
    return $this->belongsTo('App\Departamento', 'id_departamento');
  }
}