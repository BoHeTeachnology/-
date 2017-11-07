<?php
class WheatfieldGaterouterVerifycodeResendRequest
{
     private $apiParas = array();

     private $org_no;

     public function getOrgNo()
     {
         return $this->$org_no;
     }

     public function setOrgNo($org_no)
     {
         $this->org_no = $org_no;
         $this->apiParas["org_no"] = $org_no;
     }

     private $channel_no;

     public function getChannelNo()
     {
         return $this->$channel_no;
     }

     public function setChannelNo($channel_no)
     {
         $this->channel_no = $channel_no;
         $this->apiParas["channel_no"] = $channel_no;
     }

     private $busi_code;

     public function getBusiCode()
     {
         return $this->$busi_code;
     }

     public function setBusiCode($busi_code)
     {
         $this->busi_code = $busi_code;
         $this->apiParas["busi_code"] = $busi_code;
     }

     private $trans_code;

     public function getTransCode()
     {
         return $this->$trans_code;
     }

     public function setTransCode($trans_code)
     {
         $this->trans_code = $trans_code;
         $this->apiParas["trans_code"] = $trans_code;
     }

     private $gateway_trans_no;

     public function getGatewayTransNo()
     {
         return $this->$gateway_trans_no;
     }

     public function setGatewayTransNo($gateway_trans_no)
     {
         $this->gateway_trans_no = $gateway_trans_no;
         $this->apiParas["gateway_trans_no"] = $gateway_trans_no;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.gaterouter.verifycode.resend";
     }
     public function check()     {          }}
