<?php
namespace Admin\Controller;
use Admin\Controller;

class BillController extends BaseController {

	//账单列表
	public function index(){
		$BillModel=D('Bill');
		//获取搜索条件
		if(I('user_name')){
        	$where['b.real_name']=array('LIKE','%'.urldecode(I('user_name')).'%');
        }
        if(I('patient_account')){
        	$where['a.patient_account']=array('LIKE','%'.urldecode(I('patient_account')).'%');
        }
		if(I('doctor_name')){
        	$where['c.name']=array('LIKE','%'.urldecode(I('doctor_name')).'%');
        }
        if(I('clinic_name')){
        	$where['d.clinic_name']=array('LIKE','%'.urldecode(I('clinic_name')).'%');
        }
        if(I('visit_time')){
            $start=strtotime(I('visit_time'));
        	$end=strtotime(I('visit_time'))+24*60*60;
            $where['a.visit_time']=array('BETWEEN',"$start,$end");
        }
        if(I('project_name')){
        	$where['a.project_name']=array('LIKE','%'.urldecode(I('project_name')).'%');
        }
        $status=I('status');
        if($status==='0'||$status==='1'){
        	$where['a.status']=array('EQ',$status);
        }
        if(I('pay_method')){
        	$where['a.pay_method']=array('EQ',I('pay_method'));
        }
        if(I('bill_discount')){
        	if(I('bill_discount')==1){
        		$where['a.bill_discount']=array('EQ',1.00);
        	}else{
        		$where['a.bill_discount']=array('NEQ',1.00);
        	}
        }
		//获取当前页和每页显示数量
        $page=I('post.p')?I('post.p'):1;
        $p_len=I('post.p_len')?I('post.p_len'):10;
        $start=($page-1)*$p_len;
        //查询数据
        $count=$BillModel->alias('a')->field('a.*')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where($where)->count();
        $data=$BillModel->alias('a')->field('a.*,b.real_name as name,c.name as doctor_name,d.clinic_name')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where($where)->limit($start.','.$p_len)->order('a.id desc')->select();
        if($data){
        	foreach ($data as $key => $value) {
        		//处理时间
        		$data[$key]['visit_time']=date('Y-m-d',$value['visit_time']);
        	}
            $code=1;
            $msg='查询成功！';
        }else{
            $code=1;
            $msg='没有数据！';
        }

        echo json_encode(array('code'=>$code,'msg'=>$msg,'count'=>(int)$count,'data'=>$data));
	}

	//添加账单
	public function add(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			// 接收表单并且使用登录的规则验证表单
			$model = D('Bill');
			$_POST['visit_time']=strtotime($_POST['visit_time']);
			$_POST['create_time']=time();
			if($model->create()){
				if($id=$model->add()){
					//添加成功
					$code=1;
					$msg='添加成功！';
				}else{
					//添加失败
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
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}

	//修改账单
	public function edit(){
		if(!IS_POST){
			$code=0;
			$msg="请使用post请求！";
		}else{
			if(!$id=I('post.id')){
				echo json_encode(array('code'=>0,'msg'=>'缺少账单id'));
				exit;
			}
			if($_POST['visit_time']){
				$_POST['visit_time']=strtotime($_POST['visit_time']);
			}
			// 接收表单并且使用登录的规则验证表单
			$model = D('Bill');
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

	//删除账单
	public function delete(){
		if(!$id=I('bill_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少账单id'));
			exit;
		}
		$model = D('Bill');
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

	//病人、医生列表
	public function userLst(){
		$identity_id=I('identity_id')?I('identity_id'):2;
		$userModel=D('User');
		$data=$userModel->field('id,name,account')->where('identity_id='.$identity_id)->select();
		if($data){
			$code=1;
			$msg='成功';
		}else{
			$code=1;
			$msg='没有数据';
		}
		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));
		
	}

	//诊所列表
	public function clinicLst(){
		$clinicModel=D('Clinic');
		$data=$clinicModel->field('id,clinic_name')->select();
		if($data){
			$code=1;
			$msg='成功';
		}else{
			$code=1;
			$msg='没有数据';
		}
		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$data));	
	}

