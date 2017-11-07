<?php
class ExternalOrderShipConfirmRequest
{
	private $ShipGUID;
	
	private $ExpressName;
	
	private $ExpressNO;
	
	private $remark;
	
	private $package_weight;
    
    private $InvoiceNo;
    
    private $SkuNumbers;
       
    private $ExchCardNo;
    
    private $SkuBatchNo;
    
	private $BoxNo;
	private $ArrivalTime;
	private $DriverTel;
	private $PlateNumber;
	
	private $AfterSalesCard;	

	private $apiParas = array();
	
	public function setAfterSalesCard($AfterSalesCard)
	{
		$this->AfterSalesCard = $AfterSalesCard;
		$this->apiParas["AfterSalesCard"] = $AfterSalesCard;
	}

	public function getAfterSalesCard()
	{
		return $this->$AfterSalesCard;
	}
	
	public function setBoxNo($BoxNo)
	{
		$this->BoxNo = $BoxNo;
		$this->apiParas["BoxNo"] = $BoxNo;
	}

	public function getBoxNo()
	{
		return $this->$BoxNo;
	}

	public function setArrivalTime($ArrivalTime)
	{
		$this->ArrivalTime = $ArrivalTime;
		$this->apiParas["ArrivalTime"] = $ArrivalTime;
	}

	public function getArrivalTime()
	{
		return $this->$ArrivalTime;
	}

	public function setDriverTel($DriverTel)
	{
		$this->DriverTel = $DriverTel;
		$this->apiParas["DriverTel"] = $DriverTel;
	}

	public function getDriverTel()
	{
		return $this->$DriverTel;
	}

	public function setPlateNumber($PlateNumber)
	{
		$this->PlateNumber = $PlateNumber;
		$this->apiParas["PlateNumber"] = $PlateNumber;
	}

	public function getPlateNumber()
	{
		return $this->$PlateNumber;
	}
	
	public function setSkuBatchNo($SkuBatchNo)
	{
		$this->SkuBatchNo = $SkuBatchNo;
		$this->apiParas["SkuBatchNo"] = $SkuBatchNo;
	}

	public function getSkuBatchNo()
	{
		return $this->$SkuBatchNo;
	}
	
	public function setShipGUID($ShipGUID)
	{
		$this->ShipGUID = $ShipGUID;
		$this->apiParas["ShipGUID"] = $ShipGUID;
	}

	public function getShipGUID()
	{
		return $this->$ShipGUID;
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
	
	public function setRemark($remark)
	{
		$this->remark = $remark;
		$this->apiParas["remark"] = $remark;
	}

	public function getRemark()
	{
		return $this->$remark;
	}
	
	public function setPackageWeight($package_weight)
	{
		$this->package_weight = $package_weight;
		$this->apiParas["package_weight"] = $package_weight;
	}

	public function getPackageWeight()
	{
		return $this->$package_weight;
	}
    
    public function setInvoiceNo($InvoiceNo)
	{
		$this->InvoiceNo = $InvoiceNo;
		$this->apiParas["InvoiceNo"] = $InvoiceNo;
	}

	public function getInvoiceNo()
	{
		return $this->$InvoiceNo;
	}
	
	public function setSkuNumbers($SkuNumbers)
	{
		$this->SkuNumbers = $SkuNumbers;
		$this->apiParas["SkuNumbers"] = $SkuNumbers;
	}

	public function getExchCardNo()
	{
		return $this->$ExchCardNo;
	}
	
	public function setExchCardNo($ExchCardNo)
	{
		$this->ExchCardNo = $ExchCardNo;
		$this->apiParas["ExchCardNo"] = $ExchCardNo;
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
        return "ruixue.external.order.ship.confirm";
    }

	public function check()
	{
		
	}
}

	