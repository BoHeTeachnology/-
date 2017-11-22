import Immutable from 'immutable'
import Promise from 'bluebird'
import getApiIp from 'backend/util/apiinterface.js'
import { error_table } from 'backend/redux/config/error_table.js'

import { table as history_table } from 'backend/useradmin/userinfo/config/historytable.js';

import { table as oral_table } from 'backend/useradmin/userinfo/config/oraltable.js';


const LOAD = 'bohe/user_patient/LOAD';
const LOAD_SUCCESS = 'bohe/user_patient/LOAD_SUCCESS';
const LOAD_FAIL = 'bohe/user_patient/LOAD_FAIL';

const LOAD_DETAIL_BASEINFO = 'bohe/user_patient/LOAD_DETAIL_BASEINFO';
const LOAD_DETAIL_BASEINFO_SUCCESS = 'bohe/user_patient/LOAD_DETAIL_BASEINFO_SUCCESS';
const LOAD_DETAIL_BASEINFO_FAIL = 'bohe/user_patient/LOAD_DETAIL_BASEINFO_FAIL';

const LOAD_DETAIL_HISTORY = 'bohe/user_patient/LOAD_DETAIL_HISTORY';
const LOAD_DETAIL_HISTORY_SUCCESS = 'bohe/user_patient/LOAD_DETAIL_HISTORY_SUCCESS';
const LOAD_DETAIL_HISTORY_FAIL = 'bohe/user_patient/LOAD_DETAIL_HISTORY_FAIL';

const LOAD_DETAIL_ORAL = 'bohe/user_patient/LOAD_DETAIL_ORAL';
const LOAD_DETAIL_ORAL_SUCCESS = 'bohe/user_patient/LOAD_DETAIL_ORAL_SUCCESS';
const LOAD_DETAIL_ORAL_FAIL = 'bohe/user_patient/LOAD_DETAIL_ORAL_FAIL';

const BASICINFO_SAVE_BEGIN = 'bohe/user_patient/BASICINFO_SAVE_BEGIN';
const BASICINFO_SAVE = 'bohe/user_patient/BASICINFO_SAVE';
const BASICINFO_SAVE_FAIL = 'bohe/user_patient/BASICINFO_SAVE_FAIL';

const BASICINFO_EDIT = 'bohe/user_patient/BASICINFO_EDIT';

const HISTORY_SAVE = 'bohe/user_patient/HISTORY_SAVE';
const HISTORY_EDIT_ADD = 'bohe/user_patient/HISTORY_EDIT_ADD';
const HISTORY_EDIT_DEL = 'bohe/user_patient/HISTORY_EDIT_DEL';

const UPDATE_HISTORY_BEGIN = 'bohe/user_patient/UPDATE_HISTORY_BEGIN'
const HISTORY_FLUSH = 'bohe/user_patient/HISTORY_FLUSH';
const UPDATE_HISTORY_FAIL = 'bohe/user_patient/UPDATE_HISTORY_FAIL'

const HISTORY_CHANGE_TIME = 'bohe/user_patient/HISTORY_CHANGE_TIME';


const ORAL_EDIT_ADD = 'bohe/user_patient/ORAL_EDIT_ADD';
const UPDATE_ORAL_BEGIN = 'bohe/user_patient/UPDATE_ORAL_BEGIN'
const ORAL_FLUSH = 'bohe/user_patient/ORAL_FLUSH';
const UPDATE_ORAL_FAIL = 'bohe/user_patient/UPDATE_ORAL_FAIL';
const ORAL_CHANGE_TIME = 'bohe/user_patient/ORAL_CHANGE_TIME';
const ORAL_EDIT_DEL = 'bohe/user_patient/ORAL_EDIT_DEL';

const SET_USER_TOSHOWINFO = 'bohe/user_patient/SET_USER_TOSHOWINFO'

const NEXT_GROUP_USERS =    'bohe/user_patient/NEXTGROUPUSERS'

const CREATE_USER_BEGIN =   'bohe/user_patient/CREATE_USER_BEGIN'

const CREATE_USER_SUCCESS =   'bohe/user_patient/CREATE_USER_SUCCESS'

const CREATE_USER_FAIL =    'bohe/user_patient/CREATE_USER_FAIL'

const CREATE_HISTORY_BEGIN = 'bohe/user_patient/CREATE_HISTORY_BEGIN'

const CREATE_HISTORY_SUCCESS = 'bohe/user_patient/CREATE_HISTORY_SUCCESS'

const CREATE_HISTORY_FAIL = 'bohe/user_patient/CREATE_HISTORY_FAIL'

const CREATE_ORAL_BEGIN = 'bohe/user_patient/CREATE_ORAL_BEGIN'

const CREATE_ORAL_SUCCESS = 'bohe/user_patient/CREATE_ORAL_SUCCESS'

const CREATE_ORAL_FAIL = 'bohe/user_patient/CREATE_ORAL_FAIL'


const LOAD_TIME = 'bohe/user_patient/LOAD_TIME';
const LOAD_TIME_SUCCESS = 'bohe/user_patient/LOAD_TIME_SUCCESS';
const LOAD_TIME_FAIL = 'bohe/user_patient/LOAD_TIME_FAIL';

const DELETE_USER = 'bohe/user_patient/DELETE_USER';
const DELETE_USER_SUCCESS = 'bohe/user_patient/DELETE_USER_SUCCESS';
const DELETE_USER_FAIL = 'bohe/user_patient/DELETE_USER_FAIL';


const LOAD_RELATION = 'bohe/user_patient/LOAD_RELATION';
const LOAD_RELATION_SUCCESS = 'bohe/user_patient/LOAD_RELATION_SUCCESS';
const LOAD_RELATION_FAIL = 'bohe/user_patient/LOAD_RELATION_FAIL';


const ADD_RELATION = 'bohe/user_patient/ADD_RELATION';
const ADD_RELATION_SUCCESS = 'bohe/user_patient/ADD_RELATION_SUCCESS';
const ADD_RELATION_FAIL = 'bohe/user_patient/ADD_RELATION_FAIL';

const EDIT_RELATION = 'bohe/user_patient/EDIT_RELATION';
const EDIT_RELATION_SUCCESS = 'bohe/user_patient/EDIT_RELATION_SUCCESS';
const EDIT_RELATION_FAIL = 'bohe/user_patient/EDIT_RELATION_FAIL';

const DEL_RELATION = 'bohe/user_patient/DEL_RELATION';
const DEL_RELATION_SUCCESS = 'bohe/user_patient/DEL_RELATION_SUCCESS';
const DEL_RELATION_FAIL = 'bohe/user_patient/DEL_RELATION_FAIL';

const HAS_RELATION = 'bohe/user_patient/HAS_RELATION';
const HAS_RELATION_SUCCESS = 'bohe/user_patient/HAS_RELATION_SUCCESS';
const HAS_RELATION_FAIL = 'bohe/user_patient/HAS_RELATION_FAIL';


