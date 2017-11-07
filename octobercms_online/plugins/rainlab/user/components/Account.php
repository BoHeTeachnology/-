<?php


namespace RainLab\User\Components;

use Lang;
use Auth;
use Mail;
use Event;
use Flash;
use Input;
use Request;
use Redirect;
use Validator;
use ValidationException;
use ApplicationException;
use October\Rain\Auth\UcAuthException;
use October\Rain\Auth\AuthCredentialException;
use October\Rain\Auth\AuthUserException;
use October\Rain\Auth\AuthException;
use Cms\Classes\Page;
use Cms\Classes\ComponentBase;
use RainLab\User\Models\Settings as UserSettings;
use RainLab\User\Models\Sendsms as Sms;
use RainLab\User\Models\User as User;
use Exception;
use Gregwar\Captcha\CaptchaBuilder;
use Session as Thesession;
use Log;
use Ucenter;
use Db;
use Firebase\JWT\JWT;

class Account extends ComponentBase {
	public $builder;
	public $phrase;
	public $uc_uid;
	// /////king
	public function captcha() {
		// 生成验证码图片的Builder对象，配置相应属性
		$this->builder = new CaptchaBuilder ();
		// 可以设置图片宽高及字体
		$this->builder->build ( $width = 100, $height = 40, $font = null );
		// 获取验证码的内容
		$this->phrase = $this->builder->getPhrase ();
		Thesession::flash ( 'milkcaptcha', $this->phrase );
		
		return $this->builder->inline ();
	}
	public function onRecaptcha() {
		$this->page ['imgsrc'] = $this->captcha ();
	}
	public function componentDetails() {
		return [ 
				'name' => 'rainlab.user::lang.account.account',
				'description' => 'rainlab.user::lang.account.account_desc' 
		];
	}
	public function defineProperties() {
		return [ 
				'redirect' => [ 
						'title' => 'rainlab.user::lang.account.redirect_to',
						'description' => 'rainlab.user::lang.account.redirect_to_desc',
						'type' => 'dropdown',
						'default' => '' 
				],
				'paramCode' => [ 
						'title' => 'rainlab.user::lang.account.code_param',
						'description' => 'rainlab.user::lang.account.code_param_desc',
						'type' => 'string',
						'default' => 'code' 
				],
				'forceSecure' => [ 
						'title' => 'Force secure protocol',
						'description' => 'Always redirect the URL with the HTTPS schema.',
						'type' => 'checkbox',
						'default' => 0 
				],
				'mobile' => [ 
						'description' => 'if mobile login ',
						'title' => 'title',
						'default' => 'no',
						'type' => 'string',
						'validationPattern' => '^[0-9]+$',
						'validationMessage' => 'The Max Items value is required and should be integer.' 
				] 
		];
	}
	public function getRedirectOptions() {
		return [ 
				'' => '- none -' 
		] + Page::sortBy ( 'baseFileName' )->lists ( 'baseFileName', 'baseFileName' );
	}
	
	/**
	 * Executed when this component is bound to a page or layout.
	 */
	public function onRun() {
		/*
		 * Redirect to HTTPS checker
		 */
		if ($redirect = $this->redirectForceSecure ()) {
			return $redirect;
		}
		
		/*
		 * Activation code supplied
		 */
		$routeParameter = $this->property ( 'paramCode' );
		
		if ($activationCode = $this->param ( $routeParameter )) {
			$this->onActivate ( $activationCode );
		}
		
		$this->page ['user'] = $this->user ();
		$this->page ['loginAttribute'] = $this->loginAttribute ();
		$this->page ['loginAttributeLabel'] = $this->loginAttributeLabel ();
		$this->page ['imgsrc'] = $this->captcha ();
	}
	
	/**
	 * Returns the logged in user, if available
	 */
	public function user() {
		if (! Auth::check ()) {
			return null;
		}
		
		return Auth::getUser ();
	}
	
