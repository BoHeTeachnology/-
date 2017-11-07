<?php
class ExternalTaskInfoGetRequest
{
     private $apiParas = array();

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
         return "ruixue.external.task.info.get";
     }
     public function check()     {          }}
