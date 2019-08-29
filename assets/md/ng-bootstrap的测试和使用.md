*   **下面是ng-bootstrap各版本的依赖**
    

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1542278855113940.png "1542278855113940.png")

*   ### **如果没有angular-cli环境需要先安装**
    

npm install -g @angular/cli

*   ### **安装完后创建一个项目**  
    

ng new 项目名称

*   ### **然后进入目录，启动服务**  
    

ng serve

*   ### **可以在浏览器看到**
    

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1542279302726925.png "1542279302726925.png")

*   ### **停止服务器**
    
*   ### **安装ng-bootstrap**  
    

npm install --save @ng-bootstrap/ng-bootstrap

*   ### **打开ng-bootstrap文档**
    

[https://ng-bootstrap.github.io/#/components/accordion/examples](https://ng-bootstrap.github.io/#/components/accordion/examples)

*   ### **按照第一个例子，添加并修改accordion-basic.ts，accordion-basic.html文件**
    
*   ### **修改app.module.ts**
    
    ![image.png](https://bbs-img.huaweicloud.com/blogs/img/1542279560601163.png "1542279560601163.png")
    
*   ### **修改index.html,增加ngbd-accordion-basic节点**
    
    ![image.png](https://bbs-img.huaweicloud.com/blogs/img/1542279676280907.png "1542279676280907.png")  
    
*   ### **启动服务**
    
*   ### **可以看到**
    
    ![image.png](https://bbs-img.huaweicloud.com/blogs/img/1542279736715228.png "1542279736715228.png")
    
*   ### **和教程上的效果还是不太一样，bootstrap的风格没有**
    
    npm install bootstrap@4.0.0
    
    然后在"styles": \[后加上， "node\_modules/bootstrap/dist/css/bootstrap.css"
    
*   ### 重启服务后可以看到效果
    
    ![image.png](https://bbs-img.huaweicloud.com/blogs/img/1542283890275837.png "1542283890275837.png")
链接:[ng-bootstrap的测试和使用](https://bbs.huaweicloud.com/blogs/0b0c9d70e8ca11e8bd5a7ca23e93a891)