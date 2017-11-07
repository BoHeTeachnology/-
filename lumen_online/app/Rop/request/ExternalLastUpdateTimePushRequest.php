<?php
class ExternalLastUpdateTimePushRequest
{
	private $apiName;
	
	private $LastUpdateTime;

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
	
	public function setLastUpdateTime($LastUpdateTime)
	{
		$this->LastUpdateTime = $LastUpdateTime;
		$this->apiParas["LastUpdateTime"] = $LastUpdateTime;
	}

	public function getLastUpdateTime()
	{
		return $this->$LastUpdateTime;
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.lastupdatetime.push";
    }

	public function check()
	{
		
	}
}

	