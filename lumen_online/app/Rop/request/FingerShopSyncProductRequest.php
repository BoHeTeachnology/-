<?php
class FingerShopSyncProductRequest
{
     private $apiParas = array();

     private $start_city;

     public function getStartCity()
     {
         return $this->$start_city;
     }

     public function setStartCity($start_city)
     {
         $this->start_city = $start_city;
         $this->apiParas["start_city"] = $start_city;
     }

     private $p_num;

     public function getPNum()
     {
         return $this->$p_num;
     }

     public function setPNum($p_num)
     {
         $this->p_num = $p_num;
         $this->apiParas["p_num"] = $p_num;
     }

     private $vender_id;

     public function getVenderId()
     {
         return $this->$vender_id;
     }

     public function setVenderId($vender_id)
     {
         $this->vender_id = $vender_id;
         $this->apiParas["vender_id"] = $vender_id;
     }

     private $p_type;

     public function getPType()
     {
         return $this->$p_type;
     }

     public function setPType($p_type)
     {
         $this->p_type = $p_type;
         $this->apiParas["p_type"] = $p_type;
     }

     private $dest_province;

     public function getDestProvince()
     {
         return $this->$dest_province;
     }

     public function setDestProvince($dest_province)
     {
         $this->dest_province = $dest_province;
         $this->apiParas["dest_province"] = $dest_province;
     }

     private $p_short_name;

     public function getPShortName()
     {
         return $this->$p_short_name;
     }

     public function setPShortName($p_short_name)
     {
         $this->p_short_name = $p_short_name;
         $this->apiParas["p_short_name"] = $p_short_name;
     }

     private $p_name;

     public function getPName()
     {
         return $this->$p_name;
     }

     public function setPName($p_name)
     {
         $this->p_name = $p_name;
         $this->apiParas["p_name"] = $p_name;
     }

     private $cover_img;

     public function getCoverImg()
     {
         return $this->$cover_img;
     }

     public function setCoverImg($cover_img)
     {
         $this->cover_img = $cover_img;
         $this->apiParas["cover_img"] = $cover_img;
     }

     private $back_port;

     public function getBackPort()
     {
         return $this->$back_port;
     }

     public function setBackPort($back_port)
     {
         $this->back_port = $back_port;
         $this->apiParas["back_port"] = $back_port;
     }

     private $pos_name;

     public function getPosName()
     {
         return $this->$pos_name;
     }

     public function setPosName($pos_name)
     {
         $this->pos_name = $pos_name;
         $this->apiParas["pos_name"] = $pos_name;
     }

     private $opera;

     public function getOpera()
     {
         return $this->$opera;
     }

     public function setOpera($opera)
     {
         $this->opera = $opera;
         $this->apiParas["opera"] = $opera;
     }

     private $start_port;

     public function getStartPort()
     {
         return $this->$start_port;
     }

     public function setStartPort($start_port)
     {
         $this->start_port = $start_port;
         $this->apiParas["start_port"] = $start_port;
     }

     private $back_rule;

     public function getBackRule()
     {
         return $this->$back_rule;
     }

     public function setBackRule($back_rule)
     {
         $this->back_rule = $back_rule;
         $this->apiParas["back_rule"] = $back_rule;
     }

     private $ctg_id;

     public function getCtgId()
     {
         return $this->$ctg_id;
     }

     public function setCtgId($ctg_id)
     {
         $this->ctg_id = $ctg_id;
         $this->apiParas["ctg_id"] = $ctg_id;
     }

     private $big_traffic;

     public function getBigTraffic()
     {
         return $this->$big_traffic;
     }

     public function setBigTraffic($big_traffic)
     {
         $this->big_traffic = $big_traffic;
         $this->apiParas["big_traffic"] = $big_traffic;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.finger.shop.sync.product";
     }
     public function check()     {          }}
