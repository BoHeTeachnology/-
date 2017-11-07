<?php namespace Bohe\Doctor\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateDocFinance extends Migration
{

    public function up()
    {
        Schema::create('bohe_doctor_finance', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('doctor_id')->nullable();
            $table->string('doctor_name')->nullable();
            $table->float('income')->nullable();
            $table->float('outcash')->nullable();
            $table->float('balance')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('bohe_doctor_finance');
    }

}
