<?php
//创建一个新客户
class ExternalWeizhanCustomerCreateRequest
{
	private $company_key;
	
	private $open_id;
    
    private $phone;
    
    private $name;
    
    private $nickname;
    
    private $sex;
    
    private $birthday;
    
    private $country;
    
    private $pro;
    
    private $city;
    
    private $county;
    
    private $headimgurl;
    
    private $sub_status;
    
    private $sub_time;
    
    private $unsub_time;
    
    private $reg_time;
    
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

    public function setPhone($phone)
    {
        $this->phone = $phone;
        $this->apiParas["phone"] = $phone;
    }

    public function getPhone()
    {
        return $this->$phone;
    }
    
    public function setCustName($name)
    {
        $this->name = $name;
        $this->apiParas["name"] = $name;
    }

    public function getCustName()
    {
        return $this->$name;
    }
    
    public function setNickName($nickname)
    {
        $this->nickname = $nickname;
        $this->apiParas["nickname"] = $nickname;
    }

    public function getNickName()
    {
        return $this->$nickname;
    }
    
    public function setSex($sex)
    {
        $this->sex = $sex;
        $this->apiParas["sex"] = $sex;
    }

    public function getSex()
    {
        return $this->$sex;
    }
    
    public function setBirthday($birthday)
    {
        $this->birthday = $birthday;
        $this->apiParas["birthday"] = $birthday;
    }

    public function getBirthday()
    {
        return $this->$birthday;
    }
    
    public function setCountry($country)
    {
        $this->country = $country;
        $this->apiParas["country"] = $country;
    }

    public function getCountry()
    {
        return $this->$country;
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
    
    public function setHeadimgurl($headimgurl)
    {
        $this->headimgurl = $headimgurl;
        $this->apiParas["headimgurl"] = $headimgurl;
    }

    public function getHeadimgurl()
    {
        return $this->$headimgurl;
    }
    
    public function setSubStatus($sub_status)
    {
        $this->sub_status = $sub_status;
        $this->apiParas["sub_status"] = $sub_status;
    }

    public function getSubStatus()
    {
        return $this->$sub_status;
    }
    
    public function setSubTime($sub_time)
    {
        $this->sub_time = $sub_time;
        $this->apiParas["sub_time"] = $sub_time;
    }

    public function getSubTime()
    {
        return $this->$sub_time;
    }
    
    public function setUnsubTime($unsub_time)
    {
        $this->unsub_time = $unsub_time;
        $this->apiParas["unsub_time"] = $unsub_time;
    }

    public function getUnsubTime()
    {
        return $this->$unsub_time;
    }
    
    public function setRegTime($reg_time)
    {
        $this->reg_time = $reg_time;
        $this->apiParas["reg_time"] = $reg_time;
    }

    public function getRegTime()
    {
        return $this->$reg_time;
    }
    
    public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.weizhan.customer.create";
    }

    public function check()
    {
        
    }
}