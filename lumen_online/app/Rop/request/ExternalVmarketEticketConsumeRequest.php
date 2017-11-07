<?php
class ExternalVmarketEticketConsumeRequest
{
	private $Nick;
	private $OrderId;
	private $VerifyCode;
	private $Token;

	private $SerialNum;
	private $ConsumeNum;
	
	private $apiParas = array();


	public function setSerialNum($SerialNum)
	{
		$this->SerialNum = $SerialNum;
		$this->apiParas["SerialNum"] = $SerialNum;
	}

	public function getSerialNum()
	{
		return $this->$SerialNum;
	}

	public function setConsumeNum($ConsumeNum)
	{
		$this->ConsumeNum = $ConsumeNum;
		$this->apiParas["ConsumeNum"] = $ConsumeNum;
	}

	public function getConsumeNum()
	{
		return $this->$ConsumeNum;
	}
	
	public function setNick($Nick)
	{
		$this->Nick = $Nick;
		$this->apiParas["Nick"] = $Nick;
	}

	public function getNick()
	{
		return $this->$Nick;
	}
	
	public function setOrderId($OrderId)
	{
		$this->OrderId = $OrderId;
		$this->apiParas["OrderId"] = $OrderId;
	}

	public function getOrderId()
	{
		return $this->$OrderId;
	}
	
	public function setVerifyCode($VerifyCode)
	{
		$this->VerifyCode = $VerifyCode;
		$this->apiParas["VerifyCode"] = $VerifyCode;
	}

	public function getVerifyCode()
	{
		return $this->$VerifyCode;
	}
	
	public function setToken($Token)
	{
		$this->Token = $Token;
		$this->apiParas["Token"] = $Token;
	}

	public function getToken()
	{
		return $this->$Token;
	}

	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	
    public function getApiMethodName()
    {
        return "ruixue.external.vmarket.eticket.consume";
    }

	public function check()
	{
		
	}
}

	