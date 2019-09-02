<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Colabsnullablea extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('colaboradores', function (Blueprint $table) {
            $table->string('nombre_completo')->nullable()->change();
            $table->integer('requiere_becarios')->nullable()->change();
            $table->string('tipo_contrato')->nullable()->change();
            $table->string('oficina')->nullable()->change();
            $table->string('celular')->nullable()->change();
            $table->string('contrasena')->nullable()->change();
            $table->string('email')->nullable()->change();
            $table->integer('id_departamento')->nullable()->change();
            $table->boolean('profesor_sn')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
