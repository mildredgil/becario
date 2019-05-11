@extends('layouts.app-logged')

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
    color: #223f93;
  }
  .user-professor:hover{
    cursor: pointer;
    font-size: 70px;
    color: #223f93;
  }
  .user-hover{
    cursor: pointer;
    font-size: 70px;
    color: #223f93;
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