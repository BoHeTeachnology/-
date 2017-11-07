<?php
//修改微信帐号
class ExternalInvoicePrintRequest
{
	private $ShipGUID;
    
    private $MacCode;
    
    private $BatchNo;
    
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

    public function setMacCode($MacCode)
    {
        $this->MacCode = $MacCode;
        $this->apiParas["MacCode"] = $MacCode;
    }

    public function geMacCode()
    {
        return $this->$MacCode;
    }
    
     public function setBatchNo($BatchNo)
    {
        $this->BatchNo = $BatchNo;
        $this->apiParas["BatchNo"] = $BatchNo;
    }

    public function getBatchNo()
    {
        return $this->$BatchNo;
    }
        
    public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.invoice.print";
    }

    public function check()
    {
        
    }
}