	//获取单个账单
	public function getOne(){
		if(!$id=I('bill_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少账单id'));
			exit;
		}
		$model = D('Bill');
		$data=$model->alias('a')->field('a.*,b.name as patient_name,b.account as patient_phone,c.name as doctor_name,c.account as doctor_phone,d.clinic_name')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where("a.id=$id")->find();
		if($data){
			$data['visit_time']=date('Y-m-d',$data['visit_time']);
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

	//账单明细
	public function billDetail(){
		if(!$id=I('bill_id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少账单id'));
			exit;
		}
        //查询账单总折扣和实际支付金额
        $billModel=D('Bill');
        $res=$billModel->field('id,bill_discount,actual_money,pay_money')->find($id);
		if($res){
			$model = D('BillProject');
			$data=$model->field('*')->where("bill_id=$id")->select();
			if($data){
				foreach ($data as $key => $value) {
					$data[$key]['count_price']=$value['price']*$value['number'];
					$data[$key]['count_actual_price']=$value['actual_price']*$value['number'];
		        }
				$res['bill_detail']=$data;
				$code=1;
				$msg='成功！';
			}else{
				$code=1;
				$msg='无明细';
			}		
		}else{
			$code=0;
			$msg='失败!';
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg,'data'=>$res));
	}

	//修改账单折扣
	public function editBill(){
		$model = D('Bill');
		if(!$bill_id=I('id')){
			echo json_encode(array('code'=>0,'msg'=>'缺少账单id'));
			exit;
		}
		$obj_data=$_POST['obj_data'];
		if(is_array($obj_data)){
			//修改项目单价
			//开启事物
			$model=D('Bill');
            $model->startTrans();
			$res=$model->editBillObj($obj_data);
			if($res){
				//计算实际支付的总金额并修改账单
				$actual_money=(int)(round($res[1]*$_POST['bill_discount'],5));//不能用需要保留的精度来计算
				if(abs($_POST['pay_money']-$res[0])>0.001||$_POST['actual_money']!=$actual_money){
					//失败回滚事物
					$model->rollback();
					echo json_encode(array('code'=>0,'msg'=>'计算总价错误'));
					die;
				}else{
					//修改账单
					if($model->create()){
						if($model->save()!==false){
							//提交事物
							$model->commit();
							$code=1;
							$msg='修改成功！';
						}else{
							//失败回滚事物
							$model->rollback();
							$code=0;
							$msg='修改失败!';
						}
					}else{
						//失败回滚事物
						$model->rollback();
						//表单验证失败
						$code=0;
						$msg=$model->getError();
					}
				}
			}else{
				//失败回滚事物
				$model->rollback();
				echo json_encode(array('code'=>0,'msg'=>'计算价格错误'));
				die;
			}	
		}else{
			echo json_encode(array('code'=>0,'msg'=>'项目信息缺失'));
			die;
		}

		//返回json数据
		echo json_encode(array('code'=>$code,'msg'=>$msg));
	}
    
    /**
     * 导出excel
     * baikeliang
     * 2017-3-21
     */
    public function exportExcel(){
    	//include_once APP_PATH.'Tool/PHPExcel.php';
    	//import('Tool.PHPExcel',APP_PATH,'.php');
    	import('Tool.PHPExcel');
    	
    	$BillModel=D('Bill');
		//获取搜索条件
    	if(I('user_name')){
        	$where['b.real_name']=array('LIKE','%'.urldecode(I('user_name')).'%');
        }
        if(I('patient_account')){
        	$where['a.patient_account']=array('LIKE','%'.urldecode(I('patient_account')).'%');
        }
		if(I('doctor_name')){
        	$where['c.doctor_name']=array('LIKE','%'.urldecode(I('doctor_name')).'%');
        }
        if(I('clinic_name')){
        	$where['d.name']=array('LIKE','%'.urldecode(I('clinic_name')).'%');
        }
        if(I('visit_time')){
            $start=strtotime(I('visit_time'));
        	$end=strtotime(I('visit_time'))+24*60*60;
            $where['a.visit_time']=array('BETWEEN',"$start,$end");
        }
        if(I('project_name')){
        	$where['a.project_name']=array('LIKE','%'.urldecode(I('project_name')).'%');
        }
        $status=I('status');
        if($status==='0'||$status==='1'){
        	$where['a.status']=array('EQ',$status);
        }
        if(I('pay_method')){
        	$where['a.pay_method']=array('EQ',I('pay_method'));
        }
        if(I('bill_discount')){
        	if(I('bill_discount')==1){
        		$where['a.bill_discount']=array('EQ',1.00);
        	}else{
        		$where['a.bill_discount']=array('NEQ',1.00);
        	}
        }
        //查询数据
    	$data=$BillModel->alias('a')->field('a.id,a.bill_number,a.patient_account,a.patient_name,a.contact_tel,a.visit_time,a.doctor_name,a.project_name,d.clinic_name,a.pay_money,a.actual_money,a.status,a.pay_method,a.bill_discount')->join('left join mint_user as b on a.patient_id=b.id')->join('left join mint_user as c on a.doctor_id=c.id')->join('left join mint_clinic as d on a.clinic_id=d.id')->where($where)->order('a.id desc')->select();
        if($data){
        	$BillProjectModel=D('BillProject');
        	$bill_data=$BillProjectModel->field('bill_id,project_id,project_name,price,number,unit,project_discount,actual_price')->select();
        	foreach ($data as $key=>$value){
        		$str = '';
        		foreach ($bill_data as $k=>$v){
        			if($value['id']==$v['bill_id']){
        				$str .= $v['project_name'].($v['project_discount']*10).'折  ';
        			}
        		}
        		$data[$key]['bill_detail'] = $str;
        		$data[$key]['bill_discount'] = ($value['bill_discount']*10).'折  ';
        	}
	    	// Create new PHPExcel object
	    	$objPHPExcel = new \PHPExcel();
	    	// Set document properties
	    	$objPHPExcel->getProperties()->setCreator("BAI")
	    	->setLastModifiedBy("BAI")
	    	->setTitle("Office 2007 XLSX Test Document")
	    	->setSubject("Office 2007 XLSX Test Document")
	    	->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
	    	->setKeywords("office 2007 openxml php")
	    	->setCategory("Test result file");
	    	//$objPHPExcel->getActiveSheet()->getStyle('A1')->getBorders()->setDiagonalDirection(\PHPExcel_Style_Borders::DIAGONAL_DOWN );
	    	//$objPHPExcel->getActiveSheet()->getStyle('A1')->getBorders()->getDiagonal()-> setBorderStyle(\PHPExcel_Style_Border::BORDER_THIN);
	    	//$objPHPExcel->setActiveSheetIndex(0)->setSuperScript()->setCellValue('A1', '时间');
	    	//$objPHPExcel->setActiveSheetIndex(0)->setSubScript()->setCellValue('A1', '指标');
	    	// Add some data
	    	$array = array('ID','账单号','客户账号','客户姓名','联系方式','就诊时间','就诊医生','就诊项目','诊所','原价','实际金额','支付状态','支付方式','折扣','折扣详情');
	    	$currentColumn='A';
	    	foreach ($array as $k=>$v){
	    		$objPHPExcel->setActiveSheetIndex(0)->setCellValue($currentColumn.'1', $v);
	    		$currentColumn++;
	    	}
	    	$currentRow=2;
	    	foreach ($data as $k=>$v){
	    		$currentColumn='A';
	    		foreach ($v as $key=>$value){
		    		if($key=='visit_time'){
		    			$objPHPExcel->setActiveSheetIndex(0)->setCellValue($currentColumn.$currentRow, date('Y-m-d',$value));
		    		}elseif($key=='status'){
		    			if($value==1){
		    				$objPHPExcel->setActiveSheetIndex(0)->setCellValue($currentColumn.$currentRow, '已支付');
		    			}else{
		    				$objPHPExcel->setActiveSheetIndex(0)->setCellValue($currentColumn.$currentRow, '未支付');
		    			}
		    		}elseif($key=='pay_money'||$key=='actual_money'){
		    			$objPHPExcel->getActiveSheet()->getStyle($currentColumn.$currentRow)->getNumberFormat()->setFormatCode(\PHPExcel_Style_NumberFormat::FORMAT_NUMBER_00);
	    				$objPHPExcel->setActiveSheetIndex(0)->setCellValue($currentColumn.$currentRow, $value);
		    		}else{
	    				$objPHPExcel->setActiveSheetIndex(0)->setCellValue($currentColumn.$currentRow, $value);
		    		}
		    		$currentColumn++;
	    		}
	    		$currentRow++;
	    	}
	    	// Rename worksheet
	    	$objPHPExcel->getActiveSheet()->setTitle('账单');
	    	// Set active sheet index to the first sheet, so Excel opens this as the first sheet
	    	$objPHPExcel->setActiveSheetIndex(0);
	    	// Redirect output to a client’s web browser (Excel5)
	    	header('Content-Type: application/vnd.ms-excel');
	    	header('Content-Disposition: attachment;filename="账单.xls"');
	    	header('Cache-Control: max-age=0');
	    	// If you're serving to IE 9, then the following may be needed
	    	header('Cache-Control: max-age=1');
	    	
	    	// If you're serving to IE over SSL, then the following may be needed
	    	header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
	    	header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
	    	header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
	    	header ('Pragma: public'); // HTTP/1.0
	    	
	    	$objWriter = \PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
	    	$objWriter->save('php://output');
	    	exit;
	    	//dump($objPHPExcel);
        }else{
            $code=1;
            $msg='没有数据！';
            
        }
    }
}