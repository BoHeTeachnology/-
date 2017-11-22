import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import ReactSwipe from 'react-swipe';
import loginstyles from 'app/common/css/login.css'
import Hammer from 'react-hammerjs'
import { Button,ButtonToolbar,Grid,Row,Col,Image,Thumbnail,PageHeader,small,Media,Tab,Nav,NavItem,Modal} from 'react-bootstrap';
import ImageView from 'react-imageview'
import ReactList from 'react-list';
import { qiniudomain } from 'app/util/utils.js'
import { Icon,Toast} from 'antd-mobile';
import { ListView } from 'antd-mobile';


export const MyNoteUi = ({
	showViewer,
	closes,
	show,
	onEndReached,
	dataSource,
	row,
	toLoad,
  currentNum,
  imagelist,
  noteloading
}) => {
        return (
	            <div style={styles.container} className='doctorinfo_container'>
    							<ListView ref="lv"
    									dataSource={dataSource}
    									renderRow={row}
    									className="am-list"
    									useBodyScroll
    									onScroll={() => { console.log('scroll'); }}
    									scrollRenderAheadDistance={500}
    									scrollEventThrottle={200}
    									onEndReached={onEndReached}
    									onEndReachedThreshold={10}
    									renderFooter={() => (<div style={{ padding: 10, textAlign: 'center' }}>{noteloading?'':'加载'}</div>)}
    								/>
          				<div>
                  {
                      !!showViewer && <ImageView imagelist={imagelist} close={ closes } current={ currentNum }/>
                  }
                  </div>
				      </div>
        );

}

const styles = {
	container:{
		margin:0,
		padding:0,
		backgroundColor:'#eff3f7',
		position:'relative'
	}
}
