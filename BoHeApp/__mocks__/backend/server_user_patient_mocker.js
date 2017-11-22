import  getApiIp  from '../../backend/util/apiinterface.js'

var fetchMock = require('fetch-mock');

export function resetMock(){
      fetchMock.reset();
      fetchMock.restore();
}

export function load_users_success_result(index){
    return {
             'account' : "15100000000",
             'age' : "12",
             'birthday' : "1212121",
             'birthmonth' : '1212121',
             'birthyear' : '2121221',
             'card_id' : '121121212',
             'card_type' : '1212122sd',
             'city' : 'hshdasdsa',
             'clinic_id' : 'sdsadsads',
             'company_code' : 'sdsadsds',
             'company_name' : 'ysysys',
             'context' : 'sssssss',
             'country' : 'sdasdsas',
             'county' : 'sdasdsads',
             'create_time' : '12212121',
             'email' : 'sdsadsa@163.com',
             'field' : 'sdadsada',
             'have_child' : 'sdsadsdas',
             'hospital' : 'sdasdsad',
             'id' : 'sadsdas',
             'identity_id' : 'sdasdasdas',
             'invite_code' : 'sssssss',
             'is_show' : 'sdasdad',
             'is_use' : 'ssssss',
             'job' : 'ssssss',
             'job_age' : 'sssssss',
             'label' : 'ssssss',
             'label_id' : 'ssssss',
             'married' : 'ssssss',
             'name'    : 'ssssss',
             'nickname'    : 'ssssss',
             'phone'    : 'ssssss',
             'photo'    : 'ssssss',
             'position'    : 'ssssss',
             'post_address'    : 'ssssss',
             'province'    : 'ssssss',
             'race'    : 'ssssss',
             'real_name'    : 'ssssss',
             'remark'    : 'ssssss',
             'role_id'    : 'ssssss',
             'sex'    : 'ssssss',
             'society_number'    : 'ssssss',
             'work_time'    : 'ssssss',
             'id' : index,
             'real_name' : index
            }
}
export function load_users_success({ begin }){

        var index = begin;
        var users = [];
        for(let i=0;index<begin+10;index++,i++)
        {
          let user = {
             'account' : "15100000000",
             'age' : "12",
             'birthday' : "1212121",
             'birthmonth' : '1212121',
             'birthyear' : '2121221',
             'card_id' : '121121212',
             'card_type' : '1212122sd',
             'city' : 'hshdasdsa',
             'clinic_id' : 'sdsadsads',
             'company_code' : 'sdsadsds',
             'company_name' : 'ysysys',
             'context' : 'sssssss',
             'country' : 'sdasdsas',
             'county' : 'sdasdsads',
             'create_time' : '12212121',
             'email' : 'sdsadsa@163.com',
             'field' : 'sdadsada',
             'have_child' : 'sdsadsdas',
             'hospital' : 'sdasdsad',
             'id' : 'sadsdas',
             'identity_id' : 'sdasdasdas',
             'invite_code' : 'sssssss',
             'is_show' : 'sdasdad',
             'is_use' : 'ssssss',
             'job' : 'ssssss',
             'job_age' : 'sssssss',
             'label' : 'ssssss',
             'label_id' : 'ssssss',
             'married' : 'ssssss',
             'name'    : 'ssssss',
             'nickname'    : 'ssssss',
             'phone'    : 'ssssss',
             'photo'    : 'ssssss',
             'position'    : 'ssssss',
             'post_address'    : 'ssssss',
             'province'    : 'ssssss',
             'race'    : 'ssssss',
             'real_name'    : 'ssssss',
             'remark'    : 'ssssss',
             'role_id'    : 'ssssss',
             'sex'    : 'ssssss',
             'society_number'    : 'ssssss',
             'work_time'    : 'ssssss'
            };

            user['id'] = index;
            user['real_name'] = index;
            users[i] = user;
        }
        var ret = {
            'users' : users,
            'valid' : 1

        };
    fetchMock.get('http://' + getApiIp() + '/user_patient/rest?'+'num=10&begin='+begin,ret)

}

export function load_users_fail({ begin }){

     var ret = {
     	 valid:0
     };

     fetchMock.get('http://' + getApiIp() + '/user_patient/rest?'+'num=10&begin='+begin,ret)

}

export function load_baseinfo_success({id}){

      var ret = {
            'baseinfo' : { id ,age : "666", },
            'valid' : 1
        };
	 fetchMock.get('http://' + getApiIp() + '/user_patient/basicinfo/rest?'+'id='+id,ret)
}

