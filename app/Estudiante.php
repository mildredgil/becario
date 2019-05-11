<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model {
    
  protected $table = 'estudiante';
  
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

  public function solicitudes() {
    return $this->HasMany('App\Solicitud_Becaria');
  }
}