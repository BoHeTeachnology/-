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

class DoctorController extends Controller {
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct() {
		//
	}
	/**
	 * 医生列表
	 *
	 * @return unknown
	 */
	public function doctorlist() {
		$page = isset ( $_GET ['page'] ) ? $_GET ['page'] : 1;
		$num = isset ( $_GET ['num'] ) ? $_GET ['num'] : 10;
		$cat = isset ( $_GET ['cat'] ) ? $_GET ['cat'] : null;
		$name = isset ( $_GET ['name'] ) ? $_GET ['name'] : null;
		$have = isset ( $_GET ['have'] ) ? $_GET ['have'] : 0;
		// return
		if ($cat != null) {
			// 查找是否有catid
			$thecat = DB::table ( 'bohe_doctor_cats' )->where ( 'id', $cat )->first ();
			if (isset ( $thecat->id ) && $thecat->id > 0) {
				$result = DB::table ( 'bohe_article_doctor' )->where ( [ 
						'bohe_doctor_posts_cats.cat_id' => $thecat->id,'bohe_article_doctor.state' => 1
				] )->leftJoin ( "bohe_doctor_posts_cats", 'bohe_article_doctor.id', '=', 'bohe_doctor_posts_cats.index_id' )->paginate ( $num, $columns = [ 
						'*' 
				], $pageName = 'page', $page );
			} else {
				$result = DB::table ( 'bohe_article_doctor' )->where ( 'id', 0 )->paginate ( $num, $columns = [ 
						'*' 
				], $pageName = 'page', $page );
			}
		}
		//查询7天是否有出诊的
		if($have==1){
			$date=date("Y-m-d",time());
			
			$lastday=date('Y-m-d',strtotime("$date+1 week"));
			$evevt = DB::table ( 'kurtjensen_mycal_events' )->where('date','>=',$date)->where('date','<=',$lastday)->orderBy('date', 'asc')->get ();
			if($evevt&&count($evevt)>0){
				$docid=[];
				foreach ($evevt as $k=>$v){
					$docid[]=$v->user_id;
				}
				$docid=array_unique($docid);
				$docid=implode(',',$docid);
				$result = DB::table ( 'bohe_article_doctor' )->whereRaw ( "user_id in ($docid) " )->where ('state','=',1)->paginate ( $num, $columns = [
						'*'
				], $pageName = 'page', $page );
			}else{
				$result = DB::table ( 'bohe_article_doctor' )->where ('id','=',0)->paginate ( $num, $columns = [
						'*'
				], $pageName = 'page', $page );
			}
				
			
			
			
		}
		
		if ($name != null) {
			$result = DB::table ( 'bohe_article_doctor' )->whereRaw ( "name like '%$name%' " )->where ('state','=',1)->paginate ( $num, $columns = [ 
					'*' 
			], $pageName = 'page', $page );
		}
		
		if ($name == null &&$cat == null&&$have==null) {
			$result = DB::table ( 'bohe_article_doctor' )->where ('state','=',1)->paginate ( $num, $columns = [ 
					'*' 
			], $pageName = 'page', $page );
		}
		
		if (count ( $result ) > 0) {
			foreach ( $result as $re ) {
				$id = $re->id;
				$arr = DB::table ( 'system_files' )->where ( 'attachment_id', $id )->where ( 'field', "photo" )->where('attachment_type', "Bohe\Article\Models\Index")->value ( 'disk_name' );
				if ($arr) {
					$arr1 = substr ( $arr, 0, 3 );
					$arr2 = substr ( $arr, 3, 3 );
					$arr3 = substr ( $arr, 6, 3 );
					$re->photo = "/uploads/public/$arr1/$arr2/$arr3/$arr";
				} else {
					$re->photo = null;
				}
			}
		}
		return $result;
	}
	/**
	 * 单个医生的信息
	 *
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public function doctorone() {
		$id = isset ( $_GET ['id'] ) ? $_GET ['id'] : 0;
		$doctor = DB::table ( 'bohe_article_doctor' )->where ( 'id', $id )->first ();
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
			//查找医生的关注数和留言数量
			$follownum=$this->getfollownum($doctor->id);
			$messagenum=$this->getmessagenum($doctor->id);
			$data ['id'] = $doctor->id;
			$data ['name'] = $doctor->name;
			$data ['photo'] = $doctor->photo;
			$data ['institution'] = $doctor->institution;
			$data ['experience'] = $doctor->experience;
			$data ['jobtitle'] = $doctor->jobtitle;
			$data ['skilledin'] = $doctor->skilledin;
			$data ['introduce'] = $doctor->introduce;
			$data ['age'] = $doctor->age;
			$data ['city'] = $doctor->city;
			$data ['office'] = $doctor->office;
			$data ['turn_num'] = $doctor->turn_num;
			$data ['follow_num'] = $follownum;
			$data ['message_num'] = $messagenum;
			
			return response ()->json ( [ 
					'data' => $data,
					'msg'=>'yes'
			] );
		} else {
			$data = [ ];
			return response ()->json ( [ 
					'data' => $data,
					'msg'=>'yes'
			] );
		}
	}
	/**
	 * 查找医生的留言数量
	 * @param number $doc_id
	 * @return number
	 */
	public function getmessagenum($doc_id=0){
		$message=DB::table ( 'bohe_article_message' )->where ( 'doc_id', $doc_id)->where('state',1)->orderBy('created_at','desc')->get();
		if($message&&count($message)>0){
			return count($message);
			
		}else{
			return 0;
		}
	}
	/**
	 * 查找医生的关注量
	 * @param number $doc_id
	 * @return number
	 */
	public function getfollownum($doc_id=0){
		$follow = DB::table ( 'bohe_doctor_follow' )->where ( 'doc_id', $doc_id)->where('type',1)->get ();
		if(isset($follow)&&count($follow)>0){
			return count($follow);
			
		}else{
			return 0;
		}
	}
	/**
	 * 医生的过往病例
	 *
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public function passcase() {
		$id = isset ( $_GET ['id'] ) ? $_GET ['id'] : 0;
		$page = isset ( $_GET ['page'] ) ? $_GET ['page'] : 1;
		$num = isset ( $_GET ['num'] ) ? $_GET ['num'] : 10;
		$passcase = DB::table ( 'rainlab_blog_posts' )->where ( 'index_id', $id )->paginate ( $num, $columns = [
				'*'
		], $pageName = 'page', $page );
		if ($passcase && count ( $passcase ) > 0) {
			foreach ( $passcase as $k => $case ) {
				$data [$k] ['id'] = $case->id;
				$data [$k] ['title'] = $case->title;
				//查找浏览数
				$views = DB::table ( 'pollozen_mostvisited_visits' )->where ( 'post_id', $case->id)->first ();
				if($views){
					$data [$k] ['views'] = $views->visits;
				}else{
					$data [$k] ['views'] = 0;
				}
				//查找图片
				$arr = DB::table ( 'system_files' )->where ( 'attachment_id', $case->id)->where ( 'field', "featured_images" )->where('attachment_type', "RainLab\Blog\Models\Post")->value ( 'disk_name' );
				if ($arr) {
					$arr1 = substr ( $arr, 0, 3 );
					$arr2 = substr ( $arr, 3, 3 );
					$arr3 = substr ( $arr, 6, 3 );
					$data[$k]['photo']= "/uploads/public/$arr1/$arr2/$arr3/$arr";
				}else{
					$data[$k]['photo']= null;
				}
				
			}
			return response ()->json ( [ 
					'page' => $page ,
					'num' => $num ,
					'data' => $data ,
					'state' => 'yes',
					'msg' => '返回数据成功'
			] );
		} else {
			$data = [ ];
			return response ()->json ( [ 
					'page' => $page ,
					'num' => $num ,
					'data' => $data ,
					'state' => 'yes',
					'msg' => '返回结果为空'
			] );
		}
	}
	/**
	 * 病例详情接口
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public function thecase(){
		$case_id = isset ( $_GET ['case_id'] ) ? $_GET ['case_id'] : 0;
		$thecase = DB::table ( 'rainlab_blog_posts' )->where ( 'id', $case_id)->first();
		if ($thecase) {
			$data  ['id'] = $thecase->id;
			$data  ['title'] = $thecase->title;
			$data  ['content'] = $thecase->content;
			$data  ['content_html'] = $thecase->content_html;
			
				//查找浏览数
			$views = DB::table ( 'pollozen_mostvisited_visits' )->where ( 'post_id', $thecase->id)->first ();
				if($views){
					$data['views'] = $views->visits;
				}else{
					$data['views'] = 0;
				}
				//查找图片
				$arr = DB::table ( 'system_files' )->where ( 'attachment_id', $thecase->id)->where ( 'field', "featured_images" )->where('attachment_type', "RainLab\Blog\Models\Post")->value ( 'disk_name' );
				if ($arr) {
					$arr1 = substr ( $arr, 0, 3 );
					$arr2 = substr ( $arr, 3, 3 );
					$arr3 = substr ( $arr, 6, 3 );
					$data['photo']= "/uploads/public/$arr1/$arr2/$arr3/$arr";
				}else{
					$data['photo']= null;
				}
				
			
			return response ()->json ( [
					'data' => $data ,
					'state' => 'yes',
					'msg' => '返回数据成功'
			] );
		} else {
			$data = [ ];
			return response ()->json ( [
					'data' => $data ,
					'state' => 'yes',
					'msg' => '返回结果为空'
			] );
		}
	}
	
	/**
	 * 用户的状态
	 *
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public function userstate() {
		$user = Auth::user ();
		if ($user) {
			return response ()->json ( [ 
					'state' => 'yes',
					'user_id' => $user->id 
			] );
		} else {
			return response ()->json ( [ 
					'state' => 'no' 
			] );
		}
	}
	/**
	 * 获取医生的标签
	 *
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public function doctorcat() {
		$arr = DB::table ( 'bohe_doctor_cats' )->get ();
		if (isset ( $arr ) && count ( $arr ) > 0) {
			return response ()->json ( [ 
					'data' => $arr 
			] );
		} else {
			$data = [ ];
			return response ()->json ( [ 
					'data' => $data 
			] );
		}
	}
	/**
	 * 添加用户关注
	 *
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public function addfollow(Request $request) {
		$doc_id= $request->json('doc_id');
		$doc_id = isset ( $doc_id) ? $doc_id: 0;
		$user=Auth::user();
		if($user){
			$user_id=$user->id;
		}
		$user_id = isset ( $user_id) ? $user_id: 0;
		// 根据医生ID查找该医生在用户表里的ID
		if ($doc_id > 0) {
			$doc = DB::table ( 'bohe_article_doctor' )->where ( 'id', $doc_id )->first ();
			if ($doc) {
				// 查找用户ID是否存在
				$user = DB::table ( 'users' )->where ( 'id', $user_id )->first ();
				if ($user) {
					$db = DB::insert ( 'insert into bohe_doctor_follow (doc_id,doc_user_id,user_id,type) values(?,?,?,?)', [ 
							$doc_id,
							$doc->user_id,
							$user_id,
							1 
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
				} else {
					return response ()->json ( [ 
							'state' => 'no',
							'msg' => '错误的用户ID' 
					] );
				}
			} else {
				return response ()->json ( [ 
						'state' => 'no',
						'msg' => '错误的医生ID' 
				] );
			}
		} else {
			return response ()->json ( [ 
					'state' => 'no',
					'msg' => '医生ID为空' 
			] );
		}
	}
	/**
	 * 用户取消关注医生
	 * @param Request $request
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public  function delfollow(Request $request){
		$doc_id= $request->json('doc_id');
		$doc_id = isset ( $doc_id) ? $doc_id: 0;
		$user=Auth::user();
		if($user){
			$user_id=$user->id;
		}
		$user_id = isset ( $user_id) ? $user_id: 0;
		$a=DB::table ( 'bohe_doctor_follow' )->where ( 'doc_id', $doc_id )->where ( 'user_id', $user_id)->delete();
		if($a){
			return response ()->json ( [
					'state' => 'yes',
					'msg' => '取消关注成功'
			] );
		}else{
			return response ()->json ( [
					'state' => 'no',
					'msg' => '取消关注失败'
			] );
		}
		
	}
	/**
	 * 查找用户关注或问诊过的医生
	 *
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public function doctorfollow() {
		$user=Auth::user();
		if($user){
			$user_id=$user->id;
		}
		$user_id = isset ( $user_id) ? $user_id: 0;
		$follow = DB::table ( 'bohe_doctor_follow' )->where ( 'user_id', $user_id)->get ();
		if (isset ( $follow ) && count ( $follow ) > 0) {
			foreach ( $follow as $k => $f ) {
				$doctor = DB::table ( 'bohe_article_doctor' )->where ( 'id', $f->doc_id )->first ();
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
					
					$data [$k] ['id'] = $doctor->id;
					$data [$k] ['name'] = $doctor->name;
					$data [$k] ['photo'] = $doctor->photo;
					$data [$k] ['institution'] = $doctor->institution;
					$data [$k] ['experience'] = $doctor->experience;
					$data [$k] ['jobtitle'] = $doctor->jobtitle;
					$data [$k] ['skilledin'] = $doctor->skilledin;
					$data [$k] ['introduce'] = $doctor->introduce;
					$data [$k] ['age'] = $doctor->age;
					$data [$k] ['city'] = $doctor->city;
					$data [$k] ['office'] = $doctor->office;
				}
			}
			return response ()->json ( [ 
					'data' => $data,
					'state' => 'yes',
					'msg' => '返回数据成功'
			] );
		} else {
			return response ()->json ( [ 
					'data' => [ ],
					'state' => 'yes',
					'msg' => '返回结果为空'
			] );
		}
	}
	/**
	 * 返回医生关注数
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public function follownum(){
		$doc_id = isset ( $_GET ['doc_id'] ) ? $_GET ['doc_id'] : 0;
		$follow = DB::table ( 'bohe_doctor_follow' )->where ( 'doc_id', $doc_id)->where('type',1)->get ();
		if(isset($follow)&&count($follow)>0){
			return response ()->json ( [
					'num' => count($follow)
			] );
		}else{
			return response ()->json ( [
					'num' => 0
			] );
		}
	}
	/**
	 * 医生留言列表
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public function messagelist(){
		$doc_id = isset ( $_GET ['doc_id'] ) ? $_GET ['doc_id'] : 0;
		$page = isset ( $_GET ['page'] ) ? $_GET ['page'] : 1;
		$num = isset ( $_GET ['num'] ) ? $_GET ['num'] : 10;
		$message=DB::table ( 'bohe_article_message' )->where ( 'doc_id', $doc_id)->where('state',1)->orderBy('created_at','desc')->paginate ( $num, $columns = [
				'*'
		], $pageName = 'page', $page );
		if(isset($message)&&count($message)>0){
			foreach ( $message as $k => $m ) {
				//查找用户头像
				$userarr = DB::table ( 'system_files' )->where ( 'attachment_id', $m->user_id)->where ( 'field', "avatar" )->where('attachment_type', "RainLab\User\Models\User")->value ( 'disk_name' );
				if($userarr){
					$userarr1= substr ( $userarr, 0, 3 );
					$userarr2= substr ( $userarr, 3, 3 );
					$userarr3= substr ( $userarr, 6, 3 );
					$userphoto = "/uploads/public/$userarr1/$userarr2/$userarr3/$userarr";
				}else{
					$userphoto= null;
				}
				$arr = DB::table ( 'system_files' )->where ( 'attachment_id', $m->id)->where ( 'field', "featured_images" )->where('attachment_type', "Bohe\Message\Models\Index")->get ( );
				$featured_images=array();
				if ($arr&&count($arr)>0) {
					foreach ($arr as $y=> $a){
						$arr1[$y] = substr ( $a->disk_name, 0, 3 );
						$arr2[$y]= substr ( $a->disk_name, 3, 3 );
						$arr3[$y]= substr ( $a->disk_name, 6, 3 );
						$featured_images[$y]="/uploads/public/$arr1[$y]/$arr2[$y]/$arr3[$y]/$a->disk_name";
					}
						
					} 
					
					$data [$k] ['id'] = $m->id;
					$data [$k] ['user_id'] = $m->user_id;
					$data [$k] ['doc_id'] = $m->doc_id;
					$data [$k] ['username'] = $m->username;
					$data [$k] ['userphoto'] = $userphoto;
					$data [$k] ['title'] = $m->title;
					$data [$k] ['content'] = $m->content;
					$data [$k] ['state'] = $m->state;
					$data [$k] ['created_at'] = $m->created_at;
					$data [$k] ['featured_images'] = $featured_images;
					$data [$k] ['great'] = $m->great;
				
			}
			return response ()->json ( [
					'page' => $page ,
					'num' => $num ,
					'data' => $data,
					'state' => 'yes',
					'msg' => '返回数据成功'
			] );
		}else{
			return response ()->json ( [
					'page' => $page ,
					'num' => $num ,
					'data' => [ ],
					'state' => 'yes',
					'msg' => '返回结果为空'
			] );
		}
	}
	/**
	 * 返回医生留言的数量
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public function messagenum(){
		$doc_id = isset ( $_GET ['doc_id'] ) ? $_GET ['doc_id'] : 0;
		$message=DB::table ( 'bohe_article_message' )->where ( 'doc_id', $doc_id)->where('state',1)->orderBy('created_at','desc')->get();
		if($message&&count($message)>0){
			return response ()->json ( [
					'num' => count($message),
					'state' => 'yes',
			] );
		}else{
			return response ()->json ( [
					'num' =>0,
					'state' => 'yes',
			] );
		}
				
	}
	/**
	 * 添加或取消评论的赞
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public function messagegreat(Request $request){
		$msg_id=$request->json('msg_id');
		$msg_id = isset ( $msg_id) ? $msg_id : 0;
		$user=Auth::user();
		if($user){
			$user_id=$user->id;
		}
		$user_id = isset ( $user_id) ? $user_id: 0;
		$type=$request->json('type');
		$type = isset ($type) ? $type: 0;
		$message=DB::table ( 'bohe_article_message' )->where ( 'id', $msg_id)->first ();
		$user=DB::table ( 'users' )->where ( 'id', $user_id)->first ();
		if($message&&$user){
			if($type==0){
				$value = Cache::get('great');
				if (isset($value)&&$value['msg_id']==$msg_id&&$value['user_id']==$user_id) {
					
					return response ()->json ( [
							'state' => 'no',
							'msg' => '不能重复点赞'
					] );
				}else{
					$thegreat=$message->great +1;
					$a=DB::table('bohe_article_message')
					->where('id', $message->id)
					->update(array('great' => $thegreat));
					if($a){
						$numgroup=['msg_id'=>$msg_id,'user_id'=>$user_id];
						Cache::put('great', $numgroup, 60);
						return response ()->json ( [
								'state' => 'yes',
								'msg' => '点赞成功'
						] );
					}else{
						return response ()->json ( [
								'state' => 'no',
								'msg' => '点赞失败'
						] );
					}
				}
			}
			//取消点赞
			if($type==1){
				if($message->great>=0){
					$thegreat=$message->great -1;
					$a=DB::table('bohe_article_message')
					->where('id', $message->id)
					->update(array('great' => $thegreat));
					if($a){
						return response ()->json ( [
								'state' => 'yes',
								'msg' => '取消点赞成功'
						] );
					}else{
						return response ()->json ( [
								'state' => 'no',
								'msg' => '取消点赞失败'
						] );
					}
				}else{
					return response ()->json ( [
							'state' => 'no',
							'msg' => '取消点赞失败'
					] );
				}
					
				
			}
			
			
		}elseif(!$message){
			return response ()->json ( [
					'state' => 'no',
					'msg' => '错误的留言ID'
			] );
		}elseif(!$user){
			return response ()->json ( [
					'state' => 'no',
					'msg' => '错误的用户ID'
			] );
		}
	}
	/**
	 * 医生主页添加分享数
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public function addturnnum(Request $request){
		$doc_id=$request->json('doc_id');
		$doc_id = isset ($doc_id) ? $doc_id: 0;
		$doc=DB::table ( 'bohe_article_doctor' )->where ( 'id', $doc_id)->first ();
		if($doc){
			$a=DB::table('bohe_article_doctor')->
			where ( 'id', $doc_id)
			->update(array('turn_num' => $doc->turn_num + 1));
			if($a){
				return response ()->json ( [
						'state' => 'yes',
						'msg' => '添加分享数成功'
				] );
			}else{
				return response ()->json ( [
						'state' => 'no',
						'msg' => '添加分享数失败'
				] );
			}
			
		}else{
			return response ()->json ( [
					'state' => 'no',
					'msg' => '错误的医生ID'
			] );
		}
		
	}
	/**
	 * 用户添加留言
	 */
	public function addmessage(Request $request){
		$doc_id=$request->json('doc_id');
		$doc_id = isset ($doc_id) ? $doc_id: 0;
		$user=Auth::user();
		if($user){
			$user_id=$user->id;
			$username=$user->name;
		}
		$user_id = isset ( $user_id) ? $user_id: 0;
		$username = isset ( $username) ? $username: null;
		$content=$request->json('content');
		$content = isset ($content) ? $content: null;
		$featured_images=$request->json('featured_images');
		$featured_images= isset ($featured_images) ? $featured_images: null;
		$doc=DB::table ( 'bohe_article_doctor' )->where ( 'id', $doc_id)->first ();
		$user=DB::table ( 'users' )->where ( 'id', $user_id)->first ();
		if($doc&&$user){
			$created_at=date('Y-m-d H:i:s',time());
			$a=DB::table('bohe_article_message')->insertGetId(['doc_id'=>$doc_id,'user_id'=>$user_id,'username'=>$username,'content'=>$content,'created_at'=>$created_at]);
			 
			if($a>0){
				$msgid=$a;
				//添加图片
				//获得
				if($featured_images!=null&&count($featured_images)>0){
					
						foreach ($featured_images as $img){
							$attachment_id=$msgid;
							$disk_name=$img['disk_name'];
							$file_name=isset($img['file_name'])?$img['file_name']:null;
							$file_size=isset($img['file_size'])?$img['file_size']:null;
							$attachment_type='Bohe\Message\Models\Index';
							$is_public=1;
							$field='featured_images';
							$created_at=date('Y-m-d H:i:s',time());
							$a=DB::insert(
									'insert into system_files (attachment_id,disk_name,attachment_type,file_name,file_size,field,is_public,created_at) values (?,?,?,?,?,?,?,?)',
									[$attachment_id,$disk_name,$attachment_type,$file_name,$file_size,$field,$is_public,$created_at]
									);
						}
					
					
					
					return response ()->json ( [
							'state' => 'yes',
							'msg' => '添加留言成功'
					] );
					
				}else{
					return response ()->json ( [
							'state' => 'yes',
							'msg' => '添加留言成功'
					] );
				}
				
			}else{
				return response ()->json ( [
						'state' => 'no',
						'msg' => '添加内容失败'
				] );
			}
			
		}else{
			return response ()->json ( [
					'state' => 'no',
					'msg' => '医生ID不存在或用户ID不存在'
			] );
		}
		 
		
	}
	/**
	 * 首页banner
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public function banner(){

		$banner =DB::table ( 'bohe_article_banner' )->where ( 'state', 1)->get();
		if (isset($banner)&&count($banner)>0) {
			foreach ($banner as $k=> $ban){
				$arr = DB::table ( 'system_files' )->where ( 'attachment_id', $ban->id )->where ( 'field', "featured_images" )->where('attachment_type', "Bohe\Banner\Models\Index")->value ( 'disk_name' );
					if ($arr) {
						$arr1 = substr ( $arr, 0, 3 );
						$arr2 = substr ( $arr, 3, 3 );
						$arr3 = substr ( $arr, 6, 3 );
						$data[$k]['id']= $ban->id;
						if(($ban->url=='')&&($ban->url==null)){
							$data[$k]['url']= '#';
						}else{
							$data[$k]['url']= $ban->url;
						}
						
						
						
						
						$data[$k]['photo']= "/uploads/public/$arr1/$arr2/$arr3/$arr";
					}
					
				}
				if($data&&count($data)>0){
					return response ()->json ( [
							'state' => 'yes',
							'msg' =>'获取数据成功' ,
							'data'=>$data
					] );
				}else{
					return response ()->json ( [
							'state' => 'no',
							'msg' => '返回数据为空',
							'data'=>[]
					] );
				}
				

			} else {
				return response ()->json ( [
						'state' => 'yes',
						'msg' => '返回数据为空',
						'data'=>[]
				] );
			}
		
	}
	/**
	 * 返回用户是否关注医生
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public function iffollow(){
		$doc_id = isset ( $_GET ['doc_id'] ) ? $_GET ['doc_id'] : 0;
		$user=Auth::user();
		if($user){
			$user_id=$user->id;
		}
		$user_id = isset ( $user_id) ? $user_id: 0;
		$follow = DB::table ( 'bohe_doctor_follow' )->where ( 'doc_id', $doc_id)->where('user_id',$user_id)->where('type',1)->first ();
		if(isset($follow)&&count($follow)>0){
			return response ()->json ( [
					'state' => 'yes',
					'msg' => '关注了该医生',
			] );
		}else{
			return response ()->json ( [
					'state' => 'no',
					'msg' => '未关注该医生',
			] );
		}
	}
	/**
	 * 返回名医列表
	 * @return \Illuminate\Http\JsonResponse;
	 */
	public function famousdoctor(){
		$doctor=DB::table ( 'bohe_article_doctor' )->where('sort','>',0)->orderBy('sort','asc')->take(6)->get();
		if($doctor&&count($doctor)>0){
			foreach ( $doctor as $k=> $re ) {
				$id = $re->id;
				$arr = DB::table ( 'system_files' )->where ( 'attachment_id', $id )->where ( 'field', "photo" )->where('attachment_type', "Bohe\Article\Models\Index")->value ( 'disk_name' );
				if ($arr) {
					$arr1 = substr ( $arr, 0, 3 );
					$arr2 = substr ( $arr, 3, 3 );
					$arr3 = substr ( $arr, 6, 3 );
					$re->photo = "/uploads/public/$arr1/$arr2/$arr3/$arr";
				} else {
					$re->photo = null;
				}
				$data[$k]['id']= $re->id;
				$data[$k]['name']= $re->name;
				$data[$k]['institution']= $re->institution;
				$data[$k]['experience']= $re->experience;
				$data[$k]['jobtitle']= $re->jobtitle;
				$data[$k]['skilledin']= $re->skilledin;
				$data[$k]['introduce']= $re->introduce;
				$data[$k]['age']= $re->age;
				$data[$k]['office']= $re->office;
				$data[$k]['photo']= $re->photo;
				
				
			}
			
			return response ()->json ( [
					'data' => $data,
					'msg'=>'yes'
			] );
		}else{
			$data=[];
			return response ()->json ( [
					'data' => $data,
					'msg'=>'yes'
			] );
		}
	}
        
    public function projectlist(){
        $array=[
            [
                "id"=>"1","name"=>"内科","parent"=>"0","subclass"=>[
                    ["id"=>"3","name"=>"磨前牙","parent"=>"1"],
                    ["id"=>"5","name"=>"AAA","parent"=>"1"],
                    ["id"=>"7","name"=>"BBB","parent"=>"1"],
                    ["id"=>"9","name"=>"CCC","parent"=>"1"],
                ]
            ]
            ,
            [
                 "id"=>"2","name"=>"外科","parent"=>"0","subclass"=>[
                    ["id"=>"4","name"=>"磨后牙","parent"=>"2"],
                    ["id"=>"6","name"=>"DDD","parent"=>"2"],
                    ["id"=>"8","name"=>"EEE","parent"=>"2"],
                    ["id"=>"10","name"=>"FFF","parent"=>"2"],
                 ]
            ]
        ];
        return $this->success("获取成功", $array);
    }
	
}
