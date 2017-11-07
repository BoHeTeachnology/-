<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App;
use Illuminate\Database\Eloquent\Model;
class Split extends Model{
    
    //查询分配比例
    public static function type($query){
        if($query=="1"){
            return "expert";
        }
        if($query=="2"){
            return  "senior";
        }
    }
}

