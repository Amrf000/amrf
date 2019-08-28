28.开发Web应用程序

Spring Boot非常适合Web应用程序开发。您可以使用嵌入式Tomcat，Jetty，Undertow或Netty创建自包含的HTTP服务器。大多数Web应用程序使用该spring-boot-starter-web模块快速启动和运行。您还可以选择使用该spring-boot-starter-webflux模块构建响应式Web应用程序 。

如果您还没有开发Spring Boot Web应用程序，可以按照“Hello World！”进行操作。“ 入门”部分中的示例 。

28.1“Spring Web MVC框架”

在spring Web MVC框架（通常简称为“spring MVC”）是一个丰富的“模型视图控制器” Web框架。Spring MVC允许您创建特殊@Controller或@RestControllerbean来处理传入的HTTP请求。控制器中的方法通过使用@RequestMapping注释映射到HTTP 。

以下代码显示了@RestController为JSON数据提供服务的典型代码：

@RestController 
@RequestMapping（value =“/ users”）
 public  class MyRestController {
@RequestMapping（value =“/ {user}”，method = RequestMethod.GET）
 public User getUser（ @PathVariable Long user）{
 // ...
}
@RequestMapping（value =“/ {user} / customers”，method = RequestMethod.GET） 
List <Customer> getUserCustomers（ @PathVariable Long user）{
 // ...
}
@RequestMapping（value =“/ {user}”，method = RequestMethod.DELETE）
 public User deleteUser（ @PathVariable Long user）{
 // ...
}
}

Spring MVC是核心Spring Framework的一部分，详细信息可在参考文档中找到。也有涵盖Spring MVC中提供一些指南spring.io/guides。

28.1.1 Spring MVC自动配置

Spring Boot为Spring MVC提供自动配置，适用于大多数应用程序。

自动配置在Spring的默认值之上添加了以下功能：

包含ContentNegotiatingViewResolver和BeanNameViewResolver豆类。

支持提供静态资源，包括对WebJars的支持（ 本文档稍后介绍））。

自动注册Converter，GenericConverter和Formatter豆类。

支持HttpMessageConverters（ 本文档后面部分）。

自动注册MessageCodesResolver（ 本文档后面部分）。

静态index.html支持。

自定义Favicon支持（本文档后面部分介绍）。

自动使用ConfigurableWebBindingInitializerbean（ 本文档稍后介绍）。

如果您想保留Spring Boot MVC功能并且想要添加其他 MVC配置（拦截器，格式化程序，视图控制器和其他功能），您可以添加自己@Configuration的类型 WebMvcConfigurer但不需要 @EnableWebMvc。如果您希望提供，或的 自定义实例RequestMappingHandlerMapping，则可以声明 实例以提供此类组件。RequestMappingHandlerAdapterExceptionHandlerExceptionResolverWebMvcRegistrationsAdapter

如果您想完全控制Spring MVC，可以添加自己的@Configuration 注释@EnableWebMvc。

28.1.2 HttpMessageConverters

Spring MVC使用该HttpMessageConverter接口转换HTTP请求和响应。明智的默认值包含在开箱即用中。例如，对象可以自动转换为JSON（通过使用Jackson库）或XML（如果可用，则使用Jackson XML扩展，或者如果Jackson XML扩展不可用，则使用JAXB）。默认情况下，字符串编码为UTF-8。

如果需要添加或自定义转换器，可以使用Spring Boot的 HttpMessageConverters类，如下面的清单所示：

import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.context.annotation.\*;
import org.springframework.http.converter.\*;
@Configuration
public class MyConfiguration {
@Bean
public HttpMessageConverters customConverters() {
HttpMessageConverter<?> additional = ...
HttpMessageConverter<?> another = ...
return new HttpMessageConverters(additional, another);
}
}

HttpMessageConverter上下文中存在的任何bean都将添加到转换器列表中。您也可以以相同的方式覆盖默认转换器。

28.1.3自定义JSON序列化程序和反序列化程序

