<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Periodo extends Authenticatable
{

  protected $table = 'periodo';
  protected $fillable = ['id_periodo', 'year'];
  
  const INVIERNO  = 0;
  const FEB_JUN   = 1;
  const VERANO    = 2;
  const AGO_DIC   = 3;
}