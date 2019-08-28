[http://www.zyh1690.org/lua-with-c-call-each-other/](http://www.zyh1690.org/lua-with-c-call-each-other/)

本文介绍如何在C++程序中使用Lua脚本，以及它们如何相互调用。在此，我们需要使用上篇文章[《Lua-5.3.1 源码编译》](http://www.zyh1690.org/lua-5-3-1-source-code-to-compile/)中生成的动态链接库，以及相关的头文件，它们分别是：

x:\\x\\lua-5.3.1\\Debug目录下的lua5.3.1.lib以及lua5.3.1.dll以及x:\\x\\lua-5.3.1\\src目录下的lua.h，lualib.h，lauxlib.h，luaconf.h四个文件。

首先新建一个控制台工程clua，在解决方案的根目录新建一个lua文件夹：

然后在lua文件夹下创建两个子文件夹：include和lib，并将上面四个头文件复制到include文件夹，lua5.3.1.lib复制到lib文件夹。

接着在项目属性页中进行以下配置：

添加包含目录：

添加附加库目录：

添加附加依赖项：

Lua调用C++：
---------

项目中新建cluac.cpp文件，其代码如下：

#include <iostream>
using namespace std;
#include <stdio.h>
#include "lua.h"
#include "lualib.h"
#include "lauxlib.h"
 
lua\_State\* L;   //lua 的解释器
 
//注意average的定义形式
int average(lua\_State \*L)  
{  
//返回栈中元素的个数  
int n = lua\_gettop(L);  
double sum = 0;  
int i;  
for (i = 1; i <= n; i++)  
{  
if (!lua\_isnumber(L, i))   
{  
lua\_pushstring(L, "Incorrect argument to 'average'");  
lua\_error(L);  
}  
sum += lua\_tonumber(L, i);  
}  
/\* push 平均值 \*/  
lua\_pushnumber(L, sum / n);  
/\* push 总和 \*/  
lua\_pushnumber(L, sum);  
 
/\* return the number of results \*/  
return 2;  
}
 
 
int main()
{
L = luaL\_newstate();
 
/\* 载入Lua基本库 \*/
luaL\_openlibs(L);
 
/\* 注册函数 \*/
lua\_register(L, "aver", average); 
 
/\* 运行脚本 \*/
luaL\_dofile(L, "test.lua");
 
lua\_getglobal(L,"avg");  
cout<<"avg is:"<<lua\_tointeger(L,-1)<<endl;  
lua\_pop(L,1);  
lua\_getglobal(L,"sum");  
cout<<"sum is:"<<lua\_tointeger(L,-1)<<endl;  
/\* 清除Lua \*/
lua\_close(L);
return 0;
}

  

然后在项目目录下（也即cluac\\cluac\\目录下），添加test.lua文件，其代码如下：

1

avg,  sum  \=  aver(10,  20,  30,  40,  50)

然后F7编译，编译成功，但还不能运行，我们还需将lua5.3.1.dll放到Debug文件夹中（包含exe的），此时Ctrl+F5 运行可以看到结果：

C++调用Lua：
---------

### 1.无参数传递（C++->Lua）

同上方法，建立项目，新建脚本文件loop.lua如下：

1

2

3

4

5

print "Start"
for i=1,10 do
   print(i) 
end
print "End"

  

CPP代码：

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

#include <stdio.h>
 
#include "lua.h"
#include "lualib.h"
#include "lauxlib.h"
 
/\* the Lua interpreter \*/
lua\_State\* L;
 
int main ( int argc, char \*argv\[\] )
{
/\* initialize Lua \*/
L = lua\_open();
 
/\* load Lua base libraries \*/
lua\_baselibopen(L);
 
/\* run the script \*/
lua\_dofile(L, "do-me.lua");
 
/\* cleanup Lua \*/
lua\_close(L);
 
return 0;
}

  

输出结果：

### 2.有参数传递（C++->Lua）

同上方法，建立项目，新建add.lua文件：

1

2

3

function  add  (  x,  y  )

return  x  +  y

end

CPP代码为：

C++

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

41

42

43

44

45

46

47

48

#include <stdio.h>
 
#include "lua.h"
#include "lualib.h"
#include "lauxlib.h"
 
 
/\* the Lua interpreter \*/
lua\_State\* L;
 
int main ( int argc, char \*argv\[\] )
{
int sum;
/\* initialize Lua \*/
L = luaL\_newstate();
 
/\* load Lua base libraries \*/
luaL\_openlibs(L);
 
/\* load the script \*/
luaL\_dofile(L, "add.lua");
/\* the function name \*/
lua\_getglobal(L, "add");
 
/\* the first argument \*/
lua\_pushnumber(L, 41 );
 
/\* the second argument \*/
lua\_pushnumber(L, 22 );
 
/\* call the function with 2
   arguments, return 1 result \*/
lua\_call(L, 2, 1);
 
/\* get the result \*/
sum = (int)lua\_tonumber(L, -1);
lua\_pop(L, 1);
 
/\* print the result \*/
printf( "The result is %d\\n", sum );
 
/\* cleanup Lua \*/
lua\_close(L);
 
return 0;
}

  

运行结果：

  
[https://blog.csdn.net/bbhe\_work/article/details/48950175](https://blog.csdn.net/bbhe_work/article/details/48950175)

[https://www.kancloud.cn/thinkphp/lua-guide/43809](https://www.kancloud.cn/thinkphp/lua-guide/43809)
链接:[lua 5.3和C++互相调用测试](https://bbs.huaweicloud.com/blogs/93610973f31a11e8bd5a7ca23e93a891)