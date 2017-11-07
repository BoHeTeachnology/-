<?php

class RopClient
{
	public $appkey;

	public $secretKey;

	private $gatewayUrl = "";

	private $baseUrl = '';

	public $format = "json";

	/** 是否打开入参check**/
	public $checkRequest = true;

	protected $signMethod = "md5";

	protected $apiVersion = "2.0";

	protected $sdkVersion = "rop-sdk-php-20120330";

	public function __set($name, $value)
	{
		if ('gatewayUrl' === $name) {
			$this->baseUrl = $value;
			$this->gatewayUrl = $value;
		}
	}

	public function __get($name)
	{
		if ('gatewayUrl' === $name) {
			return $this->gatewayUrl;
		}
	}

	protected function generateSign($params)
	{
		//复制与$params相同的数组，key小写
		$params_copy = array_change_key_case($params,CASE_LOWER);

		//用key排序
		ksort($params_copy);

		$stringToBeSigned = strtoupper($this->secretKey);

		//拼写字符串，用$params的key与相对应的$params_copy中的vaule
		//目的：按照key排序，不区分大小写
		foreach ($params_copy as $k1 => $v1)
		{
			if("@" != substr($v1, 0, 1))
			{
				foreach ($params as $k => $v)
				{
					if(strtoupper($k1) == strtoupper($k))
					{
						$stringToBeSigned .= "$k$v1";
					}
				}
			}
		}
		unset($k, $v);
		$stringToBeSigned .= strtoupper($this->secretKey);

		return strtoupper(md5($stringToBeSigned));
	}

	protected function curl($url, $postFields = null)
	{

		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_FAILONERROR, false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

		if (is_array($postFields) && 0 < count($postFields))
		{
			$postBodyString = "";
			$postMultipart = false;
			foreach ($postFields as $k => $v)
			{
				if("@" != substr($v, 0, 1))//判断是不是文件上传
				{
					$postBodyString .= "$k=" . urlencode($v) . "&";
				}
				else//文件上传用multipart/form-data，否则用www-form-urlencoded
				{
					$postMultipart = true;
				}
			}
			unset($k, $v);
			curl_setopt($ch, CURLOPT_POST, true);
			if ($postMultipart)
			{
				curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
			}
			else
			{
				curl_setopt($ch, CURLOPT_POSTFIELDS, substr($postBodyString,0,-1));
			}
		}
		$reponse = curl_exec($ch);

		if (curl_errno($ch))
		{
			throw new Exception(curl_error($ch),0);
		}
		else
		{
			$httpStatusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
			if (200 !== $httpStatusCode)
			{
				throw new Exception($reponse,$httpStatusCode);
			}
		}
		curl_close($ch);
		return $reponse;
	}

