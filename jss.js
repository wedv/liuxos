function aaa(a){
    jQuery('#lxb-buy-hide-id').val(a);
    //alert('aaa('+a+')'+typeof(jQuery)+typeof($));
    jQuery('#lxb-buy-hide').html('');
    jQuery.ajax({
        url:'http://www.renrendai.com/transfer/loanTransferDetail.action',
        data:{transferId: a},
        dataType:'text',
        success:function(d){
            var re = new RegExp('ui-term-hint[^<]+', 'ig');
            var ccc = d.match(re);
            var ccstr = '没有购买数量推荐';
            var cccount = 0;
            if(ccc){
                ccc = ccc[0];
                ccstr = ccc.slice(14);
                var re = new RegExp('[0-9]+', 'ig');
                var cccounts = ccstr.match(re);
                if(cccounts){
                    cccount = parseInt(cccounts[0]);
                }
            }
            console.log(ccc);
            var re = new RegExp('<input [^>]+>', 'ig');
            var res = d.match(re);
            for(var i=0; i<res.length; i++){
                if(i === 0){
                    jQuery('#lxb-buy-hide').html('<form id="lxb-buy-form" action="/transfer/buyLoanTransfer.action" method="post" target="lxb-buy-iframe-' + a + '"></form>');
                }
                if(i === (res.length - 1)){
                    jQuery('#lxb-buy-form').append('<input name="submit" type="submit" value="提交">');
                    break;
                }
                if(i < 2){
                    continue;
                }
                var $input = res[i];
                console.log($input);
                console.log(jQuery($input));
                $input = $input.replace('hidden', 'text');
                jQuery('#lxb-buy-form').append(jQuery($input));
                if(jQuery('#lxb-buy-iframe-' + a)){
                    jQuery('#lxb-buy-iframe-' + a).remove();
                }
                jQuery('#lxb-buy-iframe').append('<iframe id="lxb-buy-iframe-' + a + '" name="lxb-buy-iframe-' + a + '"></iframe>');
            }
            var v = parseInt(cccount*2/3);
            jQuery('input[name="share"]').val(v);
            jQuery('#lxb-buy-hide').append('<div id="lxb-buy-captch"></div>');
            jQuery('#lxb-buy-hide').append('<div id="lxb-buy-captch-button"><button onclick="getCaptch()">刷新验证码</button><br>' + ccstr + '<br>剩余数量：<span id="lxb-buy-hide-id-count">' + cccount + '</span>');
            getCaptch();
            jQuery('#captcha-input').focus();
        }
    });
}

function getCaptch(){
    var d = new Date;
    var t = d.getTime();
    var url = "http://www.renrendai.com/image_https.jsp?_=" + t;
    jQuery('#lxb-buy-captch').html('<img src="' + url + '">');
}

function renderUserInfo(){
    var d = new Date;
    var t = d.getTime();
    var url = "http://www.renrendai.com/getHomePageUserInfo.action?timeout=5000&_=" + t;
    jQuery.ajax({
        url: url,
        dataType: 'json',
        success: function(ddd){
            console.log(ddd);
            jQuery('#lxb-user-money').html(ddd.avaliableBalance);
        }
    });
}
function setCookie(name, value) {
    var Days = 30; //此 cookie 将被保存 30 天
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
}
function testPng(){
    var cookies = document.cookie;
    jQuery.ajax({
        url: 'http://liuxos3.duapp.com/ocrking/ocrking.php',
        type: 'POST',
        data: {cookies: cookies},
        dataType: 'jsonp',
        success: function(ddd){
            console.log(ddd);
//            jQuery('#lxb-user-money').html(ddd.avaliableBalance);
        }
    });
}