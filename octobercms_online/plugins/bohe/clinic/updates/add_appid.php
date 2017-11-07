<?php namespace Bohe\Clinic\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddAppid extends Migration
{

	public function up() {
		Schema::table('bohe_clinic', function ($table) {
			$table->string('appid')->nullable()->after('addr');
		});
	}
	
	public function down() {
		Schema::table('bohe_clinic', function ($table) {
			$table->dropColumn('appid');
		});
	}
	

}
