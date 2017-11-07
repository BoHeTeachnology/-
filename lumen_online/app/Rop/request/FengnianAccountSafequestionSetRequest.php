<?php
class FengnianAccountSafequestionSetRequest
{
     private $apiParas = array();

     private $question_b;

     public function getQuestionB()
     {
         return $this->$question_b;
     }

     public function setQuestionB($question_b)
     {
         $this->question_b = $question_b;
         $this->apiParas["question_b"] = $question_b;
     }

     private $answer_a;

     public function getAnswerA()
     {
         return $this->$answer_a;
     }

     public function setAnswerA($answer_a)
     {
         $this->answer_a = $answer_a;
         $this->apiParas["answer_a"] = $answer_a;
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

     private $answer_b;

     public function getAnswerB()
     {
         return $this->$answer_b;
     }

     public function setAnswerB($answer_b)
     {
         $this->answer_b = $answer_b;
         $this->apiParas["answer_b"] = $answer_b;
     }

     private $question_a;

     public function getQuestionA()
     {
         return $this->$question_a;
     }

     public function setQuestionA($question_a)
     {
         $this->question_a = $question_a;
         $this->apiParas["question_a"] = $question_a;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.account.safequestion.set";
     }
     public function check()     {          }}
