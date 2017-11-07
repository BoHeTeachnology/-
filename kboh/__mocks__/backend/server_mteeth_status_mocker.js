import  getApiIp  from '../../backend/util/apiinterface.js'
var fetchMock = require('fetch-mock');

export function resetMock(){
      fetchMock.reset();
      fetchMock.restore();
}

export function load_mteeth_success({ userid }) {

    var ret ={
            "teethlist" : [ {'teeth' : [], 'time' : '1234566'} ],
            "valid" : 1,
            userid
        }
    fetchMock.get('http://' + getApiIp() + '/user_patient/mteeth/rest?', ret);

}

export function load_mteeth_fail({ userid }) {

    var ret = {
        'valid': 0,
        userid
    };
    fetchMock.get('http://' + getApiIp() + '/user_patient/mteeth/rest?', ret);

}


export function create_mteeth_success({ userid }){

    var ret = {"code" : 1 , "time" : "kingtest",userid};

	fetchMock.post('http://' + getApiIp() + '/user_patient/mteeth/rest?', ret);
}

export function create_mteeth_fail({ userid }){

    var ret = {"code" : 0 ,userid};

	fetchMock.post('http://' + getApiIp() + '/user_patient/mteeth/rest?', ret);
}


export function update_mteeth_success({ userid, time }){
    var ret = {"code" : 1 , userid, time};
	fetchMock.put('http://' + getApiIp() + '/user_patient/mteeth/rest?',ret)
}


export function update_mteeth_fail({ userid, time }){
    var ret = {"code" : 0,userid,time };
	fetchMock.put('http://' + getApiIp() + '/user_patient/mteeth/rest?',ret)
}



