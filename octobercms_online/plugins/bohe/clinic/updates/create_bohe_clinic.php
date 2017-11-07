<?php namespace Bohe\Clinic\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateBoheClinic extends Migration
{

    public function up()
    {
        Schema::create('bohe_clinic', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedBigInteger('user_id')->nullable()->index();
            $table->string('name')->nullable();
            $table->string('addr')->nullable();
            $table->longText('content')->nullable();
            $table->longText('content_html')->nullable();
            $table->integer('state')->default(0);
            $table->integer('group_id')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('bohe_clinic');
    }

}
