import React, {Component} from 'react';
import ReactDOM from 'react-dom'

export const OrderDetailUI = ({width, height}) => {
  return (
    <div className="orderdetail_wrap" style={{
      fontSize: '0.28rem',
      paddingTop: '0.2rem',
      paddingBottom: '0.05rem'
    }}>
      <div className="detail_top" style={{
        background: '#fff',
        margin: '0 0.2rem',
        position: 'relative',
        paddingBottom: '0.2rem'
      }}>
        <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
          width: '1rem',
          height: '1rem',
          borderRadius: '0.04rem',
          margin: '0.2rem',
          float: 'left'
        }}/>
        <p style={{
          margin: '0',
          paddingTop: '0.2rem'
        }}>张翠花</p>
        <p style={{
          margin: '0',
          paddingTop: '0.2rem'
        }}>18004025391</p>
        <span style={{
          position: 'absolute',
          right: '0.2rem',
          top: '0.2rem'
        }}>已完成</span>
      </div>

      <div className="detail_content" style={{
        margin: '0.2rem',
        background: '#fff'
      }}>

        <div className="content_item" style={{
          height: '0.8rem',
          lineHeight: '0.8rem',
          borderBottom: '1px solid #eee'
        }}>
          <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
            width: '0.4rem',
            height: '0.4rem',
            marginTop: '0.2rem',
            marginLeft: '0.2rem',
            marginRight: '0.2rem',
            display:'inline-block',
          }}/>
          <span style={{
            display: 'inline-block',
            lineHeight: '0.8rem',
            position: 'relative',
            margin: '0',
            marginRight: '0.2rem',

          }}>就诊时间：</span>
          <span style={{
            display: 'inline-block',
            lineHeight: '0.8rem',
            position: 'relative',
            margin: '0',
          }}>2017-03-17 19：00</span>
        </div>

        <div className="content_item" style={{
          height: '0.8rem',
          lineHeight: '0.8rem',
          borderBottom: '1px solid #eee'
        }}>
          <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
            width: '0.4rem',
            height: '0.4rem',
            marginTop: '0.2rem',
            marginLeft: '0.2rem',
            marginRight: '0.2rem',
            display:'inline-block',
          }}/>
          <span style={{
            display: 'inline-block',
            lineHeight: '0.8rem',
            position: 'relative',
            margin: '0',
            marginRight: '0.2rem',

          }}>预约项目：</span>
          <span style={{
            display: 'inline-block',
            lineHeight: '0.8rem',
            position: 'relative',
            margin: '0',
          }}>洗牙</span>
        </div>

        <div className="content_item" style={{
          height: '0.8rem',
          lineHeight: '0.8rem',
          borderBottom: '1px solid #eee'
        }}>
          <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
            width: '0.4rem',
            height: '0.4rem',
            marginTop: '0.2rem',
            marginLeft: '0.2rem',
            marginRight: '0.2rem',
            display:'inline-block',
          }}/>
          <span style={{
            display: 'inline-block',
            lineHeight: '0.8rem',
            position: 'relative',
            margin: '0',
            marginRight: '0.2rem',
          }}>补充项目：</span>
          <span style={{
            display: 'inline-block',
            lineHeight: '0.8rem',
            position: 'relative',
            margin: '0',
          }}>冷光美白</span>
        </div>

        <div className="content_item" style={{
          height: '0.8rem',
          lineHeight: '0.8rem',
          borderBottom: '1px solid #eee'
        }}>
          <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
            width: '0.4rem',
            height: '0.4rem',
            marginTop: '0.2rem',
            marginLeft: '0.2rem',
            marginRight: '0.2rem',
            display:'inline-block',
          }}/>
          <span style={{
            display: 'inline-block',
            lineHeight: '0.8rem',
            position: 'relative',
            margin: '0',
            marginRight: '0.2rem',
          }}>预约医生：</span>
          <span style={{
            display: 'inline-block',
            lineHeight: '0.8rem',
            position: 'relative',
            margin: '0',
          }}>南哲</span>
        </div>

        <div className="content_item" style={{
          height: '0.8rem',
          lineHeight: '0.8rem',
          borderBottom: '1px solid #eee'
        }}>
          <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
            width: '0.4rem',
            height: '0.4rem',
            marginTop: '0.2rem',
            marginLeft: '0.2rem',
            marginRight: '0.2rem',
            display:'inline-block',
          }}/>
          <span style={{
            display: 'inline-block',
            lineHeight: '0.8rem',
            position: 'relative',
            margin: '0',
            marginRight: '0.2rem',
          }}>支付状态：</span>
          <span style={{
            display: 'inline-block',
            lineHeight: '0.8rem',
            position: 'relative',
            margin: '0',
          }}>已支付</span>
        </div>

        <div className="content_item" style={{
          height: '0.8rem',
          lineHeight: '0.8rem',
          borderBottom: '1px solid #eee'
        }}>
          <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
            width: '0.4rem',
            height: '0.4rem',
            marginTop: '0.2rem',
            marginLeft: '0.2rem',
            marginRight: '0.2rem',
            display:'inline-block',
          }}/>
          <span style={{
            display: 'inline-block',
            lineHeight: '0.8rem',
            position: 'relative',
            margin: '0',
            marginRight: '0.2rem',
          }}>预约编号：</span>
          <span style={{
            display: 'inline-block',
            lineHeight: '0.8rem',
            position: 'relative',
            margin: '0',
          }}>70550904</span>
        </div>

        <div className="content_item" style={{
          height: '0.8rem',
          lineHeight: '0.8rem',
          borderBottom: '1px solid #eee'
        }}>
          <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
            width: '0.4rem',
            height: '0.4rem',
            marginTop: '0.2rem',
            marginLeft: '0.2rem',
            marginRight: '0.2rem',
            display:'inline-block',
          }}/>
          <span style={{
            display: 'inline-block',
            lineHeight: '0.8rem',
            position: 'relative',
            margin: '0',
            marginRight: '0.2rem',
          }}>预约诊所：</span>
          <span style={{
            display: 'inline-block',
            lineHeight: '0.8rem',
            position: 'relative',
            margin: '0',
          }}>固瑞齿科中海店</span>
        </div>

        <div className="content_item" style={{
          borderBottom: '1px solid #eee'
        }}>
          <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
            width: '0.4rem',
            height: '0.4rem',
            marginTop: '0.2rem',
            marginLeft: '0.2rem',
            marginRight: '0.2rem',
            float: 'left',
            display:'inline-block',
          }}/>
          <span style={{
            display: 'inline-block',
            lineHeight: '0.8rem',
            position: 'relative',
            margin: '0',
            marginRight: '0.2rem',
            float: 'left'
          }}>诊所地址：</span>
          <span style={{
            minHeight: '0.8rem',
            paddingTop: '0.1rem',
            paddingBottom: '0.1rem',
            display: 'block',
            paddingLeft: '2.2rem',
           }}>朝阳区光华路东口，首都经济贸易大学南门10号楼</span>
        </div>

      </div>

      <div className="detail_price" style={{
        margin: '0.2rem',
        background: '#fff',
        paddingBottom: '0.4rem'
      }}>
        <div className="priceitem">
          <div className="oldpricewrap" style={{
            padding: '0.2rem'
          }}>
            <span>冷光美白</span>
            <span style={{
              marginLeft: '0.4rem'
            }}>x1</span>
            <span style={{
              float: 'right'
            }}>¥4000.00</span>
          </div>

          <div className="newpricewrap" style={{
            paddingLeft: '0.2rem',
            paddingRight: '0.2rem'
          }}>
            <span>50%</span>
            <span style={{
              float: 'right'
            }}>¥4000.00</span>
          </div>
        </div>

        <div className="total_price">
          <div className="oldtotal_price" style={{
            padding: '0.2rem'
          }}>
            <span>合计：</span>
            <span style={{
              float: 'right'
            }}>¥4149.00</span>
          </div>
          <div className="newtotal_price" style={{
            padding: '0.2rem'
          }}>
            <span style={{
              float: 'right'
            }}>¥2074.50</span>
          </div>
        </div>

      </div>

    </div>
  )
}
