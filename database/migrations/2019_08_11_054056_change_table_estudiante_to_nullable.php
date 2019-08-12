<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeTableEstudianteToNullable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('estudiante', function (Blueprint $table) {
          $table->string('nombre_completo')->nullable()->change();
          $table->string('celular')->nullable()->change();
          $table->integer('semestre_actual')->nullable()->change();
          $table->integer('id_carrera')->nullable()->change();
          $table->boolean('asignable_sn')->nullable()->change();
          $table->boolean('estatus_assignable_sn')->nullable()->change();
          $table->integer('tipo_beca')->nullable()->change();
          $table->string('contrasena')->nullable()->change();
          $table->string('email')->nullable()->change();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('estudiante', function (Blueprint $table) {
          $table->string('nombre_completo')->change();
          $table->string('celular')->change();
          $table->integer('semestre_actual')->change();
          $table->integer('id_carrera')->change();
          $table->boolean('asignable_sn')->change();
          $table->boolean('estatus_assignable_sn')->change();
          $table->integer('tipo_beca')->change();
          $table->string('contrasena')->change();
          $table->string('email')->change();
      });
    }
}
