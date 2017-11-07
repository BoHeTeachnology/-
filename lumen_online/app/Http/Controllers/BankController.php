<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App\Http\Controllers;
use App\Bank;
use App\Iphone as Sms;
use DB;
use Cache;
use Auth;
class BankController extends Controller{
    
    /*获取银行卡信息*/
    public function seebank(){
        $cardno=$_GET["cardno"];
        $arr=Bank::seebank($cardno);
        if($arr->is_success){
           $date['success']="1";
           $date['message']="查询成功";
           $date['data']=$arr;
        }
        else{
           $date['success']="0";
           $date['message']="查询失败";
           $date['data']="";
        }
        echo json_encode($date);
    }
    
   
    
    /*医生个人信息*/
    public function userinformation(){
        $user=Auth::user();
        $user_id=$user->id;
        $arr=DB::table('bohe_article_doctor')->where('user_id',$user_id)->first();
        $data['identity']=$arr->identity;//身份证
        $data['name']=$arr->name;//姓名
        $data['institution']=$arr->institution;//医院
        $data['balance']=$arr->balance;//医生余额
        $data['pass']=$arr->doctor_pass;//提现密码
        $data['introduce']=$arr->introduce;//简介
        $data['jobtitle']=$arr->jobtitle;//职位
        $invitation=DB::table('bohe_invitation')->where('user_id',$user_id)->value('invitation');
        $data['invitation']= $invitation;//邀请码
        $id=$arr->id;
        $arr=DB::table('system_files')->where('attachment_id',$id)->where('field',"photo")->orderBy('created_at', 'desc')->take("1")->value('disk_name');
        $arr1=substr($arr,0,3);
        $arr2=substr($arr,3,3);
        $arr3=substr($arr,6,3);
        $data['photo']="/uploads/public/$arr1/$arr2/$arr3/$arr";//图片
        $cats=DB::table('bohe_doctor_posts_cats')
               //->join("bohe_doctor_posts_cats","bohe_article_doctor.id","=","bohe_doctor_posts_cats.index_id")
               ->join("bohe_doctor_cats","bohe_doctor_posts_cats.cat_id","=","bohe_doctor_cats.id")
               ->where("bohe_doctor_posts_cats.index_id","=",$id)
               ->select("bohe_doctor_cats.name")
               ->get();
        $data['skilledin']=$cats;//擅长
        $date['success']="1";
        $date['message']="获取成功";
        $date['data']=$data;
        echo json_encode($date);
    }
    
    /*获取省市*/
    public function seecity(){
        $citycode=$_GET['citycode'];
        if($citycode=="0"){
            $citycode="";
        }
        $arr=Bank::seecity($citycode);
        echo json_encode($arr);
    }
    
    /*发送手机验证码*/
    public function getiphone(){
        $phone= $_GET['iphone'];
        //$content = '{"name":"'.$data['verify'].'"}';
        $verify=rand(100000,999999);
        $content='{"name":"'.$verify.'"}';
        //'DX_TEMPLATECODE'		=> 'SMS_33705826',  //验证码短信模板代码
        $template='SMS_33705826';
        $sendObj=new Sms();
        $res=$sendObj->send($phone,$content,$template);
        $rs = json_decode($res);
        if(isset($rs->Model)){
               //$request->session()->flash($phone, $verify);
               $minutes="1";
               Cache::put($phone, $verify, $minutes);

           $date['success']="1";
           $date['message']="发送成功";
           $date['data']="";
        }else{
           $date['success']="0";
           $date['message']="发送失败";
           $date['data']="";
        }
        echo json_encode($date);
    }
    
    /*判断验证码是否正确*/
    public function setiphone(){
        $phone=$_GET['iphone'];
        $verify=$_GET['verify'];
        if (Cache::has($phone)) {
            $value = Cache::get($phone);
            if($value==$verify){
                Cache::pull($phone);
                $date['success']="1";
                $date['message']="验证成功";
                $date['data']="";
            }
            else{
                $date['success']="0";
                $date['message']="验证失败";
                $date['data']="";
            }
        }
        else{
            $date['success']="0";
            $date['message']="验证码不存在";
            $date['data']="";
        }
        echo json_encode($date);
    }
    
