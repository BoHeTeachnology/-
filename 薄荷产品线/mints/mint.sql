/*
SQLyog Ultimate v11.24 (32 bit)
MySQL - 5.1.73 : Database - mint
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`mint` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `mint`;

/*Table structure for table `mint_app` */

DROP TABLE IF EXISTS `mint_app`;

CREATE TABLE `mint_app` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `app_name` varchar(30) NOT NULL DEFAULT '' COMMENT '权限名称',
  `app_uri` varchar(30) NOT NULL DEFAULT '' COMMENT '模块控制器方法的结合字符串',
  `app_url` varchar(300) NOT NULL DEFAULT '' COMMENT '权限访问地址',
  `parent_id` mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '上级权限的ID，如果为0代表顶级权限',
  `sort` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `create_time` int(11) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户权限表';

/*Table structure for table `mint_appointment` */

DROP TABLE IF EXISTS `mint_appointment`;

CREATE TABLE `mint_appointment` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `patient_id` mediumint(9) NOT NULL DEFAULT '0' COMMENT '病人ID',
  `patient_name` varchar(30) DEFAULT '' COMMENT '病人姓名',
  `patient_phone` varchar(11) DEFAULT '' COMMENT '病人手机',
  `invite_code` char(6) NOT NULL DEFAULT '' COMMENT '公司的邀请码',
  `doctor_id` mediumint(9) NOT NULL DEFAULT '0' COMMENT '医生ID',
  `start_time` int(11) DEFAULT NULL COMMENT '开始时间',
  `end_time` int(11) DEFAULT NULL COMMENT '结束时间',
  `time_type` int(11) DEFAULT '1' COMMENT '时间类型，1是周一到周五，2是周末',
  `visit_time` int(11) NOT NULL COMMENT '就诊时间',
  `visit_date` int(11) NOT NULL DEFAULT 0 COMMENT '就诊日期',
  `clinic_id` mediumint(9) NOT NULL COMMENT '诊所ID',
  `project_name` varchar(30) NOT NULL default '' COMMENT '项目名称',
  `is_self` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否是本人，1是，2否',
  `contact_tel` varchar(11) default '' COMMENT '联系电话',
  `option_id` int(1) NOT NULL default '1' COMMENT '选项id',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '预约状态,1预约中,2已完成,3已过期,4已取消,5已确认',
  `remark` varchar(200) DEFAULT '' COMMENT '备注',
  `reserve_number` char(6) NOT NULL DEFAULT '' COMMENT '预约编号',
  `create_time` int(11) NOT NULL COMMENT '添加时间',
  `is_return` tinyint(4) NOT NULL DEFAULT 0 COMMENT '是否是复诊，1是，0否',
  `need_return` tinyint(4) NOT NULL DEFAULT 0 COMMENT '是否需要复诊，1是，0否',
  `relations` varchar(30) DEFAULT '' COMMENT '预约用户与病人的关系',
  `service_id` mediumint(9) NOT NULL COMMENT '服务项目ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='预约表';

/*Table structure for table `mint_clinic` */

DROP TABLE IF EXISTS `mint_clinic`;

CREATE TABLE `mint_clinic` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `clinic_brand` varchar(30) NOT NULL COMMENT '诊所品牌',
  `clinic_name` varchar(30) NOT NULL COMMENT '诊所名称',
  `clinic_address` varchar(600) NOT NULL COMMENT '诊所地址',
  `chair_nums` int(5) NOT NULL DEFAULT '0' COMMENT '牙椅数量',
  `clinic_head_name` varchar(30) NOT NULL DEFAULT '' COMMENT '诊所负责人',
  `mint_head_name` varchar(30) NOT NULL DEFAULT '' COMMENT '薄荷对接人',
  `clinic_head_phone` varchar(11) DEFAULT '' COMMENT '诊所负责人电话',
  `mint_head_phone` varchar(11) DEFAULT '' COMMENT '薄荷对接人电话',
  `doctor_nums` int(5) NOT NULL DEFAULT '0' COMMENT '选择该诊所的医生个数',
  `account` varchar(11) NOT NULL COMMENT '账号',
  `password` varchar(32) NOT NULL DEFAULT '14e1b600b1fd579f47433b88e8d85291' COMMENT '密码',
  `set_date` varchar(30) NOT NULL default '' COMMENT '成立时间',
  `staff_nums` int(5) NOT NULL DEFAULT '0' COMMENT '员工人数',
  `clinic_pic` varchar(200) NOT NULL DEFAULT '' COMMENT '诊所资质图片',
  `around_pic` varchar(200) NOT NULL DEFAULT '' COMMENT '环评资质图片',
  `create_time` int(11) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`),
  KEY `clinic_name` (`clinic_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='合作诊所表';

