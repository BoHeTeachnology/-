<?php
class FengnianMobileHtmlGenerateRequest
{
     private $apiParas = array();

     private $tpl_id;

     public function getTplId()
     {
         return $this->$tpl_id;
     }

     public function setTplId($tpl_id)
     {
         $this->tpl_id = $tpl_id;
         $this->apiParas["tpl_id"] = $tpl_id;
     }

     private $tpl_classfiy;

     public function getTplClassfiy()
     {
         return $this->$tpl_classfiy;
     }

     public function setTplClassfiy($tpl_classfiy)
     {
         $this->tpl_classfiy = $tpl_classfiy;
         $this->apiParas["tpl_classfiy"] = $tpl_classfiy;
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

     private $edit_url;

     public function getEditUrl()
     {
         return $this->$edit_url;
     }

     public function setEditUrl($edit_url)
     {
         $this->edit_url = $edit_url;
         $this->apiParas["edit_url"] = $edit_url;
     }

     private $url;

     public function getUrl()
     {
         return $this->$url;
     }

     public function setUrl($url)
     {
         $this->url = $url;
         $this->apiParas["url"] = $url;
     }

     private $add_url;

     public function getAddUrl()
     {
         return $this->$add_url;
     }

     public function setAddUrl($add_url)
     {
         $this->add_url = $add_url;
         $this->apiParas["add_url"] = $add_url;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.mobile.html.generate";
     }
     public function check()     {          }}
