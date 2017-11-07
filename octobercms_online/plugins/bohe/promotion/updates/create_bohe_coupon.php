<?php namespace Bohe\Promotion\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateBoheCoupon extends Migration
{

	 public function up()
    {
        Schema::create('bohe_coupon', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name')->nullable();
            $table->Text('explain')->nullable();
            $table->integer('type')->nullable();
            $table->float('num')->nullable();
            $table->integer('levelvalue')->nullable();
            $table->integer('state')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('bohe_coupon');
    }
}
