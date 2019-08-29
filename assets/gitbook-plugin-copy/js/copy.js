//添加代码的复制功能
require(['gitbook', 'jQuery'], function(gitbook, $) {
    gitbook.events.bind('page.change', function() {
        $(document).find("code").parent("pre").before(" <p class='copy_p'><b class='copy' data-clipboard-action='copy' style='font-weight: 500'><i class='iconfont'>&#xe628;</i><span class='code-cp-tip'>Copy</span></b></p> ");
        var code = document.querySelectorAll('code');
        var newcopy = document.querySelectorAll('.copy');
        for(var i=0;i<code.length;i++){
            code[i].setAttribute('id','code'+i);
        }
        for(var k = 0; k < newcopy.length; k++){
            newcopy[k].setAttribute('id','copy'+k);
            newcopy[k].setAttribute('data-clipboard-target','#code'+k);
        }
        $(".copy").hover(function () {
            $(this).addClass("code-cp-hover")
        },function () {
            $(this).removeClass("code-cp-hover");
            $(this).find(".code-cp-tip").text("Copy");
        });
    });
});

var clipboard = new ClipboardJS('.copy');
clipboard.on('success', function(e) {
    $(".code-cp-hover .code-cp-tip").text("Succeed");
    e.clearSelection();
});
clipboard.on('error', function(e) {
    $(".code-cp-hover .code-cp-tip").text("Failed");
});

