<?php
class ExternalWeixinQrcodeGetRequest
{
	private $Account;
	private $SceneId;
	private $SceneType;
	private $ExpireSeconds;
	
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
	
	public function setSceneId($SceneId)
	{
		$this->SceneId = $SceneId;
		$this->apiParas["SceneId"] = $SceneId;
	}

	public function getSceneId()
	{
		return $this->$SceneId;
	}
	
	public function setSceneType($SceneType)
	{
		$this->SceneType = $SceneType;
		$this->apiParas["SceneType"] = $SceneType;
	}

	public function getSceneType()
	{
		return $this->$SceneType;
	}
	
	public function setExpireSeconds($ExpireSeconds)
	{
		$this->ExpireSeconds = $ExpireSeconds;
		$this->apiParas["ExpireSeconds"] = $ExpireSeconds;
	}

	public function getExpireSeconds()
	{
		return $this->$ExpireSeconds;
	}

	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	
    public function getApiMethodName()
    {
        return "ruixue.external.weixin.qrcode.get";
    }

	public function check()
	{
		
	}
}

	