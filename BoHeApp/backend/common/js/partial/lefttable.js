export const table = {
    title: 'boheadmin',
    list: [{
        name: '预约表',
        classname: 'Appointment',
        id: '0'
    }, {
        name: '客户管理',
        classname: 'User',
        id: '1'
    }, {
        name: '医生管理',
        classname: 'DoctorAdmin',
        id: '2',
        children: [{
            name: '医生列表',
            id: '2-0'
        }, {
            name: '服务项目',
            id: '2-1'
        }, {
            name: '标签设置',
            id: '2-2'
        }]
    }, {
        name: '诊所管理',
        classname: 'Clinicmain',
        id: '3',
        children: [{
            name: '诊所列表',
            id: '3-0'
        }, {
            name: '预约概览',
            id: '3-1'
        }]

    }, {
        name: '病例库',
        classname: 'Record',
        id: '4'
    }, {
        name: '合作企业',
        classname: 'Company',
        id: '5'
    }, {
        name: '账单管理',
        classname: 'Bill',
        id: '6'
    }, {
        name: '系统管理',
        classname: 'System',
        id: '7',
        children: [{
            name: '管理员设置',
            id: '7-0'
        }, {
            name: '权限管理',
            id: '7-1'
        }, {
            name: '角色管理',
            id: '7-2'
        }]

    }, {
        name: '价格表',
        classname: 'Priceform',
        id: '8',
        children: [{
            name: '项目价格',
            id: '8-0'
        }, {
            name: '项目分类',
            id: '8-1'
        }]

    }]
}
