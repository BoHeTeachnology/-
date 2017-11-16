<?php
return array(
	//'配置项'=>'配置值'
	'DEFAULT_MODULE'     	=> 	'Home', 					//默认请求的模块
	'DEFAULT_CONTROLLER' 	=> 	'Index', 					//默认请求的控制器
	'DB_TYPE'               =>  'mysql',     				// 数据库类型
	'DB_HOST'               =>  '127.0.0.1', 				// 服务器地址
	//'DB_HOST'               =>  '123.56.227.160', 			// 服务器地址
	//'DB_HOST'               =>  '182.254.213.207', 			// 服务器地址
	'DB_NAME'               =>  'mint',          			// 数据库名
	'DB_USER'               =>  'root',      				// 用户名
	'DB_PWD'                =>  '0elIC64d94aor',    		// 密码
	'DB_PORT'               =>  '3306',        				// 端口
	'DB_PREFIX'             =>  'mint_',    				// 数据库表前缀
	'DB_CHARSET'            =>  'utf8',      				// 数据库编码默认采用utf8
	'SESSION_AUTO_START'    =>  true,    					// 是否自动开启Session
	'URL_MODEL'				=>	1,							// URL模式
	'ROOT_IMG_PATH' 		=> './up/images/', 				// 图片在硬盘上的存储路径  --> 给PHP用的
	'VIEW_IMG_PATH' 		=> '/mintAdmin/up/images/', 	// 图片在网站中的预览路径  --> 给HTML浏览器用的
    'ROOT_FILE_PATH' 		=> './up/data/',  				// 文件在硬盘上的路径
    'VIEW_FILE_PATH' 		=> '/mintAdmin/up/data/',  		// 文件在网站上的路径
    'ROOT_MYSQL_PATH' 		=> './up/mysql/',  				// 数据库备份文件在硬盘上的路径
    'VIEW_MYSQL_PATH' 		=> '/mintAdmin/up/mysql/',  	// 数据库备份文件在网站上的路径
    'ROOT_CODE_PATH' 		=> './up/qr_code_img/',  		// 二维码文件在硬盘上的路径
    'VIEW_CODE_PATH' 		=> '/mintAdmin/up/qr_code_img/',// 二维码文件在网站上的路径
	'DATA_CACHE_TYPE' 		=> 'file', 						//缓存类型
	'DATA_CACHE_TIME'		=> '1800',						//缓存时间
    'CACHE_OPTIONS' 		=> array( 						//缓存参数
							        'type' => 'file',
							     ),
	//'DOMAIN_NAME'			=> 'http://www.zhenweitech.cn',  						//网站域名
	'DOMAIN_NAME'			=> 'http://test.uelibrary.com',  						//网站域名
	//'WX_APPID'            =>  'wxb002e42ba3209c21',   							//微信APPID
	'WX_APPID'            	=>  'wx592d11d8761e4f59',   							//微信APPID
	//'WX_APPSECRET'        =>  'c55a909bf4096dbec3b5f0121da4fb0f',      			//微信AppSecret
	'WX_APPSECRET'          =>  'c84e131a96f6dc943d085638c7bf1d3b',      			//微信AppSecret
	//'WX_APPACCOUNT'       =>  'gh_ea6474b45ede',      							//微信原始ID
	'WX_APPACCOUNT'        	=>  'gh_3ec4b98844ab',      							//微信原始ID
	//'WX_MCHID'        	=>  '1360293802',      									//微信商户ID
	'WX_MCHID'        		=>  '1375480402',      									//微信商户ID
	//'WX_PARTNERKEY'       =>  'Y2MqLWVbZ1FWDwmVYVg18t63l0QEzxgL',      			//微信商户秘钥
	'WX_PARTNERKEY'        	=>  '03763595ca89decad9dd14d36115a366',      			//微信商户秘钥
	'TOKEN'					=>	'mint',    											//微信token
	//'WX_App_Success'      =>  '646jryH7-9RvrruEA_rw6oq7dkK8y29WCRvzc8qbGvo',      //微信预约成功模板消息id
	'WX_App_Success'       	=>  'rPMCi3zo9NZL4MALTblBvvL9FmwvSn9B6VWGCUofNX4',      //微信预约成功模板消息id
	//'WX_App_Remind'      	=>  'TvDQvTGLafKP1WqVKX3WGXhSvHUu0EvSY6DZnu5ilh8',      //微信预约提醒模板消息id
	'WX_App_Remind'       	=>  'UaRjPvLNeD1d0Y6UF-ayCOFy3wEvV6IDNpLFNrPj5t4',      //微信预约提醒模板消息id
	//'WX_App_D_Remind'     =>  'N8GFT5WGH494RRAI4fs5zvaQl3boQbFlvDE6xxH6gO8',      //微信预约医生提醒模板消息id
	'WX_App_D_Remind'      	=>  'wE3f2mg-pNU-JxWCZIM1b0QBNun1e8Q1mt--mMt1DnA',      //微信预约医生提醒模板消息id
	//'WX_Report'      		=>  '3yO3Y_zA0mY9pClo17Ve5nfYc6tApLH8Mhc_3NZWg9Q',      //微信初筛报告模板消息id
	'WX_Report'       		=>  'kkFRHirStEG9b6Q6tZYwRlNrsxnozChDkeCE1xqMbao',      //微信初筛报告模板消息id
	//'WX_Bill'      		=>  'AbdR7Dd1f0zxTh_ZgWb5pLe5q6k2IAOK3vA11FwrHDQ',      //微信生成账单模板消息id
	'WX_Bill'       		=>  'ZadIzvlqE9NqE2Uv7kA8IAkuJW7HQpm0CI9FD5I9O2I',      //微信生成账单模板消息id
	//'WX_Visit'      		=>  'OwNReqWcVqONqjUrEik59jdH4f-T08tqyBVCRpvp4_I',      //微信复诊提醒模板消息id
	'WX_Visit'       		=>  'ykiDf3XUYkXR7XbwsaX20socjSY7217D3s293xDxHJY',      //微信复诊提醒模板消息id
	//'WX_Case'      		=>  'xhLn2MTiCaMeYsgB0zV4a-VbapoPddsJlHxEDDCSlE8',      //微信病历报告模板消息id
	'WX_Case'       		=>  'Lf5wKV8Zv-kcBe0KdzD5FsVHwunxMGYK-NrmOXhnD9g',      //微信病历报告模板消息id
	
	//短信配置
	'DX_ACCESSKEYID'		=> 'LTAIO7l76srqEzV5',  //短信秘钥id
	'DX_ACCESSKEYSECRET'	=> 'ewxavoYKzUerOHs56pCkZwHMWvDx0L',  //短信秘钥
	'DX_SIGNNAME'			=> '薄荷牙医',  //短信签名
	'DX_TEMPLATECODE'		=> 'SMS_33705826',  //验证码短信模板代码
	
	//七牛云存储
	'UPLOAD_SITEIMG_QINIU' => array ( 
		'maxSize' => 5 * 1024 * 1024,//文件大小
		'rootPath' => './',
		'saveName' => array ('uniqid', ''),
		'driver' => 'Qiniu',
		'driverConfig' => array (
			'accessKey' => 'KjtuZDbqRnhxluxGGp3WqFAJHNiboxhM7IHoeCno',
			'secrectKey' => 'Hjyg3BkEnzjTbtPR-2zQkGj9zVAtGgMqZJOZB61A', 
			'domain' => 'om0wz6fax.bkt.clouddn.com',
			'bucket' => 'bucket-name', 
        )
	)
);