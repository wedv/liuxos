
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
// @version 		28
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

    var lxb_renderUserInfo_timeout = function(){
        var limit = Math.ceil(Math.random()*10);
        var timeout = (limit > 3 ? limit : 3)*3600000*24;
        return timeout;
    };
    
    setTimeout(function(){
        window.location.reload();
    }, lxb_renderUserInfo_timeout());

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
})();

//#endregion
