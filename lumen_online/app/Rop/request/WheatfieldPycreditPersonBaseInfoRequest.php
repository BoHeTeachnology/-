<?php
class WheatfieldPycreditPersonBaseInfoRequest
{
     private $apiParas = array();

     private $real_time;

     public function getRealTime()
     {
         return $this->$real_time;
     }

     public function setRealTime($real_time)
     {
         $this->real_time = $real_time;
         $this->apiParas["real_time"] = $real_time;
     }

     private $org_no;

     public function getOrgNo()
     {
         return $this->$org_no;
     }

     public function setOrgNo($org_no)
     {
         $this->org_no = $org_no;
         $this->apiParas["org_no"] = $org_no;
     }

     private $summary;

     public function getSummary()
     {
         return $this->$summary;
     }

     public function setSummary($summary)
     {
         $this->summary = $summary;
         $this->apiParas["summary"] = $summary;
     }

     private $id_code;

     public function getIdCode()
     {
         return $this->$id_code;
     }

     public function setIdCode($id_code)
     {
         $this->id_code = $id_code;
         $this->apiParas["id_code"] = $id_code;
     }

     private $query_name;

     public function getQueryName()
     {
         return $this->$query_name;
     }

     public function setQueryName($query_name)
     {
         $this->query_name = $query_name;
         $this->apiParas["query_name"] = $query_name;
     }

     private $id_type;

     public function getIdType()
     {
         return $this->$id_type;
     }

     public function setIdType($id_type)
     {
         $this->id_type = $id_type;
         $this->apiParas["id_type"] = $id_type;
     }

     private $remark;

     public function getRemark()
     {
         return $this->$remark;
     }

     public function setRemark($remark)
     {
         $this->remark = $remark;
         $this->apiParas["remark"] = $remark;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.pycredit.person.base.info";
     }
     public function check()     {          }}
