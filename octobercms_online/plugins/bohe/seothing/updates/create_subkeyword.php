<?php namespace Bohe\Seothing\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateSubkeyword extends Migration
{

    public function up()
    {
        Schema::create('bohe_subkeyword', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('keyid')->nullable();
            $table->integer('hot')->nullable();
            $table->integer('level')->nullable();
            $table->integer('state')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('bohe_subkeyword');
    }

}
