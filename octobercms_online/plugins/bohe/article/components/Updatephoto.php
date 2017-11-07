<?php namespace Bohe\Article\Components;

use Cms\Classes\ComponentBase;
use Bohe\Article\Controllers\Entries as EntryController;
use Bohe\Article\Models\Index as Boheindex;
use Log;
use Auth;
use Db;
use Session;
use Flash;
use Request;
use Redirect;

class Updatephoto extends ComponentBase
{
	public $doctor;
	public $type;
	public $nowtype;
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
				$component = $this->addComponent(
						'Responsiv\Uploader\Components\ImageUploaderhead',
						'fileUploaderphoto',
						['deferredBinding' => true]
						);
				
				$component->bindModel('photo', Boheindex::find($docid));
			}else{
				$component = $this->addComponent(
						'Responsiv\Uploader\Components\ImageUploaderhead',
						'fileUploaderphoto',
						['deferredBinding' => true]
						);
				
				$component->bindModel('photo', new Boheindex);
			}
			
			
		}else{
			
			return Redirect::to('/');
		}
		
		
	
		

		//查找当前的数据
		
		$user=$this->user();
		if($user!=null){
			$uid=$user->id;
			$doctor=Boheindex::where('user_id',$uid)->first();
			if($doctor){
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
			}
		}
		
	
		
		
	}
	
	public function onRun()
	{  
	      	$this->init();
	      	
	    
	   
	}
	public function onRefreshFiles()
	{
		$this->pageCycle();
	}
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
	public function onSave()
	{   //接收数据
		$data=post('index');echo "5555";die;
		//判断医生信息表里是否有该用户，有则更新，无则插入
		$user=$this->user();
		if($user!=null){
			$uid=$user->id;
			$doctor=Boheindex::where('user_id',$uid)->first();
// 			if($doctor){
// 				$a=Index::where('id', $doctor->id)
// 				->update(array('name' => $data['name'],'institution'=>$data['institution'],'experience'=>$data['experience'],'jobtitle'=>$data['jobtitle'],'skilledin'=>$data['skilledin'],
// 						'introduce'=>$data['introduce'],'url'=>$data['url'],'phone'=>$data['phone'],'wechat'=>$data['wechat']));
// 				//更新type,delete then insert
// 				$deleted = DB::delete("delete from bohe_doctor_posts_types where index_id=$doctor->id");
// 				if(isset($data['types'])){
// 					foreach ($data['types'] as $v){
// 						DB::insert('insert into bohe_doctor_posts_types (index_id, type_id) values (?, ? )',[$doctor->id, $v]);
// 					}
// 				}
				
// 			$doctor->save(null, post('_session_key'));
// 			}else{
				
// 				$b=Index::insert(
// 						array('name' => $data['name'],'institution'=>$data['institution'],'experience'=>$data['experience'],'jobtitle'=>$data['jobtitle'],'skilledin'=>$data['skilledin'],
// 								'introduce'=>$data['introduce'],'url'=>$data['url'],'phone'=>$data['phone'],'wechat'=>$data['wechat'],'state'=>0,'user_id'=>$uid)
// 						);
// 				$lastid=DB::getPdo()->lastInsertId();
// 				if(isset($data['types'])){
// 					foreach ($data['types'] as $v){
// 						DB::insert('insert into bohe_doctor_posts_types (index_id, type_id) values (?, ? )',[$lastid, $v]);
// 					}
// 				}
				//$project = new Index;
			$doctor->name = 'Hello1234';
				//Log::info('key'.$data);
				//return view('greeting', $data);
			$doctor->save(null, post('_session_key'));
			//}
			
			
		}
		
		
		
		//Log::info('index'.$a[0]);
		//return ['error' => Index::create(post('Entry'))];
		
	}
}
