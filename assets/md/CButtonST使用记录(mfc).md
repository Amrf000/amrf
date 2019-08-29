*   需求说明：
    

收到一个改变单个checkbox控件大小的需求---老项目是mfc的

\---改变颜色和字体和按钮大小感觉都还行，改变checkbox的大小字体可以给放大 背景的选中和不选的图片却是没有变大

\------>于是使用了CButtonST这个实现

*   有一点要说明：
    

CButtonST的一般用法如下：

m\_btn.SubclassDlgItem(IDC\_CHECK\_xxx, this);

将一个按钮子类化为CButtonST的实例，但是我这个项目里按钮本身已经自定义按钮类了，所以attach会报错；

说以我实际使用中的改动是让CButtonST继承于我项目中原来的按钮类，沿用原有按钮按钮的初始化部分，

然后在initDialog中

*   设置选择和不选的图片
    

((CButtonST\*)GetDlgItem(IDC\_CHECK\_xxx ))->SetIcon(IDI\_ICON\_UN, IDI\_ICON\_SE);
((CButtonST\*)GetDlgItem(IDC\_CHECK\_xxx ))->DrawTransparent(TRUE);
((CButtonST\*)GetDlgItem(IDC\_CHECK\_xxx))->DrawBorder(false);

*   设置更大的字体  
    

LOGFONT lf;
memset(&lf, 0, sizeof(LOGFONT));
lf.lfHeight = 200; // Request a 100-pixel-height font
   // DP and LP are always the same on CE - The conversion below is used by CFont::CreateFontIndirect
HDC hDC = ::GetDC(NULL);
lf.lfHeight = ::GetDeviceCaps(hDC, LOGPIXELSY) \* lf.lfHeight;
::ReleaseDC(NULL, hDC);
lf.lfHeight /= 720; // 72 points/inch, 10 decipoints/point
if (lf.lfHeight > 0)
lf.lfHeight \*= -1;
lstrcpy(lf.lfFaceName, \_T("幼圆"));
HFONT font = ::CreateFontIndirect(&lf);
CWnd\* myButton = GetDlgItem(IDC\_CHECK\_BST\_CLASSD\_EN); //The Button with regular font
myButton->SendMessage(WM\_SETFONT, (WPARAM)font, TRUE);

*   实际效果:
    

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1564488915831099.png "1564488915831099.png")\===>![image.png](https://bbs-img.huaweicloud.com/blogs/img/1564488893468138.png "1564488893468138.png")

按钮好像没有变大，这个是因为我导入的ico尺寸16\*16,没找到系统默认的单选按钮资源的图片，自己截的图片ps的，但是感觉已经相对大了一些了；
链接:[CButtonST使用记录(mfc)](https://bbs.huaweicloud.com/blogs/31a0c86ab2c411e9b759fa163e330718)