<?php
class ExternalOrderShipSingleGetRequest
{
	private $ShipGuid;
		
	private $apiParas = array();
	
	public function setShipGuid($ShipGuid)
	{
		$this->ShipGuid = $ShipGuid;
		$this->apiParas["ShipGuid"] = $ShipGuid;
	}

	public function getShipGuid()
	{
		return $this->$ShipGuid;
	}
	


	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.order.ship.single.get";
    }

	public function check()
	{
		
	}
}

	