<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Periodo extends Authenticatable
{

  protected $table = 'periodo';
  
  const INVIERNO  = 1;
  const FEB_JUN   = 2;
  const VERANO    = 3;
  const AGO_DIC   = 4;
}