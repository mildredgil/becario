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
    $user = Auth::user();
    switch($user->assignable_type){
      case User::ESTUDIANTE:
        return redirect()->route('homeEstudiante');
        break;
      case User::COLABORADOR:
        return redirect()->route('homeColaborador');
        break;
      case User::ADMINISTRADOR:
        return redirect()->route('homeAdministrador');
        break;
    }
  }
  
  return view('login');
})->name('login');

Route::get('/loginAdmin', function () {
  if (Auth::check()) {
    $user = Auth::user();
    switch($user->assignable_type){
      case User::ESTUDIANTE:
        return redirect()->route('homeEstudiante');
        break;
      case User::COLABORADOR:
        return redirect()->route('homeColaborador');
        break;
      case User::ADMINISTRADOR:
        return redirect()->route('homeAdministrador');
        break;
    }
  }
  
  return view('loginAdmin');
})->name('loginAdmin');

Route::get('/loginColaborador', function () {
  if (Auth::check()) {
    $user = Auth::user();
    switch($user->assignable_type){
      case User::ESTUDIANTE:
        return redirect()->route('homeEstudiante');
        break;
      case User::COLABORADOR:
        return redirect()->route('homeColaborador');
        break;
      case User::ADMINISTRADOR:
        return redirect()->route('homeAdministrador');
        break;
    }
  }
  
  return view('loginColaborador');
})->name('loginColaborador');

Route::get('/home', function () {
  if (Auth::check()) {
    $user = Auth::user();
    
    switch($user->assignable_type){
      case User::ESTUDIANTE:
        return redirect()->route('homeEstudiante');
        break;
      case User::COLABORADOR:
        return redirect()->route('homeColaborador');
        break;
      case User::ADMINISTRADOR:
        return redirect()->route('homeAdministrador');
        break;
    }
  } else {
    return redirect()->route('login');
  }
})->name('home');

Route::post('/logout', 'Auth\LoginController@logout');	
Route::post('/get/login', 'Auth\LoginController@postLogin');	

Route::group(['middleware' => 'auth'], function () {
  //vistas de los home de usuarios
  Route::get('/homeEstudiante',     'EstudianteController@index')->name('homeEstudiante');	
  Route::get('/homeColaborador',    'ColaboradorController@index')->name('homeColaborador');		
  Route::get('/homeAdministrador',  'AdministradorController@index')->name('homeAdministrador');		
  
  //Guardar perfiles
  Route::post('/student/save/profile',  'EstudianteController@saveProfile');	
  Route::post('/colab/save/profile',    'ColaboradorController@saveProfile');	
  
  //Guardar evaluaciones
  Route::post('/save/evaluations',      'ColaboradorController@saveEvaluations');
  
  //Crear y borrar asignaciones
  Route::post('/create/assignments',    'AdministradorController@createAssignment');
  Route::post('/delete/assignments',    'AdministradorController@deleteAssignment');

  //Aceptar y rechazar solicitudes
  Route::post('/accept/request',    'AdministradorController@acceptRequest');
  Route::post('/deny/request',    'AdministradorController@denyRequest');

  //Crear solicitud
  Route::post('/create/request',    'ColaboradorController@createRequest');
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

Route::get('/algoritmo/users', function () {
  $colaboradores = Colaborador::where('id', '>', 0)->get();
  $estudiantes = Estudiante::where('id', '>', 0)->get();  
});


Route::get('/colaboradores/admin', function () {
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

Route::get('/user/admin', function () {
  $administradores = User::whereIn('id', [48])->get();

  $user = User::create([
    'assignable_id' => 1, 
    'username' => 'admin',
    'password' => bcrypt('admin'),
    'assignable_type' => User::ADMINISTRADOR
  ]); 

  dd($user);
  //$administradores = User::where('assignable_type', '=', User::ADMINISTRADOR)->get();
  
  /*foreach($administradores as $administrador) {
    $administrador->password = bcrypt($administrador->contrasena);
    $administrador->save();
    var_dump($administrador);
  }
  dd($administradores);*/
});