export function load_baseinfo_fail({id}){

      var ret = {
            'baseinfo' : { id },
            'valid' : 0
        };
	 fetchMock.get('http://' + getApiIp() + '/user_patient/basicinfo/rest?'+'id='+id,ret)
}

export function create_user_success(){
	var ret = { userid : 999, code : 1};
	fetchMock.post('http://' + getApiIp() + '/user_patient/rest?',ret)
}

export function update_baseinfo_success({ id }){
    var ret = { id, code : 1};
    fetchMock.put('http://' + getApiIp() + '/user_patient/basicinfo/rest?',ret)
}


export function load_history_success_result({ userid }) {
     return  {
        'allhistory': [{ 'history': { 'allergy': [], 'body_condition': [], 'family_history': [], 'infection': [], 'medicine': [], 'surgery': [] }, 'time': '2012012' }, {
            'history': { 'allergy': [], 'body_condition': [], 'family_history': [], 'infection': [], 'medicine': [], 'surgery': [] },
            'time': '2012013'
        }],
        'valid': 1,
        userid
    };

}
export function load_history_success({ userid }) {

    var ret = {
        'allhistory': [{ 'history': { 'allergy': [], 'body_condition': [], 'family_history': [], 'infection': [], 'medicine': [], 'surgery': [] }, 'time': '2012012' }, {
            'history': { 'allergy': [], 'body_condition': [], 'family_history': [], 'infection': [], 'medicine': [], 'surgery': [] },
            'time': '2012013'
        }],
        'valid': 1,
        userid
    };

    fetchMock.get('http://' + getApiIp() + '/user_patient/history/rest?'+'userid='+userid, ret);

}

export function load_history_fail({ userid }) {

    var ret = {
        'valid': 0,
        userid
    };

    fetchMock.get('http://' + getApiIp() + '/user_patient/history/rest?'+'userid='+userid, ret);

}


export function create_history_success({ historyedit }){

    var ret = {"code" : 1 , "time" : "kingtest",userid:historyedit.userid};

	fetchMock.post('http://' + getApiIp() + '/user_patient/history/rest?', ret);
}

export function create_history_fail({ userid }){

    var ret = {"code" : 0 ,userid};

	fetchMock.post('http://' + getApiIp() + '/user_patient/history/rest?', ret);
}


export function update_history_success({ userid, time }){
    var ret = {"code" : 1 , userid, time};
	fetchMock.put('http://' + getApiIp() + '/user_patient/history/rest?',ret)
}

export function update_history_fail({ userid, time }){
    var ret = {"code" : 0 };
	fetchMock.put('http://' + getApiIp() + '/user_patient/history/rest?',ret)
}

export function load_oral_success_result({userid}){

    return {
            'alloral' : [{'oral' : {'teetharound' : [ ],'mucosa':[  ],'surgery':[],'repairhis' : []},'time' : '2016012'},{'oral' : {'teetharound' : [ ],'mucosa':[  ],'surgery':[],'repairhis' : []},'time' : '2016015'}],
            'valid' : 1,
             userid
        }
}

export function load_oral_success({ userid }) {

        var ret = {
            'alloral' : [{'oral' : {'teetharound' : [ ],'mucosa':[  ],'surgery':[],'repairhis' : []},'time' : '2016012'},{'oral' : {'teetharound' : [ ],'mucosa':[  ],'surgery':[],'repairhis' : []},'time' : '2016015'}],
            'valid' : 1,
             userid
        }

    fetchMock.get('http://' + getApiIp() + '/user_patient/oral/rest?'+'userid='+userid, ret);

}

export function load_oral_fail({ userid }) {

    var ret = {
        'valid': 0,
        userid
    };

    fetchMock.get('http://' + getApiIp() + '/user_patient/oral/rest?'+'userid='+userid, ret);

}


export function create_oral_success({ userid }){

    var ret = {"code" : 1 , "time" : "kingtest",userid};

	fetchMock.post('http://' + getApiIp() + '/user_patient/oral/rest?', ret);
}

export function create_oral_fail({ userid }){

    var ret = {"code" : 0 ,userid};

	fetchMock.post('http://' + getApiIp() + '/user_patient/oral/rest?', ret);
}


export function update_oral_success({ userid, time }){
    var ret = {"code" : 1 , userid, time};
	fetchMock.put('http://' + getApiIp() + '/user_patient/oral/rest?',ret)
}

export function update_oral_fail({ userid, time }){
    var ret = {"code" : 0,userid,time };
	fetchMock.put('http://' + getApiIp() + '/user_patient/history/rest?',ret)
}
