<?php

namespace App\Http\Controllers;

/** Facades **/
use App;
use App\User;
use \Carbon\Carbon;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Periodo;
use App\Administrador;

class PeriodoController extends Controller
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
    
  }

  public function store(Request $request) {
    $user = Auth::user();
   
    if($user->assignable_type == User::ADMINISTRADOR) {
      $period = Periodo::firstOrCreate(
        ["year" => $request->input('year'), "id_periodo" => $request->input('periodo')]);
      $period->inicio_asignaciones = (new Carbon(str_replace(',','', $request->input('inicioAsignaciones'))))->toDateString();
      $period->fin_asignaciones = (new Carbon(str_replace(',','', $request->input('finAsignaciones'))))->toDateString();
      $period->inicio_evaluaciones = (new Carbon(str_replace(',','', $request->input('inicioEvaluaciones'))))->toDateString();
      $period->fin_evaluaciones = (new Carbon(str_replace(',','', $request->input('finEvaluaciones'))))->toDateString();
      $period->save();

      $response['message']  = 'success';
      $response['data']  = $period;
      return response()->json($response);
    } else {
      $response['message']  = 'error';
      return response()->json($response);
    }
  }

  public function getPeriod(Request $request) {
    $user = Auth::user();
   
    if($user->assignable_type == User::ADMINISTRADOR) {
      $period = Periodo::get();

      $response['message']  = 'success';
      $response['data']  = $period;
      return response()->json($response);
    } else {
      $response['message']  = 'error';
      return response()->json($response);
    }
  }
}