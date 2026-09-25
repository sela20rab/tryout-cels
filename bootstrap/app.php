<?php

$app = new Illuminate\Foundation\Application(
    $_ENV['APP_BASE_PATH'] ?? dirname(__DIR__)
);

/*
|--------------------------------------------------------------------------
| Vercel Serverless Environment
|--------------------------------------------------------------------------
*/

if (
    isset($_ENV['VERCEL']) ||
    isset($_SERVER['VERCEL'])
) {
    /*
    |--------------------------------------------------------------------------
    | Laravel Storage
    |--------------------------------------------------------------------------
    */

    $app->useStoragePath('/tmp/storage');

    /*
    |--------------------------------------------------------------------------
    | Create writable directories
    |--------------------------------------------------------------------------
    */

    $directories = [
        '/tmp/storage',
        '/tmp/storage/app',
        '/tmp/storage/framework',
        '/tmp/storage/framework/cache',
        '/tmp/storage/framework/cache/data',
        '/tmp/storage/framework/sessions',
        '/tmp/storage/framework/testing',
        '/tmp/storage/framework/views',
        '/tmp/storage/logs',
        '/tmp/views',
    ];

    foreach ($directories as $directory) {
        if (! is_dir($directory)) {
            @mkdir($directory, 0777, true);
        }
    }
}

/*
|--------------------------------------------------------------------------
| Bind Important Interfaces
|--------------------------------------------------------------------------
*/

$app->singleton(
    Illuminate\Contracts\Http\Kernel::class,
    App\Http\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Console\Kernel::class,
    App\Console\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Debug\ExceptionHandler::class,
    App\Exceptions\Handler::class
);

return $app;