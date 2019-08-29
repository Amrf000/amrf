### 相关文案:

[https://docs.spring.io/spring/docs/2.5.x/reference/aop.html](https://docs.spring.io/spring/docs/2.5.x/reference/aop.html)

[https://blog.csdn.net/AlbenXie/article/details/72783744](https://blog.csdn.net/AlbenXie/article/details/72783744)

[https://blog.csdn.net/baidu\_33403616/article/details/70304051](https://blog.csdn.net/baidu_33403616/article/details/70304051)

[http://haidaoqi3630.iteye.com/blog/2172845](http://haidaoqi3630.iteye.com/blog/2172845)

### AOP相关概念   
方面（Aspect）：一个关注点的模块化，这个关注点实现可能另外横切多个对象。事务管理是J2EE应用中一个很好的横切关注点例子。方面用Spring的 Advisor或拦截器实现。   
连接点（Joinpoint）: 程序执行过程中明确的点，如方法的调用或特定的异常被抛出   
通知（Advice）: 在特定的连接点，AOP框架执行的动作。各种类型的通知包括“around”、“before”和“throws”通知。通知类型将在下面讨论。许多AOP框架包括Spring都是以拦截器做通知模型，维护一个“围绕”连接点的拦截器链。Spring中定义了四个advice: BeforeAdvice, AfterAdvice, ThrowAdvice和DynamicIntroductionAdvice   
切入点（Pointcut）: 指定一个通知将被引发的一系列连接点的集合。AOP框架必须允许开发者指定切入点：例如，使用正则表达式。 Spring定义了Pointcut接口，用来组合MethodMatcher和ClassFilter，可以通过名字很清楚的理解， MethodMatcher是用来检查目标类的方法是否可以被应用此通知，而ClassFilter是用来检查Pointcut是否应该应用到目标类上   
引入（Introduction）: 添加方法或字段到被通知的类。 Spring允许引入新的接口到任何被通知的对象。例如，你可以使用一个引入使任何对象实现 IsModified接口，来简化缓存。Spring中要使用Introduction, 可有通过DelegatingIntroductionInterceptor来实现通知，通过DefaultIntroductionAdvisor来配置Advice和代理类要实现的接口   
目标对象（Target Object）: 包含连接点的对象。也被称作被通知或被代理对象。POJO   
AOP代理（AOP Proxy）: AOP框架创建的对象，包含通知。 在Spring中，AOP代理可以是JDK动态代理或者CGLIB代理。   
织入（Weaving）: 组装方面来创建一个被通知对象。这可以在编译时完成（例如使用AspectJ编译器），也可以在运行时完成。Spring和其他纯Java AOP框架一样，在运行时完成织入。 

通知类型

简介

Before（前置通知）

目标方法调用之前执行

After（后置通知）

目标方法调用之后执行

After-returning（返回通知）

目标方法执行成功后执行

After-throwing（异常通知）

目标方法抛出异常后执行

Around（环绕通知）

相当于合并了前置和后置  
  

### 引申文案 ：

[谈谈Spring中的IOC和AOP概念](https://blog.csdn.net/eson_15/article/details/51090040)

IOC（Inverse of Control）：控制反转，也可以称为依赖倒置。--依赖注入

2.5.x特性参考

[https://docs.spring.io/spring/docs/2.5.x/reference/](https://docs.spring.io/spring/docs/2.5.x/reference/)

[Spring Schema](https://gist.github.com/dchjmichael/07dfd189c4c29bab63ec#file-spring-schema-md)

[https://gist.github.com/dchjmichael/07dfd189c4c29bab63ec](https://gist.github.com/dchjmichael/07dfd189c4c29bab63ec)

[https://www.jianshu.com/p/8639e5e9fba6](https://www.jianshu.com/p/8639e5e9fba6)

[https://blog.csdn.net/fanxiaobin577328725/article/details/68921567](https://blog.csdn.net/fanxiaobin577328725/article/details/68921567)
链接:[Spring AOP的相关概念和使用场景](https://bbs.huaweicloud.com/blogs/982474c8e7db11e8bd5a7ca23e93a891)