<?php namespace Bohe\Clinic\Models;

use Model;
use Html;
use Markdown;
use Db;
use Bohe\Clinic\Classes\TagProcessor;


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
                        'featured_images2' => ['System\Models\File'],
                        'featured_images3' => ['System\Models\File'],
	];
        public function getCheckStateOptions($value, $formData)
	{
		return [
				'0' => '未审核',
				'1' => '审核中',
				'2' => '审核成功',
				'3' => '审核失败',
	
		];
	}
        /*
	 * 定义与user表的关联
	 */
	public $belongsTo = [
			'user' => ['RainLab\User\Models\User']
	];
	public static function formatHtml($input, $preview = false)
	{
		$result = Markdown::parse(trim($input));
	
		if ($preview) {
			$result = str_replace('<pre>', '<pre class="prettyprint">', $result);
		}
	
		$result = TagProcessor::instance()->processTags($result, $preview);
	
		return $result;
	}
	
	public function beforeSave()
	{
		$this->content_html = self::formatHtml($this->content);
	}
	
	/*
	 * Disable timestamps by default.
	 * Remove this line if timestamps are defined in the database table.
	 */
	//public $timestamps = false;

	/**
	 * @var string The database table used by the model.
	 */
	public $table = 'bohe_clinic';
}