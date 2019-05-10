<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Colaborador extends Model
{
    protected $table = 'colaborador';
    const CATEDRA        = 1;
    const PLANTA         = 2;
    const ADMINISTRATIVO = 3;
    public function departamento() {
        return $this->belongsTo('App\Departamento', 'id_departamento');
      }
}
