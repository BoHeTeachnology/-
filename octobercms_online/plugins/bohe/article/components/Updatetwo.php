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

class Updatetwo extends ComponentBase
{

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
						'Responsiv\Uploader\Components\ImageUploadertwo',
						'fileUploadertwo',
						['deferredBinding' => true]
						);
				
				$component->bindModel('certificate_two', Boheindex::find($docid));
			}else{
				$component = $this->addComponent(
						'Responsiv\Uploader\Components\ImageUploadertwo',
						'fileUploadertwo',
						['deferredBinding' => true]
						);
				
				$component->bindModel('certificate_two', new Boheindex);
			}
			
			
		}else{
			return Redirect::to('/');
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
	{   
		$user=$this->user();
		if($user!=null){
			$uid=$user->id;
			$doctor=Boheindex::where('user_id',$uid)->first();
			$doctor->save(null, post('_session_key'));
		}
	}
}
