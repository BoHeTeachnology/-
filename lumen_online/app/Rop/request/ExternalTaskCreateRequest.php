<?php
class ExternalTaskCreateRequest
{
     private $apiParas = array();

     private $source_method;

     public function getSourceMethod()
     {
         return $this->$source_method;
     }

     public function setSourceMethod($source_method)
     {
         $this->source_method = $source_method;
         $this->apiParas["source_method"] = $source_method;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.external.task.create";
     }
     public function check()     {          }}
