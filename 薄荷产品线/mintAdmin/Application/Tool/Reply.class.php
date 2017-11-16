<?php
/**
  * wechat php test
  * update time: 20141008
  */
namespace Tool;

class Reply
{
	public function valid()
    {
        $echoStr = $_GET["echostr"];

        //valid signature , option
        if($this->checkSignature()){
        	echo $echoStr;
        	exit;
        }
    }

    public function responseMsg()
    {
		//get post data, May be due to the different environments
		$postStr = $GLOBALS["HTTP_RAW_POST_DATA"];

      	//extract post data
		if (!empty($postStr)){
                
              	$postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
                $fromUsername = $postObj->FromUserName;
                $toUsername = $postObj->ToUserName;
                $userEventStr = $postObj->Event;
                $keyword = trim($postObj->Content);
                $eventKey = $postObj->EventKey;
                $time = time();
                $textTpl = "<xml>
							<ToUserName><![CDATA[%s]]></ToUserName>
							<FromUserName><![CDATA[%s]]></FromUserName>
							<CreateTime>%s</CreateTime>
							<MsgType><![CDATA[news]]></MsgType>
							<ArticleCount>1</ArticleCount>
							<Articles>
							<item>
							<Title><![CDATA[%s]]></Title> 
							<Description><![CDATA[%s]]></Description>
							<PicUrl><![CDATA[%s]]></PicUrl>
							<Url><![CDATA[%s]]></Url>
							</item>
							</Articles>
							</xml>";
                $textTplsHead = "<xml>
							<ToUserName><![CDATA[%s]]></ToUserName>
							<FromUserName><![CDATA[%s]]></FromUserName>
							<CreateTime>%s</CreateTime>
							<MsgType><![CDATA[news]]></MsgType>
							<ArticleCount>%s</ArticleCount>
							<Articles>";
				$textTplsBody = "<item>
							<Title><![CDATA[%s]]></Title> 
							<Description><![CDATA[%s]]></Description>
							<PicUrl><![CDATA[%s]]></PicUrl>
							<Url><![CDATA[%s]]></Url>
							</item>";
				$textTplsFooter = "</Articles>
							</xml>";
				$txtTpl = "<xml>
						   <ToUserName><![CDATA[%s]]></ToUserName>
						   <FromUserName><![CDATA[%s]]></FromUserName>
						   <CreateTime>%s</CreateTime>
						   <MsgType><![CDATA[text]]></MsgType>
						   <Content><![CDATA[%s]]></Content>
						   </xml>";
				$tTpl = "<xml>
						<ToUserName><![CDATA[%s]]></ToUserName>
						<FromUserName><![CDATA[%s]]></FromUserName>
						<CreateTime>%s</CreateTime>
						<MsgType><![CDATA[event]]></MsgType>
						<Event><![CDATA[VIEW]]></Event>
						<EventKey><![CDATA[%s]]></EventKey>
						</xml>";
				$xmlTpl = "<xml>
							<ToUserName><![CDATA[%s]]></ToUserName>
							<FromUserName><![CDATA[%s]]></FromUserName>
							<CreateTime>%s</CreateTime>
							<MsgType><![CDATA[transfer_customer_service]]></MsgType>
							</xml>";
				//用户关注时的事件推送
				if($userEventStr == "subscribe"){
					$str = "感谢关注薄荷牙医 ~\n\n薄荷牙医是由北大口腔和北京口腔的优秀牙医以及资深互联网人组成的移动医疗服务团队，旨在为用户提供专业、优质、高性价比的口腔医疗服务。\n\n您可以在公众号内预约口腔项目、时间以及医生，预约成功后会给您发送通知。\n\n如有其他问题，可以直接给我留言噢~\n\n回复相应数字查看热门文章：\n【1】洗牙\n【2】智齿\n【3】美白\n【4】种植牙\n【5】儿童口腔系列\n【6】孕期系列\n【7】老年人口腔\n【8】更完美笑容";
					$resultStr = sprintf($txtTpl, $fromUsername, $toUsername, $time, $str);
					echo $resultStr;
				}
				//用户点击自定义菜单事件推送
				if($userEventStr == "CLICK"){
					if($eventKey == "Mint_Encyclopedias"){
						$str = "回复相应数字查看热门文章：\n【1】洗牙\n【2】智齿\n【3】美白\n【4】种植牙\n【5】儿童口腔系列\n【6】孕期系列\n【7】老年人口腔\n【8】更完美笑容";
						$resultStr = sprintf($txtTpl, $fromUsername, $toUsername, $time, $str);
						echo $resultStr;
					}else{
						echo "";
					}
				}
				//用户扫描带参数的二维码事件推送
				if($userEventStr == "SCAN"){
					/*$str = "回复相应数字查看热门文章：\n【1】洗牙\n【2】智齿\n【3】美白\n【4】种植牙\n【5】儿童口腔系列\n【6】孕期系列\n【7】老年人口腔\n【8】更完美笑容";
					$resultStr = sprintf($txtTpl, $fromUsername, $toUsername, $time, $str);
					echo $resultStr;*/
					echo "";
				}
				/*if($userEventStr == "VIEW"){
					if($eventKey == "url"){
						$msgTitle = "会说话的果汁";
						$description = "点击图片玩转游戏";
						$picUrl = "http://template.fengnian.cn/GuoBeiShuang/Public/pic/1.jpg";
						$loginUrl = 'http://template.fengnian.cn/GuoBeiShuang/index.php/Index/index/openid/'.$fromUsername;
						$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgTitle, $description, $picUrl, $loginUrl);
						echo $resultStr;
					}
				}*/
				//用户发送特定消息时的事件推送             
				if(!empty( $keyword ) || $keyword == '0')
                {
					if($keyword=='1'){
						$arr[0] = array(
								'title' =>'为什么要洗牙？洗牙洗冤录',
							    'description' =>'洗牙，恐怕是大众对牙科认识最普遍也是误解最广泛的一项治疗了，洗牙表示很冤很委屈，是时候给洗牙正名了。',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/toothwash1.png",
							    'url' =>'http://mp.weixin.qq.com/s/ynuiezMG259uuCpbh5Ph9w');
						$arr[1] = array(
								'title' =>'洗牙为什么会出血',
							    'description' =>'有些人洗牙会出现出血行为，这到底是为什么呢',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/toothwash2.png",
							    'url' =>'http://mp.weixin.qq.com/s/MvOM60yIfts43fvViYhYVw');
						$arr[2] = array(
								'title' =>'洗牙究竟洗的是什么',
							    'description' =>'我们每天起床后、睡觉前都要刷牙，但是刷牙的目的我们可能不是真正清楚，其实是为了清除牙菌斑并防止再生产牙斑菌。',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/toothwash3.png",
							    'url' =>'http://mp.weixin.qq.com/s/P7JbkVhxsErD2gubpyaQEA');
						$arr[3] = array(
								'title' =>'你眼中的洗牙，和实际中的洗牙',
							    'description' =>'洗牙到底是什么样子的呢',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/toothwash4.png",
							    'url' =>'http://mp.weixin.qq.com/s/5BjPQ4pH927bctB6iaegxQ');
						
						$resultStr = sprintf($textTplsHead, $fromUsername, $toUsername, $time, count($arr));
						foreach ($arr as $item){
							$resultStr .= sprintf($textTplsBody, $item['title'], $item['description'], $item['picUrl'], $item['url']);
						}
						$resultStr .= $textTplsFooter;
						/*$msgTitle = "为什么要洗牙？";
						$description = "“怎么牙龈出血那么久才来治疗？”“听别人说洗牙不好......”";
						$picUrl = C('DOMAIN_NAME')."/mintAdmin/up/images/toothwash.jpg";
						$url1='http://mp.weixin.qq.com/s?__biz=MzAwNjEyNzc5Mw==&mid=2651011434&idx=1&sn=fadc94f2097e9b2e2e0581f34e329fb3';
						$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgTitle, $description, $picUrl, $url1);*/
						echo $resultStr;
					}elseif($keyword=='2'){
						$arr[0] = array(
								'title' =>'追溯智齿',
							    'description' =>'智齿是什么？它从哪里来？它要到哪里去？拔智齿可以瘦脸吗？... ... 这么多关于智齿或深刻或肤浅的问题困扰着很多朋友，南先森在这一季将给各位亲细细道来。',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/wisdom_tooth1.png",
							    'url' =>'http://mp.weixin.qq.com/s/8eU6rH-S6p_ppWg0rcpndA');
						$arr[1] = array(
								'title' =>'智齿“进化论”（上）',
							    'description' =>'智齿真的是“智慧之齿”吗？ 拔智齿会影响记忆力？',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/wisdom_tooth2.png",
							    'url' =>'http://mp.weixin.qq.com/s/ELqcOk3kYKcKR7WdM-PiVA');
						$arr[2] = array(
								'title' =>'智齿“进化论”（下）',
							    'description' =>'上集有点跑题，现在言归正传，今天聊聊智齿“进化”的事儿。在人类进化的过程中，尤其是人类祖先直立行走之后……',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/wisdom_tooth3.png",
							    'url' =>'http://mp.weixin.qq.com/s/DpYx0l0gLM4KowRXIXpm2w');
						$arr[3] = array(
								'title' =>'拔智齿',
							    'description' =>'上上回，南先森和大家聊了聊智齿的种种，今天就该讲讲拔智齿的事儿了呗～',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/wisdom_tooth4.png",
							    'url' =>'http://mp.weixin.qq.com/s/ipJiYEWPZ0R7MSnULDBbFg');
						
						$resultStr = sprintf($textTplsHead, $fromUsername, $toUsername, $time, count($arr));
						foreach ($arr as $item){
							$resultStr .= sprintf($textTplsBody, $item['title'], $item['description'], $item['picUrl'], $item['url']);
						}
						$resultStr .= $textTplsFooter;
						/*$msgTitle = "智齿要不要拔？";
						$description = "智齿拔了会不会变傻，会不会瘦脸，来听南先森解释。";
						$picUrl = C('DOMAIN_NAME')."/mintAdmin/up/images/extraction.jpg";
						$url1='http://mp.weixin.qq.com/s?__biz=MzAwNjEyNzc5Mw==&mid=202891078&idx=1&sn=e1d58df3363520cc82beece963a41fbf';
						$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgTitle, $description, $picUrl, $url1);*/
						echo $resultStr;
					}elseif($keyword=='3'){
						$arr[0] = array(
								'title' =>'如何做到牙齿反光白？',
							    'description' =>'许多人都向往牙齿美白，怎么美白？什么人不适合牙齿美白？',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/whitening1.png",
							    'url' =>'http://mp.weixin.qq.com/s/8LluPFGcBQ6Wl0V176g-dg');
						$arr[1] = array(
								'title' =>'牙齿美白的秘密',
							    'description' =>'话说上回，南先森讲过“洗牙”之后，很多朋友纷纷留言，说南先森破灭了他（她）们要把牙“洗白白”的梦想。辣么，牙齿怎么样才可以变白呢？南先森这回跟各位朋友唠个明白。',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/whitening2.png",
							    'url' =>'http://mp.weixin.qq.com/s/rOpATZ2GPiaCwPmU9FJVPQ');
						
						$resultStr = sprintf($textTplsHead, $fromUsername, $toUsername, $time, count($arr));
						foreach ($arr as $item){
							$resultStr .= sprintf($textTplsBody, $item['title'], $item['description'], $item['picUrl'], $item['url']);
						}
						$resultStr .= $textTplsFooter;
						/*$msgTitle = "为什么要用牙线？";
						$description = "为什么要使用牙线，只是刷牙漱口不可以吗？";
						$picUrl = C('DOMAIN_NAME')."/mintAdmin/up/images/floss.jpg";
						$url1='http://mp.weixin.qq.com/s?__biz=MzAwNjEyNzc5Mw==&mid=2651011964&idx=1&sn=00b39604db5f0db43ad6ccb43aa3b9d0';
						$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgTitle, $description, $picUrl, $url1);*/
						echo $resultStr;
					}elseif($keyword=='4'){
						$arr[0] = array(
								'title' =>'种牙前传',
							    'description' =>'今天，南先森给大家聊聊”种牙“以前的故事～',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/tooth1.png",
							    'url' =>'http://mp.weixin.qq.com/s/IVjrWKutOf1QthkSTnqjVQ');
						$arr[1] = array(
								'title' =>'种牙II',
							    'description' =>'话说上回讲了风靡了几百年的“种牙”，那种“抢劫了穷人，又忽悠了有钱人”的“种牙”行为最终归宿如何呢？赶快点开看个究竟吧！',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/tooth2.png",
							    'url' =>'http://mp.weixin.qq.com/s/gaocNK1LglYjXXLVtxxg1g');
						$arr[2] = array(
								'title' =>'种牙III',
							    'description' =>'人牙交易曾经红极一时，后又销声匿迹。牙移植有没有合适的供体似乎是靠“缘分”。那么，大家现在普遍讨论的“种牙”到底是什么模样呢？光速戳进来吧！',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/tooth3.png",
							    'url' =>'http://mp.weixin.qq.com/s/SjKMaT7N1oIIMct7grpJ0w');
						
						$resultStr = sprintf($textTplsHead, $fromUsername, $toUsername, $time, count($arr));
						foreach ($arr as $item){
							$resultStr .= sprintf($textTplsBody, $item['title'], $item['description'], $item['picUrl'], $item['url']);
						}
						$resultStr .= $textTplsFooter;
						/*$msgTitle = "为什么要用牙线？";
						$description = "为什么要使用牙线，只是刷牙漱口不可以吗？";
						$picUrl = C('DOMAIN_NAME')."/mintAdmin/up/images/floss.jpg";
						$url1='http://mp.weixin.qq.com/s?__biz=MzAwNjEyNzc5Mw==&mid=2651011964&idx=1&sn=00b39604db5f0db43ad6ccb43aa3b9d0';
						$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgTitle, $description, $picUrl, $url1);*/
						echo $resultStr;
					}elseif($keyword=='5'){
						$arr[0] = array(
								'title' =>'熊孩子刷牙指南',
							    'description' =>'孩子刷牙是让很多父母头疼的问题，熊孩子刷牙看这一篇就够了！',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/mouth1.png",
							    'url' =>'http://mp.weixin.qq.com/s/dE-crm8cO6f7pk9qsq7Xqg');
						$arr[1] = array(
								'title' =>'牙医是怎么给自家孩子刷牙的？实拍现身说法',
							    'description' =>'给孩子用什么牙膏牙刷，怎么护理？实拍干货',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/mouth2.jpeg",
							    'url' =>'http://mp.weixin.qq.com/s/0zz1eQAJruH1_kQj1HRxgQ');
						$arr[2] = array(
								'title' =>'宝宝长牙了，你发现了吗？',
							    'description' =>'从宝宝长出第一颗牙齿开始就要好好的去保护哦',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/mouth3.png",
							    'url' =>'http://mp.weixin.qq.com/s/GL8LxbGGIJdF663-r0nGvw');
						$arr[3] = array(
								'title' =>'早晚要换掉的乳牙，有必要太在意吗？',
							    'description' =>'乳牙没保护好，有可能影响孩子颜值哦~',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/mouth4.png",
							    'url' =>'http://mp.weixin.qq.com/s/zIDuUSVNmJmY7M4kkZ8cZQ');
						$arr[4] = array(
								'title' =>'你的宝宝是不是也在吮手指？',
							    'description' =>'这种吮指习惯过了4~6岁还继续存在并具有一定的强度的话，宝宝的牙齿就会容易出问题的哦。',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/mouth5.png",
							    'url' =>'http://mp.weixin.qq.com/s/M1YKCrnT9_XS6W-muh7nGw');
						
						$resultStr = sprintf($textTplsHead, $fromUsername, $toUsername, $time, count($arr));
						foreach ($arr as $item){
							$resultStr .= sprintf($textTplsBody, $item['title'], $item['description'], $item['picUrl'], $item['url']);
						}
						$resultStr .= $textTplsFooter;
						echo $resultStr;
					}elseif($keyword=='6'){
						$arr[0] = array(
								'title' =>'牙医妈妈的口腔孕期护理攻略',
							    'description' =>'口腔科医生也开始关注孕产妇问题？不要以为我们是在非法行医，跨专业诊疗。孕妇的口腔问题也是围产期健康的重要组成',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/pregnancy1.png",
							    'url' =>'http://mp.weixin.qq.com/s/wrMm8JbQ7Qp1isBcsGeitg');
						$arr[1] = array(
								'title' =>'备孕不要忘记看牙医',
							    'description' =>'在怀孕之前，进行系统的口腔检查，解决口腔内可能存在的健康问题，祝愿每一位准妈妈们都能健康愉快的度过孕期。',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/pregnancy2.png",
							    'url' =>'http://mp.weixin.qq.com/s/T6vGIhF1HJO_6jl5CpjP2g');
						$arr[2] = array(
								'title' =>'月子里能不能刷牙',
							    'description' =>'伟大的新手妈妈们，为了自己和宝宝的健康，一定要好好刷牙。',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/pregnancy3.png",
							    'url' =>'http://mp.weixin.qq.com/s/g_auWvsb6HJdy0ZPJBuXQw');
						
						$resultStr = sprintf($textTplsHead, $fromUsername, $toUsername, $time, count($arr));
						foreach ($arr as $item){
							$resultStr .= sprintf($textTplsBody, $item['title'], $item['description'], $item['picUrl'], $item['url']);
						}
						$resultStr .= $textTplsFooter;
						echo $resultStr;
					}elseif($keyword=='7'){
						$arr[0] = array(
								'title' =>'中老年口腔护理指南',
							    'description' =>'其实中国古话“老掉牙”并不合理，不拿牙疼当病，一昧的放任牙周病不治、烂牙不管，牙齿怎么会不掉？',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/old_age1.png",
							    'url' =>'http://mp.weixin.qq.com/s/2pNKsuluQsSVJ5BypsZyyg');
						
						$resultStr = sprintf($textTplsHead, $fromUsername, $toUsername, $time, count($arr));
						foreach ($arr as $item){
							$resultStr .= sprintf($textTplsBody, $item['title'], $item['description'], $item['picUrl'], $item['url']);
						}
						$resultStr .= $textTplsFooter;
						echo $resultStr;
					}elseif($keyword=='8'){
						$arr[0] = array(
								'title' =>'巧笑倩兮I——冠延长术',
							    'description' =>'巧笑倩兮，美目盼兮。自古美人儿多如是，一笑一颦，顾盼生姿。笑，是美很重要的一部分。怎么拥有完美的笑容呢？跟南先森一起探究下吧。',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/smile1.png",
							    'url' =>'http://mp.weixin.qq.com/s/VFoUnwVSVqDlPzr4Ik7rnA');
						$arr[1] = array(
								'title' =>'巧笑倩兮II——改头换面的正颌手术',
							    'description' =>'上次讲到牙齿萌出不足需要手术改善露龈笑的情况，这一回，我们来讲一讲更“血腥”的手段来改善美观——正颌手术。正颌是伤筋动骨但却真正意义改头换面的手段。',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/smile2.png",
							    'url' =>'http://mp.weixin.qq.com/s/kUsn-gcMuBrTHtPtUz7SCw');
						$arr[2] = array(
								'title' =>'巧笑倩兮III——效果堪比整形的正畸',
							    'description' =>'巧笑倩兮系列推出了两期了，有朋友就反映了，为毛非要切肉动骨吗？没有点儿温柔的办法吗？有啊！如果您的情况对症，可以戴戴牙套，打打针啊什么的。本期，咱就唠唠戴牙套。',
							    'picUrl' => C('DOMAIN_NAME')."/mintAdmin/up/images/smile3.png",
							    'url' =>'http://mp.weixin.qq.com/s/YUHDqVeSlcH8IL2An5JC7A');
						
						$resultStr = sprintf($textTplsHead, $fromUsername, $toUsername, $time, count($arr));
						foreach ($arr as $item){
							$resultStr .= sprintf($textTplsBody, $item['title'], $item['description'], $item['picUrl'], $item['url']);
						}
						$resultStr .= $textTplsFooter;
						/*$msgTitle = "为什么要用牙线？";
						$description = "为什么要使用牙线，只是刷牙漱口不可以吗？";
						$picUrl = C('DOMAIN_NAME')."/mintAdmin/up/images/floss.jpg";
						$url1='http://mp.weixin.qq.com/s?__biz=MzAwNjEyNzc5Mw==&mid=2651011964&idx=1&sn=00b39604db5f0db43ad6ccb43aa3b9d0';
						$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgTitle, $description, $picUrl, $url1);*/
						echo $resultStr;
					}elseif($keyword=='企业服务'){
						$msgTitle = "薄荷牙医携三甲医院名医免费上门服务";
						$description = "名医上门给企业员工免费全面检查口腔~推荐企业成功送洗牙套餐";
						$picUrl = C('DOMAIN_NAME')."/mintAdmin/up/images/enterprise.jpg";
						$url1='http://mp.weixin.qq.com/s/l9vEs0v-bdu3kbXykRdBsQ';
						$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgTitle, $description, $picUrl, $url1);
						echo $resultStr;
					}else{
						$result = sprintf($xmlTpl, $fromUsername, $toUsername, time());
						echo $result;
					}
                }else{
                	echo "";
                }
                exit;
        }else {
        	echo "";
        	exit;
        }
    }
		
	private function checkSignature()
	{
        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];
		$token = C('TOKEN');
		$tmpArr = array($token, $timestamp, $nonce);
        sort($tmpArr, SORT_STRING);
		$tmpStr = implode( $tmpArr );
		$tmpStr = sha1( $tmpStr );
		
		if( $tmpStr == $signature ){
			return true;
		}else{
			return false;
		}
	}
}

?>