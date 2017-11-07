<?php
class FengchaoRiskMatchRequest
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

     private $datas;

     public function getDatas()
     {
         return $this->$datas;
     }

     public function setDatas($datas)
     {
         $this->datas = $datas;
         $this->apiParas["datas"] = $datas;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengchao.risk.match";
     }
     public function check()     {          }}
