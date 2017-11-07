<?php namespace Bohe\Doctor\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Card extends Controller
{
    public $implement = ['Backend\Behaviors\ListController','Backend\Behaviors\FormController'];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Bohe.Doctor', 'doctor', 'card');
    }
}