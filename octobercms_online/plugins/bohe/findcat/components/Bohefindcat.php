<?php namespace Bohe\Findcat\Components;

use Redirect;
use Cms\Classes\Page;
use Cms\Classes\ComponentBase;
use Bohe\Findcat\Models\Index as FindcatIndex;
use Log;

class Bohefindcat extends ComponentBase
{
    /**
     * A collection of posts to display
     * @var Collection
     */
    public $posts;
    public $post;



    public function componentDetails()
    {
        return [
            'name'        => 'bohe.findcat::lang.settings.posts_title',
            'description' => 'bohe.findcat::lang.settings.posts_description'
        ];
    }

    public function defineProperties()
    {
        return [


            'postPage' => [
                'title'       => 'bohe.service::lang.settings.posts_post',
                'description' => 'bohe.service::lang.settings.posts_post_description',
                'type'        => 'dropdown',
                'default'     => 'article/service',
                'group'       => 'Links',
            ],

        ];
    }



    public function onRun()
    {
        $this->posts= $this->page['thelist'] = $this->listPosts();


    }



    protected function listPosts()
    {

        /*
         * List all the posts, eager load their categories
         */


    	/*
    	 * List all the posts, eager load their categories
    	 */
    	$posts = FindcatIndex::get();

        return $posts;
    }
    /**
     * 取出单条数据
     * @return unknown
     */
    protected function getpost()
    {

    	$id = $this->param('id');

    	$post = ServiceIndex::where('id', $id)->first();

    	return $post;
    }



}
