<?php
class LetvExchangecodeGenerateRequest
{
     private $apiParas = array();

     private $cellphone_number;

     public function getCellphoneNumber()
     {
         return $this->$cellphone_number;
     }

     public function setCellphoneNumber($cellphone_number)
     {
         $this->cellphone_number = $cellphone_number;
         $this->apiParas["cellphone_number"] = $cellphone_number;
     }

     private $activity_code;

     public function getActivityCode()
     {
         return $this->$activity_code;
     }

     public function setActivityCode($activity_code)
     {
         $this->activity_code = $activity_code;
         $this->apiParas["activity_code"] = $activity_code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.letv.exchangecode.generate";
     }
     public function check()     {          }}
