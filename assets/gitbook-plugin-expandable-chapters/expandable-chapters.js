//重写js代码，解决原来只能点击下拉按钮才能收起的功能，增加在打开一个ul的时候，会关闭其他ul。

require(['gitbook', 'jQuery'], function(gitbook, $) {
    var EXPANDED_CLASSNAME = 'expanded',
        CHAPTER = '.chapter',
        ARTICLES = '.articles',
        TRIGGER_TEMPLATE = '<i class="exc-trigger fa"></i>';
    var init = function () {
        $(ARTICLES).parent(CHAPTER).children('a,span').append(TRIGGER_TEMPLATE);
        collapseAll();
        expandUntil($(CHAPTER + '.active'));
    };

    var collapseAll = function(){
        $(CHAPTER + '.' + EXPANDED_CLASSNAME).removeClass(EXPANDED_CLASSNAME);
    };

    var expandUntil = function($chapter){
        var $chapters_to_expand = $chapter.parents(CHAPTER).add($chapter);
        $chapters_to_expand.addClass(EXPANDED_CLASSNAME);
    };

    gitbook.events.bind('page.change', function() {
        init();
        $(ARTICLES).parent(CHAPTER).children('span').on('click',function () {
            collapseAll();
            $(CHAPTER).removeClass('active');
            $(this).closest(CHAPTER).addClass('active');
            expandUntil($(CHAPTER + '.active'));
        })
        $(CHAPTER).children('a').on('click',function () {
            collapseAll();
            $(CHAPTER).removeClass('active');
            $(this).closest(CHAPTER).addClass('active');
            expandUntil($(CHAPTER + '.active'));
        })
    });
});