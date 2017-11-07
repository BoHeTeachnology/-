<?php
class ExternalSkusBatchResetRequest
{
	private $StoreCode;
    
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
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.skus.batch.reset";
    }

	public function check()
	{
		
	}
}

	