	/**
	 * Returns the login model attribute.
	 */
	public function loginAttribute() {
		return UserSettings::get ( 'login_attribute', UserSettings::LOGIN_EMAIL );
	}
	
	/**
	 * Returns the login label as a word.
	 */
	public function loginAttributeLabel() {
		return $this->loginAttribute () == UserSettings::LOGIN_EMAIL ? Lang::get ( 'rainlab.user::lang.login.attribute_email' ) : Lang::get ( 'rainlab.user::lang.login.attribute_username' );
	}
	public function uc_login_phone($credentials) {
		list ( $uid, $username, $password, $email, $mobile,$name ) = Ucenter::uc_user_login ( 'noneed', $credentials ['password'], $credentials ['mobile'], $isuid = 3 );
		if ($uid > 0) {
			$user = User::where ( 'mobile', $mobile )->first();
			if ($user) {
                            if(($user->name==null||$user->name=='')&&$name!=''&&$name!=null){
                               $user->name=$name; 
                               $user->save();
                            }
			} else {
				$data = array ();
				$data ['mobile'] = $mobile;
				$data ['email'] = $email;
				$data ['password'] = $credentials ['password'];
				$data ['username'] = $username;
                                if($name!=''&&$name!=null){
                                  $data ['name'] = $name;  
                                }
				Event::fire ( 'rainlab.user.beforeRegister', [ 
						&$data 
				] );
				if (! array_key_exists ( 'password_confirmation', $data )) {
					$data ['password_confirmation'] = $credentials ['password'];
				}
				$user = Auth::register ( $data, true );
				
				Event::fire ( 'rainlab.user.register', [ 
						$user,
						$data 
				] );
				// 加入普通用户组
				$isregistered = DB::select ( 'select * from user_groups where name = :name ', [
						':name' => 'Registered'
				] );
				if ($isregistered) {
					$user->groups ()->attach ( $isregistered [0]->id );
				} else {
					$insertreg = DB::insert ( 'insert into user_groups (name, code) values (?, ?)', [
							'Registered',
							'Registered'
					] );
					if ($insertreg) {
						$isregisteredtwo = DB::select ( 'select * from user_groups where name = :name ', [
								':name' => 'Registered'
						] );
						$user->groups ()->attach ( $isregisteredtwo [0]->id );
					}
				}
			}
		} elseif($uid==-1){
			throw new UcAuthException ( '用户不存在，请注册。' );
		}elseif($uid==-2){
			throw new UcAuthException ( '密码错误' );
		}
	}
	
	/**
	 * 手机登陆
	 */
	public function phonelogin($credentials){
		
		$user = Auth::authenticatethree ( $credentials, true );
		
		Log::info ( 'mobile' . $this->property ( 'mobile' ) );
		if ($this->property ( 'mobile' ) == 'yes') {
			//查找该用户，如果参数有openID则存储
			if($openid!=null){
				$finduser=User::where ( 'mobile', post ( 'mobile' ) )->first ();
				$finduser->openid=$openid;
				$finduser->save();
			}
			
			$key = "iOjEsImlzcyI6I";
			// 查找用户名
			// $uc_user = Ucenter::uc_get_user('', $credentials['mobile'], 3);
			// $uc_username=isset($uc_user->username)?$uc_user->username:'username';
			$user = User::where ( 'mobile', post ( 'mobile' ) )->first ();
			$user_id = $user->id;
			
			$token = array (
					"iss" => "official.com",
					"aud" => "doctor.com",
					"iat" => time (),
					"nbf" => time (),
					"exp" => time () + 1357000000,
					"sub" => $user_id
			);
			
			$jwt = JWT::encode ( $token, $key );
			$viewurl=config('urlconfig.view');
			return Redirect::to ( $viewurl.'/firstpage?type=true&token=' . $jwt );
		} else {
			/*
			 * Redirect to the intended page after successful sign in
			 */
			$redirectUrl = $this->pageUrl ( $this->property ( 'redirect' ) ) ?: $this->property ( 'redirect' );
			
			if ($redirectUrl = input ( 'redirect', $redirectUrl )) {
				return Redirect::intended ( $redirectUrl );
			}
		}
	}
	
