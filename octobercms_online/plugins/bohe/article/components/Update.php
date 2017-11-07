<?php namespace Bohe\Article\Components;

use Cms\Classes\ComponentBase;
use Bohe\Article\Controllers\Entries as EntryController;
use Bohe\Article\Models\Index as Boheindex;
use RainLab\User\Models\User as User;
use Log;
use Auth;
use Db;
use Session;
use Flash;
use Request;
use Redirect;

class Update extends ComponentBase
{
	public $doctor;
	public $type;
	public $nowtype;
	public $thephone;
	public $thename;
	public function componentDetails()
	{
		return [
				'name'        => 'EntryForm Component',
				'description' => 'Backend form used in the front-end'
		];
	}
	public function init()
	{   //获取医生表的当前ID
		$user=$this->user();
		if($user!=null){
			$uid=$user->id;
			$doctor=Boheindex::where('user_id',$uid)->first();
			if($doctor){
				$docid=$doctor->id;
			}else{
				$thedocid=Boheindex::Max('id')->first();
				if($thedocid){
					$docid=$thedocid->id +1;
				}
			}
		}



		//查找当前的数据

		$user=$this->user();
		if($user!=null){
			$uid=$user->id;
			$doctor=Boheindex::where('user_id',$uid)->first();
			if($doctor){
				//如果没有手机号，就去用户表拿一下
				if($doctor->phone==null||$doctor->phone==''){
					//从用户表查找手机和用户名，方便用户首次填写表单
					$user=User::where('id',$uid)->first();
					if($user->mobile!=''){
						$doctor->phone= $user->mobile;
						$doctor->save();
					}

				}
				//$docid=$doctor->id;
				$this->doctor=$this->page['doctor'] = $doctor;
				//查找type
				//$type=DB('bohe_doctor_types')::select;
				$type=Db::select('select * from bohe_doctor_types ');
				if($type){
					$this->type=$this->page['type'] = $type;
				}

				$nowtype=Db::select("select * from bohe_doctor_posts_types where index_id= $doctor->id");
				if($nowtype){
					$this->nowtype=$this->page['nowtype'] = $nowtype;
				}
			}else{
				//从用户表查找手机和用户名，方便用户首次填写表单
				$user=User::where('id',$uid)->first();
				if($user->mobile!=''){
					$this->thephone=$this->page['thephone'] = $user->mobile;
				}
				if($user->name!=''){
					$this->thename=$this->page['thename'] = $user->name;
				}

			}
		}



	}

	public function onRun()
	{
	      	$this->init();



	}
// 	public function onRefreshFiles()
// 	{
// 		$this->pageCycle();
// 	}
	public function user()
	{
		if (!Auth::check()) {
			return null;
		}

		return Auth::getUser();
	}
	public function  getdoctorid(){
		$user=$this->user();
		if($user!=null){
			$uid=$user->id;
			$doctor=Boheindex::where('user_id',$uid)->first();
			if($doctor){
				$docid=$doctor->id;
			}else{
				$docid=Boheindex::insertGetId();
			}
			return $docid;

		}
	}
	/*
	 * 用户提交“保存”，到此保存
	 */
	public function onSave()
	{   //接收数据
		$data=post('Index');

		$user=$this->user();
		if($user!=null){
			$uid=$user->id;
			$doctor=Boheindex::where('user_id',$uid)->first();
			if($doctor){
				$project=Boheindex::where('user_id',$uid)->first();
				$project->name = $data['name'];
				$project->institution= $data['institution'];
				$project->experience= $data['experience'];
				$project->jobtitle= $data['jobtitle'];
				$project->skilledin= $data['skilledin'];
				$project->introduce= $data['introduce'];
				$project->phone= $data['phone'];
				$project->city= $data['city'];
				if($data['age']!=''){
					$project->age= $data['age'];
				}
				if(isset($data['sex'])){
					$project->sex= $data['sex'];
				}
				$project->state= 0;
				$project->user_id= $user->id;
				$project->username= $user->username;
				$a=$project->save(null, post('_session_key'));
				//更新type,delete then insert
				$deleted = DB::delete("delete from bohe_doctor_posts_types where index_id=$doctor->id");
				if(isset($data['types'])){
					foreach ($data['types'] as $v){
						DB::insert('insert into bohe_doctor_posts_types (index_id, type_id) values (?, ? )',[$doctor->id, $v]);
					}
				}
				if($a){
					return Redirect::to('/usercenter/doctorDetail');
				}

			}else{
				$project=new Boheindex;
				$project->name = $data['name'];
				$project->institution= $data['institution'];
				$project->experience= $data['experience'];
				$project->jobtitle= $data['jobtitle'];
				$project->skilledin= $data['skilledin'];
				$project->introduce= $data['introduce'];
				$project->phone= $data['phone'];
				$project->city= $data['city'];
				if($data['age']!=''){
					$project->age= $data['age'];
				}
				if(isset($data['sex'])){
					$project->sex= $data['sex'];
				}
				$project->state= 0;
				$project->user_id= $user->id;
				$project->username= $user->username;
				$a=$project->save(null, post('_session_key'));

				//获得save的 ID
				if($a){
					$doctorid=$project->id;
					//更新type,delete then insert
					if(isset($data['types'])){
						foreach ($data['types'] as $v){
							DB::insert('insert into bohe_doctor_posts_types (index_id, type_id) values (?, ? )',[$doctorid, $v]);
						}
					}

						return Redirect::to('/usercenter/doctorDetail');

				}

			}


	      }
   }

