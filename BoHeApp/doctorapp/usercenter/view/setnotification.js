import React, {Component} from 'react';
import ReactDOM from 'react-dom'
export const SetNotificationUI = ({
  width,
  height,
  switchClickHandle,
  props,
}) => {

  return (
    <div className="notification_wrap">
      <div className="noti_item">
        <span>扫码通知</span>

      </div>

      <div className="noti_item">
        <span>预约／取消预约通知</span>

      </div>

      <div className="noti_item">
        <span>就诊支付通知</span>

      </div>

      <div className="noti_item">
        <span>医生注册通知</span>

      </div>

      <div className="noti_item">
        <span>医生资质审核</span>

      </div>

      <div className="noti_item">
        <span>医生通过认证 </span>

      </div>

    </div>
  )
}
