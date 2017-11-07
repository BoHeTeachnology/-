<?php
class ExternalCrmUserCheckedRequest
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
        return "ruixue.external.crm.user.checked";
    }

	public function check()
	{
		
	}
}

	