<?php namespace Bohe\Article;

use System\Classes\PluginBase;
use Backend;

class Plugin extends PluginBase
{
	public function pluginDetails()
	{
		return [
				'name'        => 'bohe.article::lang.name',
				'description' => 'bohe.article::lang.description',
				'author'      => 'bohe.article::lang.author',
				'icon'        => 'icon-pencil',
				'homepage'    => 'https://github.com/rainlab/blog-plugin'
		];
	}
	public function registerComponents()
	{
		return [
				'Bohe\Article\Components\Bohelist'       => 'articlebohelist',
				'Bohe\Article\Components\Firstdoclist'   => 'firstdoclist',
				'Bohe\Article\Components\Doctor'       => 'bohedoctor',
				'Bohe\Article\Components\First'       => 'firstform',
				'Bohe\Article\Components\Update'       => 'updateform',
				'Bohe\Article\Components\Updatephoto'       => 'updateformphoto',
				'Bohe\Article\Components\Updateone'     => 'updateformone',
				'Bohe\Article\Components\Updatetwo'     => 'updateformtwo',
				'Bohe\Article\Components\Updatethree'     => 'updateformthree',
				'Bohe\Article\Components\Index'        => 'theindexform',
				'Bohe\Article\Components\Updateuser'        => 'updateuser',
				'Bohe\Article\Components\Userindex'        => 'userindex',
				'Bohe\Article\Components\Usercenter'        => 'usercenter',
				'Bohe\Article\Components\Mycalendar'        => 'mycalendar',
	
		];
	}
	/**
	 * Registers any back-end permissions used by this plugin.
	 *
	 * @return array
	 */
	public function registerPermissions()
	{
		return [
				'bohe.article.access_articles' => [
						'tab' => 'bohe.article::lang.tab',
						'label' => 'bohe.article::lang.label',
				],
				'bohe.article.access_import_export' => [
						'tab'   => 'bohe.article::lang.article.tab',
						'label' => 'bohe.article::lang.article.access_import_export'
				],
		];
	}
	
    public function registerSettings()
    {
    }
    public function registerNavigation()
    {
    	return [
    			'article' => [
    					'label'       => 'bohe.article::lang.label',
    					'url'         => Backend::url('bohe/article/index'),
    					'icon'        => 'icon-pencil',
    					'iconSvg'     => 'plugins/bohe/article/assets/images/doctor.svg',
    					'permissions' => ['bohe.article.*'],
    					'order'       => 50,
    					'sideMenu' => [

    							'types' => [
    									'label'       => 'bohe.article::lang.article.types',
    									'icon'        => 'icon-list-ul',
    									'url'         => Backend::url('bohe/article/types'),
    									'permissions' => ['bohe.article.*']
    							],
    							'cats' => [
    									'label'       => 'bohe.article::lang.article.cats',
    									'icon'        => 'icon-list-ul',
    									'url'         => Backend::url('bohe/article/cats'),
    									'permissions' => ['bohe.article.*']
    							]
    					]
    			],
    			
    	];
    }
}