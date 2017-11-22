import React , { Component,PropTypes } from 'react';

import { ValidatetwoUi } from './view/validatetwo.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'
import { Toast } from 'antd-mobile';
import { validateuploadtwo } from 'app/redux/reducers/validate';



@connect(
    state => {
        return {
          uploadtwores:state.getIn(['validate','uploadtwores']),
          validatestate:state.getIn(['validate','validatestate'])

        }
    }, { pushState:push,validateuploadtwo:validateuploadtwo })

export default class ValidateTwo extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {
          tagLists:[],
          currentIndex:0,
          address:'',
          keshi:'',
          job:'',
          describe:'',
        };
  	}

    static contextTypes = {
      store: PropTypes.object.isRequired
    };
    isContainObj(arr, obj) {
       var i = arr.length;
       while (i--) {
           if (arr[i] === obj) {
               return true;
           }
       }
       return false;
    }

addtagHandleClick(value){

if(this.state.tagLists.length>=3){

 Toast.info('最多添加三个标签', 1);
 return;
}

if(value.length==0){
 Toast.info('长度不能为空', 1);
 return;
}
if(this.isContainObj(this.state.tagLists,value)){
  Toast.info('不能添加重复标签', 1);
return;
}else{
    console.log('kkk')

this.setState({
  tagLists:[...this.state.tagLists,value],
  currentIndex:this.state.currentIndex+1
})
}
}

 removeByValue(arr, val) {
  for(var i=0; i<arr.length; i++) {
    if(arr[i] == val) {
      arr.splice(i, 1);
      break;
    }
  }
}
deletetagHandleClick(item){
  console.log(item)


  this.removeByValue(this.state.tagLists,item);
    console.log(this.state.tagLists)

  this.setState({
    ...this.state,
    tagLists:this.state.tagLists
  })
}
validateInputChange(ev,inputtype){

if(inputtype=='address'){
this.setState({
  ...this.state,
  address:ev
})
}else if (inputtype=='job') {
  this.setState({
    ...this.state,
    job:ev
  })

}else if (inputtype=='keshi') {
  this.setState({
    ...this.state,
    keshi:ev
  })

}else if (inputtype=='describe') {

  this.setState({
    ...this.state,
    describe:ev
  })
}
}

nexthandleclick(){

    console.log('ppp')
  var status =1;
  var vds= this.props.validatestate?this.props.validatestate.toJS():{};
if(vds&&vds.data.state==null){
 status=0;
}else {
  status=1;
}
  this.props.validateuploadtwo(status,this.state.address,this.state.keshi,this.state.job,this.state.tagLists.join("-"),this.state.describe).then(() =>{

   var currentstate =this.context.store.getState();
  var uploadtwores =currentstate.getIn(['validate','uploadtwores']).toJS();
if(uploadtwores.success=='0'){
  Toast.info(uploadtwores.message, 1);
}else{

  this.props.pushState('/doctorcenter/validatethree');
  }
},() =>{
    Toast.info('网络繁忙,请稍后再试', 1);
})


}

  	render(){
        return ValidatetwoUi({
    tagLists:(this.state.tagLists),
    currentIndex:(this.state.currentIndex),
    describe:(this.state.describe),
    addtagHandleClick:(::this.addtagHandleClick),
    deletetagHandleClick:(::this.deletetagHandleClick),
    nexthandleclick:(::this.nexthandleclick),
    validateInputChange:(::this.validateInputChange)
        });
  	}

}
