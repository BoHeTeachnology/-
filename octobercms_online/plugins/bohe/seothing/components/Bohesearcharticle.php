<?php

namespace Bohe\Seothing\Components;

use Redirect;
use Cms\Classes\Page;
use Cms\Classes\ComponentBase;
use Bohe\Seothing\Models\Post as Seopost;
use Log;
use DB;
use App\Http\Controllers\Controller;

class Bohesearcharticle extends ComponentBase {
	/**
	 * A collection of posts to display
	 *
	 * @var Collection
	 */
	public $posts;
	public $post;
	public $hot;
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
						'default' => 'article/service',
						'group' => 'Links' 
				] 
		
		];
	}
	public function onRun() {
		$id = $this->param ( 'id' );
		if($id>0){
			$post = Seopost::where ( 'id', $id )->first ();
			if($post){
				$this->page['title']=(isset($post->title)?$post->title:null)."-薄荷牙医";
				$this->page['description']=isset($post->abstract)?$post->abstract:null;
				$this->page['keywords']=isset($post->tag)?$post->tag:null;
			}
			
			
		}else{
			$this->page['title']="牙科常见问题-薄荷牙医";
			$this->page['description']="牙科常见问题-薄荷牙医";
			$this->page['keywords']="牙科常见问题,薄荷牙医";
			
		}
		$this->posts = $this->page ['posts'] = $this->listPosts ();
		$this->post = $this->page ['post'] = $this->getpost ();
		$this->hot = $this->page ['hot'] = $this->gethotlist ();
		$this->tag = $this->page ['tag'] = $this->gettag ();
	}
	protected function listPosts() {
		$posts = Seopost::orderBy ( 'id', 'DESC' )->paginate ( 10 );
		
		$posts->each ( function ($post) {
			$post->setUrl ( $this->postPage, $this->controller );
		} );
		
		return $posts;
	}
	
	/*
	 * 问题排行
	 */
	public function gethotlist() {
		$hot = Seopost::orderBy ( 'hot', 'DESC' )->take ( 15 )->get ();
		if ($hot) {
			return $hot;
		} else {
			return null;
		}
	}
	
	/**
	 * 取出单条数据
	 *
	 * @return unknown
	 */
	protected function getpost() {
		$id = $this->param ( 'id' );
		
		$post = Seopost::where ( 'id', $id )->first ();
		// view加一
		if ($post) {
			$post->view = $post->view + 1;
			$post->save ();
		}
		
		return $post;
	}
	
	/**
	 * 取出单条数据的tag
	 *
	 * @return unknown
	 */
	protected function gettag() {
		$id = $this->param ( 'id' );
		
		$post = Seopost::where ( 'id', $id )->first ();
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
