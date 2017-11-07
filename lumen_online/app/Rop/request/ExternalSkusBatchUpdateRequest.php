<?php
class ExternalSkusBatchUpdateRequest
{
	private $StoreCode;
	
	private $SkuNumbers;
	
	private $Batch_Nos;
	
	private $Total_nums;
	
	private $Prd_Dates;
	
	private $Exp_Dates;
    
	private $apiParas = array();
	
	public function setStoreCode($StoreCode)
	{
		$this->StoreCode = $StoreCode;
		$this->apiParas["StoreCode"] = $StoreCode;
	}

	public function getStoreCode()
	{
		return $this->$StoreCode;
	}
	
	public function setSkuNumbers($SkuNumbers)
	{
		$this->SkuNumbers = $SkuNumbers;
		$this->apiParas["SkuNumbers"] = $SkuNumbers;
	}

	public function getSkuNumbers()
	{
		return $this->$SkuNumbers;
	}
	
	public function setBatchNos($Batch_Nos)
	{
		$this->Batch_Nos = $Batch_Nos;
		$this->apiParas["Batch_Nos"] = $Batch_Nos;
	}

	public function getBatchNos()
	{
		return $this->$Batch_Nos;
	}
	
	public function setTotal_nums($Total_nums)
	{
		$this->Total_nums = $Total_nums;
		$this->apiParas["Total_nums"] = $Total_nums;
	}

	public function getTotal_nums()
	{
		return $this->$Total_nums;
	}
	
	public function setPrdDates($Prd_Dates)
	{
		$this->Prd_Dates = $Prd_Dates;
		$this->apiParas["Prd_Dates"] = $Prd_Dates;
	}

	public function getPrdDates()
	{
		return $this->$Prd_Dates;
	}
	
	public function setExpDates($Exp_Dates)
	{
		$this->Exp_Dates = $Exp_Dates;
		$this->apiParas["Exp_Dates"] = $Exp_Dates;
	}

	public function getExpDates()
	{
		return $this->$Exp_Dates;
	}
    
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.skus.batch.update";
    }

	public function check()
	{
		
	}
}

	