<?php
class FengnianAhpFinanceExpenseamountQueryRequest
{
     private $apiParas = array();

     private $date;

     public function getDate()
     {
         return $this->$date;
     }

     public function setDate($date)
     {
         $this->date = $date;
         $this->apiParas["date"] = $date;
     }

     private $user_id;

     public function getUserId()
     {
         return $this->$user_id;
     }

     public function setUserId($user_id)
     {
         $this->user_id = $user_id;
         $this->apiParas["user_id"] = $user_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.ahp.finance.expenseamount.query";
     }
     public function check()     {          }}
