<?php namespace Bohe\Clinic\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddCheckstate extends Migration
{

	public function up() {
		Schema::table('bohe_clinic', function ($table) {
			$table->integer('check_state')->default(0)->nullable()->after('content_html');
		});
	}
	
	public function down() {
		Schema::table('bohe_clinic', function ($table) {
			$table->dropColumn('check_state');
		});
	}
	

}
