<?php
class FengnianResourcetextUpdateRequest
{
     private $apiParas = array();

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

     private $text_content;

     public function getTextContent()
     {
         return $this->$text_content;
     }

     public function setTextContent($text_content)
     {
         $this->text_content = $text_content;
         $this->apiParas["text_content"] = $text_content;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.resourcetext.update";
     }
     public function check()     {          }}
