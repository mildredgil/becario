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
use App\ColaboradorDepartamento;
use App\Departamento;
use App\Solicitud_Becaria;
use Illuminate\Http\Request;
use App\Notifications\InicioPeriodo;
use App\Notifications\estudianteAsignacion;
use App\Notifications\colaboradorAsignacion;

Route::get('/', function () {
  error_log("INFO: get /");
  return redirect('/home');
}); 

//Route::get('/home', 'EstudianteController@index')->name('homeEstudiante');
Route::get('/verify/{verification_code}', 'UserController@verifyView')->name('verify');		

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
Route::post('/register', 'Auth\RegisterController@register');

Route::group(['middleware' => 'auth'], function () {
  
  //vistas de los home de usuarios
  Route::get('/homeEstudiante',     'EstudianteController@index')->name('homeEstudiante');	
  Route::get('/homeColaborador',    'ColaboradorController@index')->name('homeColaborador');		
  Route::get('/homeAdministrador',  'AdministradorController@index')->name('homeAdministrador');		

  //vistas admin
  Route::get('/reportes',       'AdministradorController@showReporte')->name('reporte');	
  Route::get('/estadisticas',   'AdministradorController@showEstadisticas')->name('estadisticas');		
  Route::get('/configuraciones','AdministradorController@showConfiguraciones')->name('configuraciones');		
  
  //Guardar perfiles
  Route::post('/student/save/profile',  'EstudianteController@saveProfile');	
  Route::post('/colab/save/profile',    'ColaboradorController@saveProfile');	
  
  //Guardar evaluaciones
  Route::post('/save/evaluations',      'ColaboradorController@saveEvaluations');
  Route::get('/evaluacionEstudiante',     'ColaboradorController@mostrarEvaluacion');
  
  //Crear y borrar asignaciones
  Route::post('/create/assignments',    'AdministradorController@createAssignment');
  Route::post('/delete/assignments',    'AdministradorController@deleteAssignment');

  //Aceptar y rechazar solicitudes
  Route::post('/accept/request',    'AdministradorController@acceptRequest');
  Route::post('/deny/request',    'AdministradorController@denyRequest');

  //Crear solicitud
  Route::post('/create/request',    'ColaboradorController@createRequest');

  //admin only
  Route::post('/new/period',      'PeriodoController@store');
  Route::post('/period',          'PeriodoController@getPeriod');
  Route::post('/csv/file',        'ConfiguracionesController@csvFile');

  Route::post('/delete/period',   'ConfiguracionesController@deleteDB');
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

Route::get('/new/admin', function() {
  $user = User::create([
    'assignable_id' => 1, 
    'username' => 'admin',
    'password' => bcrypt('admin'),
    'assignable_type' => User::ADMINISTRADOR,
    'verification_code' => '',
    'verified' => 1,
  ]); 

} );

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

Route::get('/prueba/verificacion', function() {
  $user = User::where('username', 'A00820397')->first();
  $user->verification_code = str_random(40);
  $user->save();
  
  $user->notify(new InicioPeriodo());
});

Route::get('/prueba/mail', function() {
  $user = User::where('username', 'A00820397')->with('assignable')->first();
  $user->notify(new estudianteAsignacion());
  //$user->notify(new colaboradorAsignacion());
  
  /*$user = User::where('username', 'A00820397')->with('assignable')->first();
  $colaborador = Colaborador::where('nomina', 'L00820397')->first();
  */
});

Route::get('/delete/tables', function() {
  Solicitud_Becaria::truncate();
  Estudiante::truncate();
  Colaborador::truncate();
  ColaboradorDepartamento::truncate();
});

Route::get('/prueba/mails/colabs', function() {
  $colaboradores = Colaborador::
    where('id', '>', 0)
    ->with('user', 'asignaciones.estudiante')
    ->get();

  foreach($colaboradores as $colaborador) {
    $colaborador->user->notify(new ColaboradorAsignacion());
  }
});

Route::get("/mail/alumnos", function() {
  $asignaciones = Solicitud_Becaria::
    where("aprovada", 1)
    ->where("mail", "=", 0)
    ->with("estudiante.user", "colaborador")
    ->get();
  
  foreach($asignaciones as $asignacion) {
    $asignacion->estudiante->user->notify(new estudianteAsignacion($asignacion->colaborador));
  }
});

Route::get('/colaboradorTest', function() {
  //obtener a los profesores y tengan planta y requieren becarios
  $colaboradores = Colaborador::where('profesor_sn', 1)
    ->with('asignaciones','departamento.escuela')
    ->where('tipo_contrato', Colaborador::PLANTA)
    ->where('requiere_becarios', '>', 0)
    ->orderBy('requiere_becarios')
    ->get();
  
  while($colaboradores != null ) {
    foreach($colaboradores as $colaborador) {
      if($colaborador->becarios_disponibles > 0) {
        
        /*$estudiante = $estudiantes->first(function ($estudiante, $key) use ($colaborador) {
          return $estudiante->carrera->escuela->id == $colaborador->departamento->escuela->id;
        });*/
        
        $estudiante = Estudiante::where('asignable_sn', 1)
        ->where('estatus_assignable_sn', 0)
        ->where('carrera.escuela', function($query, $colaborador) {
          $query->where('id', $colaborador->departamento->escuela->id);
        })
        ->orderBy('semestre_actual', 'desc')
        ->first();
        
        $asignacion = Solicitud_Becaria::create([
          'id_estudiante' => $estudiante->id,
          'id_colaborador' => $colaborador->id,
          'aprovada' => 1,
          'fecha_asignacion' => new Carbon(),
          'fecha_aceptacion' => new Carbon(),
          'periodo' => Periodo::AGO_DIC
        ]);
          

        $estudiante->estatus_assignable_sn = 1;
        $estudiante->save();

        //mandar correos.
        echo($asignacion);
        echo('<br/>');
      }
    }  
    
    $colaboradores = Colaborador::where('profesor_sn', 1)
      ->with('asignaciones','departamento.escuela')
      ->where('tipo_contrato', Colaborador::PLANTA)
      ->where('requiere_becarios', '>', 0)
      ->get();    
  }
});