<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return $app->version();
});

$app->get('/userinfo/rest', ['middleware' => 'cors', 'uses' => 'UserController@getUserInfo']);

$app->get('Home/User/getInfo',function () {
     Log::info('Showing user');
});

$app->get('/patient/orders/rest', ['middleware' => 'cors', 'uses'=> 'PatientController@getOrders']);


$app->get('/patient/orderInfo/rest', ['middleware' => 'cors', 'uses'=> 'PatientController@getOrderDetail']);


$app->get('patient/cases/rest', ['middleware' => 'cors', 'uses'=> 'PatientController@getCases']);

$app->get('patient/caseContent/rest', ['middleware' => 'cors', 'uses'=> 'PatientController@getCaseContent']);




$app->get('patient/caseDesc/rest', ['middleware' => 'cors', 'uses'=> 'PatientController@getCaseDesc']);


$app->get('patient/bills/rest', ['middleware' => 'cors', 'uses'=> 'PatientController@getBills']);


$app->get('patient/billInfo/rest', ['middleware' => 'cors', 'uses'=> 'PatientController@getBillInfo']);

$app->post('/login', ['middleware' => 'cors', 'uses'=> 'UserController@backendAuth']);

$app->get('/user_patient/rest',['middleware' => 'cors', 'uses'=> 'UserController@backendUserPatient']);


$app->get('/user_patient/mteeth/rest',['middleware' => 'cors', 'uses'=> 'PatientController@mteethGraph']);

$app->get('/user_patient/cteeth/rest',['middleware' => 'cors', 'uses'=> 'PatientController@cteethGraph']);

$app->get('/user_patient/basicinfo/rest',['middleware' => 'cors', 'uses'=> 'PatientController@basicInfo']);

$app->get('/user_patient/history/rest',['middleware' => 'cors', 'uses'=> 'PatientController@historyInfo']);


$app->get('/user_patient/oral/rest',['middleware' => 'cors', 'uses'=> 'PatientController@oralInfo']);


$app->get('/user_doctor/rest',['middleware' => 'cors', 'uses'=> 'UserController@backendUserDoctor']);

$app->get('/user_clinic/rest',['middleware' => 'cors', 'uses'=> 'UserController@backendUserClinic']);

$app->get('/user_clinic/detail/rest',['middleware' => 'cors', 'uses'=> 'UserController@backendUserClinicDetail']);


$app->get('/user_clinic/doctors/rest',['middleware' => 'cors', 'uses'=> 'UserController@backendUserClinicDoctors']);

$app->get('/user_clinic/detail/doctor/rest',['middleware' => 'cors', 'uses'=> 'UserController@backendUserClinicDoctorDetail']);


$app->get('/user_company/rest',['middleware' => 'cors', 'uses'=> 'UserController@backendUserCompany']);


$app->get('/project/rest',['middleware' => 'cors', 'uses'=> 'UserController@backendServiceProjects']);


$app->get('/user_doctor/detail/rest',['middleware' => 'cors', 'uses'=> 'UserController@backendUserDoctorDetail']);


$app->get('/user_doctor/details/rest',['middleware' => 'cors', 'uses'=> 'UserController@backendUserDoctorDetails']);


$app->post('/user_clinic/detail/file/rest',['middleware' => 'cors', 'uses'=> 'UserController@uploadFile']);

$app->get('/user_doctor/label/rest',['middleware' => 'cors', 'uses'=> 'UserController@backendUserDoctorLabel']);





$app->post('/user_patient/rest', ['middleware' => 'cors', 'uses' => 'UserController@mockuserpost']);



$app->put('/user_patient/basicinfo/rest', ['middleware' => 'cors', 'uses' => 'UserController@mockput']);

$app->post('/user_patient/history/rest', ['middleware' => 'cors', 'uses' => 'UserController@mockpost']);

$app->put('/user_patient/history/rest', ['middleware' => 'cors', 'uses' => 'UserController@mockput']);


$app->post('/user_patient/oral/rest', ['middleware' => 'cors', 'uses' => 'UserController@mockpost']);

$app->put('/user_patient/oral/rest', ['middleware' => 'cors', 'uses' => 'UserController@mockput']);


$app->post('/patient/orderInfo/rest', ['middleware' => 'cors', 'uses' => 'UserController@mockpost']);

$app->put('/patient/orderInfo/rest', ['middleware' => 'cors', 'uses' => 'UserController@mockput']);

$app->delete('/patient/orderInfo/rest', ['middleware' => 'cors', 'uses' => 'UserController@mockdelete']);



$app->post('/user_patient/mteeth/rest',['middleware' => 'cors', 'uses'=> 'UserController@mockpost']);

$app->put('/user_patient/mteeth/rest',['middleware' => 'cors', 'uses'=> 'UserController@mockteethPut']);

$app->get('/user_doctor/date/rest',['middleware' => 'cors', 'uses'=> 'UserController@doctordate']);

$app->get('/user_doctor/time/rest',['middleware' => 'cors', 'uses'=> 'UserController@doctortime']);

