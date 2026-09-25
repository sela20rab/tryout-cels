<?php

use Monolog\Handler\NullHandler;
use Monolog\Handler\StreamHandler;
use Monolog\Processor\PsrLogMessageProcessor;

return [

    /*
    |--------------------------------------------------------------------------
    | Default Log Channel
    |--------------------------------------------------------------------------
    */

    'default' => 'stderr',

    /*
    |--------------------------------------------------------------------------
    | Deprecations
    |--------------------------------------------------------------------------
    */

    'deprecations' => [
        'channel' => 'null',
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
            'channels' => [
                'stderr',
            ],
            'ignore_exceptions' => false,
        ],

        /*
        |--------------------------------------------------------------------------
        | STDERR
        |--------------------------------------------------------------------------
        |
        | Digunakan khusus untuk Vercel / Serverless.
        | Tidak menulis file ke storage.
        |
        */

        'stderr' => [
            'driver' => 'monolog',
            'level' => env('LOG_LEVEL', 'error'),
            'handler' => StreamHandler::class,
            'formatter' => env('LOG_STDERR_FORMATTER'),
            'with' => [
                'stream' => 'php://stderr',
            ],
            'processors' => [
                PsrLogMessageProcessor::class,
            ],
        ],

        /*
        |--------------------------------------------------------------------------
        | Error Log
        |--------------------------------------------------------------------------
        */

        'errorlog' => [
            'driver' => 'errorlog',
            'level' => env('LOG_LEVEL', 'error'),
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
        |
        | Jangan arahkan ke storage/logs/laravel.log karena
        | filesystem Vercel bersifat read-only.
        |
        */

        'emergency' => [
            'path' => '/tmp/laravel-emergency.log',
        ],
    ],

];