<?php

//use Auth;

namespace App\Http\Controllers\Auth;

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
  protected $redirectTo = '/home';

  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
      $this->middleware('guest')->except('logout');
  }

  public function postLogin(Request $request) {
    $username = $request->input('email');
    $password = $request->input('password');

    if( ! auth()->attempt(['username' => $username, 'password' => $password], true)) {
      dd("lo hiciste");
      return response()->json([
        'email' => $username,
        'password' => $password,
        'error' => $this->failedLoginMessage
      ], 401);
    } 
    
    $user = authUser();
    request()->session()->regenerate();

    $token = auth('api')->setTTL(1440)->login($user);

    if($user->confirmed == 0) {
      $response['message'] = trans('messages.verify_message');
      $response['user'] = $user;
      $response['token'] = $token;
    } else {
      /* Prepare the response data. */
      $response['user']  = $user;
      $response['token'] = $token;
    }

    return response()->json($response);
  }
}
