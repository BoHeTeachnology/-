<?php
//创建一个新客户
class ExternalWzOrderOptionResultRequest
{
	private $company_key;
	
	private $id;
	
	private $order_id;
    
    private $order_type_id;
    
    private $option_id;
    
    private $option_result;

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
	
	public function setId($id)
    {
        $this->id = $id;
        $this->apiParas["id"] = $id;
    }

    public function getId()
    {
        return $this->$id;
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

    public function setOrderTypeId($order_type_id)
    {
        $this->order_type_id = $order_type_id;
        $this->apiParas["order_type_id"] = $order_type_id;
    }

    public function getOrderTypeId()
    {
        return $this->$order_type_id;
    }
    
    public function setOptionId($option_id)
    {
        $this->option_id = $option_id;
        $this->apiParas["option_id"] = $option_id;
    }

    public function getOptionId()
    {
        return $this->$option_id;
    }
    
    public function setOptionResult($option_result)
    {
        $this->option_result = $option_result;
        $this->apiParas["option_result"] = $option_result;
    }

    public function getOptionResult()
    {
        return $this->$option_result;
    }
	
    public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.weizhan.order.option.result";
    }

    public function check()
    {
        
    }
}