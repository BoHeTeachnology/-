<?php namespace Bohe\Seothing\Models;

use Model;
use Html;
use Markdown;
use Db;
use Bohe\Seothing\Classes\TagProcessor;


/**
 * Model
 */
class Subkword extends Model
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


	/*
	 * Disable timestamps by default.
	 * Remove this line if timestamps are defined in the database table.
	 */
	//public $timestamps = false;

	/**
	 * @var string The database table used by the model.
	 */
	public $table = 'bohe_subkeyword';
}