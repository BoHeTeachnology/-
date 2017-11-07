<?php namespace KurtJensen\MyCalendar\Updates;

use October\Rain\Database\Updates\Migration;
use Schema;

class CreateTypesTable extends Migration
{

    public function up()
    {
        Schema::create('kurtjensen_mycal_types', function ($table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('slug')->nullable();
            $table->string('description')->nullable();
            $table->integer('permission_id')->nullable()->unsigned();
            $table->timestamps();
        });

        Schema::create('kurtjensen_mycal_types_events', function ($table) {
            $table->engine = 'InnoDB';
            $table->integer('event_id')->unsigned();
            $table->integer('type_id')->unsigned();
            $table->primary(['event_id', 'type_id'], 'event_type');
        });
    }

    public function down()
    {
        Schema::dropIfExists('kurtjensen_mycal_types_events');
        Schema::dropIfExists('kurtjensen_mycal_types');
    }

}
