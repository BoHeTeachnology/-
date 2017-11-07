<?php
class FengnianQuestionCateAnswerSubmitRequest
{
     private $apiParas = array();

     private $open_id;

     public function getOpenId()
     {
         return $this->$open_id;
     }

     public function setOpenId($open_id)
     {
         $this->open_id = $open_id;
         $this->apiParas["open_id"] = $open_id;
     }

     private $question_str;

     public function getQuestionStr()
     {
         return $this->$question_str;
     }

     public function setQuestionStr($question_str)
     {
         $this->question_str = $question_str;
         $this->apiParas["question_str"] = $question_str;
     }

     private $cate_id;

     public function getCateId()
     {
         return $this->$cate_id;
     }

     public function setCateId($cate_id)
     {
         $this->cate_id = $cate_id;
         $this->apiParas["cate_id"] = $cate_id;
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
         return "ruixue.fengnian.question.cate.answer.submit";
     }
     public function check()     {          }}
