import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { load as loadIndex } from 'backend/redux/reducers/case_index';

import {
   _SubCategory_
} from './view/subcategory.js'

import Panel, {
  asyncEvent as templateAsync
} from './template_panel.js'

@connect(
  state => ({
     subcategorys: state.getIn(['case_index','subcategorys'])
  }),
  { pushState: push, load: loadIndex })
export default class SubCategory extends Component {

    static contextTypes = {
      showUserData: PropTypes.func.isRequired,
      store: PropTypes.object.isRequired
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
      console.log('CHOOSE______CHOOSE')
      console.log(id);
      let idx = this.props.subcategorys.findIndex(value => value.get('id') == id)
      if(idx >= 0 ){
         let subcate = this.props.subcategorys.get(idx).toJS();
           if((!subcate.relations)||(subcate.relations.length == 0)){

              var state = this.context.store.getState();
              let projects = state.getIn(['case_index','projects']).toJS()
              let project_id;
              projects.map((project) =>{
                   if(project.relations){
                        project.relations.map((relation)=>{
                             if(relation == parentid){
                                  project_id = project.id
                             }
                        })
                   }
              })

             this.context.showUserData({
               asyncProcess:templateAsync,comCreater:function(index){
                console.log('~~~~~~~123456');
                    console.log(index.color);
                   return  <Panel  color={index.color} name={name} project={ index.project } type={ index.type } category={index.category} subcategory={ id } choose={index.chooseType}/>
             },index:{ type:1,project:{id:project_id}, category:{id:parentid}, subcategory:{ id }  }
            })
            return;
           }
     }
      this.props.choose(id,parentid);

    }
    render() {
      console.log('$$$111')
            var parentid = this.props.parentid;
            var subcategorys = [];
            console.log('张');
            console.log(parentid);
            console.log(this.props.relations);
            var relations = this.props.relations?this.props.relations:[];
            this.props.subcategorys?this.props.subcategorys.map((subcate)=>{
                relations.forEach(function(relation){
                    if(subcate.get('id') == relation){
                       subcategorys.push(subcate.toJS());
                    }
                })
            }):{}
            return (_SubCategory_({
              subcategorys,
              choose:(::this.choose),
              parentid,
              popup:(::this.props.popup)
            }))
    }


}