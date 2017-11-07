<?php
class ExternalActivityUpdateRequest
{
	private $Nick;
		
	private $ActivityId;
	
	private $ActivityName;
	
	private $ItemIds;
	
	private $Nums;
    
	private $apiParas = array();
	
	public function setNick($Nick)
	{
		$this->Nick = $Nick;
		$this->apiParas["nick"] = $Nick;
	}

	public function getNick()
	{
		return $this->$Nick;
	}
	
	public function setActivityId($ActivityId)
	{
		$this->ActivityId = $ActivityId;
		$this->apiParas["activity_id"] = $ActivityId;
	}

	public function getActivityId()
	{
		return $this->$ActivityId;
	}
	
	public function setActivityName($ActivityName)
	{
		$this->ActivityName = $ActivityName;
		$this->apiParas["activity_name"] = $ActivityName;
	}

	public function getActivityName()
	{
		return $this->$ActivityName;
	}
	
	public function setItemIds($ItemIds)
	{
		$this->ItemIds = $ItemIds;
		$this->apiParas["item_ids"] = $ItemIds;
	}

	public function getItemIds()
	{
		return $this->$ItemIds;
	}
	
	public function setNums($Nums)
	{
		$this->Nums = $Nums;
		$this->apiParas["nums"] = $Nums;
	}

	public function getNums()
	{
		return $this->$Nums;
	}
    
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
    public function getApiMethodName()
    {
        return "ruixue.external.activity.update";
    }

	public function check()
	{
		
	}
}

	