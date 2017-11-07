<?php
class FengnianApiWeixinItemGetRequest
{
     private $apiParas = array();

     private $p_desc;

     public function getPDesc()
     {
         return $this->$p_desc;
     }

     public function setPDesc($p_desc)
     {
         $this->p_desc = $p_desc;
         $this->apiParas["p_desc"] = $p_desc;
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

     private $p_no;

     public function getPNo()
     {
         return $this->$p_no;
     }

     public function setPNo($p_no)
     {
         $this->p_no = $p_no;
         $this->apiParas["p_no"] = $p_no;
     }

     private $cate_id;

     public function getCateId()
     {
         return $this->$cate_id;
     }

     public function setCateId($cate_id)
     {
         $this->cate_id = $cate_id;
         $this->apiParas["cate_id"] = $cate_id;
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

     private $order_mode;

     public function getOrderMode()
     {
         return $this->$order_mode;
     }

     public function setOrderMode($order_mode)
     {
         $this->order_mode = $order_mode;
         $this->apiParas["order_mode"] = $order_mode;
     }

     private $order_type;

     public function getOrderType()
     {
         return $this->$order_type;
     }

     public function setOrderType($order_type)
     {
         $this->order_type = $order_type;
         $this->apiParas["order_type"] = $order_type;
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

     private $p_id;

     public function getPId()
     {
         return $this->$p_id;
     }

     public function setPId($p_id)
     {
         $this->p_id = $p_id;
         $this->apiParas["p_id"] = $p_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.api.weixin.item.get";
     }
     public function check()     {          }}