	public function onPhonesignin() {
		Log::info ( 'shifoudiaoyong' );
		$openid = $this->param('whid')?$this->param('whid'):null;
		try {
			/*
			 * Validate input
			 */
			$data = post ();
			Log::info ( 'mobile' . $data ['mobile'] );
			Log::info ( 'password' . $data ['password'] );
			$rules = [ ];
			
			// $rules['mobile'] = 'required|mobile';
			
			$rules ['password'] = 'required|between:4,255';
			
			// if (!array_key_exists('login', $data)) {
			// $data['login'] = post('username', post('email'));
			// }
			$data ['mobile'] = post ( 'mobile' );
			$validation = Validator::make ( $data, $rules );
			if ($validation->fails ()) {
				throw new ValidationException ( $validation );
			}
			/*
			 * Authenticate user
			 */
			$credentials = [ 
					'mobile' => array_get ( $data, 'mobile' ),
					'password' => array_get ( $data, 'password' ) 
			];
			
			$this->uc_login_phone ( $credentials );
			
			Event::fire ( 'rainlab.user.beforeAuthenticate', [ 
					$this,
					$credentials 
			] );
			
			return $this->phonelogin($credentials);
			
		}catch (UcAuthException $ex){
			if (Request::ajax ())
				throw $ex;
			else
				Flash::error ( $ex->getMessage () );
		}catch( AuthCredentialException $ex){
			
			$credentials = array(
					'password' => post ('password'),
					'password_confirmation' => post('password')
			);
			$user = $ex->user;
			
			$user->fill($credentials);
			
			$user->save();
			
			$credentials = [
					'mobile' => post('mobile'),
					'password' => post('password')
			];
			
			return $this->phonelogin($credentials);
			
		}
		catch ( Exception $ex ) {
			if (Request::ajax ())
				throw $ex;
			else
				Flash::error ( $ex->getMessage () );
		}
	}
	/*
	 * 短信登陆
	 */
	public function onMesseagesignin() {
		$openid = $this->param('whid')?$this->param('whid'):null;
		try {
			/*
			 * Validate input
			 */
			$data = post ();
			/*
			 * Authenticate user
			 */
			$credentials = [
					'mobile' => array_get ( $data, 'mobile' )
			];
			
			$uc_user = Ucenter::uc_get_user ( '', $credentials ['mobile'], 3 );
			
			if (! $uc_user) {
				throw new AuthException ( '未找到该用户，请先注册(uc)' );
                        }else{
                            list ( $uid, $username, $email, $name )=Ucenter::uc_get_user ( '', $credentials ['mobile'], 3 );
                        }
			$mobile = post ( 'mobile' );
			// 查找手机是否为注册用户
			$phonecaptcha = post ( 'phonecaptcha' );
			$theuser = User::where ( 'mobile', $mobile )->first ();
			if (! $theuser) {
				// 注册用户，并分组
				$newuser = new User;
				$newuser->rules = [
						'mobile'   => 'required|unique:users',
				];
				$newuser->is_activated = 1;
				$newuser->is_guest = 0;
				$newuser->is_superuser = 0;
				$newuser->mobile = $mobile;
                                $name= isset($name)?$name:null;
                                if($name!=''&&$name!=null){
                                   $newuser->name = $name; 
                                }
				if($openid!=null){
					$newuser->openid = $openid;
				}
				$inserresult = $newuser->save();
				if($inserresult){
					$theuser = User::where ( 'mobile', $mobile )->first ();
					// 加入普通用户组
					$isregistered = DB::select ( 'select * from user_groups where name = :name ', [
							':name' => 'Registered'
					] );
					if ($isregistered) {
						$a=DB::insert ( 'insert into users_groups (user_id, user_group_id) values (?,?)', [
								$theuser->id,
								$isregistered[0]->id,
								
						] );
						
					} else {
						$insertreg = DB::insert ( 'insert into user_groups (name, code) values (?, ?)', [
								'Registered',
								'Registered'
						] );
						if ($insertreg) {
							$isregisteredtwo = DB::select ( 'select * from user_groups where name = :name ', [
									':name' => 'Registered'
							] );
							$a=DB::insert ( 'insert into users_groups (user_id, user_group_id) values (?,?)', [
									$theuser->id,
									$isregisteredtwo[0]->id,
									
							] );
						}
					}
				}
				$data ['mobilecheck'] = true;
			} else {
                            $name= isset($name)?$name:null;
                            if(($theuser->name==null||$theuser->name=='')&&$name!=''&&$name!=null){
                               $theuser->name=$name; 
                               $theuser->save();
                            }
				$data ['mobilecheck'] = true;
			}
			if ($this->checksms ( $mobile, $phonecaptcha ) == 'yes') {
				// 用户输入验证码正确
				$data ['validatecaptcha'] = true;
			} else {
				// 用户输入验证码错误
				$data ['validatecaptcha'] = "error";
				// return;
			}
			$rules = [ 
					'mobilecheck' => 'required|boolean',
					'validatecaptcha' => 'required|boolean' 
			];
			$validation = Validator::make ( $data, $rules, [ 
					'validatecaptcha.boolean' => '验证码错误或超时',
					'mobilecheck.boolean' => '该手机未注册(bh)' 
			] );
			if ($validation->fails ()) {
				throw new ValidationException ( $validation );
			}
			
			
			
// 			Event::fire ( 'rainlab.user.beforeAuthenticate', [ 
// 					$this,
// 					$credentials 
// 			] );
			
			$user = Auth::authenticatetwo ( $credentials, true );
			
						if ($this->property ( 'mobile' ) == 'yes') {
				//查找该用户，如果参数有openID则存储
				if($openid!=null){
					$finduser=User::where ( 'mobile', post ( 'mobile' ) )->first ();
					$finduser->openid=$openid;
					$finduser->save();
				}
				
				$key = "iOjEsImlzcyI6I";
				// 查找用户名
				// $uc_user = Ucenter::uc_get_user('', $credentials['mobile'], 3);
				// $uc_username=isset($uc_user->username)?$uc_user->username:'username';
				$user = User::where ( 'mobile', post ( 'mobile' ) )->first ();
				$user_id = $user->id;
				
				$token = array (
						"iss" => "official.com",
						"aud" => "doctor.com",
						"iat" => time (),
						"nbf" => time (),
						"exp" => time () + 1357000000,
						"sub" => $user_id
				);
				
				$jwt = JWT::encode ( $token, $key );
				$viewurl=config('urlconfig.view');
				return Redirect::to ( $viewurl.'/firstpage?type=true&token=' . $jwt );
			} else {
				/*
				 * Redirect to the intended page after successful sign in
				 */
				$redirectUrl = $this->pageUrl ( $this->property ( 'redirect' ) ) ?: $this->property ( 'redirect' );
				
				if ($redirectUrl = input ( 'redirect', $redirectUrl )) {
					return Redirect::intended ( $redirectUrl );
				}
			}
		} catch ( Exception $ex ) {
			if (Request::ajax ())
				throw $ex;
			else
				Flash::error ( $ex->getMessage () );
		}
	}
	
