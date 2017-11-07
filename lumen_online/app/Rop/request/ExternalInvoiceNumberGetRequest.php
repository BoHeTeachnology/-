<?php
//修改微信帐号
class ExternalInvoiceNumberGetRequest
{
	private $ShipGUID;
    
    private $MacCode;
    
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
        
    public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.invoice.number.get";
    }

    public function check()
    {
        
    }
}