    /*绑定银行卡*/
   public function bindingbank(){
         $user=Auth::user();
         $user_id=$user->id;
         $bankcode=$_GET['bankcode'];
         $bankname=$_GET['bankname'];
         $name=$_GET['name'];
         $bank_province=$_GET['bank_province'];
         $identity=$_GET['identity'];
         $bank_city=$_GET['bank_city'];
         $cardno=$_GET['cardno'];
         $submittime=$_GET['submittime'];
         $card_type=$_GET['card_type'];
         $arr=Bank::bindingbank($user_id,$bankcode,$bankname,$name,$bank_province,$identity,$bank_city,$cardno,$submittime);
         $if=$arr->is_success;
         if($if){
             $db=DB::insert('insert into wx_doctor_bank (user_id,cardno,bank_name,card_type) values(?,?,?,?)',[$user_id,$cardno,$bankname,$card_type]);
             if($db){
                $date['success']="1";
                $date['message']="邦卡成功";
                $date['data']="";
             }
             else{
                $date['success']="0";
                $date['message']="数据绑定失败";
                $date['data']="";
             }
         }
         else{
             $date['success']="0";
             $date['message']="邦卡失败";
             $date['data']="";
         }
     }
     
     /*个人开户*/
     public function useraccount(){
         $user=Auth::user();
         $user_id=$user->id;
         $name=$_GET['name'];
         $identity=$_GET['identity'];
         $arr=Bank::useraccount($identity,$user_id,$name);
         if($arr->is_success){
              $date['success']="1";
              $date['message']="开户成功";
              $date['data']="";
         }
         else{
             $date['success']="0";
             $date['message']="开户失败";
             $date['data']="";
         }
          echo json_encode($date);
     }
     
     /*查询当前用户是否绑定银行卡*/
     public function cardinformation(){
        $user=Auth::user();
        $user_id=$user->id;
        $arr=DB::table('wx_doctor_bank')->where('user_id',$user_id)->first();
        if(!empty($arr)){
            $arr->cardno=substr($arr->cardno,-4);
            $arr->cardno="************".$arr->cardno;
        }
        $date['success']="1";
        $date['message']="查询成功";
        $date['data']=$arr;
        
        echo json_encode($date);
     }
     
     /*用户提现*/
     /*public function withdrawals(){
          $user=Auth::user();
          $user_id=$user->id;
          $amount=$_GET['amout'];
          $orderdate=date('Y-m-d H:i:s',time());
          $arr=Bank::withdrawals($user_id,$amount,$orderdate);
          $balance=$amount/100;
         
          if($arr->is_success){
              //自带事物
              DB::transaction(function ()use($user_id,$balance,$orderdate){
                    DB::update("update bohe_article_doctor set balance =balance-$balance where user_id = ?", [$user_id]);
                    
                    DB::insert('insert into bohe_doctor_cash (doctor_id,outcash,state,business) values(?,?,?,?,?)',[$user_id,$balance,"1","提现", $orderdate]);
                });
              echo json_encode("1");
          }
          else{
              echo json_encode("p1");
       }
         
     }*/
     
