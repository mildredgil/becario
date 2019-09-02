<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
//use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
  use Notifiable;
  //use SoftDeletes;

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
      'assignable_type',
      'verification_code',
      'verified'
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

  /**
  * Route notifications for the mail channel.
  *
  * @return string
  */
  public function routeNotificationForMail()
    {
      return $this->assignable->email;
    }
}