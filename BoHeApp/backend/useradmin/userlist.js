import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'
import UserCom from './user.js'
import ReactList from 'react-list';
import Hammer from 'react-hammerjs'
import Promise from 'bluebird'
import Immutable from 'immutable'

import {
    UserList
} from './view/userlistpage.js'

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
	load as loadUsers,
    frontUserForInfo as toShowUserInfo,
    nextGroupUsers,
    delete_user
} from 'backend/redux/reducers/user_patient';

import {
    push
} from 'react-router-redux';

import {
    connect
} from 'react-redux';

import UserInfoCom,{ asyncEvent as containerasyncEvent } from './userinfo/container.js'

var assign = require('object.assign').getPolyfill();

export const asyncEvent = [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadUsers({ user, num: 10, begin: 0, refresh: { flag: true } }));
                } else
                    return Promise.resolve();
            })
        } else {
            if (!successorLoading(getState())) {
                let state = getState();
                let user = state.getIn(['auth', 'user']).toJS();
                console.log('33333333333---====')
                return dispatch(loadUsers({ user, num: 10, begin: 0, refresh: { flag: true } }));
            } else{
                console.log('44444444---====！！！！！！')
                let state = getState();
                let user = state.getIn(['auth', 'user']).toJS();
                console.log(user);
                return dispatch(loadUsers({ user, num: 10, begin: 0, refresh: { flag: true } }));
                //return Promise.resolve();
            }
        }
    }
}];


@asyncConnect(asyncEvent)
@connect(
    state => {
        return {
        	auth : state.get('auth'),
            userRepo: state.get('user_patient')
        }
    }, { pushState: push, load: loadUsers, toDetail:toShowUserInfo,nextGroupUsers,delete_user,loadUsers },(stateProps, dispatchProps, ownProps) =>{return  assign({}, ownProps, stateProps, dispatchProps) },{ withRef: true ,pure : true})
export default class UserListCom extends Component {
	// methods
    constructor(props){
        super(props);
        this.state = { account:'',company_name:'',real_name:'' }
    }
	static propTypes = {
		userRepo:React.PropTypes.object.isRequired,
	}
    static contextTypes = {
      showRight: React.PropTypes.func.isRequired,
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
        this.props.toDetail({ idx:'add',id:'add' })

        this.context.showRight({
            asyncProcess:[],
            comCreater:function(){
               return <UserInfoCom/>
            }
        })
    }
    chooseUser(id){
        console.log('CLICK_____----');
        console.log(id);
        this.setState({...this.state,user_id:id });
    }
    toDeleteUser(){
        console.log('DELDEL____DELDEL');
        let user_id = this.state.user_id;
        var that = this;
        this.props.delete_user({ user_id }).then(()=>{
            let user = that.props.auth.get('user').toJS();
            that.props.loadUsers({ user, num: 10, begin: 0, refresh: { flag: true } });
        })

    }
    change(ev,type){
        if(type == 'real_name')
            this.setState({...this.state,real_name: ev.target.value })
        else if(type == 'account')
            this.setState({...this.state,account: ev.target.value })
        else if(type == 'company_name')
            this.setState({...this.state,company_name: ev.target.value })
    }
    toEditUser(){

    }
    search(){
        let real_name = this.state.real_name;
        let account = this.state.account;
        let company_name = this.state.company_name;
        let user = this.props.auth.get('user').toJS();
        this.props.loadUsers({ user, num: 10, begin: 0, refresh: { flag: true },company_name,account,real_name });
    }
    reset(){
        var that = this;
        let real_name = '';
        let account = '';
        let company_name = '';
        let user = this.props.auth.get('user').toJS();
        this.props.loadUsers({ user, num: 10, begin: 0, refresh: { flag: true },company_name,account,real_name }).then(()=>{
            this.setState({...this.state,company_name:'',real_name:'',account:''})
        });
    }
    toUserInfo(ev,idx,id){

        this.props.toDetail({ idx,id })
        var data = this.props.userRepo.getIn(['users',idx]).toJS();
        this.context.showRight({
            asyncProcess:containerasyncEvent,
            comCreater:function(){
               return <UserInfoCom data={data}/>
            }
        })
    }
    handlePageClick(data){
       let selected = data.selected;
       return this.props.load( { num: 10, begin: (selected*10), showbegin:(selected*10)  })
    }
    componentDidMount() {

    }
	render() {
        console.log('~~~~~~~~~.....');
        console.log(this.props.userRepo.get('users').toJS());
        if(this.props.auth.has('user')){
		 var size = this.props.userRepo.get('users').size;
         var showbegin = this.props.userRepo.get('showbegin');
	     var nodata = (size == 0) ? true : false;
	     var options = {
	        touchAction: 'pan-y'
	     };
        var height = window.innerHeight || document.documentElement.clientHeight
        var data = [];
        for(let i=0;(i<10)&&((showbegin+i)<size);i++){
             data.push(this.props.userRepo.getIn(['users',showbegin+i]).toJS())
        }
        var count = this.props.userRepo.get('count');
        console.log('COUNT____count');
        console.log(count);
        console.log(data);
        return UserList({
            handlePageClick:(::this.handlePageClick),
            toUserInfo:(::this.toUserInfo),
            toAddUser:(::this.toAddUser),
            toDeleteUser:(::this.toDeleteUser),
            toEditUser:(::this.toEditUser),
            data,
            nodata,
            options,
            length: size,
            handlePan: (::this.handlePan),
            handleRefresh:(::this.handleRefresh),
            chooseUser:(::this.chooseUser),
            count,
            change:(::this.change),
            search:(::this.search),
            reset:(::this.reset),
            company_name:this.state.company_name,
            account:this.state.account,
            real_name:this.state.real_name
            })
	    }else{
	    return <div/>;
	    }
	}


}
