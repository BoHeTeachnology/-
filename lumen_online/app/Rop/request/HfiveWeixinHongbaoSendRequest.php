<?php
class HfiveWeixinHongbaoSendRequest
{
     private $apiParas = array();

     private $mch_billno;

     public function getMchBillno()
     {
         return $this->$mch_billno;
     }

     public function setMchBillno($mch_billno)
     {
         $this->mch_billno = $mch_billno;
         $this->apiParas["mch_billno"] = $mch_billno;
     }

     private $total_num;

     public function getTotalNum()
     {
         return $this->$total_num;
     }

     public function setTotalNum($total_num)
     {
         $this->total_num = $total_num;
         $this->apiParas["total_num"] = $total_num;
     }

     private $act_name;

     public function getActName()
     {
         return $this->$act_name;
     }

     public function setActName($act_name)
     {
         $this->act_name = $act_name;
         $this->apiParas["act_name"] = $act_name;
     }

     private $re_openid;

     public function getReOpenid()
     {
         return $this->$re_openid;
     }

     public function setReOpenid($re_openid)
     {
         $this->re_openid = $re_openid;
         $this->apiParas["re_openid"] = $re_openid;
     }

     private $weixin_id;

     public function getWeixinId()
     {
         return $this->$weixin_id;
     }

     public function setWeixinId($weixin_id)
     {
         $this->weixin_id = $weixin_id;
         $this->apiParas["weixin_id"] = $weixin_id;
     }

     private $wishing;

     public function getWishing()
     {
         return $this->$wishing;
     }

     public function setWishing($wishing)
     {
         $this->wishing = $wishing;
         $this->apiParas["wishing"] = $wishing;
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

     private $send_name;

     public function getSendName()
     {
         return $this->$send_name;
     }

     public function setSendName($send_name)
     {
         $this->send_name = $send_name;
         $this->apiParas["send_name"] = $send_name;
     }

     private $total_amount;

     public function getTotalAmount()
     {
         return $this->$total_amount;
     }

     public function setTotalAmount($total_amount)
     {
         $this->total_amount = $total_amount;
         $this->apiParas["total_amount"] = $total_amount;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weixin.hongbao.send";
     }
     public function check()     {          }}
