<?php
class RopApiCreateRequest
{
     private $apiParas = array();

     private $return_result;

     public function getReturnResult()
     {
         return $this->$return_result;
     }

     public function setReturnResult($return_result)
     {
         $this->return_result = $return_result;
         $this->apiParas["return_result"] = $return_result;
     }

     private $request_param;

     public function getRequestParam()
     {
         return $this->$request_param;
     }

     public function setRequestParam($request_param)
     {
         $this->request_param = $request_param;
         $this->apiParas["request_param"] = $request_param;
     }

     private $return_example_json;

     public function getReturnExampleJson()
     {
         return $this->$return_example_json;
     }

     public function setReturnExampleJson($return_example_json)
     {
         $this->return_example_json = $return_example_json;
         $this->apiParas["return_example_json"] = $return_example_json;
     }

     private $api_title;

     public function getApiTitle()
     {
         return $this->$api_title;
     }

     public function setApiTitle($api_title)
     {
         $this->api_title = $api_title;
         $this->apiParas["api_title"] = $api_title;
     }

     private $test_url;

     public function getTestUrl()
     {
         return $this->$test_url;
     }

     public function setTestUrl($test_url)
     {
         $this->test_url = $test_url;
         $this->apiParas["test_url"] = $test_url;
     }

     private $environment_url;

     public function getEnvironmentUrl()
     {
         return $this->$environment_url;
     }

     public function setEnvironmentUrl($environment_url)
     {
         $this->environment_url = $environment_url;
         $this->apiParas["environment_url"] = $environment_url;
     }

     private $cat_name;

     public function getCatName()
     {
         return $this->$cat_name;
     }

     public function setCatName($cat_name)
     {
         $this->cat_name = $cat_name;
         $this->apiParas["cat_name"] = $cat_name;
     }

     private $api_desc_en;

     public function getApiDescEn()
     {
         return $this->$api_desc_en;
     }

     public function setApiDescEn($api_desc_en)
     {
         $this->api_desc_en = $api_desc_en;
         $this->apiParas["api_desc_en"] = $api_desc_en;
     }

     private $api_title_en;

     public function getApiTitleEn()
     {
         return $this->$api_title_en;
     }

     public function setApiTitleEn($api_title_en)
     {
         $this->api_title_en = $api_title_en;
         $this->apiParas["api_title_en"] = $api_title_en;
     }

     private $timeout;

     public function getTimeout()
     {
         return $this->$timeout;
     }

     public function setTimeout($timeout)
     {
         $this->timeout = $timeout;
         $this->apiParas["timeout"] = $timeout;
     }

     private $api_desc;

     public function getApiDesc()
     {
         return $this->$api_desc;
     }

     public function setApiDesc($api_desc)
     {
         $this->api_desc = $api_desc;
         $this->apiParas["api_desc"] = $api_desc;
     }

     private $api_name;

     public function getApiName()
     {
         return $this->$api_name;
     }

     public function setApiName($api_name)
     {
         $this->api_name = $api_name;
         $this->apiParas["api_name"] = $api_name;
     }

     private $api_rank;

     public function getApiRank()
     {
         return $this->$api_rank;
     }

     public function setApiRank($api_rank)
     {
         $this->api_rank = $api_rank;
         $this->apiParas["api_rank"] = $api_rank;
     }

     private $concurrent_count;

     public function getConcurrentCount()
     {
         return $this->$concurrent_count;
     }

     public function setConcurrentCount($concurrent_count)
     {
         $this->concurrent_count = $concurrent_count;
         $this->apiParas["concurrent_count"] = $concurrent_count;
     }

     private $return_example_xml;

     public function getReturnExampleXml()
     {
         return $this->$return_example_xml;
     }

     public function setReturnExampleXml($return_example_xml)
     {
         $this->return_example_xml = $return_example_xml;
         $this->apiParas["return_example_xml"] = $return_example_xml;
     }

     private $error_code;

     public function getErrorCode()
     {
         return $this->$error_code;
     }

     public function setErrorCode($error_code)
     {
         $this->error_code = $error_code;
         $this->apiParas["error_code"] = $error_code;
     }

     private $online_url;

     public function getOnlineUrl()
     {
         return $this->$online_url;
     }

     public function setOnlineUrl($online_url)
     {
         $this->online_url = $online_url;
         $this->apiParas["online_url"] = $online_url;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.rop.api.create";
     }
     public function check()     {          }}
