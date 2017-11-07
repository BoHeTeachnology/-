<?php
//添加微信帐号
class ExternalWeixinMenuAddRequest
{
    private $weixinAccount;
    
    private $weixinMenu;
    
    private $weixinTextReply;
    
    private $weixinNewsReply;

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
        $this->apiParas["weixin_account"] = $weixinAccount;
    }

    public function getWeixinAccount()
    {
        return $this->$weixinAccount;
    }
    
     public function setWeixinMenu($weixinMenu)
    {
        $this->weixinMenu = $weixinMenu;
        $this->apiParas["weixin_menu"] = $weixinMenu;
    }

    public function getWeixinMenu()
    {
        return $this->$weixinMenu;
    }
    
    public function setWeixinTextReply($weixinTextReply)
    {
        $this->weixinTextReply = $weixinTextReply;
        $this->apiParas["weixin_text_reply"] = $weixinTextReply;
    }

    public function getWeixinTextReply()
    {
        return $this->$weixinTextReply;
    }

    public function setWeixinNewsReply($weixinNewsReply)
    {
        $this->weixinNewsReply = $weixinNewsReply;
        $this->apiParas["weixin_news_reply"] = $weixinNewsReply;
    }

    public function getWeixinNewsReply()
    {
        return $this->$weixinNewsReply;
    }
    
    public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.weixin.menu.add";
    }

    public function check()
    {
        
    }
}

    