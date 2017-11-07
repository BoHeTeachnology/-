<?php namespace Bohe\Date\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateBoheDate extends Migration
{

    public function up()
    {
        Schema::create('bohe_article_date', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedBigInteger('user_id')->nullable()->index();
            $table->integer('doc_id')->nullable();
            $table->integer('event_id')->nullable();
            $table->string('username')->nullable();
            $table->longText('content')->nullable();
            $table->integer('state')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('bohe_article_date');
    }

}
