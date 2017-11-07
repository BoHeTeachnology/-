<?php namespace Bohe\Seothing\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddView extends Migration
{

	public function up() {
		Schema::table('bohe_search_article', function ($table) {
			$table->integer('view')->default(0)->nullable()->after('state');
		});
	}
	
	public function down() {
		Schema::table('bohe_search_article', function ($table) {
			$table->dropColumn('view');
		});
	}
	

}
