<?php

namespace App\Http\Controllers;

/** Facades **/
use App;
use Request;
use Illuminate\Support\Facades\Auth;

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
}