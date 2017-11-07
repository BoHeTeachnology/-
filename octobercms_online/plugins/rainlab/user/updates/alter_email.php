<?php namespace RainLab\User\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AlterEmail extends Migration
{
    public function up()
    {
        Schema::table('users', function($table)
        {   
        	$table->string('email')->nullable()->change();
        });
    }

    public function down()
    {
        Schema::table('users', function($table)
        {   
        	$table->string('email')->unique()->change();
        });
    }
}
