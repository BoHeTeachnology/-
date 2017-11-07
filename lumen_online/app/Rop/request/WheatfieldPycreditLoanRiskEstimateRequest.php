<?php
class WheatfieldPycreditLoanRiskEstimateRequest
{
     private $apiParas = array();

     private $id_code;

     public function getIdCode()
     {
         return $this->$id_code;
     }

     public function setIdCode($id_code)
     {
         $this->id_code = $id_code;
         $this->apiParas["id_code"] = $id_code;
     }

     private $summary;

     public function getSummary()
     {
         return $this->$summary;
     }

     public function setSummary($summary)
     {
         $this->summary = $summary;
         $this->apiParas["summary"] = $summary;
     }

     private $emergency_contact;

     public function getEmergencyContact()
     {
         return $this->$emergency_contact;
     }

     public function setEmergencyContact($emergency_contact)
     {
         $this->emergency_contact = $emergency_contact;
         $this->apiParas["emergency_contact"] = $emergency_contact;
     }

     private $real_time;

     public function getRealTime()
     {
         return $this->$real_time;
     }

     public function setRealTime($real_time)
     {
         $this->real_time = $real_time;
         $this->apiParas["real_time"] = $real_time;
     }

     private $return_amount_loan;

     public function getReturnAmountLoan()
     {
         return $this->$return_amount_loan;
     }

     public function setReturnAmountLoan($return_amount_loan)
     {
         $this->return_amount_loan = $return_amount_loan;
         $this->apiParas["return_amount_loan"] = $return_amount_loan;
     }

     private $study_type;

     public function getStudyType()
     {
         return $this->$study_type;
     }

     public function setStudyType($study_type)
     {
         $this->study_type = $study_type;
         $this->apiParas["study_type"] = $study_type;
     }

     private $position_name;

     public function getPositionName()
     {
         return $this->$position_name;
     }

     public function setPositionName($position_name)
     {
         $this->position_name = $position_name;
         $this->apiParas["position_name"] = $position_name;
     }

     private $college;

     public function getCollege()
     {
         return $this->$college;
     }

     public function setCollege($college)
     {
         $this->college = $college;
         $this->apiParas["college"] = $college;
     }

     private $corp_name;

     public function getCorpName()
     {
         return $this->$corp_name;
     }

     public function setCorpName($corp_name)
     {
         $this->corp_name = $corp_name;
         $this->apiParas["corp_name"] = $corp_name;
     }

     private $full_time;

     public function getFullTime()
     {
         return $this->$full_time;
     }

     public function setFullTime($full_time)
     {
         $this->full_time = $full_time;
         $this->apiParas["full_time"] = $full_time;
     }

     private $return_amount_bank;

     public function getReturnAmountBank()
     {
         return $this->$return_amount_bank;
     }

     public function setReturnAmountBank($return_amount_bank)
     {
         $this->return_amount_bank = $return_amount_bank;
         $this->apiParas["return_amount_bank"] = $return_amount_bank;
     }

     private $level_no;

     public function getLevelNo()
     {
         return $this->$level_no;
     }

     public function setLevelNo($level_no)
     {
         $this->level_no = $level_no;
         $this->apiParas["level_no"] = $level_no;
     }

     private $account_type;

     public function getAccountType()
     {
         return $this->$account_type;
     }

     public function setAccountType($account_type)
     {
         $this->account_type = $account_type;
         $this->apiParas["account_type"] = $account_type;
     }

     private $company_parttime;

     public function getCompanyParttime()
     {
         return $this->$company_parttime;
     }

     public function setCompanyParttime($company_parttime)
     {
         $this->company_parttime = $company_parttime;
         $this->apiParas["company_parttime"] = $company_parttime;
     }

     private $degree;

     public function getDegree()
     {
         return $this->$degree;
     }

     public function setDegree($degree)
     {
         $this->degree = $degree;
         $this->apiParas["degree"] = $degree;
     }

     private $person_type;

     public function getPersonType()
     {
         return $this->$person_type;
     }

     public function setPersonType($person_type)
     {
         $this->person_type = $person_type;
         $this->apiParas["person_type"] = $person_type;
     }

     private $marriage;

     public function getMarriage()
     {
         return $this->$marriage;
     }

