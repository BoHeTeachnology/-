<?php
class FengnianLoginSafequestionCheckRequest
{
     private $apiParas = array();

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

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.login.safequestion.check";
     }
     public function check()     {          }}