	/**
	 * Sign in the user
	 */
	public function onSignin() {
		try {
			/*
			 * Validate input
			 */
			$data = post ();
			$rules = [ ];
			
			$rules ['login'] = $this->loginAttribute () == UserSettings::LOGIN_USERNAME ? 'required|between:2,255' : 'required|email|between:6,255';
			
			$rules ['password'] = 'required|between:4,255';
			
			if (! array_key_exists ( 'login', $data )) {
				$data ['login'] = post ( 'username', post ( 'email' ) );
			}
			
			$validation = Validator::make ( $data, $rules );
			if ($validation->fails ()) {
				throw new ValidationException ( $validation );
			}
			
			/*
			 * Authenticate user
			 */
			$credentials = [ 
					'login' => array_get ( $data, 'login' ),
					'password' => array_get ( $data, 'password' ) 
			];
			
			Event::fire ( 'rainlab.user.beforeAuthenticate', [ 
					$this,
					$credentials 
			] );
			
			$user = Auth::authenticate ( $credentials, true );
			
			/*
			 * Redirect to the intended page after successful sign in
			 */
			$redirectUrl = $this->pageUrl ( $this->property ( 'redirect' ) ) ?: $this->property ( 'redirect' );
			
			if ($redirectUrl = input ( 'redirect', $redirectUrl )) {
				return Redirect::intended ( $redirectUrl );
			}
		} catch ( Exception $ex ) {
			if (Request::ajax ())
				throw $ex;
			else
				Flash::error ( $ex->getMessage () );
		}
	}
	// 发送手机验证码
	public function onSendsms() {
		$phone = Input::get ( 'phone' );
		// $content = '{"name":"'.$data['verify'].'"}';
		$verify = rand ( 100000, 999999 );
		$content = '{"name":"' . $verify . '"}';
		// 'DX_TEMPLATECODE' => 'SMS_33705826', //验证码短信模板代码
		$template = 'SMS_33705826';
		$sendObj = new Sms ();
		$res = $sendObj->send ( $phone, $content, $template );
		$rs = json_decode ( $res );
		if (isset ( $rs->Model )) {
			
			$ver = array (
					'thetime' => time (),
					'verify' => $verify,
					'phone' => $phone 
			);
			
			Thesession::flash ( 'phonecaptcha', $ver );
			
			return '发送成功';
		} else {
			return '发送失败';
		}
	}
	// 验证手机验证码
	public function checksms($phone, $verify) {
		$phonecaptcha = Thesession::get ( 'phonecaptcha' );
		if (time () > $phonecaptcha ['thetime'] + 300) {
			return "timeout";
		} else {
			if ($phonecaptcha ['phone'] == $phone && $phonecaptcha ['verify'] == $verify) {
				return "yes";
			} else {
				return "no";
			}
		}
	}
	/**
	 * 手机注册
	 */
	public function onPhoneregister() {
		$openid = $this->param('whid')?$this->param('whid'):null;
		try {
			if (! UserSettings::get ( 'allow_registration', true )) {
				throw new ApplicationException ( Lang::get ( 'rainlab.user::lang.account.registration_disabled' ) );
			}
			
			/*
			 * Validate input
			 */
			$data = post ();
			
			if (! array_key_exists ( 'password_confirmation', $data )) {
				$data ['password_confirmation'] = post ( 'password' );
			}
			
			$mobile = post ( 'mobile' );
			$phonecaptcha = post ( 'phonecaptcha' );
			if ($this->checksms ( $mobile, $phonecaptcha ) == 'yes') {
				// 用户输入验证码正确
				$data ['validatecaptcha'] = true;
			} else {
				// 用户输入验证码错误
				$data ['validatecaptcha'] = "error";
				// return;
			}
			$rules = [ 
					'mobile' => 'required',
					'password' => 'required|between:4,255|confirmed',
					'validatecaptcha' => 'required|boolean',
					'usertype' => 'required' 
			];
			
			$validation = Validator::make ( $data, $rules, [ 
					'validatecaptcha.boolean' => '验证码错误' 
			] );
			if ($validation->fails ()) {
				throw new ValidationException ( $validation );
			}
			$username = md5 ( uniqid ( md5 ( microtime ( true ) ), true ) );
			$uc_uid = Ucenter::uc_user_register ( $username, post ( 'password' ), $mobile . '@bohe.com', $mobile );
			$data ['username'] = $username;
			$data ['email'] = $mobile . '@bohe.com';
			if ($uc_uid <= 0) {
				
				throw new UcAuthException ( '用户注册失败(uc)' );
			}
			
			$this->uc_uid = $uc_uid;
			/*
			 * Register user
			 */
			$requireActivation = UserSettings::get ( 'require_activation', true );
			$automaticActivation = UserSettings::get ( 'activate_mode' ) == UserSettings::ACTIVATE_AUTO;
			$userActivation = UserSettings::get ( 'activate_mode' ) == UserSettings::ACTIVATE_USER;
			
			$user = Auth::register ( $data, $automaticActivation );
			// 根据用户类型，进行入组
			$usertype = post ( 'usertype' );
			if ($usertype == 1) {
				// 加入医生组
				$isdoctor = DB::select ( 'select * from user_groups where name = :name ', [ 
						':name' => 'doctor' 
				] );
				if ($isdoctor) {
					$user->groups ()->attach ( $isdoctor [0]->id );
				} else {
					$insertdoc = DB::insert ( 'insert into user_groups (name, code) values (?, ?)', [ 
							'doctor',
							'doctor' 
					] );
					if ($insertdoc) {
						$isdoctortwo = DB::select ( 'select * from user_groups where name = :name ', [ 
								':name' => 'doctor' 
						] );
						$user->groups ()->attach ( $isdoctortwo [0]->id );
					}
				}
			} elseif ($usertype == 2) {
				// 加入普通用户组
				$isregistered = DB::select ( 'select * from user_groups where name = :name ', [ 
						':name' => 'Registered' 
				] );
				if ($isregistered) {
					$user->groups ()->attach ( $isregistered [0]->id );
				} else {
					$insertreg = DB::insert ( 'insert into user_groups (name, code) values (?, ?)', [ 
							'Registered',
							'Registered' 
					] );
					if ($insertreg) {
						$isregisteredtwo = DB::select ( 'select * from user_groups where name = :name ', [ 
								':name' => 'Registered' 
						] );
						$user->groups ()->attach ( $isregisteredtwo [0]->id );
					}
				}
			}
			
			/*
			 * Automatically activated or not required, log the user in
			 */
			if ($automaticActivation || ! $requireActivation) {
				Auth::login ( $user );
			}
			// 添加移动注册后，签发token，跳转
			if ($this->property ( 'mobile' ) == 'yes') {
				//查找该用户，如果参数有openID则存储
				if($openid!=null){
					$finduser=User::where ( 'mobile', post ( 'mobile' ) )->first ();
					$finduser->openid=$openid;
					$finduser->save();
				}
				
				$key = "iOjEsImlzcyI6I";
				// 查找用户名
				$user = User::where ( 'mobile', post ( 'mobile' ) )->first ();
				$user_id= $user->id;
				$token = array (
						"iss" => "official.com",
						"aud" => "doctor.com",
						"iat" => time (),
						"nbf" => time (),
						"exp" => time () + 1357000000,
						"sub" => $user_id
				);
				
				$jwt = JWT::encode ( $token, $key );
				$viewurl=config('urlconfig.view');
				return Redirect::to ( $viewurl.'/firstpage?type=true&token=' . $jwt );
			} else {
				/*
				 * Redirect to the intended page after successful sign in
				 */
				$redirectUrl = $this->pageUrl ( $this->property ( 'redirect' ) ) ?: $this->property ( 'redirect' );
				
				if ($redirectUrl = post ( 'redirect', $redirectUrl )) {
					return Redirect::intended ( $redirectUrl );
				}
			}
		} catch ( UcAuthException $ex ) {
			if (Request::ajax ())
			throw $ex;
				else
			Flash::error ( $ex->getMessage () );
							
		}catch ( Exception $ex ) {
			if ($this->uc_uid)
				Ucenter::uc_user_delete ( $this->uc_uid );
			$this->uc_uid = null;
			if (Request::ajax ())
				throw $ex;
			else
				Flash::error ( $ex->getMessage () );
		}
	}
	/**
	 * Register the user
	 */
	public function onRegister() {
		try {
			if (! UserSettings::get ( 'allow_registration', true )) {
				throw new ApplicationException ( Lang::get ( 'rainlab.user::lang.account.registration_disabled' ) );
			}
			
			/*
			 * Validate input
			 */
			$data = post ();
			
			if (! array_key_exists ( 'password_confirmation', $data )) {
				$data ['password_confirmation'] = post ( 'password' );
			}
			
			if ($this->loginAttribute () == UserSettings::LOGIN_USERNAME) {
				$rules ['username'] = 'required|between:2,255';
			}
			
			$userInput = post ( 'captcha' );
			if (Thesession::get ( 'milkcaptcha' ) == $userInput) {
				// 用户输入验证码正确
				$data ['validatecaptcha'] = true;
			} else {
				// 用户输入验证码错误
				$data ['validatecaptcha'] = "error";
				// return;
			}
			$rules = [ 
					'email' => 'required|email|between:6,255',
					'password' => 'required|between:4,255|confirmed',
					'validatecaptcha' => 'required|boolean',
					'usertype' => 'required' 
			];
			$validation = Validator::make ( $data, $rules, [ 
					'validatecaptcha.boolean' => 'captcha not right' 
			] );
			if ($validation->fails ()) {
				throw new ValidationException ( $validation );
			}
			/*
			 * Register user
			 */
			$requireActivation = UserSettings::get ( 'require_activation', true );
			$automaticActivation = UserSettings::get ( 'activate_mode' ) == UserSettings::ACTIVATE_AUTO;
			$userActivation = UserSettings::get ( 'activate_mode' ) == UserSettings::ACTIVATE_USER;
			$user = Auth::register ( $data, $automaticActivation );
			// 根据用户类型，进行入组
			$usertype = post ( 'usertype' );
			if ($usertype == 1) {
				$user->groups ()->attach ( 3 );
			} elseif ($usertype == 2) {
				$user->groups ()->attach ( 2 );
			}
			
			/*
			 * Activation is by the user, send the email
			 */
			if ($userActivation) {
				$this->sendActivationEmail ( $user );
				
				Flash::success ( Lang::get ( 'rainlab.user::lang.account.activation_email_sent' ) );
			}
			
			/*
			 * Automatically activated or not required, log the user in
			 */
			if ($automaticActivation || ! $requireActivation) {
				Auth::login ( $user );
			}
			
			/*
			 * Redirect to the intended page after successful sign in
			 */
			$redirectUrl = $this->pageUrl ( $this->property ( 'redirect' ) ) ?: $this->property ( 'redirect' );
			
			if ($redirectUrl = post ( 'redirect', $redirectUrl )) {
				return Redirect::intended ( $redirectUrl );
			}
		} catch ( Exception $ex ) {
			if (Request::ajax ())
				throw $ex;
			else
				Flash::error ( $ex->getMessage () );
		}
	}
	
