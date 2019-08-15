<?php

namespace App\Http\Controllers;

/** Facades **/
use App;
use App\User;
use App\Estudiante;
use App\Escuela;
use App\Colaborador;
use App\ColaboradorDepartamento;
use App\Carrera;
use App\Departamento;
use App\Solicitud_Becaria;
use \Carbon\Carbon;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Administrador;

class ConfiguracionesController extends Controller
{
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('auth');
  }

  /**
   * Show the application dashboard.
   *
   * @return \Illuminate\Http\Response
   */
  public function index() {
    $user = Auth::user();

    //Se verifica que tipo de Usuario es, y se redirige a la liga correspondiente de ser necesario
    switch($user->assignable_type){
      case User::ESTUDIANTE:
        return redirect()->route('homeEstudiante');
        break;
      case User::COLABORADOR:
        return redirect()->route('homeColaborador');
        break;
      case User::ADMINISTRADOR:
        $user_admin = Auth::user()->assignable;
        $administrador = Administrador::where('id', $user_admin->id)
        ->first();

        return view('configuraciones', [
          'administrador' => $administrador
        ]);
        break;
      default: 
        return redirect()->route('login');
    }
  }

  public function csvFile(Request $request) {
    $name = $request->input('name');
    
    $file_n = $request->file;    
    ini_set("auto_detect_line_endings", "1");
    $file = fopen($file_n, "r");
    $all_data = array();

    if($name == "carreras") {
      //siglas, carrera_nombre, escuela
      $carreras =  collect([]);

      while ( ($data = fgetcsv($file, 200, ",")) !== FALSE ) {
        $escuela = Escuela::where('nombre_escuela', $data[2])->first();
        $carrera = Carrera::firstOrCreate(['siglas_carrera' => $data[0]]);
        $carrera->carrera_nombre = $data[1];
        $carrera->id_escuela = $escuela->id;
        $carrera->save();
        
        $carreras->push($carrera);
     }
      $response['collection']  = $carreras;
      $response['count']  = $carreras->count();

      fclose($file);  
    } else if($name == "colaborador") {
      //nomina, nombre, es profesor, departamento, tipo_contrato, requiere becarios, email
      $colaboradores =  collect([]);

      while ( ($data = fgetcsv($file, 200, ",")) !== FALSE ) {
        $departamento = Departamento::where('nombre_departamento', $data[4])->first();
        $new_colab = Colaborador::where('nomina', $data[0])->first();
        dd($data);
        if($new_colab == null) {
          $new_colab = Colaborador::create([
            'nomina' => $data[0],
            'nombre_completo' => $data[1],
            'profesor_sn' => $data[2],
            'oficina' => '',
            'tipo_contrato' => $data[5],
            'id_departamento' => 0,
            'celular' => '',
            'contrasena' => '',
            'email' => $data[6]
          ]);

          $colab_depto = ColaboradorDepartamento::create([
            'id_departamento' => $departamento->id,
            'id_colaborador' => $new_colab->id,
            'requiere_becarios' => $data[6]
          ]);
        }
        $colaboradores->push($new_colab);
      }
      /*while ( ($data = fgetcsv($file, 200, ",")) !== FALSE ) {
        $departamento = Departamento::where('nombre_departamento', $data[4])->first();
        $new_colab = Colaborador::where('nomina', $data[0])->first();

        if($new_colab == null) {
          $new_colab = Colaborador::create([
            'nomina' => $data[0],
            'nombre_completo' => $data[1],
            'profesor_sn' => $data[2],
            'oficina' => '',
            'id_departamento' => $departamento->id,
            'tipo_contrato' => $data[5],
            'celular' => '',
            'contrasena' => '',
            'email' => $data[7],
            'requiere_becarios' => $data[6]
          ]);
        }
        $colaboradores->push($new_colab);
      }*/
     
     $response['collection']  = $colaboradores;
     $response['count']  = $colaboradores->count();

     fclose($file);  

    } else if($name == "estudiantes_becados") {
      //matricula, es asignable
      $estudiantes =  collect([]);
      while ( ($data = fgetcsv($file, 200, ",")) !== FALSE ) {
        $new_student = Estudiante::firstOrCreate(['matricula' => $data[0]]);
        $new_student->asignable_sn = $data[1];
        $new_student->save();

        $estudiantes->push($new_student);
      }
      
      $response['collection']  = $estudiantes;
      $response['count']  = $estudiantes->count();

    } else if($name == "estudiantes_inscritos") {  
      //matricula, nombre completo, semestre actual, siglas carrera, tipo_beca
      $estudiantes =  collect([]);
      
      while ( ($data = fgetcsv($file, 200, ",")) !== FALSE ) {
        $carrera = Carrera::where('siglas_carrera', $data[3])->first();
        $student = Estudiante::where('matricula', $data[0])->first();

        if($student != null) {
          $student->nombre_completo = $data[1];
          $student->semestre_actual = $data[2];
          $student->id_carrera = $carrera->id;
          $student->email = $student->matricula . '@itesm.mx';
          $student->tipo_beca = $data[4];

          /*
          no son asignables:
          semestre 9
          tipo de beca: hijo de profesor | ...
          */
          /*if($data[2] == 9 || $data[4] == Estudiante::HIJOPROFESOR) { //agregar los de mas tipos de beca que no son asignables.
            $student->asignable_sn = 0;
            $student->estatus_assignable_sn = 0;
          } else {
            $student->asignable_sn = 1;
            $student->estatus_assignable_sn = 0;
          }*/

          $student->save();
          $estudiantes->push($student);
        }
     }
     
     $response['collection']  = $estudiantes;
     $response['count']  = $estudiantes->count();    

     fclose($file);  
    } else if($name == "especificas") {  
      //matricula, nomina
      $asignaciones =  collect([]);
      
      while ( ($data = fgetcsv($file, 200, ",")) !== FALSE ) {
        $student = Estudiante::where('matricula', $data[0])->first();
        $colaborador = Colaborador::where('nomina', $data[1])->first();
        
        if($student != null && $colaborador != null) {
          $asignacion = Solicitud_Becaria::firstOrCreate(
            ['id_matricula' => $student->id],
            ['id_colaborador' => $colaborador->id],
            ['periodo' => Periodo::AGO_DIC]
          );

          $asignacion->aprovada = 1;
          $asignacion->fecha_asignacion = new Carbon();
          $asignacion->fecha_aceptacion = new Carbon();
          $asignacion->save();

          $asignaciones->push($asignacion);
        }
     }
     
     $response['collection']  = $asignaciones;
     $response['count']  = $asignaciones->count();    

     fclose($file);  
    }

    $request->file->storeAs('csv/2019_AGO_DIC/', $name);
    return response()->json($response);
  }

  public function algorithm(Request $request) {
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

          //get depto
          /*
          $departamento = Departamento::where()
          */
          
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

    //obtener a los profesores y tengan planta y requieren becarios
    $colaboradores = Colaborador::where('profesor_sn', 1)
    ->with('asignaciones','departamento.escuela')
    ->where('tipo_contrato', Colaborador::ADMINISTRATIVO)
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
        ->where('tipo_contrato', Colaborador::ADMINISTRATIVO)
        ->where('requiere_becarios', '>', 0)
        ->get();    
    }

    //obtener a los profesores y tengan planta y requieren becarios
    $colaboradores = Colaborador::where('profesor_sn', 1)
    ->with('asignaciones','departamento.escuela')
    ->where('tipo_contrato', Colaborador::CATEDRA)
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
        ->where('tipo_contrato', Colaborador::CATEDRA)
        ->where('requiere_becarios', '>', 0)
        ->get();    
    }
  }

  public function deleteDB(Request $request) {

    //borrar tablas de carrera
    if($request->input('table') == 'carreras')
      Carrera::truncate(); 

    //borrar tabla de estudiantes
    if($request->input('table') == 'estudiantes')
      Estudiante::delete();

    //borrar tabla de colaboradores
    if($request->input('table') == 'colaboradores') {
      Colaborador::truncate();
      ColaboradorDepartamento::truncate();
    }
      

    //borrar solicitud becaria
    if($request->input('table') == 'asignaciones')
      Solicitud_Becaria::delete();
      
    //borrar tabla departamento
    if($request->input('table') == 'departamentos')
      Departamento::delete();
  }
}