import React, {Component} from 'react';
import ReactDOM from 'react-dom'

export const TransferSuccessUI = ({
  width,
  height
}) => {
  return (
    <div className="transfersuccess_wrap" style={{
      fontSize: '0.34rem',
      backgroundColor:'#fff',

    }}>
      <div className="top_user">
        <img src={require('doctorapp/common/images/bohelogo.png')} alt="" style={{
          width: '1.6rem',
          height: '1.6rem',
          border: '1px solid #eee',
          borderRadius: '50%',
          margin: '0.2rem',
          display:'inline-block',
        }}/>
        <span style={{
          position: 'absolute',
          top: '0.2rem',
          left:'2.2rem',
        }}>刘媛媛</span>
        <span style={{
          position: 'absolute',
          top: '1.2rem',
          left:'2.2rem',
        }}>已预约</span>
      </div>
      <div className="content_wrap">
        <div className="content_item">
          <div className="left_span" style={{
            width: '1rem',
            float: 'left'
          }}>
            <span style={{
              width: '0.4rem',
              height: '0.4rem',
              borderRadius: '50%',
              background: '#eee',
              display: 'block',
              margin: 'auto'
            }}></span>
          </div>
          <div className="right_content" style={{
            paddingLeft: '1rem',
            position: 'relative'
          }}>

            <h5 style={{
              margin: '0.2rem',
              fontSize: '0.24rem',
              fontWeight: 'normal',
            }}>本单收入：￥207.45  已到账，可在我的钱包中提现</h5>
            <h5 style={{
              margin: '0.2rem',
              fontSize: '0.24rem',
              fontWeight: 'normal',
            }}>2017-03-15 19：25</h5>

            <div className="shuxian" style={{
              position: 'absolute',
              left: '0.48rem',
              top: '0',
              width: '2px',
              height: '115%',
              background: '#eee'
            }}></div>
          </div>

        </div>

        <div className="content_item">
          <div className="left_span" style={{
            width: '1rem',
            float: 'left'
          }}>
            <span style={{
              width: '0.4rem',
              height: '0.4rem',
              borderRadius: '50%',
              background: '#eee',
              display: 'block',
              margin: 'auto'
            }}></span>
          </div>
          <div className="right_content" style={{
            paddingLeft: '1rem',
            position: 'relative'
          }}>

            <h5 style={{
              margin: '0.2rem',
              fontSize: '0.24rem',
              fontWeight: 'normal',
            }}>本单收入：￥207.45  已到账，可在我的钱包中提现</h5>
            <h5 style={{
              margin: '0.2rem',
              fontSize: '0.24rem',
              fontWeight: 'normal',
            }}>2017-03-15 19：25</h5>

            <div className="shuxian" style={{
              position: 'absolute',
              left: '0.48rem',
              top: '0',
              width: '2px',
              height: '115%',
              background: '#eee'
            }}></div>
          </div>

        </div>

        <div className="content_item">
          <div className="left_span" style={{
            width: '1rem',
            float: 'left'
          }}>
            <span style={{
              width: '0.4rem',
              height: '0.4rem',
              borderRadius: '50%',
              background: '#eee',
              display: 'block',
              margin: 'auto'
            }}></span>
          </div>
          <div className="right_content" style={{
            paddingLeft: '1rem',
            position: 'relative'
          }}>

            <h5 style={{
              margin: '0.2rem',
              fontSize: '0.24rem',
              fontWeight: 'normal',
            }}>本单收入：￥207.45  已到账，可在我的钱包中提现</h5>
            <h5 style={{
              margin: '0.2rem',
              fontSize: '0.24rem',
              fontWeight: 'normal',
            }}>2017-03-15 19：25</h5>

            <div className="shuxian" style={{
              position: 'absolute',
              left: '0.48rem',
              top: '0',
              width: '2px',
              height: '115%',
              background: '#eee'
            }}></div>
          </div>

        </div>

        <div className="content_item">
          <div className="left_span" style={{
            width: '1rem',
            float: 'left'
          }}>
            <span style={{
              width: '0.4rem',
              height: '0.4rem',
              borderRadius: '50%',
              background: '#eee',
              display: 'block',
              margin: 'auto'
            }}></span>
          </div>
          <div className="right_content" style={{
            paddingLeft: '1rem',
            position: 'relative'
          }}>

            <h5 style={{
              margin: '0.2rem',
              fontSize: '0.24rem',
              fontWeight: 'normal',
            }}>本单收入：￥207.45  已到账，可在我的钱包中提现</h5>
            <h5 style={{
              margin: '0.2rem',
              fontSize: '0.24rem',
              fontWeight: 'normal',
            }}>2017-03-15 19：25</h5>

            <div className="shuxian" style={{
              position: 'absolute',
              left: '0.48rem',
              top: '0',
              width: '2px',
              height: '115%',
              background: '#eee'
            }}></div>
          </div>

        </div>

        <div className="content_item">
          <div className="left_span" style={{
            width: '1rem',
            float: 'left'
          }}>
            <span style={{
              width: '0.4rem',
              height: '0.4rem',
              borderRadius: '50%',
              background: '#eee',
              display: 'block',
              margin: 'auto'
            }}></span>
          </div>
          <div className="right_content" style={{
            paddingLeft: '1rem',
            position: 'relative'
          }}>

            <h5 style={{
              margin: '0.2rem',
              fontSize: '0.24rem',
              fontWeight: 'normal',
            }}>本单收入：￥207.45  已到账，可在我的钱包中提现</h5>
            <h5 style={{
              margin: '0.2rem',
              fontSize: '0.24rem',
              fontWeight: 'normal',
            }}>2017-03-15 19：25</h5>

            <div className="shuxian" style={{
              position: 'absolute',
              left: '0.48rem',
              top: '0',
              width: '2px',
              height: '115%',
              background: '#eee'
            }}></div>
          </div>

        </div>

      </div>
      <div style={{
        position: 'fixed',
        bottom: '0.2rem',
        fontSize: '0.24rem',
        textAlign: 'center',
        width: '100%',
      }}>这一单有问题？联系客服(400)</div>
    </div>
  )
}
