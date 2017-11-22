import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom';
import Immutable from 'immutable'


import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import {
    isLoaded as isAuthLoaded,
    load as loadAuth,
    logout
} from 'backend/redux/reducers/auth';

import {
    asyncConnect
} from 'redux-connect'

import {
    load_template,
    edit_template,
    LoadedorLoading as successorLoading_template,
    update_template,
    create_template
} from 'backend/redux/reducers/case_template.js'

import {
   _Template_
} from './view/template.js'

import {
  LoadedorLoading as successorLoading ,
  load as loadIndex
} from 'backend/redux/reducers/case_index';



export const asyncEvent = [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading_template(getState(), params.index)) {
                    return dispatch(load_template(params.index));
                } else
                    return Promise.resolve();
            })
        } else {
            if (!successorLoading_template(getState(), params.index)) {
                return dispatch(load_template(params.index));
            } else
                return Promise.resolve();
        }
    }
}];


@asyncConnect(asyncEvent)
@connect(
  state => ({
     templates: state.getIn(['case_template','templates'])
  }),
  { pushState: push, load: loadIndex, edit_template ,update_template,load_template,create_template})
export default class Panel extends Component {

    constructor(props) {
        // code
      super(props);
      this.state={ showTip : false };
      this.color = 'green'
    }
    static contextTypes = {
      store: PropTypes.object.isRequired
    };
    componentDidMount(){
    }
    componentDidUpdate(){

    }
    componentWillReceiveProps(nextProps){
        console.log('RECEIVEPEROPS________');
        console.log(nextProps.color);
        if(Immutable.is(this.props.templates,nextProps.templates))
              this.color = nextProps.color;
          else
            console.log("ttttttttt")
    }
    choose(type){
        if(this.color == 'red'){
            this.setState({...this.state,showTip:true,type});
            return;
        }

        this.props.choose(type);
        var project = this.props.project;
        var category = this.props.category;
        var subcategory = this.props.subcategory;

        var _index = {type, project:{id:project}, category:{id:category}, subcategory:{id:subcategory}}
        var that = this;
        return this.props.load_template(_index).then(()=>{
            that.color = 'green';
        })
    }
    cancel(){
        this.setState({...this.state,showTip:false,type:''});
    }
    hideTip(){
        var that = this;
        var type = this.state.type;
        this.props.choose(type);
        var project = that.props.project;
        var category = that.props.category;
        var subcategory = that.props.subcategory;

        var _index = {type, project:{id:project}, category:{id:category}, subcategory:{id:subcategory}}
        this.props.load_template(_index).then(()=>{
            that.setState({ showTip:false })
            that.color = 'green';
        })
    }
    confirmTip(){
        var that = this;
        var project = this.props.project;
        var category = this.props.category;
        var subcategory = this.props.subcategory;
        var type = this.props.type;
        var identify = type+'_'+((project||(project==0))?project:'')+'_'+((category||(category==0))?category:'')+'_'+((subcategory||(subcategory==0))?subcategory:'')
        var template = this.props.templates.getIn([identify])?this.props.templates.getIn([identify]).toJS():{};
        if(this.props.templates.getIn([identify,'edit']).toJS().id){
            this.props.update_template({content:template.edit,template_id:identify,type:type,post_success:(::this.post_success)}).then(()=>{
                var type = that.state.type;
                that.props.choose(type);
                var project = that.props.project;
                var category = that.props.category;
                var subcategory = that.props.subcategory;

                var _index = {type, project:{id:project}, category:{id:category}, subcategory:{id:subcategory}}
                that.props.load_template(_index).then(()=>{
                    that.setState({ showTip:false })
                    that.color = 'green';
                })
            });
        }else{
            this.props.create_template({content:template.edit,template_id:identify,type:type,post_success:(::this.post_success)}).then(()=>{
                var type = that.state.type;
                that.props.choose(type);
                var project = that.props.project;
                var category = that.props.category;
                var subcategory = that.props.subcategory;

                var _index = {type, project:{id:project}, category:{id:category}, subcategory:{id:subcategory}}
                that.props.load_template(_index).then(()=>{
                    that.setState({ showTip:false })
                    that.color = 'green';
                })
            });
        }

    }
    change(key,ev,identify){
       var pairs = [{key , val: ev.target.value}]
       var pos = { identify };
       this.props.edit_template({pairs,pos})
       this.color = 'red';
    }
    post_success(){
        this.color = 'green';
    }
    save(){

        console.log('SAVE_____');
        var project = this.props.project;
        var category = this.props.category;
        var subcategory = this.props.subcategory;
        var type = this.props.type;
        var identify = type+'_'+((project||(project==0))?project:'')+'_'+((category||(category==0))?category:'')+'_'+((subcategory||(subcategory==0))?subcategory:'')
        var template = this.props.templates.getIn([identify])?this.props.templates.getIn([identify]).toJS():{};
        if(this.props.templates.getIn([identify,'edit']).toJS().id){
            this.props.update_template({content:template.edit,template_id:identify,type:type,post_success:(::this.post_success)});
        }else{
            this.props.create_template({content:template.edit,template_id:identify,type:type,post_success:(::this.post_success)})
        }

    }
    render() {
            var project = this.props.project;
            var category = this.props.category;
            var subcategory = this.props.subcategory;
            var type = this.props.type;
            var identify = type+'_'+((project||(project==0))?project:'')+'_'+((category||(category==0))?category:'')+'_'+((subcategory||(subcategory==0))?subcategory:'')
            console.log("999999999991111")
            console.log(this.color)
            var template = this.props.templates.getIn([identify])?this.props.templates.getIn([identify]).toJS():{};
            console.log(identify);
            console.log(template);
            if(!this.props.templates.hasIn([identify])){
                 return <div/>
            }
            var name = this.props.name;
            return (_Template_({
                edit:template.edit,
                choose:(::this.choose),
                identify,
                change:(::this.change),
                type:this.props.type,
                save:(::this.save),
                name,
                color:this.color,
                showTip:this.state.showTip,
                hideTip:(::this.hideTip),
                confirmTip:(::this.confirmTip),
                cancel:(::this.cancel)
            }))
    }


}