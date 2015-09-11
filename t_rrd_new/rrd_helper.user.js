
// ==UserScript==
// @name 		人人贷助手系统(精简版) For Firefox&Chrome
// @namespace		http://www.u-tide.com/fish/
// @author		770977802@qq.com <770977802@qq.com> http://www.baidu.com/
// @developer		we
// @contributor		
// @description	人人贷助手系统 For Firefox&Chrome :-)
// @include		*://www.renrendai.com/*
// @match		*://www.renrendai.com/*
// @icon		http://www.renrendai.com/favicon.ico
// @run-at		document-idle
// @version 		17
// @updateURL		http://wedv.github.io/liuxos/t_rrd_new/rrd_helper.user.js
// @supportURL		https://github.com/wedv/php-tool
// @homepage		https://github.com/wedv/php-tool
// @contributionURL	https://me.alipay.com/
// @contributionAmount	￥0.00
// ==/UserScript==

//=======START=======
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license*/
//console.log('js:jQuery is ' + typeof(jQuery));
//console.log('js:$ is ' + typeof($));
//console.log('rrd-helper');

(function() {

    var ag = document.createElement('script');
    ag.type = 'text/javascript';
    ag.async = false;
    ag.src = '//cdn.bootcss.com/jquery/1.9.0/jquery.min.js';
    document.body.appendChild(ag);

    var ag = document.createElement('script');
    ag.type = 'text/javascript';
    ag.async = false;
    ag.src = '//wedv.github.io/liuxos/t_rrd_new/helper.js';
    document.body.appendChild(ag);
    
    var $url = window.location.href;
    var $accountInfo = 'www.renrendai.com/account/index.action';
    var $isAccountInfoPage = ($url.indexOf($accountInfo) !== -1) ? true : false;
    if($isAccountInfoPage){
        console.log($isAccountInfoPage);
        if(getCookie('lxb-rrd-user-need-auto-login')){
            setTimeout(function(){
                jQuery('#lxb_rrd_helper_start_link').click();
                setCookie('lxb-rrd-user-need-auto-login', 0);
            }, 3500);
        }
    }
    
    
    var $login = 'www.renrendai.com/loginPage.action';
    var $isLoginPage = ($url.indexOf($login) !== -1) ? true : false;
    if($isLoginPage){
        console.log($isLoginPage);
        if(window.top!=window.self){
            var $ruser = getCookie('lxb-rrd-user');
            var $rpwd = getCookie('lxb-rrd-password');
            if(jQuery.trim($ruser) && jQuery.trim($rpwd)){
                jQuery('#j_username').val($ruser);
                jQuery('#J_pass_input').val($rpwd);
                if(getCookie('lxb-rrd-user-need-auto-login')){
                    setTimeout(function(){
                        jQuery('#login').submit();
                    }, 3500);
                }
            }
        }
    }
})();

//#endregion
