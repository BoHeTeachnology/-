<?php
class FengchaoRiskResultRequest
{
     private $apiParas = array();

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

     private $biz_code;

     public function getBizCode()
     {
         return $this->$biz_code;
     }

     public function setBizCode($biz_code)
     {
         $this->biz_code = $biz_code;
         $this->apiParas["biz_code"] = $biz_code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengchao.risk.result";
     }
     public function check()     {          }}
