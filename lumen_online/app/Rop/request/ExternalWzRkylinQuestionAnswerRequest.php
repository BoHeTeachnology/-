<?php
//提交调查问卷回答的结果
class ExternalWzRkylinQuestionAnswerRequest
{
    private $company_key;
    
    private $open_id;
    
    private $cate_id;
    
    private $answer_content;
    
    private $apiParas = array();

    public function setCompanyKey($company_key)
    {
        $this->company_key = $company_key;
        $this->apiParas["company_key"] = $company_key;
    }

    public function getCompanyKey()
    {
        return $this->$company_key;
    }
    
     public function setOpenId($open_id)
    {
        $this->open_id = $open_id;
        $this->apiParas["open_id"] = $open_id;
    }

    public function getOpenId()
    {
        return $this->$open_id;
    }
    
    public function setCateId($cate_id)
    {
        $this->cate_id = $cate_id;
        $this->apiParas["cate_id"] = $cate_id;
    }

    public function getCateId()
    {
        return $this->$cate_id;
    }

    public function setAnswerContent($answer_content)
    {
        $this->answer_content = $answer_content;
        $this->apiParas["answer_content"] = $answer_content;
    }

    public function getAnswerContent()
    {
        return $this->$answer_content;
    }
    
    public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.weizhan.rkylin.question.answer";
    }

    public function check()
    {
        
    }
}

    