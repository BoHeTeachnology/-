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

class Userindex extends ComponentBase
{
	
	public $theuser;
	public function componentDetails()
	{
		return [
				'name'        => 'EntryForm Component',
				'description' => 'Backend form used in the front-end'
		];
	}
	public function init()
	{  

		
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
	public function user()
	{
		if (!Auth::check()) {
			return null;
		}
		
		return Auth::getUser();
	}

	
}
