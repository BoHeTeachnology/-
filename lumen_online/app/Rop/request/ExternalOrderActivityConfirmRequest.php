<?php
class ExternalOrderActivityConfirmRequest
{
	private $ShipGUID;
		
	private $ActivityDate;
    
    private $ActivityState;
    
	private $apiParas = array();
	
	public function setShipGUID($ShipGUID)
	{
		$this->ShipGUID = $ShipGUID;
		$this->apiParas["ShipGUID"] = $ShipGUID;
	}

	public function getShipGUID()
	{
		return $this->$ShipGUID;
	}
    
    public function setActivityDate($ActivityDate)
	{
		$this->ActivityDate = $ActivityDate;
		$this->apiParas["ActivityDate"] = $ActivityDate;
	}

	public function getActivityDate()
	{
		return $this->$ActivityDate;
	}
    
    public function setActivityState($ActivityState)
	{
		$this->ActivityState = $ActivityState;
		$this->apiParas["ActivityState"] = $ActivityState;
	}

	public function getActivityState()
	{
		return $this->$ActivityState;
	}
    
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.order.activity.confirm";
    }

	public function check()
	{
		
	}
}

	