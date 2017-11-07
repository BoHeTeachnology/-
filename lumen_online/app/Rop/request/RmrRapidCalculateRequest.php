<?php
class RmrRapidCalculateRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rmr.rapid.calculate";
     }
     public function check()     {          }}
