<?php
class MdmMemberFuzzySearchRequest
{
     private $apiParas = array();

     private $pagesize;

     public function getPagesize()
     {
         return $this->$pagesize;
     }

     public function setPagesize($pagesize)
     {
         $this->pagesize = $pagesize;
         $this->apiParas["pagesize"] = $pagesize;
     }

     private $member;

     public function getMember()
     {
         return $this->$member;
     }

     public function setMember($member)
     {
         $this->member = $member;
         $this->apiParas["member"] = $member;
     }

     private $pageno;

     public function getPageno()
     {
         return $this->$pageno;
     }

     public function setPageno($pageno)
     {
         $this->pageno = $pageno;
         $this->apiParas["pageno"] = $pageno;
     }

     public function getApiParas()
     {
         return $this->apiParas;
     }

     public function getApiMethodName()
     {
         return "ruixue.mdm.member.fuzzy.search";
     }
     public function check()     {          }}
