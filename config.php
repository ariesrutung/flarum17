<?php return array(
  'debug' => false,
  'database' =>
  array(
    'driver' => 'mysql',
    'host' => 'localhost',
    'port' => 3306,
    'database' => 'db_flarum17',
    'username' => 'root',
    'password' => '',
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix' => '',
    'strict' => false,
    'engine' => 'InnoDB',
    'prefix_indexes' => true,
  ),
  'url' => 'http://localhost/flarum17/public',
  'paths' =>
  array(
    'api' => 'api',
    'admin' => 'admin',
  ),
  'headers' =>
  array(
    'poweredByHeader' => true,
    'referrerPolicy' => 'same-origin',
  ),
);
