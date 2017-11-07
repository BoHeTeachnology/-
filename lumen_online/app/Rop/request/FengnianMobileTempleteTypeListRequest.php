<?php
class FengnianMobileTempleteTypeListRequest
{
     private $apiParas = array();

     private $modle_cate;

     public function getModleCate()
     {
         return $this->$modle_cate;
     }

     public function setModleCate($modle_cate)
     {
         $this->modle_cate = $modle_cate;
         $this->apiParas["modle_cate"] = $modle_cate;
     }

     private $modle_cate_id;

     public function getModleCateId()
     {
         return $this->$modle_cate_id;
     }

     public function setModleCateId($modle_cate_id)
     {
         $this->modle_cate_id = $modle_cate_id;
         $this->apiParas["modle_cate_id"] = $modle_cate_id;
     }

     private $modle_type;

     public function getModleType()
     {
         return $this->$modle_type;
     }

     public function setModleType($modle_type)
     {
         $this->modle_type = $modle_type;
         $this->apiParas["modle_type"] = $modle_type;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.fengnian.mobile.templete.type.list";
     }
     public function check()     {          }}
