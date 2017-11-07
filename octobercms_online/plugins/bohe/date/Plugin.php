<?php namespace Bohe\Date;

use System\Classes\PluginBase;
use Backend;

class Plugin extends PluginBase
{
	public function registerComponents()
	{
		return [
				'Bohe\Date\Components\Boheservice'       => 'boheservice',
	
		];
	}
	public function registerFormWidgets()
	{
		return [
				'Bohe\Date\FormWidgets\Preview' => [
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
    			'bohe.date.access_date' => [
    					'tab' => 'bohe.date::lang.tab',
    					'label' => 'bohe.date::lang.label',
    			],
    	];
    }
    public function registerNavigation()
    {
    	return [
    			'date' => [
    					'label'       => 'bohe.date::lang.label',
    					'url'         => Backend::url('bohe/date/index'),
    					'icon'        => 'icon-pencil',
    					'iconSvg'     => 'plugins/bohe/date/assets/images/article.svg',
    					'permissions' => ['bohe.date.*'],
    					'order'       => 50,
    			]
    	];
    }
}