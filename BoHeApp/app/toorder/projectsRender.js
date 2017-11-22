import React from 'react';
import Project from './projectRender.js'



var assign = require('object.assign').getPolyfill();

const Projects = React.createClass({
  propTypes: {
    projectMetas: React.PropTypes.array.isRequired,
  },
  handleProClick(projectInfo) {},
  renderProjects() {
    return this.props.projectMetas.map(function(projectMeta, i) {
      assign(projectMeta, projectMeta,{
        handleProClick: this.handleProClick
      }, {
        key: i
      });
      console.log(projectMeta)
      return <Project {...projectMeta}></Project>;
    }.bind(this));
  },
  render() {
    return (
                <div>
                 <h3  className="chooseTitle">选择预约项目</h3>
                 <div className="chooseProjbox">
                  <div className="chooseProjboxdl" id="chooseProjboxdl">
                  {this.renderProjects()}
                  </div>
                 </div>
                 <div className="opcitybox" style={{
                 display: "none"
                 }}><span></span></div>
                 <div className="opacityTipbox" style={{
                 display: "none"
                 }}>
                 <h3>
                 <label>您是否要复诊？</label>
                 <p className="fuzhentip"><span className="reOrderCancel">以后再说</span><span className="wantReorder">我要复诊</span></p>
                 </h3>
                 </div>
                 <div className="fotIcon">
                 <img src={require('app/common/images/logo2.png')} alt="" />
                 <p>轻快预约   从“齿”简单</p>
                 </div>
                </div>


      );
  }
});

module.exports = Projects;