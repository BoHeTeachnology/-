<?php
class FengnianResourceimageCreateRequest
{
     private $apiParas = array();

     private $img_url;

     public function getImgUrl()
     {
         return $this->$img_url;
     }

     public function setImgUrl($img_url)
     {
         $this->img_url = $img_url;
         $this->apiParas["img_url"] = $img_url;
     }

     private $img_cid;

     public function getImgCid()
     {
         return $this->$img_cid;
     }

     public function setImgCid($img_cid)
     {
         $this->img_cid = $img_cid;
         $this->apiParas["img_cid"] = $img_cid;
     }

     private $img_title;

     public function getImgTitle()
     {
         return $this->$img_title;
     }

     public function setImgTitle($img_title)
     {
         $this->img_title = $img_title;
         $this->apiParas["img_title"] = $img_title;
     }

     private $company_key;

     public function getCompanyKey()
     {
         return $this->$company_key;
     }

     public function setCompanyKey($company_key)
     {
         $this->company_key = $company_key;
         $this->apiParas["company_key"] = $company_key;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.resourceimage.create";
     }
     public function check()     {          }}