$app->post('/user_doctor/order/rest',['middleware' => 'cors', 'uses'=> 'UserController@doctororder']);

$app->get('/qiniu_token/rest',['middleware' => 'cors', 'uses'=> 'UserController@qiniuToken']);

$app->post('/api/user/login',['middleware' => 'cors', 'uses'=> 'UserController@login']);

$app->get('/test',['middleware' => ['cors','auth'], 'uses'=> 'UserController@test']);


/*刘汝涛*/


//查询银行卡信息
$app->get('/bank/seebank',['middleware' => ['cors'], 'uses'=> 'BankController@seebank']);
//查询医生个人信息
$app->get('/bank/userinformation',['middleware' => ['cors','auth'], 'uses'=> 'BankController@userinformation']);
//获取省市
$app->get('/bank/seecity',['middleware' => ['cors','auth'], 'uses'=> 'BankController@seecity']);
//发送手机验证码
$app->get('/bank/getiphone',['middleware' => ['cors','auth'], 'uses'=> 'BankController@getiphone']);
//验证手机验证码
$app->get('/bank/setiphone',['middleware' => ['cors','auth'], 'uses'=> 'BankController@setiphone']);
//绑定银行卡
$app->get('/bank/bindingbank',['middleware' => ['cors','auth'], 'uses'=> 'BankController@bindingbank']);
//银行卡开户
$app->get('/bank/useraccount',['middleware' => ['cors','auth'], 'uses'=> 'BankController@useraccount']);
//查询银行卡是否绑定
$app->get('/bank/cardinformation',['middleware' => ['cors','auth'], 'uses'=> 'BankController@cardinformation']);
//提现
//$app->get('/bank/withdrawals',['middleware' => ['cors','auth'], 'uses'=> 'BankController@withdrawals']);
//用户提现密码+提现
$app->get('/bank/userpass',['middleware' => ['cors','auth'], 'uses'=> 'BankController@userpass']);
//验证重置密码短信
$app->get('/bank/setphonepass',['middleware' => ['cors','auth'], 'uses'=> 'BankController@setphonepass']);
//发送重置密码短信
$app->get('/bank/getphonepass',['middleware' => ['cors','auth'], 'uses'=> 'BankController@getphonepass']);
//上传图片key
$app->get('/examine/upload',['middleware' => ['cors','auth'], 'uses'=> 'ExamineController@upload']);
/*医生流水*/
$app->get('/bank/cash',['middleware' => ['cors','auth'], 'uses'=> 'BankController@cash']);
/*保存医生认证信息*/
$app->post('/examine/doctoradd',['middleware' => ['cors','auth'], 'uses'=> 'ExamineController@doctoradd']);
/*查询医生认证状态*/
$app->get('/examine/doctorstate',['middleware' => ['cors','auth'], 'uses'=> 'ExamineController@doctorstate']);
/*获取图片名称*/
$app->get('/examine/getDiskName',['middleware' => ['cors','auth'], 'uses'=> 'ExamineController@getDiskName']);
/*微信认证*/
$app->post('/weixin/index',['middleware' => ['cors'], 'uses'=> 'WeixinController@index']);
/*微信认证*/
$app->get('/weixin/index',['middleware' => ['cors'], 'uses'=> 'WeixinController@index']);
/*微信患者*/
$app->get('/weixin/user',['middleware' => ['cors'], 'uses'=> 'WeixinController@user']);
/*获取openid*/
$app->get('/weixin/openid',['middleware' => ['cors'], 'uses'=> 'WeixinController@openid']);
/*type跳转*/
$app->get('/weixin/jump',['middleware' => ['cors'], 'uses'=> 'WeixinController@jump']);
/*老系统获取code*/
$app->get('/weixin/tp',['middleware' => ['cors'], 'uses'=> 'WeixinController@tp']);
/*微信支付*/
$app->get('/weixin/payment',['middleware' => ['cors'], 'uses'=> 'WeixinController@payment']);
/*支付回调*/
$app->get('/split/index',['middleware' => ['cors'], 'uses'=> 'SplitController@index']);
/*分账*/
$app->get('/split/verification',['middleware' => ['cors'], 'uses'=> 'SplitController@verification']);
/*医生生成账单*/
$app->post('/split/addbill',['middleware' => ['cors','auth'], 'uses'=> 'SplitController@addbill']);
/*查询用户所属优惠券*/
$app->get('/split/usercoupon',['middleware' => ['cors','auth'], 'uses'=> 'SplitController@usercoupon']);
/*用户查询账单*/
$app->get('/split/userbill',['middleware' => ['cors','auth'], 'uses'=> 'SplitController@userbill']);
/*用户领取优惠券*/
$app->get('/split/addcoupon',['middleware' => ['cors','auth'], 'uses'=> 'SplitController@addcoupon']);
/*用户领取优惠券*/
$app->get('/split/template',['middleware' => ['cors'], 'uses'=> 'SplitController@template']);
/*用户领取优惠券*/
$app->get('/split/demo',['middleware' => ['cors'], 'uses'=> 'SplitController@demo']);
/*生成活动*/
$app->post('/split/addactivity',['middleware' => ['cors'], 'uses'=> 'SplitController@addactivity']);
/*url*/
$app->get('/split/url',['middleware' => ['cors'], 'uses'=> 'SplitController@url']);
/*js token*/
$app->get('/weixin/getSignaturePackage',['middleware' => ['cors'], 'uses'=> 'WeixinController@getSignaturePackage']);
/*测试*/
$app->get('/weixin/demo',['middleware' => ['cors'], 'uses'=> 'WeixinController@demo']);
/*医生帐单列表*/
$app->get('/doctor/projectlist',['middleware' => ['cors'], 'uses'=> 'DoctorController@projectlist']);
/*活动统计个数*/
$app->get('/service/activity_count',['middleware' => ['cors'], 'uses'=> 'ServiceController@activity_count']);





