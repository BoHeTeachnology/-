<?php
class ExternalO2oItemExchangeRequest
{
	private $OrderItemGuid;
	
	private $Quantity;
    
	private $apiParas = array();
	
	public function setOrderItemGuid($OrderItemGuid)
	{
		$this->OrderItemGuid = $OrderItemGuid;
		$this->apiParas["OrderItemGuid"] = $OrderItemGuid;
	}

	public function getOrderItemGuid()
	{
		return $this->$OrderItemGuid;
	}
	
	public function setQuantity($Quantity)
	{
		$this->Quantity = $Quantity;
		$this->apiParas["Quantity"] = $Quantity;
	}

	public function getQuantity()
	{
		return $this->$Quantity;
	}
    
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.o2o.item.exchange";
    }

	public function check()
	{
		
	}
}