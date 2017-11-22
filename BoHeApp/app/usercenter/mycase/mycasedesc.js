import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Promise from 'bluebird'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';

import { loadDesc } from 'app/redux/reducers/case_patient.js'
import { wxJdkLoad } from 'app/redux/reducers/wxjdk.js'

import { Desc } from './view/description.js'
//var requirejs = require('requirejs')
//import { require as requirejs, define as definejs } from 'requirejs/require.js'

@asyncConnect([{
    promise: ({ store: { dispatch, getState }, params }) => {
        const promises = [];
        console.log("casedesc!!!!!!")
        var state = getState();
        var sel = state.getIn(['case_patient', 'frontcase']).toJS();
        promises.push(dispatch(loadDesc({ id: sel.id })))
        return Promise.all(promises);
    }
}])
@connect(
    state => {
        var idx = state.getIn(['case_patient', 'frontcase','idx']);
        var acase = state.getIn(['case_patient', 'cases']).get(idx)
        return { acase }
    }, { pushState: push })
export default class MyCaseDesc extends Component {
    static propTypes = {
        tooth_pic: React.PropTypes.string.isRequired,
        tooth_square: React.PropTypes.number.isRequired,
        tooth_type: React.PropTypes.number.isRequired,
        tooth_suggestion: React.PropTypes.string.isRequired,
        acase:React.PropTypes.object.isRequired,
        id: React.PropTypes.number.isRequired
    };
    // methods
    componentDidMount() {

        if (typeof window !== undefined)
            window.require(["http://res.wx.qq.com/open/js/jweixin-1.0.0.js"], function(para) {
                console.log("TTTTTTTTTTTTTTTTTTTTT")
                console.log(para)

            }, function() {
                debugger;
            });
    }

    render() {
        var acase = this.props.acase.toJS();
        return (Desc(acase));
    }

}
