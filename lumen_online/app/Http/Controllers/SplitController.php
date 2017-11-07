<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App\Http\Controllers;
use DB;
use Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Http;
use App\Split;
use App\Weixin;
class SplitController extends Controller{
    
    public function index(){
        $input = Input::all();
        $arr=DB::table('bohe_bohe_bill')->where('id',$input['id'])->update($input); 
        if($arr){
                    $date['success']="1";
                    $date['message']="回调成功";
                    $date['data']="";        
                }
        else{
            $date['success']="0";
            $date['message']="回调失败";
            $date['data']="";
        }
    }
    
    /*分账*/
    public function verification(){
        $input = Input::all();
        //查询医生等级
        $query=DB::table('bohe_article_doctor')->where('id',$input['doctor_id'])->value('level');
        if(!empty($query)){
            //查询医生等级分配率
            $uxms=DB::table('clinic_rule')->where('id',$query)->value("doctor");
            /*按比例分配*/
            if(!empty($uxms)){
                //平台抽取提成比例
                $bohe_income=DB::table('bohe_clinic')->where('id',$input['clinc_id'])->value("platform");
                $bohe_income=$input['price']*$bohe_income/100;
                //剩余利润
                $remaining=$input['price']-$bohe_income;
                //看病医生获取金额
                $doc_income=$remaining*$uxms/100;
                //看病诊所获取金额
                $clinic=DB::table('clinic_rule')->where('id',$query)->value('clinic');
                $clinic_income=$remaining*$clinic/100;
                //是否有上级渠道来源
                $bohe_channel="0";
                $clinic_channel="0";
                $channel_income=$bohe_channel+$clinic_channel;
                if(isset($input['parent_id'])){
                     //获取用户第几次下单
                    $usercount= DB::table('bohe_bohe_bill')->where("user_id",$input['user_id'])->count();
                    if($usercount=="1"){       
                        //平台渠道分成
                        $bohe_channel=DB::table('bohe_clinic')->where('id',$input['clinc_id'])->value("channel");
                        $bohe_channel=$bohe_income*$bohe_channel/100;
                        //诊所渠道分成
                        $clinic_channel=DB::table('clinic_rule')->where('id',$query)->value("channel");
                        $clinic_channel=$remaining*$clinic_channel/100;
                        
                        //渠道分成总金额
                        $channel_income=$bohe_channel+ $clinic_channel;
                        //http://test.zhenweitech.cn/weixin/user?redirect=1
                    }
                }
                $bohe_income=$bohe_income-$bohe_channel;
                //如果没有渠道钱则归属医生
                if($clinic_channel=="0"){
                    $doc_income=$remaining-$clinic_income;
                }
                $doc_income=round($doc_income,2);
                $clinic_income=round($clinic_income,2);
                $channel_income=round($channel_income,2);
                $bohe_income=round($bohe_income,2);
                $bill=["doc_income"=>$doc_income,"clinic_income"=>$clinic_income,"channel_income"=>$channel_income,"bohe_income"=>$bohe_income];
                //print_r($bill);die;
                $arr=DB::table('bohe_bohe_bill')->where('id',$input['id'])->update($bill);     
                if($arr){
                    $date['success']="1";
                    $date['message']="分账成功";
                    $date['data']="";        
                }
                else{
                    $date['success']="0";
                    $date['message']="分账失败";
                    $date['data']="";
                }
            }
            else{
                $date['success']="0";
                $date['message']="比例错误";
                $date['data']="";
            }
        }
        else{
            $date['success']="0";
            $date['message']="等级错误";
            $date['data']="";
        }
        echo json_encode($date);
    }
    
    
    /*医生生成账单*/
    public function addbill(){
        $user=Auth::user();
        $user_id=$user->id;
        $input=Input::all();
        $input['doctor_id']=$user_id;
        $input['order_id']= intval(\atom_next_id());
        $input['created_at']=date("Y-m-d H:i:s");
        $input['type']= json_encode($input['type']);
        $arr=DB::table("bohe_bohe_bill")->insertGetId($input);
        if($arr){
            $date['success']="1";
            $date['message']="生成成功";
            $date['data']="";
        }
        else{
            $date['success']="0";
            $date['message']="生成失败";
            $date['data']="";
        }
        $useropenid=DB::table("users")->where("id",$input['user_id'])->pluck('openid');
        if(!empty($useropenid)){
            Weixin::template($useropenid,$input['order_id'],$input['created_at'],$input['price'],$input['clinic_name'],$input['doctor_name']);
        }
        echo json_encode($date);
    }
    
    /*用户查询账单*/
    public function userbill(){
        $user=Auth::user();
        $user_id=$user->id;
        $input=Input::all();
        if(isset($input['state'])){
            $arr = DB::table('bohe_bohe_bill')->
                    where('state',$input['state'])->
                    where('user_id',$user_id)->orderBy('created_at', 'desc')->get();
        }
        else{
            $arr = DB::table('bohe_bohe_bill')->
                    where('user_id',$user_id)->orderBy('created_at', 'desc')->get();
        }
        $date['success']="1";
        $date['message']="查询成功";
        $date['data']=$arr;
        echo json_encode($date);
    }
    
    /*查看当前用户所有优惠券*/
    public function usercoupon(){
        $user=Auth::user();
        $user_id=$user->id;
        $arr = DB::table('user_coupon')->
                    where('user_id',$user_id)->get();
        $date['success']="1";
        $date['message']="查询成功";
        $date['data']=$arr;
        echo json_encode($date);
    }
    
    /*存储用户优惠券*/
    public function addcoupon(){
        $user=Auth::user();
        $user_id=$user->id;
        $input=Input::all();
        $input['user_id']=$user_id;
        $arr=DB::table("user_coupon")->insertGetId($input);
         if($arr){
            $date['success']="1";
            $date['message']="领取成功";
            $date['data']="";
        }
        else{
            $date['success']="0";
            $date['message']="领取失败";
            $date['data']="";
        }
        echo json_encode($date);
    }
    
    public function template(){
        $arr=Weixin::template();
        print_r($arr);
    }
    
    public function addactivity(){
        $input=Input::all();
        $arr=DB::table("user_coupon")->insertGetId($input);
        if($arr){
           $this->success("生成成功");
        }
        else{
           $this->error("生成失败");
        }
    }
        
    /*查询医生帐单*/
    public function dbill(){
        $input=Input::all();
        $user=Auth::user();
        $user_id=$user->id;
        $arr = DB::table('bohe_bohe_bill')->
                    where('doctor_id',$user_id)->skip($input['page'])->take($input['pagesize'])->get();
        return $this->success("查询成功", $arr);
    }
    
}

