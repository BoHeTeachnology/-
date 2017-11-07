<?php
//修改微信帐号
class ExternalScarletLetterInvoiceGetRequest
{
	//查询开始时间
	private $StartTime;
    
    //查询结束时间
    private $EndTime;
    
    private $MacCode;
    
    private $apiParas = array();

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

    public function setMacCode($MacCode)
    {
        $this->MacCode = $MacCode;
        $this->apiParas["MacCode"] = $MacCode;
    }

    public function geMacCode()
    {
        return $this->$MacCode;
    }
        
    public function getApiParas()
    {
        return $this->apiParas;
    }
    
    public function getApiMethodName()
    {
        return "ruixue.external.scarlet.letter.invoice.get";
    }

    public function check()
    {
        
    }
}