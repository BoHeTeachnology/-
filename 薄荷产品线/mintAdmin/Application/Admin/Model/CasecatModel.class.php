<?php
namespace Admin\Model;
use Think\Model;
//病历分类模型类
class CasecatModel extends Model{

	protected function _before_delete($option){
		//如果该分类下有子分类，则不允许删除
		$count=$this->where('parent_id='.$option['where']['id'])->count();
		if($count>0){
			$this->error='该分类下有子分类，无法删除！';
			return false;
		}
		//如果有病历使用这个分类，则不允许删除
		$model=M('Case');
		$res=$model->where('casecat_id='.$option['where']['id'])->count();
		if($res){
			$this->error='有病历正在使用这个分类，无法删除！';
			return false;
		}
	}

	//判断分类名称是否存在
    public function checkCasecat($cat_name){
        $where['cat_name']=$cat_name;
        $count=$this->where($where)->count();
        if($count>0){
        	return true;
        }else{
            return false;
        }     
    }

    //查找该分类下的所有子集分类
    public function childCatIdLst($id,$data){
    	if($data){
    		static $arr=array();
    		foreach ($data as $key => $value) {
	    		if($value['parent_id']==$id){
	    			$arr[]=$value['id'];
	    			$this->childCatIdLst($value['id'],$data);
	    		}
	    	}
    	}

    	return $arr;
    }
}