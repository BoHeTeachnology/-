<?php namespace Bohe\Article\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddTurnnum extends Migration
{

	public function up() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->integer('turn_num')->default(0)->nullable()->after('qrurl');
		});
	}
	
	public function down() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->dropColumn('turn_num');
		});
	}
	

}
