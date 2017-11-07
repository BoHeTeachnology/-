<?php
class ExternalCrmOrderBuyHistoryRequest
{

	private $apiParas = array();
	
	private $companyKey;
		
	public function setCompanyKey($companyKey)
	{
		$this->companyKey = $companyKey;
		$this->apiParas["companyKey"] = $companyKey;
	}

	public function getCompanyKey()
	{
		return $this->$companyKey;
	}

	private $customerId;
		
	public function setCustomerId($customerId)
	{
		$this->customerId = $customerId;
		$this->apiParas["customerId"] = $customerId;
	}

	public function getCustomerId()
	{
		return $this->$customerId;
	}

	private $sourcePlat;
		
	public function setSourcePlat($sourcePlat)
	{
		$this->sourcePlat = $sourcePlat;
		$this->apiParas["sourcePlat"] = $sourcePlat;
	}

	public function getSourcePlat()
	{
		return $this->$sourcePlat;
	}

	private $platAccount;
		
	public function setPlatAccount($platAccount)
	{
		$this->platAccount = $platAccount;
		$this->apiParas["platAccount"] = $platAccount;
	}

	public function getPlatAccount()
	{
		return $this->$platAccount;
	}

	private $buySourcePlat;
		
	public function setbuySourcePlat($buySourcePlat)
	{
		$this->buySourcePlat = $buySourcePlat;
		$this->apiParas["buySourcePlat"] = $buySourcePlat;
	}

	public function getbuySourcePlat()
	{
		return $this->$buySourcePlat;
	}
	 
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.crm.order.buy.history";
    }

	public function check()
	{
		
	}
}

	