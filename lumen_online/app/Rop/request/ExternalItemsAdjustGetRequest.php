<?php
class ExternalItemsAdjustGetRequest
{
	private $start_created;
	
	private $end_created;
	
	private $page_no;
	
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
        return "ruixue.external.items.adjust.get";
    }

	public function check()
	{
		
	}
}

	