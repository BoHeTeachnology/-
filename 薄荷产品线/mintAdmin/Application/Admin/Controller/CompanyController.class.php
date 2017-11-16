<?php
namespace Admin\Controller;
use Admin\Controller;

class CompanyController extends BaseController {

	//企业列表
	public function index(){
		$companyModel=D('Company');
		//获取搜索条件
		if(I('company_name')){
        	$where['company_name']=array('LIKE','%'.urldecode(I('company_name')).'%');
        }
        if(I('company_code')){
        	$where['company_code']=array('LIKE','%'.urldecode(I('company_code')).'%');
        }
		//获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$companyModel->where($where)->count();
        $data=$companyModel->where($where)->limit($start.','.$p_len)->order('id desc')->select();
        if($data){
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
	}

	//添加企业
	public function add(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			// 接收表单并且使用登录的规则验证表单
			$model = D('Company');
			//生成六位不重复的随机码
			$_POST['company_code']=$model->getCode6();
			$_POST['create_time']=time();
			if($model->create()){
				if($model->add()){
					//添加成功
					$code=1;
					$msg='添加成功！';
				}else{
					//登录验证失败
					$code=0;
					$msg='添加失败!';
				}
			}else{
				//表单验证失败
				$code=0;
				$msg=$model->getError();
			}
		}
		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'company_code'=>$_POST['company_code']));
	}

	//修改企业
	public function edit(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			if(!I('post.id')){
				echo json_encode(array('code'=>0,'msg'=>'缺少企业id'));
				exit;
			}
			// 接收表单并且使用登录的规则验证表单
			$model = D('Company');
			if($model->create()){
				if($model->save()!==false){
					$code=1;
					$msg='修改成功！';
				}else{
					//登录验证失败
					$code=0;
					$msg='修改失败!';
				}
			}else{
				//表单验证失败
				$code=0;
				$msg=$model->getError();
			}
		}
		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	//删除企业
	public function delete(){
		if(!$id=I('company_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少企业id'));
			exit;
		}
		$model = D('Company');
		if($model->delete($id)!==false){
			$code=1;
			$msg='删除成功！';
		}else{
			//登录验证失败
			$code=0;
			$msg='删除失败!';
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	//获取单个企业
	public function getOne(){
		if(!$id=I('company_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少诊所id'));
			exit;
		}
		$model = D('Company');
		$data=$model->find($id);
		if($data){
			$code=1;
			$msg='成功！';
		}else{
			//登录验证失败
			$code=0;
			$msg='失败!';
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
	}
}