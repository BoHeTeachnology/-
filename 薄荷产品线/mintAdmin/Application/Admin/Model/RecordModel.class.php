<?php
namespace Admin\Model;
use Think\Model;
 
 //用户模型类
class RecordModel extends Model{
    //添加附件
    public function addFile($id,$file_data){
    	$model=M('File');
        //循环插入数据
        foreach ($file_data as $key => $value) {
            $data['record_id']=$id;
            $data['file_path']=$value[0];
            $data['file_name']=$value[1];
            $data['create_time']=time();
            $result=$model->add($data);
            if(!$result){
                return false;
            }
        }
    }

    //随机生成不重复的六位邀请码
    public function getCode8(){
        $code=rand(10000000,99999999);
        //查询数据库该邀请码是否存在
        $res=$this->where("record_number='$code'")->select();
        if($res){
            $this->getCode8();
        }else{
            return $code;
        }
    }
}