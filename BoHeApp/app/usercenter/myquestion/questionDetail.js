import React,{Component} from 'react'
import ImageView from 'react-imageview'



export default class QuestionDetail extends Component {

constructor(props) {
    super(props)
    this.state={
        showViewer:false,
        currentNum:0
    }
}
close(){
  this.setState({ showViewer: false})
}
show(currentNum){
  this.setState({ showViewer: true,currentNum:currentNum})
}

render(){
  const imagelist = ['https://gpic.qpic.cn/gbar_pic/2aqluyraXicEfqicaK3aV4iazVolQTREmcvaEG92Hy9oibhyDJHNzu1s3w/1000','https://gpic.qpic.cn/gbar_pic/emH5YQz0vOJ2E0L6ZljlcW9nFgQzMXtpN240iaeB7PFUhZSWvvpbtLA/1000']
const {currentNum} =this.state.currentNum

return(
  <div className="questionDetail_wrap">
    <div className="questionDetail_toptip">
      <span>共三条提问</span>
      <span>已回答</span>
    </div>
    <div className="questionDetail_doctor clearfix">
      <img src={require('app/common/images/1.jpg')} alt="" />
      <div className="questionDetail_doctor_right">
        <p>张志勇</p>
        <p>北京口腔医院 副主任医师</p>
        <p>北京大学口腔医学博士</p>
      <span className="arrow" >></span>
      </div>

    </div>
    <ul>
      <li>
        <div className="questionDetail_group">
            <span>我的提问</span>
        </div>
        <div className="questionDetail_listcontent clearfix">
          <img src={require('app/common/images/1.jpg')} alt="" />
       <div className="listcontent_right clearfix">
         <div className="listcontent_righttop clearfix">
    <span>xiayu</span>
    <span>2017.03.29</span>
  </div>
  </div>
    </div>
    <p className="content_p clearfix">
      特别负责人的大夫，解答的时候很细心很全面，很专业，态度也特别好，推荐大家来看这个大夫！
    </p>
  <div className="listcontent_threeimgs clearfix">
   <img src={require('app/common/images/1.jpg')} alt="" />
   <img src={require('app/common/images/1.jpg')} alt="" />
   <img src={require('app/common/images/1.jpg')} alt="" />
  </div>

      </li>
      <li>

        <div className="questionDetail_group">
            <span>我的提问</span>
        </div>
        <div className="questionDetail_listcontent clearfix">
          <img src={require('app/common/images/1.jpg')} alt="" />
       <div className="listcontent_right clearfix">
         <div className="listcontent_righttop clearfix">
      <span>xiayu</span>
      <span>2017.03.29</span>
      </div>
      </div>
      </div>
      <p className="content_p clearfix">
      特别负责人的大夫，解答的时候很细心很全面，很专业，态度也特别好，推荐大家来看这个大夫！
      </p>
      <div className="listcontent_twoimgs clearfix">

      <img src={require('app/common/images/1.jpg')} onClick={this.show.bind(this,0)}  alt="" />
      <img src={require('app/common/images/1.jpg')} onClick={this.show.bind(this,0)} alt="" />
      <img src={require('app/common/images/1.jpg')} onClick={this.show.bind(this,0)} alt="" />
      <img src={require('app/common/images/1.jpg')} onClick={this.show.bind(this,0)} alt="" />
      </div>

      </li>
      <li>


                <div className="questionDetail_group">
                    <span>我的提问</span>
                </div>
                <div className="questionDetail_listcontent clearfix">
                  <img src={require('app/common/images/1.jpg')} alt="" />
               <div className="listcontent_right clearfix">
                 <div className="listcontent_righttop clearfix">
              <span>xiayu</span>
              <span>2017.03.29</span>
              </div>
              </div>
              </div>
              <p className="content_p clearfix">
              特别负责人的大夫，解答的时候很细心很全面，很专业，态度也特别好，推荐大家来看这个大夫！
              </p>
              <div className="listcontent_oneimgs clearfix">

              <img src={require('app/common/images/1.jpg')} onClick={this.show.bind(this,0)}  alt="" />

              </div>


      </li>
    </ul>
    <div>
      {
          !!this.state.showViewer && <ImageView imagelist={imagelist} close={ this.close.bind(this) } current={ currentNum }/>
      }
    </div>
  </div>
)

}

}
