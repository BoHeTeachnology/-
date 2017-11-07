<?php
class HfiveLoginSafequestionSetRequest
{
     private $apiParas = array();

     private $answera;

     public function getAnswera()
     {
         return $this->$answera;
     }

     public function setAnswera($answera)
     {
         $this->answera = $answera;
         $this->apiParas["answera"] = $answera;
     }

     private $questionb;

     public function getQuestionb()
     {
         return $this->$questionb;
     }

     public function setQuestionb($questionb)
     {
         $this->questionb = $questionb;
         $this->apiParas["questionb"] = $questionb;
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

     private $answerb;

     public function getAnswerb()
     {
         return $this->$answerb;
     }

     public function setAnswerb($answerb)
     {
         $this->answerb = $answerb;
         $this->apiParas["answerb"] = $answerb;
     }

     private $questiona;

     public function getQuestiona()
     {
         return $this->$questiona;
     }

     public function setQuestiona($questiona)
     {
         $this->questiona = $questiona;
         $this->apiParas["questiona"] = $questiona;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.login.safequestion.set";
     }
     public function check()     {          }}
