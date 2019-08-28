[具体参考:](https://github.com/davidmoten/websockets-log-tail)

[https://github.com/davidmoten/websockets-log-tail](https://github.com/davidmoten/websockets-log-tail)

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1551334814382173.png "1551334814382173.png")

但是这样有个问题，当单日志文件大小以及到达几M，几百M的时候，全都实时显示到前端页面肯定有问题，

另外一个问题在大多数情况下，隔天日志或者达到一定大小，会存在原有的日志文件改名并重新创建一个新的日志文件的情况,这种情况也需要考虑;

具体还需要进一步设计(Tailer有一个参数end);

参考文档:

[https://github.com/davidmoten/websockets-log-tail](https://github.com/davidmoten/websockets-log-tail)

[chukwa 简单的应用数据流](https://blog.csdn.net/xiewenbo/article/details/21733361)

[hadoop状态分析系统chukwa](https://blog.csdn.net/anghlq/article/details/6271820)

[基于Hadoop的日志收集框架---Chukwa的源码分析(适配器、代理)](https://blog.csdn.net/ruidongliu/article/details/8705898)

[https://stackoverflow.com/questions/25644036/how-to-set-server-port-with-org-eclipse-jettyjetty-maven-plugin](https://stackoverflow.com/questions/25644036/how-to-set-server-port-with-org-eclipse-jettyjetty-maven-plugin)

[https://github.com/rstoyanchev/spring-websocket-portfolio/tree/master/src/main/java/org/springframework/samples/portfolio](https://github.com/rstoyanchev/spring-websocket-portfolio/tree/master/src/main/java/org/springframework/samples/portfolio)

[https://github.com/ihtfw/Logazmic](https://github.com/ihtfw/Logazmic)

[https://github.com/Connectify/Openfire/blob/master/src/web/logviewer.jsp](https://github.com/Connectify/Openfire/blob/master/src/web/logviewer.jsp)

[https://github.com/satyagraha/logviewer](https://github.com/satyagraha/logviewer)

[https://stackoverflow.com/questions/144807/java-log-viewer](https://stackoverflow.com/questions/144807/java-log-viewer)

[https://www.ibm.com/support/knowledgecenter/en/SS7K4U\_8.5.5/com.ibm.websphere.zseries.doc/ae/rtrb\_logviewer.html](https://www.ibm.com/support/knowledgecenter/en/SS7K4U_8.5.5/com.ibm.websphere.zseries.doc/ae/rtrb_logviewer.html)
链接:[使用websocket实时显示后台日志](https://bbs.huaweicloud.com/blogs/7cbe7bda3b2111e9bd5a7ca23e93a891)