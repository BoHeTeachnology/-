<?php
class TlpayQtdetailGetRequest
{
     private $apiParas = array();

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

     private $start_day;

     public function getStartDay()
     {
         return $this->$start_day;
     }

     public function setStartDay($start_day)
     {
         $this->start_day = $start_day;
         $this->apiParas["start_day"] = $start_day;
     }

     private $type;

     public function getType()
     {
         return $this->$type;
     }

     public function setType($type)
     {
         $this->type = $type;
         $this->apiParas["type"] = $type;
     }

     private $query_sn;

     public function getQuerySn()
     {
         return $this->$query_sn;
     }

     public function setQuerySn($query_sn)
     {
         $this->query_sn = $query_sn;
         $this->apiParas["query_sn"] = $query_sn;
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

     private $status;

     public function getStatus()
     {
         return $this->$status;
     }

     public function setStatus($status)
     {
         $this->status = $status;
         $this->apiParas["status"] = $status;
     }

     private $end_day;

     public function getEndDay()
     {
         return $this->$end_day;
     }

     public function setEndDay($end_day)
     {
         $this->end_day = $end_day;
         $this->apiParas["end_day"] = $end_day;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.tlpay.qtdetail.get";
     }
     public function check()     {          }}
