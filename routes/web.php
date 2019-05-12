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

Route::get('/homeColaborador', function () {
    $estudiante = Estudiante::where('id', 3)->with("carrera", "solicitudesBecarias.colaborador.departamento")->first();
  
    return view('homeColaborador', [
      'estudiante' => $estudiante
    ]);
});

Route::get('/homeEstudiante', function () {
  $estudiante = Estudiante::where('id', 3)->with("carrera", "solicitudesBecarias.colaborador.departamento")->first();
  
  return view('homeEstudiante', [
    'estudiante' => $estudiante
  ]);
});

Route::get('/tasks', function () {
  return view('tasks', [
    'tasks' => Task::orderBy('created_at', 'asc')->get()
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

/**
    * Add New Task
    */
Route::post('/task', function (Request $request) {
    error_log("INFO: post /task");
    $validator = Validator::make($request->all(), [
        'name' => 'required|max:255',
    ]);

    if ($validator->fails()) {
        error_log("ERROR: Add task failed.");
        return redirect('/')
            ->withInput()
            ->withErrors($validator);
    }

    $task = new Task;
    $task->name = $request->name;
    $task->save();

    return redirect('/');
});

/**
    * Delete Task
    */
Route::delete('/task/{id}', function ($id) {
    error_log('INFO: delete /task/'.$id);
    Task::findOrFail($id)->delete();

    return redirect('/');
});
