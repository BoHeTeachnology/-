<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Input;
use Illuminate\Http;
use DB;

class ServiceController extends Controller{
    
    public function activity_count(){
        $id=$_GET['id'];
        DB::table('bohe_promotion')->where("id",$id)->increment('point');
        header("Location:https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwNjEyNzc5Mw==&scene=124#wechat_redirect");
    }
}
