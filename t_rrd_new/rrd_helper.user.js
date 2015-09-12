
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
// @version 		21
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

//    var ag = document.createElement('script');
//    ag.type = 'text/javascript';
//    ag.async = false;
//    ag.src = '//wedv.github.io/liuxos/t_rrd_new/helper.js';
//    document.body.appendChild(ag);
})();

//=================================helper.js===========================================
var lxb_stop = 0;
var lxb_app = {
    clearStop: function() {
        lxb_stop = 0;
    },
    setStop: function() {
        lxb_stop = 1;
    },
    getStop: function() {
        return lxb_stop;
    }
};
var lxb_url = {
    userInfo: 'http://www.renrendai.com/getHomePageUserInfo.action?timeout=5000&',
    totalCount: 'http://www.renrendai.com/getUnreadMailsCount.action?',
    page: 'http://www.renrendai.com/transfer/transferList!json.action?',
    item: 'http://www.renrendai.com/transfer/loanTransferDetail.action?transferId=',
    buy: 'http://www.renrendai.com/transfer/buyLoanTransfer.action',
    image_https: 'http://www.renrendai.com/image_https.jsp',
    image: 'http://www.renrendai.com/image.jsp?',
    rrd: 'http://liuxos3.duapp.com/wx/box/Rrd.php',
    getItemUrl: function($url, $id) {
        return $url + $id;
    },
    getUrl: function($url) {
        var d = new Date;
        var t = d.getTime();
        return $url + '_=' + t;
    },
    getImageUrl: function($url) {
        var d = new Date;
        var t = d.getTime();
        return $url + 'ts=' + t;
    },
    getPageUrl: function($url, $page) {
        var d = new Date;
        var t = d.getTime();
        return $url + 'pageIndex=' + $page + '&_=' + t;
    }
};
var lxb_http = {
    get: function($url) {
        var dataType = arguments[1] ? arguments[1] : 'json';
        var $res;
        jQuery.ajax({
            url: $url,
            async: false,
            dataType: dataType,
            success: function(ddd) {
                $res = ddd;
            }
        });
        return $res;
    },
    get_callback: function($url, $dataType, $callback) {
        var dataType = $dataType ? $dataType : 'json';
        var $res;
        jQuery.ajax({
            url: $url,
            dataType: dataType,
            success: function(ddd) {
                $callback ? $callback(ddd) : (function(){})();
            }
        });
    }
};

var lxb_html = {
    init: function() {
        var $dom = '';
        $dom += '<div id="lxb-member" style="border:1px double red;background: rgb(212,212,212);position:fixed;width:300px;height:215px;left:230px;z-index:99999999;top:135px;display:none;">';
        $dom += '<div style="border:1px double red;background:rgb(163, 199, 252);margin:5px;text-align: center;">登录助手工具</div>';
        $dom += '<div style="text-align: center;line-height: 40px;margin-top: 20px;">';
        $dom += '账号：<input id="lxb_member_user" class="lxb-conf" /><br />';
        $dom += '密码：<input type="password" id="lxb_member_pwd" class="lxb-conf" /><br />';
        $dom += '<input type="button" id="lxb_member_submit" value="登录" />';
        $dom += '<p style="line-height:14px;">使用此工具需要助手账号，申请账号请联系QQ：770977802</p>';
        $dom += '<p id="show-lxb-login-time" style="line-height:14px;margin-top:5px;border-top:1px solid red"></p>';
        $dom += '</div>';
        $dom += '</div>';
        
        $dom += '<div id="lxb" style="color: #BB8B8B;border:1px double red;background:#373b42;position:fixed;width:285px;height:auto;z-index:9999999;top:0;left:0;padding:5px;">';
        $dom += '<span>账户余额：<span id="lxb-user-money">--</span></span>';
        $dom += '<br><span><input type="checkbox" id="lxb-ls-liuxos3" checked="checked">私服</span>';
        $dom += '<br><span>留底<input id="lxb-min-money" class="lxb-conf" value style="width:40px;" />元</span>';
        $dom += '<br><span>收益底限<input id="lxb-min-lilv" class="lxb-conf" value="13" style="width:40px;" />%</span>';
        $dom += '<hr />';
        $dom += '<br><span>人人贷账号：<input id="lxb-rrd-user" class="lxb-conf" value="" style="width:160px;" /></span>';
        $dom += '<br><span>人人贷密码：<input type="password" id="lxb-rrd-password" class="lxb-conf" value="" style="width:160px;" /></span>';
        $dom += '</div>';
        
        
        $dom += '<div style="display:none;">';
        $dom += '<div id="lxb-item-list" style="overflow-y:auto;width:828px;height:267px;border:1px solid red;">';
        $dom += '<div id="lxb-item-list-c5">';
        $dom += '</div>';
        $dom += '<div id="lxb-item-list-c3">';
        $dom += '</div>';
        $dom += '<div id="lxb-item-list-c2">';
        $dom += '</div>';
        $dom += '<div id="lxb-item-list-c1">';
        $dom += '</div>';
        $dom += '</div>';
        $dom += '<div id="lxb-buy-iframe" name="lxb-buy-iframe" style="display:none;"></div>';
        $dom += '<iframe id="lxb-rrd-login-iframe" style="display:none;" data-login_count=0></iframe>';
        $dom += '<input type="hidden" id="lxb-buy-hide-id" value="0">';
        $dom += '<div id="lxb-buy-hide-auto-commit" style="display:none;"></div>';
        $dom += '<div id="lxb-buy-hide" name="lxb-buy-hide" style="overflow:auto;display:none;margin:-1px;padding:0;width:900px;height:200px;border:1px double red;background:#373b42;"></div>';
        $dom += '</div>';
        
        jQuery($dom).appendTo('body');
        lxb_html.init_conf();
    },
    init_conf: function(){
        jQuery('.lxb-conf').each(function(k, item){
            var id = jQuery(item).attr('id');
            var conf_val = jQuery("#" + id).val();
            var conf_val_cookie = getCookie(id);
            if(conf_val != conf_val_cookie && conf_val_cookie != 0){
                jQuery("#" + id).val(conf_val_cookie);
            }
        });
        jQuery('body').on('keyup', '.lxb-conf', function(e){
            var $target = jQuery(e.target);
            var id = $target.attr('id');
            setCookie(id, $target.val());
        });
    }
};

