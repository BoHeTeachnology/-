<?php
//添加微信帐号
class ExternalWeixinAccountAddRequest
{
    private $weixinAccount;
    
    private $weixinName;
    
    private $weixinAppId;
    
    private $weixinAppSecret;
    
    private $weixinRedirectInformation;
    
    private $weixinEncodingAESKey;
    
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
    
    public function setWeixinEncodingAESKey($weixinEncodingAESKey)
    {
        $this->weixinEncodingAESKey = $weixinEncodingAESKey;
        $this->apiParas["weixinEncodingAESKey"] = $weixinEncodingAESKey;
    }
    
    public function getWeixinEncodingAESKey()
    {
        return $this->$weixinEncodingAESKey;
    }
    
    public function setWeixinRedirectInformation($weixinRedirectInformation)
    {
        $this->weixinRedirectInformation = $weixinRedirectInformation;
        $this->apiParas["weixinRedirectInformation"] = $weixinRedirectInformation;
    }
    
    public function getWeixinRedirectInformation()
    {
        return $this->$weixinRedirectInformation;
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
        return "ruixue.external.weixin.account.add";
    }

    public function check()
    {
        
    }
}

    