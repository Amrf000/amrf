JWT(Json Web Token)是实现token技术的一种解决方案,JWT由三部分组成: header(头)、payload(载体)、signature(签名)。

### 具体的java使用参考：

[https://blog.csdn.net/achenyuan/article/details/80829401](https://blog.csdn.net/achenyuan/article/details/80829401)

[https://blog.csdn.net/u012240455/article/details/79019825](https://blog.csdn.net/u012240455/article/details/79019825)

### 我从这两篇文章里面摘两端jwt方式和session方式的对比的描述：

和Session方式存储id的差异

Session方式存储用户id的最大弊病在于要占用大量服务器内存，对于较大型应用而言可能还要保存许多的状态。一般而言，大型应用还需要借助一些KV数据库和一系列缓存机制来实现Session的存储。

而JWT方式将用户状态分散到了客户端中，可以明显减轻服务端的内存压力。除了用户id之外，还可以存储其他的和用户相关的信息，例如用户角色，用户性别等。

JWT是json web token缩写。它将用户信息加密到token里，服务器不保存任何用户信息。服务器通过使用保存的密钥验证token的正确性，只要正确即通过验证。

优点是在分布式系统中，很好地解决了单点登录问题，很容易解决了session共享的问题。

缺点是无法作废已颁布的令牌/不易应对数据过期。

可能习惯了redis保存session，使用shiro做登陆，突然使用JWT有点不适应，因为太简单了，我个人不是很建议使用，还是那句话，你的选择权有多大，你有学多少知识。

### 个人总结：

jwt是挂在token上的也就是正常情况下是挂在客户端cookies里的，相对于存储于session的方式确实会大大减少服务器上的存储压力，尤其是当用户量特别大的时候；jwt的安全性依赖于加密算法（,alg指加密类型，可选值为HS256、RSA等等）；

### 其他资料:

[https://blog.csdn.net/cruise\_h/article/details/50888225](https://blog.csdn.net/cruise_h/article/details/50888225)

[https://stackoverflow.com/questions/23808460/jwt-json-web-token-library-for-java](https://stackoverflow.com/questions/23808460/jwt-json-web-token-library-for-java)

[https://github.com/jwtk/jjwt](https://github.com/jwtk/jjwt)

[https://github.com/auth0/java-jwt/blob/master/lib/src/main/java/com/auth0/jwt/JWT.java](https://github.com/auth0/java-jwt/blob/master/lib/src/main/java/com/auth0/jwt/JWT.java)
链接:[JWT的名词解释和使用](https://bbs.huaweicloud.com/blogs/39a6a3cae7e211e8bd5a7ca23e93a891)