<?php namespace Bohe\Doctor;

use System\Classes\PluginBase;
use Backend;

class Plugin extends PluginBase
{
	public function registerComponents()
	{
		return [
				'Bohe\Doctor\Components\Boheservice'       => 'boheservice',
	
		];
	}
	public function registerFormWidgets()
	{
		return [
				'Bohe\Doctor\FormWidgets\Preview' => [
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
    			'bohe.doctor.access_doctor' => [
    					'tab' => 'bohe.doctor::lang.tab',
    					'label' => 'bohe.doctor::lang.label',
    			],
    	];
    }
    public function registerNavigation()
    {
    	return [
    			'doctor' => [
    					'label'       => 'bohe.doctor::lang.label',
    					'url'         => Backend::url('bohe/doctor/finance'),
    					'icon'        => 'icon-pencil',
    					'iconSvg'     => 'plugins/bohe/doctor/assets/images/article.svg',
    					'permissions' => ['bohe.doctor.*'],
    					'order'       => 50,
    					'sideMenu' => [
    							'finance' => [
    									'label'       => '医生财务',
    									'icon'        => 'icon-copy',
    									'url'         => Backend::url('bohe/doctor/finance'),
    									'permissions' => ['bohe.doctor.*']
    							],
    							'cash' => [
    									'label'       => '医生提现记录',
    									'icon'        => 'icon-copy',
    									'url'         => Backend::url('bohe/doctor/cash'),
    									'permissions' => ['bohe.doctor.*']
    							],
    							'card' => [
    									'label'       => '医生绑卡记录',
    									'icon'        => 'icon-copy',
    									'url'         => Backend::url('bohe/doctor/card'),
    									'permissions' => ['bohe.doctor.*']
    							],
    							
    					],
    			]
    	];
    }
}