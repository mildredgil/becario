<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\User;
use App\Estudiante;
use App\Colaborador;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
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
        //$this->middleware('guest');
    }
    
    public function register(Request $request) {
      $credentials = $request->only('username', 'password');
      
       if (Auth::attempt($credentials)) {
         //already exist. Please login.
         $response['message']  = 'Already exist. Please login.';
         return response()->json($response);
       } else {
          //Verificar que exista en la bd.
          switch($request->input('userType')) {
            case 'ESTUDIANTE':
              $user = ESTUDIANTE::where('matricula', $request->input('username'))
                ->doesntHave('user')->first();
              
              if($user != null) {
                $registerUser = User::create([
                  'username' => $request->input('username'),
                  'password' => bcrypt($request->input('password')),
                  'assignable_type' => USER::ESTUDIANTE,
                  'assignable_id' => $user->id
                ]); 

                Auth::login($registerUser, true);
                $response['status']  = 'Success';
                $response['user']  = $registerUser;
                return response()->json($response);
              } else {
                
                $response['message']  = 'Es necesario ser un alumno Becado para ingresar al sistema.';
                $response['status']  = 'Error';
                return response()->json($response);
              }
            break;
            case 'COLABORADOR':
              $user = COLABORADOR::where('nomina', $request->input('username'))
                ->doesntHave('user')->first();

              if($user != null) {
                $registerUser = User::create([
                  'username' => $request->input('username'),
                  'password' => bcrypt($request->input('password')),
                  'assignable_type' => USER::COLABORADOR,
                  'assignable_id' => $user->id
                ]); 

                Auth::login($registerUser, true);
                $response['status']  = 'Success';
                $response['user']  = $registerUser;
                return response()->json($response);
              } else {
                //crear solicitud para ser colaborador becario. Enviar solicitud a admin.
              }
            break;
            default:
              $user = null;
          }
       }
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }
}
