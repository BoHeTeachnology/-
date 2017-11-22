import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import {
  load as loadIndex,
  edit_project,
  create_project,
  create_category,
  create_subcate,
  update_project,
  update_category,
  update_subcate,
  edit_category,
  edit_subcate,
  delete_cat
} from 'backend/redux/reducers/case_index';

import Panel, {
  asyncEvent as templateAsync
} from './template_panel.js'

import {
   _Popup_
} from './view/popup.js'

@connect(
  state => ({
     not_delete: state.getIn(['case_index','not_delete'])
  }),
  { pushState: push, load: loadIndex,
    edit_project,
    create_project,
    create_category,
    create_subcate,
    update_project,
    edit_category,
    update_category,
    update_subcate,
    edit_subcate,
    delete_cat
     })
export default class Popup extends Component {
    constructor(props) {
      super(props);
      this.state = { name:'' };
    }
    static contextTypes = {
      showUserData: PropTypes.func.isRequired
    };
    componentDidMount(){

    }
    componentDidUpdate(){

    }
    componentWillReceiveProps(nextProps){
      console.log(nextProps.popType);
      if( nextProps.popType == '2'){
        console.log('&&&&&&&&&*******');
        this.state.name = nextProps.catName;
      }else{
        this.state.name = '';
      }
    }
    change(ev,level,popType){

      if(level == 0){
        this.props.edit_project({ name:ev.target.value })
      }else if(level == 1 && popType == 1){
        this.props.edit_category({ name:ev.target.value })
      }else if(level == 1 && popType == 2){
        this.props.edit_project({ name:ev.target.value })
      }else if(level == 2 && popType == 1){
        this.props.edit_subcate({ name:ev.target.value })
      }else if(level == 2 && popType == 2) {
        this.props.edit_category({ name:ev.target.value })
      }else if(level == 3){
        this.props.edit_subcate({ name:ev.target.value })
      }
      this.setState({ ...this.state,name:ev.target.value })
    }
    create(self_id,level){
      var that = this;
      if(this.state.name == ''){
        that.props.cancel();
        return;
      }
      if(level == 0){
        this.props.create_project({ name:this.state.name,parentid:self_id }).then(()=>{
            that.props.cancel();
            that.setState({...that.state,name:''});
        },()=>{

        })
      }else if(level == 1){

        this.props.create_category({ name:this.state.name,parentid:self_id }).then(()=>{
            that.props.cancel();
            that.setState({...that.state,name:''});
        },()=>{

        })
      }else if(level == 2){

        this.props.create_subcate({ name:this.state.name,parentid:self_id }).then(()=>{
            that.props.cancel();
            that.setState({...that.state,name:''});
        },()=>{

        })
      }
    }
    update(self_id,parent_id,level){
      var that = this;
      if(this.state.name == ''){
        that.props.cancel();
        return;
      }
      if(level == 1){

        this.props.update_project({ id:self_id,name:this.state.name,parent_id }).then(()=>{
            that.props.cancel();
            that.setState({...that.state,name:''});
        },()=>{

        })
      }else if(level == 2){


        this.props.update_category({ id:self_id,name:this.state.name,parent_id }).then(()=>{
            that.props.cancel();
            that.setState({...that.state,name:''});
        },()=>{

        })
      }else if(level == 3){

        this.props.update_subcate({ id:self_id,name:this.state.name,parent_id }).then(()=>{
            that.props.cancel();
            that.setState({...that.state,name:''});
        },()=>{

        })
      }
    }
    kill(self_id){
      var that = this;
      this.props.delete_cat({ id:self_id }).then(()=>{
        that.props.cancel();
        console.log('____+++++');
        console.log(self_id);
        console.log(this.props.project);
        console.log(this.props.category);
        console.log(this.props.subcategory);
        if(self_id == this.props.project || self_id == this.props.category || self_id == this.props.subcategory){
          that.context.showUserData({
               asyncProcess:templateAsync,comCreater:function(index){
                   return <div/>
             },index:{}
            })
        }
      },()=>{
        that.props.cancel();
      });
    }
    render() {
      return _Popup_({
        showPop:(this.props.showPop),
        change:(::this.change),
        cancel:(::this.props.cancel),
        popType:(this.props.popType),
        name:(this.state.name),
        create:(::this.create),
        parent_id:(this.props.parent_id),
        self_id:(this.props.self_id),
        level:(this.props.level),
        update:(::this.update),
        kill:(::this.kill)
        })
    }

}
