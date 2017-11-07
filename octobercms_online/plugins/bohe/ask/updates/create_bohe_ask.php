<?php namespace Bohe\Ask\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateBoheAsk extends Migration
{

    public function up()
    {
        Schema::create('bohe_article_ask', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedBigInteger('user_id')->nullable()->index();
            $table->integer('doc_id')->nullable();
            $table->string('username')->nullable();
            $table->string('title')->nullable();
            $table->longText('content')->nullable();
            $table->longText('content_html')->nullable();
            $table->integer('state')->default(0);
            $table->integer('great')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('bohe_article_ask');
    }

}
