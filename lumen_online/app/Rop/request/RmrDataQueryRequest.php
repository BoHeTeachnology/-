<?php
class RmrDataQueryRequest
{
     private $apiParas = array();

     private $offset_count;

     public function getOffsetCount()
     {
         return $this->$offset_count;
     }

     public function setOffsetCount($offset_count)
     {
         $this->offset_count = $offset_count;
         $this->apiParas["offset_count"] = $offset_count;
     }

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

     private $query_type;

     public function getQueryType()
     {
         return $this->$query_type;
     }

     public function setQueryType($query_type)
     {
         $this->query_type = $query_type;
         $this->apiParas["query_type"] = $query_type;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rmr.data.query";
     }
     public function check()     {          }}
