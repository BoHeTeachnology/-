import React from 'react';
import Projects from './projectsRender.js'

const ChooseForOther = React.createClass({
      render() {
        return (
                           <div className="choosetop" style={{marginTop:0,display:"none"}} id="choseBoxtop1">
                           <div className="weui_cells">
                           <div className="weui_cell">
                           <div className="weui_cell_hd" style={{height:'25px'}}>
                           <p id="name"></p>
                           <span id="phone"></span>
                           </div>
                           <a className="forOther" id="forOtherBtn" href="chooseOther.html">为他人预约</a>
                           </div>
                           </div>
                           </div>

        )
       }
      });


    module.exports = ChooseForOther;