<?php
class ExternalOrderShipLockRequest
{
	private $ShipGUID;
	
	private $SkuNumbers;
	
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
	
	public function setSkuNumbers($SkuNumbers)
	{
		$this->SkuNumbers = $SkuNumbers;
		$this->apiParas["SkuNumbers"] = $SkuNumbers;
	}

	public function getSkuNumbers()
	{
		return $this->$SkuNumbers;
	}

	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.order.ship.lock";
    }

	public function check()
	{
		
	}
}

	