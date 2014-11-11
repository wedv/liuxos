function aaa(a){
    alert('aaa('+a+')'+typeof(jQuery)+typeof($));
    jQuery.ajax({
        url:'http://www.renrendai.com/transfer/loanTransferDetail.action',
        data:{transferId: a},
        dataType:'text',
        success:function(d){
            var re = new RegExp('<input [^>]+>', 'ig');
            var res = d.match(re);
            for(var i=0; i<res.length; i++){
                if(jQuery(res[i]).attr('type') == 'hidden'){
                    jQuery(res[i]).attr('type', 'text');
                }
                jQuery('#lxb-buy-hide').append(res[i]);
            }
        }
    });
}
