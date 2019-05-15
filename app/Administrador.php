<?php

namespace App;

use App\Solitud_Becaria;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Administrador extends Model {
  protected $table = 'administrador';
  protected $hidden = ['password'];
  protected $appends = array("solicitudes");
  
  public function users() {
    return $this->belongsTo('App\User', 'id_user');
  }

  public function getSolicitudesAttribute() {
    return Solicitud_Becaria::where("aprovada", 1)->with("estudiante.carrera", "colaborador.departamento")->get();
  }

  /*public function getAsignacionesAttribute() {
    return Solicitud_Becaria::where("aprovada", 0)->get();
  }*/
}
