<?php
class RmrTextCalculateRequest
{
     private $apiParas = array();

     private $text_sql;

     public function getTextSql()
     {
         return $this->$text_sql;
     }

     public function setTextSql($text_sql)
     {
         $this->text_sql = $text_sql;
         $this->apiParas["text_sql"] = $text_sql;
     }

     private $parameter;

     public function getParameter()
     {
         return $this->$parameter;
     }

     public function setParameter($parameter)
     {
         $this->parameter = $parameter;
         $this->apiParas["parameter"] = $parameter;
     }

     private $user_account;

     public function getUserAccount()
     {
         return $this->$user_account;
     }

     public function setUserAccount($user_account)
     {
         $this->user_account = $user_account;
         $this->apiParas["user_account"] = $user_account;
     }

     private $calculate_type;

     public function getCalculateType()
     {
         return $this->$calculate_type;
     }

     public function setCalculateType($calculate_type)
     {
         $this->calculate_type = $calculate_type;
         $this->apiParas["calculate_type"] = $calculate_type;
     }

     private $storage_type;

     public function getStorageType()
     {
         return $this->$storage_type;
     }

     public function setStorageType($storage_type)
     {
         $this->storage_type = $storage_type;
         $this->apiParas["storage_type"] = $storage_type;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rmr.text.calculate";
     }
     public function check()     {          }}