/*杨耀鑫*/
//首页医生列表
$app->get('/doctor/doctorlist',['middleware' => ['cors'], 'uses'=> 'DoctorController@doctorlist']);
//首页名医列表
$app->get('/doctor/famousdoctor',['middleware' => ['cors'], 'uses'=> 'DoctorController@famousdoctor']);
//医生详情
$app->get('/doctor/doctorone',['middleware' => ['cors'], 'uses'=> 'DoctorController@doctorone']);
//医生过往案例
$app->get('/doctor/passcase',['middleware' => ['cors'], 'uses'=> 'DoctorController@passcase']);
//医生过往案例详情
$app->get('/doctor/thecase',['middleware' => ['cors'], 'uses'=> 'DoctorController@thecase']);
//用户状态的返回
$app->get('/doctor/userstate',['middleware' => ['cors','auth'], 'uses'=> 'DoctorController@userstate']);
//医生标签的返回
$app->get('/doctor/doctorcat',['middleware' => ['cors'], 'uses'=> 'DoctorController@doctorcat']);
//用户添加医生关注
$app->post('/doctor/addfollow',['middleware' => ['cors','auth'], 'uses'=> 'DoctorController@addfollow']);
//用户取消医生关注
$app->post('/doctor/delfollow',['middleware' => ['cors','auth'], 'uses'=> 'DoctorController@delfollow']);
//查找用户关注或问诊的医生
$app->get('/doctor/doctorfollow',['middleware' => ['cors','auth'], 'uses'=> 'DoctorController@doctorfollow']);
//查找医生关注数量
$app->get('/doctor/follownum',['middleware' => ['cors'], 'uses'=> 'DoctorController@follownum']);
//查找医生留言
$app->get('/doctor/messagelist',['middleware' => ['cors'], 'uses'=> 'DoctorController@messagelist']);
//查找医生留言数量
$app->get('/doctor/messagenum',['middleware' => ['cors'], 'uses'=> 'DoctorController@messagenum']);
//医生留言点赞或取消赞
$app->post('/doctor/messagegreat',['middleware' => ['cors','auth'], 'uses'=> 'DoctorController@messagegreat']);
//医生主页分享数增加
$app->post('/doctor/addturnnum',['middleware' => ['cors'], 'uses'=> 'DoctorController@addturnnum']);
//用户添加留言
$app->post('/doctor/addmessage',['middleware' => ['cors','auth'], 'uses'=> 'DoctorController@addmessage']);
//首页获取banner
$app->get('/doctor/banner',['middleware' => ['cors'], 'uses'=> 'DoctorController@banner']);
//获得是否关注该医生
$app->get('/doctor/iffollow',['middleware' => ['cors','auth'], 'uses'=> 'DoctorController@iffollow']);
//用户关注医生的数量
$app->get('/usercenter/mydocnum',['middleware' => ['cors','auth'], 'uses'=> 'UsercenterController@mydocnum']);
//用户留言的数量
$app->get('/usercenter/mymsgnum',['middleware' => ['cors','auth'], 'uses'=> 'UsercenterController@mymsgnum']);
//用户的留言列表
$app->get('/usercenter/messagelist',['middleware' => ['cors','auth'], 'uses'=> 'UsercenterController@messagelist']);
//用户的个人信息
$app->get('/usercenter/userinformation',['middleware' => ['cors','auth'], 'uses'=> 'UsercenterController@userInformation']);
//更新用户的个人信息
$app->post('/usercenter/updateuserinfo',['middleware' => ['cors','auth'], 'uses'=> 'UsercenterController@updateuserinfo']);
//获得该医生出诊事件
$app->get('/date/getdate',['middleware' => ['cors'], 'uses'=> 'DateController@getdate']);
//用户添加预约
$app->post('/date/makedate',['middleware' => ['cors','auth'], 'uses'=> 'DateController@makedate']);
//用户查看自己的预约
$app->get('/date/mydate',['middleware' => ['cors','auth'], 'uses'=> 'DateController@mydate']);
//用户取消自己的预约
$app->post('/date/undate',['middleware' => ['cors','auth'], 'uses'=> 'DateController@undate']);
//医生的预约
$app->get('/date/doctordate',['middleware' => ['cors'], 'uses'=> 'DateController@doctordate']);
/**/




