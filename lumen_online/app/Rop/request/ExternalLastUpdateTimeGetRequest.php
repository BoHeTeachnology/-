<?php
class ExternalLastUpdateTimeGetRequest
{
	private $apiName;

	private $apiParas = array();
	
	public function setApiName($apiName)
	{
		$this->apiName = $apiName;
		$this->apiParas["apiName"] = $apiName;
	}

	public function getApiName()
	{
		return $this->$apiName;
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.lastupdatetime.get";
    }

	public function check()
	{
		
	}
}

	