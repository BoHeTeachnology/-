<?php

namespace Bohe\Seothing\Components;

use Redirect;
use Cms\Classes\Page;
use Cms\Classes\ComponentBase;
use Bohe\Seothing\Models\Post as Seopost;
use Log;
use DB;
use App\Http\Controllers\Controller;

class Tagarticle extends ComponentBase {
	/**
	 * A collection of posts to display
	 *
	 * @var Collection
	 */
	public $tagpost;
	public $firsttag;
	public $tag;
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
		$tag = $this->param ( 'tag' );
		if ($tag != '') {
			$post = Seopost::whereRaw ( "title='$tag' or title like '%$tag%'  " )->orderBy ( 'hot', 'DESC' )->first ();
			if(count($post)!=1){
				return Redirect::to('/404.html');
			}else {
				$this->tagpost = $this->page ['tagpost'] = $this->gettagpost ();
				$this->firsttag = $this->page ['firsttag'] = $this->gettagfirst ();
				$this->tag = $this->page ['tag'] = $this->gettag ();
			}
		}else{
			$this->tagpost = $this->page ['tagpost'] = $this->gettagpost ();
			$this->firsttag = $this->page ['firsttag'] = $this->gettagfirst ();
			$this->tag = $this->page ['tag'] = $this->gettag ();
		}
		
	}
	protected function gettagpost() {
		$tag = $this->param ( 'tag' );
		if ($tag != '') {
			$posts = Seopost::whereRaw ( "FIND_IN_SET('$tag',tag) or title like '%$tag%' " )->orderBy ( 'hot', 'DESC' )->paginate ( 20 );
			// $posts = DB::select("select * from bohe_search_article where FIND_IN_SET('$tag',tag) or FIND_IN_SET('$tag',title) order by hot desc ")->paginate(10);
		}
		
		if ($posts) {
			return $posts;
		} else {
			return null;
		}
	}
	protected function gettagfirst() {
		$tag = $this->param ( 'tag' );
		if ($tag != '') {
			$post = Seopost::whereRaw ( "title='$tag' or title like '%$tag%'  " )->orderBy ( 'hot', 'DESC' )->first ();
			if(count($post)!=1){
				$post = Seopost::orderByRaw('RAND()')->first ();
			}
			// 查找是否有图片
			if ($post) {
				preg_match ( '/<img.+src=\"?(.+\.(jpg|gif|bmp|bnp|png))\"?.+>/i', $post->content_html, $match );
				if (isset($match[1])) {
					$post->imgsrc = $match[1];
				}
			}
			$this->page['title']=(isset($tag)?$tag:null)."-薄荷牙医";
			$this->page['description']=isset($post->abstract)?$post->abstract:null;
			$this->page['keywords']=isset($post->tag)?$post->tag:null;
			
		}
		
		if ($post) {
			return $post;
		} else {
			return null;
		}
	}
	protected function gettag() {
		$tag = $this->param ( 'tag' );
		if ($tag != '') {
			$post = Seopost::whereRaw ( "title='$tag' or title like '%$tag%' " )->orderBy ( 'hot', 'DESC' )->first ();
			if(count($post)!=1){
				$post = Seopost::orderByRaw('RAND()')->first ();
			}
			if ($post) {
				if ($post->tag != '' && $post->tag != null) {
					$tag = trim ( $post->tag, '' );
					if (strpos ( $tag, ',' ) !== false) {
						$tags = explode ( ',', $tag );
						return $tags;
					} else {
						return $post->tag;
					}
				} else {
					return null;
				}
			}
		}
	}
}
