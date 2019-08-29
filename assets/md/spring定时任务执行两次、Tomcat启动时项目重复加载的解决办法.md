转载自:[https://blog.csdn.net/qq\_32849357/article/details/82227344](https://blog.csdn.net/qq_32849357/article/details/82227344)

spring定时器在本地eclipse就只执行1次，放到服务器就执行2次。通过排查发现主要是由于项目被部署在服务器tomcat的webapps目录里，导致项目被tomcat初始化了2次，部署成功了2次，一次访问路径是项目名的，一次访问路径是/。而本地的eclipse项目部署在wptwebapps不在webapps里，webapps为tomcat默认目录，里面的war包会自动被解压，项目会自动被部署。

网上的解决办法是叫修改tomcat的server.xml，不让tomcat部署2次，但是解决办法都有些缺点。如 地址[https://www.cnblogs.com/Syney/p/7678714.html](https://www.cnblogs.com/Syney/p/7678714.html)

实际中那个访问路径带项目名的不需要，，所以直接阻止它启动，这样项目就只成功启动了 1次，问题就可以解决。

那怎么阻止呢？ 在项目启动的时候，我们判断当前访问路径是/ 还是 项目名，如果是项目名的，我们就阻止它，制造一个异常让他创建bean的时候失败就可以阻止项目启动了。

阻止具体方法，创建一个bean，实现ServletContextAware 接口，当这个bean创建时，会自动调用setServletContext() ，在方法里我们判断下当前的项目访问路径是否为空或者是否为 / ，如果是，正常通过。如果不是，说明当前tomcat正在初始化访问路径为项目名的项目，所以我们要阻止它，，这时候抛出个运行异常，当前bean就会创建失败，这时候这个项目就会启动失败了。

上代码

由于我定时任务在CacheMapUtil里，所以直接在CacheMapUtil里实现ServletContextAware

总结 问题实际上是项目被tomcat部署成功2次，导致定时器有2个。本方法是直接干掉其中一个，只让tomcat成功部署一个。

缺点 访问路径为项目名部署被-干掉了，所以不能使用项目名访问

补充下，发现contextPathequals那里写错代码，应该是'/' 而不是'|'

import javax.servlet.ServletContext;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;
import org.springframework.web.context.ServletContextAware;
@Component
public class TwiceAware implements ServletContextAware
{
public final static Logger log4j = Logger.getLogger(TwiceAware.class);
public void setServletContext(ServletContext servletContext) {
String contextPath = servletContext.getContextPath();
if("".equals(contextPath) || "|".equals(contextPath)) {
log4j.info("当前项目映射路径为:/");
}else {
throw new RuntimeException("为防止tomcat初始化2次，此次映射路径为"+contextPath);
}
}
}

applicationContext.xml
<bean id="TwiceAware" class="common.utils.TwiceAware" lazy-init="false" />
链接:[spring定时任务执行两次、Tomcat启动时项目重复加载的解决办法](https://bbs.huaweicloud.com/blogs/c7613e2ffd3611e8bd5a7ca23e93a891)