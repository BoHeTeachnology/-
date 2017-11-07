<?php namespace Bohe\Article\Components;

use Cms\Classes\ComponentBase;
use RainLab\User\Models\User as User;
use Log;
use Auth;
use Db;
use Session;
use Flash;
use Request;
use Redirect;

class Updateuser extends ComponentBase
{
	public  $theuser;
	public function componentDetails()
	{
		return [
				'name'        => 'EntryForm Component',
				'description' => 'Backend form used in the front-end'
		];
	}
	public function init()
	{
		$user=$this->user();
		if($user!=null){
			$uid=$user->id;
			$theuser=User::where('id',$uid)->first();
			if($theuser){
				//$docid=$doctor->id;
				$this->theuser=$this->page['theuser'] = $theuser;
			}
			$component = $this->addComponent(
					'Responsiv\Uploader\Components\ImageUploader',
					'fileUploaderavatar',
					['deferredBinding' => true]
					);
			
			$component->bindModel('avatar', User::find($user->id));
		}
		



		//查找当前的数据

		$user=$this->user();
		if($user!=null){
			$uid=$user->id;
			$theuser=User::where('id',$uid)->first();
			if($theuser){
				//$docid=$doctor->id;
				$this->theuser=$this->page['theuser'] = $theuser;
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

	public function onSave()
	{   //接收数据
		$data=post('User');
		$user=$this->user();
		if($user!=null){
			$uid=$user->id;
			$project=User::where('id',$uid)->first();
			if($project){

				$project->name = $data['name'];

				$project->phone= $data['phone'];
				$project->city= $data['city'];
				if($data['age']!=''){
					$project->age= $data['age'];
				}
				if(isset($data['iu_gender'])){
					$project->iu_gender= $data['iu_gender'];
				}

				$a=$project->save(null, post('_session_key'));

				if($a){
					Flash::success('Settings successfully saved!12333');
					return Redirect::to('/usercenter/userDetail');
				}


			}


	      }
   }
   function onRedirectMe()
   {
   	return Redirect::to('http://baidu.com');
   }
}
