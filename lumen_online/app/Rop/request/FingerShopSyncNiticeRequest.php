<?php
class FingerShopSyncNiticeRequest
{
     private $apiParas = array();

     private $entity;

     public function getEntity()
     {
         return $this->$entity;
     }

     public function setEntity($entity)
     {
         $this->entity = $entity;
         $this->apiParas["entity"] = $entity;
     }

     private $operation;

     public function getOperation()
     {
         return $this->$operation;
     }

     public function setOperation($operation)
     {
         $this->operation = $operation;
         $this->apiParas["operation"] = $operation;
     }

     private $target_ids;

     public function getTargetIds()
     {
         return $this->$target_ids;
     }

     public function setTargetIds($target_ids)
     {
         $this->target_ids = $target_ids;
         $this->apiParas["target_ids"] = $target_ids;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.finger.shop.sync.nitice";
     }
     public function check()     {          }}
