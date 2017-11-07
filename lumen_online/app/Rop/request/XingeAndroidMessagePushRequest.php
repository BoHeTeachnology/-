<?php
class XingeAndroidMessagePushRequest
{
     private $apiParas = array();

     private $message_acceptime_start_min;

     public function getMessageAcceptimeStartMin()
     {
         return $this->$message_acceptime_start_min;
     }

     public function setMessageAcceptimeStartMin($message_acceptime_start_min)
     {
         $this->message_acceptime_start_min = $message_acceptime_start_min;
         $this->apiParas["message_acceptime_start_min"] = $message_acceptime_start_min;
     }

     private $message_action_confirm_on_package_download_url;

     public function getMessageActionConfirmOnPackageDownloadUrl()
     {
         return $this->$message_action_confirm_on_package_download_url;
     }

     public function setMessageActionConfirmOnPackageDownloadUrl($message_action_confirm_on_package_download_url)
     {
         $this->message_action_confirm_on_package_download_url = $message_action_confirm_on_package_download_url;
         $this->apiParas["message_action_confirm_on_package_download_url"] = $message_action_confirm_on_package_download_url;
     }

     private $message_content;

     public function getMessageContent()
     {
         return $this->$message_content;
     }

     public function setMessageContent($message_content)
     {
         $this->message_content = $message_content;
         $this->apiParas["message_content"] = $message_content;
     }

     private $tag_op;

     public function getTagOp()
     {
         return $this->$tag_op;
     }

     public function setTagOp($tag_op)
     {
         $this->tag_op = $tag_op;
         $this->apiParas["tag_op"] = $tag_op;
     }

     private $message_type;

     public function getMessageType()
     {
         return $this->$message_type;
     }

     public function setMessageType($message_type)
     {
         $this->message_type = $message_type;
         $this->apiParas["message_type"] = $message_type;
     }

     private $message_action_package_download_url;

     public function getMessageActionPackageDownloadUrl()
     {
         return $this->$message_action_package_download_url;
     }

     public function setMessageActionPackageDownloadUrl($message_action_package_download_url)
     {
         $this->message_action_package_download_url = $message_action_package_download_url;
         $this->apiParas["message_action_package_download_url"] = $message_action_package_download_url;
     }

     private $message_style_clearable;

     public function getMessageStyleClearable()
     {
         return $this->$message_style_clearable;
     }

     public function setMessageStyleClearable($message_style_clearable)
     {
         $this->message_style_clearable = $message_style_clearable;
         $this->apiParas["message_style_clearable"] = $message_style_clearable;
     }

     private $device_token;

     public function getDeviceToken()
     {
         return $this->$device_token;
     }

     public function setDeviceToken($device_token)
     {
         $this->device_token = $device_token;
         $this->apiParas["device_token"] = $device_token;
     }

     private $access_id;

     public function getAccessId()
     {
         return $this->$access_id;
     }

     public function setAccessId($access_id)
     {
         $this->access_id = $access_id;
         $this->apiParas["access_id"] = $access_id;
     }

     private $message_style_nid;

     public function getMessageStyleNid()
     {
         return $this->$message_style_nid;
     }

     public function setMessageStyleNid($message_style_nid)
     {
         $this->message_style_nid = $message_style_nid;
         $this->apiParas["message_style_nid"] = $message_style_nid;
     }

     private $message_action_confirm_on_url;

     public function getMessageActionConfirmOnUrl()
     {
         return $this->$message_action_confirm_on_url;
     }

     public function setMessageActionConfirmOnUrl($message_action_confirm_on_url)
     {
         $this->message_action_confirm_on_url = $message_action_confirm_on_url;
         $this->apiParas["message_action_confirm_on_url"] = $message_action_confirm_on_url;
     }

     private $message_send_time;

     public function getMessageSendTime()
     {
         return $this->$message_send_time;
     }

     public function setMessageSendTime($message_send_time)
     {
         $this->message_send_time = $message_send_time;
         $this->apiParas["message_send_time"] = $message_send_time;
     }

     private $message_style_lights;

     public function getMessageStyleLights()
     {
         return $this->$message_style_lights;
     }

     public function setMessageStyleLights($message_style_lights)
     {
         $this->message_style_lights = $message_style_lights;
         $this->apiParas["message_style_lights"] = $message_style_lights;
     }

     private $message_style_ring_raw;

     public function getMessageStyleRingRaw()
     {
         return $this->$message_style_ring_raw;
     }

