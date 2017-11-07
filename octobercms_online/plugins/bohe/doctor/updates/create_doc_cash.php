<?php namespace Bohe\Doctor\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateDocCash extends Migration
{

    public function up()
    {
        Schema::create('bohe_doctor_cash', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedBigInteger('user_id')->nullable();           
            $table->float('outcash')->nullable();
            $table->integer('state')->default(0);
            $table->string('business')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('bohe_doctor_cash');
    }

}
