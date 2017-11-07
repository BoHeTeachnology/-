<?php
class ExternalCrmUserBindRequest
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

	private $shopPlatCode;
		
	public function setShopPlatCode($shopPlatCode)
	{
		$this->shopPlatCode = $shopPlatCode;
		$this->apiParas["shopPlatCode"] = $shopPlatCode;
	}

	public function getShopPlatCode()
	{
		return $this->$shopPlatCode;
	}

	private $shopPlatAccount;
		
	public function setShopPlatAccount($shopPlatAccount)
	{
		$this->shopPlatAccount = $shopPlatAccount;
		$this->apiParas["shopPlatAccount"] = $shopPlatAccount;
	}

	public function getShopPlatAccount()
	{
		return $this->$shopPlatAccount;
	}

	private $mobile;
		
	public function setMobile($mobile)
	{
		$this->mobile = $mobile;
		$this->apiParas["mobile"] = $mobile;
	}

	public function getMobile()
	{
		return $this->$mobile;
	}

	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.crm.user.bind";
    }

	public function check()
	{
		
	}
}