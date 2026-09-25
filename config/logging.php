<?php

use Monolog\Handler\NullHandler;
use Monolog\Handler\StreamHandler;
use Monolog\Formatter\LineFormatter;

return [

    /*
    |--------------------------------------------------------------------------
    | Default Log Channel
    |--------------------------------------------------------------------------
    */

    'default' => env('LOG_CHANNEL', 'stderr'),

    /*
    |--------------------------------------------------------------------------
    | Deprecations Log Channel
    |--------------------------------------------------------------------------
    */

    'deprecations' => [
        'channel' => env('LOG_DEPRECATIONS_CHANNEL', 'null'),
        'trace' => false,
    ],

    /*
    |--------------------------------------------------------------------------
    | Log Channels
    |--------------------------------------------------------------------------
    */

    'channels' => [

        /*
        |--------------------------------------------------------------------------
        | Stack
        |--------------------------------------------------------------------------
        */

        'stack' => [
            'driver' => 'stack',
            'channels' => ['stderr'],
            'ignore_exceptions' => false,
        ],

        /*
        |--------------------------------------------------------------------------
        | Single
        |--------------------------------------------------------------------------
        */

        'single' => [
            'driver' => 'single',
            'path' => 'php://stderr',
            'level' => env('LOG_LEVEL', 'debug'),
        ],

        /*
        |--------------------------------------------------------------------------
        | Daily
        |--------------------------------------------------------------------------
        */

        'daily' => [
            'driver' => 'daily',
            'path' => 'php://stderr',
            'level' => env('LOG_LEVEL', 'debug'),
            'days' => 14,
            'replace_placeholders' => true,
        ],

        /*
        |--------------------------------------------------------------------------
        | STDERR
        |--------------------------------------------------------------------------
        */

        'stderr' => [
            'driver' => 'monolog',
            'level' => env('LOG_LEVEL', 'debug'),
            'handler' => StreamHandler::class,
            'with' => [
                'stream' => 'php://stderr',
            ],
            'formatter' => LineFormatter::class,
            'formatter_with' => [
                'format' => "[%datetime%] %channel%.%level_name%: %message% %context% %extra%\n",
                'dateFormat' => 'Y-m-d H:i:s',
                'allowInlineLineBreaks' => true,
                'ignoreEmptyContextAndExtra' => true,
            ],
        ],

        /*
        |--------------------------------------------------------------------------
        | Syslog
        |--------------------------------------------------------------------------
        */

        'syslog' => [
            'driver' => 'syslog',
            'level' => env('LOG_LEVEL', 'debug'),
            'facility' => LOG_USER,
            'replace_placeholders' => true,
        ],

        /*
        |--------------------------------------------------------------------------
        | Error Log
        |--------------------------------------------------------------------------
        */

        'errorlog' => [
            'driver' => 'errorlog',
            'level' => env('LOG_LEVEL', 'debug'),
            'replace_placeholders' => true,
        ],

        /*
        |--------------------------------------------------------------------------
        | Null
        |--------------------------------------------------------------------------
        */

        'null' => [
            'driver' => 'monolog',
            'handler' => NullHandler::class,
        ],

        /*
        |--------------------------------------------------------------------------
        | Emergency
        |--------------------------------------------------------------------------
        */

        'emergency' => [
            'path' => 'php://stderr',
        ],

    ],

];