<?php namespace Bohe\Article\Components;

use Cms\Classes\ComponentBase;
use RainLab\User\Models\User as User;
use Bohe\Article\Models\Index as Boheindex;
use Log;
use Auth;
use Db;
use Session;
use Flash;
use Request;
use Redirect;

class Usercenter extends ComponentBase
{
	
	public $theuser;
	public $register;
	public $doctor;
	public $registerhaveone;
	public $dochaveone;
	public function componentDetails()
	{
		return [
				'name'        => 'EntryForm Component',
				'description' => 'Backend form used in the front-end'
		];
	}
	
	
	public function onRun()
	{
		//return Redirect::to('/userindex');
		
		//查找当前的数据
		
		$user=$this->user();
		if($user!=null){
			$uid=$user->id;
			$theuser=User::where('id',$uid)->first();
			if($theuser){
				//$docid=$doctor->id;
				$this->theuser=$this->page['theuser'] = $theuser;
				$groupdoctor=DB::select('select * from user_groups where name = :name ', [':name'=>'doctor']);
				$groupregistered=DB::select('select * from user_groups where name = :name ', [':name'=>'Registered']);
				if($groupregistered){
					$register= DB::select('select * from users_groups where user_id = :user_id and user_group_id = :user_group_id', [':user_id'=>$user->id,':user_group_id'=>$groupregistered[0]->id]);
				}
				if($groupdoctor){
					$doctor= DB::select('select * from users_groups where user_id = :user_id and user_group_id = :user_group_id', [':user_id'=>$user->id,':user_group_id'=>$groupdoctor[0]->id]);
				}
				
				
				if($register){
					//$this->register=$this->page['register'] = 'registeryes';
					$havedata=DB::select("select * from users where id = :id and ((age !='') or (mobile !='')  or (city !='') )", [':id'=>$user->id]);
					if($havedata){
						return Redirect::to('/usercenter/userDetail');
						
					}else{  
						return Redirect::to('/usercenter/userAuth');
					}
				}
				
				
				
				if($doctor){
					//$this->doctor=$this->page['doctor'] = 'doctoryes';
					$docdata=Boheindex::where('user_id',$user->id)->first();
					if($docdata){
						return Redirect::to('/usercenter/doctorDetail');
					}else{
						return Redirect::to('/usercenter/doctorAuth');
						
					}
				}
			}
			
		}else{
			return Redirect::to('/');
		}
		
		
	}
	public function user()
	{
		if (!Auth::check()) {
			return null;
		}
		
		return Auth::getUser();
	}

	
}
