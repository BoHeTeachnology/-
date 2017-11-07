<?php namespace Bohe\Message;

use System\Classes\PluginBase;
use Backend;

class Plugin extends PluginBase
{
	public function registerComponents()
	{
		return [
				'Bohe\Message\Components\Boheservice'       => 'boheservice',
	
		];
	}
	public function registerFormWidgets()
	{
		return [
				'Bohe\Message\FormWidgets\Preview' => [
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
    			'bohe.service.access_message' => [
    					'tab' => 'bohe.message::lang.tab',
    					'label' => 'bohe.message::lang.label',
    			],
    	];
    }
    public function registerNavigation()
    {
    	return [
    			'message' => [
    					'label'       => 'bohe.message::lang.label',
    					'url'         => Backend::url('bohe/message/index'),
    					'icon'        => 'icon-pencil',
    					'iconSvg'     => 'plugins/bohe/message/assets/images/article.svg',
    					'permissions' => ['bohe.message.*'],
    					'order'       => 50,
    			]
    	];
    }
}