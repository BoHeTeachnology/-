<?php namespace Bohe\Findcat;

use System\Classes\PluginBase;
use Backend;

class Plugin extends PluginBase
{
	public function registerComponents()
	{
		return [
				'Bohe\Findcat\Components\Bohefindcat'       => 'bohefindcat',
	
		];
	}
	public function registerFormWidgets()
	{
		return [
				'Bohe\Findcat\FormWidgets\Preview' => [
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
    			'bohe.findcat.access_findcat' => [
    					'tab' => 'bohe.findcat::lang.tab',
    					'label' => 'bohe.findcat::lang.label',
    			],
    	];
    }
    public function registerNavigation()
    {
    	return [
    			'findcat' => [
    					'label'       => 'bohe.findcat::lang.label',
    					'url'         => Backend::url('bohe/findcat/index'),
    					'icon'        => 'icon-pencil',
    					'iconSvg'     => 'plugins/bohe/findcat/assets/images/article.svg',
    					'permissions' => ['bohe.findcat.*'],
    					'order'       => 50,
    			]
    	];
    }
}