	protected function logCommunicationError($apiName, $requestUrl, $errorCode, $responseTxt)
	{
		$localIp = isset($_SERVER["SERVER_ADDR"]) ? $_SERVER["SERVER_ADDR"] : "CLI";
		/*$logger = new LtLogger;
		$logger->conf["log_file"] = rtrim(ROP_SDK_WORK_DIR, '\\/') . '/' . "logs/rop_comm_err_" . $this->appkey . "_" . date("Y-m-d") . ".log";
		$logger->conf["separator"] = "^_^";
		$logData = array(
		date("Y-m-d H:i:s"),
		$apiName,
		$this->appkey,
		$localIp,
		PHP_OS,
		$this->sdkVersion,
		$requestUrl,
		$errorCode,
		str_replace("\n","",$responseTxt)
		);
		$logger->log($logData);*/
                Log::info($apiName.$requestUrl.$errorCode.$responseTxt);
	}
     public function gf($value)
    {
        $input = trim($value);
		if (!empty($input) || 0 === $value || false === $value || $value==="0") {
			return true;
		}
	}
	public function execute($request, $session = null)
	{
		if ($request->getApiMethodName() != 'ruixue.external.pressurebalance.get' && $request->getApiMethodName() != 'ruixue.external.session.get') {
			$pressureBalanceUtil = new PressureBalanceUtil();
			$this->gatewayUrl = $pressureBalanceUtil->getUrl($this->baseUrl, $this->appkey, $this->secretKey, $session);

		}
		if($this->checkRequest) {
			try {
				$request->check();
			} catch (Exception $e) {
				$result['code'] = $e->getCode();
				$result['msg'] = $e->getMessage();
				return $result;
			}
		}
		//组装系统参数
		$sysParams["app_key"] = $this->appkey;
	//	$sysParams["v"] = $this->apiVersion;
		$sysParams["format"] = $this->format;
	//	$sysParams["sign_method"] = $this->signMethod;
		$sysParams["method"] = $request->getApiMethodName();
		$date = new DateTime(null, new DateTimeZone('Asia/Shanghai'));
		$sysParams["timestamp"] = $date->format('Y-m-d H:i:s');
	//	$sysParams["partner_id"] = $this->sdkVersion;
		if (null != $session)
		{
			$sysParams["session"] = $session;
		}

		//获取业务参数
		$apiParams = array_filter($request->getApiParas(), array($this,"gf"));

		//签名
		$sysParams["sign"] = $this->generateSign(array_merge($apiParams, $sysParams));

		//系统参数放入GET请求串
		$requestUrl = $this->gatewayUrl . "?";
		foreach ($sysParams as $sysParamKey => $sysParamValue)
		{
			$requestUrl .= "$sysParamKey=" . urlencode($sysParamValue) . "&";
		}
		$requestUrl = substr($requestUrl, 0, -1);
               

		//发起HTTP请求
		try
		{
			if ('/api/cos_upload' == $request->getApiMethodName()) {
				$sysParams = array_merge($sysParams, $apiParams);

				$resp = $this->uploadCOSFile($request, $session, $sysParams);
			} else if ('ruixue.ps.picture.upload' == $request->getApiMethodName() || 'ruixue.ps.picturestream.upload'  == $request->getApiMethodName()) {
				$sysParams = array_merge($sysParams, $apiParams);

				$resp = $this->uploadOSSPictureFile($request, $session, $sysParams);
		    } else {
				$resp = $this->curl($requestUrl, $apiParams);
			}

		}
		catch (Exception $e)
		{
			$this->logCommunicationError($sysParams["method"],$requestUrl,"HTTP_ERROR_" . $e->getCode(),$e->getMessage());
			$result['code'] = $e->getCode();
			$result['msg'] = $e->getMessage();
			return $result;
		}

		//解析ROP返回结果
		$respWellFormed = false;
		if ("json" == $this->format)
		{
			$respObject = json_decode($resp);
			if (null !== $respObject)
			{
				$respWellFormed = true;
				foreach ($respObject as $propKey => $propValue)
				{
					$respObject = $propValue;
				}
			}
		}
		else if("xml" == $this->format)
		{
			$xml = new XMLReader();
			$xml->XML($resp);
			$xml->read();
			$respObject = xml2assoc($xml, $xml->name);
			$respObject = json_decode(json_encode($respObject));
			if (false !== $respObject)
			{
				$respWellFormed = true;
			}
		}

		//返回的HTTP文本不是标准JSON或者XML，记下错误日志
		if (false === $respWellFormed)
		{
			$this->logCommunicationError($sysParams["method"],$requestUrl,"HTTP_RESPONSE_NOT_WELL_FORMED",$resp);
			$result['code'] = 0;
			$result['msg'] = "HTTP_RESPONSE_NOT_WELL_FORMED";
			return $result;
		}

		//如果ROP返回了错误码，记录到业务错误日志中
		if (isset($respObject->code))
		{
			/*$logger = new LtLogger;
			$logger->conf["log_file"] = rtrim(ROP_SDK_WORK_DIR, '\\/') . '/' . "logs/rop_biz_err_" . $this->appkey . "_" . date("Y-m-d") . ".log";
			$logger->log(array(
				date("Y-m-d H:i:s"),
				$resp
			));*/
                    $arr=$respObject->code;
                    $date['success']="0";
                    $date['message']="第三方操作失误";
                    $date['data']=$arr;
                    return json_decode($date);
                    
		}
		return $respObject;
	}

