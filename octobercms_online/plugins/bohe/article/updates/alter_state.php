<?php namespace Bohe\Article\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AlterState extends Migration
{

	public function up() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->integer('state')->nullable()->change();
		});
	}
	
	public function down() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->boolean('state')->default(true)->change();
		});
	}
	

}