   /*
    * 用户提交“审核”，到此保存
    */

   public function onSavecheck()
   {   //接收数据
   	$data=post('Index');

   	$user=$this->user();
   	if($user!=null){
   		$uid=$user->id;
   		$doctor=Boheindex::where('user_id',$uid)->first();
   		if($doctor){
   			$project=Boheindex::where('user_id',$uid)->first();
   			$project->name = $data['name'];
   			$project->institution= $data['institution'];
   			$project->experience= $data['experience'];
   			$project->jobtitle= $data['jobtitle'];
   			$project->skilledin= $data['skilledin'];
   			$project->introduce= $data['introduce'];
   			$project->phone= $data['phone'];
   			$project->city= $data['city'];
   			//将审核状态置为审核中
   			$project->check_state= 1;
   			if($data['age']!=''){
   				$project->age= $data['age'];
   			}
   			if(isset($data['sex'])){
   				$project->sex= $data['sex'];
   			}
   			$project->state= 0;
   			$project->user_id= $user->id;
   			$project->username= $user->username;
   			$a=$project->save(null, post('_session_key'));
   			//更新type,delete then insert
   			$deleted = DB::delete("delete from bohe_doctor_posts_types where index_id=$doctor->id");
   			if(isset($data['types'])){
   				foreach ($data['types'] as $v){
   					DB::insert('insert into bohe_doctor_posts_types (index_id, type_id) values (?, ? )',[$doctor->id, $v]);
   				}
   			}
   			if($a){
   				return Redirect::to('/usercenter/doctorDetail');
   			}


   		}else{
   			$project=new Boheindex;
   			$project->name = $data['name'];
   			$project->institution= $data['institution'];
   			$project->experience= $data['experience'];
   			$project->jobtitle= $data['jobtitle'];
   			$project->skilledin= $data['skilledin'];
   			$project->introduce= $data['introduce'];
   			$project->phone= $data['phone'];
   			$project->city= $data['city'];
   			//将审核状态置为审核中
   			$project->check_state= 1;
   			if($data['age']!=''){
   				$project->age= $data['age'];
   			}
   			if(isset($data['sex'])){
   				$project->sex= $data['sex'];
   			}
   			$project->state= 0;
   			$project->user_id= $user->id;
   			$project->username= $user->username;
   			$a=$project->save(null, post('_session_key'));
   			//获得save的 ID
   			if($a){
   				$doctorid=$project->id;
   				//更新type,delete then insert
   				if(isset($data['types'])){
   					foreach ($data['types'] as $v){
   						DB::insert('insert into bohe_doctor_posts_types (index_id, type_id) values (?, ? )',[$doctorid, $v]);
   					}
   				}
   				
   				return Redirect::to('/usercenter/doctorDetail');
   				
   			}
   		}


   	}
   }
}
