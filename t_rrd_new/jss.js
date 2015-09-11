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
