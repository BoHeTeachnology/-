<?php
//创建主订单
class ExternalWzOrderAddRequest
{
	private $company_key;
    
    private $pay_time;
    
    private $end_time;
    
    private $op_time;
	
	private $buy_userid;
    
    private $rece_user;
    
    private $rece_address;
    
    private $rece_tel;
	
	private $rece_phone;
    
    private $order_all_money;
    
    private $order_pay_money;
    
    private $order_discount_money;
	
	private $order_points;
    
    private $order_cash;
    
    private $order_coupon;
    
    private $receive_money;
	
	private $buy_remark;
    
    private $sell_remark;
    
    private $order_bill;
    
    private $delivery_money;
	
	private $delivery_no;
    
    private $delivery_compid;
    
    private $delivery_time;
    
    private $order_type_id;
	
	private $store_id;
    
    private $online_pay_status;
    
    private $pay_userid;
	
	private $buy_user;
    
    private $pay_user;
    
    private $buy_phone;
    
    private $pay_phone;
	
    private $rece_userid;
	
    private $apiParas = array();

    public function setCompanyKey($company_key)
    {
        $this->company_key = $company_key;
        $this->apiParas["company_key"] = $company_key;
    }

    public function getCompanyKey()
    {
        return $this->$company_key;
    }
	
	public function setPayTime($pay_time)
    {
        $this->pay_time = $pay_time;
        $this->apiParas["pay_time"] = $pay_time;
    }

    public function getPayTime()
    {
        return $this->$pay_time;
    }
	
	public function setEndTime($end_time)
    {
        $this->end_time = $end_time;
        $this->apiParas["end_time"] = $end_time;
    }

    public function getEndTime()
    {
        return $this->$end_time;
    }
	
	public function setOpTime($op_time)
    {
        $this->op_time = $op_time;
        $this->apiParas["op_time"] = $op_time;
    }

    public function getOpTime()
    {
        return $this->$op_time;
    }
	
	public function setBuyUserid($buy_userid)
    {
        $this->buy_userid = $buy_userid;
        $this->apiParas["buy_userid"] = $buy_userid;
    }

    public function getBuyUserid()
    {
        return $this->$buy_userid;
    }
	
	public function setReceUser($rece_user)
    {
        $this->rece_user = $rece_user;
        $this->apiParas["rece_user"] = $rece_user;
    }

    public function getReceUser()
    {
        return $this->$rece_user;
    }
	
	public function setReceAddress($rece_address)
    {
        $this->rece_address = $rece_address;
        $this->apiParas["rece_address"] = $rece_address;
    }

    public function getReceAddress()
    {
        return $this->$rece_address;
    }
	
	public function setReceTel($rece_tel)
    {
        $this->rece_tel = $rece_tel;
        $this->apiParas["rece_tel"] = $rece_tel;
    }

    public function getReceTel()
    {
        return $this->$rece_tel;
    }
	
	public function setRecePhone($rece_phone)
    {
        $this->rece_phone = $rece_phone;
        $this->apiParas["rece_phone"] = $rece_phone;
    }

    public function getRecePhone()
    {
        return $this->$rece_phone;
    }
	
	public function setOrderAllMoney($order_all_money)
    {
        $this->order_all_money = $order_all_money;
        $this->apiParas["order_all_money"] = $order_all_money;
    }

    public function getOrderAllMoney()
    {
        return $this->$order_all_money;
    }
	
	public function setOrderPayMoney($order_pay_money)
    {
        $this->order_pay_money = $order_pay_money;
        $this->apiParas["order_pay_money"] = $order_pay_money;
    }

    public function getOrderPayMoney()
    {
        return $this->$order_pay_money;
    }
	
	public function setOrderDiscountMoney($order_discount_money)
    {
        $this->order_discount_money = $order_discount_money;
        $this->apiParas["order_discount_money"] = $order_discount_money;
    }

    public function getOrderDiscountMoney()
    {
        return $this->$order_discount_money;
    }
	
	public function setOrderPoints($order_points)
    {
        $this->order_points = $order_points;
        $this->apiParas["order_points"] = $order_points;
    }

    public function getOrderPoints()
    {
        return $this->$order_points;
    }
	
	public function setOrderCash($order_cash)
    {
        $this->order_cash = $order_cash;
        $this->apiParas["order_cash"] = $order_cash;
    }

    public function getOrderCash()
    {
        return $this->$order_cash;
    }
		
