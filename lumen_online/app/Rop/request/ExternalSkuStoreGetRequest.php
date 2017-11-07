<?php
class ExternalSkuStoreGetRequest
{
    private $StoreCode;
    
	private $ItemGUIDs;
	
	private $ItemNumbers;
	
	private $SkuGUIDs;
	
	private $SkuNumbers;
    
    private $page_no;
	
	private $page_size;
    
	private $apiParas = array();
	
	public function setStoreCode($StoreCode)
	{
		$this->StoreCode = $StoreCode;
		$this->apiParas["StoreCode"] = $StoreCode;
	}

	public function getStoreCode()
	{
		return $this->$StoreCode;
	}
    
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
	
	public function setSkuGUIDs($SkuGUIDs)
	{
		$this->SkuGUIDs = $SkuGUIDs;
		$this->apiParas["SkuGUIDs"] = $SkuGUIDs;
	}

	public function getSkuGUIDs()
	{
		return $this->$SkuGUIDs;
	}
	
	public function setSkuNumbers($SkuNumbers)
	{
		$this->SkuNumbers = $SkuNumbers;
		$this->apiParas["SkuNumbers"] = $SkuNumbers;
	}

	public function getSkuNumbers()
	{
		return $this->$SkuNumbers;
	}
    
    public function setPageNo($page_no)
	{
		$this->page_no = $page_no;
		$this->apiParas["page_no"] = $page_no;
	}

	public function getPageNo()
	{
		return $this->$page_no;
	}
	
	public function setPageSize($page_size)
	{
		$this->page_size = $page_size;
		$this->apiParas["page_size"] = $page_size;
	}

	public function getPageSize()
	{
		return $this->$page_size;
	}
    
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.skus.store.get";
    }

	public function check()
	{
		
	}
}

	