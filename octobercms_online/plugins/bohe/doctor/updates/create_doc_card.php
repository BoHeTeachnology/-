<?php namespace Bohe\Doctor\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateDocCard extends Migration
{

    public function up()
    {
        Schema::create('bohe_doctor_card', function($table)
        {
        	$table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('doctor_id')->nullable();
            $table->string('doctor_name')->nullable();
            $table->string('real_name')->nullable();
            $table->string('identity')->nullable();
            $table->integer('type')->nullable();
            $table->string('bank_name')->nullable();
            $table->string('bk_province')->nullable();
            $table->string('bk_city')->nullable();
            $table->string('bk_mobile',20)->nullable();
            $table->string('card_number',30)->nullable();
            $table->integer('state')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('bohe_doctor_card');
    }

}
