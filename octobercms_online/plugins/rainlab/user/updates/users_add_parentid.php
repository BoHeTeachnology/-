<?php namespace RainLab\User\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class UsersAddParentid extends Migration
{
    public function up()
    {
        Schema::table('users', function($table)
        {
        	$table->unsignedBigInteger('parent_id')->nullable()->after('id');
        });
    }

    public function down()
    {
        Schema::table('users', function($table)
        {
            $table->dropColumn('parent_id');
        });
    }
}
