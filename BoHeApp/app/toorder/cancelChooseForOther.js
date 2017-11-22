import React from 'react';
import Projects from './projectsRender.js'

const CancelChooseForOther = React.createClass({
    render() {
                           return (
                           <div className="choosetop" style={{marginTop:0,display:"none"}} id="choseBoxtop2">
                           <div className="weui_cells">
                           <div className="weui_cell">
                           <div className="weui_cell_hd" style={{height:'25px'}}>
                           <p id="name2"></p>
                           <span id="phone2"></span>
                           </div>
                           <a className="forOther" id="forOtherBtn_cancel" href="javascript:;">取消为他人预约</a>
                           </div>
                           </div>
                           </div>);
    }
});
module.exports = CancelChooseForOther;