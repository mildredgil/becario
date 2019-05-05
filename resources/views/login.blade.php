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
    <div class="col s6 center-align">
      <div class="user-wrapper">
        <div style="width: 100%" class="center-align">
          <label class="user user-student">Alumno</label>
          <svg class="img-svg" width="60" height="60" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
        </div>
      </div>
    </div>
    <div class="col s6 center-align">
      <div class="user-wrapper">
        <div style="width: 100%" class="center-align">
          <label class="user user-professor">Colaboradores</label>
          <svg class="img-svg" width="60" height="60" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
        </div>
      </div>
    </div> 
  </div> 
  <div id="login-modal"></div>   
@endsection

@section('js')
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
