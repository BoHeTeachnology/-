<?php namespace Bohe\Article\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddComefrom extends Migration
{

	public function up() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->integer('source')->nullable()->after('level');
		});
	}
	
	public function down() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->dropColumn('source');
		});
	}
	

}
