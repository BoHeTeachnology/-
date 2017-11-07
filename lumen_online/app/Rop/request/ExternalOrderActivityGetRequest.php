<?php
class ExternalOrderActivityGetRequest
{
	private $sourceplatform;
	
	private $sourcenumber;
    
	private $apiParas = array();
	
	public function setSourceplatform($sourceplatform)
	{
		$this->sourceplatform = $sourceplatform;
		$this->apiParas["sourceplatform"] = $sourceplatform;
	}

	public function getSourceplatform()
	{
		return $this->$sourceplatform;
	}
	
	public function setSourcenumber($sourcenumber)
	{
		$this->sourcenumber = $sourcenumber;
		$this->apiParas["sourcenumber"] = $sourcenumber;
	}

	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.order.activity.get";
    }

	public function check()
	{
		
	}
}

	