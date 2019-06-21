@extends('layouts.appLoggedAdministrador')

@section('content')    
  <div id="estadisticas"></div>  
  <input id="admin" type="hidden" value="{{ $administrador }}" />
  
@endsection

@section('js')
<!--<script src="{{ asset('/js/views/estadisticas.js') }}"></script>-->
@endsection