	/**
	 * Activate the user
	 * 
	 * @param string $code
	 *        	Activation code
	 */
	public function onActivate($code = null) {
		try {
			$code = post ( 'code', $code );
			
			/*
			 * Break up the code parts
			 */
			$parts = explode ( '!', $code );
			if (count ( $parts ) != 2) {
				throw new ValidationException ( [ 
						'code' => Lang::get ( 'rainlab.user::lang.account.invalid_activation_code' ) 
				] );
			}
			
			list ( $userId, $code ) = $parts;
			
			if (! strlen ( trim ( $userId ) ) || ! ($user = Auth::findUserById ( $userId ))) {
				throw new ApplicationException ( Lang::get ( 'rainlab.user::lang.account.invalid_user' ) );
			}
			
			if (! $user->attemptActivation ( $code )) {
				throw new ValidationException ( [ 
						'code' => Lang::get ( 'rainlab.user::lang.account.invalid_activation_code' ) 
				] );
			}
			
			Flash::success ( Lang::get ( 'rainlab.user::lang.account.success_activation' ) );
			
			/*
			 * Sign in the user
			 */
			Auth::login ( $user );
		} catch ( Exception $ex ) {
			if (Request::ajax ())
				throw $ex;
			else
				Flash::error ( $ex->getMessage () );
		}
	}
	
