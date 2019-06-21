@extends('layouts.appLoggedAdministrador')

@section('content')    
  <div id="reporte"></div>  
  <input id="admin" type="hidden" value="{{ $administrador }}" />
  
@endsection

@section('js')
<!--<script src="{{ asset('/js/views/reporte.js') }}"></script>-->
@endsection