<?php
class ExternalSkusQuantityIncrementalUpdateRequest
{
	private $SkuNumbers;
	
	private $IncrementalNumbers;
	
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
	
	public function setIncrementalNumbers($IncrementalNumbers)
	{
		$this->IncrementalNumbers = $IncrementalNumbers;
		$this->apiParas["IncrementalNumbers"] = $IncrementalNumbers;
	}

	public function getIncrementalNumbers()
	{
		return $this->$IncrementalNumbers;
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
        return "ruixue.external.skus.quantity.Incremental.update";
    }

	public function check()
	{
		
	}
}