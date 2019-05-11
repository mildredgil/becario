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
    <link href="{{ asset('/css/materialize.min.css') }}" rel='stylesheet' type='text/css'>
    <link href="{{ asset('/css/global.css') }}" rel='stylesheet' type='text/css'>
    <link rel="icon" href="{{ asset('img/tec-favicon.png') }}" sizes="32x32">
    <style>
        body {
            font-family: 'Nunito';
        }
        .fa-btn {
            margin-right: 6px;
        }
        .nav{
          font-size: 24px;
          font-family: Nunito;
          letter-spacing: 12px;
          text-transform: uppercase;
          font-weight: lighter; 
        }
        .nav-container{
          background: linear-gradient(80.19deg, #101010 0%, #223f93 100%);
          margin:0px;
        }
    </style>
    @yield('css')
  </head>
  <body id="app-layout">
    <nav class="navbar navbar-default nav-container">
      <div class="container"> 
        <div class="row">
          <div class="col s12 center-align white-text nav">
            Asignación Becaria
          </div>  
        </div>
      </div>
    </nav>
    <div id="header"></div>
    
    @yield('content')

    <script src="{{ asset('/js/materialize.min.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    
    @yield('js')

  </body>
</html>
