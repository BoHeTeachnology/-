<?php namespace Bohe\Promotion;

use System\Classes\PluginBase;
use Backend;

class Plugin extends PluginBase
{
	public function registerComponents()
	{
		return [
				'Bohe\Promotion\Components\Bohepromotion'       => 'bohepromotion',
	
		];
	}
	public function registerFormWidgets()
	{
		return [
				'Bohe\Promotion\FormWidgets\Preview' => [
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
    			'bohe.promotion.access_promotion' => [
    					'tab' => 'bohe.promotion::lang.tab',
    					'label' => 'bohe.promotion::lang.label',
    			],
    	];
    }
    public function registerNavigation()
    {
    	return [
    			'promotion' => [
    					'label'       => 'bohe.promotion::lang.label',
    					'url'         => Backend::url('bohe/promotion/promotion'),
    					'icon'        => 'icon-pencil',
    					'iconSvg'     => 'plugins/bohe/promotion/assets/images/article.svg',
    					'permissions' => ['bohe.promotion.*'],
    					'order'       => 50,
                                        'sideMenu' => [
    							'promotion' => [
    									'label'       => '活动管理',
    									'icon'        => 'icon-copy',
    									'url'         => Backend::url('bohe/promotion/promotion'),
    									'permissions' => ['bohe.promotion.*']
    							],
    							'coupon' => [
    									'label'       => '优惠券管理',
    									'icon'        => 'icon-copy',
    									'url'         => Backend::url('bohe/promotion/coupon'),
    									'permissions' => ['bohe.promotion.*']
    							],
    							
    							
    					],
    			]
    	];
    }
}