如果您使用Jackson来序列化和反序列化JSON数据，您可能希望编写自己的类JsonSerializer和JsonDeserializer类。自定义序列化程序通常 通过模块向Jackson注册，但Spring Boot提供了另一种@JsonComponent注释，可以更容易地直接注册Spring Beans。

您可以@JsonComponent直接使用注释JsonSerializer或 JsonDeserializer实现。您还可以在包含序列化程序/反序列化程序作为内部类的类上使用它，如以下示例所示：

import java.io.\*;
import com.fasterxml.jackson.core.\*;
import com.fasterxml.jackson.databind.\*;
import org.springframework.boot.jackson.\*;
@JsonComponent
public class Example {
public static class Serializer extends JsonSerializer<SomeObject> {
// ...
}
public static class Deserializer extends JsonDeserializer<SomeObject> {
// ...
}
}

其中的所有@JsonComponent豆类都会ApplicationContext自动在杰克逊注册。因为@JsonComponent是元注释@Component，所以通常的组件扫描规则适用。

Spring Boot也提供 JsonObjectSerializer和 JsonObjectDeserializer基础类，序列化对象时提供标准版本的杰克逊有用的替代。见 JsonObjectSerializer 和JsonObjectDeserializer在Javadoc了解详情。

28.1.4 MessageCodesResolver

Spring MVC有一个生成错误代码的策略，用于从绑定错误中呈现错误消息：MessageCodesResolver。如果设置了 spring.mvc.message-codes-resolver.format财产PREFIX\_ERROR\_CODE或 POSTFIX\_ERROR\_CODE春季启动为您创建一个（见枚举 DefaultMessageCodesResolver.Format）。

28.1.5静态内容

默认情况下，Spring Boot从类路径中的/static（ /public或/resources或/META-INF/resources）目录或者根目录中提供静态内容ServletContext。它使用ResourceHttpRequestHandler来自Spring MVC，以便您可以通过添加自己WebMvcConfigurer的addResourceHandlers方法来修改该行为并覆盖该 方法。

在独立的Web应用程序中，容器中的默认servlet也会启用并充当后备，从ServletContextif 的根目录提供内容，决定不处理它。大多数情况下，这不会发生（除非你修改默认的MVC配置），因为Spring总是可以通过它来处理请求 DispatcherServlet。

默认情况下，会映射资源/\*\*，但您可以使用该spring.mvc.static-path-pattern属性对其进行调整 。例如，/resources/\*\*可以按如下方式重新定位所有资源 ：

spring.mvc.static-path-pattern = / resources / \*\*

您还可以使用该spring.resources.static-locations属性自定义静态资源位置 （将默认值替换为目录位置列表）。根Servlet上下文路径"/"也会自动添加为位置。

除了前面提到的“标准”静态资源位置之外，还为Webjars内容制作了一个特例。具有路径的任何资源 /webjars/\*\*都是从jar文件提供的，如果它们以Webjars格式打包的话。

\[注\]

src/main/webapp如果您的应用程序打包为jar，请不要使用该目录。虽然这个目录是一个通用的标准，它的工作原理只是战争的包装，它是默默大多数构建工具忽略，如果你生成一个罐子。

Spring Boot还支持Spring MVC提供的高级资源处理功能，允许使用缓存破坏静态资源或使用与Webjars无关的URL。

要为Webjars使用版本无关的URL，请添加webjars-locator-core依赖项。然后声明你的Webjar。以jQuery为例，添加 "/webjars/jquery/jquery.min.js"结果 "/webjars/jquery/x.y.z/jquery.min.js"。x.y.zWebjar版本在哪里。

\[注\]

如果你使用JBoss，你需要声明webjars-locator-jboss-vfs 依赖而不是webjars-locator-core。否则，所有Webjars都会解析为 404。

要使用缓存清除，以下配置会为所有静态资源配置缓存清除解决方案，从而有效地<link href="/css/spring-2a2d595e6ed9a0b24f027f2b63b134d6.css"/>在URL中添加内容哈希，例如 ：

