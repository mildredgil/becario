<?php

namespace App\Http\Controllers;

/** Facades **/
use App;
use App\User;

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
        ->with("departamento", "solicitudesBecarias.estudiante.carrera")
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
}