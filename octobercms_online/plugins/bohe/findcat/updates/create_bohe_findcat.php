<?php namespace Bohe\Findcat\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateBoheFindcat extends Migration
{

    public function up()
    {
        Schema::create('bohe_article_findcat', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('title')->nullable();
            $table->longText('content')->nullable();
            $table->integer('cat_id')->nullable();;
            $table->boolean('state')->default(true);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('bohe_article_findcat');
    }

}
