<?php namespace Bohe\Order;

use System\Classes\PluginBase;
use Backend;

class Plugin extends PluginBase
{
	public function registerComponents()
	{
		return [
				'Bohe\Order\Components\Boheservice'       => 'boheservice',
	
		];
	}
	public function registerFormWidgets()
	{
		return [
				'Bohe\Order\FormWidgets\Preview' => [
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
    			'bohe.order.access_order' => [
    					'tab' => 'bohe.order::lang.tab',
    					'label' => 'bohe.order::lang.label',
    			],
    	];
    }
    public function registerNavigation()
    {
    	return [
    			'order' => [
    					'label'       => 'bohe.order::lang.label',
    					'url'         => Backend::url('bohe/order/bill'),
    					'icon'        => 'icon-pencil',
    					'iconSvg'     => '/modules/cms/assets/images/cms-icon.svg',
    					'permissions' => ['bohe.order.*'],
    					'order'       => 50,
    					'sideMenu' => [
    							'finance' => [
    									'label'       => '用户订单',
    									'icon'        => 'icon-copy',
    									'url'         => Backend::url('bohe/order/order/index'),
    									'permissions' => ['bohe.doctor.*']
    							],
    							'bill' => [
    									'label'       => '薄荷账单',
    									'icon'        => 'icon-copy',
    									'url'         => Backend::url('bohe/order/bill'),
    									'permissions' => ['bohe.doctor.*']
    							],
    							
    							
    					],
    			]
    	];
    }
}