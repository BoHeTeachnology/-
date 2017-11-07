<?php
class HfiveWeixinApiMediaUploadtocosbymediaidRequest
{
     private $apiParas = array();

     private $media_id;

     public function getMediaId()
     {
         return $this->$media_id;
     }

     public function setMediaId($media_id)
     {
         $this->media_id = $media_id;
         $this->apiParas["media_id"] = $media_id;
     }

     private $type;

     public function getType()
     {
         return $this->$type;
     }

     public function setType($type)
     {
         $this->type = $type;
         $this->apiParas["type"] = $type;
     }

     private $weixin_id;

     public function getWeixinId()
     {
         return $this->$weixin_id;
     }

     public function setWeixinId($weixin_id)
     {
         $this->weixin_id = $weixin_id;
         $this->apiParas["weixin_id"] = $weixin_id;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.hfive.weixin.api.media.uploadtocosbymediaid";
     }
     public function check()     {          }}
