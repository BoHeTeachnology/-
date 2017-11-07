<?php
class ExternalSkusQuantityUpdateRequest
{
	private $SkuNumbers;
	
	private $nums;
	
	private $Total_nums;
	
	private $Junk_nums;
	
	private $StoreCode;
    
	private $apiParas = array();
	
	public function setSkuNumbers($SkuNumbers)
	{
		$this->SkuNumbers = $SkuNumbers;
		$this->apiParas["SkuNumbers"] = $SkuNumbers;
	}

	public function getSkuNumbers()
	{
		return $this->$SkuNumbers;
	}
	
	public function setNums($nums)
	{
		$this->nums = $nums;
		$this->apiParas["nums"] = $nums;
	}

	public function getNums()
	{
		return $this->$nums;
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
	
	public function setJunk_nums($Junk_nums)
	{
		$this->Junk_nums = $Junk_nums;
		$this->apiParas["Junk_nums"] = $Junk_nums;
	}

	public function getJunk_nums()
	{
		return $this->$Junk_nums;
	}
	
	public function setStoreCode($StoreCode)
	{
		$this->StoreCode = $StoreCode;
		$this->apiParas["StoreCode"] = $StoreCode;
	}

	public function getStoreCode()
	{
		return $this->$StoreCode;
	}
    
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.skus.quantity.update";
    }

	public function check()
	{
		
	}
}

	