<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateColaboradoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('colaboradores', function (Blueprint $table){
            $table->increments('id');
            $table->string('nomina')->unique();
            $table->string('nombre_completo');
            $table->boolean('profesor_sn');
            $table->string('tipo_contrato');
            $table->integer('id_departamento');
            $table->string('oficina');
            $table->string('celular');
            $table->string('contrasena');
            $table->string('email');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Shema::dropIfExists('colaboradores');
        //
    }
}
