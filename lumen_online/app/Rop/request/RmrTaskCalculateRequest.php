<?php
class RmrTaskCalculateRequest
{
     private $apiParas = array();

     private $parameter;

     public function getParameter()
     {
         return $this->$parameter;
     }

     public function setParameter($parameter)
     {
         $this->parameter = $parameter;
         $this->apiParas["parameter"] = $parameter;
     }

     private $task_id;

     public function getTaskId()
     {
         return $this->$task_id;
     }

     public function setTaskId($task_id)
     {
         $this->task_id = $task_id;
         $this->apiParas["task_id"] = $task_id;
     }

     private $user_account;

     public function getUserAccount()
     {
         return $this->$user_account;
     }

     public function setUserAccount($user_account)
     {
         $this->user_account = $user_account;
         $this->apiParas["user_account"] = $user_account;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rmr.task.calculate";
     }
     public function check()     {          }}
