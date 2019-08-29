**说一下使用场景先:**

1.  selenium是常用的网页自动化测试框架,我这次的使用场景是这样的，项目爬虫范围拓展到了一个新的站点,虽然登录还是原来的单点登录,但是这个网站后续判断是否登录授权中有使用一些前端js动态添加的cookies,这段逻辑具体会产生sessionId等cookie,其中使用了[https://github.com/broofa/node-uuid](https://github.com/broofa/node-uuid)等机制,通过观察发现这部分逻辑一时无法在不依赖与浏览器引擎的后端爬虫里面模拟再现;
    
2.  导致的情况就是使用原有的单点登录后的cookie进行后续爬虫鉴权失败，如果直接复制浏览器中带有sessionId等信息的cookie后续操作正常，很明显的是复制的cookie过一段时间肯定就失效了;
    
3.  然后我的解决方案就是通过selenium动态获取这个生成的cookie,因为原始项目已经比较肥胖，所以我采用的是spring +cxf +selenium,以服Rest务的方式将这个爬虫需要的cookie提供给原始的httpclient+jsoup爬虫使用;
    
4.  最终效果是符合我的预期的，注意spring+selenium时需要移除pom中的一个guaua库;
    

### 基于apache cxf微服务例子

服务接口
@Path("/r")
@Produces("application/json")
public interface XXXService {
    @GET
    @Path("/{uid}/{password}/{headless}")
    public XXXModel get(@PathParam("uid") String uid,@PathParam("password") String password,@PathParam("headless") Integer headless);
    @POST
    public void post(XXXModel xxxModel);
}

@Service("xxxService")
public class XXXServiceImpl implements XXXService {
    @Override
    public XXXModel get(String uid,String password,Integer headless) {
        prepare(headless);
        String cookies="";
        try {
        	cookies = getCookies(uid,new String(Base64.decode(password)));
        }catch(Exception e) {
              e.printStackTrace();	
        }finally {
        	itsdown();
        }
        return new XXXModel(cookies);
    }
    @Override
    public void post(XXXModel xxxModel) {
    }
    private String testUrl;
    private WebDriver driver;
    public void prepare(Integer headless) {
        System.setProperty(
                "webdriver.chrome.driver",
                "D:\\\\XXX\\\\chrome\\\\Chrome-bin\\\\chromedriver.exe");
        testUrl = "https://xxxx/login";
        ChromeOptions options = null;
        try {
            options = new ChromeOptions();
    	}catch(Exception e) {
    		e.printStackTrace();
    	}
        options.setBinary("D:\\\\XXX\\\\chrome\\\\Chrome-bin\\\\chrome.exe");
        options.setHeadless(headless!=0);
    	try {
            driver = new ChromeDriver(options);//options
    	}catch(Exception e) {
    		e.printStackTrace();
    	}
        driver.get(testUrl);
    }
    
    public String getCookies(String uid,String password)  {
    	/\*try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}\*/
    	(new WebDriverWait(driver, 5)).until(
    			ExpectedConditions.visibilityOfElementLocated(By.id("password"))
        );
    	//WebElement uidE= driver.findElement(By.id("uid"));
    	WebElement passwordE= driver.findElement(By.id("password"));
    	JavascriptExecutor jsExecutor = (JavascriptExecutor) driver;
    	try {
        	//jsExecutor.executeScript("document.getElementById('password').setAttribute('value', '"+password+"')");
        	passwordE.sendKeys(password);
        	jsExecutor.executeScript("document.getElementById('uid').setAttribute('value', '"+uid+"')");
        	jsExecutor.executeScript("submitForm()");
		} catch (Exception e) {
			e.printStackTrace();
		}
    	(new WebDriverWait(driver, 5)).until(
    		ExpectedConditions.visibilityOfElementLocated(By.className("head\_searchBtn"))
    		/\*new ExpectedCondition<Boolean>() {
    			public Boolean apply(WebDriver d) {
        		    return ((JavascriptExecutor) driver).executeScript("return document.readyState").equals("complete");
    			}
    		}\*/
         );
    	driver.navigate().to("http://xxx.com");
    	(new WebDriverWait(driver, 5)).until(
        		new ExpectedCondition<Boolean>() {
        			public Boolean apply(WebDriver d) {
            		    return ((String) jsExecutor.executeScript("return document.cookie")).contains("PLM\_REMOTE\_USER");
        			}
        		}
        );    	
    	String cookiesString = (String) jsExecutor.executeScript("return document.cookie");
    	return cookiesString;
    }
    
    private Set<Cookie> parseBrowserCookies(String cookiesString) {
        Set<Cookie> cookies = new HashSet<>();

        if (StringUtils.isBlank(cookiesString)) {
            return cookies;
        }

        Arrays.asList(cookiesString.split("; ")).forEach(cookie -> {
            String\[\] splitCookie = cookie.split("=", 2);
            cookies.add(new Cookie(splitCookie\[0\], splitCookie\[1\], "/"));
        });

        return cookies;
    }

    public void itsdown() {
        driver.quit();
    }
}

参考文档:

[https://stackoverflow.com/questions/35776826/how-to-specify-the-chrome-binary-location-via-the-selenium-server-standalone-com](https://stackoverflow.com/questions/35776826/how-to-specify-the-chrome-binary-location-via-the-selenium-server-standalone-com)

[https://stackoverflow.com/questions/45500606/set-chrome-browser-binary-through-chromedriver-in-python](https://stackoverflow.com/questions/45500606/set-chrome-browser-binary-through-chromedriver-in-python)

[https://stackoverflow.com/questions/47396547/how-to-set-the-geo-location-through-code](https://stackoverflow.com/questions/47396547/how-to-set-the-geo-location-through-code)

[https://stackoverflow.com/questions/22130109/cant-use-chrome-driver-for-selenium](https://stackoverflow.com/questions/22130109/cant-use-chrome-driver-for-selenium)

[https://stackoverflow.com/questions/20349844/how-chromedriverservice-is-useful-in-selenium-automation](https://stackoverflow.com/questions/20349844/how-chromedriverservice-is-useful-in-selenium-automation)

[https://webcache.googleusercontent.com/search?q=cache:9Q8V7fW2DrUJ:https://xiaojingjing.iteye.com/blog/2382701+&cd=1&hl=en&ct=clnk&gl=sg](https://webcache.googleusercontent.com/search?q=cache:9Q8V7fW2DrUJ:https://xiaojingjing.iteye.com/blog/2382701+&cd=1&hl=en&ct=clnk&gl=sg)

[https://webcache.googleusercontent.com/search?q=cache:rjkU\_qxcMkQJ:https://zhuanlan.zhihu.com/p/30644530+&cd=10&hl=en&ct=clnk&gl=sg](https://webcache.googleusercontent.com/search?q=cache:rjkU_qxcMkQJ:https://zhuanlan.zhihu.com/p/30644530+&cd=10&hl=en&ct=clnk&gl=sg)

[https://stackoverflow.com/questions/49788257/what-is-default-location-of-chromedriver-and-for-installing-chrome-on-windows](https://stackoverflow.com/questions/49788257/what-is-default-location-of-chromedriver-and-for-installing-chrome-on-windows)

[https://stackoverflow.com/questions/16689426/how-to-set-google-chrome-in-webdriver](https://stackoverflow.com/questions/16689426/how-to-set-google-chrome-in-webdriver)
链接:[基于selenium的爬虫(chromedriver)-java环境下](https://bbs.huaweicloud.com/blogs/b825c7d3a21511e9b759fa163e330718)