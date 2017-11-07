<?php namespace Bohe\Seothing\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddAbstract extends Migration
{

	public function up() {
		Schema::table('bohe_search_article', function ($table) {
			$table->longText('abstract')->nullable()->after('title');
		});
	}
	
	public function down() {
		Schema::table('bohe_search_article', function ($table) {
			$table->dropColumn('abstract');
		});
	}
	

}
