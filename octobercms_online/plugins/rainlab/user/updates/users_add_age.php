<?php namespace RainLab\User\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class UsersAddAge extends Migration
{
    public function up()
    {
        Schema::table('users', function($table)
        {
        	$table->integer('age')->nullable();
        });
    }

    public function down()
    {
        Schema::table('users', function($table)
        {
            $table->dropColumn('age');
        });
    }
}
