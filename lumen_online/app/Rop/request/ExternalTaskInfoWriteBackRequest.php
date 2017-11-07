<?php
class ExternalTaskInfoWriteBackRequest
{
     private $apiParas = array();

     private $result;

     public function getResult()
     {
         return $this->$result;
     }

     public function setResult($result)
     {
         $this->result = $result;
         $this->apiParas["result"] = $result;
     }

     private $task_code;

     public function getTaskCode()
     {
         return $this->$task_code;
     }

     public function setTaskCode($task_code)
     {
         $this->task_code = $task_code;
         $this->apiParas["task_code"] = $task_code;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.external.task.info.write.back";
     }
     public function check()     {          }}
