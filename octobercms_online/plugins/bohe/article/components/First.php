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

class First extends ComponentBase
{
	public $type;
	public function componentDetails()
	{
		return [
				'name'        => 'EntryForm Component',
				'description' => 'Backend form used in the front-end'
		];
	}
	public function init()
	{  
		$component = $this->addComponent(
				'Responsiv\Uploader\Components\ImageUploader',
				'fileUploaderphoto',
				['deferredBinding' => true]
				);
		
		$component->bindModel('photo', new  Boheindex);
		
		$component = $this->addComponent(
				'Responsiv\Uploader\Components\ImageUploader',
				'fileUploaderone',
				['deferredBinding' => true]
				);
		
		$component->bindModel('certificate_one', new  Boheindex);
		
		$component = $this->addComponent(
				'Responsiv\Uploader\Components\ImageUploader',
				'fileUploadertwo',
				['deferredBinding' => true]
				);
		
		$component->bindModel('certificate_two', new  Boheindex);
		
		$component = $this->addComponent(
				'Responsiv\Uploader\Components\ImageUploader',
				'fileUploaderthree',
				['deferredBinding' => true]
				);
		
		$component->bindModel('certificate_three', new  Boheindex);

		
		//查找type
		//$type=DB('bohe_doctor_types')::select;
		$type=Db::select('select * from bohe_doctor_types ');
		$this->type=$this->page['type'] = $type;
		
	}
	
	public function onRun()
	{  
	      	$this->init();
	      	
	    
	   
	}

	public function user()
	{
		if (!Auth::check()) {
			return null;
		}
		
		return Auth::getUser();
	}

	
	public function onSave()
	{   //接收数据
		$data=post('Index');
		$user=$this->user();
		if($user!=null){

			$project = new Boheindex;
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
				$project->save(null, post('_session_key'));

				$lastid=DB::getPdo()->lastInsertId();
				if(isset($data['types'])){
					foreach ($data['types'] as $v){
						DB::insert('insert into bohe_doctor_posts_types (index_id, type_id) values (?, ? )',[$lastid, $v]);
					}
				}
				
			
		}

	}
}
