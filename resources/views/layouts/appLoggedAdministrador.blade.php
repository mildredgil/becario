<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Asignación de becario - Admin</title>
    <!-- Fonts -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Nunito" />
    <!-- Styles -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="{{ asset('/css/materialize.min.css') }}" rel='stylesheet' type='text/css'>
    <link href="{{ asset('/css/global.css') }}" rel='stylesheet' type='text/css'>
    <link rel="icon" href="{{ asset('img/tec-favicon.png') }}" sizes="32x32">
    <style>
        body {
            font-family: 'Nunito';
            height: 100%;
        }
        #footer {
          position: absolute;
          left: 0;
          right: 0;
          bottom:0;
        }
        
    </style>
    @yield('css')
  
  </head>
  <body id="app-layout">
    <div id="nav"></div>

    @yield('content')

    <div id="footer"></div>
    <script src="{{ asset('/js/materialize.min.js') }}"></script>
    <script src="{{ asset('/js/views/navbarLoggedAdministrator.js') }}"></script>
    <script src="{{ asset('/js/views/footer.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    
    @yield('js')
    
  </body>
</html>