    public function uploadCOSFile($request, $session, $sysParams)
    {
        $directoryResponse = $this->CreateDirectory($session);

        if (!isset($directoryResponse->code)) {
            if ($sysParams['path']) {
                $pathInfo = pathinfo($sysParams['path']);
                $extension = $pathInfo['extension'];
                $cosFile = trim($this->create_guid() , '{}') . '.' . $extension;
                $sourceFile = $pathInfo['basename'];
				$date = gmdate('D, d M Y H:i:s \G\M\T');

                $signGetResponse = $this->signGet($session, $cosFile, $sourceFile, $sysParams['type'], $sysParams['invoice_date'], @$sysParams['batch'], $date);

                if (!isset($signGetResponse->code)) {
                    $apiParams = array();
                    $apiParams['accessId'] = (string)$signGetResponse->accessid;
                    $apiParams['secretId'] = (string)$signGetResponse->secretid;
                    $apiParams['bucketId'] = (string)$signGetResponse->bucketid;
                    $apiParams['path'] = '';
					$apiParams['date'] = $date;
                    $apiParams['cosFile']= $cosFile;
                    $apiParams['sign'] = (string)$signGetResponse->sign;
					$OssUploadUtil = new OssUploadUtil();

					$response = $OssUploadUtil->upload_by_content(strtolower(str_replace('-','',$this->appkey)), $apiParams, $sysParams['path']);

                    if (0 !== $response['code']) {
                        $submsg = $response['msg'];
                        if ('json' == $this->format) {
                            $res = '{"error_response":{"code":"Y100","msg":"文件上传失败","sub_code":"Y10009","sub_msg":"' . $submsg . '"}}';
                        } else {
                            $res = "<error_response><code>Y100</code><msg>文件上传失败</msg><sub_code>Y10009</sub_code><sub_msg>" . $submsg . "</sub_msg></error_response>";
                        }
                    } else {
                        if ('json' == $this->format) {
                            $res = '{"fs_file_upload_response": {"call_result":"true","url_key":"' . $signGetResponse->url_key .'"}}';
                        } else {
                            $res = "<fs_file_upload_response><url_key>" . (string)$signGetResponse->url_key . "</url_key></fs_file_upload_response>";
                        }

                    }
                    return $res;
                } else {
                	print_r($signGetResponse);exit;
                    //return $signGetResponse;
                }
            } else {
                return json_decode('{"code": "S0", "msg": "没有文件路径"}');
            }
        } else {
             print_r($directoryResponse);exit;
           //  return $directoryResponse;
        }
    }

	public function uploadOSSPictureFile($request, $session, $sysParams)
	{
		$apiMethodName = $request->getApiMethodName();

		$directoryResponse = $this->CreatePictureFileDirectory($session);
		if (!isset($directoryResponse->code)) {

			if ($sysParams['path'] || $apiMethodName == 'ruixue.ps.picturestream.upload') {
				$cosFile = '';

				if($apiMethodName == 'ruixue.ps.picture.upload')
				{
					$pathInfo = pathinfo($sysParams['path']);
					$extension = $pathInfo['extension'];
					$cosFile = trim($this->create_guid() , '{}') . '.' . $extension;

					$sourceFile = $pathInfo['basename'];
				}
				else
				{
					$extension = $sysParams['extension'];

					if ($extension == '')
                    {

	                	if ('json' == $this->format) {
							$res = "{\"error_response\":{\"code\":\"Y5\",\"msg\":\"没有传递参数：extension\"}}";
						} else {
							$res = "<error_response>\r\n\r\n  <code>Y5</code>\r\n  <msg>没有传递参数：extension</msg>\r\n</error_response>";
						}
	                    return $res;
	                }
					$cosFile = trim($this->create_guid() , '{}') . '.' . $extension;

					$guid = $this->create_guid();
					$sourceFile = $pathInfo['picturefilename'] == '' ? ($guid . '.' . $extension): ($pathInfo['picturefilename']. '.' . $extension);
				}
				$date = gmdate('D, d M Y H:i:s \G\M\T');

				$signGetResponse = $this->SignGetPictureFile($session, $cosFile, $sourceFile, $date);

				if (!isset($signGetResponse->code)) {
					$apiParams = array();
					$apiParams['accessId'] = (string)$signGetResponse->accessid;
					$apiParams['secretId'] = (string)$signGetResponse->secretid;
					$apiParams['bucketId'] = (string)$signGetResponse->bucketname;
					$apiParams['path'] = '';
					$apiParams['date'] = $date;
					$apiParams['cosFile']= $cosFile;
					$apiParams['sign'] = (string)$signGetResponse->sign;
					$OssUploadUtil = new OssUploadUtil();

					if($apiMethodName == 'ruixue.ps.picture.upload')
					{
						$response = $OssUploadUtil->upload_by_content(strtolower(str_replace('-','',$this->appkey)), $apiParams, $sysParams['path']);
					}
					else if($apiMethodName == 'ruixue.ps.picturestream.upload')
					{
						$response = $OssUploadUtil->upload_by_pic_content(strtolower(str_replace('-','',$this->appkey)), $apiParams, $sysParams['picturestream']);
					}

					if (0 !== $response['code']) {
						$submsg = $response['msg'];
						if ('json' == $this->format) {
							$res = '{"error_response":{"code":"Y100","msg":"图片上传失败","sub_code":"Y10009","sub_msg":"' . $submsg . '"}}';
						} else {
							$res = "<error_response><code>Y100</code><msg>图片上传失败</msg><sub_code>Y10009</sub_code><sub_msg>" . $submsg . "</sub_msg></error_response>";
						}
					} else {
						if ('json' == $this->format) {
							$res = '{"ps_picture_upload_response":{"fileurl":"' . $signGetResponse->url .'"}}';
						} else {
							$res = "<ps_picture_upload_response><fileurl>" . (string)$signGetResponse->url . "</fileurl></ps_picture_upload_response>";
						}

					}
					return $res;
				} else {
					print_r($signGetResponse);exit;
				//	return $signGetResponse;
				}
			} else {
				return json_decode('{"code": "S0", "msg": "没有文件路径"}');
			}
		} else {
			print_r($directoryResponse);exit;
			//return $directoryResponse;
		}
	}

