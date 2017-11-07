<?php
//创建一个新客户地址
class ExternalWeizhanMallAddressRequest
{
	private $company_key;
	
	private $open_id;
	
    private $username;
    
    private $phone;
    
    private $pro;
    
    private $city;
    
    private $county;
    
    private $detail;
    
    private $detail_address;
    
    private $zipcode;
    
    private $status;
    
    private $member_id;
    
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
    
    public function setOpenId($open_id)
    {
        $this->open_id = $open_id;
        $this->apiParas["open_id"] = $open_id;
    }

    public function getOpenId()
    {
        return $this->$open_id;
    }
	
	public function setUsername($username)
    {
        $this->username = $username;
        $this->apiParas["username"] = $username;
    }

    public function getUsername()
    {
        return $this->$username;
    }

    public function setPhone($phone)
    {
        $this->phone = $phone;
        $this->apiParas["phone"] = $phone;
    }

    public function getPhone()
    {
        return $this->$phone;
    }
    
    public function setPro($pro)
    {
        $this->pro = $pro;
        $this->apiParas["pro"] = $pro;
    }

    public function getPro()
    {
        return $this->$pro;
    }
    
    public function setCity($city)
    {
        $this->city = $city;
        $this->apiParas["city"] = $city;
    }

    public function getCity()
    {
        return $this->$city;
    }
    
    public function setCounty($county)
    {
        $this->county = $county;
        $this->apiParas["county"] = $county;
    }

    public function getCounty()
    {
        return $this->$county;
    }
    
    public function setDetail($detail)
    {
        $this->detail = $detail;
        $this->apiParas["detail"] = $detail;
    }

    public function getDetail()
    {
        return $this->$detail;
    }
    
    public function setDetailAddress($detail_address)
    {
        $this->detail_address = $detail_address;
        $this->apiParas["detail_address"] = $detail_address;
    }

    public function getDetailAddress()
    {
        return $this->$detail_address;
    }
    
    public function setZipcode($zipcode)
    {
        $this->zipcode = $zipcode;
        $this->apiParas["zipcode"] = $zipcode;
    }

    public function getZipcode()
    {
        return $this->$zipcode;
    }
    
    public function setStatus($status)
    {
        $this->status = $status;
        $this->apiParas["status"] = $status;
    }

    public function getStatus()
    {
        return $this->$status;
    }
    
    public function setMemberId($member_id)
    {
        $this->member_id = $member_id;
        $this->apiParas["member_id"] = $member_id;
    }

    public function getMemberId()
    {
        return $this->$member_id;
    }
    
    public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.weizhan.malladdress.add";
    }

    public function check()
    {
        
    }
}