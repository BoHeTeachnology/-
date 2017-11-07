<?php
/**use Illuminate\Http\Request;
 *
 *  * Created by PhpStorm.
 * User: king
 * Date: 16/10/10
 * Time: 上午11:00
 */

namespace App\Http\Controllers;

use Firebase\JWT\JWT;

use Log;

class PatientController extends Controller
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
public function getOrderDetail(Request $request){
    $id = $request->input("id");
    Log::info("getOrder");

    $ret = array(
        "order" => ['relations'=>'hghghghgh','clinic_address'=>'hjfshdkfhdjkf','clinic_name'=>'ssss','doctor_name'=>'nanzhe','company_name'=>'zte','appointment_name'=> 'test','contact_tel'=>'12344542','is_return' => 0 ,'patient_name' => 'king', 'service_name' => 'baya','reserve_number' => 'cool', 'visit_time' => '23212' ,'status' => 1, 'id' => 90],
        "valid" => 1
    );
    return json_encode($ret);

}
public function getOrders(Request $request){

    Log::info("getOrders");

    $token = $request->cookie('tokenbohe');
    //判断是否过期
    Log::info($token);

    $begin = $request->input('begin');

    $orders = array();

    $index=$begin;
    for(;$index<($begin+10);$index++)
    {
        $orders[] = ['is_self'=> 0 ,'is_return' => 0 ,'patient_name' => 'tangxin', 'service_name' => 'baya','reserve_number' => $index, 'visit_time' => '23212' ,'status' => 88, 'id' => $index];
    }

    $ret = array(
        "orders" => $orders,
        "valid" => 1
    );

    return json_encode($ret);


}
public function getCases(Request $request){
    Log::info("getcases");

    $token = $request->cookie('tokenbohe');
    //判断是否过期
    Log::info($token);
    $cases = array();
    $index=0;
    for(;$index<20;$index++)
    {
        $cases[] = ['visit_time' => '2015678' ,'type' => 1, 'id' => 67];
    }

    $ret = array(
        "cases" => $cases,
        "valid" => 1
    );

    return json_encode($ret);
}

public function getCaseContent(Request $request){

    $ret = array(
        "casecontent" => ['visit_time'=>'hghghghgh','type'=> 1,'clinic_name'=>'ssss','id'=>67,'patient_name'=>'tangxin','doctor_name'=> 'nanzhe','record_content'=>'skjdjashdjkashdksaj'],
        "valid" => 1
    );
    return json_encode($ret);

}
public function getCaseDesc(Request $request){

    $ret = array(
        "casedesc" => ['tooth_pic'=>'hghghghgh','tooth_square'=> 1,'tooth_type'=>'ssss','tooth_suggestion'=>'sdsdsdads','id'=> 67],
        "valid" => 1
    );
    return json_encode($ret);

}

public function getBills(Request $request){
    Log::info("getcases");

    $token = $request->cookie('tokenbohe');
    //判断是否过期
    Log::info($token);
    $bills = array();
    $index=0;
    for(;$index<20;$index++)
    {
        $bills[] = ['bill_number'=>'dfsdfsdfdsfsd','status' => 1,'patient_name'=> 'nanzhe','project_name'=> 'ssss' ,'pay_money'=> 34,'id'=> 34];
    }

    $ret = array(
        "bills" => $bills,
        "valid" => 1
    );

    return json_encode($ret);
}

public function getBillInfo(Request $request){

    $items = array();

    for($index=0;$index<3;$index++){
        $items[] = ['project_name'=>'sdasdas','number'=>1221,'count_price'=>123];
    }
    $subbills = ['items' => $items,'total'=>100];

    $ret = array(
        "bill" => ['id'=> 34,'status'=>1,'clinic_address'=>'dsadsadas','clinic_name'=>'dsadsadsa','project_name'=>'dsadsa' ,'patient_name' => 'haha','bill_number' => 'sdsadsad', 'visit_time'=>'204567', 'doctor_name' => 'nanzhe','pay_method'=>'sdsadsa','subbills'=>$subbills],
        "valid" => 1
    );
    return json_encode($ret);

}
public function mteethGraph(Request $request){
    $ret = array(
        "teethlist" => [ ['teeth'=>[], 'time'=>'1234566'] ],
        "valid" => 1
    );
    return json_encode($ret);
}
public function cteethGraph(Request $request){
    $ret = array(
        "teethlist" => [ ['teeth'=>[], 'time'=>'1234566'] ],
        "valid" => 1
    );
    return json_encode($ret);
}
public function basicInfo(Request $request){
    $id = $request->input("id");
    $ret = array(
        'baseinfo' => ['id' => $id],
        'valid' => 1
    );
    return json_encode($ret);
}
public function historyInfo(Request $request){
    $id = $request->input("id");
    $ret = array(
        'allhistory' => [['history' => ['allergy' => [],'body_condition'=>[],'family_history'=>[],'infection' => [],'medicine'=>[],'surgery'=>[] ],'time' => '2012012'],['history' => ['allergy' => [],'body_condition'=>[],'family_history'=>[],'infection' => [],'medicine'=>[],'surgery'=>[] ],'time' => '2012013']],
        'valid' => 1,
        'id' => $id
    );
    return json_encode($ret);
}
public function oralInfo(Request $request){
    $id = $request->input("id");
    $ret = array(
        'alloral' => [['oral' => ['teetharound' => [ ],'mucosa'=>[  ],'surgery'=>[],'repairhis' => []],'time' => '2016012'],['oral' => ['teetharound' => [ ],'mucosa'=>[  ],'surgery'=>[],'repairhis' => []],'time' => '2016015']],
        'valid' => 1,
        'id' => $id
    );
    return json_encode($ret);
}
}

