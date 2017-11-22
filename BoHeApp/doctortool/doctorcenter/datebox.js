import React , { Component } from 'react';

export default class DateBox extends Component {
    constructor(props){
      super(props);
    }
    shouldComponentUpdate(nextProps,nextState){
      if((nextProps.flag == this.props.flag)&&(nextProps.date == this.props.date)){
          return false;
      }else{
          return true;
      }
    }
    render() {
       let that = this;
       let width = this.props.width;
       let flag = this.props.flag;
       if(flag == 1){
          return (<div>
                    <div className="rc-calendar-date rc-calendar-date-public" style={{lineHeight:(width-80)/7+'px',height:(width-80)/7+'px',width:(width-80)/7+'px'}}>
                        { this.props.date }
                    </div>
                  </div>)
       }
       else if(flag == 2){
         return (<div>
                   <div className="rc-calendar-date rc-calendar-date-private" style={{lineHeight:(width-80)/7+'px',height:(width-80)/7+'px',width:(width-80)/7+'px'}}>
                       { this.props.date }
                   </div>
                 </div>)
       }else{
         return (<div>
                   <div className="rc-calendar-date" style={{lineHeight:(width-80)/7+'px',height:(width-80)/7+'px',width:(width-80)/7+'px'}}>
                       { this.props.date }
                   </div>
                 </div>)
       }

  }

}
