var fetchMock = require('fetch-mock');
import  getApiIp  from '../../backend/util/apiinterface.js'

var projects = [ { name:'洗牙',id:0,relations:[4,5] },{ name:'根管治疗',id:1, relations:[6,7] },{ name:'冠修复',id:2, relations:[8,9] },{ name:'拔牙',id:3 } ]
var categorys = [ { name:'复杂冠折',id:4,relations:[10] }, { name:'牙髓炎',id:5, relations:[11] }, { name:'根尖牙周炎',id:6,relations:[12] },{ name:'复杂冠折虎',id:7,relations:[13,14] }, { name:'牙髓炎2',id:8, relations:[15,16] }, { name:'根尖牙周炎10',id:9,relations:[17] }  ]
var subcategorys = [ { name:'根尖囊肿',id:10 },{ name:'慢性根尖牙周炎',id:11 },{ name:'急性根尖牙周炎2',id:12 },{ name:'根尖囊肿3',id:13 },{ name:'慢性根尖牙周炎44',id:14 },{ name:'急性根尖牙周炎33',id:15 },{ name:'根尖囊肿112',id:16 },{ name:'慢性根尖牙周炎www',id:17 },{ name:'急性根尖牙周炎aa',id:18 }]
export var totalid = 19;

export function load_success(){

    var ret = {
    	code: '0',
    	projects,
        categorys,
        subcategorys
    }
    fetchMock.get('http://' + getApiIp() + '/mintAdmin/index.php/Admin/Template/catList?', ret);
}

export function create_project_success({ name }){

    let size = projects.length;
    var ret = {
        code: '0',
        id:totalid
    };

    projects.push({ name , id:totalid })

    totalid++;
    fetchMock.post('http://' + getApiIp() + '/caseindex/project/rest?', ret);
}

export function create_category_success({ parentid, name }){

    var ret = {
        code: '0',
        id:totalid
    }

    categorys.push({ name , id:totalid })
    projects.map((project) => {
         if(project.id == parentid){
            project.relations.push(totalid)
         }
    })
    totalid++;
    fetchMock.post('http://' + getApiIp() + '/caseindex/category/rest?', ret);
}

export function create_subcategory_success({ parentid, name  }){

    var ret = {
        code: '0',
        id:totalid
    }

    subcategorys.push({ name, id:totalid });

    subcategorys.push({ name , id:totalid })
        categorys.map((category) => {
             if(category.id == parentid){
                category.relations.push(totalid)
             }
        })

    totalid++
    fetchMock.post('http://' + getApiIp() + '/caseindex/subcategory/rest?', ret);
}

export function update_project_success({ id, name  }){


    var ret = {
        code: '0',
        id
    }
    projects = projects.map((project) => {
        if(project.id == id){
             project.name = name;
             return project;
        }
        return project;
    })

    fetchMock.put('http://' + getApiIp() + '/caseindex/project/rest?', ret);
}

export function update_category_success({ id, name  }){

    var ret = {
        code: '0',
        id
    }

    categorys = categorys.map((category) => {
        if(category.id == id){
             category.name = name;
             return category;
        }
        return category;
    })

    fetchMock.put('http://' + getApiIp() + '/caseindex/category/rest?', ret);
}

export function update_subcategory_success({ id, name  }){

    var ret = {
        code: '0',
        id
    }
    subcategorys = subcategorys.map((subcategory) => {
        if(subcategory.id == id){
             subcategory.name = name;
             return subcategory;
        }
        return subcategory;
    })

    fetchMock.put('http://' + getApiIp() + '/caseindex/subcategory/rest?', ret);
}





