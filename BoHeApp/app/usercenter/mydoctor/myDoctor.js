import React, {Component} from 'react'

import {Link, History} from 'react-router'
import {MyDoctorUi} from './view/mydoctor.js'
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import {asyncConnect} from 'redux-connect'
import { get_attention_doctorlist } from 'app/redux/reducers/doctorlist';


@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {


      const promises = [];
      promises.push(dispatch(get_attention_doctorlist()));
      return Promise.all(promises);

  }
}])

@connect(state => ({
  attention_doctorlist:state.getIn(['doctorlist','attention_doctorlist'])
}), {
  pushState: push,
})

export default class MyDoctor extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

attentiondoctorclickhandle(doc_id){
  this.props.pushState('/doctorinfo/' + doc_id + '/' + 'null' + '/' + 'true');

}

  render() {
    let  attention_doctorlist =this.props.attention_doctorlist?this.props.attention_doctorlist.toJS():[];
    return attention_doctorlist.length!=0?MyDoctorUi({
    attention_doctorlist,
    attentiondoctorclickhandle:(::this.attentiondoctorclickhandle),
  }):(<div className="orderlistnonewrap" style={{textAlign:'center'}}>
    <img style={{ marginTop:'50%' }} src={require('app/common/images/noneorderlist.png')} alt=""/>
   <p style={{ marginTop:'0.2rem',color:' #888' }}>没有关注的医生</p>
  </div>
)
  }

}
