<?php
class ExternalSkusGetRequest
{
	private $ItemGUID;
	
	private $ItemNumber;
	
	private $apiParas = array();
	
	public function setItemGUID($ItemGUID)
	{
		$this->ItemGUID = $ItemGUID;
		$this->apiParas["ItemGUID"] = $ItemGUID;
	}

	public function getItemGUID()
	{
		return $this->$ItemGUID;
	}
	
	public function setItemNumber($ItemNumber)
	{
		$this->ItemNumber = $ItemNumber;
		$this->apiParas["ItemNumber"] = $ItemNumber;
	}

	public function getItemNumber()
	{
		return $this->$ItemNumber;
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.skus.get";
    }

	public function check()
	{
		
	}
}

	