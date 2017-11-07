<?php namespace KurtJensen\MyCalendar\Models;

use Model;

/**
 * CategorysEvents Model
 */
class TypesEvents extends Model {

	/**
	 * @var string The database table used by the model.
	 */
	public $table = 'kurtjensen_mycal_types_events';

	/**
	 * @var array Guarded fields
	 */
	protected $guarded = [];

	/**
	 * @var array Fillable fields
	 */
	protected $fillable = ['*'];

	/**
	 * @var array Relations
	 */
	public $hasOne = [
		'type' => ['KurtJensen\MyCalendar\Models\Type',
			'table' => 'kurtjensen_mycal_types',
		],
		'event' => ['KurtJensen\MyCalendar\Models\Event',
			'table' => 'kurtjensen_mycal_event',
		],
	];

}