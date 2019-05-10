@extends('layouts.app')

@section('css')
<style>
  .no-margin {
    margin: 0px;
  }
  .user{
    display: block;
    font-size: 50px;
    color: #FFF;
  }
  .user-student:hover{
    cursor: pointer;
    font-size: 70px;
    color: #2b75dd;
  }
  .user-professor:hover{
    cursor: pointer;
    font-size: 70px;
    color: #2b75dd;
  }
  .user-hover{
    cursor: pointer;
    font-size: 70px;
    color: #2b75dd;
    fill:#fff;
  }
  .user-wrapper{
    height: 550px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #fffefe14;
  }
  .user-wrapper:hover{
    cursor: pointer;
    background-color: #fdfffa9c;
  }
  body{
    background-image:url("{{ asset('img/teccampus.jpg') }}");
    background-size:auto;
  }
</style>
@endsection

@section('content')
<div style="width: 100%; margin: auto;" class="row">
    
</div>  
<div id="homeColaborador"></div>   
@endsection

@section('js')
<script src="{{ asset('/js/views/homeColaboradores.js') }}"></script>
@endsection