<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MakeNullableInSolicitudBecaria extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('solicitud_becaria', function (Blueprint $table) {
            $table->boolean('aprovada')->nullable()->change();
            $table->boolean('evaluacion')->nullable()->change();
            $table->date('fecha')->nullable()->change();
            $table->date('fecha_asignacion')->nullable()->change();
            $table->date('fecha_aceptacion')->nullable()->change();
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
            $table->boolean('aprovada')->change();
            $table->boolean('evaluacion')->change();
            $table->date('fecha')->change();
            $table->date('fecha_asignacion')->change();
            $table->date('fecha_aceptacion')->change();
        });
    }
}
