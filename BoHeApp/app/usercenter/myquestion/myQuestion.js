import React,{Component} from 'react'
import { Link,History } from 'react-router'



export default class MyQuestion extends Component {

constructor(props) {
    super(props)
}

handleToQuestionDetail(event){

  event.stopPropagation();
    this.props.history.pushState(null, '/usercenter/MyQuestionDetail')
}
handleAgainQuestion(event){

  event.stopPropagation();
   this.props.history.pushState(null, '/usercenter/uploader')
}

render(){
return(
  <div className="myquestionWrap">
    <div className="toptip">
      <span>共三条提问</span>
    </div>
    <div className="questionList">
      <ul>
        <li>
     <div onClick={this.handleToQuestionDetail.bind(this)}>
          <div className="listContent clearfix">
            <img src={require('app/common/images/1.jpg')} alt="" />
            <div className="qustion_content">
              <div className="topWrap">
              <span>张志勇</span>
              <span>医生</span>
              <span>2017.03.29</span>
              <span>已回答</span>
              <span onClick={this.handleAgainQuestion.bind(this)}>追问</span>
                </div>
            <p>
              特别负责人的大夫，解答的时候很细心很全面，很专业，态度也特别好，推荐大家来看这个大夫！
            </p>


            </div>
          </div>
        </div>
        </li>
        <li>

          <Link to="/usercenter/MyQuestionDetail">
               <div className="listContent clearfix">
                 <img src={require('app/common/images/1.jpg')} alt="" />
                 <div className="qustion_content">
                   <div className="topWrap">
                   <span>张志勇</span>
                   <span>医生</span>
                   <span>2017.03.29</span>
                   <span>已回答</span>
                   <span>追问</span>
                     </div>
                 <p>
                   特别负责人的大夫，解答的时候很细心很全面，很专业，态度也特别好，推荐大家来看这个大夫！
                 </p>


                 </div>
               </div>
             </Link>

        </li>
        <li>
          <Link to="/usercenter/MyQuestionDetail">
               <div className="listContent clearfix">
                 <img src={require('app/common/images/1.jpg')} alt="" />
                 <div className="qustion_content">
                   <div className="topWrap">
                   <span>张志勇</span>
                   <span>医生</span>
                   <span>2017.03.29</span>
                   <span>已回答</span>
                   <span>追问</span>
                     </div>
                 <p>
                   特别负责人的大夫，解答的时候很细心很全面，很专业，态度也特别好，推荐大家来看这个大夫！
                 </p>
                 </div>
               </div>
             </Link>
        </li>
      </ul>
    </div>
  </div>
)

}

}
