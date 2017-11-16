var HOST_URL='http://'+window.location.host;
//var HOST_URL='http://182.254.213.207';
var AjaxObj = {    
    Code : 0,//成功是0，可以根据自己的要求定义code值  
    Data : null,
    ReturnUrl : "", 
    
    /*获取单个诊所信息*/
    ClinicgetOne : function (callback,clinic_id) {
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/getOne",
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

    /*登录*/
    login : function(callback,username,password){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/login",
            type:'post',
            data:{"account":username,"password":password},
            dataType:'json',
            success:function(data){
                AjaxObj.Data = data;
                callback(AjaxObj);
            }

        })
    },
    /*退出登录*/

    logout : function(callback){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/logOut",
            type:'post',
            dataType:'json',
            success:function(data){
                AjaxObj.Data = data;
                callback(AjaxObj);
            }


        })
    },
    /*头部获取的诊所信息*/

    getHead : function(callback){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/getClinicInfo",
            type:'post',
            dataType:'json',
            success:function(data){
                AjaxObj.Data = data;
                callback(AjaxObj);
            },
            error:function(errordata){
                console.log(errordata);
            }

        })
    },

    indexView : function(callback,visit_date,clinic_id){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/getClinicOrder",
            type:'post',
            dataType:'json',
            data:{"visit_date":visit_date,"clinic_id":clinic_id},
            success:function(data){
                AjaxObj.Data = data;
                callback(AjaxObj);
            },
            error:function(errordata){
                console.log(errordata);
            }
        })
    },

    changePsd : function(callback,pwd1,pwd2,pwd3){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/changePwd",
            type:'post',
            dataType:'json',
            data:{"old_pwd":pwd1,"new_pwd":pwd2,"com_pwd":pwd3},
            success:function(data){
                AjaxObj.Data = data;
                callback(AjaxObj);
            },
            error:function(errordata){
                console.log(errordata);
            }
        })
    },

    suggestMsg : function(callback,content,type){
        $.ajax({
            url:HOST_URL + "/mintAdmin/index.php/Admin/ClinicAdmin/addSuggestion",
            type:'post',
            dataType:'json',
            data:{"content":content,"type":type},
            success:function(data){
                AjaxObj.Data = data;
                callback(AjaxObj);
            },
            error:function(errordata){
                console.log(errordata);
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
    }


}