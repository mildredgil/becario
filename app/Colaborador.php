<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Colaborador extends Model
{
    protected $table = 'colaborador';
    public function departamento() {
        return $this->belongsTo('App\Departamento', 'id_departamento');
      }
}
