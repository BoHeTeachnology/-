<?php
class WheatfieldPycreditEducationRiskRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.pycredit.education.risk";
     }
     public function check()     {          }}
