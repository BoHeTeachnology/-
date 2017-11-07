<?php
class TlpayQtdrspdetailGetRequest
{
     private $apiParas = array();

     private $starttime;

     public function getStarttime()
     {
         return $this->$starttime;
     }

     public function setStarttime($starttime)
     {
         $this->starttime = $starttime;
         $this->apiParas["starttime"] = $starttime;
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

     private $pgtag;

     public function getPgtag()
     {
         return $this->$pgtag;
     }

     public function setPgtag($pgtag)
     {
         $this->pgtag = $pgtag;
         $this->apiParas["pgtag"] = $pgtag;
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

     private $endtime;

     public function getEndtime()
     {
         return $this->$endtime;
     }

     public function setEndtime($endtime)
     {
         $this->endtime = $endtime;
         $this->apiParas["endtime"] = $endtime;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.tlpay.qtdrspdetail.get";
     }
     public function check()     {          }}
