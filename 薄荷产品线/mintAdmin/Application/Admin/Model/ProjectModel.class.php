<?php
namespace Admin\Model;
use Think\Model;
//项目模型类
class ProjectModel extends Model{

	protected $_validate = array(
		array('project_name', 'require', '项目名称不能为空！', 1, 'regex'),
		array('price', 'require', '项目价格不能为空！', 1, 'regex'),
		array('unit', 'require', '项目单位不能为空！', 1, 'regex'),
	);

	//判断项目是否存在
    public function checkProject($project_name,$id=0){
        if($id){
        	$where['id']=array('NEQ',$id);
        }
        $where['project_name']=$project_name;
        $count=$this->where($where)->count();
        if($count>0){
            return true;
        }else{
        	return false;
        }     
    }
}