var fetchMock = require('fetch-mock');
import  getApiIp  from '../../backend/util/apiinterface.js'

export function resetMock(){
      fetchMock.reset();
      fetchMock.restore();
}

export function auth_success() {
    //var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    var token = "kjhuih";
    var ret$ = {
        username: "king",
        valid: 1,
        token
    };

    //backdate a jwt 30 seconds
    fetchMock.get('http://'+getApiIp()+'/userinfo/rest?', ret$);


}

export function auth_success_serverrender_openid(){
    var token = "kjhuih";

    var ret$ = {
        username: "king",
        valid: 1,
        token
    };

    //backdate a jwt 30 seconds
    fetchMock.get('http://'+getApiIp()+'/userinfo/rest?openid=openidfortest', ret$);
}

export function auth_failed_serverrender_openid(){
    var token = "kjhuih";

    var ret$ = {
        username: "king",
        valid: 0,
        token
    };

    //backdate a jwt 30 seconds
    fetchMock.get('http://'+getApiIp()+'/userinfo/rest?openid=openidfortest', ret$);
}


export function auth_is_not_valid(){

    var token = "kjhuih";
    var ret$ = {
        username: "king",
        valid: 0,
        token
    };


    fetchMock.get('http://'+getApiIp()+'/userinfo/rest?', ret$);

}

export function auth_response_error_500(){

	fetchMock.get('http://'+getApiIp()+'/userinfo/rest?', 500);
}

export function login_success(){
    $ret = {
            username : "king",
            valid : 1,
            token : 'test'
        };
	fetchMock.post('http://'+getApiIp()+'/login',$ret)
}
export function login_error(){
    $ret = {
            username : "king",
            valid : 0,
            token : 'test'
        };
	fetchMock.post('http://'+getApiIp()+'/login',$ret)
}



