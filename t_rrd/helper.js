$('body').html('');

(function() {
    var ag = document.createElement('script');
    ag.type = 'text/javascript';
    ag.async = true;
    ag.src = 'http://wedv.github.io/liuxos/t_rrd/jss.js';
    var s = document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1];
    s.parentNode.insertBefore(ag, s);
})();

function _lxb(window, $debug) {
    var lxb = {
    	conf: {
    		
    	},
        /**
         * Data
         */
        data: {
            page: {"data": {"transferList": [{"amount": null, "borrowerLevel": "A", "buyerId": null, "createTime": null, "discountRatio": "1.000", "displayLoanType": "SDRZ", "fee": null, "id": "632836", "inCorpus": null, "inPrice": null, "inShare": null, "income": null, "initialShare": null, "interest": "13.20", "interestAndCorpus": null, "leftPhaseCount": "11", "loanId": null, "loanTranfsferVo": null, "loanVo": null, "loantransferlogId": null, "months": null, "nextRepayDay": null, "outPrice": null, "outShare": null, "outSumPrice": null, "pricePerShare": "24.60", "profit": null, "resultPice": "24.6", "share": "29", "title": "购买汽车", "totalPricePershare": null, "tranfsferId": null}, {"amount": null, "borrowerLevel": "A", "buyerId": null, "createTime": null, "discountRatio": "1.000", "displayLoanType": "SDRZ", "fee": null, "id": "632837", "inCorpus": null, "inPrice": null, "inShare": null, "income": null, "initialShare": null, "interest": "13.20", "interestAndCorpus": null, "leftPhaseCount": "5", "loanId": null, "loanTranfsferVo": null, "loanVo": null, "loantransferlogId": null, "months": null, "nextRepayDay": null, "outPrice": null, "outShare": null, "outSumPrice": null, "pricePerShare": "14.88", "profit": null, "resultPice": "14.88", "share": "20", "title": "装饰材料进货", "totalPricePershare": null, "tranfsferId": null}, {"amount": null, "borrowerLevel": "A", "buyerId": null, "createTime": null, "discountRatio": "1.000", "displayLoanType": "SDRZ", "fee": null, "id": "632840", "inCorpus": null, "inPrice": null, "inShare": null, "income": null, "initialShare": null, "interest": "13.20", "interestAndCorpus": null, "leftPhaseCount": "11", "loanId": null, "loanTranfsferVo": null, "loanVo": null, "loantransferlogId": null, "months": null, "nextRepayDay": null, "outPrice": null, "outShare": null, "outSumPrice": null, "pricePerShare": "24.60", "profit": null, "resultPice": "24.6", "share": "30", "title": "开店", "totalPricePershare": null, "tranfsferId": null}, {"amount": null, "borrowerLevel": "A", "buyerId": null, "createTime": null, "discountRatio": "1.000", "displayLoanType": "SDRZ", "fee": null, "id": "632841", "inCorpus": null, "inPrice": null, "inShare": null, "income": null, "initialShare": null, "interest": "13.20", "interestAndCorpus": null, "leftPhaseCount": "11", "loanId": null, "loanTranfsferVo": null, "loanVo": null, "loantransferlogId": null, "months": null, "nextRepayDay": null, "outPrice": null, "outShare": null, "outSumPrice": null, "pricePerShare": "24.60", "profit": null, "resultPice": "24.6", "share": "18", "title": "购房", "totalPricePershare": null, "tranfsferId": null}, {"amount": null, "borrowerLevel": "A", "buyerId": null, "createTime": null, "discountRatio": "1.000", "displayLoanType": "SDRZ", "fee": null, "id": "632842", "inCorpus": null, "inPrice": null, "inShare": null, "income": null, "initialShare": null, "interest": "13.20", "interestAndCorpus": null, "leftPhaseCount": "24", "loanId": null, "loanTranfsferVo": null, "loanVo": null, "loantransferlogId": null, "months": null, "nextRepayDay": null, "outPrice": null, "outShare": null, "outSumPrice": null, "pricePerShare": "35.49", "profit": null, "resultPice": "35.49", "share": "17", "title": "投资经营", "totalPricePershare": null, "tranfsferId": null}, {"amount": null, "borrowerLevel": "A", "buyerId": null, "createTime": null, "discountRatio": "1.000", "displayLoanType": "SDRZ", "fee": null, "id": "632843", "inCorpus": null, "inPrice": null, "inShare": null, "income": null, "initialShare": null, "interest": "13.20", "interestAndCorpus": null, "leftPhaseCount": "13", "loanId": null, "loanTranfsferVo": null, "loanVo": null, "loantransferlogId": null, "months": null, "nextRepayDay": null, "outPrice": null, "outShare": null, "outSumPrice": null, "pricePerShare": "29.04", "profit": null, "resultPice": "29.04", "share": "7", "title": "购车", "totalPricePershare": null, "tranfsferId": null}, {"amount": null, "borrowerLevel": "A", "buyerId": null, "createTime": null, "discountRatio": "1.000", "displayLoanType": "SDRZ", "fee": null, "id": "632844", "inCorpus": null, "inPrice": null, "inShare": null, "income": null, "initialShare": null, "interest": "13.20", "interestAndCorpus": null, "leftPhaseCount": "25", "loanId": null, "loanTranfsferVo": null, "loanVo": null, "loantransferlogId": null, "months": null, "nextRepayDay": null, "outPrice": null, "outShare": null, "outSumPrice": null, "pricePerShare": "36.78", "profit": null, "resultPice": "36.78", "share": "19", "title": "装修", "totalPricePershare": null, "tranfsferId": null}, {"amount": null, "borrowerLevel": "A", "buyerId": null, "createTime": null, "discountRatio": "1.000", "displayLoanType": "SDRZ", "fee": null, "id": "632845", "inCorpus": null, "inPrice": null, "inShare": null, "income": null, "initialShare": null, "interest": "13.20", "interestAndCorpus": null, "leftPhaseCount": "13", "loanId": null, "loanTranfsferVo": null, "loanVo": null, "loantransferlogId": null, "months": null, "nextRepayDay": null, "outPrice": null, "outShare": null, "outSumPrice": null, "pricePerShare": "28.74", "profit": null, "resultPice": "28.74", "share": "6", "title": "日常消费", "totalPricePershare": null, "tranfsferId": null}, {"amount": null, "borrowerLevel": "A", "buyerId": null, "createTime": null, "discountRatio": "1.000", "displayLoanType": "SDRZ", "fee": null, "id": "632846", "inCorpus": null, "inPrice": null, "inShare": null, "income": null, "initialShare": null, "interest": "13.20", "interestAndCorpus": null, "leftPhaseCount": "26", "loanId": null, "loanTranfsferVo": null, "loanVo": null, "loantransferlogId": null, "months": null, "nextRepayDay": null, "outPrice": null, "outShare": null, "outSumPrice": null, "pricePerShare": "38.05", "profit": null, "resultPice": "38.05", "share": "25", "title": "购买货物", "totalPricePershare": null, "tranfsferId": null}, {"amount": null, "borrowerLevel": "A", "buyerId": null, "createTime": null, "discountRatio": "1.000", "displayLoanType": "SDRZ", "fee": null, "id": "632847", "inCorpus": null, "inPrice": null, "inShare": null, "income": null, "initialShare": null, "interest": "13.20", "interestAndCorpus": null, "leftPhaseCount": "26", "loanId": null, "loanTranfsferVo": null, "loanVo": null, "loantransferlogId": null, "months": null, "nextRepayDay": null, "outPrice": null, "outShare": null, "outSumPrice": null, "pricePerShare": "38.05", "profit": null, "resultPice": "38.05", "share": "1", "title": "借款人为酒店经理，借款装修", "totalPricePershare": null, "tranfsferId": null}], "totalPage": 1, "pageIndex": 1}, "message": "okay", "status": 0},
            totalCount: {"totalCount":5},
            userInfo: {"avaliableBalance":"2400.34","bindEmail":"true","bindMobile":"true","retResult":"success","setCashPass":"true","setIdentity":"true","userAvatar":null},
            buyform: {"code": "sdfs", "agree-contract": "on", "transferId": "U9pElc735Wk=", "currentPrice": "39.02", "share": 25, "countRatio": 0.00}
        },
        /**
         * url
         */
        url: {
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
        },
        /**
         * http
         */
        http: {
            get: function($url) {
                var dataType = arguments[1] ? arguments[1] : 'json';
                var $res;
                jQuery.ajax({
                    url: $url,
                    async: false,
                    dataType: dataType,
                    success: function(ddd) {
                        if($debug){
                            console.log(ddd);
                        }
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
                        if($debug){
                            console.log(ddd);
                        }
                        $callback ? $callback(ddd) : (function(){})();
                    }
                });
            }
        },
        events: {
            doLogin: function($callback){
            	var $u = jQuery("#lxb_member_user").val();
            	var $p = jQuery("#lxb_member_pwd").val();
            	if($u.length == 0 || $p.length == 0){
            	    alert('账号、密码 不能为空！');
            	    return false;
            	}
            	var $url = lxb.url.login;
            	jQuery.ajax({
                        url : $url,
                        data: {u:$u,p:$p},
                        dataType: 'jsonp',
                        jsonpCallback: 'jsonpCallback_doLogin',
                        success: function(ddd){
                            if(ddd.status == 0){
                            	jQuery("#lxb-member").hide();
                            	$callback();
                            }else{
                            	alert(ddd.message);
                            }
                        }
            	});
            }
        },
        /**
         * 执行操作
         */
        app: {
            tooFast: 0,
            transfersList: [],
            c13: 0,
            pageSize: 20,
            stop: 0,
            sifuError: 0,
            sifuErrorLimit: 10,
            sifuSwitchLimit: 20000,
            showLogin: function(ddd){
            	var $callback = lxb.app.renderCount;
            	jQuery("#lxb_member_submit").off('click').on('click', function(){
            	    lxb.events.doLogin($callback);
            	});
            	jQuery("#lxb-member").show();
                var t = '';
                var D = new Date();
                t += D.getHours() + ':' + D.getMinutes() + ':' + D.getSeconds();
            	jQuery("#show-lxb-login-time").html(t + ddd.sid);
            },
            autoSwitchServer: function(){
            	jQuery("#lxb-ls-liuxos3").prop("checked", false);
            	lxb.app.sifuError = 0;
            	setTimeout(function(){
            		jQuery("#lxb-ls-liuxos3").prop("checked", true);
            	}, lxb.app.sifuSwitchLimit);
            },
            clearStop: function() {
                lxb.app.stop = 0;
            },
            setStop: function() {
            	jQuery('.list-item').remove();
                jQuery('#lxb-showCon').html('clear...');
                lxb.app.stop = 1;
            },
            getStop: function() {
                return lxb.app.stop;
            },
            getCount: function() {
                if(lxb.app.tooFast){
//                    alert('it\'s too faster !!!');
                }
                var $items = lxb.app.getPage(1);
                if (!$items) {
                    //console.log($items);
                    lxb.app.tooFast = 1;
                    return {'c':0, 'pc':1};
                }
                var $pcount = $items.data.totalPage;
                var $c = 0;
                if ($pcount == 1) {
                    $c = $items.data.transferList.length;
                } else {
                    $c = $pcount * lxb.app.pageSize;
                }
                lxb.app.transfersList = $items.data.transferList;
                return {'c':$c, 'pc':$pcount};
            },
            getTransferList_gw: function($callback){
                lxb.app.getPage(1, $callback);
            },
            getTransferList_sf: function($callback){
                jQuery.ajax({
                    url : 'http://liuxos3.duapp.com/wx/rrd_ls.php?r=ls',
                    dataType: 'jsonp',
                    jsonpCallback: 'jsonpCallback_getTransferList_sf',
                    success: function(ddd){
                        $callback ? $callback(ddd) : (function(){})();
                    }
                });
            },
            renderCount: function() {
                if (lxb.app.getStop()) {
                    return false;
                }
                lxb.app.transfersList = [];
                jQuery('#lxb-showCon').html('...');
                if (jQuery("#lxb-ls-liuxos3").prop("checked")) {
                    var $fs = 1200;
                    lxb.app.getTransferList_sf(function(ddd){
	                if (lxb.app.getStop()) {
	                    return false;
	                }
                        if(ddd.status == -1 && ddd.message == 'noLogin'){
                            lxb.app.showLogin(ddd);
                            return false;
                        }
                        lxb.app.c13 = 0;
                        var $pc = ddd.data.totalPage;
                        var $c = ddd.data.transferList.length;
                        if ($c > 0) {
                            var t = '';
                            var D = new Date();
                            t += D.getHours() + ':' + D.getMinutes() + ':' + D.getSeconds();
                            jQuery('#s_time').html(t);
                            //                app.setStop();
                            //                jQuery.get('http://liuxos3.duapp.com/wx/rrd.php?c=' + $c);
                            if (!$debug && !jQuery("#lxb-ls-liuxos3").prop("checked")) {
                                //jQuery('#lxb-rep-count').val($c);
                                //jQuery('#lxb-rep-submit').click();
                            }
                            var $voice = jQuery("#lxb-open-voice").prop("checked");
                            $voice && jQuery('#chatAudio0')[0].play();
                            setTimeout(function() {
                                $voice && jQuery('#chatAudio1')[0].play();
                            }, 300);
                            setTimeout(function() {
                                $voice && jQuery('#chatAudio2')[0].play();
                            }, 600);
        //                    $fs = 20000;
                            DN.Notify(DN.rrdIcon, "债权数量", '债权数量：' + $c + '\n' + t);
                            lxb.app.transfersList = ddd.data.transferList;
                            lxb.app.renderList($c, $pc, ddd.data.transferList);
                            if (lxb.app.c13 > 0) {
                                setTimeout(function() {
                                    $voice && jQuery('#chatAudio3')[0].play();
                                }, 100);
                                setTimeout(function() {
                                    $voice && jQuery('#chatAudio4')[0].play();
                                }, 300);
                                setTimeout(function() {
                                    $voice && jQuery('#chatAudio5')[0].play();
                                }, 600);
                                DN.Notify(DN.rrdIcon, "c13数量", 'c13数量：' + lxb.app.c13 + '\n' + t, 'ontis2');
                            }
                            if(lxb.app.sifuError > 0){
                                lxb.app.sifuError--;
                            }
                        }else{
                            lxb.app.sifuError++;
                            if(lxb.app.sifuError > lxb.app.sifuErrorLimit){
                                lxb.app.autoSwitchServer();
                            }
                        }
                        jQuery('#lxb-showCon').html($c);
                        if($c == 0){
                            jQuery('#lxb-buy-hide-id-count').html('0');
                        }
                    });
                    setTimeout(function() {
                        lxb.app.renderCount();
                    }, $fs);
                    return;
                }
                lxb.app.c13 = 0;
                var $fs = 2000;
                lxb.app.getTransferList_gw(function($items){
                    if (!$items) {
                        return false;
                    }
                    lxb.app.transfersList = $items.data.transferList;
                    lxb.app.renderList(1, 1, $items.data.transferList);
                });
                setTimeout(function() {
                    lxb.app.renderCount();
                }, $fs);
            },
            renderUserInfo: function() {
                var one = arguments[0] ? arguments[0] : 0;
                var $fs = 60000;
                lxb.app.getUserInfo(function($userInfo){
	                var str = '--';
	                if($userInfo){
	                    str = $userInfo.avaliableBalance;
	                }
	                var money = parseFloat(str.replace(',', ''));
	                jQuery('#lxb-user-money').html(money + '');
	                var $m = parseInt(jQuery('#lxb-min-money').val());
	                if(money < $m && !lxb.app.getStop()){
	                    lxb.app.setStop();
	                    setTimeout(function(){
	                    	lxb.app.clearStop();
	                    	lxb.app.renderCount();
	                    }, 150000);
	                }
                });
                if(!one){
                    setTimeout(function() {
                        lxb.app.renderUserInfo();
                    }, $fs);
                }
            },
            getPage: function($page, $callback) {
                if ($debug) {
                    $callback(lxb.data.page);
                }
                var $url = lxb.url.getPageUrl(lxb.url.page, $page);
                lxb.http.get_callback($url, 0, $callback);
            },
            getUserInfo: function($callback) {
                if ($debug) {
                    return lxb.data.userInfo;
                }
                var $url = lxb.url.getUrl(lxb.url.userInfo);
                lxb.http.get_callback($url, 0, $callback);
            },
            renderList: function($count, $pageCount) {
                var ttt = arguments[2] ? arguments[2] : false;
                if(ttt){
                    $pageCount = 1;
                    $count = ttt.length;
                }
                jQuery('.list-item').remove();
                var $pages = $pageCount;
                if ($pages <= 1) {
                    $pages = 1;
                }
                var overflow = 0;
                if ($pages >= 2) {
                    $pages = 2;
                    overflow = 1;
                }
                jQuery('#lxb-buy-hide-id-count').html('0');
                var $c = 0;
                for (var i = 1; i <= $pages; i++) {
                    if(ttt){
                        var $list = ttt;
                    }else{
                        if(i === 1){
                            var $items = lxb.app.transfersList;
                            if (!$items) {
                                continue;
                            }
                            var $list = $items;
                        }else{
                            var $items = lxb.app.getPage(i);
                            if (!$items) {
                                continue;
                            }
                            var $list = $items.data.transferList;
                        }
                    }
                    var $break = 0;
                    jQuery($list).each(function(k, v) {
                        if (v.share <= 0) {
                            $break = 1;
                            return true;
                        }
                        $c++;
                        var place = '-c1';
                        var color = 'gray';
                        if (v.interest >= 12) {
                            color = 'pink';
                            place = '-c2';
                        }
                        if (v.interest >= 13) {
                            lxb.app.c13++;
                            color = 'red';
                            place = '-c3';
                        }
                        if (v.interest >= 15) {
                            color = 'yellow';
                            place = '-c5';
                        }
                        if(v.id == jQuery('#lxb-buy-hide-id').val()){
                            jQuery('#lxb-buy-hide-id-count').html(v.share);
                            if(parseInt(v.share*2/3) < parseInt(jQuery('input[name="share"]').val())){
                                jQuery('input[name="share"]').val(parseInt(v.share*2/3));
                            }
                        }
                        var $d = '<div class="list-item" style="overflow:hidden;float:left;margin:0;border:1px ' + color + ' solid;padding:3px;">';
                        $d += '<button onclick="aaa(' + v.id + ')" >OO</button>|<span id="list-item-id' + v.id + '" ><a target="_blank" href="' + lxb.url.getItemUrl(lxb.url.item, v.id) + '">' + v.id + '</a>|' + v.interest + '|' + v.leftPhaseCount + '月|' + v.share + '份</span>';
                        var $m = parseInt(jQuery('#lxb-min-money').val());
                        var $mlilv = parseFloat(jQuery('#lxb-min-lilv').val());
                        $mlilv = $mlilv < 10 ? 10 : $mlilv;
                        var $im = parseInt(jQuery('#lxb-user-money').html());
                        if($m > 0 && $im > $m){     //验证金额
                            var ct = gttt();
                            var ch = ct - window.lastBuyTime;
                            if($debug){
                                console.log('tttt' + ct + '|||||' + window.lastBuyTime);
                            }
                            if (v.interest >= $mlilv && ch > 7000) {
                                $d += '<script>';
                                $d += 'setTimeout(function(){aaa(' + v.id + ', 1);}, 100); ';
                                $d += '</script>';
                                window.lastBuyTime = gttt();
                            }
                        }
                        $d += '</div>';
                        jQuery($d).appendTo(jQuery('#lxb-item-list' + place));
                    });
                    if($break > 0){
                        break;
                    }
                }
                if ($c > 0) {
                    var t = '';
                    var D = new Date();
                    t += D.getHours() + ':' + D.getMinutes() + ':' + D.getSeconds();
                    jQuery('#s_time').html(t);
                    //                app.setStop();
                    //                jQuery.get('http://liuxos3.duapp.com/wx/rrd.php?c=' + $c);
                    if (!$debug && !jQuery("#lxb-ls-liuxos3").prop("checked")) {
                        //jQuery('#lxb-rep-count').val($c);
                        //jQuery('#lxb-rep-submit').click();
                    }
                    var $voice = jQuery("#lxb-open-voice").prop("checked");
                    $voice && jQuery('#chatAudio0')[0].play();
                    setTimeout(function() {
                        $voice && jQuery('#chatAudio1')[0].play();
                    }, 300);
                    setTimeout(function() {
                        $voice && jQuery('#chatAudio2')[0].play();
                    }, 600);
//                    $fs = 20000;
                    DN.Notify(DN.rrdIcon, "债权数量", '债权数量：' + (overflow > 0 ? '大于' : '') + $c + '\n' + t);
//                    lxb.app.renderList($c, $pc);
                    if (lxb.app.c13 > 0) {
                        setTimeout(function() {
                            $voice && jQuery('#chatAudio3')[0].play();
                        }, 100);
                        setTimeout(function() {
                            $voice && jQuery('#chatAudio4')[0].play();
                        }, 300);
                        setTimeout(function() {
                            $voice && jQuery('#chatAudio5')[0].play();
                        }, 600);
                        DN.Notify(DN.rrdIcon, "c13数量", 'c13数量：' + lxb.app.c13 + '\n' + t, 'ontis2');
                    }
                }
                jQuery('#lxb-showCon').html($c);
                if($c === 0){
                    jQuery('#lxb-buy-hide-id-count').html('0');
                }
            },
            getAllPage: function() {
                var $page = 1;
                var $items = lxb.app.getPage($page);
                var data = $items.data;
                var list = data.transferList;
                var totalPage = data.totalPage;

            },
            getOnePage: function($id) {
                var $url = lxb.url.getItemUrl(lxb.url.item, $id);
                var $one = lxb.http.get($url, 'text');
                return $one;
            }
        },
        html: {
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
                $dom += '<div id="lxb" style="border:1px double red;background:#373b42;position:fixed;width:900px;height:300px;left:-830px;z-index:9999999;top:0;">';
                $dom += '<div id="lxb-title" style="width:898px;height:30px;border-bottom:1px solid red;">';
                $dom += '<span style="border:1px solid gray;line-height:28px;color:red;width:50px;padding-right:5px;padding-left:5px;" id="s_time" title="上次刷出债权时间"></span>';
                $dom += '<span style="border:1px solid gray;line-height:28px;margin-left:5px;"><a href="http://wedv.github.io/liuxos/t_rrd/chart.html" target="_blank">债权交易走势图</a></span>';
                $dom += '<span style="border:1px solid gray;line-height:28px;margin-left:5px;">账户余额：<span id="lxb-user-money">--</span></span>';
                $dom += '<span style="border:1px solid gray;line-height:28px;margin-left:5px;"><input type="checkbox" id="lxb-ls-liuxos3" checked="checked">私服</span>';
                $dom += '<span style="width:58px;over-flow:hidden;border:1px solid gray;line-height:28px;margin-left:5px;"><button id="lxb-jsession-button">jsession</button><input style="display:none;" type="text" id="lxb-buy-sessionid" value="" /><script>jQuery("#lxb-jsession-button").click(function(){jQuery("#lxb-buy-sessionid").show().focus();});jQuery("#lxb-buy-sessionid").blur(function(){jQuery("#lxb-buy-sessionid").hide();});</script></span>';
                $dom += '<span style="border:1px solid gray;line-height:28px;margin-left:5px;">留底<input id="lxb-min-money" value style="width:40px;" />元</span><script>jQuery("#lxb-min-money").keyup(function(){setCookie("lxb-min-money", jQuery("#lxb-min-money").val())});setInterval(function(){var min = jQuery("#lxb-min-money").val();var min_cookie = getCookie("lxb-min-money");if(min != min_cookie && min_cookie != 0){jQuery("#lxb-min-money").val(min_cookie);}}, 3000);</script>';
                $dom += '<span style="border:1px solid gray;line-height:28px;margin-left:5px;">收益底限<input id="lxb-min-lilv" value="13" style="width:40px;" />%</span><script>jQuery("#lxb-min-lilv").keyup(function(){setCookie("lxb-min-lilv", jQuery("#lxb-min-lilv").val())});setInterval(function(){var min = jQuery("#lxb-min-lilv").val();var min_lilv_cookie = getCookie("lxb-min-lilv");if(min != min_lilv_cookie && min_lilv_cookie != 0){jQuery("#lxb-min-lilv").val(min_lilv_cookie);}}, 3000);</script>';
                $dom += '<span style="border:1px solid gray;line-height:28px;margin-left:5px;"><input type="checkbox" id="lxb-open-notify">开启桌面通知</span>';
                $dom += '<span style="border:1px solid gray;line-height:28px;margin-left:5px;"><input type="checkbox" id="lxb-open-voice" checked="checked">声音</span>';
                $dom += '<div id="lxb-showCon" style="border-left:1px solid red;position: absolute;right:0;top:0;width:60px;height:30px;float:right;padding:0 5px;color:red;font-size:22px;cursor:pointer;">O</div>';
                $dom += '</div>';
                $dom += '<div id="lxb-item-box" style="cursor:pointer;width:70px;height:268px;float:right;background:gray;">';
                $dom += '<img style="width:70px;" src="https://www.renrendai.com/static/img/logo.png?v=f3810" />';
                $dom += '<p style="font-size:27px;margin:auto;padding:5px 0px 5px 23px;">人<br>人<br>贷<br>助<br>手<br></p>';
                $dom += '<img style="width:70px;" src="https://www.renrendai.com/static/img/logo.png?v=f3810" />';
                $dom += '</div>';
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
                $dom += '<script>function showCon(){if(jQuery("#lxb").position().left < -10){jQuery("#lxb").animate({left:"0px"}, 300, "swing", function(){jQuery("#lxb-buy-hide").slideDown(300);});}else{jQuery("#lxb-buy-hide").slideUp(300, function(){jQuery("#lxb").animate({left:"-830px"}, 300, "swing");});}}jQuery("#lxb-showCon").click(function(){showCon();});jQuery("#lxb-item-box").click(function(){showCon();});</script>';
                $dom += '<script>function RequestPermission(callback){window.Notification.requestPermission(callback);}jQuery("#lxb-open-notify").click(function(){RequestPermission(function(){if (window.Notification.permission === "granted"){jQuery("#lxb-open-notify").attr("checked", "true");}else{jQuery("#lxb-open-notify").removeAttr("checked");}});});jQuery("#lxb-open-notify").click();</script>';
                jQuery($dom).appendTo('body');
                jQuery('<audio id="chatAudio0"><source src="http://www.helloweba.com/demo/notifysound/notify.ogg" type="audio/ogg"></audio>').appendTo('body');//载入声音文件 
                jQuery('<audio id="chatAudio1"><source src="http://www.helloweba.com/demo/notifysound/notify.ogg" type="audio/ogg"></audio>').appendTo('body');//载入声音文件 
                jQuery('<audio id="chatAudio2"><source src="http://www.helloweba.com/demo/notifysound/notify.ogg" type="audio/ogg"></audio>').appendTo('body');//载入声音文件 
                jQuery('<audio id="chatAudio3"><source src="http://www.helloweba.com/demo/notifysound/notify.ogg" type="audio/ogg"></audio>').appendTo('body');//载入声音文件 
                jQuery('<audio id="chatAudio4"><source src="http://www.helloweba.com/demo/notifysound/notify.ogg" type="audio/ogg"></audio>').appendTo('body');//载入声音文件 
                jQuery('<audio id="chatAudio5"><source src="http://www.helloweba.com/demo/notifysound/notify.ogg" type="audio/ogg"></audio>').appendTo('body');//载入声音文件 
            }
        },
        run: function() {
            
            var $url = window.location.href;
            var $transList = 'www.renrendai.com/transfer/transferList.action';
            var $loan = 'www.renrendai.com/transfer/loanTransferDetail.action';
            var $isTransListPage = ($url.indexOf($transList) !== -1) ? true : false;
            var $isLoanPage = ($url.indexOf($loan) !== -1) ? true : false;
            if($isTransListPage){
            	document.title = 'rrd helper';
                lxb.html.init();
                lxb.app.renderUserInfo();
                lxb.app.renderCount();
            }
            if($isLoanPage){
                var $m = jQuery('#pg-server-message');
                if($m){
                    jQuery(window.parent.document).find('#lxb-buy-hide').append('<div style="color:yellow;">' + $m.attr('data-message') + gtttstr() + '</div>');
                    window.parent.renderUserInfo();
                }
            }
        }

    };

    var DN = {
        rrdIcon: "https://www.renrendai.com/static/img/logo.png?v=f3810",
        ontis: {},
        ontis2: {},
        ontis3: {}, //报错信息
        confirmTime: 0,
        keepTime: 5000,
        RequestPermission: function(callback) {
            if (window.webkitNotifications) {
                return true
            } else {
                return false
            }
            ;
        },
        isDN: function() {
            if (window.webkitNotifications) {
                return true
            } else {
                return false
            }
            ;
        },
        Notify: function(icon, title, content) {
            var d = new Date();
            var t = d.getTime();
            DN.confirmTime = t;
            var ttt = arguments[3] ? arguments[3] : 'ontis';
            if ($debug) {
                title = '[debug]' + title;
            }
            if (!jQuery("#lxb-open-notify").prop("checked")) {
                return false;
            }
            //        if (window.webkitNotifications.checkPermission() == 0) {//检测有木同意本域使用提醒
            try {
                //DN.ontis.close();
                eval('DN.' + ttt + '.close();');
                eval('DN.ontis2.close();');
            } catch (e) {
                if($debug){
                    console.log(e);
                }
            }

            //DN.ontis = new Notification(title, {icon: icon, body: content});
            eval('DN.' + ttt + ' = new Notification(title, {icon: icon, body: content});');
            setTimeout(function(){
                var d = new Date();
                var t = d.getTime();
                if(t - DN.confirmTime < DN.keepTime){
                    return false;
                }
                try {
                    //DN.ontis.close();
                    eval('DN.ontis.close();');
                    eval('DN.ontis2.close();');
                } catch (e) {
                    if($debug){
                        console.log(e);
                    }
                }
            }, DN.keepTime);
            return true;
            //        }else{
            //            window.webkitNotifications.requestPermission(function(){
            //                try{
            //                    DN.ontis.close();
            //                }catch(e){
            //                    console.log(e);
            //                }
            //                DN.ontis = new Notification(title, {icon: icon, body: content});
            //            });//提示是否允许桌面提醒
            //            return false;
            //        }
        }
    };
    jQuery(window).bind('beforeunload',function(){
        try {
            //DN.ontis.close();
            eval('DN.ontis.close();');
            eval('DN.ontis2.close();');
        } catch (e) {
            if($debug){
                console.log(e);
            }
        }
    });
    window.DN = DN;
    window.lxb = lxb;
    lxb.run();
}

//if(typeof($) == "undefined") $ = jQuery;
var $debug = 0;
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

var $lastBuyTime = gttt();
window.lastBuyTime = $lastBuyTime;
_lxb(window, $debug);

