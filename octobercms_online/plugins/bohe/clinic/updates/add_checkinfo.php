<?php namespace Bohe\Clinic\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddCheckinfo extends Migration
{

	public function up() {
		Schema::table('bohe_clinic', function ($table) {
			$table->text('check_info')->nullable()->after('state');
		});
	}
	
	public function down() {
		Schema::table('bohe_clinic', function ($table) {
			$table->dropColumn('check_info');
		});
	}
	

}
