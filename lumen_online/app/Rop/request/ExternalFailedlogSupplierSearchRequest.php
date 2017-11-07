<?php
class ExternalFailedlogSupplierSearchRequest
{
     private $apiParas = array();

     private $appkey;

     public function getAppkey()
     {
         return $this->$appkey;
     }

     public function setAppkey($appkey)
     {
         $this->appkey = $appkey;
         $this->apiParas["appkey"] = $appkey;
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

     private $begintime;

     public function getBegintime()
     {
         return $this->$begintime;
     }

     public function setBegintime($begintime)
     {
         $this->begintime = $begintime;
         $this->apiParas["begintime"] = $begintime;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.external.failedlog.supplier.search";
     }
     public function check()     {          }}
