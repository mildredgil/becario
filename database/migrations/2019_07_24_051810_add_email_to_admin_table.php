<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddEmailToAdminTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('administrador', function (Blueprint $table) {
        $table->string('email')->after('id_user');
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
      Schema::table('administrador', function (Blueprint $table) {
        $table->dropColumn('email');  
        $table->dropColumn('created_at');  
        $table->dropColumn('updated_at');  
        $table->dropSoftDeletes();      
      });
    }
}
