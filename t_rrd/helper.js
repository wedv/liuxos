function lxb(window, $debug) {
    var lxb = {
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
                        console.log(ddd);
                        $res = ddd;
                    }
                });
                return $res;
            }
        },
        /**
         * 执行操作
         */
        app: {
            c13: 0,
            pageSize: 20,
            stop: 0,
            clearStop: function() {
                lxb.app.stop = 0;
            },
            setStop: function() {
                jQuery('#lxb-item-list').html('');
                jQuery('#lxb-showCon').html('clear...');
                lxb.app.stop = 1;
            },
            getStop: function() {
                return lxb.app.stop;
            },
            getCount: function() {
                var $items = lxb.app.getPage(1);
                if (!$items) {
                    return {'c':0, 'pc':1};
                }
                var $pcount = $items.data.totalPage;
                var $c = 0;
                if ($pcount == 1) {
                    $c = $items.data.transferList.length;
                } else {
                    $c = $pcount * lxb.app.pageSize;
                }
                return {'c':$c, 'pc':$pcount};
            },
            renderCount: function() {
                if (jQuery("#lxb-ls-liuxos3").prop("checked")) {
                    jQuery.ajax({
                        url : 'http://liuxos3.duapp.com/wx/rrd_ls.php?r=ls',
                        dataType: 'jsonp',
                        success: function(ddd){
                            lxb.app.c13 = 0;
                            var $fs = 3000;
                            if (lxb.app.getStop()) {
                                return false;
                            }
                            jQuery('#lxb-showCon').html('...');
                            var $pc = ddd.data.totalPage;
                            var $c = ddd.data.transferList.length;
                            if ($c > 0) {
                                var t = '';
                                var D = new Date();
                                t += D.getHours() + ':' + D.getMinutes() + ':' + D.getSeconds();
                                jQuery('#s_time').html(t);
                                //                app.setStop();
                                //                jQuery.get('http://liuxos3.duapp.com/wx/rrd.php?c=' + $c);
                                if (!$debug) {
                                    jQuery('#lxb-rep-count').val($c);
                                    jQuery('#lxb-rep-submit').click();
                                }
                                jQuery('#chatAudio0')[0].play();
                                setTimeout(function() {
                                    jQuery('#chatAudio1')[0].play();
                                }, 300);
                                setTimeout(function() {
                                    jQuery('#chatAudio2')[0].play();
                                }, 600);
            //                    $fs = 20000;
                                DN.Notify(DN.rrdIcon, "债权数量", '债权数量：' + $c + '\n' + t);
                                lxb.app.renderList($c, $pc, ddd.data.transferList);
                                if (lxb.app.c13 > 0) {
                                    setTimeout(function() {
                                        jQuery('#chatAudio3')[0].play();
                                    }, 100);
                                    setTimeout(function() {
                                        jQuery('#chatAudio4')[0].play();
                                    }, 300);
                                    setTimeout(function() {
                                        jQuery('#chatAudio5')[0].play();
                                    }, 600);
                                    DN.Notify(DN.rrdIcon, "c13数量", 'c13数量：' + lxb.app.c13 + '\n' + t, 'ontis2');
                                }
                            }
                            jQuery('#lxb-showCon').html($c);
                            if($c == 0){
                                jQuery('#lxb-buy-hide-id-count').html('0');
                            }
                            setTimeout(function() {
                                lxb.app.renderCount();
                            }, $fs);
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown){
                            DN.Notify(DN.rrdIcon, 'liuxos3 ls error \n' + t, 'ontis3');
                            setTimeout(function() {
                                lxb.app.renderCount();
                            }, $fs);
                        }
                    });
                    return;
                }
                lxb.app.c13 = 0;
                var $fs = 3000;
                if (lxb.app.getStop()) {
                    return false;
                }
                jQuery('#lxb-showCon').html('...');
                var $dc = lxb.app.getCount();
                var $pc = $dc.pc;
                var $c = $dc.c;
                if($c > 60){
                    $fs += 2000;
                }
                if($c > 120){
                    $fs += 2000;
                }
                if($c > 220){
                    $fs += 2000;
                }
                if($c > 320){
                    $fs += 2000;
                }
                if($c > 520){
                    $fs += 4000;
                }
                if ($c > 0) {
                    var t = '';
                    var D = new Date();
                    t += D.getHours() + ':' + D.getMinutes() + ':' + D.getSeconds();
                    jQuery('#s_time').html(t);
                    //                app.setStop();
                    //                jQuery.get('http://liuxos3.duapp.com/wx/rrd.php?c=' + $c);
                    if (!$debug) {
                        jQuery('#lxb-rep-count').val($c);
                        jQuery('#lxb-rep-submit').click();
                    }
                    jQuery('#chatAudio0')[0].play();
                    setTimeout(function() {
                        jQuery('#chatAudio1')[0].play();
                    }, 300);
                    setTimeout(function() {
                        jQuery('#chatAudio2')[0].play();
                    }, 600);
//                    $fs = 20000;
                    DN.Notify(DN.rrdIcon, "债权数量", '债权数量：' + $c + '\n' + t);
                    lxb.app.renderList($c, $pc);
                    if (lxb.app.c13 > 0) {
                        setTimeout(function() {
                            jQuery('#chatAudio3')[0].play();
                        }, 100);
                        setTimeout(function() {
                            jQuery('#chatAudio4')[0].play();
                        }, 300);
                        setTimeout(function() {
                            jQuery('#chatAudio5')[0].play();
                        }, 600);
                        DN.Notify(DN.rrdIcon, "c13数量", 'c13数量：' + lxb.app.c13 + '\n' + t, 'ontis2');
                    }
                }
                jQuery('#lxb-showCon').html($c);
                if($c == 0){
                    jQuery('#lxb-buy-hide-id-count').html('0');
                }
                setTimeout(function() {
                    lxb.app.renderCount();
                }, $fs);
            },
            renderUserInfo: function() {
                var one = arguments[0] ? arguments[0] : 0;
                var $fs = 60000;
                var $userInfo = lxb.app.getUserInfo();
                var str = '--';
                if($userInfo){
                    str = $userInfo.avaliableBalance;
                }
                jQuery('#lxb-user-money').html(str);
                if(!one){
                    setTimeout(function() {
                        lxb.app.renderUserInfo();
                    }, $fs);
                }
            },
            getPage: function($page) {
                if ($debug) {
                    return lxb.data.page;
                }
                var $url = lxb.url.getPageUrl(lxb.url.page, $page);
                var $items = lxb.http.get($url);
                //            var $items = data.page;
                //            var data = $items.data;
                //            var list = data.transferList;
                //            var totalPage = data.totalPage;
                return $items;
            },
            getUserInfo: function() {
                if ($debug) {
                    return lxb.data.userInfo;
                }
                var $url = lxb.url.getUrl(lxb.url.userInfo);
                var $userInfo = lxb.http.get($url);
                return $userInfo;
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
                jQuery('#lxb-buy-hide-id-count').html('0');
                for (var i = 1; i <= $pages; i++) {
                    if(ttt){
                        var $list = ttt;
                    }else{
                        var $items = lxb.app.getPage(i);
                        if (!$items) {
                            continue;
                        }
                        var $list = $items.data.transferList;
                    }
                    jQuery($list).each(function(k, v) {
                        if (v.share <= 0) {
                            return true;
                        }
                        var place = '';
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
                            if(parseInt(v.share*2/3) < jQuery('input[name="share"]').val()){
                                jQuery('input[name="share"]').val(parseInt(v.share*2/3));
                            }
                        }
                        var $d = '<div class="list-item" style="overflow:hidden;float:left;margin:0;border:1px ' + color + ' solid;padding:3px;">';
                        $d += '<button onclick="aaa(' + v.id + ')" >OO</button>|<span id="list-item-id' + v.id + '" ><a target="_blank" href="' + lxb.url.getItemUrl(lxb.url.item, v.id) + '">' + v.id + '</a>|' + v.interest + '|' + v.leftPhaseCount + '月|' + v.share + '份</span>';
                        $d += '</div>';
                        jQuery($d).appendTo(jQuery('#lxb-item-list' + place));
                    });
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
                var $dom = '<div id="lxb" style="border:1px double red;background:#373b42;position:fixed;width:960px;height:500px;left:-830px;z-index:9999999;top:0;">';
                $dom += '<div id="lxb-title" style="width:958px;height:30px;border-bottom:1px solid red;"><div id="s_time" style="color:red;"></div>';
                $dom += '<div style="border:1px solid gray;line-height:28px;margin-left:40%;position: absolute;top:0;"><a href="http://liuxos3.duapp.com/wx/chart" target="_blank">债权交易走势图</a></div>';
                $dom += '<div style="border:1px solid gray;line-height:28px;margin-left:53%;position: absolute;top:0;"><p>账户余额：<span id="lxb-user-money">--</span></p></div>';
                $dom += '<div style="border:1px solid gray;line-height:28px;position: absolute;right:240px;top:0;"><input type="checkbox" id="lxb-ls-liuxos3">私服</div>';
                $dom += '<div style="width:58px;over-flow:hidden;border:1px solid gray;line-height:28px;margin-left:20%;position: absolute;top:0;"><button id="lxb-jsession-button">jsession</button><input style="display:none;" type="text" id="lxb-buy-sessionid" value="" /><script>jQuery("#lxb-jsession-button").click(function(){jQuery("#lxb-buy-sessionid").show().focus();});jQuery("#lxb-buy-sessionid").blur(function(){jQuery("#lxb-buy-sessionid").hide();});</script></div>';
                $dom += '<div style="border:1px solid gray;line-height:28px;position: absolute;right:140px;top:0;"><input type="checkbox" id="lxb-open-notify">开启桌面通知</div>';
                $dom += '<div id="lxb-showCon" style="border-left:1px solid red;position: absolute;right:0;top:0;width:120px;height:30px;float:right;padding:0 5px;color:red;font-size:22px;cursor:pointer;">O</div>';
                $dom += '</div>';
                $dom += '<div id="lxb-item-box" style="cursor:pointer;width:130px;height:468px;float:right;background:gray;">';
                $dom += '<img style="width:118px;" src="https://www.renrendai.com/static/img/logo.png?v=f3810" />';
                $dom += '<p style="font-size:45px;margin:auto;padding:15px 0px 15px 40px;">人<br>人<br>贷<br>助<br>手<br></p>';
                $dom += '<img style="width:118px;" src="https://www.renrendai.com/static/img/logo.png?v=f3810" />';
                $dom += '</div>';
                $dom += '<div id="lxb-item-list" style="overflow-y:auto;width:828px;height:467px;border:1px solid red;">';
                $dom += '<div id="lxb-item-list-c5">';
                $dom += '</div>';
                $dom += '<div id="lxb-item-list-c3">';
                $dom += '</div>';
                $dom += '<div id="lxb-item-list-c2">';
                $dom += '</div>';
                $dom += '</div>';
                $dom += '<form style="display:none;" action="http://liuxos3.duapp.com/wx/rrd.php" method="get" target="lxb-rep-iframe">';
                $dom += '<input type="text" id="lxb-rep-count" name="c" value="0">';
                $dom += '<input type="submit" id="lxb-rep-submit" value="submit">';
                $dom += '</form>';
                $dom += '<iframe name="lxb-rep-iframe" style="display:none;"></iframe>';
                $dom += '<div id="lxb-buy-iframe" name="lxb-buy-iframe" style="display:none;"></div>';
                $dom += '<input type="hidden" id="lxb-buy-hide-id" value="0">';
                $dom += '<div id="lxb-buy-hide" name="lxb-buy-hide" style="display:none;margin:-1px;padding:0;width:960px;height:200px;border:1px double red;background:#373b42;"></div>';
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
                lxb.html.init();
                lxb.app.renderCount();
                lxb.app.renderUserInfo();
            }
            if($isLoanPage){
                var $m = jQuery('#pg-server-message');
                if($m){
                    jQuery(window.parent.document).find('#lxb-buy-hide').append('<div style="color:yellow;">' + $m.attr('data-message') + '</div>');
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
        keepTime: 30000,
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
                console.log(e);
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
                    console.log(e);
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

    lxb.run();
}

//if(typeof($) == "undefined") $ = jQuery;
var $debug = 0;
lxb(window, $debug);


(function() {
    var ag = document.createElement('script');
    ag.type = 'text/javascript';
    ag.async = true;
    ag.src = 'http://wedv.github.io/liuxos/t_rrd/jss.js';
    var s = document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1];
    s.parentNode.insertBefore(ag, s);
})();
