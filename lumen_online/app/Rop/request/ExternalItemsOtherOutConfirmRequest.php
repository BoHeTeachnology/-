<?php
class ExternalItemsOtherOutConfirmRequest
{
	private $OtherOutGUID;
	
	private $skuGUIDs;
	
	private $skuNumbers;
	
	private $OutQuantitys;
	
    private $ExpressName;

    private $ExpressNO;
    
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
	
	public function setExpressName($ExpressName)
	{
		$this->ExpressName = $ExpressName;
		$this->apiParas["ExpressName"] = $ExpressName;
	}

	public function getExpressName()
	{
		return $this->$ExpressName;
	}
	
	public function setExpressNO($ExpressNO)
	{
		$this->ExpressNO = $ExpressNO;
		$this->apiParas["ExpressNO"] = $ExpressNO;
	}

	public function getExpressNO()
	{
		return $this->$ExpressNO;
	}
	
	public function setOtherOutGUID($OtherOutGUID)
	{
		$this->OtherOutGUID = $OtherOutGUID;
		$this->apiParas["OtherOutGUID"] = $OtherOutGUID;
	}

	public function getOtherOutGUID()
	{
		return $this->$OtherOutGUID;
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
	
	public function setOutQuantitys($OutQuantitys)
	{
		$this->OutQuantitys = $OutQuantitys;
		$this->apiParas["OutQuantitys"] = $OutQuantitys;
	}

	public function getOutQuantitys()
	{
		return $this->$OutQuantitys;
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.items.otherout.confirm";
    }

	public function check()
	{
		
	}
}

	