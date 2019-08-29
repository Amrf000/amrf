CDHtmlDialog总结:

1.  适用于运行于windows环境下的工具；
    
2.  比较适合于对旧的mfc工具进行轻量级的升级，
    
    因为使用ie内核，所以最终程序比其他方案要小；此外还可以利用原有的大部分其他c、c++代码;
    
3.  缺点运行环境比较特定，对用户本地ie有要求，如果用户ie版本不同会导致不同的显示效果和其他兼容性问题;
    

### 问题记录:  

1.在CDHtmlDialog中使用mxGraph时发现,ie内核设置的ie11时，鼠标事件居然没反应，但是在ie中打开是正常的，对比了一下发现

msPointerEnabled,pointerEnabled 这两个值不同，

后来通过修改mxclient中的

IS\_POINTER: false,//window.PointerEvent != null && !(navigator.appVersion.indexOf('Mac') > 0),

CDHtmlDialog中window.PointerEvent不为空但是msPointerEnabled和pointerEnabled却有问题，查了一些资料说是ie11废弃了pointerEnabled标识什么的，

直接设为false后，事件可以正常 响应了,不求甚解了;

2.由于需要加装本地文件，mxclient中相关修改如下:

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1551252124477380.png "1551252124477380.png")

mxXmlRequest.prototype.getStatus = function()

{

return 250;//this.request.status;

};

3.这段代码是对grapheditor添加stencils的测试修改:

this.addStencilPalette('ntest', 'ntest', dir + '/ntest.xml',

';whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');

4.navTrustedForActiveX是打开页面是允许activex控件:

//Navigate(L"jgraph.github.io/mxgraph/javascript/examples/grapheditor/www/index.html", navNoReadFromCache | navTrustedForActiveX);//www.baidu.com

Navigate(L"file://D:/dev/CDHtmlDlg-master/CDHtmlDlg-master/DHtml/2.html", navNoReadFromCache | navTrustedForActiveX);//

5.还遇到个问题访问外部链接报代理无响应问题，后来发现被软件阻断了，可以通过修改工程输出名通过,

后来基本都从本地加载这个问题就更不存在了;

6\. 单独加载stencils的测试代码

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge"> 
<title>Hello, World! example for mxGraph</title>
<base href="file:
</head>
<body>
<div id="graphContainer"
style="position:relative;overflow:hidden;width:1910px;height:934px;background:url('./images/grid.gif');cursor:default;">
</div>
</body>
<!-- Sets the basepath for the library if not in same directory -->
<script type="text/javascript">
  mxBasePath = 'src';
</script>
<!-- Loads and initializes the library -->
<script type="text/javascript">
var urlParams = (function(url)
{
var result = new Object();
var idx = url.lastIndexOf('?');
if (idx > 0)
{
var params = url.substring(idx + 1).split('&');
for (var i = 0; i < params.length; i++)
{
idx = params\[i\].indexOf('=');
if (idx > 0)
{
result\[params\[i\].substring(0, idx)\] = params\[i\].substring(idx + 1);
}
}
}
return result;
})(window.location.href);
mxLoadResources = false;
</script>
<script type="text/javascript" src="./jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="./mxClient.js"></script>
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
    <!-- 生产环境中不建议使用 -->
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
<!-- Example code -->
<script type="text/javascript">
$(document).ready(function() {
function main(container)
{
if (!mxClient.isBrowserSupported())
{
mxUtils.error('Browser is not supported!', 200, false);
}
else
{
mxEvent.disableContextMenu(container);
var req = mxUtils.load('stencils.xml');
    var root = req.getDocumentElement();
var shape = root.firstChild;
while (shape != null){
if (shape.nodeType == mxConstants.NODETYPE\_ELEMENT){
mxStencilRegistry.addStencil(shape.getAttribute('name'), new mxStencil(shape));
}
shape = shape.nextSibling;
}
var graph1 = new mxGraph(container);
new mxRubberband(graph1);
var parent = graph1.getDefaultParent();
graph1.getModel().beginUpdate();
try
{
var v1 = graph1.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
var v2 = graph1.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
var v4 = graph1.insertVertex(parent, null, 'A1', 20, 20, 40, 80, 'and;flipH=1');
var v4 = graph1.insertVertex(parent, null, 'A1', 40, 80, 40, 80, 'shape=mxGraph.ntest.ArrowDown');
graph1.insertVertex(v2, null, 'c!', 70, 0, 10, 10);
var e1 = graph1.insertEdge(parent, null, '', v1, v2);
}
finally
{
graph1.getModel().endUpdate();
}
/\*graph1.addMouseListener(
{
  mouseDown: function(sender, evt)
  {
    mxLog.debug('mouseDown');
  },
  mouseMove: function(sender, evt)
  {
    mxLog.debug('mouseMove');
  },
  mouseUp: function(sender, evt)
  {
    mxLog.debug('mouseUp');
  }
});\*/
graph1.addListener(mxEvent.CLICK, function (sender, evt) {
     var cell = evt.getProperty("cell");
     if(cell!=null){
     var sty = graph1.getCellStyle(cell);
     if(sty.shape=='rectangle')
     {
     mxLog.debug(cell.id);
     graph1.model.setValue(cell, "abc");
     graph1.setCellStyles(mxConstants.STYLE\_FILLCOLOR, "#ffffff", \[cell\]);
     }
     }
     /\*var cell = graph1.getSelectionCell();
     if (cell != null) {
     console.log(cell.id);
     }\*/
});
var enc = new mxCodec();
var str=enc.encode(graph1.getModel());
enc.encode(graph1.getModel().getCell(1));
}
};
main(document.getElementById('graphContainer'));
mxLog.show();
});
</script>
</html>
链接:[CDHtmlDialog是一个好的选择吗](https://bbs.huaweicloud.com/blogs/8f5fca18251f11e9bd5a7ca23e93a891)