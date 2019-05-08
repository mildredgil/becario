<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSolicitudBecariaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('solicitud_becaria', function (Blueprint $table){
            $table->increments('id');
            $table->boolean('aprovada');
            $table->integer('id_colaborador');
            $table->integer('id_estudiante');
            $table->datetime('fecha');
            $table->integer('periodo');
            $table->datetime('fecha_asignacion');
            $table->datetime('fecha_aceptacion');
            $table->boolean('evaluacion');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('solicitud_becaria');
    }
}
