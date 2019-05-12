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
  body{
    background-image:url("{{ asset('img/teccampus.jpg') }}");
    background-size:auto;
  }
</style>
@endsection

@section('content')    
   <div id="loginBlade"></div>
@endsection

@section('js')
<script src="{{ asset('/js/views/modalLoginColaborador.js') }}"></script>
<script src="{{ asset('/js/views/login.js') }}"></script>
<script>
  $(document).ready(function(){
    $(".user-wrapper").hover(       
      function () {
        $(this).find(".img-svg").addClass("user-hover");
        $(this).find(".user").addClass("user-hover");
      }, 

      function () {
        $(".user").removeClass("user-hover");
        $(".img-svg").removeClass("user-hover");
      }
    );
    
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    var modalLogin = M.Modal.getInstance(elems[0]);
    
    $(".user-wrapper").click(function () {       
      modalLogin.open();
    });

  });
</script>
@endsection
