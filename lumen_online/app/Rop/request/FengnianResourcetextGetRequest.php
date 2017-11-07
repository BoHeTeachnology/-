<?php
class FengnianResourcetextGetRequest
{
     private $apiParas = array();

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

     private $text_cid;

     public function getTextCid()
     {
         return $this->$text_cid;
     }

     public function setTextCid($text_cid)
     {
         $this->text_cid = $text_cid;
         $this->apiParas["text_cid"] = $text_cid;
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

     private $text_title;

     public function getTextTitle()
     {
         return $this->$text_title;
     }

     public function setTextTitle($text_title)
     {
         $this->text_title = $text_title;
         $this->apiParas["text_title"] = $text_title;
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

     private $text_id;

     public function getTextId()
     {
         return $this->$text_id;
     }

     public function setTextId($text_id)
     {
         $this->text_id = $text_id;
         $this->apiParas["text_id"] = $text_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.resourcetext.get";
     }
     public function check()     {          }}
