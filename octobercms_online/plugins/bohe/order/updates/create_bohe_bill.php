<?php namespace Bohe\Order\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateBoheBill extends Migration
{

    public function up()
    {
        Schema::create('bohe_bohe_bill', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->integer('order_id')->nullable();
            $table->dateTime('order_date')->nullable();
            $table->string('wechat_order_id')->nullable();
            $table->string('wechat_openid')->nullable();
            $table->string('username')->nullable();
            $table->string('type')->nullable();
            $table->integer('doctor_id')->nullable();
            $table->string('doctor_name')->nullable();
            $table->string('clinic')->nullable();
            $table->string('channel')->nullable();
            $table->integer('channel_id')->nullable();
            $table->integer('use_coupon')->default(0);
            $table->string('coupon_name')->nullable();
            $table->string('coupon_id')->nullable();
            $table->float('price');
            $table->float('income')->nullable();
            $table->float('doc_income')->nullable();
            $table->float('clinic_income')->nullable();
            $table->float('bohe_income')->nullable();
            $table->integer('pay_type')->default(0);
            $table->integer('state')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('bohe_bohe_bill');
    }

}
