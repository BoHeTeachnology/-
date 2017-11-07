<?php
class ExternalCrmMemberInformationEntryRequest
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

	private $name;
		
	public function setName($name)
	{
		$this->name = $name;
		$this->apiParas["name"] = $name;
	}

	public function getName()
	{
		return $this->$name;
	}

	private $nickName;
		
	public function setNickName($nickName)
	{
		$this->nickName = $nickName;
		$this->apiParas["nickName"] = $nickName;
	}

	public function getNickName()
	{
		return $this->$nickName;
	}

	private $sex;
		
	public function setSex($sex)
	{
		$this->sex = $sex;
		$this->apiParas["sex"] = $sex;
	}

	public function getSex()
	{
		return $this->$sex;
	}

	private $birthday;
		
	public function setBirthday($birthday)
	{
		$this->birthday = $birthday;
		$this->apiParas["birthday"] = $birthday;
	}

	public function getBirthday()
	{
		return $this->$birthday;
	}


	private $province;
		
	public function setProvince($province)
	{
		$this->province = $province;
		$this->apiParas["province"] = $province;
	}

	public function getProvince()
	{
		return $this->$province;
	}

	private $city;
		
	public function setCity($city)
	{
		$this->city = $city;
		$this->apiParas["city"] = $city;
	}

	public function getCity()
	{
		return $this->$city;
	}


	private $district;
		
	public function setDistrict($district)
	{
		$this->district = $district;
		$this->apiParas["district"] = $district;
	}

	public function getDistrict()
	{
		return $this->$district;
	}


	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.crm.member.information.entry";
    }

	public function check()
	{
		
	}
}

	