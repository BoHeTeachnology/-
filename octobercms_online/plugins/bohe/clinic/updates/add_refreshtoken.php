<?php namespace Bohe\Clinic\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddRefreshtoken extends Migration
{

	public function up() {
		Schema::table('bohe_clinic', function ($table) {
			$table->string('refresh_token')->nullable()->after('addr');
		});
	}
	
	public function down() {
		Schema::table('bohe_clinic', function ($table) {
			$table->dropColumn('refresh_token');
		});
	}
	

}