     public function setMessageStyleRingRaw($message_style_ring_raw)
     {
         $this->message_style_ring_raw = $message_style_ring_raw;
         $this->apiParas["message_style_ring_raw"] = $message_style_ring_raw;
     }

     private $tag_value;

     public function getTagValue()
     {
         return $this->$tag_value;
     }

     public function setTagValue($tag_value)
     {
         $this->tag_value = $tag_value;
         $this->apiParas["tag_value"] = $tag_value;
     }

     private $message_loop_times;

     public function getMessageLoopTimes()
     {
         return $this->$message_loop_times;
     }

     public function setMessageLoopTimes($message_loop_times)
     {
         $this->message_loop_times = $message_loop_times;
         $this->apiParas["message_loop_times"] = $message_loop_times;
     }

     private $account;

     public function getAccount()
     {
         return $this->$account;
     }

     public function setAccount($account)
     {
         $this->account = $account;
         $this->apiParas["account"] = $account;
     }

     private $message_acceptime_end_min;

     public function getMessageAcceptimeEndMin()
     {
         return $this->$message_acceptime_end_min;
     }

     public function setMessageAcceptimeEndMin($message_acceptime_end_min)
     {
         $this->message_acceptime_end_min = $message_acceptime_end_min;
         $this->apiParas["message_acceptime_end_min"] = $message_acceptime_end_min;
     }

     private $message_style_icon_res;

     public function getMessageStyleIconRes()
     {
         return $this->$message_style_icon_res;
     }

     public function setMessageStyleIconRes($message_style_icon_res)
     {
         $this->message_style_icon_res = $message_style_icon_res;
         $this->apiParas["message_style_icon_res"] = $message_style_icon_res;
     }

     private $message_style_builder_id;

     public function getMessageStyleBuilderId()
     {
         return $this->$message_style_builder_id;
     }

     public function setMessageStyleBuilderId($message_style_builder_id)
     {
         $this->message_style_builder_id = $message_style_builder_id;
         $this->apiParas["message_style_builder_id"] = $message_style_builder_id;
     }

     private $message_expire_time;

     public function getMessageExpireTime()
     {
         return $this->$message_expire_time;
     }

     public function setMessageExpireTime($message_expire_time)
     {
         $this->message_expire_time = $message_expire_time;
         $this->apiParas["message_expire_time"] = $message_expire_time;
     }

     private $message_action_aty_attr_intent_flag;

     public function getMessageActionAtyAttrIntentFlag()
     {
         return $this->$message_action_aty_attr_intent_flag;
     }

     public function setMessageActionAtyAttrIntentFlag($message_action_aty_attr_intent_flag)
     {
         $this->message_action_aty_attr_intent_flag = $message_action_aty_attr_intent_flag;
         $this->apiParas["message_action_aty_attr_intent_flag"] = $message_action_aty_attr_intent_flag;
     }

     private $message_style_style_id;

     public function getMessageStyleStyleId()
     {
         return $this->$message_style_style_id;
     }

     public function setMessageStyleStyleId($message_style_style_id)
     {
         $this->message_style_style_id = $message_style_style_id;
         $this->apiParas["message_style_style_id"] = $message_style_style_id;
     }

     private $message_custom;

     public function getMessageCustom()
     {
         return $this->$message_custom;
     }

     public function setMessageCustom($message_custom)
     {
         $this->message_custom = $message_custom;
         $this->apiParas["message_custom"] = $message_custom;
     }

     private $message_action_intent;

     public function getMessageActionIntent()
     {
         return $this->$message_action_intent;
     }

     public function setMessageActionIntent($message_action_intent)
     {
         $this->message_action_intent = $message_action_intent;
         $this->apiParas["message_action_intent"] = $message_action_intent;
     }

     private $message_title;

     public function getMessageTitle()
     {
         return $this->$message_title;
     }

     public function setMessageTitle($message_title)
     {
         $this->message_title = $message_title;
         $this->apiParas["message_title"] = $message_title;
     }

     private $message_style_icon_type;

     public function getMessageStyleIconType()
     {
         return $this->$message_style_icon_type;
     }

     public function setMessageStyleIconType($message_style_icon_type)
     {
         $this->message_style_icon_type = $message_style_icon_type;
         $this->apiParas["message_style_icon_type"] = $message_style_icon_type;
     }

     private $message_style_small_icon;

     public function getMessageStyleSmallIcon()
     {
         return $this->$message_style_small_icon;
     }

