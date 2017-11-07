<?php
class JdytripProductsListRequest
{
     private $apiParas = array();

     private $page_no;

     public function getPageNo()
     {
         return $this->$page_no;
     }

     public function setPageNo($page_no)
     {
         $this->page_no = $page_no;
         $this->apiParas["page_no"] = $page_no;
     }

     private $org_id;

     public function getOrgId()
     {
         return $this->$org_id;
     }

     public function setOrgId($org_id)
     {
         $this->org_id = $org_id;
         $this->apiParas["org_id"] = $org_id;
     }

     private $product_type;

     public function getProductType()
     {
         return $this->$product_type;
     }

     public function setProductType($product_type)
     {
         $this->product_type = $product_type;
         $this->apiParas["product_type"] = $product_type;
     }

     private $limit;

     public function getLimit()
     {
         return $this->$limit;
     }

     public function setLimit($limit)
     {
         $this->limit = $limit;
         $this->apiParas["limit"] = $limit;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.jdytrip.products.list";
     }
     public function check()     {          }}
