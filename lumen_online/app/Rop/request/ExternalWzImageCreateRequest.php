<?php
//提交一个素材库中的图片素材
class ExternalWzImageCreateRequest
{
	private $company_key;
	
	private $title;
	
	private $cid;
    
    private $url;
    
    private $size;
    
    private $apiParas = array();

	public function setCompanyKey($company_key)
    {
        $this->company_key = $company_key;
        $this->apiParas["company_key"] = $company_key;
    }

    public function getCompanyKey()
    {
        return $this->$company_key;
    }
	
	public function setTitle($title)
    {
        $this->title = $title;
        $this->apiParas["title"] = $title;
    }

    public function getTitle()
    {
        return $this->$title;
    }
    
    public function setCid($cid)
    {
        $this->cid = $cid;
        $this->apiParas["cid"] = $cid;
    }

    public function getCid()
    {
        return $this->$cid;
    }

    public function setUrl($url)
    {
        $this->url = $url;
        $this->apiParas["url"] = $url;
    }

    public function getUrl()
    {
        return $this->$url;
    }
    
    public function setSize($size)
    {
        $this->size = $size;
        $this->apiParas["size"] = $size;
    }

    public function getSize()
    {
        return $this->$size;
    }
    
    public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.weizhan.image.add";
    }

    public function check()
    {
        
    }
}