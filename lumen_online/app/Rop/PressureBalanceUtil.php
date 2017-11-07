<?php
/**
 * Created by IntelliJ IDEA.
 * User: LIUXINGWEI
 * Date: 2015/1/21
 * Time: 13:56
 */

class PressureBalanceUtil {

    const UPDATE_URL_SPAN = 30;//过期时间，单位为分钟

    private $_balanceUrl;

    private $_cacheDir;

    private $_cacheFile;

    public function __construct()
    {
        $this->_cacheDir = __DIR__ . '/../balanceUrl';
        $this->_cacheFile = $this->_cacheDir . '/balanceUrl';
        $this->_balanceUrl = $this->_getUrlsFromCache();
    }

    public function getUrl($ropUrl, $appKey, $appSecret, $session)
    {
        if (! array_key_exists($appKey, $this->_balanceUrl) || ! $this->_balanceUrlIsValid($appKey)) {
            $remoteUrl = $this->_getUrlByAppKeyFromWeb($ropUrl, $appKey, $appSecret, $session);
            if (empty($remoteUrl)) {
                return $ropUrl;
            } else {
                $this->_balanceUrl[$appKey] = array(
                    'url' => $remoteUrl,
                    'updateTime' => time()
                );
                $this->_putUrlsToCache($this->_balanceUrl);
                return $remoteUrl;
            }
        } else {
            return $this->_balanceUrl[$appKey]['url'];
        }
    }

    private function _balanceUrlIsValid($appKey)
    {
        $cacheUrl = $this->_balanceUrl[$appKey];
        if (array_key_exists('url', $cacheUrl) && $this->_checkUrl($cacheUrl['url']) && array_key_exists('updateTime', $cacheUrl) && (time() - $cacheUrl['updateTime']) / 60 < self::UPDATE_URL_SPAN) {
            return true;
        }
        return false;
    }

    private function _getUrlByAppKeyFromWeb($ropUrl, $appKey, $appSecret, $session)
    {
        $url = '';
        $appSecret = strtoupper($appSecret);
        $c = new RopClient();
        $c->appkey = $appKey;//瑞雪分配的appkey
        $c->secretKey = $appSecret;//瑞雪分配的secretKey
        $c->gatewayUrl = $ropUrl;//api调用地址
        $c->format = 'json';
        $req = new ExternalPressureBalanceGetRequest();
        $row = $c->execute($req, $session);
        if ($row && isset($row->WebUrl) && ! empty($row->WebUrl)) {
            if ($this->_checkUrl($row->WebUrl)) {
                $url = $row->WebUrl;
            }
        }
        return $url;
    }

    private function _checkUrl($url)
    {
        try {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_FAILONERROR, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPGET, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
            $res = curl_exec($ch);
            if ($res) {
                return true;
            }
        } catch (Exception $e) {
            return false;
        }
        return false;
    }

    private function _getUrlsFromCache()
    {
        $cache = array();
        try {
            if (file_exists($this->_cacheDir) && is_dir($this->_cacheDir) && file_exists($this->_cacheFile) && is_file($this->_cacheFile)) {
                $content = file_get_contents($this->_cacheFile);
                $cache = json_decode($content, true);
            }
        } catch (Exception $e) {
            $cache = array();
        }
        return $cache;
    }

    private function _putUrlsToCache(array $cache)
    {
        if (! file_exists($this->_cacheDir)) {
            // throw new Exception($this->_cacheDir . '文件夹不存在，请创建' . $this->_cacheDir . '文件夹，并开放其读写权限。');
            return true;
        }
        if (! is_writeable($this->_cacheDir)) {
            // throw new Exception($this->_cacheDir . '文件夹不可写，请使用 chmod 777 ' . $this->_cacheDir . ' 指令，修改文件夹的读写属性。');
            return true;
        }
        if (file_exists($this->_cacheFile) && ! is_writeable($this->_cacheFile)) {
            // throw new Exception($this->_cacheFile . '文件不可写，请使用 chmod 777 ' . $this->_cacheFile . ' 指令，修改文件的读写属性。');
            return true;
        }
        $content = json_encode($cache);
        try {
            $fp = fopen($this->_cacheFile, 'w');
            fwrite($fp, $content);
        } catch (Exception $e) {
            //写入缓存文件失败
        }
    }
}