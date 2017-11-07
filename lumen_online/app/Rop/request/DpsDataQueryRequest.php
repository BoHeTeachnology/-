<?php
class DpsDataQueryRequest
{
     private $apiParas = array();

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

     private $user_token;

     public function getUserToken()
     {
         return $this->$user_token;
     }

     public function setUserToken($user_token)
     {
         $this->user_token = $user_token;
         $this->apiParas["user_token"] = $user_token;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.dps.data.query";
     }
     public function check()     {          }}
