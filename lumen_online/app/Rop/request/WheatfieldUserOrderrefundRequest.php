<?php
class WheatfieldUserOrderrefundRequest
{
     private $apiParas = array();

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

     private $profit;

     public function getProfit()
     {
         return $this->$profit;
     }

     public function setProfit($profit)
     {
         $this->profit = $profit;
         $this->apiParas["profit"] = $profit;
     }

     private $errorcode;

     public function getErrorcode()
     {
         return $this->$errorcode;
     }

     public function setErrorcode($errorcode)
     {
         $this->errorcode = $errorcode;
         $this->apiParas["errorcode"] = $errorcode;
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

     private $intermerchantcode;

     public function getIntermerchantcode()
     {
         return $this->$intermerchantcode;
     }

     public function setIntermerchantcode($intermerchantcode)
     {
         $this->intermerchantcode = $intermerchantcode;
         $this->apiParas["intermerchantcode"] = $intermerchantcode;
     }

     private $bankcode;

     public function getBankcode()
     {
         return $this->$bankcode;
     }

     public function setBankcode($bankcode)
     {
         $this->bankcode = $bankcode;
         $this->apiParas["bankcode"] = $bankcode;
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

     private $errormsg;

     public function getErrormsg()
     {
         return $this->$errormsg;
     }

     public function setErrormsg($errormsg)
     {
         $this->errormsg = $errormsg;
         $this->apiParas["errormsg"] = $errormsg;
     }

     private $busitypeid;

     public function getBusitypeid()
     {
         return $this->$busitypeid;
     }

     public function setBusitypeid($busitypeid)
     {
         $this->busitypeid = $busitypeid;
         $this->apiParas["busitypeid"] = $busitypeid;
     }

     private $merchantcode;

     public function getMerchantcode()
     {
         return $this->$merchantcode;
     }

     public function setMerchantcode($merchantcode)
     {
         $this->merchantcode = $merchantcode;
         $this->apiParas["merchantcode"] = $merchantcode;
     }

     private $useripaddress;

     public function getUseripaddress()
     {
         return $this->$useripaddress;
     }

     public function setUseripaddress($useripaddress)
     {
         $this->useripaddress = $useripaddress;
         $this->apiParas["useripaddress"] = $useripaddress;
     }

     private $userfee;

     public function getUserfee()
     {
         return $this->$userfee;
     }

     public function setUserfee($userfee)
     {
         $this->userfee = $userfee;
         $this->apiParas["userfee"] = $userfee;
     }

     private $orderamount;

     public function getOrderamount()
     {
         return $this->$orderamount;
     }

     public function setOrderamount($orderamount)
     {
         $this->orderamount = $orderamount;
         $this->apiParas["orderamount"] = $orderamount;
     }

     private $orderdate;

     public function getOrderdate()
     {
         return $this->$orderdate;
     }

     public function setOrderdate($orderdate)
     {
         $this->orderdate = $orderdate;
         $this->apiParas["orderdate"] = $orderdate;
     }

     private $feeamount;

     public function getFeeamount()
     {
         return $this->$feeamount;
     }

     public function setFeeamount($feeamount)
     {
         $this->feeamount = $feeamount;
         $this->apiParas["feeamount"] = $feeamount;
     }

     private $orderpackageno;

     public function getOrderpackageno()
     {
         return $this->$orderpackageno;
     }

     public function setOrderpackageno($orderpackageno)
     {
         $this->orderpackageno = $orderpackageno;
         $this->apiParas["orderpackageno"] = $orderpackageno;
     }

     private $referuserid;

     public function getReferuserid()
     {
         return $this->$referuserid;
     }

     public function setReferuserid($referuserid)
     {
         $this->referuserid = $referuserid;
         $this->apiParas["referuserid"] = $referuserid;
     }

     private $tradeflowno;

     public function getTradeflowno()
     {
         return $this->$tradeflowno;
     }

     public function setTradeflowno($tradeflowno)
     {
         $this->tradeflowno = $tradeflowno;
         $this->apiParas["tradeflowno"] = $tradeflowno;
     }

     private $amount;

     public function getAmount()
     {
         return $this->$amount;
     }

     public function setAmount($amount)
     {
         $this->amount = $amount;
         $this->apiParas["amount"] = $amount;
     }

     private $funccode;

     public function getFunccode()
     {
         return $this->$funccode;
     }

     public function setFunccode($funccode)
     {
         $this->funccode = $funccode;
         $this->apiParas["funccode"] = $funccode;
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

     private $ordercount;

     public function getOrdercount()
     {
         return $this->$ordercount;
     }

     public function setOrdercount($ordercount)
     {
         $this->ordercount = $ordercount;
         $this->apiParas["ordercount"] = $ordercount;
     }

     private $paychannelid;

     public function getPaychannelid()
     {
         return $this->$paychannelid;
     }

     public function setPaychannelid($paychannelid)
     {
         $this->paychannelid = $paychannelid;
         $this->apiParas["paychannelid"] = $paychannelid;
     }

     private $requesttime;

     public function getRequesttime()
     {
         return $this->$requesttime;
     }

     public function setRequesttime($requesttime)
     {
         $this->requesttime = $requesttime;
         $this->apiParas["requesttime"] = $requesttime;
     }

     private $requestno;

     public function getRequestno()
     {
         return $this->$requestno;
     }

     public function setRequestno($requestno)
     {
         $this->requestno = $requestno;
         $this->apiParas["requestno"] = $requestno;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.user.orderrefund";
     }
     public function check()     {          }}
