<?php namespace RainLab\User\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class UsersAddOpenid extends Migration
{
    public function up()
    {
        Schema::table('users', function($table)
        {
        	$table->string('openid')->nullable()->after('password');
        });
    }

    public function down()
    {
        Schema::table('users', function($table)
        {
            $table->dropColumn('openid');
        });
    }
}
