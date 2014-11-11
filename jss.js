function aaa(a){
    alert('aaa('+a+')'+typeof(jQuery)+typeof($));
    jQuery('#lxb-buy-hide').html('');
    jQuery.ajax({
        url:'http://www.renrendai.com/transfer/loanTransferDetail.action',
        data:{transferId: a},
        dataType:'text',
        success:function(d){
            var re = new RegExp('<input [^>]+>', 'ig');
            var res = d.match(re);
            for(var i=0; i<res.length; i++){
                var $input = res[i];
                console.log($input);
                console.log(jQuery($input));
                $input = $input.replace('hidden', 'text');
                jQuery('#lxb-buy-hide').append(jQuery($input));
            }
        }
    });
}
