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
        $table->integer('id_periodo');
        $table->date('inicio_asignaciones')->nullable();
        $table->date('fin_asignaciones')->nullable();
        $table->date('inicio_evaluaciones')->nullable();
        $table->date('fin_evaluaciones')->nullable();
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
