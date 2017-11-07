<?php namespace Bohe\Clinic;

use System\Classes\PluginBase;
use Backend;

class Plugin extends PluginBase
{
	public function registerComponents()
	{
		return [
				'Bohe\Clinic\Components\Boheservice'       => 'boheservice',
	
		];
	}
	public function registerFormWidgets()
	{
		return [
				'Bohe\Clinic\FormWidgets\Preview' => [
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
    			'bohe.clinic.access_clinic' => [
    					'tab' => 'bohe.clinic::lang.tab',
    					'label' => 'bohe.clinic::lang.label',
    			],
    	];
    }
    public function registerNavigation()
    {
    	return [
    			'clinic' => [
    					'label'       => 'bohe.clinic::lang.label',
    					'url'         => Backend::url('bohe/clinic/index'),
    					'icon'        => 'icon-pencil',
    					'iconSvg'     => 'plugins/bohe/clinic/assets/images/article.svg',
    					'permissions' => ['bohe.clinic.*'],
    					'order'       => 50,
    			]
    	];
    }
}