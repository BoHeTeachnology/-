<?php namespace Bohe\Article\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddQrurl extends Migration
{

	public function up() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->string('qrurl')->nullable()->after('sex');
		});
	}
	
	public function down() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->dropColumn('qrurl');
		});
	}
	

}
