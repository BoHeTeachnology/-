<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App\Http\Controllers;
use DB;
use Cache;
use Auth;
use App\Examine;
use Illuminate\Support\Facades\Input;
use Illuminate\Http;
class ExamineController extends Controller{
    
    /*上传图片key*/
    public function upload(){
         $accessKey="kAC77wdnkhC0TTbZk7Gl8YtMkrIPf3PxggsUYBqF";
         $secretKey="TA-UqsjYuMM6rBmnbuZFaWYEPLkq6H6pjgEFtfLk";
         $bucket="media";//上传空间名称
         $arr=Auth::uploadToken($bucket);//生成token 
         echo json_encode($arr);
    }
    
    /*提交医生认证信息*/
    public function doctoradd(){
        $user=Auth::user();
        $user_id=$user->id;
        $input = Input::all();

        if($input['status']=="0"){
            $arr=DB::table("bohe_article_doctor")->insertGetId($input['userone']);
        }
        if($input['status']=="1"){
           //unset($input['status']);
           $arr= DB::table('bohe_article_doctor')
                ->where('user_id',$user_id)
                ->update($input['userone']);
        }
        $id=DB::table('bohe_article_doctor')->where('user_id',$user_id)->value('id');
        $caeated_at=date('Y-m-d H:i:s');
        if(isset($input['state'])){
         //$id=DB::table('bohe_article_doctor')->where('user_id',$user_id)->value('id');
         $input['certificate_one']['attachment_id']=$id;
         $input['certificate_two']['attachment_id']=$id;
         $input['certificate_three']['attachment_id']=$id;
         $input['certificate_one']['is_public']="1";
         $input['certificate_one']['attachment_type']="Bohe\Article\Models\Index";
         $input['certificate_two']['is_public']="1";
         $input['certificate_two']['attachment_type']="Bohe\Article\Models\Index";
         $input['certificate_three']['is_public']="1";
         $input['certificate_three']['attachment_type']="Bohe\Article\Models\Index";
         $input['certificate_two']['field']="certificate_two";
         $input['certificate_one']['field']="certificate_one";
         $input['certificate_three']['field']="certificate_three";
         $input['certificate_one']['created_at']=$caeated_at;
         $input['certificate_two']['created_at']=$caeated_at;
         $input['certificate_three']['created_at']=$caeated_at;
         DB::table("system_files")->insertGetId($input['certificate_one']);
         DB::table("system_files")->insertGetId($input['certificate_two']);
         DB::table("system_files")->insertGetId($input['certificate_three']);
        $state =$input['state'];
        $arr=DB::table('bohe_article_doctor')
          ->where('user_id',$user_id)
          ->update(["state"=>$state]);
        }
        if(isset($input['photo'])){
            $input['photo']['attachment_id']=$id;
            $input['photo']['is_public']="1";
            $input['photo']['field']="photo";
            $input['photo']['attachment_type']="Bohe\Article\Models\Index";
            $input['photo']['created_at']=$caeated_at;
            DB::table("system_files")->insertGetId($input['photo']);
        }
        if($arr){
           $date['success']="1";
           $date['message']="提交成功";
           $date['data']="";
        }
        else{
           $date['success']="0";
           $date['message']="提交失败";
           $date['data']="";
        }
        echo json_encode($date);
    }
    
    /*查询医生认证状态*/
    public function doctorstate(){
        $user=Auth::user();
        $user_id=$user->id;
        $arr=DB::table('bohe_article_doctor')->where('user_id',$user_id)->value('state');
        $date['success']="1";
        $date['message']="查询成功";
        $date['data']['state']=$arr;
        if($arr=="3"){
            $error=DB::table('bohe_article_doctor')->where('user_id',$user_id)->value('check_info');
            $error_time=DB::table('bohe_article_doctor')->where('user_id',$user_id)->value('updated_at');
            $date['data']['error']=$error;
            $date['data']['error_time']=$error_time;
        }
        echo json_encode($date);
    }
    
    /*获取图像地址*/
     public function getDiskName(){
        $name = str_replace('.', '', uniqid(null, true));
        $date['success']="1";
        $date['message']="获取成功";
        $date['data']=$name;
        echo json_encode($date);
    }
   
}
