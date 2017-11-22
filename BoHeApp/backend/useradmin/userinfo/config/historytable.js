export const table = {

	allergy:[
		{
			name: "青霉素类",
			check: '0'
		},
		{
			name: "磺胺类",
			check: '0'
		},
		{
			name: "局麻药",
			check: '0'
		},
		{
			name: "酒精",
			check: '0'
		},
		{
			name: "其他过敏情况",
			check: '0',
			describe:''
		},
	],
	body_condition:[
		{
			name: "心脏病史",
			check: '0'
		},
		{
			name: "高血压病史",
			check: '0'
		},
		{
			name: "糖尿病史",
			check: '0'
		},
		{
			name: "风湿病",
			check: '0'
		},
		{
			name: "癫痫病",
			check: '0'
		},
		{
			name: "在妊娠期",
			check: '0'
		},
		{
			name: "在哺乳期",
			check: '0'
		},
		{
			name: "定期体检",
			check: '0',
		},
		{
			name: "最近一次体检日期:",
			date:'',
			dateUI: { display:'none',position:'absolute',zIndex:'100'}
		},
		{
			name: "定期洗牙",
			check: '0'
		},
		{
			name: "最近一次洗牙日期:",
			date:'',
			dateUI: { display:'none',position:'absolute',zIndex:'100'}
		}

	],
	family_history:[
		{
			name: "牙周病",
			check: '0'
		},
		{
			name: "牙列不齐",
			check: '0'
		},
		{
			name: "颌骨发育异常",
			check: '0'
		},
	],
	infection:[
		{
			name: "肝炎",
			check: '0'
		},
		{
			name: "结核",
			check: '0'
		},
		{
			name: "艾滋病",
			check: '0'
		},
		{
			name: "其他传染病",
			check: '0',
			describe:''
		}
	],
	medicine:[
		{
			name: "在服用抗凝药（阿司匹林/华法林等）",
			check: '0'
		},
		{
			name: "在服用免疫抑制剂（如环磷酰胺，他克莫司等）",
			check: '0'
		},
		{
			name: "在服用骨质疏松类治疗药物（如福善美）",
			check: '0'
		},
		{
			name: "近期在服用消炎止痛药",
			check: '0'
		}
	],
	surgery:[
		{
			name: "近期做过手术",
			check: '0',
			describe:''
		}
	]
}