import React from 'react';

const Project = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        servicename: React.PropTypes.string.isRequired,
        logo_url: React.PropTypes.string.isRequired,
        handleProClick: React.PropTypes.func.isRequired,
        key:React.PropTypes.number.isRequired
    },
    handleProClick(event){

    	this.props.handleProClick({id:this.props.id,servicename:this.props.servicename});

    },
    render() {
        return (<div key={this.props.key}> <dl onClick={this.handleProClick}> <dt> <img src = { this.props.logo_url } alt = "" /> </dt>  <dd> { this.props.servicename } </dd>  </dl> <div className="clear"> </div> </div>
        );
    }
});
module.exports = Project;
