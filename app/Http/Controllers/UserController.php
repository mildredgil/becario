<?php

namespace App\Http\Controllers;

/** Facades **/
use App;
use App\User;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Estudiante;

class UserController extends Controller
{
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    //$this->middleware('auth');
  }

  /**
   * Show the application dashboard.
   *
   * @return \Illuminate\Http\Response
   */
  public function verifyView($code) {
    $user = User::where('verification_code', $code)->first();

    if($user) {
      return
      $user->verified ? 
        redirect()->route('login')
      :
        view('verificacion', [
          'user' => $user
        ]);
    }

    return 'Error';
  }

  public function verifyAccount(Request $request) {
    $user = User::where('verification_code', $request->input('v_code'))
      ->where('username', $request->input('username'))->first();

    if($user) {
      $user->password = bcrypt($request->input('password'));
      $user->save();

      $credentials = $request->only('username', 'password');
   
      if (Auth::attempt(['username' => $user->username, 'password' => $user->password])) {
        // Authentication passed...
        return redirect()->route('home');
      } else {
        return redirect()->route('login');
      }
    }

    return 'Error';
  }
}