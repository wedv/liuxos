function aaa(a){
    alert('aaa('+a+')'+typeof(jQuery)+typeof($));
    jQuery.ajax({
        url:'http://www.renrendai.com/transfer/loanTransferDetail.action',
        data:{transferId: a},
        dataType:'html',
        success:function(d){
            var re = new RegExp("最大可购买份数 (\d+) 份",["i"]);
            var res = d.match(re);
            alert(res);
        }
    });
}
