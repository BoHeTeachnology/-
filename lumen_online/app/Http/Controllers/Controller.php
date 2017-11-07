<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    
    /*function __construct(){
          header('Content-type: application/json');
    }*/
    
    public static function success($message="",$details=""){
        header('Content-type: application/json');
        $data['success']="1";
        $data['message']=$message;
        $data['data']=$details;
        return json_encode($data);
    }
    
    public static function error($message="",$details=""){
        header('Content-type: application/json');
        $data['success']="0";
        $data['message']=$message;
        $data['data']=$details;
        exit(json_encode($data));
    }
}
