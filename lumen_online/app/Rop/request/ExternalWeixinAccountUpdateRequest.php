<?php
//修改微信帐号
class ExternalWeixinAccountUpdateRequest
{
	private $companyKey;
    
    private $weixinAccount;
    
    private $weixinName;
    
    private $weixinAppId;
    
    private $weixinAppSecret;
    
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
    
    public function setCompanyKey($companyKey)
    {
        $this->companyKey = $companyKey;
        $this->apiParas["companyKey"] = $companyKey;
    }

    public function getCompanyKey()
    {
        return $this->$companyKey;
    }

    public function setWeixinAccount($weixinAccount)
    {
        $this->weixinAccount = $weixinAccount;
        $this->apiParas["weixinAccount"] = $weixinAccount;
    }

    public function getWeixinAccount()
    {
        return $this->$weixinAccount;
    }
    
     public function setWeixinName($weixinName)
    {
        $this->weixinName = $weixinName;
        $this->apiParas["weixinName"] = $weixinName;
    }

    public function getWeixinName()
    {
        return $this->$weixinName;
    }
    
    public function setWeixinAppId($weixinAppId)
    {
        $this->weixinAppId = $weixinAppId;
        $this->apiParas["weixinAppId"] = $weixinAppId;
    }

    public function getWeixinAppId()
    {
        return $this->$weixinAppId;
    }

    public function setWeixinAppSecret($weixinAppSecret)
    {
        $this->weixinAppSecret = $weixinAppSecret;
        $this->apiParas["weixinAppSecret"] = $weixinAppSecret;
    }

    public function getWeixinAppSecret()
    {
        return $this->$weixinAppSecret;
    }
    
    public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.weixin.account.update";
    }

    public function check()
    {
        
    }
}