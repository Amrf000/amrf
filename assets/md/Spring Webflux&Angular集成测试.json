原始项目地址:
-------

[https://github.com/hantsy/angular-spring-reactive-sample](https://github.com/hantsy/angular-spring-reactive-sample)

 项目使用的数据库是Mongo，需要先安装
---------------------

### Mongo安装配置步骤:

*   **下载mongodb-win32-x86\_64-2008plus-ssl-4.0.3.zip，解压压缩包**
    
*   **新建一个mongdb的数据文件目录和日志文件**
    
*   **新建一个mongo.conf文件**
    

# mongod.conf
# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/
# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path: d:\\xxx\\mango.log
# Where and how to store data.
storage:
  dbPath: d:\\xxx\\db
  journal:
    enabled: true
#  engine:
#   mmapv1:
#    enabled: true
#  wiredTiger:
# how the process runs
#processManagement:
#  fork: true  # fork and run in background
#  pidFilePath: /var/run/mongodb/mongod.pid  # location of pidfile
#  timeZoneInfo: /usr/share/zoneinfo
# network interfaces
net:
  port: xxxx
  bindIp: xx.xx.xx.xx  # Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.
#security:
#operationProfiling:
#replication:
#sharding:
## Enterprise-Only Options
#auditLog:
#snmp:

*   **进入压缩包解压后的bin目录，在控制台执行命令安装服务**
    
    mongod.exe\--config d:\\xxxx\\mongodb.conf\--install  
    
*   **启动mongodb服务**
    
    net start mongodb
    

参考文档：

[https://blog.csdn.net/fengziyun/article/details/9384013](https://blog.csdn.net/fengziyun/article/details/9384013)

[https://www.jianshu.com/p/4a91529fbaed](https://www.jianshu.com/p/4a91529fbaed)

启动服务端程序
-------

*   **使用eclipse选择项目server目录中的pom文件，导入maven项目**  
    
*   **修改application.yml中的服务端口和mangodb的服务地址和端口**
    
*   **使用spring-boot:run 启动项目**
    
*   **启动成功后可以使用浏览器访问服务地址可以使用admin/password登录，由于服务端只提供rest服务没有页面其他效果看不到**
    

启动客户端程序
-------

*   **使用vscode打开client目录**
    
*   **执行npm install任务**
    
*   **执行ng serve启动客户端资源服务器**
    
*   **启动成功后，如下**
    
    **![image.png](https://bbs-img.huaweicloud.com/blogs/img/1542354159445674.png "1542354159445674.png")**
    
*   **可以使用admin/password或者user/password登录测试**
    
*   **字体重叠是由于fonts.googleapis.com的访问问题**
    

@import "[https://fonts.googleapis.com/css?family=Material+Icons";](https://fonts.googleapis.com/css?family=Material+Icons)

/\* fallback \*/
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

@import "[https://fonts.googleapis.com/css?family=Roboto:400,300";](https://fonts.googleapis.com/css?family=Roboto:400,300)

/\* cyrillic-ext \*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/\* cyrillic \*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/\* greek-ext \*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/\* greek \*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/\* vietnamese \*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
/\* latin-ext \*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/\* latin \*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/\* cyrillic-ext \*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/\* cyrillic \*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/\* greek-ext \*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/\* greek \*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/\* vietnamese \*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
/\* latin-ext \*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/\* latin \*/
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

*   **客户端打包部署**
    
    在vscode控制台输入ng build会生成dist打包目录
    
*   **将dist目录中的文件拷贝到server/src/resources/static目录下**
    
*   **访问服务端ip:服务端port/index.html效果同上，测试发现调用服务的时候链接里多了个/api导致错误，查找到/api替换为空功能恢复正常**
链接:[Spring Webflux&amp;Angular集成测试](https://bbs.huaweicloud.com/blogs/a06c649ee97311e8bd5a7ca23e93a891)