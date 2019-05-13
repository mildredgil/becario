<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('users', function (Blueprint $table) {
        $table->dropColumn('name');
        $table->dropTimestamps();
        $table->renameColumn('email', 'username'); 
        $table->morphs('user');
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
      Schema::table('users', function (Blueprint $table) {
        $table->dropSoftDeletes();
        $table->renameColumn('username', 'email'); 
        $table->string('name');        
        $table->dropColumn('user_id');        
        $table->dropColumn('user_type');        
      });
    }
}
