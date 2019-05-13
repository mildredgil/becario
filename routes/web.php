<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\User;
use App\Estudiante;
use App\Administrador;
use App\Colaborador;
use App\Departamento;
use Illuminate\Http\Request;

Route::get('/', function () {
  error_log("INFO: get /");
  return redirect('/login');
});

Route::get('/login', function () {
  return view('login');
});

Route::get('/loginAdmin', function () {
  return view('loginAdmin');
});

Route::get('/homeAdministrator', function () {
  $estudiante = Estudiante::where('id', 3)->with("carrera", "solicitudesBecarias.colaborador.departamento")->first();

  return view('homeAdministrator', [
    'estudiante' => $estudiante
  ]);
});

Route::get('/homeColaborador', function () {
    $colaborador = Colaborador::where('id', 3)->with("departamento", "solicitudesBecarias.estudiante.carrera")->first();
  
    return view('homeColaborador', [
      'colaborador' => $colaborador
    ]);
});

Route::get('/homeEstudiante', function () {
  $estudiante = Estudiante::where('id', 3)->with("carrera", "solicitudesBecarias.colaborador.departamento")->first();
  
  return view('homeEstudiante', [
    'estudiante' => $estudiante
  ]);
});

Route::get('/homeAdministrador', function () {
  $estudiante = Estudiante::where('id', 3)->with("carrera", "solicitudesBecarias.colaborador.departamento")->first();
  
  return view('homeEstudiante', [
    'estudiante' => $estudiante
  ]);
});

Route::post('/get/login', 'Auth\LoginController@postLogin');	

Route::get('encrypt', function () {
  $estudiantes = Estudiante::where('id', '>', 0)->get();
  
  foreach($estudiantes as $estudiante) {
    $password = bcrypt($estudiante->password);
    $estudiante->contrasena = $password;
    //$estudiante->save();
  }
  dd($estudiantes);
});

Route::get('/estudiantes/users', function () {
  $estudiantes = Estudiante::where('id', '>', 0)->get();

  foreach($estudiantes as $estudiante) {
    $password = bcrypt($estudiante->contrasena);
    
    $user = User::create([
      'user_id' => $estudiante->id, 
      'username' => $estudiante->matricula,
      'password' => $password,
      'user_type' => User::ESTUDIANTE 
    ]);    

    var_dump($user);
  }
});

Route::get('/colaboradores/users', function () {
  $colaboradores = Colaborador::where('id', '>', 0)->get();

  foreach($colaboradores as $colaborador) {
    $password = bcrypt($colaborador->contrasena);
    
    $user = User::create([
      'user_id' => $colaborador->id, 
      'username' => $colaborador->nomina,
      'password' => $password,
      'user_type' => User::COLABORADOR
    ]);    

    var_dump($user);
  }
});

Route::get('/colaboradores/admin', function () {
  $colaboradores = Colaborador::where('id', '>', 0)->get();

  foreach($colaboradores as $colaborador) {
    $password = bcrypt($colaborador->contrasena);
    
    $user = User::create([
      'user_id' => $colaborador->id, 
      'username' => $colaborador->nomina,
      'password' => $password,
      'user_type' => User::COLABORADOR
    ]);    

    var_dump($user);
  }
});