     public function setMessageStyleSmallIcon($message_style_small_icon)
     {
         $this->message_style_small_icon = $message_style_small_icon;
         $this->apiParas["message_style_small_icon"] = $message_style_small_icon;
     }

     private $message_multi_pkg;

     public function getMessageMultiPkg()
     {
         return $this->$message_multi_pkg;
     }

     public function setMessageMultiPkg($message_multi_pkg)
     {
         $this->message_multi_pkg = $message_multi_pkg;
         $this->apiParas["message_multi_pkg"] = $message_multi_pkg;
     }

     private $secret_key;

     public function getSecretKey()
     {
         return $this->$secret_key;
     }

     public function setSecretKey($secret_key)
     {
         $this->secret_key = $secret_key;
         $this->apiParas["secret_key"] = $secret_key;
     }

     private $message_action_activity;

     public function getMessageActionActivity()
     {
         return $this->$message_action_activity;
     }

     public function setMessageActionActivity($message_action_activity)
     {
         $this->message_action_activity = $message_action_activity;
         $this->apiParas["message_action_activity"] = $message_action_activity;
     }

     private $message_style_ring;

     public function getMessageStyleRing()
     {
         return $this->$message_style_ring;
     }

     public function setMessageStyleRing($message_style_ring)
     {
         $this->message_style_ring = $message_style_ring;
         $this->apiParas["message_style_ring"] = $message_style_ring;
     }

     private $message_action_package_name;

     public function getMessageActionPackageName()
     {
         return $this->$message_action_package_name;
     }

     public function setMessageActionPackageName($message_action_package_name)
     {
         $this->message_action_package_name = $message_action_package_name;
         $this->apiParas["message_action_package_name"] = $message_action_package_name;
     }

     private $message_loop_interval;

     public function getMessageLoopInterval()
     {
         return $this->$message_loop_interval;
     }

     public function setMessageLoopInterval($message_loop_interval)
     {
         $this->message_loop_interval = $message_loop_interval;
         $this->apiParas["message_loop_interval"] = $message_loop_interval;
     }

     private $message_action_aty_attr_pending_intent_flag;

     public function getMessageActionAtyAttrPendingIntentFlag()
     {
         return $this->$message_action_aty_attr_pending_intent_flag;
     }

     public function setMessageActionAtyAttrPendingIntentFlag($message_action_aty_attr_pending_intent_flag)
     {
         $this->message_action_aty_attr_pending_intent_flag = $message_action_aty_attr_pending_intent_flag;
         $this->apiParas["message_action_aty_attr_pending_intent_flag"] = $message_action_aty_attr_pending_intent_flag;
     }

     private $message_action_type;

     public function getMessageActionType()
     {
         return $this->$message_action_type;
     }

     public function setMessageActionType($message_action_type)
     {
         $this->message_action_type = $message_action_type;
         $this->apiParas["message_action_type"] = $message_action_type;
     }

     private $message_style_vibrate;

     public function getMessageStyleVibrate()
     {
         return $this->$message_style_vibrate;
     }

     public function setMessageStyleVibrate($message_style_vibrate)
     {
         $this->message_style_vibrate = $message_style_vibrate;
         $this->apiParas["message_style_vibrate"] = $message_style_vibrate;
     }

     private $message_action_url;

     public function getMessageActionUrl()
     {
         return $this->$message_action_url;
     }

     public function setMessageActionUrl($message_action_url)
     {
         $this->message_action_url = $message_action_url;
         $this->apiParas["message_action_url"] = $message_action_url;
     }

     private $message_acceptime_end_hour;

     public function getMessageAcceptimeEndHour()
     {
         return $this->$message_acceptime_end_hour;
     }

     public function setMessageAcceptimeEndHour($message_acceptime_end_hour)
     {
         $this->message_acceptime_end_hour = $message_acceptime_end_hour;
         $this->apiParas["message_acceptime_end_hour"] = $message_acceptime_end_hour;
     }

     private $message_acceptime_start_hour;

     public function getMessageAcceptimeStartHour()
     {
         return $this->$message_acceptime_start_hour;
     }

     public function setMessageAcceptimeStartHour($message_acceptime_start_hour)
     {
         $this->message_acceptime_start_hour = $message_acceptime_start_hour;
         $this->apiParas["message_acceptime_start_hour"] = $message_acceptime_start_hour;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.xinge.android.message.push";
     }
     public function check()     {          }}
