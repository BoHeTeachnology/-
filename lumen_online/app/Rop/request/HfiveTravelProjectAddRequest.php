<?php
class HfiveTravelProjectAddRequest
{
     private $apiParas = array();

     private $bw_lbt_c;

     public function getBwLbtC()
     {
         return $this->$bw_lbt_c;
     }

     public function setBwLbtC($bw_lbt_c)
     {
         $this->bw_lbt_c = $bw_lbt_c;
         $this->apiParas["bw_lbt_c"] = $bw_lbt_c;
     }

     private $bw_name;

     public function getBwName()
     {
         return $this->$bw_name;
     }

     public function setBwName($bw_name)
     {
         $this->bw_name = $bw_name;
         $this->apiParas["bw_name"] = $bw_name;
     }

     private $bw_price;

     public function getBwPrice()
     {
         return $this->$bw_price;
     }

     public function setBwPrice($bw_price)
     {
         $this->bw_price = $bw_price;
         $this->apiParas["bw_price"] = $bw_price;
     }

     private $bw_bl_jq_code;

     public function getBwBlJqCode()
     {
         return $this->$bw_bl_jq_code;
     }

     public function setBwBlJqCode($bw_bl_jq_code)
     {
         $this->bw_bl_jq_code = $bw_bl_jq_code;
         $this->apiParas["bw_bl_jq_code"] = $bw_bl_jq_code;
     }

     private $bw_start_dt;

     public function getBwStartDt()
     {
         return $this->$bw_start_dt;
     }

     public function setBwStartDt($bw_start_dt)
     {
         $this->bw_start_dt = $bw_start_dt;
         $this->apiParas["bw_start_dt"] = $bw_start_dt;
     }

     private $bw_pers_max;

     public function getBwPersMax()
     {
         return $this->$bw_pers_max;
     }

     public function setBwPersMax($bw_pers_max)
     {
         $this->bw_pers_max = $bw_pers_max;
         $this->apiParas["bw_pers_max"] = $bw_pers_max;
     }

     private $bw_lbt_d;

     public function getBwLbtD()
     {
         return $this->$bw_lbt_d;
     }

     public function setBwLbtD($bw_lbt_d)
     {
         $this->bw_lbt_d = $bw_lbt_d;
         $this->apiParas["bw_lbt_d"] = $bw_lbt_d;
     }

     private $bw_end_dt;

     public function getBwEndDt()
     {
         return $this->$bw_end_dt;
     }

     public function setBwEndDt($bw_end_dt)
     {
         $this->bw_end_dt = $bw_end_dt;
         $this->apiParas["bw_end_dt"] = $bw_end_dt;
     }

     private $bw_lbt_e;

     public function getBwLbtE()
     {
         return $this->$bw_lbt_e;
     }

     public function setBwLbtE($bw_lbt_e)
     {
         $this->bw_lbt_e = $bw_lbt_e;
         $this->apiParas["bw_lbt_e"] = $bw_lbt_e;
     }

     private $bw_lbt_b;

     public function getBwLbtB()
     {
         return $this->$bw_lbt_b;
     }

     public function setBwLbtB($bw_lbt_b)
     {
         $this->bw_lbt_b = $bw_lbt_b;
         $this->apiParas["bw_lbt_b"] = $bw_lbt_b;
     }

     private $bw_desc;

     public function getBwDesc()
     {
         return $this->$bw_desc;
     }

     public function setBwDesc($bw_desc)
     {
         $this->bw_desc = $bw_desc;
         $this->apiParas["bw_desc"] = $bw_desc;
     }

     private $bw_lbt_a;

     public function getBwLbtA()
     {
         return $this->$bw_lbt_a;
     }

     public function setBwLbtA($bw_lbt_a)
     {
         $this->bw_lbt_a = $bw_lbt_a;
         $this->apiParas["bw_lbt_a"] = $bw_lbt_a;
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

     private $bw_need_pers;

     public function getBwNeedPers()
     {
         return $this->$bw_need_pers;
     }

     public function setBwNeedPers($bw_need_pers)
     {
         $this->bw_need_pers = $bw_need_pers;
         $this->apiParas["bw_need_pers"] = $bw_need_pers;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.travel.project.add";
     }
     public function check()     {          }}
