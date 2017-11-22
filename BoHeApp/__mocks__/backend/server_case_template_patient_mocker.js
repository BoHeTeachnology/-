var fetchMock = require('fetch-mock');
import  getApiIp  from '../../backend/util/apiinterface.js'

 var templates = [{ id:'0_0_2_4',index:{ type:0,project:{id:0},category:{id:2},subcategory:{id:4} }, main:'牙龈经常出血_____   。  ', currentill:'患者_____   年来早晨刷牙牙龈出血，用清水漱口后可以停止。有时吃东西的时候也会出血，未感觉到有明显的疼痛，前来就诊。刷牙____    次/天，每次____      min，      刷。 ', check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ', cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。'},
                  { id:'0_0_1_2',index:{ type:0,project:{id:0},category:{id:1},subcategory:{id:2} }, main:'牙龈经常出血_____   。  ', currentill:'患者_____   年来早晨刷牙牙龈出血，用清水漱口后可以停止。有时吃东西的时候也会出血，未感觉到有明显的疼痛，前来就诊。刷牙____    次/天，每次____      min，      刷。 ', check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ', cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。'},
                  { id:'1_0_1_3',index:{ type:1,project:{id:0},category:{id:1},subcategory:{id:3} }, main:'牙龈经常出血_____   。  ', currentill:'患者_____   年来早晨刷牙牙龈出血，用清水漱口后可以停止。有时吃东西的时候也会出血，未感觉到有明显的疼痛，前来就诊。刷牙____    次/天，每次____      min，      刷。 ', check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ', cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。'},
                  { id:'0_0_4_10',index:{ type:0,project:{id:0},category:{id:4},subcategory:{id:10} }, main:'牙龈经常出血_____   。  ', currentill:'患者_____   年来早晨刷牙牙龈出血，用清水漱口后可以停止。有时吃东西的时候也会出血，未感觉到有明显的疼痛，前来就诊。刷牙____    次/天，每次____      min，      刷。 ', check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ', cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。'},
                  { id:'0_0_5_11',index:{ type:0,project:{id:0},category:{id:5},subcategory:{id:11} }, main:'牙龈经常出血_____   。  ', currentill:'患者_____   年来早晨刷牙牙龈出血，用清水漱口后可以停止。有时吃东西的时候也会出血，未感觉到有明显的疼痛，前来就诊。刷牙____    次/天，每次____      min，      刷。 ', check:'000000000全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ', cure:' 000000001、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。'}];


export function load_template_success({ project, category, subcategory,type }){

    var id = type+'_'+project.id+'_'+category.id+'_'+subcategory.id;
    var template;

    templates.map((_template) => {
    	if(_template.id == id){
           template = _template;
    	}
    });
    var ret = {
    	code: '0',
    	template
    };
    console.log("--------------")
    console.log(template)
    fetchMock.get('http://' + getApiIp() + '/mintAdmin/index.php/Admin/Template/getOneTemplate?template_id='+id, ret);
}

export function create_template_success({ edit }){

    var size = templates.length;
    var ret = {
    	code: '0',
    	id:size
    }
    var index = edit.index;
    edit.id = index.type+'_'+index.project.id+'_'+index.category.id+'_'+index.subcategory.id
    templates.push(edit)

    fetchMock.post('http://' + getApiIp() + '/case_template/rest?', ret);
}

export function update_template_success({ edit }){

    var id = edit.id
    var ret = {
    	code: '0',
    	id
    }
    templates = templates.map((template) => {
    	 if(template.id == edit.id){
            return edit
    	 }
    	 return template;
    })
    fetchMock.put('http://' + getApiIp() + '/case_template/rest?', ret);
}

