<?php
class WheatfieldPycreditPersonEducationRiskRequest
{
     private $apiParas = array();

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

     private $graduate_time;

     public function getGraduateTime()
     {
         return $this->$graduate_time;
     }

     public function setGraduateTime($graduate_time)
     {
         $this->graduate_time = $graduate_time;
         $this->apiParas["graduate_time"] = $graduate_time;
     }

     private $college_level;

     public function getCollegeLevel()
     {
         return $this->$college_level;
     }

     public function setCollegeLevel($college_level)
     {
         $this->college_level = $college_level;
         $this->apiParas["college_level"] = $college_level;
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

     private $level_no;

     public function getLevelNo()
     {
         return $this->$level_no;
     }

     public function setLevelNo($level_no)
     {
         $this->level_no = $level_no;
         $this->apiParas["level_no"] = $level_no;
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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.pycredit.person.education.risk";
     }
     public function check()     {          }}
