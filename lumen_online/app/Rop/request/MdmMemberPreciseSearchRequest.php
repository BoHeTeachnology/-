<?php
class MdmMemberPreciseSearchRequest
{
     private $apiParas = array();

     private $datatype;

     public function getDatatype()
     {
         return $this->$datatype;
     }

     public function setDatatype($datatype)
     {
         $this->datatype = $datatype;
         $this->apiParas["datatype"] = $datatype;
     }

     private $id;

     public function getId()
     {
         return $this->$id;
     }

     public function setId($id)
     {
         $this->id = $id;
         $this->apiParas["id"] = $id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.mdm.member.precise.search";
     }
     public function check()     {          }}
