<?php namespace Bohe\Article\Controllers;

use Backend\Classes\Controller;
use BackendMenu;
use ApplicationException;

class Index extends Controller
{
	public $implement = ['Backend\Behaviors\ListController','Backend\Behaviors\FormController','Backend.Behaviors.ImportExportController'];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';
    public $importExportConfig = 'config_import_export.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Bohe.Article', 'article', 'index');
    }
    public function create()
    {
    	BackendMenu::setContextSideMenu('types');
 
  
    	return $this->asExtension('FormController')->create();
    }
}