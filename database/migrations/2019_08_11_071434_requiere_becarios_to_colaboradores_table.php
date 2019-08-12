<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RequiereBecariosToColaboradoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('colaboradores', function (Blueprint $table) {
        $table->integer('requiere_becarios')->nullable()->after('nombre_completo');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('colaboradores', function (Blueprint $table) {
        $table->dropColumn('requiere_becarios');
      });
    }
}
