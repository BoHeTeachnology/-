<?php namespace Bohe\Date\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddType extends Migration
{

	public function up()
	{
		Schema::table('bohe_article_date', function($table)
		{
			$table->integer('type_id')->nullable()->after('event_id');
		});
	}
	
	public function down()
	{
		Schema::table('bohe_article_date', function($table)
		{
			$table->dropColumn('type_id');
		});
	}
}
