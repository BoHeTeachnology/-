<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App;
 use Qiniu\Auth;
 use Qiniu\Storage\BucketManager;
use  Qiniu\Storage\UploadManager;
class Examine extends Model{
    
    
    /*生成key*/
     private static function getToken(){
        $accessKey="kAC77wdnkhC0TTbZk7Gl8YtMkrIPf3PxggsUYBqF";
        $secretKey="TA-UqsjYuMM6rBmnbuZFaWYEPLkq6H6pjgEFtfLk";
        $auth=new Auth($accessKey, $secretKey);
        $bucket="xiaomaip";//上传空间名称
        //设置put policy的其他参数
        //$opts=['callbackUrl'=>'http://www.callback.com/','callbackBody'=>'name=$(fname)&hash=$(etag)','returnUrl'=>"http://www.baidu.com"];
        return $auth->uploadToken($bucket);//生成token      
    }
    /*上传图片-待测试*/
    /*public static function upload(){
        $token=$this->getToken();
        $uploadManager=new UploadManager();
        $name=$files['name'];
        $filePath=$files['tmp_name'];
        $type=$files['type'];
        list($ret,$err)=$uploadManager->putFile($token,$name,$filePath,null,$type,false);
        if($err){//上传失败
           print_r("123");
        }else{//成功
           print_r($ret['key']);
        }
    }*/
}