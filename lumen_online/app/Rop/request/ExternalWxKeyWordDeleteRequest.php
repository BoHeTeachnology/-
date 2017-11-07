<?php
class ExternalWxKeyWordDeleteRequest
{
	private $Account;
	private $KeyWord;
        				
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
	
	public function setKeyWord($KeyWord)
	{
		$this->KeyWord = $KeyWord;
		$this->apiParas["KeyWord"] = $KeyWord;
	}
	public function getKeyWord()
	{
		return $this->$KeyWord;
	}

	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.weixin.keyword.delete";
    }

	public function check()
	{
		
	}
}

	