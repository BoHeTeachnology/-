<?php namespace Bohe\Article\Components;

use Cms\Classes\ComponentBase;
use Bohe\Article\Controllers\Entries as EntryController;
use Bohe\Article\Models\Index as Boheindex;
use Log;
use Auth;
use Db;
use Request;
use Redirect;

class Index extends ComponentBase
{

	public $doctor;
	public $type;
	public $nowtype;
	public $codeurl;
	public function componentDetails()
	{
		return [
				'name'        => 'EntryForm Component',
				'description' => 'Backend form used in the front-end'
		];
	}


	public function onRun()
	{


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
				$this->type=$this->page['type'] = $type;
				//var_dump($type);die;
				//Log::info('type'.$type);
				$nowtype=Db::select("select * from bohe_doctor_posts_types where index_id= $doctor->id");
				$this->nowtype=$this->page['nowtype'] = $nowtype;
				$path=$_SERVER['HTTP_HOST'];
				$thecodeurl="http://qr.liantu.com/api.php?w=200&m=10&text=http://".$path."/doctordetail/post/".$doctor->id;
				$this->codeurl=$this->page['codeurl'] = $thecodeurl;
			}
		}



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
			$doctor=Index::where('user_id',$uid)->first();
			if($doctor){
				$docid=$doctor->id;
			}else{
				$docid=Index::insertGetId();
			}
			return $docid;

		}
	}

}
