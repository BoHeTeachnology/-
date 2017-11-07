<?php

namespace Bohe\Seothing\Components;

use Redirect;
use Cms\Classes\Page;
use Cms\Classes\ComponentBase;
use Bohe\Seothing\Models\Post as Seopost;
use Log;
use DB;
use App\Http\Controllers\Controller;

class Unionarticle extends ComponentBase {
	/**
	 * A collection of posts to display
	 *
	 * @var Collection
	 */
	public $unionpost;
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
						'default' => 'article/service',
						'group' => 'Links' 
				] 
		
		];
	}
	public function onRun() {
		$this->unionpost = $this->page ['unionpost'] = $this->getunionpost ();
	}
	protected function listPosts() {
		$category = 1;
		$posts = Seopost::paginate ( 10 );
		
		$posts->each ( function ($post) {
			$post->setUrl ( $this->postPage, $this->controller );
		} );
		
		return $posts;
	}
	
	/**
	 * 查询单条数据的关联文章
	 *
	 * @return unknown
	 */
	protected function getunionpost() {
		$id = $this->param ( 'id' );
		
		$post = Seopost::where ( 'id', $id )->first ();
		if ($post && $post->tag != '' && $post->tag != null) {
			$tag = trim ( $post->tag, '' );
			if (strpos ( $tag, ',' ) !== false) {
				$tags = explode ( ',', $tag );
				$tags = array_filter ( $tags );
				
				foreach ( $tags as $k => $v ) {
					$gets [$k] = DB::select ( "select * from bohe_search_article where FIND_IN_SET('$v',tag) and id not in ($id) order by hot desc limit 10" );
				}
				if (count ( $gets ) > 0) {
					$g = array ();
					foreach ( $gets as $k => $v ) {
						foreach ( $v as $s ) {
							$g [] = $s;
						}
					}
					return $g;
				} else {
					return null;
				}
			} else {
				$gets = DB::select ( "select * from bohe_search_article where FIND_IN_SET('$tag',tag) and id not in ($id) order by hot desc limit 10" );
				if ($gets) {
					return $gets;
				} else {
					return null;
				}
			}
		} else {
			// 查找前十篇文章
			$gets = Seopost::where ( 'hot', '>', 0 )->paginate ( 15 );
			if ($gets) {
				return $gets;
			} else {
				return null;
			}
		}
	}
}
