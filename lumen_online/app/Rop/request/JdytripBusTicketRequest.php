<?php
class JdytripBusTicketRequest
{
     private $apiParas = array();

     private $limit;

     public function getLimit()
     {
         return $this->$limit;
     }

     public function setLimit($limit)
     {
         $this->limit = $limit;
         $this->apiParas["limit"] = $limit;
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

     private $city_code;

     public function getCityCode()
     {
         return $this->$city_code;
     }

     public function setCityCode($city_code)
     {
         $this->city_code = $city_code;
         $this->apiParas["city_code"] = $city_code;
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
         return "ruixue.jdytrip.bus.ticket";
     }
     public function check()     {          }}
