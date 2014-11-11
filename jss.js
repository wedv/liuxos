function aaa(a){
    alert('aaa('+a+')'+typeof(jQuery)+typeof($));
    jQuery('#lxb-buy-hide').html('');
    jQuery.ajax({
        url:'http://www.renrendai.com/transfer/loanTransferDetail.action',
        data:{transferId: a},
        dataType:'text',
        success:function(d){
            var re = new RegExp('ui-term-hint [^<]+>', 'ig');
            var ccc = d.match(re);
            console(ccc);
            var re = new RegExp('<input [^>]+>', 'ig');
            var res = d.match(re);
            for(var i=0; i<res.length; i++){
                var $input = res[i];
                console.log($input);
                console.log(jQuery($input));
                $input = $input.replace('hidden', 'text');
                jQuery('#lxb-buy-hide').append(jQuery($input));
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
