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

//Route::get('/home', 'EstudianteController@index')->name('homeEstudiante');

Route::get('/login', function () {
  if (Auth::check()) {
    return redirect('/homeEstudiante');
  }
  
  return view('login');
})->name('login');

Route::post('/logout', 'Auth\LoginController@logout');	
Route::post('/get/login', 'Auth\LoginController@postLogin');	

Route::group(['middleware' => 'auth'], function () {
  
  Route::get('/homeU', function () {
    $user = User::find(3);

    $assignable = $user->assignable;
    dd($assignable);
    $estudiante = User::where('id', 3)->user;
    
    return view('homeAdministrator', [
      'estudiante' => $estudiante
    ]);
  });

  Route::get('/homeEstudiante', 'EstudianteController@index');	
  /*Route::get('/homeEstudiante', function () {
    $user = Auth::user();
    dd($user);
    $estudiante = Estudiante::where('id', 3)->with("carrera", "solicitudesBecarias.colaborador.departamento")->first();

    return view('homeEstudiante', [
      'estudiante' => $estudiante
    ]);
  });*/

  Route::get('/homeAdministrator', function () {
    $estudiante = Estudiante::where('id', 3)->with("carrera", "solicitudesBecarias.colaborador.departamento")->first();

    return view('homeAdministrator', [
      'estudiante' => $estudiante
    ]);
  });

  Route::get('/homeColaborador', function () {
      $estudiante = Estudiante::where('id', 3)->with("carrera", "solicitudesBecarias.colaborador.departamento")->first();
    
      return view('homeColaborador', [
        'estudiante' => $estudiante
      ]);
  });
});

Route::get('encrypt', function () {
  $estudiantes = Estudiante::where('id', '>', 0)->get();
  
  foreach($estudiantes as $estudiante) {
    $password = bcrypt($estudiante->password);
    $estudiante->contrasena = $password;
  }
  dd($estudiantes);
});

Route::get('/estudiantes/users', function () {
  $estudiantes = Estudiante::where('id', '>', 0)->get();

  foreach($estudiantes as $estudiante) {
    $password = bcrypt($estudiante->contrasena);
    
    $user = User::create([
      'assignable_id' => $estudiante->id, 
      'username' => $estudiante->matricula,
      'password' => $password,
      'assignable_type' => User::ESTUDIANTE 
    ]);    

    var_dump($user);
  }
});

Route::get('/colaboradores/users', function () {
  $colaboradores = Colaborador::where('id', '>', 0)->get();

  foreach($colaboradores as $colaborador) {
    $password = bcrypt($colaborador->contrasena);
    
    $user = User::create([
      'assignable_id' => $colaborador->id, 
      'username' => $colaborador->nomina,
      'password' => $password,
      'assignable_type' => User::COLABORADOR
    ]);    

    var_dump($user);
  }
});

Route::get('/admins/users', function () {
  $colaboradores = Colaborador::where('id', '>', 0)->get();

  foreach($colaboradores as $colaborador) {
    $password = bcrypt($colaborador->contrasena);
    
    $user = User::create([
      'assignable_id' => $colaborador->id, 
      'username' => $colaborador->nomina,
      'password' => $password,
      'assignable_type' => User::COLABORADOR
    ]);    

    var_dump($user);
  }
});