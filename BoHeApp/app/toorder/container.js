import React from 'react';
import {
	render
} from 'react-dom'
import Router, {
	Route,
	DefaultRoute
} from 'react-router';
import {
	List,
	Map
} from 'immutable';
import {
	Provider
} from 'react-redux';
import ToOrder from 'app/toorder/main.js'

const toorderRender = function() {
	ReactDOM.render(
		<Provider store ={store}>
	<ToOrder />
	</Provider>, document.getElementById('app'))
}

module.exports = toorderRender;