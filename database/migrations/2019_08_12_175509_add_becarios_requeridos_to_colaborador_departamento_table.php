<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddBecariosRequeridosToColaboradorDepartamentoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('colaborador_departamento', function (Blueprint $table){
        $table->integer('requiere_becarios')->after('id_colaborador');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    { 
      Schema::table('colaborador_departamento', function (Blueprint $table) {
        $table->dropColumn('requiere_becarios');
      });
    }
}
