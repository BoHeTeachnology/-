<?php namespace Renatio\BackupManager\Classes;

use Exception;
use File;
use Renatio\BackupManager\Models\Backup;
use Storage;
use Log;

/**
 * Class DatabaseBackupHandler
 * @package Renatio\BackupManager\Classes
 */
class DatabaseBackupHandler implements BackupHandlerInterface
{

    /**
     * @var array
     */
    protected $supported = ['mysql', 'pgsql'];

    /**
     * @var DatabaseBuilder
     */
    protected $databaseBuilder;

    /**
     * @param DatabaseBuilder $databaseBuilder
     */
    public function __construct(DatabaseBuilder $databaseBuilder)
    {
        $this->databaseBuilder = $databaseBuilder;
    }

    /**
     * Get database configuration.
     *
     * @param string $connection
     * @return mixed
     * @throws Exception
     */
    public function getDatabase($connection = '')
    {
        $connection = $connection ?: config('database.default');
        $driver = config('database.connections.' . $connection)['driver'];

        if ( ! in_array($driver, $this->supported)) {
            throw new Exception(trans('renatio.backupmanager::lang.database.support'));
        }

        return $this->databaseBuilder->getDatabase(config('database.connections.' . $connection), $driver);
    }

    /**
     * Get dumped database file
     *
     * @return string
     * @throws Exception
     */
    public function getDumpedDatabase($connection = '')
    {
        $tempFile = tempnam(sys_get_temp_dir(), "renatio-backupmanager" . '_' . ($connection ?: config('database.default')));

        $status = $this->getDatabase($connection)->dump($tempFile);

        if ($status != 1 || filesize($tempFile) === 0) {
            throw new Exception(trans('renatio.backupmanager::lang.database.could_not_create') . ': ' . $status);
        }

        return $tempFile;
    }

    /**
     * Returns an array of files which should be backed up.
     *
     * @return array
     */
    public function getFilesToBeBackedUp()
    {
        return [$this->getDumpedDatabase(),$this->getDumpedDatabase('mint')];
    }

    /**
     * Restore database
     *
     * @throws Exception
     */
    public function restoreDatabase()
    {
        $backups = Backup::all();

        $dumpDir = storage_path('temp/db');


        $files = File::files($dumpDir);


        foreach ($files as $file)
        {
          if(preg_match('/mysql/i', $file)){

             $status = $this->getDatabase()->restore($file);

             File::delete($file);

             if ( ! $status) {
                throw new Exception(trans('renatio.backupmanager::lang.database.could_not_restore') . ': ' . $status);
             }

              //$this->seedBackupsTable($backups);
          }
          else if(preg_match('/mint/i', $file)){
             
            $status = $this->getDatabase('mint')->restore($file);

             File::delete($file);

             if ( ! $status) {
                throw new Exception(trans('renatio.backupmanager::lang.database.could_not_restore') . ': ' . $status);
             }
          }

        }
        /*

          $status = $this->getDatabnase()->restore($dumpFile);

        File::delete($dumpFile);

        if ( ! $status) {
            throw new Exception(trans('renatio.backupmanager::lang.database.could_not_restore') . ': ' . $status);
        }

        $this->seedBackupsTable($backups);
       */
    }

    /**
     * Seed backups table
     *
     * @param $backups
     */
    private function seedBackupsTable($backups)
    {
        Backup::truncate();

        $data = [];

        foreach ($backups as $backup) {
            $data[] = [
                'id'          => $backup->id,
                'disk_name'   => $backup->disk_name,
                'file_path'   => $backup->file_path,
                'type'        => $backup->type,
                'filesystems' => $backup->filesystems,
                'file_size'   => $backup->getFileSize($backup->file_path),
                'created_at'  => $backup->created_at,
                'updated_at'  => $backup->updated_at,
            ];
        }

        Backup::insert($data);
    }

}
