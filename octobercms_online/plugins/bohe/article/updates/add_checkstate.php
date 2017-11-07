<?php namespace Bohe\Article\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddCheckstate extends Migration
{

	public function up() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->integer('check_state')->default(0)->nullable()->after('state');
		});
	}
	
	public function down() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->dropColumn('check_state');
		});
	}
	

}
