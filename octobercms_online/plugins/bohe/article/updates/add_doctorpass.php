<?php namespace Bohe\Article\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddDoctorpass extends Migration
{

	public function up() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->string('doctor_pass')->nullable()->after('wechat');
		});
	}
	
	public function down() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->dropColumn('doctor_pass');
		});
	}
	

}
