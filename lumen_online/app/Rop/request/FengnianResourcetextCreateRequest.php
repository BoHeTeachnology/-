<?php
class FengnianResourcetextCreateRequest
{
     private $apiParas = array();

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

     private $create_id;

     public function getCreateId()
     {
         return $this->$create_id;
     }

     public function setCreateId($create_id)
     {
         $this->create_id = $create_id;
         $this->apiParas["create_id"] = $create_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.resourcetext.create";
     }
     public function check()     {          }}
