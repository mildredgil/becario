@extends('layouts.app')

@section('css')
<style>
  
  body{
    background-image:url("{{ asset('img/teccampus.jpg') }}");
    background-size:auto;
  }
</style>
@endsection

@section('content')    
   <div id="content"></div>
@endsection

@section('js')

<script src="{{ asset('/js/views/loginAdmin.js') }}"></script>
@endsection