	public function setOrderCoupon($order_coupon)
    {
        $this->order_coupon = $order_coupon;
        $this->apiParas["order_coupon"] = $order_coupon;
    }

    public function getOrderCoupon()
    {
        return $this->$order_coupon;
    }
	
	public function setReceiveMoney($receive_money)
    {
        $this->receive_money = $receive_money;
        $this->apiParas["receive_money"] = $receive_money;
    }

    public function getReceiveMoney()
    {
        return $this->$receive_money;
    }
		
	public function setBuyRemark($buy_remark)
    {
        $this->buy_remark = $buy_remark;
        $this->apiParas["buy_remark"] = $buy_remark;
    }

    public function getBuyRemark()
    {
        return $this->$buy_remark;
    }
	
	public function setSellRemark($sell_remark)
    {
        $this->sell_remark = $sell_remark;
        $this->apiParas["sell_remark"] = $sell_remark;
    }

    public function getSellRemark()
    {
        return $this->$sell_remark;
    }
		
	public function setOrderBill($order_bill)
    {
        $this->order_bill = $order_bill;
        $this->apiParas["order_bill"] = $order_bill;
    }

    public function getOrderBill()
    {
        return $this->$order_bill;
    }
		
	public function setDeliveryMoney($delivery_money)
    {
        $this->delivery_money = $delivery_money;
        $this->apiParas["delivery_money"] = $delivery_money;
    }

    public function getDeliveryMoney()
    {
        return $this->$delivery_money;
    }
			
	public function setDeliveryNo($delivery_no)
    {
        $this->delivery_no = $delivery_no;
        $this->apiParas["delivery_no"] = $delivery_no;
    }

    public function getDeliveryNo()
    {
        return $this->$delivery_no;
    }
	
	public function setDeliveryCompid($delivery_compid)
    {
        $this->delivery_compid = $delivery_compid;
        $this->apiParas["delivery_compid"] = $delivery_compid;
    }

    public function getDeliveryCompid()
    {
        return $this->$delivery_compid;
    }
		
	public function setDeliveryTime($delivery_time)
    {
        $this->delivery_time = $delivery_time;
        $this->apiParas["delivery_time"] = $delivery_time;
    }

    public function getDeliveryTime()
    {
        return $this->$delivery_time;
    }
	
	public function setOrderTypeId($order_type_id)
    {
        $this->order_type_id = $order_type_id;
        $this->apiParas["order_type_id"] = $order_type_id;
    }

    public function getOrderTypeId()
    {
        return $this->$order_type_id;
    }
	
	public function setStoreId($store_id)
    {
        $this->store_id = $store_id;
        $this->apiParas["store_id"] = $store_id;
    }

    public function getStoreId()
    {
        return $this->$store_id;
    }
		
	public function setOnlinePayStatus($online_pay_status)
    {
        $this->online_pay_status = $online_pay_status;
        $this->apiParas["online_pay_status"] = $online_pay_status;
    }

    public function getOnlinePayStatus()
    {
        return $this->$online_pay_status;
    }	
	
	public function setPayUserid($pay_userid)
    {
        $this->pay_userid = $pay_userid;
        $this->apiParas["pay_userid"] = $pay_userid;
    }

    public function getPayUserid()
    {
        return $this->$pay_userid;
    }
	
	public function setBuyUser($buy_user)
    {
        $this->buy_user = $buy_user;
        $this->apiParas["buy_user"] = $buy_user;
    }

    public function getBuyUser()
    {
        return $this->$buy_user;
    }
		
	public function setPayUser($pay_user)
    {
        $this->pay_user = $buy_user;
        $this->apiParas["pay_user"] = $pay_user;
    }

    public function getPayUser()
    {
        return $this->$pay_user;
    }
	
	public function setBuyPhone($buy_phone)
    {
        $this->buy_phone = $buy_phone;
        $this->apiParas["buy_phone"] = $buy_phone;
    }

    public function getBuyPhone()
    {
        return $this->$buyPhone;
    }
	
	public function setPayPhone($pay_phone)
    {
        $this->pay_phone = $pay_phone;
        $this->apiParas["pay_phone"] = $pay_phone;
    }

    public function getPayPhone()
    {
        return $this->$pay_phone;
    }
	
	public function setReceUserid($rece_userid)
    {
        $this->rece_userid = $rece_userid;
        $this->apiParas["rece_userid"] = $rece_userid;
    }

    public function getReceUserid()
    {
        return $this->$rece_userid;
    }
	
	public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.weizhan.order.add";
    }

    public function check()
    {
        
    }
}