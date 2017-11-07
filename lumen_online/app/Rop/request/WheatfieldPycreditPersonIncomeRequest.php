<?php
class WheatfieldPycreditPersonIncomeRequest
{
     private $apiParas = array();

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

     private $full_time;

     public function getFullTime()
     {
         return $this->$full_time;
     }

     public function setFullTime($full_time)
     {
         $this->full_time = $full_time;
         $this->apiParas["full_time"] = $full_time;
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

     private $corp_name;

     public function getCorpName()
     {
         return $this->$corp_name;
     }

     public function setCorpName($corp_name)
     {
         $this->corp_name = $corp_name;
         $this->apiParas["corp_name"] = $corp_name;
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

     private $college;

     public function getCollege()
     {
         return $this->$college;
     }

     public function setCollege($college)
     {
         $this->college = $college;
         $this->apiParas["college"] = $college;
     }

     private $graduate_year;

     public function getGraduateYear()
     {
         return $this->$graduate_year;
     }

     public function setGraduateYear($graduate_year)
     {
         $this->graduate_year = $graduate_year;
         $this->apiParas["graduate_year"] = $graduate_year;
     }

     private $position_name;

     public function getPositionName()
     {
         return $this->$position_name;
     }

     public function setPositionName($position_name)
     {
         $this->position_name = $position_name;
         $this->apiParas["position_name"] = $position_name;
     }

     private $top_degree;

     public function getTopDegree()
     {
         return $this->$top_degree;
     }

     public function setTopDegree($top_degree)
     {
         $this->top_degree = $top_degree;
         $this->apiParas["top_degree"] = $top_degree;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.pycredit.person.income";
     }
     public function check()     {          }}
