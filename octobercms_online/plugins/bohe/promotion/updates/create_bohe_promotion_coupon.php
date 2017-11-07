<?php namespace Bohe\Promotion\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateBohePromotionCoupon extends Migration
{

    public function up()
    {
        
        Schema::create('bohe_promotion_coupon', function ($table) {
            $table->engine = 'InnoDB';
            $table->integer('promotion_id')->unsigned();
            $table->integer('coupon_id')->unsigned();
            $table->primary(['promotion_id', 'coupon_id'], 'promotion_coupon');
        });
    }

    public function down()
    {
        Schema::drop('bohe_promotion_coupon');
    }

}