spring.resources.chain.strategy.content.enabled = true

spring.resources.chain.strategy.content.paths = / \*\*

\[注\]

由于ResourceUrlEncodingFilter为Thymeleaf和FreeMarker自动配置了资源链接，因此在运行时会在模板中重写这些链接 。您应该在使用JSP时手动声明此过滤器。其他模板引擎目前不是自动支持的，但可以使用自定义模板宏/帮助程序和使用 ResourceUrlProvider。

使用（例如）JavaScript模块加载器动态加载资源时，不能重命名文件。这就是为什么其他策略也得到支持并可以合并的原因。“固定”策略在URL中添加静态版本字符串而不更改文件名，如以下示例所示：

spring.resources.chain.strategy.content.enabled = true

spring.resources.chain.strategy.content.paths = / \*\*

spring.resources.chain.strategy.fixed.enabled = true

spring.resources.chain.strategy.fixed .paths = / js / lib /

spring.resources.chain.strategy.fixed.version = v12

使用此配置，JavaScript模块位于"/js/lib/"使用固定版本控制策略（"/v12/js/lib/mymodule.js"），而其他资源仍使用内容one（<link href="/css/spring-2a2d595e6ed9a0b24f027f2b63b134d6.css"/>）。

有关ResourceProperties 更多支持选项，请参阅

\[注\]

此功能已在专门的博客文章和Spring Framework的 参考文档中进行了详细描述 。

28.1.6欢迎页面

Spring Boot支持静态和模板化欢迎页面。它首先index.html在配置的静态内容位置中查找 文件。如果找不到，则查找index模板。如果找到任何一个，它将自动用作应用程序的欢迎页面。

28.1.7自定义Favicon

Spring Boot favicon.ico在配置的静态内容位置和类路径的根（按此顺序）中查找a 。如果存在这样的文件，它将自动用作应用程序的favicon。

28.1.8路径匹配和内容协商

Spring MVC可以通过查看请求路径并将其与应用程序中定义的映射（例如，@GetMapping Controller方法上的注释）相匹配，将传入的HTTP请求映射到处理程序。

Spring Boot默认选择禁用后缀模式匹配，这意味着请求"GET /projects/spring-boot.json"不会与@GetMapping("/projects/spring-boot")映射匹配 。这被认为是Spring MVC应用程序的 最佳实践。对于没有发送正确“接受”请求标头的HTTP客户端，此功能在过去主要有用; 我们需要确保将正确的内容类型发送给客户端。如今，内容协商更加可靠。

还有其他方法可以处理不一致发送正确“接受”请求标头的HTTP客户端。我们可以使用查询参数来确保将请求"GET /projects/spring-boot?format=json" 映射到@GetMapping("/projects/spring-boot")以下内容，而不是使用后缀匹配：

spring.mvc.contentnegotiation.favor-parameter = true

＃我们可以更改参数名称，默认为“format”：

＃spring.mvc.contentnegotiation.parameter-name = myparam

＃我们还可以注册其他文件扩展名/媒体类型：

spring.mvc.contentnegotiation.media-types.markdown = text / markdown

如果您了解警告并仍希望您的应用程序使用后缀模式匹配，则需要以下配置：

spring.mvc.contentnegotiation.favor-path-extension = true

spring.mvc.pathmatch.use-suffix-pattern = true

或者，不是打开所有后缀模式，而是仅支持已注册的后缀模式更安全：

spring.mvc.contentnegotiation.favor-path-extension = true

spring.mvc.pathmatch.use-registered-suffix-pattern = true

＃您还可以注册其他文件扩展名/媒体类型：

＃spring.mvc.contentnegotiation.media-types.adoc = text / asciidoc

28.1.9 ConfigurableWebBindingInitializer

Spring MVC使用a WebBindingInitializer来初始化WebDataBinder特定请求。如果您自己创建ConfigurableWebBindingInitializer @Bean，Spring Boot会自动配置Spring MVC来使用它。