const initialState = Immutable.Map({
    loaded: false,
    loading: false,
    showbegin: 0
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.merge({ loading: true })
        case LOAD_SUCCESS:
            if (action.showUsersBegin){
                console.log('111111')
                return state.merge({ showbegin: action.showUsersBegin, loading: false, loaded: true, users: action.result.data,count:action.result.count })
            }
            else{
                console.log('222222')
                return state.merge({ loading: false, loaded: true, users: action.result.data,count:action.result.count })
            }
        case LOAD_FAIL:
            if (action.refresh && action.refresh.reject) {
                action.refresh.reject()
            }
            return state.merge({ loading: false, loaded: false, error: action.error })
        case LOAD_DETAIL_BASEINFO:
            console.log(state.get('users').toJS());
            var _state = state.updateIn(['users'], list => list.map(user => {
                console.log(user.toJS());
                console.log(action.id);
                if (user.get('id') == action.id) {
                    var _user = user.merge({ loading: true, baseinfoedit: { id:action.id } });
                    console.log('RRROOOPP')
                    console.log(_user.toJS());
                    return _user;
                }
                return user
            }))
            console.log('___---____');
            console.log(_state.toJS());
            return _state;
        case LOAD_DETAIL_BASEINFO_SUCCESS:
            console.log('SUCCESS___-----');
            console.log(action.id);
            console.log(action.result);
            return state.updateIn(['users'], list => list.map(user => {
                if (user.get('id') == action.result.id) {
                    return user.mergeDeep({ loading: false, loaded: true, baseinfo: action.result ,baseinfoedit: action.result})
                }
                return user
            }))
        case LOAD_DETAIL_BASEINFO_FAIL:
            return state.merge({ error: action.error }).updateIn(['users'], list => list.map(user => {
                if (user.get('id') == action.id) {
                    return user.merge({ loading: false, loaded: false })
                }
                return user
            }))
        case BASICINFO_EDIT:
            var idx = state.getIn(['frontuserinfo', 'idx']);
            var pairs = action.result;
            var baseinfoedit = {};
            pairs.forEach((pair) => {
                baseinfoedit[pair.key] = pair.val;
            })
            if (idx != 'add') {
                var meta_info = state.getIn(['users', idx, 'baseinfoedit']);
                return state.setIn(['users', idx, 'baseinfoedit'], meta_info.merge(baseinfoedit));
            } else {
                var meta_info = state.getIn(['newuser', 'baseinfoedit']);
                return state.setIn(['newuser', 'baseinfoedit'], meta_info.merge(baseinfoedit));
            }
        case BASICINFO_SAVE_BEGIN:
             return state;
        case BASICINFO_SAVE:
            var idx = state.getIn(['users']).findIndex(value => value.get('id') == action.id)
            if (idx >= 0) {
                let infotomerge = state.getIn(['users', idx, 'baseinfoedit']);
                let metainfo = state.getIn(['users', idx, 'baseinfo']);

                return state.setIn(['users',idx],state.getIn(['users',idx]).merge(infotomerge)).setIn(['users', idx, 'baseinfo'], metainfo.merge(infotomerge)).merge({ error:{ post_success:action.post_success,msg:'修改成功' } });
            } else {
                let infotomerge = state.getIn(['newuser', 'baseinfoedit']);
                return state.setIn(['newuser', 'baseinfo'], infotomerge).merge({ error:{ post_success:action.post_success,msg:'修改成功' } });
            }
        case BASICINFO_SAVE_FAIL:
             return  state.merge({ error:action.error });
        case CREATE_USER_BEGIN:
             return state.mergeDeep({ newuser:{ loading:true, loaded:false } });
        case CREATE_USER_SUCCESS:
             console.log(action.result.mint_name);
             var infotomerge = state.getIn(['newuser', 'baseinfoedit']).merge({ mint_name:action.result.mint_name});
             var idx = state.getIn(['frontuserinfo','idx']);
             var id = state.getIn(['frontuserinfo','id']);
             console.log('{{{EEEEqqqq');
             console.log(action.result.user_id);
             if(id == 'add')
               return state.mergeDeep({ newuser:{ loading:false, loaded:true } }).setIn(['newuser','id'],action.result.user_id).setIn(['frontuserinfo', 'id'],action.result.user_id).setIn(['newuser', 'baseinfo'], infotomerge).setIn(['newuser','baseinfoedit'],infotomerge).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
             else
               return state.mergeDeep({ newuser:{ loading:false, loaded:true } }).setIn(['newuser','id'],action.result.user_id).setIn(['newuser', 'baseinfo'], infotomerge).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
        case CREATE_USER_FAIL:
             return  state.merge({error:action.error}).setIn(['newuser','loading'],false).setIn(['newuser','loaded'],false);
        case LOAD_DETAIL_HISTORY:
            if(state.getIn(['newuser','id']) == action.userid)
                return state.mergeDeep({'newuser':{ hisloading: true, historyedit: { userid:action.userid } }})
            else if(state.hasIn(['users']))
                return state.updateIn(['users'], list => list.map(user => {
                    if (user.get('id') == action.userid) {
                        return user.merge({ hisloading: true, historyedit: { userid:action.userid} })
                    }
                    return user
                }))
            else
                return state;
        case LOAD_DETAIL_HISTORY_SUCCESS:
            console.log('{{{{}}}}+++___');
            console.log(action.result);
            if(state.getIn(['newuser','id']) == action.userid){
                    var historyedit = { userid:action.userid, history: { body_condition: [], allergy: [], family_history: [], infection: [], medicine: [], surgery: [] }, time: '', timelist: [] };
                    var metahistory = action.result.allhistory ? action.result.allhistory[action.result.allhistory.length - 1] : undefined;

                    if (metahistory) {

                        historyedit.history = {...historyedit.history, ...metahistory.history }
                        historyedit.userid =  historyedit.userid;
                        historyedit.time = metahistory.time;
                        var timelist = action.result.allhistory.map((history) => {
                            return history.time
                        })

                        historyedit.timelist = timelist;
                        historyedit.idx = action.result.allhistory.length - 1;
                    }
                    let newuser = state.getIn(['newuser']).merge({ hisloading: false, hisloaded: true, historyedit, allhistory: action.result.allhistory })
                    return  state.merge({ newuser });
            }else if(state.hasIn(['users'])){
                return state.updateIn(['users'], list => list.map(user => {
                    if (user.get('id') == action.userid) {

                        var historyedit = { userid:action.userid,history: { body_condition: [], allergy: [], family_history: [], infection: [], medicine: [], surgery: [] }, time: '', timelist: [] };

                        var metahistory = action.result.allhistory ? action.result.allhistory[action.result.allhistory.length - 1] : undefined;

                        if (metahistory) {

                            historyedit.history = {...historyedit.history, ...metahistory.history }
                            historyedit.userid =  historyedit.userid;
                            historyedit.time = metahistory.time;

                            var timelist = action.result.allhistory.map((history) => {
                                return history.time
                            })

                            historyedit.timelist = timelist;
                            historyedit.idx = action.result.allhistory.length - 1;

                        }
                        return user.merge({ hisloading: false, hisloaded: true, historyedit, allhistory: action.result.allhistory })
                    }
                    return user
                }))
            }else
              return state;
        case LOAD_DETAIL_HISTORY_FAIL:
            if(state.getIn(['newuser','id']) == action.userid){
                return state.mergeDeep({ newuser:{ hisloading: false,hisloaded: false }}).merge({ error: action.error })
            }
            else if(state.hasIn(['users'])){
                return state.merge({ error: action.error }).updateIn(['users'], list => list.map(user => {
                    if (user.get('id') == action.userid) {
                        return user.merge({ hisloading: false, hisloaded: false })
                    }
                    return user

                }
            ))}
            else
                return state
        case SET_USER_TOSHOWINFO:
            if (action.result.idx == 'add') {
                return state.merge({ frontuserinfo: action.result, newuser: { baseinfo: {}, baseinfoedit: {}, historyinfo: {}, historyedit: { history: { body_condition: [], allergy: [], family_history: [], infection: [], medicine: [], surgery: [] }, time: '', timelist: [] }, oraledit: { oral: { teetharound: [], mucosa: [], surgery: [], repairhis: [] }, time: '', timelist: [] } } })
            } else {
                return state.merge({ frontuserinfo: action.result })
            }
        case NEXT_GROUP_USERS:
            return state.merge({ showbegin: action.result })
        case CREATE_HISTORY_BEGIN:
            return state;
        case CREATE_HISTORY_SUCCESS:
            var idx = state.hasIn(['users'])?state.getIn(['users']).findIndex(value => value.get('id') == action.id):-1;
            if (idx >= 0 ) {
                let historyidx = state.getIn(['users', idx, 'allhistory']).size;
                let historytomerge = state.getIn(['users', idx, 'historyedit']).setIn(['idx'],historyidx).setIn(['time'],action.result.time).updateIn(['timelist'],list=>list.push(action.result.time));
                let oldidx = state.getIn(['users',idx,'allhistory']).findIndex( value => value.get('time') == action.result.time);
                if(oldidx>=0){
                    let historytomerge = state.getIn(['users',idx,'historyedit']).setIn(['idx'],oldidx).setIn(['time'],action.result.time).setIn(['timelist',oldidx],action.result.time);
                    return state.setIn(['users', idx,'historyedit'],historytomerge).setIn(['users', idx, 'allhistory',oldidx],historytomerge).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
                else{
                    let historytomerge = state.getIn(['users',idx, 'historyedit']).setIn(['idx'],historyidx).setIn(['time'],action.result.time).updateIn(['timelist'],list => list.push(action.result.time));
                    return state.setIn(['users', idx,'historyedit'],historytomerge).updateIn(['users', idx, 'allhistory'],list=>list.push(historytomerge)).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
            } else if(state.hasIn(['newuser','id'])&&( state.getIn(['newuser','id']) == action.id )) {
                let historyidx = state.getIn(['newuser', 'allhistory']).size ;
                let oldidx = state.getIn(['newuser','allhistory']).findIndex( value => value.get('time') == action.result.time);
                if(oldidx>=0){
                    let historytomerge = state.getIn(['newuser', 'historyedit']).setIn(['idx'],(oldidx)).setIn(['time'],action.result.time).setIn(['timelist',oldidx],action.result.time);
                    return state.setIn(['newuser','historyedit'],historytomerge).setIn(['newuser', 'allhistory',oldidx],historytomerge).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
                else{
                    let historytomerge = state.getIn(['newuser', 'historyedit']).setIn(['idx'],historyidx).setIn(['time'],action.result.time).updateIn(['timelist'],list => list.push(action.result.time));
                    return state.setIn(['newuser','historyedit'],historytomerge).updateIn(['newuser', 'allhistory'],list=>list.push(historytomerge)).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
            }else
              return state;
        case CREATE_HISTORY_FAIL:
            return state.setIn(['error'],action.error);
        case HISTORY_FLUSH:
            var idx = state.getIn(['users']).findIndex(value => value.get('id') == action.id)
            if(idx >=0 ){
                let historytomerge = state.getIn(['users', idx, 'historyedit', 'history']);
                let historyidx = state.getIn(['users', idx, 'historyedit', 'idx']);
                if (historyidx >= 0) {
                    return state.setIn(['users', idx, 'allhistory', historyidx, 'history'], historytomerge).merge({ error:{ post_success:action.post_success,msg:'修改成功' } });
                } else
                    return state
            }else if( state.hasIn(['newuser','id'])&&( state.getIn(['newuser','id']) == action.id )){
                let historytomerge = state.getIn(['newuser', 'historyedit', 'history']);
                let historyidx = state.getIn(['newuser', 'historyedit', 'idx']);
                if(historyidx>=0)
                    return state.setIn(['newuser', 'allhistory',historyidx,'history'], historytomerge).merge({ error:{ post_success:action.post_success,msg:'修改成功' } });
                else
                    return state;
            }
        case HISTORY_EDIT_ADD:
            var idx = state.getIn(['frontuserinfo', 'idx']);
            var pair = action.result;
            var _history = [];
            console.log("UUU")
            console.log(pair.key)
            console.log(pair.val)
            _history = idx=='add'?['newuser', 'historyedit', 'history', pair.key]:['users', idx, 'historyedit', 'history', pair.key];
            var index = state.getIn(_history).findIndex(value => value.get('name') == pair.val.name)
            console.log("UUU2")
            console.log(index)
            if (index >= 0) {
                console.log("EEEEEEEEQQQQQQQQ")
                let i = 0;
                console.log(state.getIn(_history).toJS())
                return state.updateIn(_history, list => list.map(item => {
                    i++;
                    console.log('ADD!!!!!!')
                    console.log(item)
                    if (i == (index + 1)) {
                        return item.merge(pair.val);
                    } else {
                        return item;
                    }
                }))
            } else
                return state.setIn(_history, state.getIn(_history).push(Immutable.Map(pair.val)));
        case HISTORY_EDIT_DEL:
            var idx = state.getIn(['frontuserinfo', 'idx']);
            var pair = action.result;
            if (idx != 'add') {
                var index = state.getIn(['users', idx, 'historyedit', 'history', pair.key]).findIndex(value => value.get('name') == pair.val.name)
                if (index >= 0)
                    return state.setIn(['users', idx, 'historyedit', 'history', pair.key], state.getIn(['users', idx, 'historyedit', 'history', pair.key]).remove(index));
                else
                    return state
            } else {
                var index = state.getIn(['newuser', 'historyedit', 'history', pair.key]).findIndex(value => value.get('name') == pair.val.name)
                if (index >= 0)
                    return state.setIn(['newuser', 'historyedit', 'history', pair.key], state.getIn(['newuser', 'historyedit', 'history', pair.key]).remove(index));
                else
                    return state
            }
        case HISTORY_CHANGE_TIME:
            var pos = action.result;
            var id = state.getIn(['frontuserinfo', 'id']);
            var idx = state.getIn(['users']).findIndex(value => value.get('id') == id);
            if(idx>=0){
                var timelist = state.getIn(['users', idx, 'historyedit', 'timelist']);
                if (pos.idx >= 0) {
                    return state.setIn(['users', idx, 'historyedit'], state.getIn(['users', idx, 'allhistory', pos.idx]).setIn(['userid'],id)).setIn(['users', idx, 'historyedit', 'timelist'], timelist).setIn(['users', idx, 'historyedit', 'idx'], pos.idx);
                } else {
                    return state
                }
            }else if(state.getIn(['newuser','id'])==id){
                var timelist = state.getIn(['newuser', 'historyedit', 'timelist']);
                if (pos.idx >= 0) {
                    return state.setIn(['newuser', 'historyedit'], state.getIn(['newuser', 'allhistory', pos.idx]).setIn(['userid'],id)).setIn(['newuser', 'historyedit', 'timelist'], timelist).setIn(['newuser', 'historyedit', 'idx'], pos.idx);
                } else {
                    return state
                }
            }
            return state;
        case LOAD_DETAIL_ORAL:

            if(state.getIn(['newuser','id']) == action.userid){
                return state.mergeDeep( { newuser: { oralloading: true }}).setIn(['newuser','oraledit'],Immutable.Map({ userid:action.userid }));
            }else{
                return state.updateIn(['users'], list => list.map(user => {
                    if (user.get('id') == action.userid) {
                        return user.mergeDeep({ oralloading: true }).setIn(['oraledit'],Immutable.Map({ userid:action.userid }))
                    }
                    return user
                }))
            }
        case LOAD_DETAIL_ORAL_SUCCESS:
            if(state.getIn(['newuser','id']) == action.userid){
                  var oraledit = { userid:action.userid, oral: { teetharound: [], mucosa: [], surgery: [], repairhis: [] }, time: '', timelist: [] };
                  var metaoral = action.result.alloral ? action.result.alloral[action.result.alloral.length - 1] : undefined;
                  if (metaoral) {

                        oraledit.oral = {...oraledit.oral, ...metaoral.oral }

                        oraledit.time = metaoral.time;

                        var timelist = action.result.alloral.map((oral) => {
                            return oral.time
                        })
                        oraledit.timelist = timelist;
                        oraledit.idx = action.result.alloral.length - 1;
                    }
                    let newuser = state.getIn(['newuser']).merge({ oralloading: false, oralloaded: true, oraledit, alloral: action.result.alloral })
                    return  state.merge({ newuser });
            }

            return state.updateIn(['users'], list => list.map(user => {
                if (user.get('id') == action.userid) {
                    var oraledit = { userid:action.userid, oral: { teetharound: [], mucosa: [], surgery: [], repairhis: [] }, time: '', timelist: [] };

                    var metaoral = action.result.alloral ? action.result.alloral[action.result.alloral.length - 1] : undefined;

                    if (metaoral) {

                        oraledit.oral = {...oraledit.oral, ...metaoral.oral }

                        oraledit.time = metaoral.time;

                        var timelist = action.result.alloral.map((oral) => {
                            return oral.time
                        })
                        oraledit.timelist = timelist;
                        oraledit.idx = action.result.alloral.length - 1;
                    }
                    return user.merge({ oralloading: false, oralloaded: true, oraledit, alloral: action.result.alloral })
                }
                return user
            }))
        case LOAD_DETAIL_ORAL_FAIL:
            if(state.getIn(['newuser','id']) == action.userid){
                return state.mergeDeep( { newuser: { oralloading: false, oralloaded: false }} ).merge({ error: action.error })
            }else
                return state.merge({ error: action.error }).updateIn(['users'], list => list.map(user => {
                    if (user.get('id') == action.userid) {
                        return user.merge({ oralloading: false, oralloaded: false })
                    }
                    return user
                }))
        case ORAL_EDIT_ADD:
            var idx = state.getIn(['frontuserinfo', 'idx']);
            var pair = action.result;
            var _pairkey = (idx == 'add') ? ['newuser', 'oraledit', 'oral', pair.key] : ['users', idx, 'oraledit', 'oral', pair.key];
            var index = state.getIn(_pairkey).findIndex(value => value.get('name') == pair.val.name)
            console.log('ADD-----______');
            if (index >= 0) {
                let i = 0;
                return state.updateIn(_pairkey, list => list.map(item => {
                    i++;
                    if (i == (index + 1)) {
                        var _item_ = item.toJS();
                        let item_val = _item_.val;
                        let _item_val = pair.val.val;
                        _item_.val = {...item_val, ..._item_val }
                        return Immutable.Map({}).merge(_item_);
                    } else {
                        return item;
                    }
                }))
            } else {
                console.log(pair.val);
                return state.setIn(_pairkey, state.getIn(_pairkey).push(Immutable.Map({}).merge(pair.val)));
            }
        case CREATE_ORAL_BEGIN:
            return state;
        case CREATE_ORAL_SUCCESS:
            let idx = state.hasIn(['users'])?state.getIn(['users']).findIndex(value => value.get('id') == action.id):-1;
            if (idx >= 0 ) {
                let oralidx = state.getIn(['users', idx, 'alloral']).size;
                let oraltomerge = state.getIn(['users', idx, 'oraledit']).setIn(['idx'],oralidx).setIn(['time'],action.result.time).updateIn(['timelist'],list=>list.push(action.result.time));
                let oldidx = state.getIn(['users',idx,'alloral']).findIndex( value => value.get('time') == action.result.time);
                if(oldidx>=0){
                    let oraltomerge = state.getIn(['users',idx,'oraledit']).setIn(['idx'],oldidx).setIn(['time'],action.result.time).setIn(['timelist',oldidx],action.result.time);
                    return state.setIn(['users', idx,'oraledit'],oraltomerge).setIn(['users', idx, 'alloral',oldidx],oraltomerge).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
                else{
                    let oraltomerge = state.getIn(['users',idx, 'oraledit']).setIn(['idx'],oralidx).setIn(['time'],action.result.time).updateIn(['timelist'],list => list.push(action.result.time));
                    return state.setIn(['users', idx,'oraledit'],oraltomerge).updateIn(['users', idx, 'alloral'],list=>list.push(oraltomerge)).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
            } else if(state.hasIn(['newuser','id'])&&( state.getIn(['newuser','id']) == action.id )) {
                let oralidx = state.getIn(['newuser', 'alloral']).size;
                let oldidx = state.getIn(['newuser','alloral']).findIndex( value => value.get('time') == action.result.time);
                if(oldidx>=0){
                    let oraltomerge = state.getIn(['newuser', 'oraledit']).setIn(['idx'],oldidx).setIn(['time'],action.result.time).setIn(['timelist',oldidx],action.result.time);
                    return state.setIn(['newuser','oraledit'],oraltomerge).setIn(['newuser', 'alloral',oldidx],oraltomerge).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
                else{
                    let oraltomerge = state.getIn(['newuser', 'oraledit']).setIn(['idx'],oralidx).setIn(['time'],action.result.time).updateIn(['timelist'],list => list.push(action.result.time));
                    return state.setIn(['newuser','oraledit'],oraltomerge).updateIn(['newuser', 'alloral'],list=>list.push(oraltomerge)).merge({ error:{ post_success:action.post_success,msg:'创建成功' } });
                }
            }else
              return state;
        case CREATE_ORAL_FAIL:
            return state.setIn(['error'],action.error);
        case ORAL_FLUSH:
            var idx = state.getIn(['users']).findIndex(value => value.get('id') == action.id)
            if (idx >= 0 ) {
                var oraltomerge = state.getIn(['users', idx, 'oraledit', 'oral']);
                var oralidx = state.getIn(['users', idx, 'oraledit', 'idx']);
                if (oralidx >= 0) {
                    return state.setIn(['users', idx, 'alloral', oralidx, 'oral'], oraltomerge).merge({ error:{ post_success:action.post_success,msg:'修改成功' } });
                } else
                    return state
            } else if(state.hasIn(['newuser','id'])&&( state.getIn(['newuser','id']) == action.id )) {
                var oraltomerge = state.getIn(['newuser', 'oraledit', 'oral']);
                var oralidx = state.getIn(['newuser', 'oraledit', 'idx']);
                return  state.setIn(['newuser', 'alloral',oralidx,'oral'], oraltomerge).merge({ error:{ post_success:action.post_success,msg:'修改成功' } });
            }
        case ORAL_CHANGE_TIME:
            var pos = action.result;
            var id = state.getIn(['frontuserinfo', 'id']);
            var idx = state.getIn(['users']).findIndex(value => value.get('id') == id);
            if(idx>=0){
                var timelist = state.getIn(['users', idx, 'oraledit', 'timelist']);
                if (pos.idx >= 0) {
                    return state.setIn(['users', idx, 'oraledit'], state.getIn(['users', idx, 'alloral', pos.idx]).setIn(['userid'],id)).setIn(['users', idx, 'oraledit', 'timelist'], timelist).setIn(['users', idx, 'oraledit', 'idx'], pos.idx);
                } else {
                    return state
                }
            }else if(state.getIn(['newuser','id'])==id){
                var timelist = state.getIn(['newuser', 'oraledit', 'timelist']);
                if (pos.idx >= 0) {
                    return state.setIn(['newuser', 'oraledit'], state.getIn(['newuser', 'alloral', pos.idx]).setIn(['userid'],id)).setIn(['newuser', 'oraledit', 'timelist'], timelist).setIn(['newuser', 'oraledit', 'idx'], pos.idx);
                } else {
                    return state
                }
            }
            return state;
        case ORAL_EDIT_DEL:
            var idx = state.getIn(['frontuserinfo', 'idx']);
            var pair = action.result;
            var removeIndex;
            var _pairkey = (idx == 'add') ? ['newuser', 'oraledit', 'oral', pair.key] : ['users', idx, 'oraledit', 'oral', pair.key];
            var index = state.getIn(_pairkey).findIndex(value => value.get('name') == pair.val.name)
            for( let item in pair.val.val){
                var delname = pair.val.val[item];
            }
            console.log('DEL-----ORAL----->>>>')
            console.log(delname);
            console.log(index);
            console.log(state.getIn(['users', idx, 'oraledit', 'oral', pair.key]).toJS());
            console.log(state.getIn(['users', idx, 'oraledit', 'oral', pair.key ,index,'val']));
            console.log('PPPPPPppppp');
            var sum = 0;
            state.getIn(['users', idx, 'oraledit', 'oral', pair.key,index,'val']).mapKeys(key => {
                ++sum;
                if(state.getIn(['users', idx, 'oraledit', 'oral', pair.key,index,'val',key]) == delname){
                    removeIndex = key;
                }
            })
            console.log(removeIndex);
            console.log(state.getIn(['users', idx, 'oraledit', 'oral', pair.key,index,'val']).remove(removeIndex).toJS());
            console.log(sum);
            if (index >= 0){
                if(sum>1)
                    var _state = state.setIn(['users', idx, 'oraledit', 'oral', pair.key,index,'val'],state.getIn(['users', idx, 'oraledit', 'oral', pair.key,index,'val']).remove(removeIndex) );
                else
                    var _state = state.setIn(_pairkey,state.getIn(_pairkey).remove(index));
                return _state;
            }
            else
                return state
        case LOAD_RELATION:
            return state.updateIn(['users'], list => list.map(user => {
                if (user.get('id') == action.id) {
                    return user.merge({ loading: true })
                }
                return user
            }))
        case LOAD_RELATION_SUCCESS:
            return state.updateIn(['users'], list => list.map(user => {
                if (user.get('id') == action.id) {
                    console.log('REALITION______-----')
                    console.log(action.result);
                    return user.merge({ loading: false, loaded: true, relation: Immutable.List(action.result)})
                }
                return user
            }))
        case LOAD_RELATION_FAIL:
            return state.merge({ error: action.error }).updateIn(['users'], list => list.map(user => {
                if (user.get('id') == action.id) {
                    return user.merge({ loading: false, loaded: false })
                }
                return user
            }))
        case HAS_RELATION:
            return state;
        case HAS_RELATION_SUCCESS:
        console.log('HAS____RELATION_ __SUCCESS');
        console.log(action.result);
        console.log(action.id);
            if(action.result!=''){

                var _state = state.updateIn(['users'], list => list.map(user => {
                    if (user.get('id') == action.id) {
                        return user.setIn(['isRelation'],Immutable.Map(action.result))
                    }
                    return user
                }))
                console.log('AAAAAA');
                console.log(_state.toJS());
                return _state;
            }else{
                var _state = state.updateIn(['users'], list => list.map(user => {
                    if (user.get('id') == action.id) {
                        return user.setIn(['isRelation'],action.result)
                    }
                    return user
                }))
                console.log('BBBBBBB');
                console.log(_state.toJS());
                return _state;

            }
        case HAS_RELATION_FAIL:
            return state.merge({ error: action.error});
        default:
            return state
    }
}
export function basicInfoSave() {

    return {
        type: BASICINFO_SAVE
    }

}

export function basicInfoEdit(pairs) {

    return {
        type: BASICINFO_EDIT,
        result: pairs
    }

}

export function historyFlush() {

    return {
        type: HISTORY_FLUSH
    }

}

export function historyEditADD(pair) {

    return {
        type: HISTORY_EDIT_ADD,
        result: pair
    }

}

export function historyEditDEL(pair) {

    return {
        type: HISTORY_EDIT_DEL,
        result: pair
    }

}

export function oralEditDEL(pair) {

    return {
        type: ORAL_EDIT_DEL,
        result: pair
    }

}

export function oralEditADD(pair) {

    return {
        type: ORAL_EDIT_ADD,
        result: pair
    }

}

export function oralFlush() {

    return {
        type: ORAL_FLUSH
    }

}


export function frontUserForInfo({ idx, id }) {
    return {
        type: SET_USER_TOSHOWINFO,
        result: { idx, id }
    }

}

export function nextGroupUsers(begin) {
    return {
        type: NEXT_GROUP_USERS,
        result: begin
    }
}

export function LoadedorLoading(state) {
    var loaded = false
    var loading = false
    if (state.hasIn(['user_patient', 'loaded'])) {
        loaded = state.getIn(['user_patient', 'loaded'])
    }
    if (state.hasIn(['user_patient', 'loading'])) {
        loading = state.getIn(['user_patient', 'loading'])
    }
    return loaded || loading
}
export function LoadedorLoadingUser(state) {
    var loaded = false
    var loading = false
    var idx = state.getIn(['user_patient', "frontuserinfo", 'idx']);
    if (state.hasIn(['user_patient', 'users', idx, 'loaded'])) {
        loaded = state.getIn(['user_patient', 'users', idx, 'loaded'])
    }
    if (state.hasIn(['user_patient', 'users', idx, 'loading'])) {
        loading = state.getIn(['user_patient', 'users', idx, 'loading'])
    }
    return loading
}

export function LoadedorLoadingUser_History(state) {
    var loaded = false
    var loading = false
    var idx = state.getIn(['user_patient', "frontuserinfo", 'idx']);
    if (state.hasIn(['user_patient', 'users', idx, 'loaded'])) {
        loaded = state.getIn(['user_patient', 'users', idx, 'hisloaded'])
    }
    if (state.hasIn(['user_patient', 'users', idx, 'loading'])) {
        loading = state.getIn(['user_patient', 'users', idx, 'hisloading'])
    }
    return loading
}

export function LoadedorLoadingUser_Oral(state) {
    var loaded = false
    var loading = false
    var idx = state.getIn(['user_patient', "frontuserinfo", 'idx']);
    if (state.hasIn(['user_patient', 'users', idx, 'loaded'])) {
        loaded = state.getIn(['user_patient', 'users', idx, 'oralloaded'])
    }
    if (state.hasIn(['user_patient', 'users', idx, 'loading'])) {
        loading = state.getIn(['user_patient', 'users', idx, 'oralloading'])
    }
    return loading
}

export function changeTime(pos) {
    return {
        type: HISTORY_CHANGE_TIME,
        result: pos
    }
}

export function changeOralTime(pos) {
    return {
        type: ORAL_CHANGE_TIME,
        result: pos
    }
}


/* 当 直接采用 浏览器发起域名访问时 不会携带本地Token 所以在鉴权阶段 会转入login 登录后得到新的签发token
   当采用 微信公众号直接跳转时 鉴权阶段使用openid 通过鉴权，签发新的token到state的user中
   所以本地token最大的作用是在进入usercenter时 快捷判断是否登录过
*/
export function load({
    user,
    num,
    begin,
    req,
    refresh,
    showUsersBegin,
    company_name,
    account,
    real_name
}) {
    var data = {};

    if ((typeof window === 'undefined') || (window.__SERVER__ == true)) { ///server side
        if (user.token) ///  鉴权通过 已经持有 token
        {

            data = { num: req.query.num, begin: req.query.begin }
            data.token = user.token;


        } else { // server side none key to login

            return {
                type: LOAD_FAIL,
                promise: () => Promise.reject({ info: 'auth' })
            }

        }
    } else {
        if(!company_name){
            var company_name = ''
        }
        if(!account){
            var account = ''
        }
        if(!real_name){
            var real_name = ''
        }
        data = { p_len:num, p:begin/num+1 , identity_id:1,company_name,account,real_name }
    }
    var datatype = 'formdata';
    return {

        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/index', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {
                if (res.code == 1) {
                    return Promise.resolve(res)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.load = {msg:'notvalid'};
                    return Promise.reject( { pos: ['user_patient','load'] } )
                }
            },
            error: function(err) {
                error_table.user_patient.load = {msg:'wire'};
                return Promise.reject( { pos: ['user_patient','load'] } )
            }
        }),
        refresh,
        showUsersBegin
    };

}

// 基础信息。。。。。。。。。。。。。。。。。。。。。
export function load_detail_baseinfo({ id }) {
    var data = {}
    data.user_id = id
    var datatype = 'formdata';
    return {
        types: [LOAD_DETAIL_BASEINFO, LOAD_DETAIL_BASEINFO_SUCCESS, LOAD_DETAIL_BASEINFO_FAIL],
        promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/getOne', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {

                    return Promise.resolve(res.data)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.loaddetail.baseinfo[id] = {msg:'notvalid'};
                    return Promise.reject({ pos: ['user_patient','loaddetail','baseinfo',id]})
                }
            },
            error: function(err) {
                error_table.user_patient.loaddetail.baseinfo[id] = {msg:'wire'};
                return Promise.reject({ pos: ['user_patient','loaddetail','baseinfo',id]})
            }
        }),
        id
    };

}

