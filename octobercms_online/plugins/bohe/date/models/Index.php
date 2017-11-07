<?php namespace Bohe\Date\Models;

use Model;
use Html;
use Markdown;
use Db;
use Bohe\Date\Classes\TagProcessor;


/**
 * Model
 */
class Index extends Model
{
	use \October\Rain\Database\Traits\Validation;

	/*
	 * Validation
	 */
	public $rules = [
	];

	public $attachMany = [
			'content_images' => ['System\Models\File'],
			'featured_images' => ['System\Models\File'],
	];
	
        public function getStateOptions($value, $formData)
	{
		return [
				'0' => '预约成功',
				'1' => '取消预约',
				'2' => '预约完成',
	
		];
	}
	/*
	 * Relations定义和医生的关联
	 */
	public $belongsTo = [
			'index' => ['Bohe\Article\Models\Index','key' => 'doc_id'],
			'event' => ['KurtJensen\MyCalendar\Models\Event','key' => 'event_id'],
			'user' => ['RainLab\User\Models\User','key' => 'user_id'],
                        'type' => ['KurtJensen\MyCalendar\Models\Type','key' => 'type_id']
	];
	
	/*
	 * Disable timestamps by default.
	 * Remove this line if timestamps are defined in the database table.
	 */
	//public $timestamps = false;

	/**
	 * @var string The database table used by the model.
	 */
	public $table = 'bohe_article_date';
}