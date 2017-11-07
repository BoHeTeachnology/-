<?php

/*环境切换*/

$server="formal";


 $config=[

    /*
    |--------------------------------------------------------------------------
    | PDO Fetch Style
    |--------------------------------------------------------------------------
    |
    | By default, database results will be returned as instances of the PHP
    | stdClass object; however, you may desire to retrieve records in an
    | array format for simplicity. Here you can tweak the fetch style.
    |
    */

    'fetch' => PDO::FETCH_CLASS,

    /*
    |--------------------------------------------------------------------------
    | Default Database Connection Name
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the database connections below you wish
    | to use as your default connection for all database work. Of course
    | you may use many connections at once using the Database library.
    |
    */

    'default' => env('DB_CONNECTION', 'mysql'),

    /*
    |--------------------------------------------------------------------------
    | Database Connections
    |--------------------------------------------------------------------------
    |
    | Here are each of the database connections setup for your application.
    | Of course, examples of configuring each database platform that is
    | supported by Laravel is shown below to make development simple.
    |
    |
    | All database work in Laravel is done through the PHP PDO facilities
    | so make sure you have the driver for your particular database of
    | choice installed on your machine before you begin development.
    |
    */

    'connections' => [

        'testing' => [
            'driver' => 'sqlite',
            'database' => ':memory:',
        ],

        'sqlite' => [
            'driver'   => 'sqlite',
            'database' => env('DB_DATABASE', base_path('database/database.sqlite')),
            'prefix'   => env('DB_PREFIX', ''),
        ],

        'mysql' => [
            'driver'    => 'mysql',
            'read'      => [
               'host' => env('DB_HOST_READ', '192.168.99.100'),
               'port' => env('DB_PORT_READ',32769)
             ],
            'write'     => [
               'host' => env('DB_HOST_WRITE', '192.168.99.100'),
               'port' => env('DB_PORT_WRITE',32769)
            ],
            'database'  => env('DB_DATABASE', 'boheofficial'),
            'username'  => env('DB_USERNAME', 'root'),
            'password'  => env('DB_PASSWORD', 'secret'),
            'charset'   => env('DB_CHARSET', 'utf8'),
            'collation' => env('DB_COLLATION', 'utf8_unicode_ci'),
            'prefix'    => env('DB_PREFIX', ''),
            'timezone'  => env('DB_TIMEZONE', '+08:00'),
            'strict'    => env('DB_STRICT_MODE', false),
        ],

        'pgsql' => [
            'driver'   => 'pgsql',
            'host'     => env('DB_HOST', 'localhost'),
            'port'     => env('DB_PORT', 5432),
            'database' => env('DB_DATABASE', 'forge'),
            'username' => env('DB_USERNAME', 'forge'),
            'password' => env('DB_PASSWORD', ''),
            'charset'  => env('DB_CHARSET', 'utf8'),
            'prefix'   => env('DB_PREFIX', ''),
            'schema'   => env('DB_SCHEMA', 'public'),
        ],

        'sqlsrv' => [
            'driver'   => 'sqlsrv',
            'host'     => env('DB_HOST', 'localhost'),
            'database' => env('DB_DATABASE', 'forge'),
            'username' => env('DB_USERNAME', 'forge'),
            'password' => env('DB_PASSWORD', ''),
            'charset'  => env('DB_CHARSET', 'utf8'),
            'prefix'   => env('DB_PREFIX', ''),
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Migration Repository Table
    |--------------------------------------------------------------------------
    |
    | This table keeps track of all the migrations that have already run for
    | your application. Using this information, we can determine which of
    | the migrations on disk haven't actually been run in the database.
    |
    */

    'migrations' => 'migrations',

    /*
    |--------------------------------------------------------------------------
    | Redis Databases
    |--------------------------------------------------------------------------
    |
    | Redis is an open source, fast, and advanced key-value store that also
    | provides a richer set of commands than a typical key-value systems
    | such as APC or Memcached. Laravel makes it easy to dig right in.
    |
    */

    'redis' => [

        'cluster' => false,

        'default' => [
            'host'     => 'cache',
            'port'     => 6379,
            'database' => 0,
            'password' => null,
        ],

    ],

];
 
 /*测试环境*/

if($server=="test"){
    
    $config['weixin'] = [
        
        'appid' => 'wx592d11d8761e4f59',
        
        'secret' => '0974e092c577d49a3aee336f614ad69c',
        
        'mch_id' => '1375480402',
    ];
    
    $config['url']=[
      
        'guanwang'=>'htpp://test.zhenweitech.cn:8000',
        
        'jiuguanwang'=>'http://mint.zhenweitech.cn',
        
        'cors_url'=>'htpp://test.zhenweitech.cn:3000',
        
    ];
    
    

}

/*正式环境*/

if($server=="formal"){
    
    $config['weixin'] = [
        
        'appid' => 'wxb002e42ba3209c21',
        
        'secret' => 'c55a909bf4096dbec3b5f0121da4fb0f',
        
        'mch_id' => '1375480402',
    ];
    
    $config['url']=[
      
        'guanwang'=>'http://www.boheyayi.com',
        
        'jiuguanwang'=>'http://mint.zhenweitech.cn',
        
        'cors_url'=>"http://view.boheyayi.com",
    ];
    
}


if($server=="khan_product"){
    
    $config['weixin'] = [
        
        'appid' => 'wxb002e42ba3209c21',
        
        'secret' => 'c55a909bf4096dbec3b5f0121da4fb0f',
        
        'mch_id' => '1375480402',
    ];
    
    $config['url']=[
      
        'guanwang'=>'http://www.webehind.com',
        
        'jiuguanwang'=>'http://mint.zhenweitech.cn',
        
        'cors_url'=>"http://view.webehind.com",
    ];
    
}

return $config;
