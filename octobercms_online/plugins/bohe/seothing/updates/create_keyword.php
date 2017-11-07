<?php namespace Bohe\Seothing\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateKeyword extends Migration
{

    public function up()
    {
        Schema::create('bohe_keyword', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name')->nullable();
            $table->integer('state')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('bohe_keyword');
    }

}
