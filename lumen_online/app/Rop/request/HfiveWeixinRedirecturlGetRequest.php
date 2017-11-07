<?php
class HfiveWeixinRedirecturlGetRequest
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

     private $view_url;

     public function getViewUrl()
     {
         return $this->$view_url;
     }

     public function setViewUrl($view_url)
     {
         $this->view_url = $view_url;
         $this->apiParas["view_url"] = $view_url;
     }

     private $account;

     public function getAccount()
     {
         return $this->$account;
     }

     public function setAccount($account)
     {
         $this->account = $account;
         $this->apiParas["account"] = $account;
     }

     private $scope;

     public function getScope()
     {
         return $this->$scope;
     }

     public function setScope($scope)
     {
         $this->scope = $scope;
         $this->apiParas["scope"] = $scope;
     }

     private $remark;

     public function getRemark()
     {
         return $this->$remark;
     }

     public function setRemark($remark)
     {
         $this->remark = $remark;
         $this->apiParas["remark"] = $remark;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weixin.redirecturl.get";
     }
     public function check()     {          }}
