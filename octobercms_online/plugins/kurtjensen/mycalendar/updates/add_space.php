<?php namespace KurtJensen\MyCalendar\Updates;

use October\Rain\Database\Updates\Migration;
use Schema;

class AddSpace extends Migration {

	public function up() {
		Schema::table('kurtjensen_mycal_events', function ($table) {
			$table->time('spacetime')->nullable()->after('time');
			$table->time('end_time')->nullable()->after('spacetime');
		});
	}

	public function down() {
		Schema::table('kurtjensen_mycal_events', function ($table) {
			$table->dropColumn('spacetime');
			$table->dropColumn('end_time');
		});
	}

}
