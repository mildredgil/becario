@extends('layouts.appLoggedAdministrador')

@section('content')    
  <div id="homeAdministrator"></div>  
  <input id="admin" type="hidden" value="{{ $administrador }}" />
@endsection

@section('js')
<script src="{{ asset('/js/views/homeAdministrator.js') }}"></script>
@endsection