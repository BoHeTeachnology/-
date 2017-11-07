<?php
class ExternalItemsWarehouseEntryConfirmRequest
{
	private $WHEntryGUID;
	
	private $skuGUIDs;
	
	private $skuNumbers;
	
	private $InQuantitys;
	
	private $DamagedQuantitys;
	
	private $SkuBatchNo;
    
	private $apiParas = array();
	
	public function setSkuBatchNo($SkuBatchNo)
	{
		$this->SkuBatchNo = $SkuBatchNo;
		$this->apiParas["SkuBatchNo"] = $SkuBatchNo;
	}

	public function getSkuBatchNo()
	{
		return $this->$SkuBatchNo;
	}
	
	public function setWHEntryGUID($WHEntryGUID)
	{
		$this->WHEntryGUID = $WHEntryGUID;
		$this->apiParas["WHEntryGUID"] = $WHEntryGUID;
	}

	public function getWHEntryGUID()
	{
		return $this->$WHEntryGUID;
	}
	
	public function setSkuGUIDs($skuGUIDs)
	{
		$this->skuGUIDs = $skuGUIDs;
		$this->apiParas["skuGUIDs"] = $skuGUIDs;
	}

	public function getSkuGUIDs()
	{
		return $this->$skuGUIDs;
	}
	
	public function setSkuNumbers($skuNumbers)
	{
		$this->skuNumbers = $skuNumbers;
		$this->apiParas["skuNumbers"] = $skuNumbers;
	}

	public function getSkuNumbers()
	{
		return $this->$skuNumbers;
	}
	
	public function setInQuantitys($InQuantitys)
	{
		$this->InQuantitys = $InQuantitys;
		$this->apiParas["InQuantitys"] = $InQuantitys;
	}

	public function getInQuantitys()
	{
		return $this->$InQuantitys;
	}
	
	public function setDamagedQuantitys($DamagedQuantitys)
	{
		$this->DamagedQuantitys = $DamagedQuantitys;
		$this->apiParas["DamagedQuantitys"] = $DamagedQuantitys;
	}

	public function getDamagedQuantitys()
	{
		return $this->$DamagedQuantitys;
	}
		
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.items.warehouseentry.confirm";
    }

	public function check()
	{
		
	}
}

	