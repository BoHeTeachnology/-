<?php namespace Bohe\Banner\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateBoheBanner extends Migration
{

    public function up()
    {
        Schema::create('bohe_article_banner', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');          
            $table->string('title')->nullable();
            $table->text('content')->nullable();
            $table->string('url')->nullable();
            $table->integer('state')->default(0);
            $table->date('starttime')->nullable();
            $table->date('endtime')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('bohe_article_banner');
    }

}
