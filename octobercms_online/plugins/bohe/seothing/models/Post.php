<?php namespace Bohe\Seothing\Models;

use Model;
use Html;
use Markdown;
use Db;
use Bohe\Seothing\Classes\TagProcessor;
use Backend\Models\User;
use Carbon\Carbon;
use Cms\Classes\Page as CmsPage;
use Cms\Classes\Theme;


/**
 * Model
 */
class Post extends Model
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
	
	public function setUrl($pageName, $controller)
	{
		$params = [
				'id'   => $this->id,
		];
		
	
		
		return $this->url = '/usercenter/wenti/'.$this->id;
	}
	public function scopeListFrontEnd($query, $options)
	{
		/*
		 * Default options
		 */
		extract(array_merge([
				'page'       => 1,
				'perPage'    => 30,
				'sort'       => 'created_at',

				'search'     => '',
				'exceptPost' => null,
		], $options));
		
		$searchableFields = ['title', 'content'];
		
		
		
		/*
		 * Ignore a post
		 */
	
		
		/*
		 * Sorting
		 */
		if (!is_array($sort)) {
			$sort = [$sort];
		}
		
		foreach ($sort as $_sort) {
			
			if (in_array($_sort, array_keys(self::$allowedSortingOptions))) {
				$parts = explode(' ', $_sort);
				if (count($parts) < 2) {
					array_push($parts, 'desc');
				}
				list($sortField, $sortDirection) = $parts;
				if ($sortField == 'random') {
					$sortField = Db::raw('RAND()');
				}
				$query->orderBy($sortField, $sortDirection);
			}
		}
		
		/*
		 * Search
		 */
		$search = trim($search);
		if (strlen($search)) {
			$query->searchWhere($search, $searchableFields);
		}
		
		return $query->paginate($perPage, $page);
	}
	/*
	 * Disable timestamps by default.
	 * Remove this line if timestamps are defined in the database table.
	 */
	//public $timestamps = false;

	/**
	 * @var string The database table used by the model.
	 */
	public $table = 'bohe_search_article';
}