//timelist.....
export function load_time({ userid,type }) {
    var data = {}
    data.userid = userid;
    data.type = type;
    datatype = 'formdata';

    return {
        types: [LOAD_TIME, LOAD_TIME_SUCCESS, LOAD_TIME_FAIL],
        promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/sltDateRecords', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {

                if (res.code == 1) {
                    return Promise.resolve(res.data).then((timeseq)=>{

                    },()=>{

                    })
                } else {
                    //var err = { info: 'auth' }

                    error_table.user_patient.loaddetail.history[userid] = { msg:'失败',name:userid}
                    return Promise.reject({ pos: ['user_patient','loaddetail','history',userid] })
                }
            },
            error: function(err) {
                error_table.user_patient.loaddetail.history[userid] = { msg:'wire'}
                return Promise.reject({ pos: ['user_patient','loaddetail','history',userid] })
            }
        })
    };

}

function historyAdapt(history,time){

    var historytotol = {};
    for(var key in history){
        historytotol[key] = [];
        history[key].map((item)=>{
            if(item.state == 1&&item.date==''){
                var _item = {name:item.name};
            }else if(item.state == 1&&item.date!=''){
                var _item = {name:item.name,date:item.date};
            }
            if(item.name == '其他过敏情况' || item.name == '其他传染病' || item.name == '近期做过手术'){
                var _item = {name:item.name,describe:item.date};
            }
            if(item.state == 1){
                historytotol[key].push({..._item});
            }
        })
    }
    return historytotol;
}

