import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';
import Hammer from 'react-hammerjs'
import Promise from 'bluebird'
import Immutable from 'immutable'

import {
    asyncConnect
} from 'redux-connect'

import {
	isLoaded as isAuthLoaded,
	load as loadAuth,
	logout
} from 'backend/redux/reducers/auth';

import {
	LoadedorLoading as successorLoading ,
	load_labels,
    labelAdd
} from 'backend/redux/reducers/user_doctor';

import {
    push
} from 'react-router-redux';

import {
    connect
} from 'react-redux';

import { LabelSet } from './view/labelset.js';


export const asyncEvent =  [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                    let state = getState();
                    let user = state.getIn(['auth','user']).toJS();
                    return dispatch(load_labels( { user }));
            })
        }else{
                   let state = getState();
                   let user = state.getIn(['auth','user']).toJS();
                   return dispatch(load_labels( { user }));
        }
    }
}];


@asyncConnect(asyncEvent)
@connect(
    state => {
        return {
        	auth : state.get('auth'),
            labelRepo: state.getIn(['user_doctor','labels'])
        }
    }, { pushState: push, load: load_labels ,labelAdd})
export default class Labelset extends Component {
	// methods
	static propTypes = {
		labelRepo:React.PropTypes.object.isRequired,
	}
    static contextTypes = {
      showRight: PropTypes.func.isRequired
    };
    constructor(props) {
        // code
      super(props);
      this.state = { flush:0 }
      this.isShow = '0';
      this.labelname = '';
    }
    labeladdshow(){
        this.isShow = '1';
        this.setState({...this.state,flush:0});
    }
    labelchange(e){
        this.labelname = e.target.value;
        this.setState({...this.state,flush:0})
    }
    labeladd(labelname){
        this.isShow = '0';
        this.labelname = '';
        this.props.labelAdd({key:'name',val:labelname});
    }
	handlePan(ev) {

	}

    handleRefresh(resolve, reject) {

        this.props.load( { num: 10, begin: 0, refresh:{ flag:true, resolve,reject } } )
    }


    componentWillMount() {
        if (this.props.auth.has('user')) {
            return;
        } else {
            if (this.props.auth.getIn(['error', 'info']) == 'auth') {
                this.props.pushState('/login');
            }
        }
        return;

    }
    toAddUser(){
        this.context.showRight({
            asyncProcess:asyncEventAdd,
            comCreater:function(){
               return <AddDoctor/>
            }
        })
    }
    toDeleteUser(){

    }
    componentDidMount() {

    }
	render() {
        console.log(this.props.labelRepo);
        console.log(this.props.labelRepo.toJS())
        if(this.props.auth.has('user')){
		 var size = this.props.labelRepo.size;
	     var nodata = (size == 0) ? true : false;
	     var options = {
	        touchAction: 'pan-y'
	     };
        var height = window.innerHeight || document.documentElement.clientHeight
        var data = [];
        data = this.props.labelRepo?this.props.labelRepo.toJS():[];
        console.log("LLLLLRRRRRRRR")

        console.log("ffffggg")
        console.log(data)
        return LabelSet({ 
            toAddUser:(::this.toAddUser),
            toDeleteUser:(::this.toDeleteUser),
            data,
            nodata,
            options,
            length: size,
            handlePan: (::this.handlePan),
            handleRefresh:(::this.handleRefresh),
            labeladdshow:(::this.labeladdshow),
            isShow:this.isShow,
            labelname:this.labelname,
            labelchange:(::this.labelchange),
            labeladd:(::this.labeladd),
            })
	    }else{
	    return <div/>;
	    }
	}


}
