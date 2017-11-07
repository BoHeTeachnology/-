<?php namespace Bohe\Article\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddIdentity extends Migration
{

	public function up() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->string('identity')->nullable()->after('introduce');
		});
	}
	
	public function down() {
		Schema::table('bohe_article_doctor', function ($table) {
			$table->dropColumn('identity');
		});
	}
	

}
