<?php

namespace App\Http\Controllers;

/** Facades **/
use App;
use App\User;
use App\Estudiante;
use App\Colaborador;
use App\Solicitud_Becaria;
use \Carbon\Carbon;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Administrador;

class AdministradorController extends Controller
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

        return view('homeAdministrator', [
          'administrador' => $administrador
        ]);
        break;
      default: 
        return redirect()->route('login');
    }
  }

  public function saveProfile(Request $request) {
    $user = Auth::user();
   
    if($user->assignable_type == User::Administrador) {
      $id_Administrador = $user->assignable->id;
      $administrador = Administrador::where('id', $id_Administrador)->with("carrera", "solicitudesBecarias.Administrador.departamento")->first();
      
      $administrador->celular = $request->input('celular');
      $administrador->save();
      
      $response['administrador']  = $administrador;
      return response()->json($response);
    } else {
      $response['message']  = 'Administrador no encontrado';
      return response()->json($response);
    }
  }

  public function createAssignment(Request $request) {
    $user = Auth::user();
    if($user->assignable_type == User::ADMINISTRADOR) {
      $estudiante = Estudiante::where('matricula', $request->input('matricula'))->first();
      $colaborador = Colaborador::where('nomina', $request->input('nomina'))->first();
      
      if($estudiante != null && $colaborador != null) {
        //Verificar que el estudiante pueda ser asignable.
        $asignacion = Solicitud_Becaria::where("id_estudiante", $estudiante->id)
        ->where("id_colaborador", $colaborador->id)
        ->first();

        if($asignacion != null) {
          $response['message']  = 'Asignación existente';  
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
              'aprovada'          => 1,
              'id_colaborador'    => $colaborador->id,
              'id_estudiante'     => $estudiante->id,
              'periodo'           => $periodo,
              'fecha'             => $date,
              'fecha_asignacion'  => $date,
              'fecha_aceptacion'  => $date,
              'evaluacion' => 0
            ]);
          }        

          $response['message']  = 'Solicitud creada con exito';  
          $response['status']  = true;
        }
      } else {
        $response['message']  = 'Estudiante o Colaborador no encontrado';  
        $response['status']  = false;
      }
    } else {
      $response['message']  = 'Administrador no encontrado';
      $response['status']  = false;
    }

    return response()->json($response);
  }
}