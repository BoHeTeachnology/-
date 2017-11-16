<?php
/**
 * @author jy625
 */
namespace Tool;
class  SDKRuntimeException extends \Exception {
	public function errorMessage()
	{
		return $this->getMessage();
	}

}

?>