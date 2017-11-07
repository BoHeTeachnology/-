<?php
class ExternalItemsGetRequest
{
	private $ItemGUIDs;
	
	private $ItemNumbers;
	
	//查询开始时间
	private $StartTime;
    
    //查询结束时间
    private $EndTime;
    
	private $page_no;
	
	private $page_size;
	
	private $apiParas = array();
	
	public function setItemGUIDs($ItemGUIDs)
	{
		$this->ItemGUIDs = $ItemGUIDs;
		$this->apiParas["ItemGUIDs"] = $ItemGUIDs;
	}

	public function getItemGUIDs()
	{
		return $this->$ItemGUIDs;
	}
	
	public function setItemNumbers($ItemNumbers)
	{
		$this->ItemNumbers = $ItemNumbers;
		$this->apiParas["ItemNumbers"] = $ItemNumbers;
	}

	public function getItemNumbers()
	{
		return $this->$ItemNumbers;
	}
	
	//查询开始时间
	public function setStartTime($StartTime)
	{
		$this->StartTime = $StartTime;
		$this->apiParas["StartTime"] = $StartTime;
	}

	public function getStartTime()
	{
		return $this->$StartTime;
	}
    
    //查询结束时间
    public function setEndTime($EndTime)
	{
		$this->EndTime = $EndTime;
		$this->apiParas["EndTime"] = $EndTime;
	}

	public function getEndTime()
	{
		return $this->$EndTime;
	}
    
	public function setPage_no($page_no)
	{
		$this->page_no = $page_no;
		$this->apiParas["page_no"] = $page_no;
	}

	public function getPage_no()
	{
		return $this->$page_no;
	}
	
	public function setPage_size($page_size)
	{
		$this->page_size = $page_size;
		$this->apiParas["page_size"] = $page_size;
	}

	public function getPage_size()
	{
		return $this->$page_size;
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.items.get";
    }

	public function check()
	{
		
	}
}

	