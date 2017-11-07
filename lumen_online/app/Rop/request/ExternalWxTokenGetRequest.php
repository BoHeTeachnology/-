<?php
class ExternalWxTokenGetRequest
{
	private $Account;
	
	private $apiParas = array();
	
	public function setAccount($Account)
	{
		$this->Account = $Account;
		$this->apiParas["Account"] = $Account;
	}

	public function getAccount()
	{
		return $this->$Account;
	}

	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	
    public function getApiMethodName()
    {
        return "ruixue.external.weixin.token.get";
    }

	public function check()
	{
		
	}
}

	