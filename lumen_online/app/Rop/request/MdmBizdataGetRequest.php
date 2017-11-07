<?php
class MdmBizdataGetRequest
{
     private $apiParas = array();

     private $id;

     public function getId()
     {
         return $this->$id;
     }

     public function setId($id)
     {
         $this->id = $id;
         $this->apiParas["id"] = $id;
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

     private $start_created;

     public function getStartCreated()
     {
         return $this->$start_created;
     }

     public function setStartCreated($start_created)
     {
         $this->start_created = $start_created;
         $this->apiParas["start_created"] = $start_created;
     }

     private $end_created;

     public function getEndCreated()
     {
         return $this->$end_created;
     }

     public function setEndCreated($end_created)
     {
         $this->end_created = $end_created;
         $this->apiParas["end_created"] = $end_created;
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
         return "ruixue.mdm.bizdata.get";
     }
     public function check()     {          }}
