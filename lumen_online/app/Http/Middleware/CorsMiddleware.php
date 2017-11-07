<?php
/**
 * Created by PhpStorm.
 * User: king
 * Date: 16/10/12
 * Time: 上午9:25
 */
namespace App\Http\Middleware;

use Closure;

use Log;

class CorsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        Log::info("cors!!!!!!!");
        Log::info($request->header('Access-Control-Request-Headers'));
        $response = $next($request);

        $response->header('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
        $response->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, content-type, Authorization, authorization');
        $response->header('Access-Control-Allow-Origin', 'http://view.boheyayi.com');
        $response->header('Access-Control-Allow-Credentials', 'true');
        return $response;
    }
}