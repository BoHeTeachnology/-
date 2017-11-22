import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';
import Hammer from 'react-hammerjs'
import Promise from 'bluebird'
import Immutable from 'immutable'

import {
    ClinicList
} from './view/cliniclistpage.js'

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
	load as loadClinics,
    frontUserForInfo as toShowUserInfo,
    nextGroupUsers,
    clinicAdd
} from 'backend/redux/reducers/user_clinic';

import {
    push
} from 'react-router-redux';

import {
    connect
} from 'react-redux';

import  CheckClinic, { asyncEvent as asyncEventCheck } from './clinicinfo/check.js'

import  AddClinic, { asyncEvent as asyncEventAdd } from './clinicinfo/add.js'


export const asyncEvent =  [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading(getState())){
                    let state = getState();
                    let user = state.getIn(['auth','user']).toJS();
                    return dispatch(loadClinics( { user, num: 10, begin: 0, refresh:{flag:true} }));
                }
                else
                    return Promise.resolve();
            })
        }else{
             if (!successorLoading(getState())){
                   let state = getState();
                   let user = state.getIn(['auth','user']).toJS();
                   return dispatch(loadClinics( { user, num: 10, begin: 0, refresh:{flag:true}  }));
             }
             else
                   return Promise.resolve();
        }
    }
}];


@asyncConnect(asyncEvent)
@connect(
    state => {
        return {
        	auth : state.get('auth'),
            clinicRepo: state.get('user_clinic')
        }
    }, { pushState: push, load: loadClinics, toDetail:toShowUserInfo,nextGroupUsers,clinicAdd })
export default class ClinicListCom extends Component {
	// methods
	static propTypes = {
		clinicRepo:React.PropTypes.object.isRequired,
	}
    static contextTypes = {
        showRight: PropTypes.func.isRequired
    };
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

    }
    toDeleteUser(){

    }
    toEditUser(){

    }
    toSearch(){

    }
    toUserInfo(ev,idx,id){
        console.log('YYYYYYYY!!!!!!YYYYYYYY')
        console.log(idx);
        console.log(this.context)

        this.props.toDetail({ idx,id })

        this.context.showRight({
            asyncProcess:asyncEventCheck,
            comCreater:function(){
               return <CheckClinic/>
            }
        })
    }
    handlePageClick(data){
       let selected = data.selected;

       this.props.load( { num: 10, begin: (selected*10), showbegin:(selected*10)  })

    }
    componentDidMount() {

    }
    clinicadd(){
        this.context.showRight({
            asyncProcess:asyncEventAdd,
            comCreater:function(){
               return <AddClinic/>
            }
        })
    }
	render() {
        console.log(this.props.clinicRepo.toJS())
        if(this.props.auth.has('user')){
		 var size = this.props.clinicRepo.get('clinics').size;
         var showbegin = this.props.clinicRepo.get('showbegin');
	     var nodata = (size == 0) ? true : false;
	     var options = {
	        touchAction: 'pan-y'
	     };
        var height = window.innerHeight || document.documentElement.clientHeight
        var data = [];
        console.log("LLLLLRRRRRRRR")
        for(let i=0;(i<10)&&((showbegin+i)<size);i++){
             data.push(this.props.clinicRepo.getIn(['clinics',showbegin+i]).toJS())
        }

        console.log("ffffggg")
        console.log(data)
        return ClinicList({
                handlePageClick:(::this.handlePageClick),
                toUserInfo:(::this.toUserInfo),
                toSearch:(::this.toSearch),
                toAddUser:(::this.toAddUser),
                toDeleteUser:(::this.toDeleteUser),
                toEditUser:(::this.toEditUser),
                data,
                nodata,
                options,
                length: size,
                handlePan: (::this.handlePan),
                handleRefresh:(::this.handleRefresh),
                clinicadd:(::this.clinicadd)
            })
	    }else{
	    return <div/>;
	    }
	}
}
