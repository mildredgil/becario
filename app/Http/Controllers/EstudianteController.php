<?php

namespace App\Http\Controllers;

/** Facades **/
use App;
use App\User;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Estudiante;

class EstudianteController extends Controller
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
    $user = Auth::user()->assignable;

    $estudiante = Estudiante::where('id', $user->id)->with("carrera", "solicitudesBecarias.colaborador.departamento")->first();
    
    return view('homeEstudiante', [
      'estudiante' => $estudiante
    ]);
  }

  public function saveProfile(Request $request) {
    $user = Auth::user();
   
    if($user->assignable_type == User::ESTUDIANTE) {
      $id_estudiante = $user->assignable->id;
      $estudiante = Estudiante::where('id', $id_estudiante)->with("carrera", "solicitudesBecarias.colaborador.departamento")->first();
      
      $estudiante->celular = $request->input('celular');
      $estudiante->save();
      
      $response['estudiante']  = $estudiante;
      return response()->json($response);
    } else {
      $response['message']  = 'estudiante no encontrado';
      return response()->json($response);
    }
  }
}