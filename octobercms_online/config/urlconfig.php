<?php
$server=env('APP_ENV','product');
/*测试环境*/

if($server=="test"){
	
	$config['view'] = 'http://test.zhenweitech.cn:3000';
	
}

/*正式环境*/

if($server=="product"){
	
	$config['view'] = 'http://view.boheyayi.com';
	
}

return $config;
