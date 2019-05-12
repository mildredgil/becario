<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Estudiante extends Authenticatable {
  
  use SoftDeletes;
  protected $table = 'estudiante';
  protected $hidden = ['password', 'remember_token'];
  
  const HIJOPROFESOR  = 1;
  const ORQUESTA      = 2;
  const DEPORTIVA     = 3;
  const ACADEMICA     = 4;
  const LIDERAZGO     = 5;
  const CULTURAL      = 6;
  const LIDERMANANA   = 7;
  
  const ASIGNADO      = 1;
  const NO_ASIGNADO   = 0;
  
  public function carrera() {
    return $this->belongsTo('App\Carrera', 'id_carrera');
  }

  public function solicitudesBecarias() {
    return $this->hasMany('App\Solicitud_Becaria', 'id_estudiante')->orderBy('fecha_asignacion', 'desc');
  }
}