/*Table structure for table `mint_company` */

DROP TABLE IF EXISTS `mint_company`;

CREATE TABLE `mint_company` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `company_name` varchar(30) NOT NULL COMMENT '企业名称',
  `staff_nums` int(6) NOT NULL DEFAULT '0' COMMENT '员工数量',
  `company_address` varchar(600) NOT NULL DEFAULT '' COMMENT '企业地址',
  `company_code` varchar(10) NOT NULL DEFAULT '6666' COMMENT '公司的邀请码',
  `company_head_name` varchar(30) NOT NULL DEFAULT '' COMMENT '企业负责人',
  `mint_head_name` varchar(30) NOT NULL DEFAULT '' COMMENT '薄荷对接人',
  `company_head_phone` varchar(11) DEFAULT '' COMMENT '企业负责人电话',
  `mint_head_phone` varchar(11) DEFAULT '' COMMENT '薄荷对接人电话',
  `create_time` int(11) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`),
  KEY `company_name` (`company_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='合作企业表';

/*Table structure for table `mint_file` */

DROP TABLE IF EXISTS `mint_file`;

CREATE TABLE `mint_file` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `record_id` mediumint(9) NOT NULL COMMENT '病历ID',
  `file_name` varchar(50) DEFAULT '' COMMENT '附件名',
  `file_path` varchar(300) DEFAULT '' COMMENT '附件路径',
  `create_time` int(11) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`),
  KEY `record_id` (`record_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='项目附件表';

/*Table structure for table `mint_record` */

DROP TABLE IF EXISTS `mint_record`;

CREATE TABLE `mint_record` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '病例类型，1是初诊，2是牙体牙髓，3是牙周',
  `visit_time` int(11) NOT NULL COMMENT '就诊时间',
  `record_number` varchar(11) NOT NULL DEFAULT '' COMMENT '病例编号',
  `patient_id` mediumint(9) NOT NULL COMMENT '病人ID',
  `doctor_id` mediumint(9) NOT NULL COMMENT '医生ID',
  `clinic_id` mediumint(9) NOT NULL DEFAULT '0' COMMENT '诊所ID',
  `label` varchar(300) NOT NULL DEFAULT '' COMMENT '标签，,号分割',
  `label_id` varchar(300) NOT NULL DEFAULT '' COMMENT '标签id,号分割',
  `record_content` varchar(300) NOT NULL DEFAULT '' COMMENT '诊断内容',
  `treatment` varchar(300) NOT NULL DEFAULT '' COMMENT '治疗设计',
  `tooth_body` varchar(100) NOT NULL DEFAULT '' COMMENT '牙体和外科情况',
  `tooth_pic` varchar(200) NOT NULL DEFAULT '' COMMENT '牙位图',
  `tooth_around` varchar(100) NOT NULL DEFAULT '' COMMENT '牙周情况',
  `tooth_type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '牙周图例类型，1是早起，2是中期，3是晚期，4是医嘱',
  `tooth_square` tinyint(4) NOT NULL DEFAULT '1' COMMENT '整齐情况,1为整齐,2为不整齐',
  `tooth_suggestion` varchar(300) NOT NULL DEFAULT '' COMMENT '综合意见',
  `create_time` int(11) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='病历表'

/*Table structure for table `mint_role` */

DROP TABLE IF EXISTS `mint_role`;

CREATE TABLE `mint_role` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `role_name` varchar(30) NOT NULL COMMENT '角色名称',
  `role_remark` varchar(200) DEFAULT '' COMMENT '角色说明',
  PRIMARY KEY (`id`),
  KEY `role_name` (`role_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色表';

/*Table structure for table `mint_role_app` */

DROP TABLE IF EXISTS `mint_role_app`;

