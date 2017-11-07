<?php namespace Ucenter\Connect;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function pluginDetails()
    {
        return [
            'name' => 'ucenter connect',
            'description' => 'insert ucenter',
            'author' => 'ACME Corporation',
            'icon' => 'icon-leaf'
        ];
    }
}
