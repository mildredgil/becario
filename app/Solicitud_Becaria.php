<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Solicitud_Becaria extends Model
{
    protected $table = 'solicitud_becaria';
    
    public function estudiante() {
        return $this->belongsTo('App\Estudiante', 'id_estudiante');
    }
}
