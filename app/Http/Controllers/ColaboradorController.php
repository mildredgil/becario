<?php

namespace App\Http\Controllers;

/** Facades **/
use App;
use App\User;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Colaborador;
use App\Solicitud_Becaria;

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
}