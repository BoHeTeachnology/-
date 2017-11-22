import React, { Component } from 'react';
import ReactDOM  from 'react-dom'


export const CheckClinic = ({
    id,
    clinic_brand,
    clinic_name,
    clinic_address,
    chair_nums,
    clinic_head_name,
    clinic_head_phone,
    mint_head_name,
    rowidx,
    mint_head_phone,
    toUserInfo,
    is_show,
    bus_line,
    told_word,
    set_date,
    staff_nums,
    account,
    clinic_pic,
    around_pic,
    remark,
    toEdit
}) => {
       return (<div>
			        <div className="rtop rtop4">
			            <div className="but-box bj-none">
			              <p>
			                <a href="javascript:void(0)" className="back-but" id="back">返回</a>
			                <a onClick={ toEdit } href="javascript:void(0)" className="edit-but" id="edit-but">编辑</a>
			              </p>
			            </div>
			        </div>
				      <div className="add-box-container">
				            <div className="add-h3 add-main-box1 mtop45">
				                <h3 className="box5-h3">基本信息<span></span></h3>
				                <div className="main-input">
				                    <div className="input-box h30 gray-span">
				                        <span>是否显示：</span>
				                        <div className="see-main" id="is_show">{ is_show }</div>
				                    </div>
				                    <div className="input-box h30 gray-span">
				                        <span>诊所品牌：</span>
				                        <div className="see-main" id="clinic_brand">{ clinic_brand }</div>
				                    </div>
				                    <div className="input-box h30 gray-span">
				                        <span>诊所名称：</span>
				                        <div className="see-main" id="clinic_name">{ clinic_name }</div>
				                    </div>
				                    <div className="input-box h30 gray-span">
				                        <span>诊所地址：</span>
				                        <div className="see-main" id="clinic_address">{ clinic_address }</div>
				                    </div>
				                    <div className="input-box h30 gray-span">
				                        <span>乘车路线：</span>
				                        <div className="see-main" id="bus_line">{ bus_line }</div>
				                    </div>
				                    <div className="input-box h30 gray-span">
				                        <span>嘱咐说明：</span>
				                        <div className="see-main" id="told_word">{ told_word }</div>
				                    </div>
				                    <div className="input-box h30 gray-span">
				                        <span>牙椅数量：</span>
				                        <div className="see-main" id="chair_nums">{ chair_nums }</div>
				                    </div>
				                    <div className="input-box h30 gray-span">
				                        <span>诊所负责人：</span>
				                        <div className="see-main" id="clinic_head_name">{ clinic_head_name }</div>
				                    </div>
				                    <div className="input-box h30 gray-span">
				                        <span>负责人电话：</span>
				                        <div className="see-main" id="clinic_head_phone">{ clinic_head_phone }</div>
				                    </div>
				                    <div className="input-box h30 gray-span">
				                        <span>薄荷对接人：</span>
				                        <div className="see-main" id="mint_head_name">{ mint_head_name }</div>
				                    </div>
				                    <div className="input-box h30 gray-span">
				                        <span>对接人电话：</span>
				                        <div className="see-main" id="mint_head_phone">{ mint_head_phone }</div>
				                    </div>

				                    <div className="input-box h30 gray-span">
				                        <span>成立时间：</span>
				                        <div className="see-main" id="set_date">{ set_date }</div>
				                    </div>
				                    <div className="input-box h30 gray-span">
				                        <span>员工人数：</span>
				                        <div className="see-main" id="staff_nums">{ staff_nums }</div>
				                    </div>
				                    <div className="input-box h30 gray-span">
				                        <span>诊所账号：</span>
				                        <div className="see-main" id="account">{ account }</div>
				                    </div>
				                    <div className="input-box gray-span">
				                        <span>诊所资质：</span>
				                        <div className="see-main tooth_picsee" id="clinic_pic"><img src={clinic_pic} alt=""/></div>
				                        <div className="clear"></div>
				                    </div>
				                    <div className="input-box gray-span">
				                        <span>环评资质：</span>
				                        <div className="see-main tooth_picsee" id="around_pic"><img src={around_pic} alt=""/></div>
				                        <div className="clear"></div>
				                    </div>
				                    <div className="input-box h30 gray-span">
				                        <span>备注：</span>
				                        <textarea className="textarea" style={{ maxWidth:'245px',border:'1px solid rgb(204, 204, 204)' }} id="remark">{ remark }</textarea>
				                        <p></p>
				                    </div>

				                </div>
				            </div>
				        </div>
				</div>)

}