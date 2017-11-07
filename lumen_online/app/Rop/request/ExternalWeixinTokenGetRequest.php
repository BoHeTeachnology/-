<?php
class ExternalWeixinTokenGetRequest
{
	private $Account;
	
	private $apiParas = array();
	
	private $componentAppid;
    
    public function setComponentAppid($componentAppid)
    {
        $this->componentAppid = $componentAppid;
        $this->apiParas["component_appid"] = $componentAppid;
    }
    
    public function getComponentAppid()
    {
        return $this->$componentAppid;
    }
    
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

	