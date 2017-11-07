<?php namespace Bohe\Promotion\Models;

use Model;
use Html;
use Markdown;
use Db;
use Bohe\Promotion\Classes\TagProcessor;


/**
 * Model
 */
class Coupon extends Model
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
			'promotions' => ['Bohe\Promotion\Models\Promotion',
					'table' => 'bohe_promotion',
					'key' => 'coupon_id',
					'otherKey' => 'promotion_id'],
                        
            
	];
	
	/*
	 * Disable timestamps by default.
	 * Remove this line if timestamps are defined in the database table.
	 */
	//public $timestamps = false;

	/**
	 * @var string The database table used by the model.
	 */
	public $table = 'bohe_coupon';
}