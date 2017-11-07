<?php namespace Bohe\Article\Components;

use Redirect;
use Cms\Classes\Page;
use Cms\Classes\ComponentBase;
use Bohe\Article\Models\Index as ArticleIndex;
use Bohe\Article\Models\Type as ArticleType;
use Log;
use Illuminate\Support\Facades\Input;

class Bohelist extends ComponentBase
{
    /**
     * A collection of posts to display
     * @var Collection
     */
    public $posts;
    public $postPage;
    public $thedoctortypelist;
    public $doctype;
    public $firstpagedoctor;



    public function componentDetails()
    {
        return [
            'name'        => 'jollen.article::lang.settings.posts_title',
            'description' => 'jollen.article::lang.settings.posts_description'
        ];
    }

    public function defineProperties()
    {
        return [


            'postPage' => [
                'title'       => 'jollen.article::lang.settings.posts_post',
                'description' => 'jollen.article::lang.settings.posts_post_description',
                'type'        => 'dropdown',
                'default'     => 'article/doctor',
                'group'       => 'Links',
            ],

        ];
    }

    public function getPostPageOptions()
    {
    	return Page::sortBy('baseFileName')->lists('baseFileName', 'baseFileName');
    }

    public function onRun()
    {   // var_dump($this->getdoctortypelist());die;
        $this->posts= $this->page['posts'] = $this->listPosts();
        $this->thedoctortypelist= $this->page['thedoctortypelist'] = $this->getdoctortypelist();
        $this->doctype= $this->page['doctype'] = $this->getthetype();
        $this->firstpagedoctor= $this->page['firstpagedoctor'] = $this->getfirstpagedoctor();

    }
    public function onGetnext(){

      $page= Input::get('page');
      $type= Input::get('cat');
      $posts = ArticleIndex::listFrontEnd([
          'page'       => $page,
          'sort'       => $this->property('sortOrder'),
          'perPage'    => $this->property('postsPerPage'),
          'search'     => trim(input('search')),
          'type'       => $type,
      ]);
      $posts->each(function($post) {
        $post->setUrl($this->postPage, $this->controller);

      });

  $this->posts= $this->page['posts'] =    $posts;
  $this->type= $this->page['type'] =    $type;
  $this->page['typeName'] = 'doctor';
    }
/*
 * 获得医生列表的分类
 */
    protected function getdoctortypelist(){
    	$thetype=ArticleType::get();

    	return $thetype;
    }
    protected function getthetype(){
    	$type= $this->param ( 'type' ) ? $this->param ( 'type' ) : null;
    	if($type>0){
    		$thetype=ArticleType::where ( 'id', $type)->first ();
    		return $thetype->id;
    	}else{
    		$thetype=ArticleType::orderBy('id', 'asc')->first();
    		return $thetype->id;
    	}
      
    }

    protected function listPosts()
    {
    	//$type = $this->param('type')? $this->param('type') : null;
    	$type= $this->param ( 'type' ) ? $this->param ( 'type' ) : null;
    	//查找三项
    	if($type>0){
    		$sanxiang=ArticleType::where ( 'id', $type)->first ();
    		if($sanxiang){
    			$this->page['title']=$sanxiang->title;
    			$this->page['description']=$sanxiang->description;
    			$this->page['keywords']=$sanxiang->slug;
    		}
    	}else{
    		//查找标签ID
    		$thetype=ArticleType::orderBy('id', 'asc')->first();
    		if($thetype){
    			
    			$this->page['title']=$thetype->title;
    			$this->page['description']=$thetype->description;
    			$this->page['keywords']=$thetype->slug;
    			
    		}
    	}
    	
    	if($type>0){
    		$posts = ArticleIndex::listFrontEnd([
    				'page'       => $this->property('pageNumber'),
    				'sort'       => $this->property('sortOrder'),
    				'perPage'    => $this->property('postsPerPage'),
    				'search'     => trim(input('search')),
    				'type'       => $type,
    		]);
    		$posts->each(function($post) {
    			$post->setUrl($this->postPage, $this->controller);
    		});
    	}else{
    		//查找标签ID
    		$thetype=ArticleType::orderBy('id', 'asc')->first();
    		
    		
    		if($thetype){
    			$type=$thetype->id;
    		}else{
    			$type=null;
    		}
    		$posts = ArticleIndex::listFrontEnd([
    				'page'       => $this->property('pageNumber'),
    				'sort'       => $this->property('sortOrder'),
    				'perPage'    => $this->property('postsPerPage'),
    				'search'     => trim(input('search')),
    				'type'       => $type,
    		]);
    		$posts->each(function($post) {
    			$post->setUrl($this->postPage, $this->controller);
    		});
    	}
    	

        /*
         * List all the posts, eager load their categories
         */
      
        return $posts;
    }
    protected function getfirstpagedoctor(){
    	$first = ArticleIndex::where('sort','>',0)->orderBy('sort','asc')->get();
    	if($first){
    		return $first;
    	}else{
    		return null;
    	}
    }



}
