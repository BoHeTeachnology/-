import React, {Component} from 'react';
import ReactDOM from 'react-dom'

export const MyorderUI = ({
  width,
  height,
  orderListArray,
}) => {
  return (

    <div className="myorder_wrap" style={{
      fontSize: '0.28rem',
      backgroundColor:'#fff',
    }}>
      {
        orderListArray.map((item, index) => {
        return (
          <div className="myorder_itemwrap">
            <div className="item_top" style={{
              background: '#f3f3f3'
            }}>
              <p style={{
                padding: '0.1rem 0.3rem',
                margin: '0'
              }}>9.20日</p>
              <p style={{
                padding: '0.1rem 0rem 0.1rem 0.3rem',
                margin: '0'
              }}>出诊地址：联合丽格（北京市朝阳区广渠路37号）</p>
            </div>
            <div className="item_content" style={{
              position: 'relative',
              paddingBottom: '0.2rem',
              borderBottom: '1px solid #eee',
            }}>
              <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
                width: '1.6rem',
                height: '1.6rem',
                float: 'left',
                border: '1px solid #eee',
                borderRadius: '50%',
                marginLeft: '0.3rem',
                marginRight: '0.2rem'
              }}/>
              <p style={{
                paddingLeft: '2.1rem',
                margin: '0.3rem 0 0 0'
              }}>田田（12岁）</p>
              <p style={{
                paddingLeft: '2.1rem',
                margin: '0.1rem 0 0 0'
              }}>预约项目：口腔检查、洗牙</p>
              <p style={{
                paddingLeft: '2.1rem',
                margin: '0',
                marginTop: '0.1rem'
              }}>预约时间：9:00</p>
              <p style={{
                paddingLeft: '2.1rem',
                margin: '0',
                marginTop: '0.1rem'
              }}>备注信息：想咨询正畸服务</p>
              <span style={{
                position: 'absolute',
                right: '0',
                top: '-0.3rem ',
                background: '#eee',
                fontSize: '0.26rem',
                padding: '0.08rem'
              }}>已取消</span>
            </div>

            <div className="item_content" style={{
              position: 'relative',
              paddingBottom: '0.2rem',
              borderBottom: '1px solid #eee',
            }}>
              <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
                width: '1.6rem',
                height: '1.6rem',
                float: 'left',
                border: '1px solid #eee',
                borderRadius: '50%',
                marginLeft: '0.3rem',
                marginRight: '0.2rem'
              }}/>
              <p style={{
                paddingLeft: '2.1rem',
                margin: '0.3rem 0 0 0'
              }}>田田（12岁）</p>
              <p style={{
                paddingLeft: '2.1rem',
                margin: '0.1rem 0 0 0'
              }}>预约项目：口腔检查、洗牙</p>
              <p style={{
                paddingLeft: '2.1rem',
                margin: '0',
                marginTop: '0.1rem'
              }}>预约时间：9:00</p>
              <p style={{
                paddingLeft: '2.1rem',
                margin: '0',
                marginTop: '0.1rem'
              }}>备注信息：想咨询正畸服务</p>
              <span style={{
                position: 'absolute',
                right: '0',
                top: '-0.3rem ',
                background: '#eee',
                fontSize: '0.26rem',
                padding: '0.08rem'
              }}>已取消</span>
            </div>
            <div className="item_content" style={{
              position: 'relative',
              paddingBottom: '0.2rem',
              borderBottom: '1px solid #eee',
            }}>
              <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
                width: '1.6rem',
                height: '1.6rem',
                float: 'left',
                border: '1px solid #eee',
                borderRadius: '50%',
                marginLeft: '0.3rem',
                marginRight: '0.2rem'
              }}/>
              <p style={{
                paddingLeft: '2.1rem',
                margin: '0.3rem 0 0 0'
              }}>田田（12岁）</p>
              <p style={{
                paddingLeft: '2.1rem',
                margin: '0.1rem 0 0 0'
              }}>预约项目：口腔检查、洗牙</p>
              <p style={{
                paddingLeft: '2.1rem',
                margin: '0',
                marginTop: '0.1rem'
              }}>预约时间：9:00</p>
              <p style={{
                paddingLeft: '2.1rem',
                margin: '0',
                marginTop: '0.1rem'
              }}>备注信息：想咨询正畸服务</p>
              <span style={{
                position: 'absolute',
                right: '0',
                top: '-0.3rem ',
                background: '#eee',
                fontSize: '0.26rem',
                padding: '0.08rem'
              }}>已取消</span>
            </div>

          </div>
        )
      })
}

    </div>
  )
}
