<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDefaultNullToCarreraTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('carrera', function (Blueprint $table) {
        $table->string('carrera_nombre')->nullable()->change();
        $table->integer('id_escuela')->nullable()->change();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('carrera', function (Blueprint $table) {
        $table->string('carrera_nombre')->change();
        $table->integer('id_escuela')->change();
      });
    }
}
