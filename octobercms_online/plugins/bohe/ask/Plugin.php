<?php namespace Bohe\Ask;

use System\Classes\PluginBase;
use Backend;

class Plugin extends PluginBase
{
	public function registerComponents()
	{
		return [
				'Bohe\Ask\Components\Boheservice'       => 'boheservice',
	
		];
	}
	public function registerFormWidgets()
	{
		return [
				'Bohe\Ask\FormWidgets\Preview' => [
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
    			'bohe.ask.access_message' => [
    					'tab' => 'bohe.ask::lang.tab',
    					'label' => 'bohe.ask::lang.label',
    			],
    	];
    }
    public function registerNavigation()
    {
    	return [
    			'message' => [
    					'label'       => 'bohe.ask::lang.label',
    					'url'         => Backend::url('bohe/ask/index'),
    					'icon'        => 'icon-pencil',
    					'iconSvg'     => 'plugins/bohe/ask/assets/images/article.svg',
    					'permissions' => ['bohe.ask.*'],
    					'order'       => 50,
    			]
    	];
    }
}