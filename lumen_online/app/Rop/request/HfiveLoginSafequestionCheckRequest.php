<?php
class HfiveLoginSafequestionCheckRequest
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
         return "ruixue.hfive.login.safequestion.check";
     }
     public function check()     {          }}
