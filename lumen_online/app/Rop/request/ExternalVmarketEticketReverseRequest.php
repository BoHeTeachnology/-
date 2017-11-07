<?php
class ExternalVmarketEticketReverseRequest
{
	private $Nick;
	private $OrderId;
	private $VerifyCode;
	private $Token;

	private $ReverseCode;
	private $ReverseNum;
	private $ConsumeSecialNum;
	
	private $apiParas = array();

	public function setConsumeSecialNum($ConsumeSecialNum)
	{
		$this->ReverseNum = $ConsumeSecialNum;
		$this->apiParas["ConsumeSecialNum"] = $ConsumeSecialNum;
	}

	public function getConsumeSecialNum()
	{
		return $this->$ConsumeSecialNum;
	}

	public function setReverseCode($ReverseCode)
	{
		$this->ReverseCode = $ReverseCode;
		$this->apiParas["ReverseCode"] = $ReverseCode;
	}

	public function getReverseCode()
	{
		return $this->$ReverseCode;
	}

	public function setReverseNum($ReverseNum)
	{
		$this->ReverseNum = $ReverseNum;
		$this->apiParas["ReverseNum"] = $ReverseNum;
	}

	public function getReverseNum()
	{
		return $this->$ReverseNum;
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
        return "ruixue.external.vmarket.eticket.reverse";
    }

	public function check()
	{
		
	}
}

	