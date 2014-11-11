function aaa(a){
    alert('aaa('+a+')'+typeof(jQuery)+typeof($));
    jQuery.ajax({
        url:'http://www.renrendai.com/transfer/loanTransferDetail.action',
        data:{transferId: a},
        dataType:'text',
        success:function(d){
            var inputs = jQuery(d).find('input');
            for(var i=0; i<inputs.length; i++){
                if(jQuery(inputs[i]).attr('type') == 'hidden'){
                    inputs[i].attr('type', 'text');
                }
                jQuery('#lxb-buy-hide').append(inputs[i]);
            }
        }
    });
}