     public function setMarriage($marriage)
     {
         $this->marriage = $marriage;
         $this->apiParas["marriage"] = $marriage;
     }

     private $org_no;

     public function getOrgNo()
     {
         return $this->$org_no;
     }

     public function setOrgNo($org_no)
     {
         $this->org_no = $org_no;
         $this->apiParas["org_no"] = $org_no;
     }

     private $scholarship;

     public function getScholarship()
     {
         return $this->$scholarship;
     }

     public function setScholarship($scholarship)
     {
         $this->scholarship = $scholarship;
         $this->apiParas["scholarship"] = $scholarship;
     }

     private $query_name;

     public function getQueryName()
     {
         return $this->$query_name;
     }

     public function setQueryName($query_name)
     {
         $this->query_name = $query_name;
         $this->apiParas["query_name"] = $query_name;
     }

     private $id_type;

     public function getIdType()
     {
         return $this->$id_type;
     }

     public function setIdType($id_type)
     {
         $this->id_type = $id_type;
         $this->apiParas["id_type"] = $id_type;
     }

     private $if_house;

     public function getIfHouse()
     {
         return $this->$if_house;
     }

     public function setIfHouse($if_house)
     {
         $this->if_house = $if_house;
         $this->apiParas["if_house"] = $if_house;
     }

     private $children;

     public function getChildren()
     {
         return $this->$children;
     }

     public function setChildren($children)
     {
         $this->children = $children;
         $this->apiParas["children"] = $children;
     }

     private $apply_period;

     public function getApplyPeriod()
     {
         return $this->$apply_period;
     }

     public function setApplyPeriod($apply_period)
     {
         $this->apply_period = $apply_period;
         $this->apiParas["apply_period"] = $apply_period;
     }

     private $city;

     public function getCity()
     {
         return $this->$city;
     }

     public function setCity($city)
     {
         $this->city = $city;
         $this->apiParas["city"] = $city;
     }

     private $contact;

     public function getContact()
     {
         return $this->$contact;
     }

     public function setContact($contact)
     {
         $this->contact = $contact;
         $this->apiParas["contact"] = $contact;
     }

     private $plan_grad_time;

     public function getPlanGradTime()
     {
         return $this->$plan_grad_time;
     }

     public function setPlanGradTime($plan_grad_time)
     {
         $this->plan_grad_time = $plan_grad_time;
         $this->apiParas["plan_grad_time"] = $plan_grad_time;
     }

     private $top_degree;

     public function getTopDegree()
     {
         return $this->$top_degree;
     }

     public function setTopDegree($top_degree)
     {
         $this->top_degree = $top_degree;
         $this->apiParas["top_degree"] = $top_degree;
     }

     private $apply_money;

     public function getApplyMoney()
     {
         return $this->$apply_money;
     }

     public function setApplyMoney($apply_money)
     {
         $this->apply_money = $apply_money;
         $this->apiParas["apply_money"] = $apply_money;
     }

     private $graduate_year;

     public function getGraduateYear()
     {
         return $this->$graduate_year;
     }

     public function setGraduateYear($graduate_year)
     {
         $this->graduate_year = $graduate_year;
         $this->apiParas["graduate_year"] = $graduate_year;
     }

     private $if_car;

     public function getIfCar()
     {
         return $this->$if_car;
     }

     public function setIfCar($if_car)
     {
         $this->if_car = $if_car;
         $this->apiParas["if_car"] = $if_car;
     }

     private $province;

     public function getProvince()
     {
         return $this->$province;
     }

     public function setProvince($province)
     {
         $this->province = $province;
         $this->apiParas["province"] = $province;
     }

     private $family;

     public function getFamily()
     {
         return $this->$family;
     }

     public function setFamily($family)
     {
         $this->family = $family;
         $this->apiParas["family"] = $family;
     }

     private $start_time;

     public function getStartTime()
     {
         return $this->$start_time;
     }

     public function setStartTime($start_time)
     {
         $this->start_time = $start_time;
         $this->apiParas["start_time"] = $start_time;
     }

     private $remark;

     public function getRemark()
     {
         return $this->$remark;
     }

     public function setRemark($remark)
     {
         $this->remark = $remark;
         $this->apiParas["remark"] = $remark;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.wheatfield.pycredit.loan.risk.estimate";
     }
     public function check()     {          }}
