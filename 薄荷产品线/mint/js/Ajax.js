var HOST_URL='http://'+window.location.host;
//var HOST_URL='http://182.254.213.207';
var AjaxObj = {
    Code : 0,//成功是0，可以根据自己的要求定义code值
    Data : null,
    ReturnUrl : "",

    /*登录*/
    login : function (callback,account,password) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Login/login",
            type: 'POST',
            data:{"account":account,"password":password},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取登录用户信息*/
    loginGetUserInfo : function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Index/getUserInfo",
            type: 'POST',
            data:{},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*退出登录*/
    logout : function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Login/logOut",
            type: 'POST',
            data:{},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*查询权限列表*/
    quanxianIndex : function (callback,app_name) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Role/getAllApp",
            type: 'POST',
            data:{"app_name":app_name},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*返回顶级权限*/
    quanxianApptop : function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/App/top",
            type: 'POST',
            data:{},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*添加权限*/
    quanxianAdd : function (callback,parent_id,app_name,app_uri,app_url,sort) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/App/add",
            type: 'POST',
            data:{"parent_id":parent_id,"app_name":app_name,"app_uri":app_uri,"app_url":app_url,"sort":sort},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*查询权限详情*/
    quanxianGetOne : function (callback,app_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/App/getOne",
            type: 'POST',
            data:{"app_id":app_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /* 修改权限*/
    quanxianSave : function (callback,app_id,parent_id,app_name,app_uri,app_url,sort) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/App/save",
            type: 'POST',
            data:{"app_id":app_id,"parent_id":parent_id,"app_name":app_name,"app_uri":app_uri,"app_url":app_url,"sort":sort},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*删除权限详情*/
    quanxianDelete : function (callback,app_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/App/delete",
            type: 'POST',
            data:{"app_id":app_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*查询角色列表*/
    roleIndex : function (callback,role_name) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Role/index",
            type: 'POST',
            data:{"role_name":role_name},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*查询角色详情*/
    roleGetOne : function (callback,role_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Role/getOne",
            type: 'POST',
            data:{"role_id":role_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*角色管理中获取所有权限*/
    roleGetAllApp : function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Role/getAllApp",
            type: 'POST',
            data:{},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*添加角色*/
    roleAdd : function (callback,role_name,role_remark,app_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Role/add",
            type: 'POST',
            data:{"role_name":role_name,"role_remark":role_remark,"app_id":app_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*修改角色*/
    roleSave : function (callback,role_id,role_name,role_remark,app_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Role/save",
            type: 'POST',
            data:{"role_id":role_id,"role_name":role_name,"role_remark":role_remark,"app_id":app_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*删除角色*/
    roleDelete : function (callback,role_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Role/delete",
            type: 'POST',
            data:{"role_id":role_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*查询用户列表*/
    Userindex : function (callback,real_name,account,identity_id,company_name,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/index",
            type: 'POST',
            data:{"real_name":real_name,"account":account,"identity_id":identity_id,"company_name":company_name,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*添加用户*/
    UserAdd : function (callback,identity_id,photo,account,name,phone,password,real_name,sex,birth,race,married,card_type,card_id,have_child,company_name,email,job,society_number,post_address,remark) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/add",
            type: 'POST',
            data:{"identity_id":identity_id,"photo":photo,"account":account,"name":name,"phone":phone,"password":password,"real_name":real_name,"sex":sex,"birth":birth,"race":race,"married":married,"card_type":card_type,"card_id":card_id,"have_child":have_child,"company_name":company_name,"email":email,"job":job,"society_number":society_number,"post_address":post_address,"remark":remark},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*修改用户*/
    Usersave : function (callback,id,identity_id,mint_name,photo,account,name,phone,password,real_name,sex,birth,race,married,card_type,card_id,have_child,company_name,email,job,society_number,post_address,remark) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/save",
            type: 'POST',
            data:{"id":id,"identity_id":identity_id,"mint_name":mint_name,"photo":photo,"account":account,"name":name,"phone":phone,"password":password,"real_name":real_name,"sex":sex,"birth":birth,"race":race,"married":married,"card_type":card_type,"card_id":card_id,"have_child":have_child,"company_name":company_name,"email":email,"job":job,"society_number":society_number,"post_address":post_address,"remark":remark},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*添加用户*/
    UserAdd2 : function (callback,name,real_name,sex,birth,card_id,email,account,phone,password,company_name,identity_id,photo) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/add",
            type: 'POST',
            data:{"name":name,"real_name":real_name,"sex":sex,"birth":birth,"card_id":card_id,"email":email,"account":account,"phone":phone,"password":password,"company_name":company_name,"identity_id":identity_id,"photo":photo},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);                
            }
        });
    },
    /*修改用户*/
    Usersave2 : function (callback,id,name,real_name,sex,birth,card_id,email,account,phone,password,company_name,identity_id,photo) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/save",
            type: 'POST',
            data:{"id":id,"name":name,"real_name":real_name,"sex":sex,"birth":birth,"card_id":card_id,"email":email,"account":account,"phone":phone,"password":password,"company_name":company_name,"identity_id":identity_id,"photo":photo},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);                
            }
        });
    },
    /*删除客户列表*/
    Userdelete: function (callback,user_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/delete",
            type: 'POST',
            data:{"user_id":user_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*返回单个客户信息*/
    UsergetOne: function (callback,user_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/getOne",
            type: 'POST',
            data:{"user_id":user_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*查询医生列表*/
    Doctorindex : function (callback,account,name,identity_id,hospital,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Doctor/index",
            type: 'POST',
            data:{"account":account,"name":name,"identity_id":identity_id,"hospital":hospital,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*添加医生*/
    DoctorAdd : function (callback,name,photo,sex,birth,position,hospital,field,job_age,context,account,phone,password,label,label_id,identity_id,is_show,service_ids,clinic_id,visit_data,assistant_id,meiqia) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Doctor/add",
            type: 'POST',
            data:{"name":name,"photo":photo,"sex":sex,"birth":birth,"position":position,"hospital":hospital,"field":field,"job_age":job_age,"context":context,"account":account,"phone":phone,"password":password,"label":label,"label_id":label_id,"identity_id":identity_id,"is_show":is_show,"service_ids":service_ids,"clinic_id":clinic_id,"visit_data":visit_data,"assistant_id":assistant_id,"meiqia":meiqia},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*修改医生*/
    DoctorEdit : function (callback,id,name,photo,sex,birth,position,hospital,field,job_age,context,account,phone,password,label,label_id,identity_id,is_show,service_ids,clinic_id,visit_data,month,assistant_id,meiqia,tow_code) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Doctor/save",
            type: 'POST',
            data:{"id":id,"name":name,"photo":photo,"sex":sex,"birth":birth,"position":position,"hospital":hospital,"field":field,"job_age":job_age,"context":context,"account":account,"phone":phone,"password":password,"label":label,"label_id":label_id,"identity_id":identity_id,"is_show":is_show,"service_ids":service_ids,"clinic_id":clinic_id,"visit_data":visit_data,"month":month,"assistant_id":assistant_id,"meiqia":meiqia,"tow_code":tow_code},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*删除医生列表*/
    Doctordelete: function (callback,user_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Doctor/delete",
            type: 'POST',
            data:{"user_id":user_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*返回单个医生信息*/
    DoctorgetOne: function (callback,id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Doctor/getOne",
            type: 'POST',
            data:{"id":id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取所有医生标签*/
    DoctortagLst : function (callback,tag_name) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/tagLst",
            type: 'POST',
            data:{"tag_name":tag_name},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*添加医生标签*/
    DoctoraddTag : function (callback,tag_name) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/addTag",
            type: 'POST',
            data:{"tag_name":tag_name},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*管理员列表*/
    Adsetindex : function (callback,name,identity_id,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Adset/index",
            type: 'POST',
            data:{"name":name,"identity_id":identity_id,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*添加管理员*/
    AdsetAdd : function (callback,name,sex,birth,account,phone,password,role_id,identity_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Adset/add",
            type: 'POST',
            data:{"name":name,"sex":sex,"birth":birth,"account":account,"phone":phone,"password":password,"role_id":role_id,"identity_id":identity_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*修改管理员*/
    Adsetedit : function (callback,id,name,sex,birth,account,phone,password,role_id,identity_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Adset/save",
            type: 'POST',
            data:{"id":id,"name":name,"sex":sex,"birth":birth,"account":account,"phone":phone,"password":password,"role_id":role_id,"identity_id":identity_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*删除管理员列表*/
    Adsetdelete: function (callback,user_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Adset/delete",
            type: 'POST',
            data:{"user_id":user_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*返回单个管理员信息*/
    AdsetgetOne: function (callback,user_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Adset/getOne ",
            type: 'POST',
            data:{"user_id":user_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*查询用户所有角色*/
    AdsetroleList: function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Adset/roleList",
            type: 'POST',
            data:{},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*诊所列表*/
    ClinicIndex : function (callback,clinic_brand,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Clinic/index",
            type: 'POST',
            data:{"clinic_brand":clinic_brand,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*添加诊所*/
    ClinicAdd : function (callback,clinic_brand,clinic_name,chair_nums,clinic_address,clinic_head_name,mint_head_name,clinic_head_phone,mint_head_phone,sort,is_show,account,password,set_date,staff_nums,clinic_pic,around_pic,bus_line,told_word) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Clinic/add",
            type: 'POST',
            data:{"clinic_brand":clinic_brand,"clinic_name":clinic_name,"chair_nums":chair_nums,"clinic_address":clinic_address,"clinic_head_name":clinic_head_name,"clinic_head_name":clinic_head_name,"mint_head_name":mint_head_name,"clinic_head_phone":clinic_head_phone,"mint_head_phone":mint_head_phone,"sort":sort,"is_show":is_show,"account":account,"password":password,"set_date":set_date,"staff_nums":staff_nums,"clinic_pic":clinic_pic,"around_pic":around_pic,"bus_line":bus_line,"told_word":told_word},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*修改诊所*/
    ClinicEdit : function (callback,id,clinic_brand,clinic_name,chair_nums,clinic_address,clinic_head_name,mint_head_name,clinic_head_phone,mint_head_phone,sort,is_show,account,password,set_date,staff_nums,clinic_pic,around_pic,bus_line,told_word) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Clinic/edit",
            type: 'POST',
            data:{"id":id,"clinic_brand":clinic_brand,"clinic_name":clinic_name,"chair_nums":chair_nums,"clinic_address":clinic_address,"clinic_head_name":clinic_head_name,"clinic_head_name":clinic_head_name,"mint_head_name":mint_head_name,"clinic_head_phone":clinic_head_phone,"mint_head_phone":mint_head_phone,"sort":sort,"is_show":is_show,"account":account,"password":password,"set_date":set_date,"staff_nums":staff_nums,"clinic_pic":clinic_pic,"around_pic":around_pic,"bus_line":bus_line,"told_word":told_word},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*删除诊所*/
    ClinicDelete : function (callback,clinic_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Clinic/delete",
            type: 'POST',
            data:{"clinic_id":clinic_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取单个诊所信息*/
    ClinicGetOne : function (callback,clinic_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Clinic/getOne",
            type: 'POST',
            data:{"clinic_id":clinic_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*病例列表*/
    RecordIndex : function (callback,account,user_name,is_send,visit_time,doctor_id,clinic_id,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Record/index",
            type: 'POST',
            data:{"account":account,"user_name":user_name,"is_send":is_send,"visit_time":visit_time,"doctor_id":doctor_id,"clinic_id":clinic_id,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*添加病例*/
    Recordadd : function (callback,visit_time,patient_id,doctor_id,clinic_id,record_content,file_data,label,label_id,treatment,tooth_pic,tooth_type,tooth_square,tooth_suggestion,toothpic_id,type) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Record/add",
            type: 'POST',
            data:{"visit_time":visit_time,"patient_id":patient_id,"doctor_id":doctor_id,"clinic_id":clinic_id,"record_content":record_content,"file_data":file_data,"label":label,"label_id":label_id,"treatment":treatment,"tooth_pic":tooth_pic,"tooth_type":tooth_type,"tooth_square":tooth_square,"tooth_suggestion":tooth_suggestion,"toothpic_id":toothpic_id,"type":type},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*修改病例*/
    Recordedit : function (callback,id,visit_time,patient_id,doctor_id,clinic_id,record_content,file_data,label,label_id,treatment,tooth_pic,tooth_type,tooth_square,tooth_suggestion,toothpic_id,type) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Record/edit",
            type: 'POST',
            data:{"id":id,"visit_time":visit_time,"patient_id":patient_id,"doctor_id":doctor_id,"clinic_id":clinic_id,"record_content":record_content,"file_data":file_data,"label":label,"label_id":label_id,"treatment":treatment,"tooth_pic":tooth_pic,"tooth_type":tooth_type,"tooth_square":tooth_square,"tooth_suggestion":tooth_suggestion,"toothpic_id":toothpic_id,"type":type},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取单个病例信息*/
    RecordgetOne : function (callback,record_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Record/getOne",
            type: 'POST',
            data:{"record_id":record_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*删除病例*/
    Recorddelete : function (callback,record_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Record/delete",
            type: 'POST',
            data:{"record_id":record_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取所有病例标签*/
    RecordtagLst : function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Record/tagLst",
            type: 'POST',
            data:{},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取所有初筛报告标签*/
    IndextagLst : function (callback,type) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Index/tagLst",
            type: 'POST',
            data:{"type":type},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);                
            }
        });
    },
    /*添加病例标签*/
    RecordaddTag : function (callback,tag_name) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Record/addTag",
            type: 'POST',
            data:{"tag_name":tag_name},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*预约列表*/
    AppointmentIndex : function (callback,reserve_number,visit_name,project_name,doctor_name,clinic_name,company_name,start,end,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Appointment/index",
            type: 'POST',
            data:{"reserve_number":reserve_number,"visit_name":visit_name,"project_name":project_name,"doctor_name":doctor_name,"clinic_name":clinic_name,"company_name":company_name,"start":start,"end":end,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },


    
    /*添加预约*/
    Appointmentadd : function (callback,patient_name,patient_id,contact_tel,is_self,relations,invite_code,service_id,project_name,doctor_id,clinic_id,clinic_name,visit_time,remark,is_return,visit_id,time_long) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Appointment/add",
            type: 'POST',
            data:{"patient_name":patient_name,"patient_id":patient_id,"contact_tel":contact_tel,"is_self":is_self,"relations":relations,"invite_code":invite_code,"service_id":service_id,"project_name":project_name,"doctor_id":doctor_id,"clinic_id":clinic_id,"clinic_name":clinic_name,"visit_time":visit_time,"remark":remark,"is_return":is_return,"visit_id":visit_id,"time_long":time_long},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*编辑预约*/
    Appointmentedit : function (callback,id,patient_name,patient_id,contact_tel,is_self,relations,invite_code,service_id,project_name,doctor_id,clinic_id,clinic_name,visit_time,remark,is_return,visit_id,time_long) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Appointment/edit",
            type: 'POST',
            data:{"id":id,"patient_name":patient_name,"patient_id":patient_id,"contact_tel":contact_tel,"is_self":is_self,"relations":relations,"invite_code":invite_code,"service_id":service_id,"project_name":project_name,"doctor_id":doctor_id,"clinic_id":clinic_id,"clinic_name":clinic_name,"visit_time":visit_time,"remark":remark,"is_return":is_return,"visit_id":visit_id,"time_long":time_long},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取单个预约信息*/
    AppointmentgetOne : function (callback,appointment_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Appointment/getOne",
            type: 'POST',
            data:{"appointment_id":appointment_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*删除预约*/
    Appointmentdelete : function (callback,appointment_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Appointment/delete",
            type: 'POST',
            data:{"appointment_id":appointment_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*上传文档*/
    upFile : function (callback,file) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Index/upFile",
            type: 'POST',
            data:{"file":file},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*企业列表*/
    CompanyIndex : function (callback,company_name,company_code,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Company/index",
            type: 'POST',
            data:{"company_name":company_name,"company_code":company_code,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*添加企业*/
    Companyadd : function (callback,company_name,staff_nums,company_address,company_head_name,mint_head_name,company_head_phone,mint_head_phone) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Company/add",
            type: 'POST',
            data:{"company_name":company_name,"staff_nums":staff_nums,"company_address":company_address,"company_head_name":company_head_name,"mint_head_name":mint_head_name,"company_head_phone":company_head_phone,"mint_head_phone":mint_head_phone},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*修改企业*/
    Companyedit : function (callback,id,company_name,staff_nums,company_address,company_head_name,mint_head_name,company_head_phone,mint_head_phone) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Company/edit",
            type: 'POST',
            data:{"id":id,"company_name":company_name,"staff_nums":staff_nums,"company_address":company_address,"company_head_name":company_head_name,"mint_head_name":mint_head_name,"company_head_phone":company_head_phone,"mint_head_phone":mint_head_phone},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*删除企业*/
    Companydelete : function (callback,company_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Company/delete",
            type: 'POST',
            data:{"company_id":company_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取单个企业信息*/
    CompanygetOne : function (callback,company_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Company/getOne",
            type: 'POST',
            data:{"company_id":company_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*(预约管理)获取全部诊所*/
    AppointmentClinicLst : function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Index/clinicLst",
            type: 'get',
            data:{},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*(预约管理)获取全部医生或病人*/
    AppointmentUserLst : function (callback,identity_id,role_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Index/userLst",
            type: 'get',
            data:{"identity_id":identity_id,"role_id":role_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    userList : function (callback,role_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Index/userList",
            type: 'get',
            data:{"role_id":role_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);                
            }
        });
    },
    /*Base64上传图片*/
    imgBase64Up : function (callback,img) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Index/imgBase64Up",
            type: 'POST',
            data:{"img":img},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*意见反馈*/
    Suggestionindex : function (callback,user_account,content,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Suggestion/index",
            type: 'POST',
            data:{"user_account":user_account,"content":content,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*删除意见反馈*/
    Suggestiondelete : function (callback,suggestion_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Suggestion/delete",
            type: 'POST',
            data:{"suggestion_id":suggestion_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*账单列表*/
    Billindex : function (callback,user_name,patient_account,doctor_name,clinic_name,visit_time,project_name,status,pay_method,bill_discount,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Bill/index",
            type: 'POST',
            data:{"user_name":user_name,"patient_account":patient_account,"doctor_name":doctor_name,"clinic_name":clinic_name,"visit_time":visit_time,"project_name":project_name,"status":status,"pay_method":pay_method,"bill_discount":bill_discount,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*修改账单折扣*/
    BilleditBill : function (callback,id,pay_money,actual_money,bill_discount,obj_data) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Bill/editBill",
            type: 'POST',
            data:{"id":id,"pay_money":pay_money,"actual_money":actual_money,"bill_discount":bill_discount,"obj_data":obj_data},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);                
            }
        });
    },
    /*折扣列表(后台*/
    IndexdiscountLst : function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Index/discountLst",
            type: 'POST',
            data:{},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);                
            }
        });
    },
    /*获取项目分类列表*/
    Categoryindex : function (callback,cat_name) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Category/index",
            type: 'POST',
            data:{"cat_name":cat_name},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*添加项目分类*/
    Categoryadd : function (callback,cat_name,is_use,belong,order) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Category/add",
            type: 'POST',
            data:{"cat_name":cat_name,"is_use":is_use,"belong":belong,"order":order},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*修改项目分类*/
    Categorysave : function (callback,id,cat_name,is_use,belong,order) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Category/save",
            type: 'POST',
            data:{"id":id,"cat_name":cat_name,"is_use":is_use,"belong":belong,"order":order},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*删除项目分类*/
    Categorydelete : function (callback,cat_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Category/delete",
            type: 'POST',
            data:{"cat_id":cat_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取单个项目分类*/
    CategorygetOne : function (callback,cat_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Category/getOne",
            type: 'POST',
            data:{"cat_id":cat_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*添加项目*/
    Projectadd : function (callback,project_name,price,unit,cat_id,remark,order,order1,pic,cat_id1,content_link) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Project/add",
            type: 'POST',
            data:{"project_name":project_name,"price":price,"unit":unit,"cat_id":cat_id,"remark":remark,"order":order,"order1":order1,"pic":pic,"cat_id1":cat_id1,"content_link":content_link},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*修改项目*/
    Projectsave : function (callback,id,project_name,price,unit,cat_id,remark,order,order1,pic,cat_id1,content_link) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Project/save",
            type: 'POST',
            data:{"id":id,"project_name":project_name,"price":price,"unit":unit,"cat_id":cat_id,"remark":remark,"order":order,"order1":order1,"pic":pic,"cat_id1":cat_id1,"content_link":content_link},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*删除项目*/
    Projectdelete: function (callback,project_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Project/delete",
            type: 'POST',
            data:{"project_id":project_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取单个项目*/
    ProjectgetOne: function (callback,project_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Project/getOne",
            type: 'POST',
            data:{"project_id":project_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取项目列表*/
    Projectindex: function (callback,project_name,price,cat_name,p,p_len) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Project/index",
            type: 'POST',
            data:{"project_name":project_name,"price":price,"cat_name":cat_name,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*(项目)获取所有分类*/
    ProjectcatLst: function (callback,belong) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Project/catLst",
            type: 'POST',
            data:{"belong":belong},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*账单明细*/
    billDetail: function (callback,bill_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Bill/billDetail",
            type: 'POST',
            data:{"bill_id":bill_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取单个账单信息*/
    BillgetOne: function (callback,bill_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Bill/getOne",
            type: 'POST',
            data:{"bill_id":bill_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*添加服务*/
    Serviceadd: function (callback,service_name,logo_url,is_use,sort) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Service/add",
            type: 'POST',
            data:{"service_name":service_name,"logo_url":logo_url,"is_use":is_use,"sort":sort},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*修改服务*/
    Servicesave: function (callback,service_id,service_name,logo_url,is_use,sort) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Service/save",
            type: 'POST',
            data:{"service_id":service_id,"service_name":service_name,"logo_url":logo_url,"is_use":is_use,"sort":sort},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*服务项目列表*/
    Serviceindex: function (callback,service_name) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Service/index",
            type: 'POST',
            data:{"service_name":service_name},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取单个服务信息*/
    ServicegetOne: function (callback,service_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Service/getOne",
            type: 'POST',
            data:{"service_id":service_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },

    /*删除服务项目*/
    Servicedelete: function (callback,service_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Service/delete",
            type: 'POST',
            data:{"service_id":service_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*查询所有医生服务项目(预约管理)*/
    AppointmentserviceLst: function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Appointment/serviceLst",
            type: 'get',
            data:{},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*根据时间和服务项目获取医生列表*/
    getDoctorLst: function (callback,visit_date,service_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Appointment/getDoctorLst",
            type: 'get',
            data:{"visit_date":visit_date,"service_id":service_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*企业列表（预约管理）*/
    AppointmentcompanyLst: function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Appointment/companyLst",
            type: 'get',
            data:{},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*返回单个医生的详细信息和出诊时间状态*/
    getOneVisitData: function (callback,visit_date,doctor_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Appointment/getOneVisitData",
            type: 'get',
            data:{"visit_date":visit_date,"doctor_id":doctor_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*查询医生单月出诊时间*/
    visitDateQuery: function (callback,visit_date,doctor_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Appointment/visitDateQuery",
            type: 'get',
            data:{"visit_date":visit_date,"doctor_id":doctor_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    visitDateQueryD: function (callback,visit_date,doctor_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/doctor/visitDateQuery",
            type: 'get',
            data:{"visit_date":visit_date,"doctor_id":doctor_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*查询服务项目列表（医生管理）*/
    DoctorserviceLst: function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Doctor/serviceLst",
            type: 'get',
            data:{},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*诊所地址列表*/
    DoctorclinicLst: function (callback) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Doctor/clinicLst",
            type: 'get',
            data:{},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*返回指定日期的预约信息*/
    getDayVisit: function (callback,visit_date,doctor_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Doctor/getDayVisit",
            type: 'get',
            data:{"visit_date":visit_date,"doctor_id":doctor_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },

    indexView : function(callback,date,clinic_id){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/getClinicOrder",
            type:'post',
            dataType:'json',
            data:{"clinic_id":clinic_id,"visit_date":date},
            success:function(data){
                AjaxObj.Data = data;
                callback(AjaxObj);
            },
            error:function(errordata){
                console.log(errordata);
            }
        })
    },

        /*获取单个诊所信息*/
    ClinicgetOne : function (callback,clinic_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Clinic/getOne",
            type: 'POST',
            data:{"clinic_id":clinic_id},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取诊所空余椅位信息（诊所后台）*/
    getFreeChair : function (callback,clinic_id,chair_date) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/getFreeChair",
            type: 'POST',
            data:{"clinic_id":clinic_id,"chair_date":chair_date},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*修改诊所空余椅位信息（诊所后台）*/
    modifyFreeChair : function (callback,clinic_id,chair_date,chair_nums) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/modifyFreeChair",
            type: 'POST',
            data:{"clinic_id":clinic_id,"chair_date":chair_date,"chair_nums":chair_nums},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*Base64上传图片*/
    imgBase64Up : function (callback,img) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Index/imgBase64Up",
            type: 'POST',
            data:{"img":img},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取诊所设备列表信息（诊所后台）*/
    equipmentList : function (callback,clinic_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/equipmentList",
            type: 'POST',
            data:{"clinic_id":clinic_id},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*添加诊所设备信息（诊所后台）*/
    addEquipment : function (callback,clinic_id,brand,country,life_year,equipment_nums,tel,equipment_pic) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/addEquipment",
            type: 'POST',
            data:{"clinic_id":clinic_id,"brand":brand,"country":country,"life_year":life_year,"equipment_nums":equipment_nums,"tel":tel,"equipment_pic":equipment_pic},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*编辑诊所设备信息（诊所后台）*/
    editEquipment : function (callback,id,clinic_id,brand,country,life_year,equipment_nums,tel,equipment_pic) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/editEquipment",
            type: 'POST',
            data:{"id":id,"clinic_id":clinic_id,"brand":brand,"country":country,"life_year":life_year,"equipment_nums":equipment_nums,"tel":tel,"equipment_pic":equipment_pic},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取诊所设备单个信息（诊所后台*/
    getOneEquipment : function (callback,id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/getOneEquipment",
            type: 'POST',
            data:{"id":id},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取诊所耗材列表信息（诊所后台）*/
    materialList : function (callback,clinic_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/materialList",
            type: 'POST',
            data:{"clinic_id":clinic_id},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*添加诊所耗材信息（诊所后台）*/
    addMaterial : function (callback,clinic_id,material_name,material_nums,material_unit,material_pic) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/addMaterial",
            type: 'POST',
            data:{"clinic_id":clinic_id,"material_name":material_name,"material_nums":material_nums,"material_unit":material_unit,"material_pic":material_pic},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*编辑诊所耗材信息（诊所后台）*/
    editMaterial : function (callback,id,clinic_id,material_name,material_nums,material_unit,material_pic) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/editMaterial",
            type: 'POST',
            data:{"id":id,"clinic_id":clinic_id,"material_name":material_name,"material_nums":material_nums,"material_unit":material_unit,"material_pic":material_pic},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },
    /*获取诊所耗材单个信息（诊所后台）*/
    getOneMaterial : function (callback,id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/getOneMaterial",
            type: 'POST',
            data:{"id":id},
            dataType:'json',
            success:function(data){
                 AjaxObj.Data=data;
                callback(AjaxObj);
            }
        });
    },

    /*获取周一到周末的信息*/

    getWeek : function(callback,clinic_brand,date){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicSurvey/getClinicSurvey",
            type:'post',
            data:{"clinic_brand" : clinic_brand,"visit_date":date},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        })
    },
    getclinicid_name : function(callback,id){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/getOne",
            type:'post',
            data:{"clinic_id":id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        })
    },
    /*修改账单支付状态*/
    Billedit_status : function(callback,id,status,pay_method){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Bill/edit",
            type:'post',
            data:{"id":id,"status":status,"pay_method":pay_method},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        })
    },
    /*添加档案*/
    UsereditArchives : function(callback,user_id,content,type){ /*type: 1为既往史，2为空腔情况，3为牙位图，4为牙片，5为家庭成员 必须*/
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/editArchives",
            type:'post',
            data:{"user_id":user_id,"content":content,"type":type},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        })
    },
    /*编辑档案*/
    UsereditArchives2 : function(callback,user_id,content,type,create_time){ /*type: 1为既往史，2为空腔情况，3为牙位图，4为牙片，5为家庭成员 必须*/
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/editArchives2",
            type:'post',
            data:{"user_id":user_id,"content":content,"type":type,"create_time":create_time},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        })
    },
    /*查询用户档案更新记录*/
    UsersltDateRecords : function(callback,user_id,type){ /*type: 1为既往史，2为空腔情况，3为牙位图，4为牙片，5为家庭成员 必须*/
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/sltDateRecords",
            type:'post',
            data:{"user_id":user_id,"type":type},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        })
    },
    /*查询档案*/
    UsersltArchives : function(callback,user_id,create_time,type){ /*type: 1为既往史，2为空腔情况，3为牙位图，4为牙片，5为家庭成员 必须*/
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/sltArchives",
            type:'post',
            data:{"user_id":user_id,"create_time":create_time,"type":type},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj);
            }
        })
    },
    /*查询医生的初诊时间*/
    getDayStatus : function(callback,service_id,month){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Appointment/getDayStatus",
            type:'post',
            data:{"service_id":service_id,"month":month},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    /*关系成员列表*/
    indexRelationUser : function(callback,parent_id,p,p_len){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/indexRelationUser",
            type:'post',
            data:{"parent_id":parent_id,"p":p,"p_len":p_len},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    /*添加关系成员列表*/
    addRelationUser : function(callback,parent_id,phone,real_name,birth,relation){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/addRelationUser",
            type:'post',
            data:{"parent_id":parent_id,"phone":phone,"real_name":real_name,"birth":birth,"relation":relation},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    /*编辑关系成员*/
    saveRelationUser : function(callback,id,phone,real_name,birth,relation){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/saveRelationUser",
            type:'post',
            data:{"id":id,"phone":phone,"real_name":real_name,"birth":birth,"relation":relation},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    /*获取单个关系成员信息*/
    getRelationUserOne : function(callback,id){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/getRelationUserOne",
            type:'post',
            data:{"id":id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    /*删除关系成员*/
    deleteRelationUser : function(callback,id){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/deleteRelationUser",
            type:'post',
            data:{"id":id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    //预约表用户搜索用列表
    IndexuserLst : function(callback,identity_id){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Index/userLst",
            type:'post',
            data:{"identity_id":identity_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    /*根据就诊人返回预约信息*/
    getAppointmentInfo : function(callback,visit_id){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Appointment/getAppointmentInfo",
            type:'post',
            data:{"visit_id":visit_id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    //获取关系成员主账号信息
    getRelationUserParent : function(callback,id){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/User/getRelationUserParent",
            type:'post',
            data:{"id":id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    //查询用户最早的牙位图记录
    getEarliestTooth : function(callback,user_id,type){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Record/getEarliestTooth",
            type:'post',
            data:{"user_id":user_id,"type":type},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    //发送筛查报告微信通知
    sendWeixinMsg : function(callback,record_ids){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Record/sendWeixinMsg",
            type:'post',
            data:{"record_ids":record_ids},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    //查询用户档案更新记录
    RecordsltDateRecords : function(callback,user_id,type){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Record/sltDateRecords",
            type:'post',
            data:{"user_id":user_id,"type":type},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    //查询用户档案
    RecordsltArchives : function(callback,user_id,create_time,type){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Record/sltArchives",
            type:'post',
            data:{"user_id":user_id,"create_time":create_time,"type":type},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    //折扣列表
    Discountindex : function(callback,discount){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Discount/index",
            type:'post',
            data:{"discount":discount},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    //添加折扣
    Discountadd : function(callback,discount,is_use,sort){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Discount/add",
            type:'post',
            data:{"discount":discount,"is_use":is_use,"sort":sort},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    //修改折扣
    Discountsave : function(callback,id,discount,is_use,sort){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Discount/save",
            type:'post',
            data:{"id":id,"discount":discount,"is_use":is_use,"sort":sort},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    //删除折扣
    Discountdelete : function(callback,id){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Discount/delete",
            type:'post',
            data:{"id":id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    },
    //查询折扣详情
    DiscountgetOne : function(callback,id){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/Discount/getOne",
            type:'post',
            data:{"id":id},
            dataType:'json',
            success:function(data){
                AjaxObj.Data=data;
                callback(AjaxObj); 
            }
        })
    }
}
