<?php namespace Bohe\Article\Components;

use Redirect;
use Cms\Classes\Page;
use Cms\Classes\ComponentBase;
use Bohe\Article\Models\Index as ArticleIndex;
use Log;

class Doctor extends ComponentBase
{
    /**
     * A collection of posts to display
     * @var Collection
     */
    public $post;

 

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
                'default'     => 'article/thelist',
                'group'       => 'Links',
            ],
            
        ];
    }



    public function onRun()
    {   // var_dump($this->listPosts());die;
        $this->post= $this->page['post'] = $this->getPost();


    }



    protected function getPost()
    {
    	$id = $this->param('id')? $this->param('id') : 0;
        /*
         * List all the posts, eager load their categories
         */
        $post = ArticleIndex::where('id', $id)->first();
        $doctorname=isset($post->name)?$post->name:null;
        $institution=isset($post->institution)?$post->institution:null;
        $skilledin=isset($post->skilledin)?$post->skilledin:null;
        $office=isset($post->office)?$post->office:null;
        $dorctortype=isset($post->types[0]->name)?$post->types[0]->name:null;
        $this->page['title']="【".$doctorname."】".$institution."预约,".$institution."挂号,".$institution."专家号预约,".$institution."网上预约 - 薄荷牙医";
        $this->page['description']="【免费预约,无需排队】已有多位牙科患者成功免费预约了".$institution.$office.$doctorname."医生。".$doctorname."擅长：".$skilledin."，薄荷牙医提供北京大学口腔医院挂号以及北京牙科医院牙内科专家预约。薄荷牙医是北大口腔医院和北京口腔医院多位优质医生组成的口腔医院团队,旨在解决公立医院挂号难,私营诊所问诊贵的市场痛点,立志成为最优质的北京牙科医院,让优秀的牙医触手可及。薄荷牙医现营业务有：洗牙,补牙,种牙,正畸,镶牙,美白,儿童口腔,口腔检查。";
        $this->page['keywords']=$institution.$doctorname.",".$institution.$office.$doctorname.",薄荷牙医,北京牙科医院,北京口腔医院,北大口腔医院,洗牙,美白,补牙,种牙,正畸,镶牙,儿童口腔,口腔检查。";

        return $post;
    }


   
}
