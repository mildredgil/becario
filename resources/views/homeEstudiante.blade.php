@extends('layouts.app-logged')

@section('content')    
  <div id="content"></div>  
  <input id="estudiante" type="hidden" value="{{ $estudiante }}" />
@endsection

@section('js')
<script src="{{ asset('/js/views/homeEstudiante.js') }}"></script>
@endsection