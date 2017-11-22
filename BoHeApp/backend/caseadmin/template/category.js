import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { load as loadIndex } from 'backend/redux/reducers/case_index';

import {
   _Category_
} from './view/category.js'

import Panel, {
  asyncEvent as templateAsync
} from './template_panel.js'

@connect(
  state => ({
     categorys: state.getIn(['case_index','categorys'])
  }),
  { pushState: push, load: loadIndex })
export default class Category extends Component {

    static contextTypes = {
      showUserData: PropTypes.func.isRequired
    };
    componentDidMount(){
    }
    componentDidUpdate(){

    }
    choose(parentid,id,name,ev){
          ev.stopPropagation();
          var ele = ev.target || ev.srcElement;
           console.log(ele.tagName);
           if(ele.tagName == 'INPUT'){
             return;
           }
      let idx = this.props.categorys.findIndex(value => value.get('id') == id)
      console.log('idx_____---');
      console.log(idx)
      if(idx >= 0 ){
         let category = this.props.categorys.get(idx).toJS();
           if((!category.relations)||(category.relations.length == 0)){
             this.context.showUserData({
               asyncProcess:templateAsync,comCreater:function(index){
                   return  <Panel color={index.color} name={name} project={ index.project } type={ index.type } category={ id } subcategory={index.subcategory} choose={index.chooseType}/>
             },index:{ type:1,project:{id:parentid },category:{ id },subcategory:{ id:undefined } }
            })
             return;
           }
     }
     console.log('%%%---');
     console.log(id);
     console.log(parentid)
     this.props.choose(id,parentid);
    }
    render() {
            var categorys = [];
            var parentid = this.props.parentid;
            var relations = this.props.relations?this.props.relations:[];
            this.props.categorys?this.props.categorys.map((category)=>{
                relations.forEach(function(relation){
                    if(category.get('id') == relation){
                       categorys.push(category.toJS());
                    }
                });
            }):{}
            var categoryid = this.props.categoryid;
            return (_Category_({
              categoryid,
              categorys,
              choose:(::this.choose),
              parentid,
              subcateCom:(::this.props.subcateCom),
              popup:(::this.props.popup)
            }))
    }


}