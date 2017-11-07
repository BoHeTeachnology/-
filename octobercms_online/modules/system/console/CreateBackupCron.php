<?php namespace System\Console;
use Illuminate\Console\Command;
use System\Classes\UpdateManager;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Illuminate\Console\Scheduling\Schedule;
use Log;
/**
 * Console command to tear down the database.
 *
 * This destroys all database tables that are registered for October and all plugins.
 *
 * @package october\system
 * @author Alexey Bobkov, Samuel Georges
 */
class CreateBackupCron extends Command
{

    use \Illuminate\Console\ConfirmableTrait;

    /**
     * The console command name.
     */
    protected $name = 'backcron:up';

    /**
     * The console command description.
     */
    protected $description = 'create database backup cron';

    protected $schedule;

    /**
     * Create a new command instance.
     */
    public function __construct()
    {
       parent::__construct();
    }
    /**
     * Execute the console command.
     */
    public function fire()
    {
         Log::info("schedule begin!!!!!");
         $this->schedule->call(function(){
           Log::info("oneminiute!!!!!!!!"); 
         })->everyMinute();
    }

    /**
     * Get the console command arguments.
     */
    protected function getArguments()
    {
        return [];
    }

    /**
     * Get the console command options.
     */
    protected function getOptions()
    {
        return [
            ['force', null, InputOption::VALUE_NONE, 'Force the operation to run.'],
        ];
    }

    /**
     * Get the default confirmation callback.
     * @return \Closure
     */
    protected function getDefaultConfirmCallback()
    {
        return function () {
            return true;
        };
    }
}
  
