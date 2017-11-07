<?php
//添加微信帐号
class ExternalWeixinAccountInfoUpdateRequest
{
    private $weixinAccount;
    
    private $weixinAppId;
    
    private $weixinAppSecret;
    
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
    
    public function setWeixinAccount($weixinAccount)
    {
        $this->weixinAccount = $weixinAccount;
        $this->apiParas["weixinAccount"] = $weixinAccount;
    }

    public function getWeixinAccount()
    {
        return $this->$weixinAccount;
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
    
    public function setWeixinEncodingAESKey($weixinEncodingAESKey)
    {
        $this->weixinEncodingAESKey = $weixinEncodingAESKey;
        $this->apiParas["weixinEncodingAESKey"] = $weixinEncodingAESKey;
    }
    
    public function getWeixinEncodingAESKey()
    {
        return $this->$weixinEncodingAESKey;
    }
    
    public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.weixin.account.info.update";
    }

    public function check()
    {
        
    }
}

    