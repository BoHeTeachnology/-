<?php
class ExternalShopSyncProductRequest
{
     private $apiParas = array();

     private $line_topic;

     public function getLineTopic()
     {
         return $this->$line_topic;
     }

     public function setLineTopic($line_topic)
     {
         $this->line_topic = $line_topic;
         $this->apiParas["line_topic"] = $line_topic;
     }

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

     private $dest_city;

     public function getDestCity()
     {
         return $this->$dest_city;
     }

     public function setDestCity($dest_city)
     {
         $this->dest_city = $dest_city;
         $this->apiParas["dest_city"] = $dest_city;
     }

     private $back_pos;

     public function getBackPos()
     {
         return $this->$back_pos;
     }

     public function setBackPos($back_pos)
     {
         $this->back_pos = $back_pos;
         $this->apiParas["back_pos"] = $back_pos;
     }

     private $category_id;

     public function getCategoryId()
     {
         return $this->$category_id;
     }

     public function setCategoryId($category_id)
     {
         $this->category_id = $category_id;
         $this->apiParas["category_id"] = $category_id;
     }

     private $price;

     public function getPrice()
     {
         return $this->$price;
     }

     public function setPrice($price)
     {
         $this->price = $price;
         $this->apiParas["price"] = $price;
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

     private $peer_price;

     public function getPeerPrice()
     {
         return $this->$peer_price;
     }

     public function setPeerPrice($peer_price)
     {
         $this->peer_price = $peer_price;
         $this->apiParas["peer_price"] = $peer_price;
     }

     private $travel_mode;

     public function getTravelMode()
     {
         return $this->$travel_mode;
     }

     public function setTravelMode($travel_mode)
     {
         $this->travel_mode = $travel_mode;
         $this->apiParas["travel_mode"] = $travel_mode;
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

     private $line_grade;

     public function getLineGrade()
     {
         return $this->$line_grade;
     }

     public function setLineGrade($line_grade)
     {
         $this->line_grade = $line_grade;
         $this->apiParas["line_grade"] = $line_grade;
     }

     private $status;

     public function getStatus()
     {
         return $this->$status;
     }

     public function setStatus($status)
     {
         $this->status = $status;
         $this->apiParas["status"] = $status;
     }

     private $create_time;

     public function getCreateTime()
     {
         return $this->$create_time;
     }

     public function setCreateTime($create_time)
     {
         $this->create_time = $create_time;
         $this->apiParas["create_time"] = $create_time;
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

     private $last_date;

     public function getLastDate()
     {
         return $this->$last_date;
     }

     public function setLastDate($last_date)
     {
         $this->last_date = $last_date;
         $this->apiParas["last_date"] = $last_date;
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

     private $days;

     public function getDays()
     {
         return $this->$days;
     }

     public function setDays($days)
     {
         $this->days = $days;
         $this->apiParas["days"] = $days;
     }

     private $last_update_time;

     public function getLastUpdateTime()
     {
         return $this->$last_update_time;
     }

     public function setLastUpdateTime($last_update_time)
     {
         $this->last_update_time = $last_update_time;
         $this->apiParas["last_update_time"] = $last_update_time;
     }

     private $sales_range;

     public function getSalesRange()
     {
         return $this->$sales_range;
     }

     public function setSalesRange($sales_range)
     {
         $this->sales_range = $sales_range;
         $this->apiParas["sales_range"] = $sales_range;
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
         return "ruixue.external.shop.sync.product";
     }
     public function check()     {          }}
