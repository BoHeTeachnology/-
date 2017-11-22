import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { LoadMore } from 'app/common/js/partial/loadmore.js'
import { MessageView } from './view/message.js'
import {messagegood} from 'app/redux/reducers/wechathome';
import { qiniudomain } from 'app/util/utils.js'
import {Toast} from 'antd-mobile';


@connect(
    state => ({
      user:state.getIn(['auth','user']),
    }), { pushState: push,messagegood })
export default class Message extends Component {
    constructor(props) {
      super(props);
      this.state = {
        width:'',
        goodNum:this.props.great,
        goodState:'',
        imagelist:[]
      }
    }
    // methods
    toDetail() {

    }
    componentDidMount(){
        if(typeof window == undefined ){
            return;
        }
        var width = window.innerWidth || document.documentElement.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight;
        // var _imagelist = [];
        // var that = this;
        // console.log('iiiiii------')
        // console.log(this.props.featured_images)
        // this.props.featured_images?this.props.featured_images.map((image)=>{
        //     let img = new Image();
        //     img.src = qiniudomain+image;
        //     img.onload = function(){
        //         console.log(img.width);
        //         console.log(img.height);
        //         _imagelist.push({
        //             src:image,
        //             width:img.width,
        //             height:img.height,
        //         })
        //         console.log('onload!!!!!------11111111')
        //         if(that.props.featured_images.length ==  _imagelist.length){
        //             console.log('onload!!!!!------22222222')
        //             that.setState({...that.state,imagelist:_imagelist})
        //         }
        //     }
        // }):'';
        this.setState({...this.state,width,height});
    }
    good(id){
      if(this.props.user){
          if(this.state.goodState){
            return;
          }
          this.props.messagegood({id,type:0}).then(()=>{
            this.setState({...this.state,goodState:true,goodNum:this.state.goodNum+1})
          },()=>{
            Toast.info('不能重复点赞',1)
          })
       }else{
         Toast.info('请先登录',1)
      }


    }
    render() {
      if (this.props.flag) {
        return (LoadMore({loading: this.props.loading}))
      } else{
        console.log('MMMessage!!!')
        return MessageView ({
            ...this.props,
            width:this.state.width,
            height:this.state.height,
            show:(::this.props.show),
            goodNum:this.state.goodNum,
            good:(::this.good),
            goodState:this.state.goodState,
            // imagelist:this.state.imagelist
        })
      }

    }

}