export function load_detail_history({ userid }) {
    var data = {}
    data.user_id = userid;
    data.type = 1;
    var datatype = 'formdata';

    return {
        types: [LOAD_DETAIL_HISTORY, LOAD_DETAIL_HISTORY_SUCCESS, LOAD_DETAIL_HISTORY_FAIL],
        promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/sltDateRecords', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {

                if (res.code == 1) {
                    console.log('@@@@@@#######$$$$');
                    return Promise.resolve(res.data)

                } else {
                    //var err = { info: 'auth' }

                    error_table.user_patient.loaddetail.history[userid] = { msg:'失败',name:userid}
                    return Promise.reject({ pos: ['user_patient','loaddetail','history',userid] })
                }
            },
            postprocess:[
              (timeseq) => {

                            return Promise.reduce(timeseq, function(total, time) {

                                console.log(userid);
                                console.log(time);
                                var data = {};
                                data.user_id = userid;
                                data.type = 1;
                                data.create_time = time.create_time;
                                var datatype = 'formdata';
                                console.log('@@@!!!');
                                console.log(data);

                                return client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/sltArchives', { data,datatype }, {
                                            format: function(response) {
                                                if (response.status >= 400) {
                                                    throw new Error("Bad response from server");
                                                }

                                                return response.json();
                                            },
                                            done: function(res) {

                                                console.log('XXXXXXXXXYYYYYYYZZZZZ__');
                                                console.log(total);
                                                var history = historyAdapt(res);
                                                console.log(history);
                                                total.push({ history,time:time.create_time });
                                                console.log(total);
                                                return total

                                            },
                                            error: function(err) {
                                                error_table.user_patient.loaddetail.history[userid] = { msg:'wire'}
                                                return Promise.reject({ pos: ['user_patient','loaddetail','history',userid] })
                                            }
                                        })

                                     }, []
                                    )

                    },
                    (total) => {
                        return Promise.resolve({ allhistory:total });
                    }

            ],
            error: function(err) {
                error_table.user_patient.loaddetail.history[userid] = { msg:'wire'}
                return Promise.reject({ pos: ['user_patient','loaddetail','history',userid] })
            }
        }),
        userid
    };

}

