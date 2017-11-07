<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Firebase\JWT\JWT;
use Log;
use Auth;
use Cache;
use DB;
use App\Examine;

class UsercenterController extends Controller
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
   * 返回用户关注医生的数量
   * @return \Illuminate\Http\JsonResponse;
   */
  
    public function mydocnum(){
    	$user=Auth::user();
    	if($user){
    		$user_id=$user->id;
    	}
    	$user_id = isset ( $user_id) ? $user_id: 0;
    	$follow = DB::table ( 'bohe_doctor_follow' )->where ( 'user_id', $user_id)->where('type',1)->get ();
    	if(isset($follow)&&count($follow)>0){
    		return response ()->json ( [
    				'num' => count($follow),
    				'state' => 'yes',
    				'msg' => '返回数据成功'
    		] );
    	}else{
    		return response ()->json ( [
    				'num' => 0,
    				'state' => 'yes',
    				'msg' => '返回数据成功'
    		] );
    	}


    }
    /**
     * 返回用户的留言数量
     * @return \Illuminate\Http\JsonResponse;
     */
    public function mymsgnum(){
    	$user=Auth::user();
    	if($user){
    		$user_id=$user->id;
    	}
    	$user_id = isset ( $user_id) ? $user_id: 0;
    	$message = DB::table ( 'bohe_article_message' )->where ( 'user_id', $user_id)->get ();
    	if(isset($message)&&count($message)>0){
    		return response ()->json ( [
    				'num' => count($message),
    				'state' => 'yes',
    				'msg' => '返回数据成功'
    		] );
    	}else{
    		return response ()->json ( [
    				'num' => 0,
    				'state' => 'yes',
    				'msg' => '返回数据成功'
    		] );
    	}
    }
    /**
     * 用户给医生留言列表
     * @return \Illuminate\Http\JsonResponse;
     */
    public function messagelist(){
    	$page = isset ( $_GET ['page'] ) ? $_GET ['page'] : 1;
    	$num = isset ( $_GET ['num'] ) ? $_GET ['num'] : 10;
    	$user=Auth::user();
    	if($user){
    		$user_id=$user->id;
    	}
    	$user_id = isset ( $user_id) ? $user_id: 0;
    	$message=DB::table ( 'bohe_article_message' )->where ( 'user_id', $user_id)->paginate ( $num, $columns = [
    			'*'
    	], $pageName = 'page', $page );
    	if(isset($message)&&count($message)>0){
    		foreach ( $message as $k => $m ) {
    			
    			$arr = DB::table ( 'system_files' )->where ( 'attachment_id', $m->id)->where ( 'field', "featured_images" )->where('attachment_type', "Bohe\Message\Models\Index")->get ( );
    			$featured_images=array();
    			if ($arr&&count($arr)>0) {
    				foreach ($arr as$y=> $a){
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
     * 返回用户信息
     * @return \Illuminate\Http\JsonResponse;
     */
	public function userInformation(){
		$user = Auth::user();
		if($user){
			//查找用户头像
			$arr = DB::table ( 'system_files' )->where ( 'attachment_id', $user->id)->where ( 'field', "avatar" )->where('attachment_type', "RainLab\User\Models\User")->value ( 'disk_name' );
			if($arr){
				$arr1 = substr ( $arr, 0, 3 );
				$arr2 = substr ( $arr, 3, 3 );
				$arr3 = substr ( $arr, 6, 3 );
				$photo = "/uploads/public/$arr1/$arr2/$arr3/$arr";
			}else{
				$photo=null;
			}
			$data = array(
					'user_id' => $user->id,
					'name' => $user->name,
					'mobile' => $user->mobile,
					'age' => $user->age,
					'iu_gender' => $user->iu_gender,
					'photo'=>$photo,
			);
			return response ()->json ( [
					'data' => $data,
					'state' => 'yes',
					'msg' => '返回数据成功'
			] );
		}else{
			$data=[];
			return response ()->json ( [
					'data' => $data,
					'state' => 'no',
					'msg' => '返回数据失败'
			] );
		}
	}

/**
 * 更新用户信息
 * @param Request $request
 * @return \Illuminate\Http\JsonResponse;
 */
	public function updateuserinfo(Request $request){
		$username= $request->json('username');
		$age= $request->json('age');
		$iu_gender= $request->json('iu_gender');
		$photo= $request->json('photo');
		$user = Auth::user();
		if($user){
			$user_id=$user->id;
		}
		$user_id=isset($user_id)?$user_id:0;
		if($user_id>0){
			if($age!=''&&$age!=null){
				$user->age=$age;
			}
			if($iu_gender!=''&&$iu_gender!=null){
				$user->iu_gender=$iu_gender;
			}
			if($username!=''&&$username!=null){
				$user->name=$username;
			}
			$user->save();
			if($photo!=''&&$photo!=null){
				$disk_name=$photo['disk_name'];
				$file_name=$photo['file_name'];
				$file_size=$photo['file_size'];
				$field='avatar';
				$is_public=1;
				$created_at=date('Y-m-d H:i:s',time());
				$attachment_type='RainLab\User\Models\User';
				//查找用户是否有头像记录，有则更新。无则插入
				$arr = DB::table ( 'system_files' )->where ( 'attachment_id', $user->id)->where ( 'field', "avatar" )->where('attachment_type', "RainLab\User\Models\User")->first ();
				if($arr){
					$a=DB::table('system_files')
					->where('id', $arr->id)
					->update(array('disk_name' => $disk_name,'attachment_type' => $attachment_type,'file_name' => $file_name,'file_size' => $file_size,'field' => $field,'updated_at'=>$created_at));
				}else{
					$a=DB::insert(
							'insert into system_files (attachment_id,disk_name,attachment_type,file_name,file_size,field,is_public,created_at) values (?,?,?,?,?,?,?,?)',
							[$user->id,$disk_name,$attachment_type,$file_name,$file_size,$field,$is_public,$created_at]
							);
				}
				
			}
			return response ()->json ( [
					'state' => 'yes',
					'msg' => ' 更新数据成功'
			] );
		}else{
			return response ()->json ( [
					'state' => 'no',
					'msg' => ' 更新数据失败'
			] );
		}
		
	}
}
