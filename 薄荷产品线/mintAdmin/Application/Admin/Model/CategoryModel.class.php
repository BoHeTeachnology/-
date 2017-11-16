<?php
namespace Admin\Model;
use Think\Model;
//项目分类模型类
class CategoryModel extends Model{

	protected $_validate = array(
		array('cat_name', 'require', '项目分类名称不能为空！', 1, 'regex'),
	);

	protected function _before_delete($option){
		//如果有项目使用这个分类，则不允许删除
		$model=M('Project');
		$res=$model->where('cat_id='.$option['where']['id'].' or cat_id1='.$option['where']['id'])->select();
		if($res){
			$this->error='有项目使用这个分类，无法删除！';
			return false;
		}
	}

	//判断分类是否存在
    public function checkCat($cat_name,$belong,$id){
        if($id){
        	$where['id']=array('NEQ',$id);
        }
        $where['cat_name']=$cat_name;
        $where['belong']=$belong;
        $count=$this->where($where)->count();
        if($count>0){
            return true;
        }else{
        	return false;
        }     
    }
}