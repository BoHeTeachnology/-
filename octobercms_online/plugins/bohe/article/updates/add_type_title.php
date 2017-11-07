<?php namespace Bohe\Article\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddTypeTitle extends Migration
{

	public function up() {
		Schema::table('bohe_doctor_types', function ($table) {
			$table->string('title')->nullable()->after('name');
		});
	}
	
	public function down() {
		Schema::table('bohe_doctor_types', function ($table) {
			$table->dropColumn('title');
		});
	}
	

}
