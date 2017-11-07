<?php
//创建一个新客户
class ExternalWzOrderDetailCreateRequest
{
	private $company_key;
	
	private $order_id;
    
    private $item_id;
    
    private $item_sku;
    
    private $sell_count;
    
    private $item_price;
    
    private $order_all_money;
    
    private $item_points;
    
    private $points;
    
    private $item_tpl_price;
    
    private $item_discount;
    
    private $shopname;
    
    private $sku_name;
    
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
    
    public function setOrderId($order_id)
    {
        $this->order_id = $order_id;
        $this->apiParas["order_id"] = $order_id;
    }

    public function getOrderId()
    {
        return $this->$order_id;
    }

    public function setItemId($item_id)
    {
        $this->item_id = $item_id;
        $this->apiParas["item_id"] = $item_id;
    }

    public function getItemId()
    {
        return $this->$item_id;
    }
    
    public function setItemSku($item_sku)
    {
        $this->item_sku = $item_sku;
        $this->apiParas["item_sku"] = $item_sku;
    }

    public function getItemSku()
    {
        return $this->$item_sku;
    }
    
    public function setSellCount($sell_count)
    {
        $this->sell_count = $sell_count;
        $this->apiParas["sell_count"] = $sell_count;
    }

    public function getSellCount()
    {
        return $this->$sell_count;
    }
    
    public function setItemPrice($item_price)
    {
        $this->item_price = $item_price;
        $this->apiParas["item_price"] = $item_price;
    }

    public function getItemPrice()
    {
        return $this->$item_price;
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
    
    public function setItemPoints($item_points)
    {
        $this->item_points = $item_points;
        $this->apiParas["item_points"] = $item_points;
    }

    public function getItemPoints()
    {
        return $this->$item_points;
    }
    
    public function setPoints($points)
    {
        $this->points = $points;
        $this->apiParas["points"] = $points;
    }

    public function getPoints()
    {
        return $this->$points;
    }
    
    public function setItemTplPrice($item_tpl_price)
    {
        $this->item_tpl_price = $item_tpl_price;
        $this->apiParas["item_tpl_price"] = $item_tpl_price;
    }

    public function getItemTplPrice()
    {
        return $this->$item_tpl_price;
    }
    
    public function setItemDiscount($item_discount)
    {
        $this->item_discount = $item_discount;
        $this->apiParas["item_discount"] = $item_discount;
    }

    public function getItemDiscount()
    {
        return $this->$item_discount;
    }
    
    public function setShopName($shopname)
    {
        $this->shopname = $shopname;
        $this->apiParas["shopname"] = $shopname;
    }

    public function getShopName()
    {
        return $this->$shopname;
    }
    
    public function setSkuName($sku_name)
    {
        $this->sku_name = $sku_name;
        $this->apiParas["sku_name"] = $sku_name;
    }

    public function getSkuName()
    {
        return $this->$sku_name;
    }
    
    public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.weizhan.orderdetail.create";
    }

    public function check()
    {
        
    }
}