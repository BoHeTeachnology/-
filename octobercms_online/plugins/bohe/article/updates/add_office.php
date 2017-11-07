<?php namespace Bohe\Article\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddOffice extends Migration
{

	public function up() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->string('office')->nullable()->after('phone');
		});
	}
	
	public function down() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->dropColumn('office');
		});
	}
	

}
