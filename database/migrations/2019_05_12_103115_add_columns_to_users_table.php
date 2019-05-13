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
        $table->renameColumn('email', 'username'); 
        $table->morphs('assignable');
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
        $table->dropColumn('assignable_id');        
        $table->dropColumn('assignable_type');        
        $table->renameColumn('username', 'email'); 
        $table->string('name');        
      });
    }
}
