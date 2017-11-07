<?php
class FengnianResourcetypeCreateRequest
{
     private $apiParas = array();

     private $nuclass;

     public function getNuclass()
     {
         return $this->$nuclass;
     }

     public function setNuclass($nuclass)
     {
         $this->nuclass = $nuclass;
         $this->apiParas["nuclass"] = $nuclass;
     }

     private $tpl_class;

     public function getTplClass()
     {
         return $this->$tpl_class;
     }

     public function setTplClass($tpl_class)
     {
         $this->tpl_class = $tpl_class;
         $this->apiParas["tpl_class"] = $tpl_class;
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

     private $pid;

     public function getPid()
     {
         return $this->$pid;
     }

     public function setPid($pid)
     {
         $this->pid = $pid;
         $this->apiParas["pid"] = $pid;
     }

     private $tid;

     public function getTid()
     {
         return $this->$tid;
     }

     public function setTid($tid)
     {
         $this->tid = $tid;
         $this->apiParas["tid"] = $tid;
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

     private $issystem;

     public function getIssystem()
     {
         return $this->$issystem;
     }

     public function setIssystem($issystem)
     {
         $this->issystem = $issystem;
         $this->apiParas["issystem"] = $issystem;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.resourcetype.create";
     }
     public function check()     {          }}
