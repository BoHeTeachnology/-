<?php
namespace Admin\Model;
use Think\Model;
//权限模型类
class AppModel extends Model{

	protected $_validate = array(
		array('app_name', 'require', '权限名称不能为空！', 1, 'regex'),
		array('app_uri', 'require', 'app_uri不能为空！', 1, 'regex'),
	);

	protected function _before_delete($option){
		//如果有角色使用这个权限，则不允许删除
		$roleappmodel=M('RoleApp');
		$res=$roleappmodel->where('app_id='.$option['where']['id'])->select();
		if($res){
			$this->error='有角色正在使用这个权限，无法删除！';
			return false;
		}
	}

	//判断权限是否存在
    public function checkApp($app_name){
        $where['app_name']=$app_name;
        $count=$this->where($where)->count();
        if($count>0){
        	return false;
        }else{
            return true;
        }     
    }
}