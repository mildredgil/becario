<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableColaboradorDepartamento extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('colaborador_departamento', function (Blueprint $table){
        $table->increments('id');
        $table->integer('id_departamento');
        $table->integer('id_colaborador');
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
      Shema::dropIfExists('colaborador_departamento');
    }
}