	/**
	 * Update the user
	 */
	public function onUpdate() {
		if (! $user = $this->user ()) {
			return;
		}
		
		$user->fill ( post () );
		$user->save ();
		//同步更新uc 的password
		$uc_row = Ucenter::uc_user_updatepassword( $user->mobile, post ('secret'));
		
		/*
		 * Password has changed, reauthenticate the user
		 */
		if (strlen ( post ( 'password' ) )) {
			Auth::login ( $user->reload (), true );
		}
		
		Flash::success ( post ( 'flash', Lang::get ( 'rainlab.user::lang.account.success_saved' ) ) );
		
		/*
		 * Redirect
		 */
		if ($redirect = $this->makeRedirection ()) {
			return $redirect;
		}
	}
	
	/**
	 * Deactivate user
	 */
	public function onDeactivate() {
		if (! $user = $this->user ()) {
			return;
		}
		
		if (! $user->checkHashValue ( 'password', post ( 'password' ) )) {
			throw new ValidationException ( [ 
					'password' => Lang::get ( 'rainlab.user::lang.account.invalid_deactivation_pass' ) 
			] );
		}
		
		$user->delete ();
		Auth::logout ();
		
		Flash::success ( post ( 'flash', Lang::get ( 'rainlab.user::lang.account.success_deactivation' ) ) );
		
		/*
		 * Redirect
		 */
		if ($redirect = $this->makeRedirection ()) {
			return $redirect;
		}
	}
	
