@extends('layouts.appLoggedAdministrador')

@section('content')    
  <div id="homeAdministrator"></div>  
  <input id="estudiante" type="hidden" value="{{ $estudiante }}" />
@endsection

@section('js')
<script src="{{ asset('/js/views/homeAdministrator.js') }}"></script>
@endsection