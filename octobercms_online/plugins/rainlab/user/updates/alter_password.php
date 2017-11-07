<?php namespace RainLab\User\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AlterPassword extends Migration
{
    public function up()
    {
        Schema::table('users', function($table)
        {   
        	$table->string('password')->nullable()->change();
        });
    }

    public function down()
    {
        Schema::table('users', function($table)
        {   
        	$table->string('password')->change();
        });
    }
}
