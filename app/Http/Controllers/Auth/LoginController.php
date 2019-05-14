<?php
namespace App\Http\Controllers\Auth;

use Auth;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Illuminate\Http\Request;

class LoginController extends Controller {
  /*
  |--------------------------------------------------------------------------
  | Login Controller
  |--------------------------------------------------------------------------
  |
  | This controller handles authenticating users for the application and
  | redirecting them to your home screen. The controller uses a trait
  | to conveniently provide its functionality to your applications.
  |
  */

  use AuthenticatesUsers;

  /**
   * Where to redirect users after login.
   *
   * @var string
   */ 
  protected $redirectTo = '/homeEstudiante';

  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  { 
    //$this->middleware('guest', ['except' => ['logout', 'userLogout']]);
  }

  public function postLogin(Request $request) {
   // Attempt to log the user in
   
   $credentials = $request->only('username', 'password');
   
    if (Auth::attempt($credentials)) {
      $response['user']  = Auth::user();
      return response()->json($response);
    } else {
      return response()->json([
        'username' => $request->input('username'),
        'password' => $request->input('password')
      ], 401);
    }
  }

  public function logout() {
    Auth::logout();
    $response['message']  = 'success';
            
    return response()->json($response);
  }
}