28.1.10模板引擎

除REST Web服务外，您还可以使用Spring MVC来提供动态HTML内容。Spring MVC支持各种模板技术，包括Thymeleaf，FreeMarker和JSP。此外，许多其他模板引擎包括他们自己的Spring MVC集成。

Spring Boot包含对以下模板引擎的自动配置支持：

FreeMarker

Groovy

Thymeleaf

Mustache

\[注\]

如果可能，应该避免使用JSP。将它们与嵌入式servlet容器一起使用时有几个 已知的限制。

当您使用其中一个模板引擎和默认配置时，您的模板将自动从中获取src/main/resources/templates。

\[注\]

根据您运行应用程序的方式，IntelliJ IDEA以不同方式对类路径进行排序。从主方法在IDE中运行应用程序会产生与使用Maven或Gradle或其打包的jar运行应用程序时不同的顺序。这可能导致Spring Boot无法在类路径中找到模板。如果遇到此问题，可以在IDE中重新排序类路径，以便首先放置模块的类和资源。或者，您可以配置模板前缀以搜索templates类路径上的每个目录，如下所示： classpath\*:/templates/。

28.1.11错误处理

默认情况下，Spring Boot提供了一个/error以合理方式处理所有错误的映射，并将其注册为servlet容器中的“全局”错误页面。对于计算机客户端，它会生成一个JSON响应，其中包含错误，HTTP状态和异常消息的详细信息。对于浏览器客户端，有一个“whitelabel”错误视图，以HTML格式呈现相同的数据（以自定义它，添加View解析后的数据error）。要完全替换默认行为，您可以实现 ErrorController并注册该类型的bean定义，或者添加类型的bean ErrorAttributes以使用现有机制但替换内容。

\[注\]

在BasicErrorController可以用作自定义基类 ErrorController。如果要为新内容类型添加处理程序（默认情况下是text/html专门处理并为其他所有内容提供后备），这将特别有用。为此，请扩展BasicErrorController，添加@RequestMapping具有produces属性的公共方法 ，并创建新类型的bean。

您还可以定义一个带注释的类，@ControllerAdvice以自定义JSON文档以返回特定控制器和/或异常类型，如以下示例所示：

@ControllerAdvice(basePackageClasses = AcmeController.class)
public class AcmeControllerAdvice extends ResponseEntityExceptionHandler {
@ExceptionHandler(YourException.class)
@ResponseBody
ResponseEntity<?> handleControllerException(HttpServletRequest request, Throwable ex) {
HttpStatus status = getStatus(request);
return new ResponseEntity<>(new CustomErrorType(status.value(), ex.getMessage()), status);
}
private HttpStatus getStatus(HttpServletRequest request) {
Integer statusCode = (Integer) request.getAttribute("javax.servlet.error.status\_code");
if (statusCode == null) {
return HttpStatus.INTERNAL\_SERVER\_ERROR;
}
return HttpStatus.valueOf(statusCode);
}
}

在前面的示例中，如果YourException由同一包中定义的控制器抛出，则使用POJO AcmeController的JSON表示CustomErrorType而不是ErrorAttributes表示。

自定义错误页面

如果要显示给定状态代码的自定义HTML错误页面，可以将文件添加到文件/error夹。错误页面可以是静态HTML（即，添加到任何静态资源文件夹下），也可以使用模板构建。文件名应该是确切的状态代码或系列掩码。

例如，要映射404到静态HTML文件，您的文件夹结构如下所示：

src/

+- main/

+- java/

| + <source code>

+- resources/

+- public/

+- error/

| +- 404.html

+- <other public assets>

要5xx使用FreeMarker模板映射所有错误，您的文件夹结构如下：

src/

+- main/

+- java/

| + <source code>

+- resources/

+- templates/

+- error/

| +- 5xx.ftl

+- <other templates>

对于更复杂的映射，您还可以添加实现该ErrorViewResolver 接口的bean ，如以下示例所示：

