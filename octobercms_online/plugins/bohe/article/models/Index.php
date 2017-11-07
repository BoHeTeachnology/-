<?php namespace Bohe\Article\Models;

use Model;
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
   /*
    *  定义与type表的关联
    */
	public $belongsToMany = [
			'types' => [
					'Bohe\Article\Models\Type',
					'table' => 'bohe_doctor_posts_types',
			],
			'cats' => [
					'Bohe\Article\Models\Cat',
					'table' => 'bohe_doctor_posts_cats',
			]
	];
	
	public $attachMany = [
			'qrcode_pic' => ['System\Models\File'],
			'certificate_one' => ['System\Models\File'],
			'certificate_two' => ['System\Models\File'],
			'certificate_three' => ['System\Models\File'],
	];
	public $attachOne = [
			'photo' => ['System\Models\File'],
	];
	/*
	 * 定义与user表的关联
	 */
	public $belongsTo = [
			'user' => ['RainLab\User\Models\User']
	];
	/*
	 * 定义与blog表的关联
	 */
	public $hasMany= [
			'blog' => [
					'RainLab\Blog\Models\Post',
					'table' => 'rainlab_blog_posts',
			],
			'date' => [
					'Bohe\Date\Models\Index',
					'table' => 'bohe_article_date',
			],
                        'message' => [
					'Bohe\Message\Models\Index',
					'table' => 'bohe_article_message',
			],
	];

	public function getLevelOptions($value, $formData)
	{
		return [
				'1' => '普通的',
				'2' => '高级的',
				
		];
	}
/**
 * 提供field的复选框使用
 * @param unknown $value
 * @param unknown $formData
 * @return string[]
 */
	public function getCheckStateOptions($value, $formData)
	{
		return [
				'0' => '未审核',
				'1' => '审核中',
				'2' => '审核成功',
				'3' => '审核失败',
	
		];
	}
	public function setUrl($pageName, $controller)
	{
		$params = [
				'uid' => $this->user_id,
				'id' => $this->id,
		];
		//return $this->url = $controller->pageUrl($pageName, $params);
		//return $this->url = '/bohedoctor/post/'.$this->id.'/uid/'.$this->user_id;
		$path=$_SERVER['HTTP_HOST'];
		return $this->url ="http://qr.liantu.com/api.php?w=200&m=10&text=http://".$path."/doctordetail/post/".$this->id;
	}
	/**
	 * Lists posts for the front end
	 * @param  array $options Display options
	 * @return self
	 */
	public function scopeListFrontEnd($query, $options)
	{
		/*
		 * Default options
		 */
		extract(array_merge([
				'page'       => 1,
				'perPage'    => 30,
				'sort'       => 'created_at',
				'types' => null,
				'type'   => null,
				'search'     => '',
				'exceptPost' => null,
		], $options));
	
		$searchableFields = ['name', 'jobtitle', 'excerpt', 'skilledin'];
	
	
		/*
		 * Ignore a post
		 */
		if ($exceptPost) {
			if (is_numeric($exceptPost)) {
				$query->where('id', '<>', $exceptPost);
			}
			else {
				$query->where('jobtitle', '<>', $exceptPost);
			}
		}

		/*
		 * Search
		 */
		$search = trim($search);
		if (strlen($search)) {
			$query->searchWhere($search, $searchableFields);
		}
	
		/*
		 * Categories
		 */
		if ($types !== null) {
			if (!is_array($types)) $types = [$types];
			$query->whereHas('types', function($q) use ($types) {
				$q->whereIn('id', $types);
			});
		}
	
		/*
		 * Category, including children
		 */
		if ($type !== null) {
			$type = Type::find($type);
	
			$types = $type->getAllChildrenAndSelf()->lists('id');
			$query->whereHas('types', function($q) use ($types) {
				$q->whereIn('id', $types);
			});
		}
	
		return $query->paginate($perPage, $page);
	}
	/*
	 * Disable timestamps by default.
	 * Remove this line if timestamps are defined in the database table.
	 */
	//public $timestamps = false;
	/*
	 * 主键
	 */
	protected $primaryKey = 'id';
	
	/*
	 * type  values are encoded as JSON before saving and converted to arrays after fetching.
	 */
	protected $jsonable = ['type'];

	/**
	 * @var string The database table used by the model.
	 */
	public $table = 'bohe_article_doctor';
}