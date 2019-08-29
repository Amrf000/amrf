以vs2015举例:  

1.  找到C:\\Program Files (x86)\\Microsoft Visual Studio 14.0\\Common7\\IDE\\Remote Debugger\\目录;
    
2.  根据编译程序是32位的还是64位的选择，Remote Debugger目录下的x86或者x64,拷贝到目标远程机器中;
    
3.  在目标远程主机上启动msvsmon.exe程序;
    
4.  为了连接方便,在msvsmon.exe中点击工具选项设置如下:
    
    ![spacer.gif](https://bbs.huaweicloud.com/static/ueditor/themes/default/images/spacer.gif)![set.png](https://bbs-img.huaweicloud.com/blogs/img/1550149205879328.png "1550149205879328.png")
    
5.  在调试机器上打开项目并选择调试附加到进程,输入目标机器的ip:4200，回车确定;
    
6.  将项目编译好的程序拷贝到目标远程机器, 在目标机器上启动程序;
    
7.  在调试机器上的vs附加到进程窗口下方点击刷新附加,选择目标调试进程名进行调试;
    

一个小技巧，如果目标程序的问题是过于早的自动退出，有没有崩溃信息和报错，也就是程序存在了几秒导致难以附加，可以考虑在程序入口加上一段时间延时，以便于附加成功;

参考文档:

[https://www.cnblogs.com/sundajade/articles/5440334.html](https://www.cnblogs.com/sundajade/articles/5440334.html)

[https://www.cnblogs.com/tuyile006/p/7827158.html](https://www.cnblogs.com/tuyile006/p/7827158.html)

[https://blog.csdn.net/u011014707/article/details/15498129](https://blog.csdn.net/u011014707/article/details/15498129)

[https://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=ZH-CN&k=k(vs.debug.remote.overview)&rd=true](https://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=ZH-CN&k=k(vs.debug.remote.overview)&rd=true)

[https://docs.microsoft.com/zh-cn/visualstudio/debugger/remote-debugging?view=vs-2017](https://docs.microsoft.com/zh-cn/visualstudio/debugger/remote-debugging?view=vs-2017)
链接:[vs远程调试步骤](https://bbs.huaweicloud.com/blogs/96272984305911e9bd5a7ca23e93a891)