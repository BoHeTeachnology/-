<?php namespace Bohe\Seothing;

use System\Classes\PluginBase;
use Backend;

class Plugin extends PluginBase
{
	public function registerComponents()
	{
		return [
				'Bohe\Seothing\Components\Bohesearcharticle'       => 'searcharticle',
				'Bohe\Seothing\Components\Unionarticle'       => 'unionarticle',
				'Bohe\Seothing\Components\Tagarticle'       => 'tagarticle',
				'Bohe\Seothing\Components\Articledoctor'       => 'articledoctor',
	
		];
	}
	public function registerFormWidgets()
	{
		return [
				'Bohe\Seothing\FormWidgets\Preview' => [
						'label' => 'Preview',
						'code'  => 'preview'
				]
		];
	}
    public function registerSettings()
    {
    }
    public function registerPermissions()
    {
    	return [
    			'bohe.seothing.access_seothings' => [
    					'tab' => 'bohe.seothing::lang.tab',
    					'label' => 'bohe.seothing::lang.label',
    			],
    			'bohe.seothing.access_import_export' => [
    					'tab'   => 'bohe.seothing::lang.seothing.tab',
    					'label' => 'bohe.seothing::lang.seothing.access_import_export'
    			],
    	];
    }
    public function registerNavigation()
    {
    	return [
    			'seothing' => [
    					'label'       => 'bohe.seothing::lang.label',
    					'url'         => Backend::url('bohe/seothing/index'),
    					'icon'        => 'icon-pencil',
    					'iconSvg'     => 'plugins/bohe/findcat/assets/images/article.svg',
    					'permissions' => ['bohe.seothing.*'],
    					'order'       => 50,
    					'sideMenu' => [
    							'article' => [
    									'label'       => '文章',
    									'icon'        => 'icon-copy',
    									'url'         => Backend::url('bohe/seothing/index'),
    									'permissions' => ['bohe.seothing.*']
    							],
    							
    					],
    			]
    	];
    }
}