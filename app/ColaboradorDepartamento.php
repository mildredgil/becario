<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ColaboradorDepartamento extends Model
{
  use SoftDeletes;
  protected $table = 'colaborador_departamento';

  protected $fillable = [
    'id_colaborador',
    'id_departamento',
    'requiere_becarios'
  ];
    
  public function colaborador() {
    return $this->belongsTo('App\Colaborador', 'id_colaborador');
  }

  public function departamento() {
    return $this->belongsTo('App\Departamento', 'id_departamento');
  }
}