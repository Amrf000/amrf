### 原文地址:[https://medium.com/oril/spring-boot-websockets-angular-5-f2f4b1c14cee](https://medium.com/oril/spring-boot-websockets-angular-5-f2f4b1c14cee)  

### 测试效果:

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1542768669121117.png "1542768669121117.png")

### 原文转载:

Hello guys! Here we will speak about how to set up Spring Boot project with Websocket messaging and Angular 5.

As an output of this topic you will get small chat built with Spring Boot and Angular 5.

So, lets’s start it!

First of all, we will set up Java project for this. The pom.xml file will contain just two dependencies we need at the moment:

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>1.5.2.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-websocket</artifactId>
            <version>1.5.2.RELEASE</version>
        </dependency>
    </dependencies>

pom.xml

We just included**_spring-boot-starter-web_**and**_spring-boot-starter-websocket_**into the project and that’s pretty enough to be able to receive messages from outside.

Next step is to configure WebSockets. Let’s create class**_WebSocketConfiguration_**where we will put all settings we need to start with sockets.

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfiguration extends AbstractWebSocketMessageBrokerConfigurer{

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/socket")
                .setAllowedOrigins("\*")
                .withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.setApplicationDestinationPrefixes("/app")
                .enableSimpleBroker("/chat");
    }
}

The class should be annotated with**_@Configuration_**and**_@EnableWebSocketMessageBroker_**annotations, and our config class should be extended from an**_AbstractWebSocketMessageBrokerConfigurer_**class. After that just two methods should be overrided:

First method:

@Override
public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/socket")
                .setAllowedOrigins("\*")
                .withSockJS();
    }

Here we define the endpoint, that our clients will use to connect to the server. So, in our case the URL for connection will be[http://localhost:8080/socket/.](http://localhost:8080/socket/)

Also we allow server to receive requests from any origin. And we told the we will use not “clean” websockets, but with SockJS.

Second method:

@Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.setApplicationDestinationPrefixes("/app")
                .enableSimpleBroker("/chat");
    }

What we say here — is an app prefix. So, when our client will send message through socket, the URL to send will look approximately like this:[http://localhost:8080/app](http://localhost:8080/app)/…/…

And also we said that for now we will have just one subscription — /chat. So clients will subscribe to this subscription and will wait from messages from the server.

#### And that’s it for configuration!

The last thing we need to add before starting using websockets — is the controller.

WebSocketController.java

The same as @RequestMapping for RestController we need to**_use @MessageMapping_**for websockets.

So, here we set up @MessageMapping(“/send/message”), and once this URL will be triggered — we will simply send message to all clients subscribed to**_/chat_**subscription.

And that’s it for Back-End! Now we need to create Front-End part of the application to start the socket communication.

For Front-End we will use just recently released Angular 5 framework.

Let’s use Angular CLI for application creation.

In command line run**_ng new your-app-name-here._**Output of this command will be fully create Angular application that we can just run with command**_ng serve._**

Inside the project we have to install tree libraries with commands:

1.  npm install stompjs;
    
2.  npm install sockjs-client
    
3.  npm install jquery (just to quickly access the DOM elements)
    

Here the code from**_app.component.ts_**

{ Component } '@angular/core';
Stomp 'stompjs';
SockJS 'sockjs-client';
$ 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: \['./app.component.css'\]
})
AppComponent {
  serverUrl = 'http://localhost:8080/socket'
  title = 'WebSockets chat';
  stompClient;

  (){
    .initializeWebSocketConnection();
  }

  initializeWebSocketConnection(){
    ws = SockJS(.serverUrl);
    .stompClient = Stomp.over(ws);
    that = ;
    .stompClient.connect({}, (frame) {
      that.stompClient.subscribe("/chat", (message) => {
        (message.body) {
          $(".chat").append("<div class='message'>"+message.body+"</div>")
          console.log(message.body);
        }
      });
    });
  }

  sendMessage(message){
    .stompClient.send("/app/send/message" , {}, message);
    $('#input').val('');
  }

}

