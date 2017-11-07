<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default filesystem disk that should be used
    | by the framework. A "local" driver, as well as a variety of cloud
    | based drivers are available for your choosing. Just store away!
    |
    | Supported: "local", "s3", "rackspace"
    |
    */

    'default' => 'qiniu_product',

    /*
    |--------------------------------------------------------------------------
    | Default Cloud Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Many applications store files both locally and in the cloud. For this
    | reason, you may specify a default "cloud" driver here. This driver
    | will be bound as the Cloud disk implementation in the container.
    |
    */

    'cloud' => 's3',

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    |
    | Here you may configure as many filesystem "disks" as you wish, and you
    | may even configure multiple disks of the same driver. Defaults have
    | been setup for each driver as an example of the required options.
    |
    */

    'disks' => [

        'local' => [
            'driver' => 'local',
            'root'   => storage_path('app'),
        ],

        's3' => [
            'driver' => 's3',
            'key'    => 'your-key',
            'secret' => 'your-secret',
            'region' => 'your-region',
            'bucket' => 'your-bucket',
        ],

        'rackspace' => [
            'driver'    => 'rackspace',
            'username'  => 'your-username',
            'key'       => 'your-key',
            'container' => 'your-container',
            'endpoint'  => 'https://identity.api.rackspacecloud.com/v2.0/',
            'region'    => 'IAD',
        ],
        'qiniu' => [
            'driver'     => 'qiniu',
            'access_key' => env('QINIU_ACCESS_KEY', 'kAC77wdnkhC0TTbZk7Gl8YtMkrIPf3PxggsUYBqF'),
            'secret_key' => env('QINIU_SECRET_KEY', 'TA-UqsjYuMM6rBmnbuZFaWYEPLkq6H6pjgEFtfLk'),
            'bucket'     => env('QINIU_BUCKET', 'xiaomaip'),
            'domain'     => env('QINIU_DOMAIN', 'xiaomaip.qiniudn.com'), // or host: https://xxxx.clouddn.com
        ],
        'qiniutest' => [
            'driver'     => 'qiniu',
            'access_key' => env('QINIU_ACCESS_KEY', 'kAC77wdnkhC0TTbZk7Gl8YtMkrIPf3PxggsUYBqF'),
            'secret_key' => env('QINIU_SECRET_KEY', 'TA-UqsjYuMM6rBmnbuZFaWYEPLkq6H6pjgEFtfLk'),
            'bucket'     => env('QINIU_BUCKET', 'mediatest'),
            'domain'     => env('QINIU_DOMAIN', 'media.zhenweitech.cn'), // or host: https://xxxx.clouddn.com
        ],
        'qiniu_product' => [
            'driver'     => 'qiniu',
            'access_key' => env('QINIU_ACCESS_KEY', 'kAC77wdnkhC0TTbZk7Gl8YtMkrIPf3PxggsUYBqF'),
            'secret_key' => env('QINIU_SECRET_KEY', 'TA-UqsjYuMM6rBmnbuZFaWYEPLkq6H6pjgEFtfLk'),
            'bucket'     => env('QINIU_BUCKET', 'media'),
            'domain'     => env('QINIU_DOMAIN', 'media.boheyayi.com'), // or host: https://xxxx.clouddn.com
         ]

    ],

];
