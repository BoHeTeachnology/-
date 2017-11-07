<?php
class HfiveTravelViewspotAddRequest
{
     private $apiParas = array();

     private $jq_lbt_b;

     public function getJqLbtB()
     {
         return $this->$jq_lbt_b;
     }

     public function setJqLbtB($jq_lbt_b)
     {
         $this->jq_lbt_b = $jq_lbt_b;
         $this->apiParas["jq_lbt_b"] = $jq_lbt_b;
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

     private $jq_name;

     public function getJqName()
     {
         return $this->$jq_name;
     }

     public function setJqName($jq_name)
     {
         $this->jq_name = $jq_name;
         $this->apiParas["jq_name"] = $jq_name;
     }

     private $jq_lbt_a;

     public function getJqLbtA()
     {
         return $this->$jq_lbt_a;
     }

     public function setJqLbtA($jq_lbt_a)
     {
         $this->jq_lbt_a = $jq_lbt_a;
         $this->apiParas["jq_lbt_a"] = $jq_lbt_a;
     }

     private $jq_mail;

     public function getJqMail()
     {
         return $this->$jq_mail;
     }

     public function setJqMail($jq_mail)
     {
         $this->jq_mail = $jq_mail;
         $this->apiParas["jq_mail"] = $jq_mail;
     }

     private $jq_phone;

     public function getJqPhone()
     {
         return $this->$jq_phone;
     }

     public function setJqPhone($jq_phone)
     {
         $this->jq_phone = $jq_phone;
         $this->apiParas["jq_phone"] = $jq_phone;
     }

     private $jq_desc;

     public function getJqDesc()
     {
         return $this->$jq_desc;
     }

     public function setJqDesc($jq_desc)
     {
         $this->jq_desc = $jq_desc;
         $this->apiParas["jq_desc"] = $jq_desc;
     }

     private $jq_address;

     public function getJqAddress()
     {
         return $this->$jq_address;
     }

     public function setJqAddress($jq_address)
     {
         $this->jq_address = $jq_address;
         $this->apiParas["jq_address"] = $jq_address;
     }

     private $jq_bl_hd_code;

     public function getJqBlHdCode()
     {
         return $this->$jq_bl_hd_code;
     }

     public function setJqBlHdCode($jq_bl_hd_code)
     {
         $this->jq_bl_hd_code = $jq_bl_hd_code;
         $this->apiParas["jq_bl_hd_code"] = $jq_bl_hd_code;
     }

     private $jq_lbt_c;

     public function getJqLbtC()
     {
         return $this->$jq_lbt_c;
     }

     public function setJqLbtC($jq_lbt_c)
     {
         $this->jq_lbt_c = $jq_lbt_c;
         $this->apiParas["jq_lbt_c"] = $jq_lbt_c;
     }

     private $jq_dj_yn;

     public function getJqDjYn()
     {
         return $this->$jq_dj_yn;
     }

     public function setJqDjYn($jq_dj_yn)
     {
         $this->jq_dj_yn = $jq_dj_yn;
         $this->apiParas["jq_dj_yn"] = $jq_dj_yn;
     }

     private $jq_dlwz;

     public function getJqDlwz()
     {
         return $this->$jq_dlwz;
     }

     public function setJqDlwz($jq_dlwz)
     {
         $this->jq_dlwz = $jq_dlwz;
         $this->apiParas["jq_dlwz"] = $jq_dlwz;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.travel.viewspot.add";
     }
     public function check()     {          }}
