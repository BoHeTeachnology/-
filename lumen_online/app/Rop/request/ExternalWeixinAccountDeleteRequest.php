<?php
//删除微信帐号
class ExternalWeixinAccountDeleteRequest
{
    private $weixinAccount;
 
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
    
    public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.weixin.account.delete";
    }

    public function check()
    {
        
    }
}

    