var lxb_rrd_login = function(){
    var lxb_rrd_login_count = getCookie('lxb_rrd_login_count')+1;
    var $target = jQuery('#lxb-rrd-login-iframe');
//    if(lxb_rrd_login_count > 8){
//        return false;
//    }
    setCookie('lxb-rrd-user-need-auto-login', lxb_rrd_login_count);
    $target.attr('src', 'http://www.renrendai.com/loginPage.action'); //rrd登陆页面有预防被iframe的js，所以此处是window.top='url'
};

var lxb_renderUserInfo_timeout = function(){
    var limit = Math.ceil(Math.random()*10);
    var timeout = (limit > 3 ? limit : 3)*60000;
    if(timeout < 60000){
        return lxb_renderUserInfo_timeout();
    }
    return timeout;
};

var lxb_renderUserInfo = function() {
    var one = arguments[0] ? arguments[0] : 0;
    var $fs = lxb_renderUserInfo_timeout();
    lxb_http.get_callback(lxb_url.getUrl(lxb_url.userInfo), 0, function($userInfo){
        var str = '--';
        if($userInfo){
            str = $userInfo.avaliableBalance;
        }
        var money = parseFloat(str.replace(',', ''));
        jQuery('#lxb-user-money').html(money + '');
        var $m = parseInt(jQuery('#lxb-min-money').val());
        var $isOffLine = 0 === money ? true : false;
        var login_time_cookie_key = 'lxb_rrd_user_off_line';
        if($isOffLine){
            if( (getCookie(login_time_cookie_key) <= 0) || ((gttt() - getCookie(login_time_cookie_key)) >= 3600000) ){
                setCookie(login_time_cookie_key, gttt());
                lxb_rrd_login();
            }
        }else{
            setCookie(login_time_cookie_key, 0);
        }
        if(money < $m && !lxb_app.getStop()){
            lxb_app.setStop();
            setTimeout(function(){
                lxb_app.clearStop();
            }, ($fs - 5000));
        }
    });
    if(!one){
        setTimeout(function() {
            lxb_renderUserInfo();
        }, $fs);
    }
};

