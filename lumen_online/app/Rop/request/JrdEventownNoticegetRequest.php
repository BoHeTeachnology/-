<?php
class JrdEventownNoticegetRequest
{
     private $apiParas = array();

     private $loantime;

     public function getLoantime()
     {
         return $this->$loantime;
     }

     public function setLoantime($loantime)
     {
         $this->loantime = $loantime;
         $this->apiParas["loantime"] = $loantime;
     }

     private $intereststartdate;

     public function getIntereststartdate()
     {
         return $this->$intereststartdate;
     }

     public function setIntereststartdate($intereststartdate)
     {
         $this->intereststartdate = $intereststartdate;
         $this->apiParas["intereststartdate"] = $intereststartdate;
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

     private $loanamount;

     public function getLoanamount()
     {
         return $this->$loanamount;
     }

     public function setLoanamount($loanamount)
     {
         $this->loanamount = $loanamount;
         $this->apiParas["loanamount"] = $loanamount;
     }

     private $miceid;

     public function getMiceid()
     {
         return $this->$miceid;
     }

     public function setMiceid($miceid)
     {
         $this->miceid = $miceid;
         $this->apiParas["miceid"] = $miceid;
     }

     private $orderno;

     public function getOrderno()
     {
         return $this->$orderno;
     }

     public function setOrderno($orderno)
     {
         $this->orderno = $orderno;
         $this->apiParas["orderno"] = $orderno;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jrd.eventown.noticeget";
     }
     public function check()     {          }}
