<?php
class ExternalCrmPointAddRequest
{
	private $mainType;
    
    private $subType;
    
    private $point;
    
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
    
    public function setPoint($point)
	{
		$this->point = $point;
		$this->apiParas["point"] = $point;
	}

	public function getPoint()
	{
		return $this->$point;
	}
	
	 public function setMainType($mainType)
	{
		$this->mainType = $mainType;
		$this->apiParas["type"] = $mainType;
	}

	public function getMainType()
	{
		return $this->$mainType;
	}
    
    public function setSubType($subType)
	{
		$this->subType = $subType;
		$this->apiParas["subType"] = $subType;
	}

	public function getSubType()
	{
		return $this->$subType;
	}

    
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.crm.point.add";
    }

	public function check()
	{
		
	}
}

	