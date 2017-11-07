<?php
class FengnianResourcetypeGetRequest
{
     private $apiParas = array();

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

     private $type_title;

     public function getTypeTitle()
     {
         return $this->$type_title;
     }

     public function setTypeTitle($type_title)
     {
         $this->type_title = $type_title;
         $this->apiParas["type_title"] = $type_title;
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

     private $type_tid;

     public function getTypeTid()
     {
         return $this->$type_tid;
     }

     public function setTypeTid($type_tid)
     {
         $this->type_tid = $type_tid;
         $this->apiParas["type_tid"] = $type_tid;
     }

     private $type_pid;

     public function getTypePid()
     {
         return $this->$type_pid;
     }

     public function setTypePid($type_pid)
     {
         $this->type_pid = $type_pid;
         $this->apiParas["type_pid"] = $type_pid;
     }

     private $type_id;

     public function getTypeId()
     {
         return $this->$type_id;
     }

     public function setTypeId($type_id)
     {
         $this->type_id = $type_id;
         $this->apiParas["type_id"] = $type_id;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.resourcetype.get";
     }
     public function check()     {          }}
