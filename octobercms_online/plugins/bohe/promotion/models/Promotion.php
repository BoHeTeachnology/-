<?php namespace Bohe\Promotion\Models;

use Model;
use Html;
use Markdown;
use Db;
use Bohe\Promotion\Classes\TagProcessor;


/**
 * Model
 */
class Promotion extends Model
{
	use \October\Rain\Database\Traits\Validation;

	/*
	 * Validation
	 */
	public $rules = [
	];

	public $attachMany = [
			'featured_images' => ['System\Models\File'],
	];
	
       public $belongsToMany = [
		'coupons' => ['Bohe\Promotion\Models\Coupon',
			'table' => 'bohe_promotion_coupon',
			'key' => 'promotion_id',
			'otherKey' => 'coupon_id',
		],
		
	];
	
	/*
	 * Disable timestamps by default.
	 * Remove this line if timestamps are defined in the database table.
	 */
	//public $timestamps = false;

	/**
	 * @var string The database table used by the model.
	 */
	public $table = 'bohe_promotion';
}