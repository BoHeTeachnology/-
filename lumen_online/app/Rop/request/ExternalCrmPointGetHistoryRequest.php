<?php
class ExternalCrmPointGetHistoryRequest
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
    
	private $programId;
		
	public function setProgramId($programId)
	{
		$this->programId = $programId;
		$this->apiParas["programId"] = $programId;
	}

	public function getProgramId()
	{
		return $this->$programId;
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

	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.crm.point.get.history";
    }

	public function check()
	{
		
	}
}

	