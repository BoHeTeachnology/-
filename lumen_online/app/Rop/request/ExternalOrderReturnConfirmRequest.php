<?php
class ExternalOrderReturnConfirmRequest
{
	private $returnGUID;
	
	private $skuGUIDs;
	
	private $skuNumbers;
	
	private $ok_counts;
	
	private $damaged_counts;
	
	private $remark;
	
	private $SkuBatchNo;
		
	private $apiParas = array();
	
	public function setSkuBatchNo($SkuBatchNo)
	{
		$this->SkuBatchNo = $SkuBatchNo;
		$this->apiParas["SkuBatchNo"] = $SkuBatchNo;
	}

	public function getSkuBatchNo()
	{
		return $this->$SkuBatchNo;
	}
	
	public function setReturnGUID($returnGUID)
	{
		$this->returnGUID = $returnGUID;
		$this->apiParas["returnGUID"] = $returnGUID;
	}

	public function getReturnGUID()
	{
		return $this->$returnGUID;
	}
	
	public function setSkuGUIDs($skuGUIDs)
	{
		$this->skuGUIDs = $skuGUIDs;
		$this->apiParas["skuGUIDs"] = $skuGUIDs;
	}

	public function getSkuGUIDs()
	{
		return $this->$skuGUIDs;
	}
	
	public function setSkuNumbers($skuNumbers)
	{
		$this->skuNumbers = $skuNumbers;
		$this->apiParas["skuNumbers"] = $skuNumbers;
	}

	public function getSkuNumbers()
	{
		return $this->$skuNumbers;
	}
	
	public function setOk_counts($ok_counts)
	{
		$this->ok_counts = $ok_counts;
		$this->apiParas["ok_counts"] = $ok_counts;
	}

	public function getOk_counts()
	{
		return $this->$ok_counts;
	}
	
	public function setDamaged_counts($damaged_counts)
	{
		$this->damaged_counts = $damaged_counts;
		$this->apiParas["damaged_counts"] = $damaged_counts;
	}

	public function getDamaged_counts()
	{
		return $this->$damaged_counts;
	}
	
	public function setRemark($remark)
	{
		$this->remark = $remark;
		$this->apiParas["remark"] = $remark;
	}

	public function getRemark()
	{
		return $this->$remark;
	}
    
	public function getApiParas()
	{
		return $this->apiParas;
	}
    
    public function getApiMethodName()
    {
        return "ruixue.external.order.return.confirm";
    }

	public function check()
	{
		
	}
}

	