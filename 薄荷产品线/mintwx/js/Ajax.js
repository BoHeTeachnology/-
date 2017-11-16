var HOST_URL='http://'+window.location.host;
//var HOST_URL='http://182.254.213.207';
var Ajax = {
    Code : 0,//成功是0，可以根据自己的要求定义code值
    Data : null,
    ReturnUrl : "",
    /*登陆*/
 	login : function (callback,account,password) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/User/login",
            type: 'POST',
            data:{"account":account,"password":password},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    // yzm登录
    verifyLogin : function (callback,account,verify) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/User/verifyLogin",
            type: 'post',
            data:{"account":account,"verify":verify},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    logout : function (callback) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/User/logout",
            type: 'POST',
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*图片验证码*/
    getYzmImgUrl:function(){
        return window.HOST_URL + '/mintAdmin/index.php/Home/Index/getVerify?t='+ new Date().getTime();
    },
    /*短信验证码*/
    sendMsg : function (callback,phone) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Index/sendMsg",
            type: 'POST',
            data:{"phone":phone},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*注册*/
    register : function (callback,account,password,verify) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/User/register",
            type: 'POST',
            data:{"account":account,"password":password,"verify":verify},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*验证手机号是否重复*/
    checkUser : function (callback,account) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/User/checkUser",
            type: 'POST',
            data:{"account":account},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*修改用户密码*/
    changePwd : function (callback,old_pwd,new_pwd,com_pwd) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/User/changePwd",
            type: 'POST',
            data:{"old_pwd":old_pwd,"new_pwd":new_pwd,"com_pwd":com_pwd},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*重置密码*/
    resetPwd : function (callback,phone,verify,new_pwd) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/User/resetPwd",
            type: 'POST',
            data:{"phone":phone,"verify":verify,"new_pwd":new_pwd},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*获取用户信息*/
    UsergetInfo : function (callback) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/User/getInfo",
            type: 'POST',
            data:{},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*获取用户信息*/
    UsergetOne : function (callback,user_id) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/User/getOne",
            type: 'POST',
            data:{'user_id':user_id},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },

    /*修改用户信息*/
    UsermodifyInfo : function (callback,name,birth,sex,phone,company_code) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/User/modifyInfo",
            type: 'POST',
            data:{"name":name,"birth":birth,"sex":sex,"phone":phone,"company_code":company_code},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*获取诊所列表*/
    clinicLst : function (callback) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Index/clinicLst",
            type: 'POST',
            data:{},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*获取医生列表数据*/
    Doctorindex : function (callback,p,p_len) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Doctor/index",
            type: 'POST',
            data:{"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*获取医生列表数据*/
    DoctorgetOne : function (callback,id) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Doctor/getOne",
            type: 'POST',
            data:{"id":id},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*预约*/
    Appointmentadd : function (callback,doctor_id,invite_code,is_self,patient_name,contact_tel,clinic_id,clinic_name,visit_time,project_name,service_id,is_return,visit_people) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Appointment/add",
            type: 'POST',
            data:{"doctor_id":doctor_id,"invite_code":invite_code,"is_self":is_self,"patient_name":patient_name,"contact_tel":contact_tel,"clinic_id":clinic_id,"clinic_name":clinic_name,"visit_time":visit_time,"project_name":project_name,"service_id":service_id,"is_return":is_return,"visit_people":visit_people},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*意见反馈*/
    Suggestionadd : function (callback,user_account,content) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Suggestion/add",
            type: 'POST',
            data:{"user_account":user_account,"content":content},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*预约列表（病人）*/
    AppointmentList : function (callback,patient_name,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Appointment/patientList",
            type: 'POST',
            data:{"patient_name":patient_name,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*获取单个预约信息*/
    AppointmentgetOne : function (callback,id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Appointment/getOne",
            type: 'POST',
            data:{"id":id},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*修改用户信息*/
    UsermodifyInfo2 : function (callback,position,field,context,job_age,hospital) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/User/modifyInfo",
            type: 'POST',
            data:{"position":position,"field":field,"context":context,"job_age":job_age,"hospital":hospital},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*修改用户信息*/
    UsermodifyInfo3 : function (callback,photo) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/User/modifyInfo",
            type: 'POST',
            data:{"photo":photo},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*Base64上传图片*/
    imgBase64Up : function (callback,img) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Index/imgBase64Up",
            type: 'POST',
            data:{"img":img},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*预约列表（医生）*/
    doctorList : function (callback,patient_name,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Appointment/doctorList",
            type: 'POST',
            data:{"patient_name":patient_name,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
   /* 医生病人列表*/
   RecordgetPatient : function (callback,doctor_id,patient_name,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Record/getPatient",
            type: 'POST',
            data:{"doctor_id":doctor_id,"patient_name":patient_name,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*病例列表*/
    Recordindex : function (callback,patient_id,type,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Record/index",
            type: 'POST',
            data:{"patient_id":patient_id,"type":type,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*获取单个病例信息*/
    RecordgetOne : function (callback,record_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Record/getOne",
            type: 'POST',
            data:{"record_id":record_id},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*分享页面获取单个病例信息*/
    getRecordInfo : function (callback,record_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Index/getRecordInfo",
            type: 'POST',
            data:{"record_id":record_id},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*添加账单*/
    Billadd : function (callback,appointment_id,patient_id,patient_name,patient_account,company_id,company,doctor_id,doctor_name,visit_time,clinic_id,clinic_name,project_name,is_self,contact_tel,pay_money,actual_money,bill_discount,obj_data) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Bill/add",
            type: 'POST',
            data:{"appointment_id":appointment_id,"patient_id":patient_id,"patient_name":patient_name,"patient_account":patient_account,"company_id":company_id,"company":company,"doctor_id":doctor_id,"doctor_name":doctor_name,"visit_time":visit_time,"clinic_id":clinic_id,"clinic_name":clinic_name,"project_name":project_name,"is_self":is_self,"contact_tel":contact_tel,"pay_money":pay_money,"actual_money":actual_money,"bill_discount":bill_discount,"obj_data":obj_data},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*账单列表*/
    Billindex : function (callback,patient_id,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Bill/index",
            type: 'POST',
            data:{"patient_id":patient_id,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*获取单个账单信息*/
    BillgetOne : function (callback,bill_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Bill/getOne",
            type: 'POST',
            data:{"bill_id":bill_id},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*账单明细*/
    billDetail : function (callback,bill_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Bill/billDetail",
            type: 'POST',
            data:{"bill_id":bill_id},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*项目)获取所有分类*/
    BillgetCatLst : function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Bill/getCatLst",
            type: 'POST',
            data:{},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*获取指定分类下的项目*/
    BillgetCatPro : function (callback,cat_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Bill/getCatPro",
            type: 'POST',
            data:{"cat_id":cat_id},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*病人确认账单*/
    patientConfirm : function (callback,bill_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Bill/patientConfirm",
            type: 'POST',
            data:{"bill_id":bill_id},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*(我的账单)医生病人列表*/
    BillgetPatient : function (callback,doctor_id,patient_name,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Bill/getPatient",
            type: 'POST',
            data:{"doctor_id":doctor_id,"patient_name":patient_name,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*查询所有医生服务项目*/
    DoctorserviceLst : function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Doctor/serviceLst",
            type: 'get',
            data:{},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*查询所有医生标签*/
    DoctortagLst : function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Doctor/tagLst",
            type: 'GET',
            data:{},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*修改医生信息*/
    Doctorsave : function (callback,service_ids) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Doctor/save",
            type: 'POST',
            data:{"service_ids":service_ids},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    Doctorsave2 : function (callback,label,label_id) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Doctor/save",
            type: 'POST',
            data:{"label":label,"label_id":label_id},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*查询医生单月出诊时间*/
    visitDateQuery : function (callback,visit_date) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Doctor/visitDateQuery",
            type: 'get',
            data:{"visit_date":visit_date},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*查询所有诊所*/
    DoctorclinicLst : function (callback) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Doctor/clinicLst",
            type: 'get',
            data:{},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*添加出诊时间*/
    visitDateAdd : function (callback,visit_data) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Doctor/visitDateAdd",
            type: 'post',
            data:{"visit_data":visit_data},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*根据时间和服务项目获取医生列表*/
    getDoctorLst : function (callback,visit_date,service_id) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Appointment/getDoctorLst",
            type: 'get',
            data:{"visit_date":visit_date,"service_id":service_id},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*返回单个医生的详细信息和出诊时间状态*/
    getOneVisitDataNew : function (callback,doctor_id,visit_date) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Appointment/getOneVisitDataNew",
            type: 'get',
            data:{"doctor_id":doctor_id,"visit_date":visit_date},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*判断失约次数*/
    shiyueCount : function (callback) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Appointment/shiyueCount",
            type: 'get',
            data:{},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*取消预约*/
    Appointmentcancel : function (callback,appointment_id) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Appointment/cancel",
            type: 'get',
            data:{"appointment_id":appointment_id},
            dataType:'json',
            success:function(data){
                //console.log(data)
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*选择复诊并发送复诊信息*/
    sendReturnMsg : function (callback,appointment_id,patient_id,content,remark) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Appointment/sendReturnMsg",
            type: 'post',
            data:{"appointment_id":appointment_id,"patient_id":patient_id,"content":content,"remark":remark},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*获取初诊医生id*/
    getChuIdgetChuId : function (callback,appointment_id) {
        $.ajax({
            url:window.HOST_URL + "/mintAdmin/index.php/Home/Appointment/getChuId",
            type: 'get',
            data:{"appointment_id":appointment_id},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    BillindexDoctorId : function (callback,patient_id,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Bill/index",
            type: 'POST',
            data:{"doctor_id":patient_id,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*Wxexamplejsapi : function (callback,bill_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/WxpayAPI_php_v3/example/jsapi.php",
            type: 'post',
            data:{"bill_id":bill_id},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },*/
    Wxexamplejsapi : function (callback,bill_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Jsapi",
            type: 'post',
            data:{"bill_id":bill_id},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    getDayStatus : function (callback,service_id,month) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Appointment/getDayStatus",
            type: 'post',
            data:{"service_id":service_id,"month":month},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    setpass:function (callback,pass) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/User/setPwd",
            type: 'post',
            data:{"new_pwd":pass},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    BillgetBillNum:function (callback,patient_id,status) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Bill/getBillNum",
            type: 'post',
            data:{"patient_id":patient_id,"status":status},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
   /* 修改薄荷名*/
    modifyMintName:function (callback,mint_name) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/User/modifyMintName",
            type: 'post',
            data:{"mint_name":mint_name},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    //验证短信验证码
    checkVerify:function (callback,account,verify) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/User/checkVerify",
            type: 'post',
            data:{"account":account,"verify":verify},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    //验证密码
    checkPwd:function (callback,password) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/User/checkPwd",
            type: 'post',
            data:{"password":password},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    //修改手机号
    modifyAccount:function (callback,account,verify,password,new_account) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/User/modifyAccount",
            type: 'post',
            data:{"account":account,"verify":verify,"password":password,"new_account":new_account},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    //获取预约时的关系成员列表
    getRelationIndex:function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Appointment/getRelationIndex",
            type: 'post',
            data:{},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*删除关系成员*/
    deleteRelation:function (callback,user_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Appointment/deleteRelation",
            type: 'post',
            data:{"user_id":user_id},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*改版后用户端的病例列表*/
    getRelationUser:function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Record/getRelationUser",
            type: 'post',
            data:{},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*查询用户最早的牙位图记录*/
    RecordgetTooth:function (callback,toothpic_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Record/getTooth",
            type: 'post',
            data:{"toothpic_id":toothpic_id},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
/*----------------------------新版客户病历所有接口---------------------------------------*/
    /*患者端新版病例列表*/
    RecordnewIndex:function (callback,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Record/newIndex",
            type: 'post',
            data:{"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*患者端初筛报告列表*/
    RecordscreeningIndex:function (callback,type,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Record/screeningIndex",
            type: 'post',
            data:{"type":type,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*医生端获取病人病历列表*/
    RecordgetPatientCase:function (callback,patient_id,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Record/getPatientCase",
            type: 'post',
            data:{"patient_id":patient_id,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*患者端返回单个病例详情*/
    RecordnewGetOne:function (callback,case_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Record/newGetOne",
            type: 'get',
            data:{"case_id":case_id},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /* 微信端病例详情查询既往史*/
    RecordqueryHistory:function (callback,user_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Record/queryHistory",
            type: 'get',
            data:{"user_id":user_id},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*微信端获取单个病历分类*/
    RecordgetCatLst:function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Record/getCatLst",
            type: 'get',
            data:{},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*折扣列表(微信)*/
    IndexdiscountLst:function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Index/discountLst",
            type: 'post',
            data:{},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*微信端项目患者分类列表*/
    IndexcatLst:function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Index/catLst",
            type: 'get',
            data:{},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    },
    /*微信端项目价格列表*/
    IndexProjectindex:function (callback,cat_id,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Home/Index/Projectindex",
            type: 'get',
            data:{"cat_id":cat_id,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                Ajax.Data=data;
                callback(Ajax);
            }
        });
    }
}


