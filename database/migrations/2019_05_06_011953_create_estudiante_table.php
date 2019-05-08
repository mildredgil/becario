<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEstudianteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('Estudiante', function (Blueprint $table) {
        $table->increments('id');
        $table->string('matricula')->unique();
        $table->string('nombre_completo');
        $table->string('celular');
        $table->integer('semestre_actual');
        $table->integer('id_carrera');
        $table->boolean('asignable_sn');
        $table->boolean('estatus_assignable_sn');
        $table->integer('tipo_beca');
        $table->string('contrasena');
        $table->string('email');
        $table->rememberToken(); 
        $table->timestamps();
        $table->softDeletes();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::dropIfExists('Estudiante');
    }
}
