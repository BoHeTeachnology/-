<?php
class FengchaoRiskReferenceRequest
{
     private $apiParas = array();

     private $conditions;

     public function getConditions()
     {
         return $this->$conditions;
     }

     public function setConditions($conditions)
     {
         $this->conditions = $conditions;
         $this->apiParas["conditions"] = $conditions;
     }

     private $biz_type_code;

     public function getBizTypeCode()
     {
         return $this->$biz_type_code;
     }

     public function setBizTypeCode($biz_type_code)
     {
         $this->biz_type_code = $biz_type_code;
         $this->apiParas["biz_type_code"] = $biz_type_code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengchao.risk.reference";
     }
     public function check()     {          }}
