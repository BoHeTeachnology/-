<?php namespace Bohe\Article\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddSort extends Migration
{

	public function up() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->integer('sort')->default(0)->nullable()->after('level');
		});
	}
	
	public function down() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->dropColumn('sort');
		});
	}
	

}
