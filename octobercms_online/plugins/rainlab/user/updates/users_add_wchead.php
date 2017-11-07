<?php namespace RainLab\User\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class UsersAddWchead extends Migration
{
    public function up()
    {
        Schema::table('users', function($table)
        {
        	$table->string('wchead')->nullable()->after('name');
        });
    }

    public function down()
    {
        Schema::table('users', function($table)
        {
            $table->dropColumn('wchead');
        });
    }
}
