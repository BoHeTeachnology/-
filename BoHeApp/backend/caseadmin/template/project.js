import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { load as loadIndex } from 'backend/redux/reducers/case_index';

import Panel, {
  asyncEvent as templateAsync
} from './template_panel.js'

import {
   _Project_
} from './view/project.js'

@connect(
  state => ({
     projects: state.getIn(['case_index','projects'])
  }),
  { pushState: push, load: loadIndex })
export default class Project extends Component {

    static contextTypes = {
      showUserData: PropTypes.func.isRequired
    };
    componentDidMount(){

    }
    componentDidUpdate(){

    }
    choose(id,name,ev){
      console.log('RRRRTTTT-----')
           ev.stopPropagation();
           var ele = ev.target || ev.srcElement;
           console.log(ele.tagName);
           if(ele.tagName == 'INPUT'){
             return;
           }

      let idx = this.props.projects.findIndex(value => value.get('id') == id)
      if(idx >= 0 ){
         let project = this.props.projects.get(idx).toJS();
           if((!project.relations)||(project.relations.length == 0)){
             this.context.showUserData({
               asyncProcess:templateAsync,comCreater:function(index){
                   return  <Panel color={index.color} name={name} project={ id } type={ index.type } category={ index.category } subcategory={ index.subcategory } choose={index.chooseType}/>
             },index:{ type:1,project:{id},category:{ id: undefined}, subcategory:{ id:undefined } }
            })
             return
           }
      }
            this.props.choose(id);
    }
    render() {
            var projects = this.props.projects?this.props.projects.toJS():[];
            var projectid = this.props.projectid;
            return _Project_({
              projectid,
              projects,
              choose:(::this.choose),
              categoryCom:(::this.props.categoryCom),
              popup:(::this.props.popup)
              })
    }


}
