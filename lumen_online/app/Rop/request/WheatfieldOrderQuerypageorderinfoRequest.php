<?php
class WheatfieldOrderQuerypageorderinfoRequest
{
     private $apiParas = array();

     private $userorderid;

     public function getUserorderid()
     {
         return $this->$userorderid;
     }

     public function setUserorderid($userorderid)
     {
         $this->userorderid = $userorderid;
         $this->apiParas["userorderid"] = $userorderid;
     }

     private $userid;

     public function getUserid()
     {
         return $this->$userid;
     }

     public function setUserid($userid)
     {
         $this->userid = $userid;
         $this->apiParas["userid"] = $userid;
     }

     private $updatetimestart;

     public function getUpdatetimestart()
     {
         return $this->$updatetimestart;
     }

     public function setUpdatetimestart($updatetimestart)
     {
         $this->updatetimestart = $updatetimestart;
         $this->apiParas["updatetimestart"] = $updatetimestart;
     }

     private $maxresult;

     public function getMaxresult()
     {
         return $this->$maxresult;
     }

     public function setMaxresult($maxresult)
     {
         $this->maxresult = $maxresult;
         $this->apiParas["maxresult"] = $maxresult;
     }

     private $updatetimeend;

     public function getUpdatetimeend()
     {
         return $this->$updatetimeend;
     }

     public function setUpdatetimeend($updatetimeend)
     {
         $this->updatetimeend = $updatetimeend;
         $this->apiParas["updatetimeend"] = $updatetimeend;
     }

     private $productid;

     public function getProductid()
     {
         return $this->$productid;
     }

     public function setProductid($productid)
     {
         $this->productid = $productid;
         $this->apiParas["productid"] = $productid;
     }

     private $rootinstcd;

     public function getRootinstcd()
     {
         return $this->$rootinstcd;
     }

     public function setRootinstcd($rootinstcd)
     {
         $this->rootinstcd = $rootinstcd;
         $this->apiParas["rootinstcd"] = $rootinstcd;
     }

     private $orderdateend;

     public function getOrderdateend()
     {
         return $this->$orderdateend;
     }

     public function setOrderdateend($orderdateend)
     {
         $this->orderdateend = $orderdateend;
         $this->apiParas["orderdateend"] = $orderdateend;
     }

     private $orderdatestart;

     public function getOrderdatestart()
     {
         return $this->$orderdatestart;
     }

     public function setOrderdatestart($orderdatestart)
     {
         $this->orderdatestart = $orderdatestart;
         $this->apiParas["orderdatestart"] = $orderdatestart;
     }

     private $ordertypeid;

     public function getOrdertypeid()
     {
         return $this->$ordertypeid;
     }

     public function setOrdertypeid($ordertypeid)
     {
         $this->ordertypeid = $ordertypeid;
         $this->apiParas["ordertypeid"] = $ordertypeid;
     }

     private $currentpage;

     public function getCurrentpage()
     {
         return $this->$currentpage;
     }

     public function setCurrentpage($currentpage)
     {
         $this->currentpage = $currentpage;
         $this->apiParas["currentpage"] = $currentpage;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.order.querypageorderinfo";
     }
     public function check()     {          }}
