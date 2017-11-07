<?php
class FengnianResourceimageGetRequest
{
     private $apiParas = array();

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

     private $page_size;

     public function getPageSize()
     {
         return $this->$page_size;
     }

     public function setPageSize($page_size)
     {
         $this->page_size = $page_size;
         $this->apiParas["page_size"] = $page_size;
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

     private $page_no;

     public function getPageNo()
     {
         return $this->$page_no;
     }

     public function setPageNo($page_no)
     {
         $this->page_no = $page_no;
         $this->apiParas["page_no"] = $page_no;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.resourceimage.get";
     }
     public function check()     {          }}
