<?php namespace Bohe\Seothing\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Index extends Controller
{
	public $implement = ['Backend\Behaviors\ListController','Backend\Behaviors\FormController','Backend.Behaviors.ImportExportController'];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';
    public $importExportConfig = 'config_import_export.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Bohe.Seothing', 'seothing', 'index');
    }
    public function create()
    {
    	
    	
    	return $this->asExtension('FormController')->create();
    }
}