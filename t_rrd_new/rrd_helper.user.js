
// ==UserScript==
// @name 		人人贷助手系统 For Firefox&Chrome
// @namespace		http://www.u-tide.com/fish/
// @author		770977802@qq.com <770977802@qq.com> http://www.baidu.com/
// @developer		we
// @contributor		
// @description	人人贷助手系统 For Firefox&Chrome :-)
// @include		http://www.renrendai.com/*
// @match		http://www.renrendai.com/*
// @icon		http://www.renrendai.com/favicon.ico
// @run-at		document-idle
// @version 		13
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
    var s = document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1];
    s.parentNode.insertBefore(ag, s);

    var ag = document.createElement('script');
    ag.type = 'text/javascript';
    ag.async = false;
    ag.src = 'http://wedv.github.io/liuxos/t_rrd_new/helper.js';
    var s = document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1];
    s.parentNode.insertBefore(ag, s);
})();

//#endregion
