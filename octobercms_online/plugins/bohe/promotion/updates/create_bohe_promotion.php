<?php namespace Bohe\Promotion\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateBohePromotion extends Migration
{

    public function up()
    {
        Schema::create('bohe_promotion', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('link')->nullable();
            $table->Text('explain')->nullable();
            $table->integer('state')->nullable();
            $table->integer('source')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('bohe_promotion');
    }

}
