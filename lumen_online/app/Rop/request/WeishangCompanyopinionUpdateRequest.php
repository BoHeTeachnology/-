<?php
class WeishangCompanyopinionUpdateRequest
{
     private $apiParas = array();

     private $status;

     public function getStatus()
     {
         return $this->$status;
     }

     public function setStatus($status)
     {
         $this->status = $status;
         $this->apiParas["status"] = $status;
     }

     private $opinion_id;

     public function getOpinionId()
     {
         return $this->$opinion_id;
     }

     public function setOpinionId($opinion_id)
     {
         $this->opinion_id = $opinion_id;
         $this->apiParas["opinion_id"] = $opinion_id;
     }

     private $operation_content;

     public function getOperationContent()
     {
         return $this->$operation_content;
     }

     public function setOperationContent($operation_content)
     {
         $this->operation_content = $operation_content;
         $this->apiParas["operation_content"] = $operation_content;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.weishang.companyopinion.update";
     }
     public function check()     {          }}