*   So, in the**_initializeWebSocketConnection()_**method we define**_let ws = new SockJS(this.serverUrl)_**. And our serverUrl is[http://localhost:8080/socket](http://localhost:8080/socket). So, this is the endpoint that we added in the**_registerStompEndpoints()_**method in the server code.
    
*   After that we told our stompClient to subscribe to the**_“/chat”_**channel, that is defined in the**_WebSocketConfiguration_**class in Java application.
    

The “/chat” channel defining;

Send all received messages to all clients subscribed to “/chat” channel. WebSocketController class;

So, what this subscription means — is that whenever some server send messages to the channel**_“/chat”_**, all clients that are currently subscribed to it — will receive those messages.

*   Next important element is**_sendMessage(message)_**method in app.component.ts. Here we simply take the message submitted from the input in html file, and with the help of stompClient we send this message to the**_“/app/send/message”_**route defined in the WebSocketController in Java as a value of**_@MessageMapping_**in**_onReceivedMessage_**method;
    

So, whenever the client send message to “/app/send/message” → this message at the same time is sent to all clients subscribed to the**_“/chat”_**channel.

This is how easy the work with Websockets in Java can be.

Type message in oneclient

We have two browsers opened. Simulate two different clients. So, when in the left side browser user types message and press send button, this message should be send to both browsers, as each of them subscribed to the “/chat” channel.

After clicking send button in the left side browser → message appeared in bothbrowsers

And when right side browser send message in answer, the “Hi there, Client 1!” message appears in both browsers as well!

Messages from both clients appeared in twobrowsers

This is how it works! So, you can easily expand functionality and scale the project based on your needs, as much as possible. And now you know how easy is adding WebSocket messaging to the Spring Boot application.

Thank you! The source code available on my GitHub account:

*   [**Spring Boot**](https://github.com/igorkosandyak/spring-boot-websockets)
    
*   [**Angular 5**](https://github.com/igorkosandyak/angular2-websokets)
    

As well you can find it on[**Oril Software GitHub**](https://github.com/oril-software/spring-boot-websockets)**.**

### **测试修改:**

*   client
    

\\client\\node\_modules\\@angular-devkit\\build-angular\\src\\angular-cli-files\\models\\webpack-configs\\browser.js

\==> node:{net:"empty"}//# false

*   server
    

pom.xml==>  

<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>groupId</groupId>
    <artifactId>spring-boot-websockets</artifactId>
    <version>1.0-SNAPSHOT</version>
    <properties>
        <java.version>1.8</java.version>
    </properties>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.1.0.RELEASE</version>
    </parent>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-websocket</artifactId>
        </dependency>
    </dependencies>
    
</project>

### 相关链接:

[https://github.com/527515025/springBoot/tree/master/springWebSocket](https://github.com/527515025/springBoot/tree/master/springWebSocket)

[https://github.com/leelance/spring-boot-all/blob/master/spring-boot-websocket/pom.xml](https://github.com/leelance/spring-boot-all/blob/master/spring-boot-websocket/pom.xml)

[https://github.com/callicoder/spring-boot-websocket-chat-demo/blob/master/pom.xml](https://github.com/callicoder/spring-boot-websocket-chat-demo/blob/master/pom.xml)

[https://blog.csdn.net/hello\_worldee/article/details/78142064](https://blog.csdn.net/hello_worldee/article/details/78142064)

[https://github.com/oril-software/spring-boot-websockets](https://github.com/oril-software/spring-boot-websockets)

[https://github.com/oril-software?tab=repositories](https://github.com/oril-software?tab=repositories)

[https://github.com/igorkosandyak](https://github.com/igorkosandyak)

[https://github.com/igorkosandyak/spring-boot-websockets/](https://github.com/igorkosandyak/spring-boot-websockets/)

[https://github.com/igorkosandyak/angular2-websokets](https://github.com/igorkosandyak/angular2-websokets)
链接:[Spring Boot + WebSockets + Angular 5](https://bbs.huaweicloud.com/blogs/18ea3a30ecca11e8bd5a7ca23e93a891)