public class MyErrorViewResolver implements ErrorViewResolver {
@Override
public ModelAndView resolveErrorView(HttpServletRequest request,
HttpStatus status, Map<String, Object> model) {
// Use the request or status to optionally return a ModelAndView
return ...
}
}

您还可以使用常规的Spring MVC功能，例如 @ExceptionHandler方法和 @ControllerAdvice。在 ErrorController随后拿起任何未处理的异常。

映射Spring MVC之外的错误页面

对于不使用Spring MVC的应用程序，可以使用该ErrorPageRegistrar 接口直接注册ErrorPages。这种抽象直接与底层嵌入式servlet容器一起工作，即使你没有Spring MVC也可以工作 DispatcherServlet。

@Bean
public ErrorPageRegistrar errorPageRegistrar(){
return new MyErrorPageRegistrar();
}
// ...
private static class MyErrorPageRegistrar implements ErrorPageRegistrar {
@Override
public void registerErrorPages(ErrorPageRegistry registry) {
registry.addErrorPages(new ErrorPage(HttpStatus.BAD\_REQUEST, "/400"));
}
}

\[注\]

如果您注册的ErrorPage路径最终由a处理Filter （与一些非Spring Web框架（如Jersey和Wicket）一样），那么 Filter必须将其显式注册为ERROR调度程序，如以下示例所示：

@Bean
public FilterRegistrationBean myFilter() {
FilterRegistrationBean registration = new FilterRegistrationBean();
registration.setFilter(new MyFilter());
...
registration.setDispatcherTypes(EnumSet.allOf(DispatcherType.class));
return registration;
}

请注意，默认值FilterRegistrationBean不包括ERROR调度程序类型。

小心：当部署到servlet容器时，Spring Boot使用其错误页面过滤器将具有错误状态的请求转发到相应的错误页面。如果尚未提交响应，则只能将请求转发到正确的错误页面。缺省情况下，WebSphere Application Server 8.0及更高版本在成功完成servlet的服务方法后提交响应。您应该通过设置com.ibm.ws.webcontainer.invokeFlushAfterService为禁用此行为 false。

28.1.12spring HATEOAS

如果您开发使用超媒体的RESTful API，Spring Boot为Spring HATEOAS提供自动配置，适用于大多数应用程序。自动配置取代了使用@EnableHypermediaSupport和注册多个bean 的需要，以便于构建基于超媒体的应用程序，包括 LinkDiscoverers（用于客户端支持）和ObjectMapper配置为正确地将响应编组到所需表示中。的ObjectMapper是通过设置各种定制的spring.jackson.\*属性，或者，如果存在的话，通过一个 Jackson2ObjectMapperBuilder豆。

您可以使用控制Spring HATEOAS的配置 @EnableHypermediaSupport。请注意，这样做会禁用ObjectMapper前面描述的自定义。

28.1.13 CORS支持

跨源资源共享 （CORS）是大多数浏览器实现 的W3C规范，允许您以灵活的方式指定授权何种跨域请求，而不是使用一些安全性较低且功能较弱的方法，如IFRAME或JSONP。

从版本4.2开始，Spring MVC 支持CORS。 在Spring Boot应用程序中使用带有 注释的控制器方法CORS配置@CrossOrigin不需要任何特定配置。 可以通过使用自定义方法注册bean 来定义全局CORS配置，如以下示例所示：WebMvcConfigureraddCorsMappings(CorsRegistry)

@Configuration
 public  class MyConfiguration {
@Bean
 public WebMvcConfigurer corsConfigurer（）{
 return  new WebMvcConfigurer（）{
 @
 Override public  void addCorsMappings（CorsRegistry registry）{
registry.addMapping（“/ api / \*\*”）;
}
};
}
}
链接:[Spring Boot 参考文档阅读摘录/spring mvc（二）](https://bbs.huaweicloud.com/blogs/eea0c29ce7b511e8bd5a7ca23e93a891)