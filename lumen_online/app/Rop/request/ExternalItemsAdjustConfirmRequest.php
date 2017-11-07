<?php
class ExternalItemsAdjustConfirmRequest
{
	private $AdjustGUID;
	
	private $apiParas = array();
	
	public function setAdjustGUID($AdjustGUID)
	{
		$this->AdjustGUID = $AdjustGUID;
		$this->apiParas["AdjustGUID"] = $AdjustGUID;
	}

	public function getAdjustGUID()
	{
		return $this->$AdjustGUID;
	}

	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.items.adjust.confirm";
    }

	public function check()
	{
		
	}
}

	