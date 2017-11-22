import React,{Component} from 'react'
import {connect} from 'react-redux';
import {asyncConnect} from 'redux-connect'
import {push} from 'react-router-redux';
import Immutable from 'immutable'
import {addorder} from 'app/redux/reducers/wechathome';



import {MyNoteUi} from './view/mynote.js'
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';

import {get_doctorinfo,get_orderinfo,store_currentorderinfo,followdoctor,delfollow,load_note} from 'app/redux/reducers/wechathome';

import Message from 'app/doctor/message.js'
import {qiniudomain} from 'app/util/utils.js'
import { isElementVisible } from 'app/util/utils.js'
import { ListView } from 'antd-mobile';

const pernum = 5;

@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {
    let state = getState();
    return dispatch(load_note({page:1,num:pernum,first:true}))
  }
}])
@connect(state => {
  var notelist =state.getIn(['wechathome', 'notelist']);
  var noteloading =state.getIn(['wechathome', 'noteloading']);
  return {
    notelist,
    noteloading
  }
}, {pushState: push,load_note})

export default class MyNote extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    let notelist =  this.props.notelist?this.props.notelist.toJS():[];
    console.log(123456789);
    console.log(notelist)
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.notelist.toJS()),
    }
    this.page = 1;
    this.toLoad = true;

  }

  componentWillReceiveProps(nextProps) {
    console.log('dehui1');
    console.log(nextProps.notelist.toJS())
    console.log(this.props.notelist.toJS())
    if (nextProps.notelist !== this.props.notelist) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.notelist.toJS()),
      });
    }
  }

  onEndReached = (event) => {
    var that = this;
    if (!this.toLoad) {
      return;
    }
    let noteloading = this.props.noteloading;
    console.log('reach end', event);
    console.log(noteloading)
    if(!noteloading){
      this.toLoad = false;
      ++this.page;
      this.props.load_note({ num: pernum, page:this.page }).then(()=>{
        that.toLoad = true;
      })
    }
  }
  row(rowData, sectionID, rowID){
    console.log('dehui22222')
    console.log(rowData)
    rowData['idx'] = rowID
    return <Message key={rowID} {...rowData} show={this.show.bind(this)}/>
   }

   show(messageid, currentNum,index) {
     console.log('show????');
     console.log(currentNum);
     console.log(messageid);

     var notelist = this.props.notelist? this.props.notelist.toJS(): [];
     console.log(notelist);
     console.log(index);
     console.log(notelist[index].featured_images);
     let imagelist;
     notelist.map((message) => {
       console.log('~~~~222');
       console.log(message)
       if (message.id == messageid) {
         imagelist = message.featured_images;
       }
       // window.scrollTo(0,0);
     })
     var allimg = [];
     for (let i = 0; i < imagelist.length; i++) {
       var image = imagelist[i];
       allimg.push((qiniudomain + image))
     }
     console.log(allimg)
     this.setState({showViewer: true, currentNum, imagelist: allimg})
   }
   closes() {
     this.setState({showViewer: false})
   }
    render(){
        let noteloading = this.props.noteloading;
        var notelist = this.props.notelist?this.props.notelist.toJS():[];
        var toLoad = this.toLoad;
        return MyNoteUi({
          notelist,
          toLoad,
          noteloading,
          currentNum: this.state.currentNum,
          showViewer: this.state.showViewer,
          imagelist:this.state.imagelist,
          show: (:: this.show),
          closes: (:: this.closes),
          onEndReached:(::this.onEndReached),
          dataSource:this.state.dataSource,
          row:(::this.row)
        });
    }

}
