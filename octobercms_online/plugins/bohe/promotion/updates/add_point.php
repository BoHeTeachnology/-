<?php namespace Bohe\Promotion\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddCheckstate extends Migration
{

	public function up() {
		Schema::table('bohe_promotion', function ($table) {
			$table->integer('point')->default(0)->nullable()->after('state');
		});
	}
	
	public function down() {
		Schema::table('bohe_promotion', function ($table) {
			$table->dropColumn('point');
		});
	}
	

}