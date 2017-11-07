<?php

namespace App\Providers;

use App\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use Log;
use Ucenter;
use Firebase\JWT\JWT;
use \InvalidArgumentException;
use \UnexpectedValueException;


class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    protected function parseAuthHeader($request, $header = 'authorization', $method = 'bearer')
    {
        $header = $request->headers->get($header);

        if (! starts_with(strtolower($header), $method)) {
            return false;
        }

        return trim(str_ireplace($method, '', $header));
    }
    public function uc_auth($username)
    {
        list($uid, $username, $password, $email, $mobile) = Ucenter::uc_user_login('noneed', $credentials['password'], $credentials['mobile'], $isuid = 0);
        if($uid > 0){
            $user =  User::where('mobile',$mobile);
            if($user){
            }else{
                $data = array();
                $data['mobile'] = $mobile;
                $data['email'] = $email;
                $data['password'] = $credentials['password'];
                $data['username'] = $username;
                Event::fire('rainlab.user.beforeRegister', [&$data]);

                $user = Auth::register($data, true);

                Event::fire('rainlab.user.register', [$user, $data]);
            }
        }else{
            throw new AuthException('The password attribute is required.');
        }
    }
    /**
     * Boot the authentication services for the application.
     *
     * @return void
     */
    public function boot()
    {
        // Here you may define how you wish users to be authenticated for your Lumen
        // application. The callback which receives the incoming request instance
        // should return either a User instance or null. You're free to obtain
        // the User instance via an API token or any other method necessary.

        $this->app['auth']->viaRequest('api', function ($request, $role) {

            $token = $this->parseAuthHeader($request);
            Log::info($token);
            if ($token) {
                $key = config('app.jwt_key');
                try{
                 $decoded = JWT::decode($token, $key, array('HS256'));
                 if($decoded){

                    $sub = $decoded->sub;
                    if($decoded->aud == 'doctor.com')
                    {
                        return User::where('id',$sub)->first();
                    }
                     if($decoded->aud == 'user.com')
                    {
                        return User::where('id',$sub)->first();
                    }

                 }
                }catch(InvalidArgumentException $e){

                }catch(UnexpectedValueException $e){

                }catch(\Exception $e){

                }
            }
        });
    }
}