//既往史。。。。。。。。。。。。
// export function load_detail_history({ userid }) {
//     var params = {}
//     params.userid = userid

//     return {
//         types: [LOAD_DETAIL_HISTORY, LOAD_DETAIL_HISTORY_SUCCESS, LOAD_DETAIL_HISTORY_FAIL],
//         promise: (client) => client.GET('http://' + getApiIp() + '/user_patient/history/rest?', { params }, {
//             format: function(response) {
//                 if (response.status >= 400) {
//                     throw new Error("Bad response from server");
//                 }

//                 return response.json();
//             },
//             done: function(res) {

//                 if (res.valid == 1) {
//                     return Promise.resolve(res)
//                 } else {
//                     //var err = { info: 'auth' }

//                     error_table.user_patient.loaddetail.history[userid] = { msg:'失败',name:userid}
//                     return Promise.reject({ pos: ['user_patient','loaddetail','history',userid] })
//                 }
//             },
//             error: function(err) {
//                 error_table.user_patient.loaddetail.history[userid] = { msg:'wire'}
//                 return Promise.reject({ pos: ['user_patient','loaddetail','history',userid] })
//             }
//         }),
//         userid
//     };

// }

function firstAdapt(data){

    var _surgery = [];
    var _mucosa = [];
    var _teeth_around = [];
    data.surgery.map((group)=>{
        if(group.bool!=''){
            group.choose.map((item)=>{
                if(item.count == group.bool){
                    _surgery.push({ name:item.name,parent_name:group.name?group.name:'面型' });
                }
            })
        }
    })
    data.newadd.map((group)=>{
        group.content.map((item)=>{
            if(item.bool == true){
                _surgery.push({ name:item.name,parent_name:group.name?group.name:'前牙关系' });
            }
        })
    })
    data.mucosa.map((mucosa_item)=>{
        if(mucosa_item.bool == true){
            _mucosa.push({ name:mucosa_item.name,parent_name:'粘膜'});
        }
    })
    data.teeth_around.map((group)=>{
        if(group.bool!=''){
            group.choose.map((item)=>{
                if(item.count == group.bool){
                    _teeth_around.push({ name:item.name,parent_name:group.name });
                }
            })
        }
    })
    return { _surgery,_mucosa,_teeth_around }

}

