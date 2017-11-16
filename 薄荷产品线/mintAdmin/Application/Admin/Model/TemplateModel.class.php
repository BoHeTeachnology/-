<?php
namespace Admin\Model;
use Think\Model;
//病历模板模型类
class TemplateModel extends Model{

	protected function _before_delete($option){
		//如果有病历使用这个分类，则不允许删除
		$model=M('Case');
        $where['content']=array('LIKE','%'.$option['where']['template_id'].'%');
		$res=$model->where($where)->count();
		if($res){
			$this->error='有病历正在使用这个模板，无法删除！';
			return false;
		}
	}
}