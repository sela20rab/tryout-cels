<?php

return [

    /*
    |--------------------------------------------------------------------------
    | View Storage Paths
    |--------------------------------------------------------------------------
    |
    | Lokasi folder yang digunakan Laravel untuk mencari file Blade.
    |
    */

    'paths' => [
        resource_path('views'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Compiled View Path
    |--------------------------------------------------------------------------
    |
    | Laravel menyimpan hasil kompilasi Blade di folder ini.
    |
    | Jangan menggunakan realpath() karena folder tersebut bisa belum ada
    | saat proses deployment atau saat menjalankan artisan command.
    |
    */

    'compiled' => env(
        'VIEW_COMPILED_PATH',
        storage_path('framework/views')
    ),

];