function secondAdapt( _surgery,_mucosa,_teeth_around ){
    var tree = {
        surgery:{},
        mucosa:{},
        teetharound:{}
    };
    _surgery.map((item)=>{
        var _parent_name = item.parent_name;
        tree.surgery[_parent_name]?tree.surgery[_parent_name].push(item.name):(tree.surgery[_parent_name] = [ item.name ])
    })
    _mucosa.map((item)=>{
        var _parent_name = item.parent_name;
        tree.mucosa[_parent_name]?tree.mucosa[_parent_name].push(item.name):(tree.mucosa[_parent_name] = [ item.name ])
    })
    _teeth_around.map((item)=>{
        var _parent_name = item.parent_name;
        tree.teetharound[_parent_name]?tree.teetharound[_parent_name].push(item.name):(tree.teetharound[_parent_name] = [ item.name ])
    })
    return tree;
}

function thirdAdapt(tree,oral_table){
    var surgery = [];
    var mucosa = [];
    var teetharound = [];
    for( var sontree in tree){
        for(var key in oral_table){
            if( sontree == key ){

                for( var firstLevel in tree[sontree]){
                    oral_table[key].map((_firstLevel)=>{
                        if(_firstLevel.name == firstLevel ){
                            _firstLevel.groups.map((_secondLevel)=>{
                                tree[sontree][firstLevel].map((secondLevel)=>{
                                    _secondLevel.group.map((_thirdLevel)=>{
                                            if( (_thirdLevel.name == secondLevel) && (_secondLevel.type == 's')){
                                                var val = {};
                                                var surflag = 0;
                                                var mucflag = 0;
                                                var teeflag = 0;
                                                val[_secondLevel.id] = _thirdLevel.name;
                                                if(key == 'surgery'){
                                                    surgery = surgery.map((item)=>{
                                                        if(item.name == _firstLevel.name){
                                                            item.val[_secondLevel.id] = _thirdLevel.name;

                                                            val = item.val;
                                                            surflag = 1;
                                                        }
                                                        return item;
                                                    })
                                                    var _obj = {
                                                        name: _firstLevel.name,
                                                        val
                                                    }
                                                    if(surflag == 0)
                                                        surgery.push(_obj);
                                                }else if(key == 'mucosa'){
                                                    mucosa = mucosa.map((item)=>{
                                                        if(item.name == _firstLevel.name){
                                                            item.val[_secondLevel.id] = _thirdLevel.name;

                                                            val = item.val;
                                                            mucflag = 1;
                                                        }
                                                        return item;
                                                    })
                                                    var _obj = {
                                                        name: _firstLevel.name,
                                                        val
                                                    }
                                                    if(mucflag == 0)
                                                        mucosa.push(_obj);
                                                }else if(key == 'teetharound'){
                                                    teetharound = teetharound.map((item)=>{
                                                        if(item.name == _firstLevel.name){
                                                            item.val[_secondLevel.id] = _thirdLevel.name;

                                                            val = item.val;
                                                            teeflag = 1;
                                                        }
                                                        return item;
                                                    })
                                                    var _obj = {
                                                        name: _firstLevel.name,
                                                        val
                                                    }
                                                    if(teeflag == 0)
                                                        teetharound.push(_obj);
                                                }

                                            }else if( _thirdLevel.name == secondLevel && _secondLevel.type == 'm'){
                                                var val = {};
                                                var surflag = 0;
                                                var mucflag = 0;
                                                var teeflag = 0;
                                                val[_secondLevel.id] = _thirdLevel.name;
                                                if(key == 'surgery'){
                                                    surgery = surgery.map((item)=>{
                                                        if(item.name == _firstLevel.name){
                                                            item.val[_thirdLevel.id] = _thirdLevel.name;

                                                            val = item.val;
                                                            surflag = 1;
                                                        }
                                                        return item;
                                                    })
                                                    var _obj = {
                                                        name: _firstLevel.name,
                                                        val
                                                    }
                                                    if(surflag == 0)
                                                        surgery.push(_obj);
                                                }else if(key == 'mucosa'){
                                                    mucosa = mucosa.map((item)=>{
                                                        if(item.name == _firstLevel.name){
                                                            item.val[_thirdLevel.id] = _thirdLevel.name;

                                                            val = item.val;
                                                            mucflag = 1;
                                                        }
                                                        return item;
                                                    })
                                                    var _obj = {
                                                        name: _firstLevel.name,
                                                        val
                                                    }
                                                    if(mucflag == 0)
                                                        mucosa.push(_obj);
                                                }else if(key == 'teetharound'){
                                                    teetharound = teetharound.map((item)=>{
                                                        if(item.name == _firstLevel.name){
                                                            item.val[_thirdLevel.id] = _thirdLevel.name;

                                                            val = item.val;
                                                            teeflag = 1;
                                                        }
                                                        return item;
                                                    })
                                                    var _obj = {
                                                        name: _firstLevel.name,
                                                        val
                                                    }
                                                    if(teeflag == 0)
                                                        teetharound.push(_obj);
                                                }
                                            }

                                    })

                                })

                            })
                        }
                    })
                }
            }
        }
    }
    return { surgery,mucosa,teetharound };
}

