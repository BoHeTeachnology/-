<?php
class HfiveWeidianMemberGradeSaveRequest
{
     private $apiParas = array();

     private $member_ids;

     public function getMemberIds()
     {
         return $this->$member_ids;
     }

     public function setMemberIds($member_ids)
     {
         $this->member_ids = $member_ids;
         $this->apiParas["member_ids"] = $member_ids;
     }

     private $card_set_id;

     public function getCardSetId()
     {
         return $this->$card_set_id;
     }

     public function setCardSetId($card_set_id)
     {
         $this->card_set_id = $card_set_id;
         $this->apiParas["card_set_id"] = $card_set_id;
     }

     private $store_id;

     public function getStoreId()
     {
         return $this->$store_id;
     }

     public function setStoreId($store_id)
     {
         $this->store_id = $store_id;
         $this->apiParas["store_id"] = $store_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weidian.member.grade.save";
     }
     public function check()     {          }}
