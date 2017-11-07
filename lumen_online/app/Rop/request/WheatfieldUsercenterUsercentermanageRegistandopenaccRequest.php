<?php
class WheatfieldUsercenterUsercentermanageRegistandopenaccRequest
{
     private $apiParas = array();

     private $telnum;

     public function getTelnum()
     {
         return $this->$telnum;
     }

     public function setTelnum($telnum)
     {
         $this->telnum = $telnum;
         $this->apiParas["telnum"] = $telnum;
     }

     private $openid;

     public function getOpenid()
     {
         return $this->$openid;
     }

     public function setOpenid($openid)
     {
         $this->openid = $openid;
         $this->apiParas["openid"] = $openid;
     }

     private $orgid;

     public function getOrgid()
     {
         return $this->$orgid;
     }

     public function setOrgid($orgid)
     {
         $this->orgid = $orgid;
         $this->apiParas["orgid"] = $orgid;
     }

     private $certificatetype;

     public function getCertificatetype()
     {
         return $this->$certificatetype;
     }

     public function setCertificatetype($certificatetype)
     {
         $this->certificatetype = $certificatetype;
         $this->apiParas["certificatetype"] = $certificatetype;
     }

     private $publicnumberid;

     public function getPublicnumberid()
     {
         return $this->$publicnumberid;
     }

     public function setPublicnumberid($publicnumberid)
     {
         $this->publicnumberid = $publicnumberid;
         $this->apiParas["publicnumberid"] = $publicnumberid;
     }

     private $proid;

     public function getProid()
     {
         return $this->$proid;
     }

     public function setProid($proid)
     {
         $this->proid = $proid;
         $this->apiParas["proid"] = $proid;
     }

     private $certificatenumber;

     public function getCertificatenumber()
     {
         return $this->$certificatenumber;
     }

     public function setCertificatenumber($certificatenumber)
     {
         $this->certificatenumber = $certificatenumber;
         $this->apiParas["certificatenumber"] = $certificatenumber;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.usercenter.usercentermanage.registandopenacc";
     }
     public function check()     {          }}
