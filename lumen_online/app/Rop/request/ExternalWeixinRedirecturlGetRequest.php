<?php
//修改微信帐号
class ExternalWeixinRedirecturlGetRequest
{
	private $Account;
    
    private $ViewUrl;
    
    private $Remark;
    
    private $Scope;
    
    private $apiParas = array();

    private $componentAppid;
    
    private $mainaccountAppid;
    
    private $errorFlag;
    
     public function setErrorFlag($errorFlag)
    {
        $this->errorFlag = $errorFlag;
        $this->apiParas["error_flag"] = $errorFlag;
    }
    
    public function getErrorFlag()
    {
        return $this->$errorFlag;
    }
    
    public function setComponentAppid($componentAppid)
    {
        $this->componentAppid = $componentAppid;
        $this->apiParas["component_appid"] = $componentAppid;
    }
    
    public function getComponentAppid()
    {
        return $this->$componentAppid;
    }
    
       
    public function setMainaccountAppid($mainaccountAppid)
    {
        $this->mainaccountAppid = $mainaccountAppid;
        $this->apiParas["mainaccount_appid"] = $mainaccountAppid;
    }
    
    public function getMainaccountAppid()
    {
        return $this->$mainaccountAppid;
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

    public function setViewUrl($ViewUrl)
    {
        $this->ViewUrl = $ViewUrl;
        $this->apiParas["ViewUrl"] = $ViewUrl;
    }

    public function geViewUrl()
    {
        return $this->$ViewUrl;
    }
    
     public function setRemark($Remark)
    {
        $this->Remark = $Remark;
        $this->apiParas["Remark"] = $Remark;
    }

    public function getRemark()
    {
        return $this->$Remark;
    }
        
     public function setScope($Scope)
    {
        $this->Scope = $Scope;
        $this->apiParas["Scope"] = $Scope;
    }

    public function getScope()
    {
        return $this->$Scope;
    }
    
    public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.weixin.redirecturl.get";
    }

    public function check()
    {
        
    }
}