CREATE TABLE `mint_role_app` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` mediumint(9) NOT NULL COMMENT '角色id',
  `app_id` mediumint(9) NOT NULL COMMENT '权限id',
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`),
  KEY `app_id` (`app_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户角色权限表';

/*Table structure for table `mint_user` */

DROP TABLE IF EXISTS `mint_user`;

CREATE TABLE `mint_user` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `account` varchar(11) NOT NULL COMMENT '账号',
  `password` varchar(32) NOT NULL DEFAULT '14e1b600b1fd579f47433b88e8d85291' COMMENT '密码',
  `photo` varchar(200) NOT NULL DEFAULT '/mintAdmin/up/images/m.png' COMMENT '用户头像',
  `name` varchar(30) DEFAULT '' COMMENT '姓名',
  `real_name` varchar(30) DEFAULT '' COMMENT '真实姓名',
  `card_id` varchar(19) DEFAULT NULL COMMENT '身份证号码',
  `birthyear` int(6) DEFAULT NULL COMMENT '用户出生年份',
  `birthmonth` int(3) DEFAULT NULL COMMENT '用户出生月份',
  `birthday` int(3) DEFAULT NULL COMMENT '用户出生日期',
  `sex` char(1) DEFAULT '1' COMMENT '性别，1是男，2是女',
  `phone` varchar(11) DEFAULT '' COMMENT '手机',
  `email` varchar(50) DEFAULT '' COMMENT '邮箱',
  `province` varchar(20) DEFAULT '' COMMENT '省份',
  `city` varchar(30) DEFAULT '' COMMENT '市区',
  `county` varchar(30) DEFAULT '' COMMENT '县',
  `company_name` varchar(30) DEFAULT '' COMMENT '所在公司',
  `position` varchar(300) NOT NULL DEFAULT '' COMMENT '医生职位',
  `hospital` varchar(300) NOT NULL DEFAULT '' COMMENT '医生医院',
  `context` varchar(300) NOT NULL DEFAULT '' COMMENT '医生背景',
  `work_time` varchar(300) NOT NULL DEFAULT '' COMMENT '出诊时间,逗号分隔的星期',
  `job_age` int(2) DEFAULT NULL COMMENT '医生执业年限',
  `invite_code` varchar(10) NOT NULL DEFAULT '6666' COMMENT '医生的邀请码',
  `field` varchar(300) NOT NULL DEFAULT '' COMMENT '擅长领域',
  `label` varchar(300) NOT NULL DEFAULT '' COMMENT '标签，,号分割',
  `label_id` varchar(300) NOT NULL DEFAULT '' COMMENT '标签id,号分割',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '注册时间',
  `role_id` mediumint(3) NOT NULL DEFAULT '1' COMMENT '用户角色id，1是普通用户',
  `identity_id` mediumint(3) NOT NULL DEFAULT '1' COMMENT '用户身份id，1是病人，2是医生，3是管理员',
  `is_use` tinyint(4) NOT NULL DEFAULT '1' COMMENT '账号状态，1是启用，2是禁用',
  `is_show` tinyint(4) NOT NULL DEFAULT '1' COMMENT '账号状态，1是，2否',
  `remark` varchar(200) NOT NULL DEFAULT '' COMMENT '备注，后台',
  `openid` varchar(32) NOT NULL DEFAULT '' COMMENT '用户微信openid',
  `user_token` varchar(32) NOT NULL DEFAULT '' COMMENT '用户令牌，凭证',
  `company_code` char(6) NOT NULL DEFAULT '' COMMENT '普通用户公司的邀请码',
  `clinic_id` mediumint(9) NOT NULL COMMENT '医生诊所ID',
  PRIMARY KEY (`id`),
  KEY `account` (`account`),
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';

/*insert into `mint_user` (`id`, `account`, `password`, `photo`, `name`, `birthyear`, `birthmonth`, `birthday`, `sex`, `phone`, `email`, `province`, `city`, `county`, `company_name`, `position`, `hospital`, `context`, `field`, `label`, `create_time`, `role_id`, `is_use`, `remark`, `openid`, `user_token`) values('1','admin','14e1b600b1fd579f47433b88e8d85291','/mintAdmin/up/images/m.png',NULL,NULL,NULL,NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','0','2','3','1','','','');
*/
/*Table structure for table `mint_user_follow` */

DROP TABLE IF EXISTS `mint_user_follow`;

CREATE TABLE `mint_user_follow` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `doctor_id` mediumint(9) NOT NULL COMMENT '医生ID',
  `patient_id` mediumint(9) NOT NULL COMMENT '病人ID',
  `create_time` int(11) NOT NULL COMMENT '关注时间',
  PRIMARY KEY (`id`),
  KEY `doctor_id` (`doctor_id`),
  KEY `patient_id` (`patient_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户关注医生表';

/*Table structure for table `mint_verify` */

DROP TABLE IF EXISTS `mint_verify`;

CREATE TABLE `mint_verify` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `phone` varchar(30) NOT NULL COMMENT '手机',
  `verify` varchar(6) DEFAULT '' COMMENT '验证码',
  `is_use` tinyint(4) DEFAULT '1' COMMENT '验证码状态，1代表未使用，2代表使用过，默认为未使用',
  `create_time` int(11) NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `phone` (`phone`),
  KEY `verify` (`verify`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='短信验证码表';

CREATE TABLE `mint_tag` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(30) NOT NULL COMMENT '标签名称',
  `type` int(1) NOT NULL default 1 COMMENT '标签类型，1代表医生标签，2代表病例标签',
  PRIMARY KEY (`id`),
  KEY `tag_name` (`tag_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='标签表';

CREATE TABLE `mint_option` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `option_name` varchar(30) NOT NULL COMMENT '标签名称',
  PRIMARY KEY (`id`),
  KEY `option_name` (`option_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='选项表';

CREATE TABLE `mint_suggestion` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_account` varchar(11) NOT NULL COMMENT '提交人账号',
  `content` varchar(300) NOT NULL COMMENT '意见内容',
  `type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '意见类型，1用户意见，2是诊所意见',
  `clinic_id` mediumint(9) NOT NULL COMMENT '诊所ID',
  `create_time` int(11) NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `user_account` (`user_account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='意见表';

CREATE TABLE `mint_bill` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `patient_id` mediumint(9) NOT NULL DEFAULT '0' COMMENT '病人ID',
  `patient_name` varchar(30) DEFAULT '' COMMENT '病人姓名',
  `patient_account` varchar(11) DEFAULT '' COMMENT '病人账号',
  `company_id` mediumint(9) NOT NULL DEFAULT '0' COMMENT '公司ID',
  `company` varchar(30) NOT NULL default '' COMMENT '所属公司',
  `doctor_id` mediumint(9) NOT NULL DEFAULT '0' COMMENT '医生ID',
  `doctor_name` varchar(30) DEFAULT '' COMMENT '医生姓名',
  `visit_time` int(11) NOT NULL COMMENT '就诊时间',
  `clinic_id` mediumint(9) NOT NULL COMMENT '诊所ID',
  `clinic_name` varchar(30) DEFAULT '' COMMENT '诊所名称',
  `project_name` varchar(30) NOT NULL COMMENT '项目名称',
  `is_self` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否是本人，1是，2否',
  `contact_tel` varchar(11) default '' COMMENT '联系电话',
  `pay_money` decimal(10,2) NOT NULL DEFAULT 0 COMMENT '支付金额',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '支付状态,1已支付,0未支付',
  `pay_method` varchar(30) NOT NULL default '' COMMENT '支付方式',
  `is_confirm` tinyint(1) NOT NULL DEFAULT 0 COMMENT '用户确认状态,1已确认,0未确认',
  `bill_number` char(6) NOT NULL DEFAULT '' COMMENT '账单编号',
  `remark` varchar(200) DEFAULT '' COMMENT '备注',
  `create_time` int(11) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='账单表';

CREATE TABLE `mint_project` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `project_name` varchar(100) NOT NULL COMMENT '项目名称',
  `price` decimal(10,2) NOT NULL DEFAULT 0 COMMENT '价格',
  `unit` varchar(10) NOT NULL COMMENT '单位',
  `cat_id` mediumint(9) NOT NULL COMMENT '分类id',
  `remark` varchar(200) DEFAULT '' COMMENT '备注',
  `create_time` int(11) NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `project_name` (`project_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='项目表';

CREATE TABLE `mint_bill_project` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bill_id` mediumint(9) NOT NULL COMMENT '账单id',
  `project_id` mediumint(9) NOT NULL COMMENT '项目id',
  `project_name` varchar(100) NOT NULL COMMENT '项目名称',
  `price` decimal(10,2) NOT NULL DEFAULT 0 COMMENT '价格',
  `unit` varchar(10) NOT NULL COMMENT '单位',
  `cat_id` mediumint(9) NOT NULL COMMENT '分类id',
  `remark` varchar(200) DEFAULT '' COMMENT '备注',
  `number` tinyint NOT NULL DEFAULT 0 COMMENT '价格',
  `create_time` int(11) NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `project_name` (`project_name`),
  KEY `bill_id` (`bill_id`),
  KEY `project_id` (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='账单项目表';

CREATE TABLE `mint_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(100) NOT NULL COMMENT '分类名称',
  `is_use` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否启用，1是，2否',
  `remark` varchar(200) DEFAULT '' COMMENT '备注',
  `create_time` int(11) NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='项目分类表';

CREATE TABLE `mint_service` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `service_name` varchar(30) NOT NULL DEFAULT '' COMMENT '服务项目名称',
  `logo_url` varchar(300) NOT NULL DEFAULT '' COMMENT 'logo图片地址',
  `create_time` int(11) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='服务项目表';

CREATE TABLE `mint_dttime` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `doctor_id` mediumint(9) NOT NULL COMMENT '医生id',
  `clinic_id` mediumint(9) NOT NULL COMMENT '诊所id'
  `visit_date` varchar(30) NOT NULL DEFAULT '' COMMENT '出诊日期',
  `start_time` varchar(30) NOT NULL DEFAULT '9:00' COMMENT '开始时间',
  `end_time` varchar(300) NOT NULL DEFAULT '18:00' COMMENT '结束时间',
  `time_span` int(3) NOT NULL default 30 COMMENT '时间间隔',
  `create_time` int(11) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='医生出诊时间表';

CREATE TABLE `mint_doctor_service` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `doctor_id` mediumint(9) NOT NULL COMMENT '医生id',
  `service_id` mediumint(9) NOT NULL COMMENT '服务项目id',
  `create_time` int(11) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`),
  KEY `doctor_id` (`doctor_id`),
  KEY `service_id` (`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='医生服务项目表';

CREATE TABLE `mint_message` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `content` int NOT NULL DEFAULT 1 COMMENT '消息内容',
  `user_id` mediumint(9) NOT NULL COMMENT '用户id',
  `remark` varchar(200) DEFAULT '' COMMENT '备注',
  `appointment_id` mediumint(9) NOT NULL COMMENT '预约id',
  `create_time` int(11) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='通知消息表';

CREATE TABLE `mint_equipment` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `clinic_id` mediumint(9) NOT NULL COMMENT '诊所id',
  `brand` varchar(30) NOT NULL default '' COMMENT '设备品牌',
  `country` varchar(30) NOT NULL default '' COMMENT '国家',
  `life_year` int(5) NOT NULL DEFAULT '0' COMMENT '使用年限',
  `equipment_nums` int(5) NOT NULL DEFAULT '0' COMMENT '设备数量',
  `tel` varchar(30) NOT NULL default '' COMMENT '支持电话',
  `equipment_pic` varchar(200) NOT NULL default '' COMMENT '设备图片',
  `create_time` int(11) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='诊所设备表';

CREATE TABLE `mint_material` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `clinic_id` mediumint(9) NOT NULL COMMENT '诊所id',
  `material_name` varchar(30) NOT NULL default '' COMMENT '耗材名称',
  `material_nums` int(5) NOT NULL DEFAULT '0' COMMENT '耗材数量',
  `material_unit` varchar(10) NOT NULL default '把' COMMENT '单位',
  `material_pic` varchar(200) NOT NULL default '' COMMENT '耗材图片',
  `create_time` int(11) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='诊所耗材表';

CREATE TABLE `mint_chairnum` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `clinic_id` mediumint(9) NOT NULL COMMENT '诊所id',
  `chair_nums` int(5) NOT NULL DEFAULT '0' COMMENT '牙椅数量',
  `chair_date` int(11) NOT NULL default 0 COMMENT '牙椅日期',
  `create_time` int(11) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='诊所当日可用牙椅数量表';


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
