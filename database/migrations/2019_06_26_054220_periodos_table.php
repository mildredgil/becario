<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PeriodosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('periodo', function (Blueprint $table){
        $table->increments('id');
        $table->integer('id_perido');
        $table->date('inicio_asignaciones');
        $table->date('fin_asignaciones');
        $table->date('inicio_evaluaciones');
        $table->date('fin_evaluaciones');
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
      Schema::dropIfExists('periodo');
    }
}
