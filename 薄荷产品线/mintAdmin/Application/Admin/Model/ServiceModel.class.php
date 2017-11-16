<?php
namespace Admin\Model;
use Think\Model;
//服务模型类
class ServiceModel extends Model{

	protected function _before_delete($option){
		//如果有预约使用这个服务，则不允许删除
		$appmodel=M('Appointment');
		$res=$appmodel->where('service_id='.$option['where']['id'])->find();
		if($res){
			$this->error='有预约正在使用这个服务，无法删除！';
			return false;
		}
	}
}