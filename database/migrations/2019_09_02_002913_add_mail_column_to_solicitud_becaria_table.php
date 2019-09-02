<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddMailColumnToSolicitudBecariaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('solicitud_becaria', function (Blueprint $table) {
            $table->integer('mail')->default(0)->after("aprovada");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('solicitud_becaria', function (Blueprint $table) {
            $table->dropColumn('mail');
        });
    }
}
