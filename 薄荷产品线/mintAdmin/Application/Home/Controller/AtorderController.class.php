<?php
namespace Home\Controller;
use Home\Controller;

class AtorderController extends BaseController {

    //添加订单
    public function add(){
        $code=1;
        if(!IS_POST){
            $code=0;
            $msg="请使用post请求！";
        }else{
            //验证参数是否完整
            if(!$patient_name=I('post.patient_name')){
                $code=0;
                $msg='姓名不能为空！';
            }
            if(!$activity_name=I('post.activity_name')){
                $code=0;
                $msg='活动名不能为空！';
            }
            if(!$price=I('post.price')){
                $code=0;
                $msg='金额不能为空！';
            }
            if(!$account=I('post.account')){
                $code=0;
                $msg='手机号不能为空！';
            }
            if(!$verify=I('post.verify')){
                $code=0;
                $msg='缺少短信验证码！';
            }else{
                //验证短信验证码是否正确
                $verifyModel=D('Verify');
                $verifyInfo=$verifyModel->checkVerify($account,$verify);
                if($verifyInfo['code']!=1){
                    $code=0;
                    $msg=$verifyInfo['msg'];
                }
            }
            //所有条件都满足后判断新老用户
            if($code=1){
                $userModel=D('User');
                $userInfor=$userModel->where("account='$account'")->find();
                if(!$userInfor){
                    //新用户,先添加用户
                    $userModel->account=$account;
                    $userModel->name=$name;
                    $userModel->real_name=$name;
                    if(!$userModel->add()){
                        //添加用户失败
                        $code=0;
                        $msg='创建失败';
                    }
                }
                //添加订单
                if($code=1){
                    //添加订单
                    $AtorderModel=D('Atorder');
                    $data['order_number']='BH'.date('YmdHis');
                    $data['activity_id']=1;
                    $data['activity_name']=$_POST['activity_name'];
                    $data['patient_account']=$account;
                    $data['price']=$_POST['price'];
                    $data['create_time']=time();
                    $data['patient_name']=$_POST['patient_name'];
                    if($id=$AtorderModel->add($data)){
                        $code=1;
                        $msg='创建成功';
                    }else{
                        $code=0;
                        $msg='创建失败';
                    }
                }
            }
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'id'=>$id,'data'=>$data));
    }
}