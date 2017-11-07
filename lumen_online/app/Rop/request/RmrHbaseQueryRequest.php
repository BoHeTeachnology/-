<?php
class RmrHbaseQueryRequest
{
     private $apiParas = array();

     private $sql;

     public function getSql()
     {
         return $this->$sql;
     }

     public function setSql($sql)
     {
         $this->sql = $sql;
         $this->apiParas["sql"] = $sql;
     }

     private $data_num;

     public function getDataNum()
     {
         return $this->$data_num;
     }

     public function setDataNum($data_num)
     {
         $this->data_num = $data_num;
         $this->apiParas["data_num"] = $data_num;
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
         return "ruixue.rmr.hbase.query";
     }
     public function check()     {          }}
