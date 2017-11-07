<?php
class ExternalOrdersNotNeedShipGetRequest
{
    //发货单创建时间开始。格式:yyyy-MM-dd HH:mm:ss
	private $start_created;
	
	//发货单创建时间结束。格式:yyyy-MM-dd HH:mm:ss
	private $end_created;
	
	//页码。取值范围:大于零的整数; 默认值:1
	private $page_no;
	
	//每页条数。取值范围:大于零的整数; 默认值:40;最大值:100 
	private $page_size;
	
	private $apiParas = array();
	
	public function setStart_created($start_created)
	{
		$this->start_created = $start_created;
		$this->apiParas["start_created"] = $start_created;
	}

	public function getStart_created()
	{
		return $this->$start_created;
	}
	
	public function setEnd_created($end_created)
	{
		$this->end_created = $end_created;
		$this->apiParas["end_created"] = $end_created;
	}

	public function getEnd_created()
	{
		return $this->$end_created;
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
        return "ruixue.external.orders.notneedship.get";
    }

	public function check()
	{
		
	}
}

	