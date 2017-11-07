<?php namespace RainLab\User\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class UsersAddWcnickname extends Migration
{
    public function up()
    {
        Schema::table('users', function($table)
        {
        	$table->string('wcnickname')->nullable()->after('openid');
        });
    }

    public function down()
    {
        Schema::table('users', function($table)
        {
            $table->dropColumn('wcnickname');
        });
    }
}
