<?php namespace Bohe\Seothing\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddTag extends Migration
{

	public function up() {
		Schema::table('bohe_search_article', function ($table) {
			$table->string('tag')->nullable()->after('state');
		});
	}
	
	public function down() {
		Schema::table('bohe_search_article', function ($table) {
			$table->dropColumn('tag');
		});
	}
	

}
