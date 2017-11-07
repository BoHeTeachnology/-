<?php
class FengnianAccountSafequestionCheckRequest
{
     private $apiParas = array();

     private $answer;

     public function getAnswer()
     {
         return $this->$answer;
     }

     public function setAnswer($answer)
     {
         $this->answer = $answer;
         $this->apiParas["answer"] = $answer;
     }

     private $question;

     public function getQuestion()
     {
         return $this->$question;
     }

     public function setQuestion($question)
     {
         $this->question = $question;
         $this->apiParas["question"] = $question;
     }

     private $account_name;

     public function getAccountName()
     {
         return $this->$account_name;
     }

     public function setAccountName($account_name)
     {
         $this->account_name = $account_name;
         $this->apiParas["account_name"] = $account_name;
     }

     private $company_key;

     public function getCompanyKey()
     {
         return $this->$company_key;
     }

     public function setCompanyKey($company_key)
     {
         $this->company_key = $company_key;
         $this->apiParas["company_key"] = $company_key;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.account.safequestion.check";
     }
     public function check()     {          }}
