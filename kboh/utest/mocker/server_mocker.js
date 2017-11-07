var fetchMock = require('fetch-mock');

export function auth_success() {
    //var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    var token = "kjhuih";
    var ret$ = {
        username: "king",
        valid: 1,
        token
    };

    //backdate a jwt 30 seconds
    fetchMock.get('http://192.168.10.10/userinfo/rest?', ret$);


}