function oralAdapt(oral_table,data){
    var oral = {};
    var { _surgery,_mucosa,_teeth_around } = firstAdapt(data);
    var tree = secondAdapt(_surgery,_mucosa,_teeth_around);
    var { surgery,mucosa,teetharound } = thirdAdapt(tree,oral_table);

    oral['surgery'] = surgery;
    oral['teetharound'] = teetharound;
    oral['mucosa'] = mucosa;
    oral['repairhis'] = [{
                name: "治疗及修复史",
                val: {
                    content: data.teeth_repair?data.teeth_repair:''
                }
            }];
    return oral;
}

export function load_detail_oral({ userid }) {
    var data = {}
    data.user_id = userid;
    data.type = 2;
    var datatype = 'formdata';
    return {
        types: [LOAD_DETAIL_ORAL, LOAD_DETAIL_ORAL_SUCCESS, LOAD_DETAIL_ORAL_FAIL],
        promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/sltDateRecords', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {

                if (res.code == 1) {
                    console.log('&*(')
                    return Promise.resolve(res.data)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.loaddetail.oral[userid] = {msg : 'notvalid'};
                    return Promise.reject({ pos: ['user_patient','loaddetail','oral',userid] })
                }
            },
            postprocess:[
              (timeseq) => {

                            return Promise.reduce(timeseq, function(total, time) {

                                var data = {};
                                data.user_id = userid;
                                data.type = 2;
                                data.create_time = time.create_time;
                                var datatype = 'formdata';

                                return client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/sltArchives', { data,datatype }, {
                                            format: function(response) {
                                                if (response.status >= 400) {
                                                    throw new Error("Bad response from server");
                                                }

                                                return response.json();
                                            },
                                            done: function(res) {
                                                console.log('RESRESSSSSSS_____')
                                                console.log(res);
                                                if( (res.version)&&(res.version == 'new'))
                                                    var oral = res;
                                                else
                                                    var oral = oralAdapt(oral_table,res);
                                                total.push({ oral,time:time.create_time });
                                                return total

                                            },
                                            error: function(err) {
                                                error_table.user_patient.loaddetail.history[userid] = { msg:'wire'}
                                                return Promise.reject({ pos: ['user_patient','loaddetail','history',userid] })
                                            }
                                        })

                                     }, []
                                    )

                    },
                    (total) => {
                        // total = [{ 'oral': { 'teetharound':[],'mucosa':[ ],'surgery':[],'repairhis':[]},'time':'2016012'},{ 'oral': { 'teetharound':[],'mucosa':[ ],'surgery':[],'repairhis':[]},'time':'2016012'} ];
                        console.log('TOTAL____');
                        console.log(total);
                        return Promise.resolve({ alloral:total });
                    }

            ],
            error: function(err) {
                error_table.user_patient.loaddetail.oral[userid] = {msg : 'wire'};
                return Promise.reject({ pos: ['user_patient','loaddetail','oral',userid] })
            }
        }),
        userid
    };

}











//口腔情况。。。。。。。。。。。。
// export function load_detail_oral({ userid }) {
//     var params = {}
//     params.userid = userid
//     return {
//         types: [LOAD_DETAIL_ORAL, LOAD_DETAIL_ORAL_SUCCESS, LOAD_DETAIL_ORAL_FAIL],
//         promise: (client) => client.GET('http://' + getApiIp() + '/user_patient/oral/rest?', { params }, {
//             format: function(response) {
//                 if (response.status >= 400) {
//                     throw new Error("Bad response from server");
//                 }

//                 return response.json();
//             },
//             done: function(res) {


//                 if (res.valid == 1) {
//                     return Promise.resolve(res)

//                 } else {
//                     //var err = { info: 'auth' }
//                     error_table.user_patient.loaddetail.oral[userid] = {msg : 'notvalid'};
//                     return Promise.reject({ pos: ['user_patient','loaddetail','oral',userid] })
//                 }
//             },
//             error: function(err) {
//                 error_table.user_patient.loaddetail.oral[userid] = {msg : 'wire'};
//                 return Promise.reject({ pos: ['user_patient','loaddetail','oral',userid] })
//             }
//         }),
//         userid
//     };

// }

///////post

export function create_user({
  user,
  baseinfoedit,
  post_success
}){
    var data = baseinfoedit;
    var datatype = 'formdata';

    return {
        types:[ CREATE_USER_BEGIN, CREATE_USER_SUCCESS, CREATE_USER_FAIL ],
        promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/add', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {
                    return Promise.resolve(res)

                } else {
                    error_table.user_patient.create.baseinfo = { msg:res.msg,name:'基础信息' };
                    return Promise.reject( { pos: ['user_patient','create','baseinfo'] } )
                }
            },
            error: function(err) {
                error_table.user_patient.create.baseinfo = {msg:'notvalid'};
                return Promise.reject( { pos: ['user_patient','create','baseinfo'] } )
            }
        }),
        post_success
    }
}


export function update_baseinfo({
  user,
  baseinfoedit,
  post_success
 }){
    var id = baseinfoedit.id;
    var birth = baseinfoedit.birthdate;
    console.log(')))00000(((((');
    console.log(baseinfoedit);
    var data = { ...baseinfoedit, id ,birth};
    var datatype = 'formdata';
        return {
            types:[ BASICINFO_SAVE_BEGIN, BASICINFO_SAVE, BASICINFO_SAVE_FAIL ],
            promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/save', { data,datatype }, {
                format: function(response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }

                    return response.json();
                },
                done: function(res) {


                    if (res.code == 1) {
                        return Promise.resolve(res)

                    } else {
                        //var err = { info: 'auth' }
                        error_table.user_patient.update.baseinfo[id] = { msg:'notvalid' };
                        return Promise.reject( { pos: ['user_patient','update','baseinfo',id] } )
                    }
                },
                error: function(err) {
                    error_table.user_patient.update.baseinfo[id] = { msg:'wire' };
                    return Promise.reject( { pos: ['user_patient','update','baseinfo',id] } )
                }
            }),
            id,
            post_success
        }
}

