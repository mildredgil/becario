@extends('layouts.appLoggedAdministrador')

@section('content')    
  <div id="configuraciones"></div>  
  <input id="admin" type="hidden" value="{{ $administrador }}" />
  
@endsection

@section('js')
<script src="{{ asset('/js/views/configuraciones.js') }}"></script>
@endsection