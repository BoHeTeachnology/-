<?php
class FengnianOrderLogListRequest
{
     private $apiParas = array();

     private $log_id_start;

     public function getLogIdStart()
     {
         return $this->$log_id_start;
     }

     public function setLogIdStart($log_id_start)
     {
         $this->log_id_start = $log_id_start;
         $this->apiParas["log_id_start"] = $log_id_start;
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

     private $end_dt;

     public function getEndDt()
     {
         return $this->$end_dt;
     }

     public function setEndDt($end_dt)
     {
         $this->end_dt = $end_dt;
         $this->apiParas["end_dt"] = $end_dt;
     }

     private $page_num;

     public function getPageNum()
     {
         return $this->$page_num;
     }

     public function setPageNum($page_num)
     {
         $this->page_num = $page_num;
         $this->apiParas["page_num"] = $page_num;
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

     private $start_dt;

     public function getStartDt()
     {
         return $this->$start_dt;
     }

     public function setStartDt($start_dt)
     {
         $this->start_dt = $start_dt;
         $this->apiParas["start_dt"] = $start_dt;
     }

     private $orderid;

     public function getOrderid()
     {
         return $this->$orderid;
     }

     public function setOrderid($orderid)
     {
         $this->orderid = $orderid;
         $this->apiParas["orderid"] = $orderid;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.order.log.list";
     }
     public function check()     {          }}