	public function exec($paramsArray)
	{
		if (!isset($paramsArray["method"]))
		{
			trigger_error("No api name passed");
		}
		$inflector = new LtInflector;
		$inflector->conf["separator"] = ".";
		$requestClassName = ucfirst($inflector->camelize(substr($paramsArray["method"], 7))) . "Request";
		if (!class_exists($requestClassName))
		{
			trigger_error("No such api: " . $paramsArray["method"]);
		}

		$session = isset($paramsArray["session"]) ? $paramsArray["session"] : null;

		$req = new $requestClassName;
		foreach($paramsArray as $paraKey => $paraValue)
		{
			$inflector->conf["separator"] = "_";
			$setterMethodName = $inflector->camelize($paraKey);
			$inflector->conf["separator"] = ".";
			$setterMethodName = "set" . $inflector->camelize($setterMethodName);
			if (method_exists($req, $setterMethodName))
			{
				$req->$setterMethodName($paraValue);
			}
		}
		return $this->execute($req, $session);
	}

	private function CreateDirectory($session)
	{
		$request = new FsDirectoryCreateRequest();
		$request->setDirectoryName($this->appkey);
		$res = $this->execute($request, $session);
		return $res;
	}

	private function CreatePictureFileDirectory($session)
	{
		$request = new PsDirectoryCreateRequest();
		$request->setDirectoryName($this->appkey);
		$res = $this->execute($request, $session);
		return $res;
	}

	private function signGet($session, $cosFile, $sourceFile, $type, $invoiceDate, $batch, $date)
	{
		$request = new FsSignGetRequest();

		$request->setCosfile($cosFile);
		$request->setDirectoryName($this->appkey);
		$request->setSourceFile($sourceFile);
		$request->setType($type);
		$request->setInvoiceDate($invoiceDate);
		$request->setBatch($batch);
		$request->setDate($date);

		$res = $this->execute($request, $session);
		return $res;
	}

	private function SignGetPictureFile($session, $cosFile, $sourceFile, $date)
	{
		$request = new PsSignGetRequest();

		$request->setCosfile($cosFile);
		$request->setDirectoryName($this->appkey);
		$request->setSourceFile($sourceFile);
		$request->setDate($date);

		$res = $this->execute($request, $session);
		return $res;
	}

	private function create_guid()
	{
	    $charid = strtoupper(md5(uniqid(mt_rand(), true)));
	    $hyphen = chr(45);
	    $uuid = substr($charid, 0, 8).$hyphen.substr($charid, 8, 4).$hyphen.substr($charid,12, 4).$hyphen.substr($charid,16, 4).$hyphen.substr($charid,20,12);
	    return strtoupper($uuid);
	}
}

function xml2assoc($xml, $parentsName) {
	$tree = null;
	while($xml->read()) {
		switch ($xml->nodeType) {
			case XMLReader::END_ELEMENT:
				return $tree;
			case XMLReader::ELEMENT:
				if ($parentsName == $xml->name . 's') {
					$node[$xml->name][] = $xml->isEmptyElement ? '' : xml2assoc($xml, $xml->name);
				} else {
					$node[$xml->name] = $xml->isEmptyElement ? '' : xml2assoc($xml, $xml->name);
				}
				$tree = $node;
				break;
			case XMLReader::TEXT:
			case XMLReader::CDATA:
				$tree .= $xml->value;
		}
	}
	return $tree;
}
