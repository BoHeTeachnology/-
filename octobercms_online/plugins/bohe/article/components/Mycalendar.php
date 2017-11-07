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

class Mycalendar extends ComponentBase
{
	
	public $theuser;
	public $usertype;
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
				
				$register= DB::select('select * from users_groups where user_id = :user_id and user_group_id = :user_group_id', [':user_id'=>$user->id,':user_group_id'=>2]);
				$doctor= DB::select('select * from users_groups where user_id = :user_id and user_group_id = :user_group_id', [':user_id'=>$user->id,':user_group_id'=>3]);
				if($register){
					$this->usertype=$this->page['usertype'] = 'normaluser';
				}
				if($doctor){
					
					$this->usertype=$this->page['usertype'] = 'doctor';

				}
			}
			
		}
		
	
	}
		public function onRefreshFiles()
		{
			$this->pageCycle();
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
