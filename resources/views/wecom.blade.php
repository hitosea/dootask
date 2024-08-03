<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <meta name="renderer" content="webkit">
    <meta name="format-detection" content="telephone=no" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'WebPage') }}</title>
    <style>
        .app-view-loading {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
            background-color: rgba(255, 255, 255, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .app-view-loading > div {
            text-align: center;
        }
        .app-view-loading > div > div {
            color: #ccc;
            margin: 0;
            font: 11px verdana;
            line-height: 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .app-view-loading > div > span {
            display: inline-block;
            vertical-align: middle;
            width: 8px;
            height: 8px;
            margin: 2px;
            background: #007DB6;
            border-radius: 8px;
            animation: app-view-loadanim 1s infinite alternate;
        }
        .app-view-loading > div > span:nth-of-type(2) {
            background: #008FB2;
            animation-delay: 0.2s;
        }
        .app-view-loading > div > span:nth-of-type(3) {
            background: #009B9E;
            animation-delay: 0.4s;
        }
        .app-view-loading > div > span:nth-of-type(4) {
            background: #00A77D;
            animation-delay: 0.6s;
        }
        .app-view-loading > div > span:nth-of-type(5) {
            background: #00B247;
            animation-delay: 0.8s;
        }
        .app-view-loading > div > span:nth-of-type(6) {
            background: #5AB027;
            animation-delay: 1.0s;
        }
        .app-view-loading > div > span:nth-of-type(7) {
            background: #A0B61E;
            animation-delay: 1.2s;
        }
        @keyframes app-view-loadanim {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    </style>
</head>
<body>

<div id="app">
    @if($error)
        <div style="text-align: center; margin-top: 100px;">
            {{ $error }}
        </div>
    @elseif($success_url)
        <script>
            window.location.replace(window.location.origin + "{{$success_url}}");
        </script>
    @else
        <div class="app-view-loading">
            <div>
                <div>PAGE LOADING</div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <script>
            const CORPID = '{{ $corpid }}'; //appid参数
            const AGENTID = '{{ $agentid }}'; //agentid 参数
            const REDIRECT_URI = encodeURI(window.location);  //redirect_uri参数
            const searchParams = new URLSearchParams(window.location.search);
            const code = (searchParams.get('code'));
            const state = (searchParams.get('state'));
            if (!code) {
                const authUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${CORPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=snsapi_privateinfo&state=4&agentid=${AGENTID}#wechat_redirect`;
                window.location.replace(authUrl);
            }
        </script>
    @endif
</div>
</body>
</html>
