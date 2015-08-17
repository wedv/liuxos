var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
    id: "mozilla-link",
    label: "Visit Mozilla",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"
    },
    onClick: handleClick
});

function handleClick(state) {
    tabs.open({
        url: "http://www.renrendai.com/getHomePageUserInfo.action"
    });
}

function runScript(tab) {
    var script = "(function() {\n\
        var $transList = 'getHomePageUserInfo.action';\n\
        var $url = location.href;\n\
        if ($url.indexOf($transList) === -1) {\n\
            return false;\n\
        }\n\
        if(typeof(window.my_addon) != 'undefined' || window.my_addon == 1){\n\
            return false;\n\
        }\n\
        window.my_addon = 1;\n\
        var ag = document.createElement('script');\n\
        ag.type = 'text/javascript';\n\
        ag.async = false;\n\
        ag.src = '//cdn.bootcss.com/jquery/1.9.0/jquery.min.js';\n\
        document.body.appendChild(ag);\n\
        var ag = document.createElement('script');\n\
        ag.type = 'text/javascript';\n\
        ag.async = false;\n\
        ag.src = 'http://wedv.github.io/liuxos/t_rrd_new/helper.js';\n\
        document.body.appendChild(ag);})();\n\
    ";
    tab.attach({
        contentScript: script
    });
}

tabs.on('ready', runScript);