<?php
class ExternalWeixinKeywordAddRequest
{
	private $Account;
	private $KeyWord;
	private $MsgTextContent;
	private $MsgNewsContent;
	private $MsgType;
        				
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
	
	public function setKeyWord($KeyWord)
	{
		$this->KeyWord = $KeyWord;
		$this->apiParas["KeyWord"] = $KeyWord;
	}
	public function getKeyWord()
	{
		return $this->$KeyWord;
	}
	
	public function setMsgTextContent($MsgTextContent)
	{
		$this->MsgTextContent = $MsgTextContent;
		$this->apiParas["MsgTextContent"] = $MsgTextContent;
	}
	public function getMsgTextContent()
	{
		return $this->$MsgTextContent;
	}
	
	public function setMsgNewsContent($MsgNewsContent)
	{
		$this->MsgNewsContent = $MsgNewsContent;
		$this->apiParas["MsgNewsContent"] = $MsgNewsContent;
	}
	public function getMsgNewsContent()
	{
		return $this->$MsgNewsContent;
	}
	
	public function setMsgType($MsgType)
	{
		$this->MsgType = $MsgType;
		$this->apiParas["MsgType"] = $MsgType;
	}
	public function getMsgType()
	{
		return $this->$MsgType;
	}

	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.weixin.keyword.add";
    }

	public function check()
	{
		
	}
}

	