
var lxb_app = {
    tooFast: 0,
    transfersList: [],
    c13: 0,
    pageSize: 20,
    stop: 0,
    sifuError: 0,
    sifuErrorLimit: 10,
    sifuSwitchLimit: 20000,
    autoSwitchServer: function(){
        jQuery("#lxb-ls-liuxos3").prop("checked", false);
        lxb_app.sifuError = 0;
        setTimeout(function(){
            jQuery("#lxb-ls-liuxos3").prop("checked", true);
        }, lxb_app.sifuSwitchLimit);
    },
    clearStop: function() {
        lxb_app.stop = 0;
        lxb_get_list_from_server();
    },
    setStop: function() {
        jQuery('.list-item').remove();
        jQuery('#lxb-showCon').html('clear...');
        lxb_app.stop = 1;
    },
    getStop: function() {
        return lxb_app.stop;
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
    login: 'http://liuxos3.duapp.com/wx/rrd_ls.php?r=login',
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
        $dom += '<div style="border:1px double red;background:rgb(163, 199, 252);margin:5px;text-align: center;">登录</div>';
        $dom += '<div style="text-align: center;line-height: 40px;margin-top: 20px;">';
        $dom += '账号：<input id="lxb_member_user" /><br />';
        $dom += '密码：<input type="password" id="lxb_member_pwd" /><br />';
        $dom += '<input type="button" id="lxb_member_submit" value="登录" />';
        $dom += '<p style="line-height:14px;">使用此工具需要助手账号，申请账号请联系QQ：770977802</p>';
        $dom += '<p id="show-lxb-login-time" style="line-height:14px;margin-top:5px;border-top:1px solid red"></p>';
        $dom += '</div>';
        $dom += '</div>';
        
        $dom += '<div id="lxb" style="border:1px double red;background:#373b42;position:fixed;width:120px;height:auto;z-index:9999999;top:0;left:0;">';
        $dom += '<span>账户余额：<span id="lxb-user-money">--</span></span>';
        $dom += '<br><span><input type="checkbox" id="lxb-ls-liuxos3" checked="checked">私服</span>';
        $dom += '<br><span>留底<input id="lxb-min-money" class="lxb-conf" value style="width:40px;" />元</span>';
        $dom += '<br><span>收益底限<input id="lxb-min-lilv" class="lxb-conf" value="13" style="width:40px;" />%</span>';
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
        $dom += '<form style="display:none;" action="http://liuxos3.duapp.com/wx/rrd_ls.php" method="get" target="lxb-rep-iframe">';
        $dom += '<input type="text" id="lxb-rep-count" name="c" value="0">';
        $dom += '<input type="text" name="r" value="c">';
        $dom += '<input type="submit" id="lxb-rep-submit" value="submit">';
        $dom += '</form>';
        $dom += '<iframe name="lxb-rep-iframe" style="display:none;"></iframe>';
        $dom += '<div id="lxb-buy-iframe" name="lxb-buy-iframe" style="display:none;"></div>';
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

var lxb_renderUserInfo = function() {
    var one = arguments[0] ? arguments[0] : 0;
    var $fs = 60000;
    lxb_http.get_callback(lxb_url.getUrl(lxb_url.userInfo), 0, function($userInfo){
        var str = '--';
        if($userInfo){
            str = $userInfo.avaliableBalance;
        }
        var money = parseFloat(str.replace(',', ''));
        jQuery('#lxb-user-money').html(money + '');
        var $m = parseInt(jQuery('#lxb-min-money').val());
        if(money < $m && !lxb_app.getStop()){
            lxb_app.setStop();
            setTimeout(function(){
                lxb_app.clearStop();
            }, 150000);
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
    var $isTransListPage = ($url.indexOf($transList) !== -1) ? true : false;
    var $isLoanPage = ($url.indexOf($loan) !== -1) ? true : false;
    if($isTransListPage){
        document.title = 'rrd helper';
        jQuery('body').html('');
        lxb_html.init();
        lxb_renderUserInfo();
        setInterval(lxb_get_list_from_server, 1200);
        setInterval(lxb_use_list, 1000);
        return;
    }
    if($isLoanPage){
        var $m = jQuery('#pg-server-message');
        if($m){
            jQuery(window.parent.document).find('#lxb-buy-hide').append('<div style="color:yellow;">' + $m.attr('data-message') + gtttstr() + '</div>');
            window.parent.renderUserInfo();
        }
        return;
    }
    jQuery('<div style="background:white;text-align:center;left:0;z-index:99999999;top:0;position:fixed;width:200px;height:30px;line-height:30px;border:1px solid red;"><a href="http://www.renrendai.com/getHomePageUserInfo.action">人人贷助手</a></div>').appendTo('body');
};

var lxb_getTransferList_sf = function($callback){
    jQuery.ajax({
        url : 'http://liuxos3.duapp.com/wx/rrd_ls.php?r=ls',
        dataType: 'jsonp',
        success: function(ddd){
            $callback ? $callback(ddd) : (function(){})();
        }
    });
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
};
var lxb_doLogin = function($callback){
    var $u = jQuery("#lxb_member_user").val();
    var $p = jQuery("#lxb_member_pwd").val();
    if($u.length == 0 || $p.length == 0){
        alert('账号、密码 不能为空！');
        return false;
    }
    var $url = 'http://liuxos3.duapp.com/wx/rrd_ls.php?r=login';
    jQuery.ajax({
            url : $url,
            data: {u:$u,p:$p},
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
	
}

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
    lxb_getTransferList_sf(function(ddd){
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
    });
};
var lxb_use_time = 0;
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
                if(!window.lastBuyTime){
                    window.lastBuyTime = 0;
                }
                var ch = ct - window.lastBuyTime;
                if (v.interest >= $mlilv && ch > 7000) {
                    aaa(v.id, 1);
                    window.lastBuyTime = gttt();
                }
            }
        });
    }
};
//setTimeout(lxb_run, 1000);


var need_load = ['jss'];
var need_load_src = {
    'jss': 'http://wedv.github.io/liuxos/t_rrd_new/jss.js'};
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