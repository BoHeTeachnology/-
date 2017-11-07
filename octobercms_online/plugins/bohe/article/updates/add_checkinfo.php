<?php namespace Bohe\Article\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddCheckinfo extends Migration
{

	public function up() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->text('check_info')->nullable()->after('check_state');
		});
	}
	
	public function down() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->dropColumn('check_info');
		});
	}
	

}
