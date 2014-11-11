function aaa(a){
    alert('aaa('+a+')'+typeof(jQuery)+typeof($));
    jQuery.ajax({
        url:'http://www.renrendai.com/transfer/loanTransferDetail.action',
        data:{transferId: a},
        dataType:'text',
        success:function(d){
            var re = new RegExp('<input [^>]+', 'i');
            var res = d.match(re);
            console.log(res);
        }
    });
}
