<?php namespace Bohe\Seothing\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateSearchArticle extends Migration
{

    public function up()
    {
        Schema::create('bohe_search_article', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('title')->nullable();
            $table->longText('content')->nullable();
            $table->longText('content_html')->nullable();
            $table->string('keyid')->nullable();
            $table->string('subkeyid')->nullable();
            $table->integer('state')->nullable();
            $table->integer('hot')->nullable();
            $table->integer('level')->nullable();
            $table->integer('batch')->nullable();
            $table->integer('edit')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('bohe_search_article');
    }

}