	/**
	 * Trigger a subsequent activation email
	 */
	public function onSendActivationEmail() {
		try {
			if (! $user = $this->user ()) {
				throw new ApplicationException ( Lang::get ( 'rainlab.user::lang.account.login_first' ) );
			}
			
			if ($user->is_activated) {
				throw new ApplicationException ( Lang::get ( 'rainlab.user::lang.account.already_active' ) );
			}
			
			Flash::success ( Lang::get ( 'rainlab.user::lang.account.activation_email_sent' ) );
			
			$this->sendActivationEmail ( $user );
		} catch ( Exception $ex ) {
			if (Request::ajax ())
				throw $ex;
			else
				Flash::error ( $ex->getMessage () );
		}
		
		/*
		 * Redirect
		 */
		if ($redirect = $this->makeRedirection ()) {
			return $redirect;
		}
	}
	
	/**
	 * Sends the activation email to a user
	 * 
	 * @param User $user        	
	 * @return void
	 */
	protected function sendActivationEmail($user) {
		$code = implode ( '!', [ 
				$user->id,
				$user->getActivationCode () 
		] );
		$link = $this->currentPageUrl ( [ 
				$this->property ( 'paramCode' ) => $code 
		] );
		
		$data = [ 
				'name' => $user->name,
				'link' => $link,
				'code' => $code 
		];
		
		Mail::send ( 'rainlab.user::mail.activate', $data, function ($message) use ($user) {
			$message->to ( $user->email, $user->name );
		} );
	}
	
	/**
	 * Redirect to the intended page after successful update, sign in or registration.
	 * The URL can come from the "redirect" property or the "redirect" postback value.
	 * 
	 * @return mixed
	 */
	protected function makeRedirection() {
		$redirectUrl = $this->pageUrl ( $this->property ( 'redirect' ) ) ?: $this->property ( 'redirect' );
		
		if ($redirectUrl = post ( 'redirect', $redirectUrl )) {
			return Redirect::to ( $redirectUrl );
		}
	}
	
	/**
	 * Checks if the force secure property is enabled and if so
	 * returns a redirect object.
	 * 
	 * @return mixed
	 */
	protected function redirectForceSecure() {
		if (Request::secure () || Request::ajax () || ! $this->property ( 'forceSecure' )) {
			return;
		}
		
		return Redirect::secure ( Request::path () );
	}
}
