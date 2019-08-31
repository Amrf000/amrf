项目fork地址:

[https://github.com/Amrf000/tutorial-soap-spring-boot-cxf](https://github.com/Amrf000/tutorial-soap-spring-boot-cxf)

[step1\_simple\_springboot\_app\_with\_cxf](https://github.com/jonashackt/tutorial-soap-spring-boot-cxf/tree/master/step1_simple_springboot_app_with_cxf)
---------------------------------------------------------------------------------------------------------------------------------------------------------

这是一个展示如何设置spring boot并引导一个可运行的cxf框架运行于内置的tomcat的演示，

*   ### 测试步骤:
    

1.  eclipse导入整个maven项目，build goal先写个tomcat:run执行构建完 有些项目有构建问题，但是这个例子没有
    
2.  进入第一个项目 找到SimpleBootCxfApplication文件，以java application运行
    
3.  运行后报bind错误 我的8080端口已经被使用了，打开application.properties添加server.port = 9333
    
4.  再次运行，运行成功
    

[step2\_wsdl\_2\_java\_maven](https://github.com/jonashackt/tutorial-soap-spring-boot-cxf/tree/master/step2_wsdl_2_java_maven)
------------------------------------------------------------------------------------------------------------------------------

选择一个可选择的网络服务-定义为WSDL格式文件来自于流行的[http://wsf.cdyne.com/WeatherWS/Weather.asmx?WSDL](http://wsf.cdyne.com/WeatherWS/Weather.asmx?WSDL)

展示如何在构建时使用JAX-WS Commons Maven plugin从WSDL文件生成AXB-Classes文件 - just run

mvn clean generate-sources

*   ### 测试步骤:
    

1.  导入后的错误是"Plugin execution not covered by lifecycle configuration",
    
    https://github.com/actiontech/dble/issues/297,https://blog.csdn.net/huangjuegeek/article/details/44926741
    
    最简单的右键忽略掉这个错误...1.Just click the link “Mark goal ... as ignored in Eclipse Build in ....” as my pictures above
    
2.  update一下错误消失，运行SimpleBootCxfApplication.java一些OK
    
3.  检查generated-sources存在生成文件，从文件生成时间看确实是mvn生成的
    

[step3\_jaxws-endpoint-cxf-spring-boot](https://github.com/jonashackt/tutorial-soap-spring-boot-cxf/tree/master/step3_jaxws-endpoint-cxf-spring-boot)
-----------------------------------------------------------------------------------------------------------------------------------------------------

第一次使用 SpringBoot, CXF 和 JAX-WS运行 SOAP-Endpoint. 为了测试使用 [SoapUI](https://www.soapui.org/)工具(测试我们的服务在一个单元测试内会是将来的步骤的一部分).

*   ### 测试步骤:
    

1.  同上解决掉mvn错误
    
2.  可以看到一点不同 maven generated-sources现在在java编译范围内
    
3.  启动SimpleBootCxfApplication 运行正常
    
4.  访问http://localhost:9333/soap-api/WeatherSoapService\_1.0?wsdl
    
    可以看到wsdl描述文件，到了这一步感觉应该打开soapui或者restclient测试一下了，今天周一综合征手臂酸痛就不测了
    

[step3\_jaxws-endpoint-cxf-spring-boot-orig-wsdl](https://github.com/jonashackt/tutorial-soap-spring-boot-cxf/tree/master/step3_jaxws-endpoint-cxf-spring-boot-orig-wsdl)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Full-Contract-First 使用生成的 JAX-WS 服务类 而不是 wrap WSDL 并 使用原始的一个 - 包括正确的 URL 和 TargetNamespace (推荐)

*   ### 测试步骤:
    

1.  同上解决mvn错误并修改启动端口
    
2.  运行正常
    
3.  对比上个项目的WebServiceConfiguration.java文件
    
    ![image.png](https://bbs-img.huaweicloud.com/blogs/img/1541992160143471.png "1541992160143471.png")  
    

[step4\_test](https://github.com/jonashackt/tutorial-soap-spring-boot-cxf/tree/master/step4_test)
-------------------------------------------------------------------------------------------------

单元测试, 整合测试 和单系统整合测试 使用 Spring (Boot) 和 Apache CXF

*   ### 测试步骤:
    

1.  同上解决mvn错误并修改启动端口  
    
2.  运行SimpleBootCxfApplication.java
    
3.  在项目内查找8080找到测试用例中的服务地址修改为9333
    
4.  停止SimpleBootCxfApplication.java运行，启动测试用例SimpleBootCxfSystemTestApplication.java
    
5.  WeatherServiceIntegrationTest启动单元测试，测试通过
    
6.  WeatherServiceSystemTest启动单元测试，测试通过 （看到8090端口，一个是集成测试地址另一个是系统测试地址）
    
7.  WeatherServiceTest启动单元测试，测试通过
    
8.  WeatherServiceXmlFileSystemTest启动单元测试，测试通过
    

[step5\_custom-soap-fault](https://github.com/jonashackt/tutorial-soap-spring-boot-cxf/tree/master/step5_custom-soap-fault)
---------------------------------------------------------------------------------------------------------------------------

在XML格式验证之后自定义SOAP错误, 这是有效的通过一个XSD自身并会被触发，以保护以免这些错误请求进入你的服务:)

*   ### 测试步骤:
    

1.  同上解决mvn错误并修改启动端口
    
2.  运行SimpleBootCxfApplication.java
    
3.  停止SimpleBootCxfApplication.java，修改WebServiceIntegrationTestConfiguration.java中的端口为9333，
    
4.  运行SimpleBootCxfSystemTestApplication.java
    
5.  WeatherServiceIntegrationTest运行单元测试，测试成功
    
6.  WeatherServiceSystemTest运行单元测试，测试成功
    
7.  WeatherServiceTest运行单元测试，测试成功
    
8.  WeatherServiceXmlErrorSystemTest运行单元测试，测试成功
    
9.  WeatherServiceXmlFileSystemTest运行单元测试，测试成功
    

[step6\_soap\_message\_logging](https://github.com/jonashackt/tutorial-soap-spring-boot-cxf/tree/master/step6_soap_message_logging)
-----------------------------------------------------------------------------------------------------------------------------------

如何在Apache CXF endpoints上配置SOAP服务消息日志

*   ### 测试步骤:
    

1.  同上解决mvn错误并修改启动端口
    
2.  修改测试用例中的端口地址为9333，运行SimpleBootCxfSystemTestApplication.java
    
3.  访问http://localhost:9333/soap-api/WeatherSoapService\_1.0?wsdl可以在控制台看到一条日志信息
    
4.  WeatherServiceIntegrationTest.java运行单元测试，测试通过
    
5.  WeatherServiceSystemTest.java运行单元测试 测试成功并且可以在控制台看到soap打印
    
6.  WeatherServiceTest.java运行单元测试 测试成功并且可以在控制台看到soap打印
    
7.  WeatherServiceXmlFileSystemTest.java运行单元测试 测试成功并且可以在控制台看到soap打印  
    

[step7\_soap\_message\_logging\_payload\_only](https://github.com/jonashackt/tutorial-soap-spring-boot-cxf/tree/master/step7_soap_message_logging_payload_only)
---------------------------------------------------------------------------------------------------------------------------------------------------------------

定制Apache CXF´s SOAP 服务消息日志语句

*   ### 测试步骤:
    

1.  同上解决mvn错误并修改启动端口
    
2.  修改测试用例中的端口地址为9333，运行SimpleBootCxfSystemTestApplication.java
    
3.  执行单元测试用例 WeatherServiceIntegrationTest.java 测试通过
    
4.  执行单元测试用例WeatherServiceSystemTest.java测试通过
    
5.  执行单元测试用例WeatherServiceTest.java测试通过
    
6.  执行单元测试用例WeatherServiceXmlFileSystemTest.java测试通过
    

### 对比一下例6和例7，主要就是WebServiceConfiguration.java文件进行了修改，实现了定制

### ![image.png](https://bbs-img.huaweicloud.com/blogs/img/1542004089369638.png "1542004089369638.png")

[step8\_logging\_into\_elasticstack](https://github.com/jonashackt/tutorial-soap-spring-boot-cxf/tree/master/step8_logging_into_elasticstack)
---------------------------------------------------------------------------------------------------------------------------------------------

Elasticsearch, Logstash, Kibana - 如何记录 SOAP 服务消息在2016, 包括:

*   配置logstash-logback-encoder
    
*   ### 测试步骤:
    

1.  同上解决mvn错误并修改启动端口
    
2.  修改测试用例中的端口地址为9333，运行SimpleBootCxfSystemTestApplication.java
    
3.  执行4个单元测试用例 测试通过
    
4.  elasticstack的英文翻译是弹性堆栈
    
5.  对比例7和例8
    
    logback-spring.xml
    
    ![image.png](https://bbs-img.huaweicloud.com/blogs/img/1542004790436501.png "1542004790436501.png")
    
    可以很明显的看到文件变成的一个socket端口，把写文件变成了往tcp端口推送---确实是变成弹性的了
    
6.  观察到192.168.99.100:5000需要看一下https://github.com/logstash/logstash-logback-encoder查看具体机理  
    

[step9\_soap\_message\_logging\_into\_custom\_elasticsearch\_field](https://github.com/jonashackt/tutorial-soap-spring-boot-cxf/tree/master/step9_soap_message_logging_into_custom_elasticsearch_field)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   记录SOAP服务消息到它们各自的Elasticsearch区域
    
*   更正所有的日志时间特定于对应的soap服务请求
    
*   ### 测试步骤: 
    

1.  同上解决mvn错误并修改启动端口
    
2.  修改测试用例中的端口地址为9333，运行SimpleBootCxfSystemTestApplication.java
    
3.  执行4个单元测试用例 测试通过
    
4.  看标题描述这个例子的目的是把soap消息日志写到各自自定义的弹性堆栈中去
    
5.  对比例8和例9
    
6.  可以发现多了一个LogCorrelationFilter类
    
7.  LoggingOutInterceptorXmlOnly修改成了SoapMsgToMdcExtractionLoggingOutInterceptor
    
8.  LoggingInInterceptorXmlOnly修改成了SoapMsgToMdcExtractionLoggingInInterceptor
    
    ![image.png](https://bbs-img.huaweicloud.com/blogs/img/1542005947340792.png "1542005947340792.png")
    
    ![image.png](https://bbs-img.huaweicloud.com/blogs/img/1542006014529629.png "1542006014529629.png")
    
9.  没有跟代码流程，大体上就是采用filter过滤器分流，把不同的日志分流到不同的各自的区段  
    

[step10\_simple\_app\_with\_cxf-spring-boot-starter](https://github.com/jonashackt/tutorial-soap-spring-boot-cxf/tree/master/step10_simple_app_with_cxf-spring-boot-starter)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   展示如何快速的使用[cxf-spring-boot-starter](https://github.com/codecentric/cxf-spring-boot-starter)提前一步使用每种可能的解决方案
    
*   ### 测试步骤:  
    

1.  启动报错 更新cxf-spring-boot-starter到新的版本 问题依旧存在
    
2.  \-verbose 并没有看到WeatherServices类的加载
    
3.  将例10导入IntelliJ IDEA 更新后，可以正常运行
    
4.  eclipse重新选择一个空白的工作空间，导入例10运行测试正常
链接:[springboot cxf starter教程项目实际测试](https://bbs.huaweicloud.com/blogs/0655f162e61d11e8bd5a7ca23e93a891)