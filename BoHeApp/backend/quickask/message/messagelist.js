import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import WeUI from 'react-weui';
const { Gallery, GalleryDelete, Uploader, Form, Cell,CellBody,FormCell,TextArea,Button} = WeUI;
import {
    isLoaded as isAuthLoaded,
    load as loadAuth,
    logout
} from 'backend/redux/reducers/auth';

import {
    asyncConnect
} from 'redux-connect'


import {
    load as load_message
} from 'backend/redux/reducers/message';

import {
    load_left_list
} from 'backend/redux/reducers/left_list';

import { _MessageList_ } from './view/messagelist.js'


export const asyncEvent = [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                    let state = getState();
                    let user = state.getIn(['auth','user']).toJS();
                    return dispatch(load_left_list());
            })
        } else {
                    let state = getState();
                    let user = state.getIn(['auth','user']).toJS();
                    return dispatch(load_left_list()).then(()=>{
                        return dispatch(load_message({ num:10,begin:1}))
                    });
        }
    }
}];


@asyncConnect(asyncEvent)
@connect(
  state => ({
     auth : state.get('auth'),
     messagelist: state.getIn(['message','messagelist']).toJS(),
     allpage: state.getIn(['message','allpage'])
  }),
  { pushState: push,load:load_message })
export default class MessageList extends Component {

    constructor(props) {
      super(props);
      this.state = { idx:0,deleteid:undefined,status:'',showDetail:false,gallery:false,files:[] };
    }
    componentDidUpdate(){

    }
    handlePageClick(data){
        let selected = data.selected;
        console.log(selected);
        this.props.load({ num:10,begin:selected+1});
    }
    delete_ask(){

    }
    getdeleteid(id,ev){
        ev.stopPropagation();
        var ele = ev.target || ev.srcElement;
        console.log(ele.tagName);
        if(ele.tagName == 'INPUT'){
         return;
        }
        this.setState({...this.state,deleteid:id});
    }
    reset(){
       this.setState({...this.state,status:''})
    }
    search(){

    }
    changeStatus(ev){
        this.setState({...this.state,status:ev.target.value})
    }
    detail(idx){
        console.log(idx);
        let files = [];
        let messagelist = this.props.messagelist;
        files.push({ url:messagelist[idx].photo});
        console.log(messagelist[idx].photo);
        console.log(files);
        this.setState({...this.state,showDetail:true,idx,files:files})
    }
    close(){
        this.setState({...this.state,showDetail:false})
    }
    reply(){

    }
    delete(){

    }
    noreply(){

    }
    renderGallery(){
        if(!this.state.gallery) return false;

        return (
            <Gallery src={this.state.gallery.url} show onClick={ e=> {
                //avoid click background item
                e.stopPropagation();
                this.setState({...this.state,gallery: false})
            }}>
            </Gallery>
        )
    }
    lookbig(gallery){
      this.setState({...this.state,gallery })
    }
    render() {
        var allpage = this.props.allpage;
        var messagelist = this.props.messagelist;
        console.log(allpage);
        console.log(messagelist);
        console.log('PPPP');
        if(this.props.auth.has('user')){
                return _MessageList_({
                    handlePageClick:(::this.handlePageClick),
                    allpage,
                    deleteid:this.state.deleteid,
                    delete_ask:(::this.delete_ask),
                    messagelist,
                    reset:(::this.reset),
                    search:(::this.search),
                    changeStatus:(::this.changeStatus),
                    status:this.state.status,
                    getdeleteid:(::this.getdeleteid),
                    detail:(::this.detail),
                    showDetail:this.state.showDetail,
                    close:(::this.close),
                    reply:(::this.reply),
                    noreply:(::this.noreply),
                    lookbig:(::this.lookbig),
                    renderGallery:(::this.renderGallery),
                    gallery:this.state.gallery,
                    files:this.state.files,
                    idx:this.state.idx
                })
        }else{
        return <div/>;
        }
    }


}


