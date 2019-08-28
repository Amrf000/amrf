*   jar启动方式
    

java -Xdebug -Xrunjdwp:transport=dt\_socket,address=8889,server=y,suspend=y -jar xxx.jar

注意以这种方式运行，打包时在eclipse里设置的断点有效

*   eclipse 附加设置
    
    ![image.png](https://bbs-img.huaweicloud.com/blogs/img/1565261592453725.png "1565261592453725.png")
链接:[使用eclipse远程调试java图形工具程序](https://bbs.huaweicloud.com/blogs/cb55d7d7b9ca11e9b759fa163e330718)