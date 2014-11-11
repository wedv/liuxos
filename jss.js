function aaa(a){
    //alert('aaa('+a+')'+typeof(jQuery)+typeof($));
    jQuery('#lxb-buy-hide').html('');
    jQuery.ajax({
        url:'http://www.renrendai.com/transfer/loanTransferDetail.action',
        data:{transferId: a},
        dataType:'text',
        success:function(d){
            var re = new RegExp('ui-term-hint[^<]+>', 'ig');
            var ccc = d.match(re);
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
                jQuery('#lxb-buy-hide').append('<iframe id="lxb-buy-iframe-' + a + '" name="lxb-buy-iframe-' + a + '"></iframe>');
            }
            jQuery('#lxb-buy-hide').append('<div id="lxb-buy-captch"></div>');
            jQuery('#lxb-buy-hide').append('<div id="lxb-buy-captch-button"><button onclick="getCaptch()">刷新验证码</button></div>');
            getCaptch();
        }
    });
}

function getCaptch(){
    var d = new Date;
    var t = d.getTime();
    var url = "http://www.renrendai.com/image_https.jsp?_=" + t;
    jQuery('#lxb-buy-captch').html('<img src="' + url + '">');
}
