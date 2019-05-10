<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Solicitud_Becaria extends Model
{
    protected $table = 'solicitud_becaria';
    const INVIERNO = 1;
    const FEB_JUN  = 2;
    const VERANO   = 3;
    const AGO_DIC  = 4;
    public function estudiante() {
        return $this->belongsTo('App\Estudiante', 'id_estudiante');
    }
}