     /*用户提现密码*/
     public function userpass(){
         $user=Auth::user();
         $user_id=$user->id;
         $status=$_GET['status'];
         $pass=$_GET['pass'];
         $pass=md5($pass);
         if($status=='0'){
             $arr=DB::update("update bohe_article_doctor set doctor_pass ='$pass' where user_id = ?", [$user_id]);
             if($arr){
                 $date['success']="1";
                 $date['message']="操作成功";
                 $date['data']="";
             }
             else{
                 $date['success']="0";
                 $date['message']="操作失败";
             }
         }
         else{                
             $query=DB::table('bohe_article_doctor')->where('user_id',$user_id)->value('doctor_pass');
             if($query){
                 //密码是否正确
                if($query==$pass){
                    $amount=$_GET['amount'];
                    $orderdate=date('Y-m-d H:i:s',time());
                    $arr=Bank::withdrawals($user_id,$amount,$orderdate);
                    $balance=$amount/100;
                    //提现成功
                    if($arr->is_success){
                        //自带事物
                        DB::transaction(function ()use($user_id,$balance,$orderdate){
                              DB::update("update bohe_article_doctor set balance =balance-$balance where user_id = ?", [$user_id]);

                              DB::insert('insert into bohe_doctor_cash (user_id,outcash,state,business,created_at) values(?,?,?,?,?)',[$user_id,$balance,"1","提现", $orderdate]);
                          }); 
                         $date['success']="1";
                         $date['message']="提现成功";
                         $date['data']="";
                    }
                    //提现失败
                    else{
                        $date['success']="0";
                        $date['message']="第三方提现失败";
                    }
                }
                else{
                    $date['success']="0";
                    $date['message']="密码错误";
                }
             }
             else{
                 $date['success']="0";
                 $date['message']="系统错误";
             }
         }
          echo json_encode($date);
     }
     
      /*判断验证码是否正确*/
    public function setphonepass(){
        $phone=$_GET['iphone'];
        $verify=$_GET['verify'];
        $identity=$_GET['identity'];
        if (Cache::has($phone)) {
            $value = Cache::get("$phone.pass");
            if($value==$verify){
                Cache::pull("$phone.pass");
                $arr=DB::table('wx_doctor_bank')->where('user_id',$user_id)->value('cardno');
                if($identity==$arr){
                    $date['success']="1";
                    $date['message']="验证成功";
                    $date['data']="";
                }
                else{
                   $date['success']="0";
                   $date['message']="验证失败";
                   $date['data']="";
                }
               
            }
            else{
              $date['success']="0";
              $date['message']="验证码不存在";
              $date['data']="";
            }
        }
        else{
           $date['success']="0";
           $date['message']="系统问题";
           $date['data']="";
        }
    }
    
    /*发送手机验证码*/
    public function getphonepass(){
        $phone= $_GET['iphone'];
        //$content = '{"name":"'.$data['verify'].'"}';
        $verify=rand(100000,999999);
        $content='{"name":"'.$verify.'"}';
        //'DX_TEMPLATECODE'		=> 'SMS_33705826',  //验证码短信模板代码
        $template='SMS_33705826';
        $sendObj=new Sms();
        $res=$sendObj->send($phone,$content,$template);
        $rs = json_decode($res);
        if(isset($rs->Model)){
               //$request->session()->flash($phone, $verify);
               $minutes="1";
               Cache::put("$phone.pass", $verify, $minutes);

           $date['success']="1";
           $date['message']="发送成功";
           $date['data']="";
        }else{
           $date['success']="0";
           $date['message']="发送失败";
           $date['data']="";
        }
        echo json_encode($date);
    }
    
    /*医生账单流水*/
    public function cash(){
        $user=Auth::user();
        $user_id=$user->id;
        $thismonth=$_GET['thismonth'];
        $thisyear=$_GET['thisyear'];
        $page=$_GET['page'];
        $pagesize="10";
        $page=($page-1)*$pagesize;
        //$thismonth = date('m');
        //$thisyear = date('Y');
        $startDay = $thisyear . '-' . $thismonth . '-1';
        $endDay = $thisyear . '-' . $thismonth . '-' . date('t', strtotime($startDay));
        $b_time  = date("Y-m-d H:i:s",strtotime($startDay));//当前月的月初时间戳
        $e_time  = date("Y-m-d H:i:s",strtotime($endDay));//当前月的月末时间戳
        $count=DB::table("bohe_doctor_cash")->where("user_id",$user_id)->whereBetween('created_at',[$b_time,$e_time])->count();
        $results = DB::select("select * from bohe_doctor_cash where user_id = ? and  created_at between ? and ? order by created_at desc limit $page,$pagesize", [$user_id,$b_time,$e_time]);
        $date['success']="1";
        $date['message']="明细获取成功";
        $date['data']['list']=$results;
        $date['data']['count']=$count;
        echo json_encode($date);
    }
     
    
   
}

