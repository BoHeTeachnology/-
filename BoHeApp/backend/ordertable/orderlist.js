import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';
import Hammer from 'react-hammerjs'
import Promise from 'bluebird'
import Immutable from 'immutable'

import {
    OrderList
} from './view/orderlistpage.js'

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
	load as loadOrders,
    frontOrder as toShowOrderInfo,
    nextGroupOrders,
    deleteOrder
} from 'backend/redux/reducers/order_patient';

import {
    LoadedorLoading as successorLoading_doctor ,
    load as loadDoctors
} from 'backend/redux/reducers/user_doctor';

import {
    LoadedorLoading as successorLoading_clinic ,
    load as loadClinics
} from 'backend/redux/reducers/user_clinic';


import {
    push
} from 'react-router-redux';

import {
    connect
} from 'react-redux';

import  CheckOrder, { asyncEvent as asyncEventCheck } from './orderinfo/check.js'

import  Add, { asyncEvent as asyncEventAdd } from './orderinfo/add.js'

export const asyncEvent = [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadOrders({ user, num: 10, begin: 0, refresh: { flag: true } }));
                } else
                    return Promise.resolve();
            })
        } else {
            if (!successorLoading(getState())) {
                let state = getState();
                let user = state.getIn(['auth', 'user']).toJS();
                return dispatch(loadOrders({ user, num: 10, begin: 0, refresh: { flag: true } }));
            } else
                return Promise.resolve();
        }
    }
}, {
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading_doctor(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadDoctors({ user }));
                } else
                    return Promise.resolve();
            })
        } else {
                if (!successorLoading_doctor(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadDoctors({ user }));
                } else
                    return Promise.resolve();
        }
    }
},{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading_clinic(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadClinics({ user }));
                } else
                    return Promise.resolve();
            })
        } else {
                if (!successorLoading_clinic(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadClinics({ user }));
                } else
                    return Promise.resolve();
        }
    }
 }
];



@asyncConnect(asyncEvent)
@connect(
    state => {
        return {
        	auth : state.get('auth'),
            orderRepo: state.get('order_patient'),
            doctorRepo: state.get('user_doctor'),
            clinicRepo: state.get('user_clinic')
        }
    }, { pushState: push, load: loadOrders, toDetail:toShowOrderInfo,nextGroupOrders,deleteOrder })
export default class OrderListCom extends Component {
    constructor(props) {
      super(props);
      this.state = { deleteid:'',refresh:0};
      this.dateModal = { display:'none'}
    }
	// methods
	static propTypes = {
		orderRepo:React.PropTypes.object.isRequired,
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
    toAddOrder(){
        this.context.showRight({
            asyncProcess:asyncEventAdd,
            comCreater:function(){
               return <Add/>
            }
        })
    }
    toDeleteOrder(){
        console.log('[{{{}}}}}}}}]]]]]][[[][][]');
        console.log(this.state.deleteid);
        this.props.deleteOrder({id:this.state.deleteid });
    }
    getdeleteid(id){
        this.setState({deleteid:id});
        console.log(this.state.deleteid);
    }
    toEditOrder(){

    }
    toSearch(){

    }
    toOrderInfo(ev,idx,id){

        this.props.toDetail({ idx,id })

        this.context.showRight({
            asyncProcess:asyncEventAdd,
            comCreater:function(){
               return <CheckOrder/>
            }
        })
    }
    handlePageClick(data){

       this.state.deleteid = '';
       let selected = data.selected;

       this.props.load( { num: 10, begin: (selected*10), showbegin:(selected*10)  })

    }
    componentDidMount() {
            // require.ensure(['../modules/fillter/tabcomplete.min.js','../modules/fillter/livefilter.min.js','../modules/fillter/src/bootstrap-select.js'], function(require) {

            //     require('../modules/fillter/tabcomplete.min.js'),
            //     require('../modules/fillter/livefilter.min.js')
            //     require('../modules/fillter/src/bootstrap-select.js')
            // })

    }
    moreSlider(){
        console.log("uuuuu!!!!!!!!!!!")
        // window.$('.moreboxhide').slideToggle();
    }
    handleSelectDate(){
        this.dateModal.display = 'none';
        this.setState({...this.state,refresh:0});
    }
    showDateModal(){
        console.log(this.dateModal);
        this.dateModal.display == 'block'?this.dateModal.display='none':this.dateModal={...this.dateModal,display:'block',position:'absolute',left:150+'px',top:35+'px'};
        console.log(this.dateModal);
        this.setState({...this.state,refresh:0});
    }
	render() {
        console.log(this.props.orderRepo.toJS())
        if(this.props.auth.has('user')){
         console.log("PPPPPPPPPPPPPPPPPPPPPPPPPP")
		 var size = this.props.orderRepo.get('orders').size;
         var showbegin = this.props.orderRepo.get('showbegin');
         console.log("PPPPPPPPPPPPPPPPPPPPPPPPPP1")
         console.log(size)
	     var nodata = (size == 0) ? true : false;
	     var options = {
	        touchAction: 'pan-y'
	     };
        var height = window.innerHeight || document.documentElement.clientHeight
        var orders = [];
        var doctors = this.props.doctorRepo.get('doctors')?this.props.doctorRepo.get('doctors').toJS():[];
        var clinics = this.props.clinicRepo.get('clinics')?this.props.clinicRepo.get('clinics').toJS():[];;

        for(let i=0;(i<10)&&((showbegin+i)<size);i++){
             orders.push(this.props.orderRepo.getIn(['orders',showbegin+i]).toJS())
        }
        console.log("ffffggg")
        console.log(doctors)
        console.log(clinics)

            return OrderList({
                moreSlider:(::this.moreSlider),
                handlePageClick:(::this.handlePageClick),
                toOrderInfo:(::this.toOrderInfo),
                toSearch:(::this.toSearch),
                toAddOrder:(::this.toAddOrder),
                toDeleteOrder:(::this.toDeleteOrder),
                toEditOrder:(::this.toEditOrder),
                doctors, clinics, orders, nodata, options, length: size,
                handlePan: (::this.handlePan),
                handleRefresh:(::this.handleRefresh),
                getdeleteid:(::this.getdeleteid),
                deleteid:(this.state.deleteid),
                handleSelectDate:(::this.handleSelectDate),
                dateModal:this.dateModal,
                showDateModal:(::this.showDateModal)
            })
	    }else{
	        return <div/>;
	    }
	}


}
