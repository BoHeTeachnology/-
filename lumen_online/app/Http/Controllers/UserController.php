<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Firebase\JWT\JWT;

use Log;

use Qiniu\Auth;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    public function mockuserpost(Request $request){

       $ret = array("user_id" => 999,"code" => 1);
       return json_encode($ret);
    }
    public function mockPost(Request $request){

        $ret = array("code" => 1 , "time" => "kingtest");
        return json_encode($ret);

    }
    public function mockPut(Request $request){
        $id = $request->input('id');
        $ret = array("code" => 1 , "id" => $id);
        return json_encode($ret);

    }
    public function mockteethPut(Request $request){
        $id = $request->input('userid');
        Log::info("teeth!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        Log::info($id);
        $ret = array("code" => 1 , "userid" => $id);
        return json_encode($ret);

    }
    public function mockDelete(Request $request){
        $id = $request->input('id');
        $ret = array("code" => 1 , "id" => $id);
        return json_encode($ret);
    }
    public function getUserInfo(Request $request){
        //$openid=$request->input('openid');

        $key = "ghghgghghg";
        $token = array(
            "iss" => "http://example.org",
            "aud" => "http://example.com",
            "iat" => 1356999524,
            "nbf" => 1357000000
        );

        $jwt = JWT::encode($token, $key);
        $decoded = JWT::decode($jwt, $key, array('HS256'));

        if($openid=$request->input('openid')) {
            $ret = array(
                "username" => "king",
                "valid" => 1,
                "token" => $jwt
            );
        }else if($openid=$request->input('token')){
            $ret = array(
                "username" => "king",
                "valid" => 1,
                "token" => $jwt
            );
        }

        return json_encode($ret);
    }
    public function backendAuth(Request $request){
        $ret = array(
            "username" => "king",
            "valid" => 1,
            "token" => 'test'
        );
        Log::info("!!!!!!!!!!!DDDDDD");
        Log::info($request->input('name'));
        return json_encode($ret);
    }
    public function backendUserPatient(Request $request){
         $user = array(
             'account' => "15100000000",
             'age' => "12",
             'birthday' => "1212121",
             'birthmonth' => '1212121',
             'birthyear' => '2121221',
             'card_id' => '121121212',
             'card_type' => '1212122sd',
             'city' => 'hshdasdsa',
             'clinic_id' => 'sdsadsads',
             'company_code' => 'sdsadsds',
             'company_name' => 'ysysys',
             'context' => 'sssssss',
             'country' => 'sdasdsas',
             'county' => 'sdasdsads',
             'create_time' => '12212121',
             'email' => 'sdsadsa@163.com',
             'field' => 'sdadsada',
             'have_child' => 'sdsadsdas',
             'hospital' => 'sdasdsad',
             'id' => 'sadsdas',
             'identity_id' => 'sdasdasdas',
             'invite_code' => 'sssssss',
             'is_show' => 'sdasdad',
             'is_use' => 'ssssss',
             'job' => 'ssssss',
             'job_age' => 'sssssss',
             'label' => 'ssssss',
             'label_id' => 'ssssss',
             'married' => 'ssssss',
             'name'    => 'ssssss',
             'nickname'    => 'ssssss',
             'phone'    => 'ssssss',
             'photo'    => 'ssssss',
             'position'    => 'ssssss',
             'post_address'    => 'ssssss',
             'province'    => 'ssssss',
             'race'    => 'ssssss',
             'real_name'    => 'ssssss',
             'remark'    => 'ssssss',
             'role_id'    => 'ssssss',
             'sex'    => 'ssssss',
             'society_number'    => 'ssssss',
             'work_time'    => 'ssssss'
            );
        $begin = $request->input('begin');
        $index=$begin;
        $users = array();
        for(;$index<$begin+10;$index++)
        {
            $user['id'] = $index;
            $user['real_name'] = $index;
            $users[] = $user;
        }
        $ret = array(
            'users' => $users,
            'valid' => 1

        );
        return json_encode($ret);
    }
    public function backendUserDoctor(Request $request){
        $doctors = array();
        $index=0;

        for(;$index<20;$index++)
        {
            $doctor['id'] = $index;
            $doctor['name'] = 'nanzhe'.$index;
            $doctor['account'] = $index;
            $doctors[] = $doctor;
        }
        $ret = array(
            'doctors' => $doctors,
            'valid' => 1

        );
        return json_encode($ret);
    }

    public function backendUserDoctorDetails(Request $request){


        $request->input('visitdate');
        $request->input('serviceid');



        $doctors =array();

        $index=0;
        for(;$index<10;$index++){
            $doctors[] = ['id'=>$index,'clinic_id'=>1,'clinic_name'=>'happy','job_age'=>'10','name'=>'nanzhe'.$index,'field'=>'sdasdsadsadsa','photo'=>'ssssss'];
        }

        $ret = array(
            'doctors' => $doctors,
            'valid' => 1

        );
        return json_encode($ret);
    }
    public function backendUserDoctorDetail(Request $request){


        $id=$request->input('id');
        if(!$id){
            $id = $request->input('doctorid');
        }

        $ret = array(
            'doctor' => ['id'=>$id,'clinic_name'=>'hahaha' ,'clinic_address'=> 'test','clinic_id'=>1,'clinic_name'=>'happy','job_age'=>'10','name'=>'nanzhe'.$id,'field'=>'sdasdsadsadsa','photo'=>'ssssss','time_arr' => [ '2016-12-05' => [['visit_time' => '09:00' ],['visit_time' => '09:15' ],['visit_time' => '09:15' ],['visit_time' => '10:15' ],['visit_time' => '11:15' ]] ]],
            'valid' => 1,
            'code' => 1

        );
        return json_encode($ret);
    }
    public function backendServiceProjects(Request $request){
        $projects= array();
        $index=0;
        for(;$index<10;$index++){
            $projects[]=['id'=>$index,'name'=>'xiya'.$index,'logo_url'=>''];
        }
        $ret = array(
            'projects'=>$projects,
            'valid'=>1
        );
        return json_encode($ret);
    }
    public function backendUserClinic(Request $request){
        $clinics = array();
        $index=0;
        for(;$index<20;$index++)
        {
            $clinic['id'] = $index;
            $clinic['clinic_name'] = 'Tang'.$index;
            $clinics[] = $clinic;
        }
        $ret = array(
            'clinics' => $clinics,
            'valid' => 1

        );
        return json_encode($ret);

    }
    public function backendUserClinicDoctors(Request $request){

        $doctors = array();
        $index=0;

        for(;$index<5;$index++)
        {
            $doctor['id'] = $index;
            $doctor['name'] = 'nanzhe'.$index;
            $doctor['account'] = $index;
            $doctors[] = $doctor;
        }
        $ret = array(
            'doctors' => $doctors,
            'valid' => 1

        );
        return json_encode($ret);
    }
    public function backendUserClinicDoctorDetail(Request $request){

        $id=$request->input('id');


        $ret = array(
            'doctor' => ['id'=>$id,'clinic_id'=>1,'clinic_name'=>'happy','job_age'=>'10','name'=>'nanzhe'.$id,'field'=>'sdasdsadsadsa','photo'=>'ssssss','time_arr' => [ '2016-12-05' => [['visit_time' => '09:00' ],['visit_time' => '09:15' ],['visit_time' => '09:15' ],['visit_time' => '10:15' ],['visit_time' => '11:15' ]] ]],
            'valid' => 1

        );
        return json_encode($ret);
    }
    public function backendUserClinicDetail(Request $request){

        $id = $request->input('id');
        $clinic['id'] = $id;
        $clinic['clinic_name'] = 'Tang'.$id;

        $ret = array(
            'clinic' => $clinic,
            'valid' => 1

        );
        return json_encode($ret);
    }
    public function imgBase64Up(Request $request){
        //判断是否是图片、获得文件名后缀
        if(!$str= $request->input('img')){
            return json_encode(array('code'=>0,'msg'=>'缺少参数img！'));
        }
        $str1=explode(',',$str);
        $str2=explode(';',$str1[0]);
        $str3=explode('/',$str2[0]);
        $arr=array('data:image/png','data:image/jpg','data:image/jpeg','data:image/bmp');
        if(!in_array($str2[0], $arr)){
            $code=0;
            $msg='图片格式不正确！';
        }else{
            $file_name=uniqid('photo_');
            $sub_path=date('Ymd');
            $file_path='/imagetest/';
            if(!is_dir($file_path))
                mkdir($file_path);
            $res=file_put_contents($file_path.$file_name.'.'.$str3[1], base64_decode($str1[1]));
            if($res!==false){
                $img='/imagetest/'.$file_name.'.'.$str3[1];
                $code=1;
                $msg='上传成功！';
            }else{
                $code=0;
                $msg='上传失败！';
            }
        }
        return json_encode(array('code'=>$code,'msg'=>$msg,'photo_path'=>$img));
    }
   public function backendUserCompany(Request $request){
       $companys = array();
       $index=0;

       for(;$index<20;$index++)
       {
           $company['id'] = $index;
           $company['name'] = 'bohe'.$index;
           $company['company_code'] = $index;
           $companys[] = $company;
       }
       $ret = array(
           'companys' => $companys,
           'valid' => 1

       );
       return json_encode($ret);
   }
    public function public_path($path = '')
    {
        return env('PUBLIC_PATH', base_path('public')) . ($path ? '/' . $path : $path);
    }

    public function uploadFile(Request $request){
        //判断请求中是否包含name=file的上传文件
        Log::info('uploadFile!!!!!!!!!!!!!!');
        if(!$request->hasFile('file')){
            Log::info('no file');
            exit('上传文件为空！');
        }
        $file = $request->file('file');
        //判断文件上传过程中是否出错
        if(!$file->isValid()){
            Log::info('not valid file');
            exit('文件上传出错！');
        }
        Log::info('uploadFile!!!!!!!!!!!!!!1111');
        $destPath = realpath($this->public_path('images'));
        Log::info('uploadFile!!!!!!!!!!!!!!1wewe');
        if(!file_exists($destPath))
            mkdir($destPath,0755,true);
        Log::info('uploadFile!!!!!!!!!!!!!!111144');
        $filename = $file->getClientOriginalName();
        Log::info('uploadFile!!!!!!!!!!!!!!111122');
        if(!$file->move($destPath,$filename)){
            exit('保存文件失败！');
        }
        Log::info('uploadFile!!!!!!!!!!!!!!11133333');
        $ret = array(
            'file_path' => 'http://192.168.10.10/images/'.$filename,
            'valid' => 1

        );
        return json_encode($ret);
    }

    public function backendUserDoctorLabel(){
        $ret = array(
             'labels' => [],
             'valid' => 1
        );
        return json_encode($ret);
    }

    public function doctordate(){
        $ret = array(
            'dates' => [['date'=>'2017-01-07','type' => 0],['date'=>'2017-01-08','type' => 0],['date'=>'2017-01-09','type' => 0],['date'=>'2016-01-10','type' => 0],
            ['date'=>'2016-01-11','type' => 1]], 'code' => 1
        );
            return json_encode($ret);
    }
    public function doctortime(){
        $ret = array(
            'times' => [['time'=>'9:30','status'=>1 ],['time'=>'9:45','status'=>0 ],['time'=>'10:00','status'=>1],['time'=>'10:15','status'=>1],
            ['time'=>'10:30','status'=>1],['time'=>'10:45','status'=>1],['time'=>'11:00','status'=>1],['time'=>'12:15','status'=>1 ],['time'=>'12:30','status'=>1 ],['time'=>'12:45','status'=>1],['time'=>'13:00','status'=>1],['time'=>'13:15','status'=>1],['time'=>'13:30','status'=>1]],
            'code' => 1
        );
        return json_encode($ret);
    }
    public function doctororder(Request $request){
        $ret = array( 'code' => 0 );
        return json_encode($ret);
    }
    public function qiniuToken(Request $request){
        $accessKey = 'kAC77wdnkhC0TTbZk7Gl8YtMkrIPf3PxggsUYBqF';
        $secretKey = 'TA-UqsjYuMM6rBmnbuZFaWYEPLkq6H6pjgEFtfLk';
        $auth = new Auth($accessKey, $secretKey);

        $bucket = 'media';
        $keyPath = "personalMimg".'/'.'eeeeee'.'/'.'img';
        $upToken = $auth->uploadToken($bucket,null,3600);
        Log::info("ooooooooogggffffffjj");
        Log::info($upToken);
        $ret = array('uptoken' => $upToken,'keyPath' => $keyPath);

        return json_encode($ret);
    }
    public function login(){

    }
    public function testbohe(Request $request){



    }
}
