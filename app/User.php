<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{

  protected $table = 'users';
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'username', 
      'password', 
      'assignable_id', 
      'assignable_type'
  ];
  
  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
      'password', 'remember_token',
  ];

  const ADMINISTRADOR = 'App\Administrador';
  const ESTUDIANTE    = 'App\Estudiante';
  const COLABORADOR   = 'App\Colaborador';
  
  public function assignable() {
    return $this->morphTo();
  }
}