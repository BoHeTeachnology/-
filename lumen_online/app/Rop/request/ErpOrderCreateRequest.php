<?php
class ErpOrderCreateRequest
{
     private $apiParas = array();

     private $invoice_title;

     public function getInvoiceTitle()
     {
         return $this->$invoice_title;
     }

     public function setInvoiceTitle($invoice_title)
     {
         $this->invoice_title = $invoice_title;
         $this->apiParas["invoice_title"] = $invoice_title;
     }

     private $sales_remark;

     public function getSalesRemark()
     {
         return $this->$sales_remark;
     }

     public function setSalesRemark($sales_remark)
     {
         $this->sales_remark = $sales_remark;
         $this->apiParas["sales_remark"] = $sales_remark;
     }

     private $ticket_money;

     public function getTicketMoney()
     {
         return $this->$ticket_money;
     }

     public function setTicketMoney($ticket_money)
     {
         $this->ticket_money = $ticket_money;
         $this->apiParas["ticket_money"] = $ticket_money;
     }

     private $created_time;

     public function getCreatedTime()
     {
         return $this->$created_time;
     }

     public function setCreatedTime($created_time)
     {
         $this->created_time = $created_time;
         $this->apiParas["created_time"] = $created_time;
     }

     private $point_money;

     public function getPointMoney()
     {
         return $this->$point_money;
     }

     public function setPointMoney($point_money)
     {
         $this->point_money = $point_money;
         $this->apiParas["point_money"] = $point_money;
     }

     private $invoice_yn;

     public function getInvoiceYn()
     {
         return $this->$invoice_yn;
     }

     public function setInvoiceYn($invoice_yn)
     {
         $this->invoice_yn = $invoice_yn;
         $this->apiParas["invoice_yn"] = $invoice_yn;
     }

     private $cons_tel;

     public function getConsTel()
     {
         return $this->$cons_tel;
     }

     public function setConsTel($cons_tel)
     {
         $this->cons_tel = $cons_tel;
         $this->apiParas["cons_tel"] = $cons_tel;
     }

     private $trade_money;

     public function getTradeMoney()
     {
         return $this->$trade_money;
     }

     public function setTradeMoney($trade_money)
     {
         $this->trade_money = $trade_money;
         $this->apiParas["trade_money"] = $trade_money;
     }

     private $lgst_fee;

     public function getLgstFee()
     {
         return $this->$lgst_fee;
     }

     public function setLgstFee($lgst_fee)
     {
         $this->lgst_fee = $lgst_fee;
         $this->apiParas["lgst_fee"] = $lgst_fee;
     }

     private $cons_mobile;

     public function getConsMobile()
     {
         return $this->$cons_mobile;
     }

     public function setConsMobile($cons_mobile)
     {
         $this->cons_mobile = $cons_mobile;
         $this->apiParas["cons_mobile"] = $cons_mobile;
     }

     private $cust_code;

     public function getCustCode()
     {
         return $this->$cust_code;
     }

     public function setCustCode($cust_code)
     {
         $this->cust_code = $cust_code;
         $this->apiParas["cust_code"] = $cust_code;
     }

     private $sku_details;

     public function getSkuDetails()
     {
         return $this->$sku_details;
     }

     public function setSkuDetails($sku_details)
     {
         $this->sku_details = $sku_details;
         $this->apiParas["sku_details"] = $sku_details;
     }

     private $trade_stus;

     public function getTradeStus()
     {
         return $this->$trade_stus;
     }

     public function setTradeStus($trade_stus)
     {
         $this->trade_stus = $trade_stus;
         $this->apiParas["trade_stus"] = $trade_stus;
     }

     private $cons_addr;

     public function getConsAddr()
     {
         return $this->$cons_addr;
     }

     public function setConsAddr($cons_addr)
     {
         $this->cons_addr = $cons_addr;
         $this->apiParas["cons_addr"] = $cons_addr;
     }

     private $trade_disc;

     public function getTradeDisc()
     {
         return $this->$trade_disc;
     }

     public function setTradeDisc($trade_disc)
     {
         $this->trade_disc = $trade_disc;
         $this->apiParas["trade_disc"] = $trade_disc;
     }

     private $buyer_payment;

     public function getBuyerPayment()
     {
         return $this->$buyer_payment;
     }

     public function setBuyerPayment($buyer_payment)
     {
         $this->buyer_payment = $buyer_payment;
         $this->apiParas["buyer_payment"] = $buyer_payment;
     }

     private $seller_account;

     public function getSellerAccount()
     {
         return $this->$seller_account;
     }

     public function setSellerAccount($seller_account)
     {
         $this->seller_account = $seller_account;
         $this->apiParas["seller_account"] = $seller_account;
     }

     private $outer_sour;

     public function getOuterSour()
     {
         return $this->$outer_sour;
     }

     public function setOuterSour($outer_sour)
     {
         $this->outer_sour = $outer_sour;
         $this->apiParas["outer_sour"] = $outer_sour;
     }

     private $paid_date;

     public function getPaidDate()
     {
         return $this->$paid_date;
     }

     public function setPaidDate($paid_date)
     {
         $this->paid_date = $paid_date;
         $this->apiParas["paid_date"] = $paid_date;
     }

     private $serv_fee;

     public function getServFee()
     {
         return $this->$serv_fee;
     }

     public function setServFee($serv_fee)
     {
         $this->serv_fee = $serv_fee;
         $this->apiParas["serv_fee"] = $serv_fee;
     }

     private $trade_type;

     public function getTradeType()
     {
         return $this->$trade_type;
     }

     public function setTradeType($trade_type)
     {
         $this->trade_type = $trade_type;
         $this->apiParas["trade_type"] = $trade_type;
     }

     private $pay_type;

     public function getPayType()
     {
         return $this->$pay_type;
     }

     public function setPayType($pay_type)
     {
         $this->pay_type = $pay_type;
         $this->apiParas["pay_type"] = $pay_type;
     }

     private $paid_fee;

     public function getPaidFee()
     {
         return $this->$paid_fee;
     }

     public function setPaidFee($paid_fee)
     {
         $this->paid_fee = $paid_fee;
         $this->apiParas["paid_fee"] = $paid_fee;
     }

     private $cons;

     public function getCons()
     {
         return $this->$cons;
     }

     public function setCons($cons)
     {
         $this->cons = $cons;
         $this->apiParas["cons"] = $cons;
     }

     private $trade_code;

     public function getTradeCode()
     {
         return $this->$trade_code;
     }

     public function setTradeCode($trade_code)
     {
         $this->trade_code = $trade_code;
         $this->apiParas["trade_code"] = $trade_code;
     }

     private $cust_remark;

     public function getCustRemark()
     {
         return $this->$cust_remark;
     }

     public function setCustRemark($cust_remark)
     {
         $this->cust_remark = $cust_remark;
         $this->apiParas["cust_remark"] = $cust_remark;
     }

     private $end_time;

     public function getEndTime()
     {
         return $this->$end_time;
     }

     public function setEndTime($end_time)
     {
         $this->end_time = $end_time;
         $this->apiParas["end_time"] = $end_time;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.erp.order.create";
     }
     public function check()     {          }}
