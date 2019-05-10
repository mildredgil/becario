<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Asignación de becario</title>
    <!-- Fonts -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Nunito" />
    <!-- Styles -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="{{ asset('/css/materialize.min.css') }}" rel='stylesheet' type='text/css'>
    <link rel="icon" href="{{ asset('img/tec-favicon.png') }}" sizes="32x32">
    <style>
        body {
            font-family: 'Nunito';
        }
        .nav{
          font-size: 24px;
          font-family: Nunito;
          letter-spacing: 12px;
          text-transform: uppercase;
          font-weight: lighter; 
        }
        .nav-container{
          background: linear-gradient(80.19deg, #47c5ff 0%, #1467ff 100%);
          margin:0px;
        }
        .container-extended{
          width: 90%;
          margin: 0 auto;
        }
        .icon{
          cursor: pointer;
        }
        .icon:hover{
          background-color: #46c2ff75;
        }
        .active{
          background-color: #46c2ff75;
        }
        .logo{
          width: 60px;
          position: absolute;
          right: 10px;
        }
    </style>
    @yield('css')
  </head>
  <body id="app-layout">
    <div id="nav"></div>            
    @yield('content')

    <script src="{{ asset('/js/materialize.min.js') }}"></script>
    <script src="{{ asset('/js/views/navbarLogged.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    
    @yield('js')

  </body>
</html>
