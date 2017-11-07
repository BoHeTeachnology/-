<?php
//修改微信帐号
class WeizhanInfoUpdateRequest
{
	private $company_key;
    
    private $table_type;
    
    private $fields;
    
    private $condition;
    
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

    public function setTableType($table_type)
    {
        $this->table_type = $table_type;
        $this->apiParas["table_type"] = $table_type;
    }

    public function getTableType()
    {
        return $this->$table_type;
    }
    
    public function setFields($fields)
    {
        $this->fields = $fields;
        $this->apiParas["fields"] = $fields;
    }

    public function getFields()
    {
        return $this->$fields;
    }
        
    public function setCondition($condition)
    {
        $this->condition = $condition;
        $this->apiParas["condition"] = $condition;
    }

    public function getCondition()
    {
        return $this->$condition;
    }    
        
    public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.weizhan.info.update";
    }

    public function check()
    {
        
    }
}