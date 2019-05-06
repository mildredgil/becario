<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCarreraTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
      Schema::create('carrera', function (Blueprint $table) {
        $table->increments('id');
        $table->string('siglas_carrera')->unique();
        $table->string('carrera_nombre');
        $table->integer('id_escuela');
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
      Schema::dropIfExists('carrera');
    }
}
