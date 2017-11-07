<?php

namespace Bohe\Seothing\Components;

use Redirect;
use Cms\Classes\Page;
use Cms\Classes\ComponentBase;
use Bohe\Seothing\Models\Post as Seopost;
use Bohe\Article\Models\Index as DoctorIndex;
use Log;
use DB;
use App\Http\Controllers\Controller;

class Articledoctor extends ComponentBase {
	/**
	 * A collection of posts to display
	 *
	 * @var Collection
	 */
	public $doctorlist;

	public function componentDetails() {
		return [ 
				'name' => 'bohe.seothing::lang.settings.posts_title',
				'description' => 'bohe.seothing::lang.settings.posts_description' 
		];
	}
	public function defineProperties() {
		return [ 
				
				'postPage' => [ 
						'title' => 'bohe.service::lang.settings.posts_post',
						'description' => 'bohe.service::lang.settings.posts_post_description',
						'type' => 'dropdown',
						'default' => 'article/seothing',
						'group' => 'Links' 
				] 
		
		];
	}
	public function onRun() {
		$this->doctorlist= $this->page ['doctorlist'] = $this->getdocpost();
		
	}
	protected function getdocpost() {
		
		$posts = DoctorIndex::where('sort','>',0)->orderBy ( 'sort', 'ASC' )->take ( 3 )->get();
		if ($posts) {
			return $posts;
		} else {
			return null;
		}
	}

}
