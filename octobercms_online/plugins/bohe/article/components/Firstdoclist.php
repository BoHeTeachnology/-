<?php namespace Bohe\Article\Components;

use Redirect;
use Cms\Classes\Page;
use Cms\Classes\ComponentBase;
use Bohe\Article\Models\Index as ArticleIndex;
use Bohe\Article\Models\Type as ArticleType;
use Log;
use Illuminate\Support\Facades\Input;

class Firstdoclist extends ComponentBase
{
    /**
     * A collection of posts to display
     * @var Collection
     */

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
    {   
        
        $this->firstpagedoctor= $this->page['firstpagedoctor'] = $this->getfirstpagedoctor();

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
