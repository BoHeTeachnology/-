<?php
class RmrHbaseTableCreateRequest
{
     private $apiParas = array();

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
         return "ruixue.rmr.hbase.table.create";
     }
     public function check()     {          }}
