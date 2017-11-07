<?php
class FengnianResourcepageUpdateRequest
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

     private $modleid;

     public function getModleid()
     {
         return $this->$modleid;
     }

     public function setModleid($modleid)
     {
         $this->modleid = $modleid;
         $this->apiParas["modleid"] = $modleid;
     }

     private $status;

     public function getStatus()
     {
         return $this->$status;
     }

     public function setStatus($status)
     {
         $this->status = $status;
         $this->apiParas["status"] = $status;
     }

     private $title;

     public function getTitle()
     {
         return $this->$title;
     }

     public function setTitle($title)
     {
         $this->title = $title;
         $this->apiParas["title"] = $title;
     }

     private $id;

     public function getId()
     {
         return $this->$id;
     }

     public function setId($id)
     {
         $this->id = $id;
         $this->apiParas["id"] = $id;
     }

     private $cate;

     public function getCate()
     {
         return $this->$cate;
     }

     public function setCate($cate)
     {
         $this->cate = $cate;
         $this->apiParas["cate"] = $cate;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.resourcepage.update";
     }
     public function check()     {          }}
