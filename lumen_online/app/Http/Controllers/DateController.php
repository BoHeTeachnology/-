<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Firebase\JWT\JWT;
use Log;
use Auth;
use Cache;
use DB;
use App\Examine;
use Illuminate\Support\Facades\Input;

class DateController extends Controller
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
	/**
	 * 获得预约日期
	 * @return \Illuminate\Http\JsonResponse;
	 */
	
	public function getdate(){
		$doc_id = isset ( $_GET ['doc_id'] ) ? $_GET['doc_id'] : 0;
		//查找医生ID对应的用户表ID
		$doc=DB::table ( 'bohe_article_doctor' )->where ( 'id', $doc_id)->first ();
		if($doc&&($doc->user_id>0)){
			$userid=$doc->user_id;
		}
		$userid=isset($userid)?$userid:0;
				$date=date("Y-m-d",time());
				
				$lastday=date('Y-m-d',strtotime("$date+1 month"));
				$evevt = DB::table ( 'kurtjensen_mycal_events' )->where ( 'user_id', $userid)->where('date','>=',$date)->where('date','<=',$lastday)->where('is_published',1)->orderBy('date', 'asc')->get ();
				
			
			
			if(isset($evevt)&&count($evevt)>0){
				//查找诊所和项目
				foreach ($evevt as$k=> $e){
					$cat=DB::table ( 'kurtjensen_mycal_categorys_events' )->where ( 'event_id', $e->id)->first ();
					if($cat&&count($cat)>0){
						$thecat=DB::table ( 'kurtjensen_mycal_categories' )->where ( 'id', $cat->category_id)->first ();
						if($thecat){
							$data[$k]['cat']['id']=$thecat->id;
							$data[$k]['cat']['name']=$thecat->name;
                                                        $data[$k]['cat']['addr']=$thecat->description;
						}else{
							$data[$k]['cat']=null;
                                                        $data[$k]['cat']['name']=null;
                                                        $data[$k]['cat']['addr']=null;
						}
					}
					$type=DB::table ( 'kurtjensen_mycal_types_events' )->where ( 'event_id', $e->id)->get ();
					if($type&&count($type)>0){
						foreach($type as$y=> $ty){
							$thetype=DB::table ( 'kurtjensen_mycal_types' )->where ( 'id', $ty->type_id)->first ();
							if($thetype){
								$thedata[$y]['id']=$thetype->id;
								$thedata[$y]['name']=$thetype->name;
							}
						}
						
						if($thedata&&count($thedata)>0){
							$data[$k]['type']=$thedata;
						}else{
							$data[$k]['type']=null;
						}
					}
					$data[$k]['id']=$e->id;
					$data[$k]['name']=$e->name;
					$data[$k]['date']=$e->date;
					if($e->date!=''&&$e->date!=null){
						$thedate=strtotime($e->date);
						$weekarray=array("日","一","二","三","四","五","六");
						$week= "周".$weekarray[date("w",$thedate)];
						$data[$k]['week']=$week;
					}
					$data[$k]['time']=$e->time;
					$data[$k]['end_time']=$e->end_time;
					$data[$k]['text']=$e->text;
					$data[$k]['is_published']=$e->is_published;
                                        $data[$k]['is_full']=$e->is_full;
				}
				//合并同日期的日历为一组
				$res = array(); //想要的结果
				$tmp_date='';
				$tmp_event=[];
				foreach ($data as $k => $v) {
					if($v['date'] == $tmp_date){
						$tmp_event[] = $v;
					}else{
						if(count($tmp_event) > 0){
							$res[] = $tmp_event;
						}
						$tmp_event = [];
						$tmp_event[] = $v;
						$tmp_date = $v['date'];
					}
					
					
				}
				
				if(count($tmp_event) > 0){
					$res[] = $tmp_event;
				}
				
				return response ()->json ( [
						'data' => $res,
						'state' => 'yes',
						'msg' => '返回数据成功'
				] );
			}else{
				return response ()->json ( [
						'data' => [ ],
						'state' => 'yes',
						'msg' => '返回结果为空'
				] );
			}
		}
		/**
		 * 用户添加预约
		 * @return \Illuminate\Http\JsonResponse;
		 */
		public function makedate(Request $request){
			$doc_id= $request->json('doc_id');
			$doc_id = isset ( $doc_id) ? $doc_id: 0;
			$event_id= $request->json('event_id');
			$event_id = isset ($event_id) ? $event_id: 0;
			$type_id= $request->json('type_id');
			$type_id= isset ($type_id) ? $type_id: 0;
			$user=Auth::user();
			if($user){
				$user_id=$user->id;
				$username=$user->name;
			}
			$user_id = isset ( $user_id) ? $user_id: 0;
			$username = isset ( $username) ? $username: '';
			$evevt = DB::table ( 'kurtjensen_mycal_events' )->where ( 'id', $event_id)->first ();
			$doc = DB::table ( 'bohe_article_doctor' )->where ( 'id', $doc_id )->first ();
			if(!$doc||!$evevt){
				return response ()->json ( [
						'state' => 'no',
						'msg' => '错误的医生ID或事件ID'
				] );
			}else{
				$date = DB::table ( 'bohe_article_date' )->where ( 'event_id', $event_id)->where ( 'user_id', $user_id)->first ();
				if($date){
					return response ()->json ( [
							'state' => 'no',
							'msg' => '您已经预约过了，请勿重复预约'
					] );
				}else{
					$create=date('Y-m-d H:i:s',time());
					$db = DB::insert ( 'insert into bohe_article_date (doc_id,event_id,user_id,username,type_id,created_at) values(?,?,?,?,?,?)', [
							$doc_id,
							$event_id,
							$user_id,
							$username,
							$type_id,
							$create
					] );
					if ($db) {
						return response ()->json ( [
								'state' => 'yes',
								'msg' => '添加成功'
						] );
					} else {
						return response ()->json ( [
								'state' => 'no',
								'msg' => '添加失败'
						] );
					}
				}
				
				
			}
			
			
		}
		/**
		 * 查找自己的预约
		 * @return \Illuminate\Http\JsonResponse;
		 */
		public function mydate(){
			$user=Auth::user();
			if($user){
				$user_id=$user->id;
			}
			$user_id = isset ( $user_id) ? $user_id: 0;
			$date = DB::table ( 'bohe_article_date' )->where ( 'user_id', $user_id)->orderBy('created_at', 'desc')->get ();
			if($date&&count($date)>0){
				foreach ($date as$k=>$v){
					$data[$k]['id']=$v->id;
					if($v->state==0){
						$data[$k]['state']='预约成功';
					}elseif($v->state==1){
						$data[$k]['state']='预约取消';
					}elseif($v->state==2){
						$data[$k]['state']='预约完成';
					}
					//查找医生头像和姓名
					$doctor = DB::table ( 'bohe_article_doctor' )->where ( 'id', $v->doc_id )->first ();
					if ($doctor) {
						$arr = DB::table ( 'system_files' )->where ( 'attachment_id', $doctor->id )->where ( 'field', "photo" )->where('attachment_type', "Bohe\Article\Models\Index")->value ( 'disk_name' );
						if ($arr) {
							$arr1 = substr ( $arr, 0, 3 );
							$arr2 = substr ( $arr, 3, 3 );
							$arr3 = substr ( $arr, 6, 3 );
							$doctor->photo = "/uploads/public/$arr1/$arr2/$arr3/$arr";
						} else {
							$doctor->photo = null;
						}
						
						$data [$k]['doc_id'] = $doctor->id;
						$data [$k]['doc_name'] = $doctor->name;
						$data [$k]['doc_photo'] = $doctor->photo;
						
					} else {
						$data [$k]['doc_id']= null;
						$data [$k]['doc_name']= null;
						$data [$k]['doc_photo']= null;
					}
					//查找事件的日期诊所和项目
					$event=DB::table ( 'kurtjensen_mycal_events' )->where ( 'id', $v->event_id)->first ();
					if($event){
						
						$data[$k]['date']=$event->date;
						$data[$k]['time']=$event->time;
						$data[$k]['end_time']=$event->end_time;
					}else{
						$data[$k]['date']=null;
						$data[$k]['time']=null;
						$data[$k]['end_time']=null;
						
					}
					//查找用户的操作时间
					$data[$k]['created_at']=$v->created_at;
					//查找用户预约的项目
					$datetype=$v->type_id;
					if($datetype>0){
						$datetype=DB::table ( 'kurtjensen_mycal_types' )->where ( 'id', $datetype)->value ( 'name' );
						$data[$k]['datetype']=$datetype;
					}
					$cat=DB::table ( 'kurtjensen_mycal_categorys_events' )->where ( 'event_id', $v->event_id)->first ();
					if($cat&&count($cat)>0){
						$thecat=DB::table ( 'kurtjensen_mycal_categories' )->where ( 'id', $cat->category_id)->first ();
						if($thecat){
							$data[$k]['cat']=$thecat->name;
						}else{
							$data[$k]['cat']=null;
						}
					}
					$type=DB::table ( 'kurtjensen_mycal_types_events' )->where ( 'event_id', $v->event_id)->get ();
					if($type&&count($type)>0){
						foreach($type as$y=> $ty){
							$thetype=DB::table ( 'kurtjensen_mycal_types' )->where ( 'id', $ty->type_id)->first ();
							if($thetype){
								$thedata[$y]=$thetype->name;
							}
						}
						
						if($thedata&&count($thedata)>0){
							$data[$k]['type']=$thedata;
						}else{
							$data[$k]['type']=null;
						}
				}
				
				
			  }
			  return response ()->json ( [
			  		'data'=>$data,
			  		'state' => 'yes',
			  		'msg' => '预约记录'
			  ] );
			}else{
				$data=[];
				return response ()->json ( [
						'data'=>$data,
						'state' => 'yes',
						'msg' => '您还没有预约记录'
				] );
			}
		}
		/**
		 * 用户取消预约接口
		 * @param Request $request
		 * @return \Illuminate\Http\JsonResponse;
		 */
		public function undate(Request $request){
			$date_id= $request->json('date_id');
			$date_id= isset ( $date_id) ? $date_id: 0;
			$user=Auth::user();
			if($user){
				$user_id=$user->id;
			}
			$user_id = isset ( $user_id) ? $user_id: 0;
			$date = DB::table ( 'bohe_article_date' )->where ( 'id', $date_id)->where('user_id', $user_id)->first();
			if($date){
				$a=DB::table('bohe_article_date')
				->where ( 'id', $date_id)
				->update(array('state' => 1));
				if($a){
					return response ()->json ( [
							'state' => 'yes',
							'msg' => '取消预约成功'
					] );
				}else{
					return response ()->json ( [
							'state' => 'no',
							'msg' => '取消预约失败'
					] );
				}
			}else{
				return response ()->json ( [
						'state' => 'no',
						'msg' => '取消预约失败'
				] );
			}
		}
                /**
                 * 医生的预约列表
                 * @return type
                 */
                public function doctordate(){
                    $user=Auth::user();
			if($user){
				$user_id=$user->id;
			}
                   $doc_userid = isset ( $user_id ) ? $user_id : 0;
                   $doc_id = DB::table ( 'bohe_article_doctor' )->where ( 'user_id', $doc_userid )->value ( 'id' );
                   $doc_id = $doc_id>0 ? $doc_id : 0;
                   $page = isset ( $_GET ['page'] ) ? $_GET ['page'] : 1;
                   $num = isset ( $_GET ['num'] ) ? $_GET ['num'] : 10;
			$date = DB::table ( 'bohe_article_date' )->where ( 'doc_id', $doc_id)->where('state', 0)->orderBy('created_at', 'desc')->paginate ( $num, $columns = [
						'*'
				], $pageName = 'page', $page );
			if($date&&count($date)>0){
				foreach ($date as$k=>$v){
					$data[$k]['id']=$v->id;
					if($v->state==0){
						$data[$k]['state']='预约成功';
					}else{
						$data[$k]['state']='预约完成';
					}
					//查找用户头像和姓名
					$user = DB::table ( 'users' )->where ( 'id', $v->user_id )->first ();
					if ($user) {
						$arr = DB::table ( 'system_files' )->where ( 'attachment_id', $v->user_id )->where ( 'field', "avatar" )->where('attachment_type', "RainLab\User\Models\User")->value ( 'disk_name' );
						if ($arr) {
							$arr1 = substr ( $arr, 0, 3 );
							$arr2 = substr ( $arr, 3, 3 );
							$arr3 = substr ( $arr, 6, 3 );
							$photo = "/uploads/public/$arr1/$arr2/$arr3/$arr";
						} else {
							$photo = null;
						}
						
						$data [$k]['user_id'] = $user->id;
						$data [$k]['user_name'] = $user->name;
                                                $data [$k]['user_mobile'] = $user->mobile;
						$data [$k]['user_photo'] = $photo;
						
					} else {
						$data [$k]['user_id']= null;
						$data [$k]['user_name']= null;
                                                $data [$k]['user_mobile'] = null;
						$data [$k]['user_photo']= null;
					}
                                        $data[$k]['id']=$v->id;
					//查找事件的日期诊所和项目
					$event=DB::table ( 'kurtjensen_mycal_events' )->where ( 'id', $v->event_id)->first ();
					if($event){
						
						$data[$k]['date']=$event->date;
						$data[$k]['time']=$event->time;
						$data[$k]['end_time']=$event->end_time;
					}else{
						$data[$k]['date']=null;
						$data[$k]['time']=null;
						$data[$k]['end_time']=null;
						
					}
					//查找用户的操作时间
					$data[$k]['created_at']=$v->created_at;
					//查找用户预约的项目
					$datetype=$v->type_id;
					if($datetype>0){
						$datetype=DB::table ( 'kurtjensen_mycal_types' )->where ( 'id', $datetype)->value ( 'name' );
						$data[$k]['datetype']=$datetype;
					}
					$cat=DB::table ( 'kurtjensen_mycal_categorys_events' )->where ( 'event_id', $v->event_id)->first ();
					if($cat&&count($cat)>0){
						$thecat=DB::table ( 'kurtjensen_mycal_categories' )->where ( 'id', $cat->category_id)->first ();
						if($thecat){
							$data[$k]['cat']=$thecat->name;
                                                        $data[$k]['cat_add']=$thecat->description;
						}else{
							$data[$k]['cat']=null;
                                                        $data[$k]['cat_add']=null;
						}
					}
					$type=DB::table ( 'kurtjensen_mycal_types_events' )->where ( 'event_id', $v->event_id)->get ();
					if($type&&count($type)>0){
						foreach($type as$y=> $ty){
							$thetype=DB::table ( 'kurtjensen_mycal_types' )->where ( 'id', $ty->type_id)->first ();
							if($thetype){
								$thedata[$y]=$thetype->name;
							}
						}
						
						if($thedata&&count($thedata)>0){
							$data[$k]['type']=$thedata;
						}else{
							$data[$k]['type']=null;
						}
				}
				
				
			  }
			  return response ()->json ( [
                                        'page' => $page ,
					'num' => $num ,
			  		'data'=>$data,
			  		'state' => 'yes',
			  		'msg' => '预约记录'
			  ] );
			}else{
				$data=[];
				return response ()->json ( [
                                                'page' => $page ,
                                                'num' => $num ,
						'data'=>$data,
						'state' => 'yes',
						'msg' => '没有预约记录'
				] );
			}
                }
		
		
		
	
}
