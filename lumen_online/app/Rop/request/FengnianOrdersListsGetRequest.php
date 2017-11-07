<?php
class FengnianOrdersListsGetRequest
{
     private $apiParas = array();

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

     private $order_by;

     public function getOrderBy()
     {
         return $this->$order_by;
     }

     public function setOrderBy($order_by)
     {
         $this->order_by = $order_by;
         $this->apiParas["order_by"] = $order_by;
     }

     private $update_start_time;

     public function getUpdateStartTime()
     {
         return $this->$update_start_time;
     }

     public function setUpdateStartTime($update_start_time)
     {
         $this->update_start_time = $update_start_time;
         $this->apiParas["update_start_time"] = $update_start_time;
     }

     private $page_no;

     public function getPageNo()
     {
         return $this->$page_no;
     }

     public function setPageNo($page_no)
     {
         $this->page_no = $page_no;
         $this->apiParas["page_no"] = $page_no;
     }

     private $create_end_time;

     public function getCreateEndTime()
     {
         return $this->$create_end_time;
     }

     public function setCreateEndTime($create_end_time)
     {
         $this->create_end_time = $create_end_time;
         $this->apiParas["create_end_time"] = $create_end_time;
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

     private $status_id;

     public function getStatusId()
     {
         return $this->$status_id;
     }

     public function setStatusId($status_id)
     {
         $this->status_id = $status_id;
         $this->apiParas["status_id"] = $status_id;
     }

     private $update_end_time;

     public function getUpdateEndTime()
     {
         return $this->$update_end_time;
     }

     public function setUpdateEndTime($update_end_time)
     {
         $this->update_end_time = $update_end_time;
         $this->apiParas["update_end_time"] = $update_end_time;
     }

     private $create_start_time;

     public function getCreateStartTime()
     {
         return $this->$create_start_time;
     }

     public function setCreateStartTime($create_start_time)
     {
         $this->create_start_time = $create_start_time;
         $this->apiParas["create_start_time"] = $create_start_time;
     }

     private $page_size;

     public function getPageSize()
     {
         return $this->$page_size;
     }

     public function setPageSize($page_size)
     {
         $this->page_size = $page_size;
         $this->apiParas["page_size"] = $page_size;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.orders.lists.get";
     }
     public function check()     {          }}
