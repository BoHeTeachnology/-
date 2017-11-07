<?php namespace RainLab\Blog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class AddIndexid extends Migration
{

	public function up()
	{
			Schema::table('rainlab_blog_posts',function($table)
		{
			$table->integer('index_id')->nullable()->after('published');
		});
	}

	public function down()
	{
		$table->dropColumn('index_id');
	}

}
