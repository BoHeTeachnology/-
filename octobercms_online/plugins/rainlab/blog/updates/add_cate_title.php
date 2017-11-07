<?php namespace RainLab\Blog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddCateTitle extends Migration
{

	public function up()
	{
			Schema::table('rainlab_blog_categories',function($table)
		{
			$table->string('title')->nullable()->after('name');
		});
	}

	public function down()
	{
		$table->dropColumn('title');
	}

}