var lxb_run = function() {
    var $url = window.location.href;
    var $transList = 'www.renrendai.com/getHomePageUserInfo.action';
    var $loan = 'www.renrendai.com/transfer/loanTransferDetail.action';
    var $login = 'www.renrendai.com/loginPage.action';
    var $accountInfo = 'www.renrendai.com/account/index.action';
    var $isTransListPage = ($url.indexOf($transList) !== -1) ? true : false;
    var $isLoanPage = ($url.indexOf($loan) !== -1) ? true : false;
    var $isLoginPage = ($url.indexOf($login) !== -1) ? true : false;
    var $isAccountInfoPage = ($url.indexOf($accountInfo) !== -1) ? true : false;
    if($isTransListPage){
	setCookie('rrd_page_init_time', gtttstr());
        document.title = 'rrd helper';
        jQuery('body').html('');
        lxb_html.init();
        lxb_renderUserInfo();
        setInterval(lxb_get_list_from_server, 1200);
        setInterval(lxb_use_list, 1000);
        return;
    }
    jQuery('<div style="background:white;text-align:center;left:0;z-index:99999999;top:0;position:fixed;width:200px;height:30px;line-height:30px;border:1px solid red;"><a id="lxb_rrd_helper_start_link" href="http://www.renrendai.com/getHomePageUserInfo.action">人人贷助手</a></div>').appendTo('body');
    if($isLoanPage){
        var $m = jQuery('#pg-server-message');
        if($m){
            jQuery(window.parent.document).find('#lxb-buy-hide').append('<div style="color:yellow;">' + $m.attr('data-message') + gtttstr() + '</div>');
            window.parent.renderUserInfo();
        }
        return;
    }
    if($isLoginPage){
        var $loginLim = window.top!=window.self ? true : true;
        if($loginLim){
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
    if($isAccountInfoPage){
        var needAutoLogin = getCookie('lxb-rrd-user-need-auto-login');
        if(needAutoLogin){
            setTimeout(function(){
                setCookie('lxb-rrd-user-need-auto-login', 0);
                setCookie('lxb_rrd_user_off_line', 0);
                window.location.href = 'http://' + $transList;
            }, 3500);
        }
    }
};

var lxb_getTransferList_sf = function($callback){
    var url = lxb_url.rrd + '?r=actionLs&callback=' + $callback;
    jQuery.getScript(url);
};

var lxb_showLogin = function(ddd, $callback){
    jQuery("#lxb_member_submit").off('click').on('click', function(){
        lxb_doLogin($callback);
    });
    jQuery("#lxb-member").show();
    var t = '';
    var D = new Date();
    t += D.getHours() + ':' + D.getMinutes() + ':' + D.getSeconds();
    jQuery("#show-lxb-login-time").html(t + ddd.sid);
    setTimeout(function(){
        lxb_autoLogin();
    }, 180000);
};
var lxb_autoLogin = function(){
    if($("#lxb-member").css("display") != 'none'){
        $('#lxb_member_submit').click();
    }
};
var lxb_doLogin = function($callback){
    var $u = jQuery("#lxb_member_user").val();
    var $p = jQuery("#lxb_member_pwd").val();
    if($u.length == 0 || $p.length == 0){
        alert('账号、密码 不能为空！');
        return false;
    }
    var $url = lxb_url.rrd;
    jQuery.ajax({
            url : $url,
            data: {u:$u,p:$p,r:'actionPageLogin'},
            dataType: 'jsonp',
            success: function(ddd){
                if(ddd.status == 0){
                    jQuery("#lxb-member").hide();
                    $callback();
                }else{
                    alert(ddd.message);
                }
            }
    });
};

function gttt() {
    d = new Date();
    t = d.getTime();
    return t;
}
function gtttstr() {
    d = new Date();
    t = d.toString();
    return t;
}

jQuery.ajaxSetup({
	timeout: 2000,
	error: function (XMLHttpRequest, textStatus, errorThrown) {
		//console.log(this);
		//console.log(XMLHttpRequest);
		//console.log(textStatus);
		//console.log(errorThrown);
	}
});

window.onerror = function(msg,url,line,row){
	
};

var lxb_init_time = gttt();
var lxb_list_data = [];
var lxb_list_time = lxb_init_time;
var write_lxb_list = function(list){
    lxb_list_data = list;
    lxb_list_time = gttt();
};
var lxb_get_list_from_server = function(){
    if (lxb_app.getStop()) {
        return false;
    }
    lxb_getTransferList_sf('lxb_process_list_from_server');
};
var lxb_process_list_from_server = function(ddd){
    if(ddd.status == -1 && ddd.message == 'noLogin'){
        lxb_app.setStop();
        lxb_showLogin(ddd, function(){
            lxb_app.clearStop();
        });
        return false;
    }
    var list_ser = ddd.data.transferList;
    var list_ser_str = JSON.stringify(list_ser);
    var list_loc_str = JSON.stringify(lxb_list_data);
    if(list_ser_str !== list_loc_str){
        write_lxb_list(list_ser);
    }
};
var lxb_use_time = 0;
var lxb_lastBuyTime = 0;
var lxb_use_list = function(){
    if(lxb_use_time != lxb_list_time){
        lxb_use_time = lxb_list_time;
        jQuery(lxb_list_data).each(function(k, v) {
            var $m = parseInt(jQuery('#lxb-min-money').val());
            var $mlilv = parseFloat(jQuery('#lxb-min-lilv').val());
            $mlilv = $mlilv < 10 ? 10 : $mlilv;
            var $im = parseInt(jQuery('#lxb-user-money').html());
            if($m > 0 && $im > $m){     //验证金额
                var ct = gttt();
                if(!lxb_lastBuyTime){
                    lxb_lastBuyTime = 0;
                }
                var ch = ct - lxb_lastBuyTime;
                if (v.interest >= $mlilv && ch > 7000) {
                    aaa(v.id, 1);
                    lxb_lastBuyTime = gttt();
                }
            }
        });
    }
};
//setTimeout(lxb_run, 1000);


var need_load = ['jss'];
var need_load_src = {
    'jss': '//wedv.github.io/liuxos/t_rrd_new/jss.js'};
var lxb_loaded = [];
var lxb_load = function(k){
    need_load.splice(need_load.indexOf(k), 1);
    lxb_loaded.push(k);
    if(0 == need_load.length){
        lxb_run();
    }
};
for(var k in need_load_src){
    jQuery.getScript(need_load_src[k], function(){
        lxb_load(k);
    });
}

//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//============================================================================
//================================jss.js============================================
function aaa(a){
    var autoCommit = arguments[1] ? arguments[1] : 0;
    jQuery('#lxb-buy-hide-id').val(a);
    //alert('aaa('+a+')'+typeof(jQuery)+typeof($));
    var $buyHide = jQuery('#lxb-buy-hide');
    if(autoCommit){
        jQuery('#lxb-buy-hide-auto-commit-' + a).remove();
        jQuery('#lxb-buy-hide-auto-commit').append('<div id="lxb-buy-hide-auto-commit-' + a + '" style="display:none;"></div>');
        var $buyHide = jQuery('#lxb-buy-hide-auto-commit-' + a);
        setTimeout(function(){
            jQuery('#lxb-buy-hide-auto-commit-' + a).remove();
        }, 30000);
    }
    $buyHide.html('');
    jQuery.ajax({
        url:'http://www.renrendai.com/transfer/loanTransferDetail.action',
        data:{transferId: a},
        dataType:'text',
        success:function(d){
            var re = new RegExp('ui-term-hint[^<]+', 'ig');
            var ccc = d.match(re);
            var ccstr = '没有购买数量推荐';
            var canBuyCount = 0;
            if(ccc){
                ccc = ccc[0];
                ccstr = ccc.slice(14);
                var re = new RegExp('[0-9]+', 'ig');
                var canBuyCountStr = ccstr.match(re);
                if(canBuyCountStr){
                    canBuyCount = parseInt(canBuyCountStr[0]);
                }
            }
            var maxCount = 0;
            var re = new RegExp('<em id="max-shares[^<]+', 'ig');
            var maxCountStr = d.match(re);
            if(maxCountStr){
                maxCountStr = maxCountStr[0];
                maxCountStr = maxCountStr + '</em>';
                maxCount = parseInt(jQuery(maxCountStr).text());
            }
            var re = new RegExp('<input [^>]+>', 'ig');
            var res = d.match(re);
            var $formId = "lxb-buy-form";
            if(autoCommit){
                var $formId = "lxb-buy-form-" + a;
            }
            for(var i=0; i<res.length; i++){
                if(i === 0){
                    $buyHide.html('<form onsubmit="return gerIframe(' + a + ');" id="' + $formId + '" action="/transfer/buyLoanTransfer.action" method="post" target="lxb-buy-iframe-' + a + '"></form>');
                }
                if(i === (res.length - 1)){
                    jQuery('#' + $formId).append('<input id="lxb-buy-hide-submit-button-' + a + '" type="submit" value="提交">');
                    break;
                }
                if(i < 2){
                    continue;
                }
                var $input = res[i];
                var inputs = ['agree-contract', 'countRatio', 'couponId', 'currentPrice', 'share', 'transferId'];
                var inattr = jQuery($input).attr('name');
                if(inputs.indexOf(inattr) === -1){
                    continue;
                }
                $input = $input.replace('hidden', 'text');
                if(inattr == 'couponId'){
                    $input = '<input type="hidden" id="getUseCouponId" name="couponId" value="" />';
                }
                jQuery('#' + $formId).append(jQuery($input));
                if(jQuery('#lxb-buy-iframe-' + a) && document.getElementById('lxb-buy-iframe-' + a)){
                    var iframe = document.getElementById('lxb-buy-iframe-' + a);
                    destroyIframe(iframe);
//                    jQuery('#lxb-buy-iframe-' + a).remove();
                }
                jQuery('#lxb-buy-iframe').append('<iframe id="lxb-buy-iframe-' + a + '" name="lxb-buy-iframe-' + a + '"></iframe>');
            }
            var v = canBuyCount>3 ? parseInt(canBuyCount*2/3) : canBuyCount;
            jQuery('input[name="share"]').val(v);
            $buyHide.append('<div id="lxb-buy-captch" onclick="getCaptch()"></div>');
            $buyHide.append(jQuery('#list-item-id' + a).html());
            $buyHide.append('<div id="lxb-buy-captch-button">' + ccstr + ' &nbsp;&nbsp;||&nbsp;&nbsp; 剩余数量：<span id="lxb-buy-hide-id-count">' + maxCount + '</span>');
//            getCaptch();
            jQuery('#' + $formId).find('input').css('width', '100px');
            jQuery('#captcha-input').focus();
            if(autoCommit){
                var $m = parseInt(jQuery('#lxb-min-money').val());
                var $im = parseInt(jQuery('#lxb-user-money').html());
                var $buyCount = parseInt(jQuery('#' + $formId).find('input[name="share"]').val());
                if($m > 0 && $im > $m && $buyCount > 0){
                    jQuery('#lxb-buy-hide-submit-button-' + a).click();
                }
            }
        }
    });
}
function gerIframe(a){
    jQuery('#lxb-buy-iframe-' + a).remove();
    jQuery(jQuery('#lxb-buy-iframe').find('iframe')).each(function(k, v){
        if(jQuery(v).contents().find('body').html() == ""){
            jQuery(v).remove();
        }
    });
    jQuery('#lxb-buy-iframe').append('<iframe id="lxb-buy-iframe-' + a + '" name="lxb-buy-iframe-' + a + '"></iframe>');
    setTimeout(function(){
        var iframe = document.getElementById('lxb-buy-iframe-' + a);
        destroyIframe(iframe);
//        jQuery('#lxb-buy-iframe-' + a).remove();
    }, 30000);
    return true;
}
function getCaptch(){
    var cookies = jQuery('#lxb-buy-sessionid').val();
    if(cookies){
        jQuery.ajax({
            url: 'http://liuxos3.duapp.com/ocrking/ocrking.php',
            type: 'GET',
            data: {cookies: cookies},
            dataType: 'jsonp',
            success: function(ddd){
                jQuery('#lxb-buy-captch').html('<img src="' + ddd.result.ResultList.Item.DesFile + '">');
                jQuery('#captcha-input').val(ddd.result.ResultList.Item.Result);
            }
        });
    }else{
        var d = new Date;
        var t = d.getTime();
        var url = "http://www.renrendai.com/image_https.jsp?_=" + t;
        jQuery('#lxb-buy-captch').html('<img src="' + url + '">');
    }
    jQuery('#captcha-input').focus();
}

function renderUserInfo(){
    lxb_renderUserInfo(1);
}
function setCookie(name, value) {
    var Days = 30; //此 cookie 将被保存 30 天
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/;domain=" + window.location.host;
}

function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
}
function testPng(url, $cookies){
    var cookies = $cookies;
    jQuery.ajax({
        url: url,
        type: 'GET',
        data: {cookies: cookies},
        dataType: 'jsonp',
        success: function(ddd){
//            jQuery('#lxb-user-money').html(ddd.avaliableBalance);
        }
    });
}
/**
 * 销毁iframe，释放iframe所占用的内存。
 * @param iframe 需要销毁的iframe对象
*/
function destroyIframe(iframe){
	//把iframe指向空白页面，这样可以释放大部分内存。
	iframe.src = 'about:blank';
	try{
		iframe.contentWindow.document.write('');
		iframe.contentWindow.document.clear();
	}catch(e){}
	//把iframe从页面移除
	iframe.parentNode.removeChild(iframe);
}

//============================================================================

//#endregion
