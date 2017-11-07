<?php
class HoneycombEnterpriseblacklistGetRequest
{
     private $apiParas = array();

     private $gongsimingcheng;

     public function getGongsimingcheng()
     {
         return $this->$gongsimingcheng;
     }

     public function setGongsimingcheng($gongsimingcheng)
     {
         $this->gongsimingcheng = $gongsimingcheng;
         $this->apiParas["gongsimingcheng"] = $gongsimingcheng;
     }

     private $gongshangzhucehao;

     public function getGongshangzhucehao()
     {
         return $this->$gongshangzhucehao;
     }

     public function setGongshangzhucehao($gongshangzhucehao)
     {
         $this->gongshangzhucehao = $gongshangzhucehao;
         $this->apiParas["gongshangzhucehao"] = $gongshangzhucehao;
     }

     private $zuzhijigoudaima;

     public function getZuzhijigoudaima()
     {
         return $this->$zuzhijigoudaima;
     }

     public function setZuzhijigoudaima($zuzhijigoudaima)
     {
         $this->zuzhijigoudaima = $zuzhijigoudaima;
         $this->apiParas["zuzhijigoudaima"] = $zuzhijigoudaima;
     }

     private $tongyixingyongdaima;

     public function getTongyixingyongdaima()
     {
         return $this->$tongyixingyongdaima;
     }

     public function setTongyixingyongdaima($tongyixingyongdaima)
     {
         $this->tongyixingyongdaima = $tongyixingyongdaima;
         $this->apiParas["tongyixingyongdaima"] = $tongyixingyongdaima;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.honeycomb.enterpriseblacklist.get";
     }
     public function check()     {          }}