export function create_historyinfo({
  user,
  historyedit,
  post_success
}){

    var id = historyedit.userid;
    var history = adapthistory(historyedit,history_table);
    var data = {};
        data.content =  JSON.stringify(history);
        data.user_id = id;
        data.type = 1;
    var datatype = 'formdata';
        return {
            types:[ CREATE_HISTORY_BEGIN, CREATE_HISTORY_SUCCESS, CREATE_HISTORY_FAIL ],
            promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/editArchives', { data,datatype }, {
                format: function(response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }

                    return response.json();
                },
                done: function(res) {


                    if (res.code == 1) {
                        var res = {...res,time:res.create_time}
                        return Promise.resolve(res)

                    } else {
                        error_table.user_patient.create.history = { msg:'notvalid' };
                        return Promise.reject( { pos: ['user_patient','create','history'] } )
                    }
                },
                error: function(err) {
                    error_table.user_patient.create.history = { msg:'wire' };
                    return Promise.reject( { pos: ['user_patient','create','history'] } )
                }
            }),
            id,
            post_success
        }
}

function adapthistory(historyedit,history_table){
    var history={};
    for (var key in history_table){
        history[key] = [];
        history_table[key].map((table_item)=>{
            var _item = {
                        name:table_item.name,
                        state:0,
                        date:''
                    }
            historyedit.history[key].map((item)=>{
                if(item.name == table_item.name){
                    _item.state = 1;
                    _item.date = item.date==undefined?(item.describe==undefined?'':item.describe):item.date;
                }
            })
            history[key].push(_item);
        })
    }
    return history;
}

export function update_historyinfo({
  user,
  historyedit,
  post_success
}){
 var id = historyedit.userid;
    var data = {};
    var history = adapthistory(historyedit,history_table);
    data.content =  JSON.stringify(history);
    data.type = 1;
    data.create_time = historyedit.time;
    data.user_id = id;
 var  datatype = 'formdata';
    return {
        types:[ UPDATE_HISTORY_BEGIN, HISTORY_FLUSH, UPDATE_HISTORY_FAIL ],
        promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/editArchives2', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {
                if (res.code == 1) {
                    return Promise.resolve(res)
                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.update.history[id] = { msg: 'notvalid' };
                    return Promise.reject( { pos: ['user_patient','update','history',id] } )
                }
            },
            error: function(err) {
                error_table.user_patient.update.history[id] = { msg: 'wire' };
                return Promise.reject( { pos: ['user_patient','update','history',id] } )
            }
        }),
        id,
        post_success
    }
}


export function create_oralinfo({
  user,
  oraledit,
  post_success
}){
 var id = oraledit.userid;
 oraledit.oral.version = 'new';
 var data = {
    user_id:id,
    type:2
 }
 data.content =  JSON.stringify(oraledit.oral);
 var datatype = 'formdata';
    return {
        types:[ CREATE_ORAL_BEGIN, CREATE_ORAL_SUCCESS, CREATE_ORAL_FAIL ],
        promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/editArchives', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {
                    var result = {time:res.create_time}
                    
                    return Promise.resolve(result)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.create.oral = {msg:'notvalid'};
                    return Promise.reject( { pos: ['user_patient','create','oral'] } )
                }
            },
            error: function(err) {
                error_table.user_patient.create.oral = {msg:'wire'};
                return Promise.reject( { pos: ['user_patient','create','oral'] } )
            }
        }),
        id,
        post_success
    }
}

export function update_oralinfo({
  user,
  oraledit,
  post_success
}){
 var id = oraledit.userid;
 var data = {
    create_time:oraledit.time,
    user_id:id
 }
 oraledit.oral.version = 'new';
 data.content =  JSON.stringify(oraledit.oral);
 data.type = 2;
 var datatype = 'formdata';
    return {
        types:[ UPDATE_ORAL_BEGIN, ORAL_FLUSH, UPDATE_ORAL_FAIL ],
        promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/editArchives2', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {
                    return Promise.resolve(res)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.update.oral[id] = {msg:'notvalid'};
                    return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
                }
            },
            error: function(err) {
                error_table.user_patient.update.oral[id] = {msg:'wire'};
                return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
            }
        }),
        id,
        post_success
    }
}




export function delete_user({
  user_id,
  post_success
}){

 var data = {
    user_id
 }
 var datatype = 'formdata';
    return {
        types:[ DELETE_USER, DELETE_USER_SUCCESS, DELETE_USER_FAIL ],
        promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/delete', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {
                    return Promise.resolve(res)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.update.oral[id] = {msg:'notvalid'};
                    return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
                }
            },
            error: function(err) {
                error_table.user_patient.update.oral[id] = {msg:'wire'};
                return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
            }
        }),
        post_success
    }
}



export function load_relation({
  userid
}){

 var data = {
    parent_id:userid
 }
 var id = userid;
 var datatype = 'formdata';
    return {
        types:[ LOAD_RELATION, LOAD_RELATION_SUCCESS, LOAD_RELATION_FAIL ],
        promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/indexRelationUser', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {
                    return Promise.resolve(res.data)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.update.oral[id] = {msg:'notvalid'};
                    return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
                }
            },
            error: function(err) {
                error_table.user_patient.update.oral[id] = {msg:'wire'};
                return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
            }
        }),
        id
    }
}


export function add_relation({
  parent_id,
  real_name,
  relation,
  birth,
  phone
}){

 var data = {
    parent_id,
    real_name,
    relation,
    birth,
    phone
 }
 var datatype = 'formdata';
    return {
        types:[ ADD_RELATION, ADD_RELATION_SUCCESS, ADD_RELATION_FAIL ],
        promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/addRelationUser', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {
                    return Promise.resolve()

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.update.oral[id] = {msg:'notvalid'};
                    return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
                }
            },
            error: function(err) {
                error_table.user_patient.update.oral[id] = {msg:'wire'};
                return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
            }
        })
    }
}


export function edit_relation({
  id,
  real_name,
  relation,
  birth,
  phone
}){

 var data = {
    id,
    real_name,
    relation,
    birth,
    phone
 }
 var datatype = 'formdata';
    return {
        types:[ EDIT_RELATION, EDIT_RELATION_SUCCESS, EDIT_RELATION_FAIL ],
        promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/saveRelationUser', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {
                    return Promise.resolve()

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.update.oral[id] = {msg:'notvalid'};
                    return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
                }
            },
            error: function(err) {
                error_table.user_patient.update.oral[id] = {msg:'wire'};
                return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
            }
        })
    }
}

export function delete_relation({
  id
}){

 var data = {
    id
 }
 var datatype = 'formdata';
    return {
        types:[ DEL_RELATION, DEL_RELATION_SUCCESS, DEL_RELATION_FAIL ],
        promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/deleteRelationUser', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {
                    return Promise.resolve()

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.update.oral[id] = {msg:'notvalid'};
                    return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
                }
            },
            error: function(err) {
                error_table.user_patient.update.oral[id] = {msg:'wire'};
                return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
            }
        })
    }
}

export function hasRelation({
  id
}){

 var data = {
    id
 }
 var datatype = 'formdata';
    return {
        types:[ HAS_RELATION, HAS_RELATION_SUCCESS, HAS_RELATION_FAIL ],
        promise: (client) => client.POST('http://' + getApiIp() + '/mintAdmin/index.php/Admin/User/getRelationUserParent', { data,datatype }, {
            format: function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            },
            done: function(res) {


                if (res.code == 1) {
                    return Promise.resolve(res.data)

                } else {
                    //var err = { info: 'auth' }
                    error_table.user_patient.update.oral[id] = {msg:'notvalid'};
                    return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
                }
            },
            error: function(err) {
                error_table.user_patient.update.oral[id] = {msg:'wire'};
                return Promise.reject( { pos: ['user_patient','update','oral',id ] } )
            }
        }),
        id
    }
}



