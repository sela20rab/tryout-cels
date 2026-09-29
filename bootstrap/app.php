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
    | Writable paths for Vercel
    |--------------------------------------------------------------------------
    */

    $storagePath = '/tmp/storage';
    $bootstrapPath = '/tmp/bootstrap';
    $bootstrapCachePath = '/tmp/bootstrap/cache';

    /*
    |--------------------------------------------------------------------------
    | Laravel Storage
    |--------------------------------------------------------------------------
    */

    $app->useStoragePath($storagePath);

    /*
    |--------------------------------------------------------------------------
    | Laravel Bootstrap
    |--------------------------------------------------------------------------
    */

    $app->useBootstrapPath($bootstrapPath);

    /*
    |--------------------------------------------------------------------------
    | Create writable directories
    |--------------------------------------------------------------------------
    */

    $directories = [
        $storagePath,
        $storagePath . '/app',
        $storagePath . '/framework',
        $storagePath . '/framework/cache',
        $storagePath . '/framework/cache/data',
        $storagePath . '/framework/sessions',
        $storagePath . '/framework/testing',
        $storagePath . '/framework/views',
        $storagePath . '/logs',

        $bootstrapPath,
        $bootstrapCachePath,
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