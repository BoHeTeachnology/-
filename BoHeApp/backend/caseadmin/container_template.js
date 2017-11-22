import React , { Component,PropTypes } from 'react';

import {
    push
} from 'react-router-redux';

import {
    isLoaded as isAuthLoaded,
    load as loadAuth,
    logout
} from 'backend/redux/reducers/auth';

import {
    connect
} from 'react-redux';

import Project from './template/project.js'

import Category  from './template/category.js'

import Subcategory from './template/subcategory.js'

import Popup from './template/popup.js'

import ErrorCenter from 'backend/errorcenter/case_index/errorcenter.js'

import Promise from 'bluebird'

import {
    asyncConnect
} from 'redux-connect'

import {
  LoadedorLoading as successorLoading ,
  load as loadIndex,
  pre_edit_project,
  pre_edit_category,
  pre_edit_subcate,
  pre_create_project,
  pre_create_category,
  pre_create_subcate,
} from 'backend/redux/reducers/case_index';

import {
  load_left_list
} from 'backend/redux/reducers/left_list';

import { space } from './case/space.js';

export const asyncEvent = [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadIndex({ user })).then(()=>{
                      return dispatch(load_left_list());
                    });
                }else{
                    return Promise.resolve();
                }
            })
        } else {
            if (!successorLoading(getState())) {
                let state = getState();
                let user = state.getIn(['auth', 'user']).toJS();
                return dispatch(loadIndex({ user })).then(()=>{
                      return dispatch(load_left_list());
                    });
            } else
                return Promise.resolve();
        }
    }
}];


@asyncConnect(asyncEvent)
@connect(
  state => ({
  }),
  { pushState: push,load: loadIndex,pre_edit_project,pre_edit_category,pre_edit_subcate,pre_create_project,pre_create_category,pre_create_subcate })
export default  class Container extends Component{
    constructor(props) {
        // code
      super(props);
      this.state = {
          type:1,
          showPop:0,
          catName:'',
          parent_id:'',
          toShowData:function(){
          return  <div/>
      }};

    }
    static contextTypes = {
        store: PropTypes.object.isRequired,
    };
    static childContextTypes = {
         showUserData: React.PropTypes.func.isRequired
    };

    getChildContext(){
        return {
            showUserData: (this.showUserData.bind(this))
        }
    }
    chooseProject(id){
      console.log('PRO');
      console.log(id);
       this.setState({...this.state, project:id });
    }
    chooseCategory(id,parentid){
      console.log('CAT');
      console.log(id);
      console.log(parentid);
       this.setState({...this.state, category:id ,project:parentid });
    }
    chooseSubcate(id,parentid){
      console.log('SUB');
      console.log(id);
      console.log(parentid);
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

       this.setState({...this.state, subcategory:id,category:parentid,project:project_id });
    }
    chooseType(type){
       this.setState({...this.state, type });
    }
    showUserData({ asyncProcess,itemid,comCreater,index }){

        console.log('SHOWUSERDATA____+++++=====')
        const promises = [];
        var self = this;

        var type = this.state.type;
        var project = this.state.project;
        var category = this.state.category;
        var subcategory = this.state.subcategory;
        console.log(subcategory)
        console.log(category)
        console.log(project)
        console.log("000000000")
        var _index = {type, project:{id:project}, category:{id:category}, subcategory:{id:subcategory}}

        _index = { ..._index, ...index }
        asyncProcess.forEach(function(p){
             promises.push(p.promise({store:self.context.store,params:{ index:_index }}))
        })

        return Promise.all(promises).then(function(s){


          self.setState({
            ...self.state,
            toShowData:function(index){
              return comCreater(index)
            },
            type: _index.type,
            project: _index.project.id,
            category: _index.category.id,
            subcategory: _index.subcategory.id,
            color:'green'
          })
        },function(e){

        })
    }
    subcateCom(categoryid,relations){
      return <Subcategory choose={::this.chooseSubcate} parentid={categoryid} relations={relations} popup={ ::this.popup } />
    }
    categoryCom(projectid,relations){
      console.log('WWWWWW')
      console.log(projectid);
      console.log(relations);
      return <Category choose={::this.chooseCategory} parentid={projectid} subcateCom={ ::this.subcateCom } relations={relations} categoryid={ this.state.category } popup={ ::this.popup } />
    }
    popup(type,ev,classify,level){
       ev.stopPropagation();
       if(!classify){

         var classify = {};
         classify.cat_name = '';
         classify.id = 0;
       }
       if(!level){
        var level = 0;
       }
       if(level == 0){
        this.props.pre_create_project()
       }else if(type == 1 && level == 1){
        this.props.pre_create_category()
       }else if(type == 2 && level == 1){
        this.props.pre_edit_project({id:classify.id})
       }else if(type == 1 && level == 2){
        this.props.pre_create_subcate()
       }else if(type == 2 && level == 2){
        this.props.pre_edit_category({id:classify.id})
       }else if(level == 3){
        this.props.pre_edit_subcate({id:classify.id})
       }
       this.setState({ ...this.state,showPop:1,popType:type,catName:classify.cat_name,self_id:classify.id,parent_id:classify.parent_id,level:level });
    }
    cancel(){
      this.setState({...this.state,showPop:0})
    }
    render(){
      console.log('重新渲染。。。。。。')
      console.log(this.state.subcategory);
      console.log(this.state.category)
      console.log(this.state.project)
      return (<div>
                 { space() }
                 <Project  choose={::this.chooseProject} categoryCom={ ::this.categoryCom } projectid={ this.state.project } popup={ ::this.popup } />
                 {this.state.toShowData({ color:this.state.color,popup:(::this.popup),chooseType:(::this.chooseType),type:this.state.type ,project:this.state.project ,category:this.state.category , subcategory:this.state.subcategory})}
                 <Popup project={this.state.project} category={this.state.category} subcategory={this.state.subcategory} cancel={ ::this.cancel } showPop={ this.state.showPop } popType={ this.state.popType } catName={ this.state.catName } parent_id={ this.state.parent_id} self_id={ this.state.self_id } level={ this.state.level } />
                 <ErrorCenter/>
              </div>)
    }
}

