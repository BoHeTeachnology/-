<?php namespace Bohe\Article\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateCatsTable extends Migration
{

    public function up()
    {
        Schema::create('bohe_doctor_cats', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('title')->nullable();
            $table->string('slug')->nullable()->index();
            $table->string('code')->nullable();
            $table->text('description')->nullable();
            $table->integer('parent_id')->unsigned()->index()->nullable();
            $table->integer('nest_left')->nullable();
            $table->integer('nest_right')->nullable();
            $table->integer('nest_depth')->nullable();
            $table->timestamps();
        });

        Schema::create('bohe_doctor_posts_cats', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('index_id')->unsigned();
            $table->integer('cat_id')->unsigned();
            $table->primary(['index_id', 'cat_id']);
        });
    }

    public function down()
    {
        Schema::drop('bohe_doctor_cats');
        Schema::drop('bohe_doctor_posts_cats');
    }

}
