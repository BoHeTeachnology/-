import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { frontCase } from 'app/redux/reducers/case_patient.js'

import { Case } from './view/case.js'
import { LoadMore } from 'app/common/js/partial/loadmore.js'

@connect(
    state => ({}), { pushState: push, toShow: frontCase })
export default class MyCase extends Component {
    static propTypes = {
        visit_time: React.PropTypes.string.isRequired,
        type: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired,
        idx: React.PropTypes.number

    };
    // methods
    toContent() {
        var idx = this.props.idx;
        var id = this.props.id;
        this.props.toShow({ idx, id });

        this.props.pushState({
            pathname: '/usercenter/myCaseContent'
        });
    }
    render() {
        if (this.props.flag) {
            return (LoadMore({ loading: this.props.loading }))
        } else
            return (Case({...this.props, toContent: (::this.toContent) }))
    }

}
