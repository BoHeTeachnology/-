<?php namespace Bohe\Banner;

use System\Classes\PluginBase;
use Backend;

class Plugin extends PluginBase
{
	public function registerComponents()
	{
		return [
				'Bohe\Banner\Components\Boheservice'       => 'boheservice',
	
		];
	}
	public function registerFormWidgets()
	{
		return [
				'Bohe\Banner\FormWidgets\Preview' => [
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
    			'bohe.banner.access_message' => [
    					'tab' => 'bohe.banner::lang.tab',
    					'label' => 'bohe.banner::lang.label',
    			],
    	];
    }
    public function registerNavigation()
    {
    	return [
    			'banner' => [
    					'label'       => 'bohe.banner::lang.label',
    					'url'         => Backend::url('bohe/banner/index'),
    					'icon'        => 'icon-pencil',
    					'iconSvg'     => 'plugins/bohe/banner/assets/images/article.svg',
    					'permissions' => ['bohe.banner.*'],
    					'order'       => 50,
    			]
    	];
    }
}