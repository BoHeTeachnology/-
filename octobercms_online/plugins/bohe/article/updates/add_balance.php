<?php namespace Bohe\Article\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddBalance extends Migration
{

	public function up() { 
		Schema::table('bohe_article_doctor', function ($table) {
			$table->float('balance',2)->nullable()->after('check_info');
		});
	}
	
	public function down() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->dropColumn('balance');
		});
	}
	

}
