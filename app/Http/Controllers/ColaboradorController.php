<?php

namespace App\Http\Controllers;

/** Facades **/
use App;
use \Carbon\Carbon;
use App\User;
use App\Estudiante;
use App\Colaborador;
use App\Solicitud_Becaria;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ColaboradorController extends Controller
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
        $user_colaborador = Auth::user()->assignable;
        $colaborador = Colaborador::where('id', $user_colaborador->id)
          ->with("departamento", "solicitudesBecarias.estudiante.carrera")
          ->first();
        
        return view('homeColaborador', [
          'colaborador' => $colaborador
        ]);
        break;
      case User::ADMINISTRADOR:
        return redirect()->route('homeAdministrador');
        break;
      default: 
        return redirect()->route('login');
    }
  }

  public function saveProfile(Request $request) {
    $user = Auth::user();
   
    if($user->assignable_type == User::COLABORADOR) {
      $id_Colaborador = $user->assignable->id;
      $colaborador = Colaborador::where('id', $id_Colaborador)
        ->with("departamento", "solicitudesBecarias.estudiante.carrera")
        ->first();
      
      $colaborador->oficina = $request->input('oficina') != '' ? $request->input('oficina') : $colaborador->oficina;
      $colaborador->celular = $request->input('celular') != '' ? $request->input('celular') : $colaborador->celular;
      $colaborador->save();
      
      $response['colaborador']  = $colaborador;
      return response()->json($response);
    } else {
      $response['message']  = 'Colaborador no encontrado';
      return response()->json($response);
    }
  }

  public function saveEvaluations(Request $request) {
    $user = Auth::user();
    
    if($user->assignable_type == User::COLABORADOR) {
      $id_Colaborador = $user->assignable->id;

      foreach($request->input("evaluaciones") as $evaluacion){
        $asignaciones = Solicitud_Becaria::where('id', $evaluacion['id'])->first();
        $asignaciones->evaluacion = $evaluacion['evaluacion'];
        $asignaciones->save();        
      }
      
      $colaborador = Colaborador::where('id', $id_Colaborador)
      ->with("departamento", "solicitudesBecarias.estudiante.carrera")
      ->first();
      
      $response['colaborador']  = $colaborador;
      return response()->json($response);
    } else {
      $response['message']  = 'Colaborador no encontrado';
      return response()->json($response);
    }
  }
 
  public function findStudent(Request $request) {
    $user = Auth::user();
    
    if($user->assignable_type == User::COLABORADOR) {
      $estudiante = Estudiante::where('matricula', $request->input('matricula'))->first();

      //validar que el estudiante exista
      if($estudiante != null) {

        //Verificar que el estudiante no haya sido asignado este periodo.
        if($estudiante->estatus_assignable_sn == 0) {
          $response['message']  = 'El estudiante fue encontrado con exito';  
          $response['status']  = true;  
        } else {
          $response['message']  = 'El estudiante ya fue asignado';  
          $response['status']  = false;  
        }
      } else {
        $response['message']  = 'El estudiante con esa matricula no existe';  
        $response['status']  = false;
      }
    }
  }

  public function createRequest(Request $request) {
    $user = Auth::user();
    
    if($user->assignable_type == User::COLABORADOR) {
      $estudiante = Estudiante::where('matricula', $request->input('matricula'))->first();
      $colaborador = Colaborador::where('id', $user->assignable->id)->first();
      
      if($estudiante != null && $colaborador != null) {
        //Verificar que el estudiante pueda ser asignable.
        $asignacion = Solicitud_Becaria::where("id_estudiante", $estudiante->id)
        ->where("id_colaborador", $colaborador->id)
        ->first();

        if($asignacion != null) {
          $response['message']  = 'Solicitud existente';  
          $response['status']  = false;
        } else {
          //se crea la solicitud
          $date = Carbon::now();
          $year = $date->year;
          $month = $date->month;
          
          if($year > 2019) {
            $periodo = -1;
            if($month == 0) {
              $periodo = 0;
            } else if($month == 1) {
              $periodo = 1;
            } else if($month == 6) {
              $periodo = 2;
            } else if($month == 8) {
              $periodo = 3;
            }

          } else {
            $periodo = -1;

            if($month == 0) {
              $periodo = 1;
            } else if($month == 6) {
              $periodo = 2;
            } else if($month == 8) {
              $periodo = 3;
            }
          }

          if($estudiante->estatus_assignable_sn == 0) {
            $asignacion = Solicitud_Becaria::create([
              'aprovada'          => 0,
              'id_colaborador'    => $colaborador->id,
              'id_estudiante'     => $estudiante->id,
              'periodo'           => $periodo,
              'fecha'             => $date,
              'fecha_asignacion'  => $date,
              'fecha_aceptacion'  => $date,
              'evaluacion' => 0
            ]);
            dd($asignacion);

            $response['message']  = 'Solicitud creada con exito';  
            $response['status']  = true;
          } else {
            $response['message']  = 'Ya existe la solicitud';  
            $response['status']  = false;
          }        

          
        }
      } else {
        $response['message']  = 'Estudiante no encontrado';  
        $response['status']  = false;
      }
    } else {
      $response['message']  = 'Colaborador no encontrado';
      $response['status']  = false;
    }

    return response()->json($response);
  }
  public function mostrarEvaluacion(){
    return view("evaluacionEstudiante");
  }
}
