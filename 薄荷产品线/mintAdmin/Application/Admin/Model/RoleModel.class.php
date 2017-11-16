<?php
namespace Admin\Model;
use Think\Model;
//角色模型类
class RoleModel extends Model{

	protected $_validate = array(
		array('role_name', 'require', '权限名称不能为空！', 1, 'regex'),
	);

	//修改角色权限
	public function saveApp($roleid){
		$roleappmodel=M('RoleApp');
		// 先删除原来的
		$result=$roleappmodel->where('role_id='.$roleid)->delete();
		//重新添加
		$appids=I('app_id');
		if($appids){
			foreach ($appids as $k => $v)
			{
				if(!$roleappmodel->add(array(
					'app_id' => $v,
					'role_id' => $roleid,
				))){
					$this->error='修改权限失败！';
					return false;
				}
			}
		}
		//用户权限为空
		/*else{
			$this->error='请选择权限';
			return false;
		}*/
		//修改权限成功
		return true;
	}

	protected function _before_delete($option){
		// 先取出这个角色下的用户
		$usermodel = M('User');
		$c = $usermodel->where('role_id='.$option['where']['id'])->count();
		if($c > 0){
			$this->error = '有用户属于这个角色，无法删除！';
			return false;
		}
		// 如果可以删除角色，那么就先删除这个角色所拥有的权限的记录
        $roleappmodel=M('RoleApp');
        $result=$roleappmodel->where('role_id='.$option['where']['id'])->delete();
        if($result===false){
        	$this->error = '删除角色失败！';
            return false;
        }
	}

	//判断角色是否存在
    public function checkRole($role_name){
        $where['role_name']=$role_name;
        $count=$this->where($where)->count();
        if($count>0){
        	return false;
        }else{
            return true;
        }     
    }
}