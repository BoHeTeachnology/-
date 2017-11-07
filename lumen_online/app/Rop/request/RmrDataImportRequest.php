<?php
class RmrDataImportRequest
{
     private $apiParas = array();

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

     private $table_name;

     public function getTableName()
     {
         return $this->$table_name;
     }

     public function setTableName($table_name)
     {
         $this->table_name = $table_name;
         $this->apiParas["table_name"] = $table_name;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rmr.data.import";
     }
     public function check()     {          }}
