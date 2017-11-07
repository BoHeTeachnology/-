<?php
class TlpayBatchValidateRequest
{
     private $apiParas = array();

     private $user_name;

     public function getUserName()
     {
         return $this->$user_name;
     }

     public function setUserName($user_name)
     {
         $this->user_name = $user_name;
         $this->apiParas["user_name"] = $user_name;
     }

     private $merchant_id;

     public function getMerchantId()
     {
         return $this->$merchant_id;
     }

     public function setMerchantId($merchant_id)
     {
         $this->merchant_id = $merchant_id;
         $this->apiParas["merchant_id"] = $merchant_id;
     }

     private $req_sn;

     public function getReqSn()
     {
         return $this->$req_sn;
     }

     public function setReqSn($req_sn)
     {
         $this->req_sn = $req_sn;
         $this->apiParas["req_sn"] = $req_sn;
     }

     private $vbdetail;

     public function getVbdetail()
     {
         return $this->$vbdetail;
     }

     public function setVbdetail($vbdetail)
     {
         $this->vbdetail = $vbdetail;
         $this->apiParas["vbdetail"] = $vbdetail;
     }

     private $total_sum;

     public function getTotalSum()
     {
         return $this->$total_sum;
     }

     public function setTotalSum($total_sum)
     {
         $this->total_sum = $total_sum;
         $this->apiParas["total_sum"] = $total_sum;
     }

     private $submit_time;

     public function getSubmitTime()
     {
         return $this->$submit_time;
     }

     public function setSubmitTime($submit_time)
     {
         $this->submit_time = $submit_time;
         $this->apiParas["submit_time"] = $submit_time;
     }

     private $total_item;

     public function getTotalItem()
     {
         return $this->$total_item;
     }

     public function setTotalItem($total_item)
     {
         $this->total_item = $total_item;
         $this->apiParas["total_item"] = $total_item;
     }

     private $user_pass;

     public function getUserPass()
     {
         return $this->$user_pass;
     }

     public function setUserPass($user_pass)
     {
         $this->user_pass = $user_pass;
         $this->apiParas["user_pass"] = $user_pass;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.tlpay.batch.validate";
     }
     public function check()     {          }}
