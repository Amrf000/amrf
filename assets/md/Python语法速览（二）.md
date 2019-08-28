Python 日期和时间
============

Python 提供了一个 time 和 calendar 模块可以用于格式化日期和时间。 时间间隔是以秒为单位的浮点小数。 每个时间戳都以自从1970年1月1日午夜（历元）经过了多长时间来表示。 Python 的 time 模块下有很多函数可以转换常见日期格式。如函数time.time()用于获取当前时间戳 import time; # 引入time模块 ticks = time.time() print "当前时间戳为:", ticks \* 什么是时间元组？ 很多Python函数用一个元组装起来的9组数字处理时间: 上述也就是struct\_time元组。这种结构具有如下属性：

0

tm\_year

2008

1

tm\_mon

1 到 12

2

tm\_mday

1 到 31

3

tm\_hour

0 到 23

4

tm\_min

0 到 59

5

tm\_sec

0 到 61 (60或61 是闰秒)

6

tm\_wday

0到6 (0是周一)

7

tm\_yday

1 到 366(儒略历)

8

tm\_isdst

\-1, 0, 1, -1是决定是否为夏令时的旗帜

*   获取当前时间 从返回浮点数的时间戳方式向时间元组转换，只要将浮点数传递给如localtime之类的函数 localtime = time.localtime(time.time()) 本地时间为 : time.struct\_time(tm\_year=2016, tm\_mon=4, tm\_mday=7, tm\_hour=10, tm\_min=3, tm\_sec=27, tm\_wday=3, tm\_yday=98, tm\_isdst=0)
    
*   获取格式化的时间 你可以根据需求选取各种格式，但是最简单的获取可读的时间模式的函数是asctime(): localtime = time.asctime( time.localtime(time.time()) ) 本地时间为 : Thu Apr 7 10:05:21 2016
    
*   格式化日期 我们可以使用 time 模块的 strftime 方法来格式化日期 time.strftime(format\[, t\]) /# 格式化成2016-03-20 11:45:39形式 print time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()) /# 格式化成Sat Mar 28 22:24:24 2016形式 print time.strftime("%a %b %d %H:%M:%S %Y", time.localtime()) /# 将格式字符串转换为时间戳 a = "Sat Mar 28 22:24:24 2016" print time.mktime(time.strptime(a,"%a %b %d %H:%M:%S %Y"))
    
*   python中时间日期格式化符号： %y 两位数的年份表示（00-99） %Y 四位数的年份表示（000-9999） %m 月份（01-12） %d 月内中的一天（0-31） %H 24小时制小时数（0-23） %I 12小时制小时数（01-12） %M 分钟数（00=59） %S 秒（00-59） %a 本地简化星期名称 %A 本地完整星期名称 %b 本地简化的月份名称 %B 本地完整的月份名称 %c 本地相应的日期表示和时间表示 %j 年内的一天（001-366） %p 本地A.M.或P.M.的等价符 %U 一年中的星期数（00-53）星期天为星期的开始 %w 星期（0-6），星期天为星期的开始 %W 一年中的星期数（00-53）星期一为星期的开始 %x 本地相应的日期表示 %X 本地相应的时间表示 %Z 当前时区的名称 %% %号本身
    
*   获取某月日历 Calendar模块有很广泛的方法用来处理年历和月历 cal = calendar.month(2016, 1) print cal
    
*   Time 模块 Time 模块包含了以下内置函数，既有时间处理的，也有转换时间格式
    

time.altzone

返回格林威治西部的夏令时地区的偏移秒数。如果该地区在格林威治东部会返回负值（如西欧，包括英国）。对夏令时启用地区才能使用。

time.asctime(\[tupletime\])

接受时间元组并返回一个可读的形式为”Tue Dec 11 18:07:14 2008”（2008年12月11日 周二18时07分14秒）的24个字符的字符串。

time.clock( )

用以浮点数计算的秒数返回当前的CPU时间。用来衡量不同程序的耗时，比time.time()更有用。

time.ctime(\[secs\])

作用相当于asctime(localtime(secs))，未给参数相当于asctime()

time.gmtime(\[secs\])

接收时间戳（1970纪0元后经过的浮点秒数）并返回格林威治天文时间下的时间元组t。注：t.tm\_isdst始终为0

time.localtime(\[secs\])

接收时间戳（1970纪0元后经过的浮点秒数）并返回当地时间下的时间元组t（t.tm\_isdst可取0或1，取决于当地当时是不是夏令时）。

time.mktime(tupletime)

接受时间元组并返回时间戳（1970纪0元后经过的浮点秒数）。

time.sleep(secs)

推迟调用线程的运行，secs指秒数。

time.strftime(fmt\[,tupletime\])

接收以时间元组，并返回以可读字符串表示的当地时间，格式由fmt决定。

time.strptime(str,fmt=’%a %b %d %H:%M:%S %Y’)

根据fmt的格式把一个时间字符串解析为时间元组。

time.time( )

返回当前时间的时间戳（1970纪0元后经过的浮点秒数）。

time.tzset()

根据环境变量TZ重新初始化时间相关设置。

time.timezone

属性time.timezone是当地时区（未启动夏令时）距离格林威治的偏移秒数（>0，美洲;<=0大部分欧洲，亚洲，非洲）。

time.tzname

属性time.tzname包含一对根据情况的不同而不同的字符串，分别是带夏令时的本地时区名称，和不带的。

*   日历（Calendar）模块 此模块的函数都是日历相关的，例如打印某月的字符月历。 星期一是默认的每周第一天，星期天是默认的最后一天。更改设置需调用calendar.setfirstweekday()
    

calendar.calendar(year,w=2,l=1,c=6)

返回一个多行字符串格式的year年年历，3个月一行，间隔距离为c。 每日宽度间隔为w字符。每行长度为21\* W+18+2\* C。l是每星期行数。

calendar.firstweekday( )

返回当前每周起始日期的设置。默认情况下，首次载入caendar模块时返回0，即星期一。

calendar.isleap(year)

是闰年返回 True，否则为 False。 print(calendar.isleap(2000)) True print(calendar.isleap(1900)) False

calendar.leapdays(y1,y2)

返回在Y1，Y2两年之间的闰年总数。

calendar.month(year,month,w=2,l=1)

返回一个多行字符串格式的year年month月日历，两行标题，一周一行。每日宽度间隔为w字符。每行的长度为7\* w+6。l是每星期的行数。

calendar.monthcalendar(year,month)

返回一个整数的单层嵌套列表。每个子列表装载代表一个星期的整数。Year年month月外的日期都设为0;范围内的日子都由该月第几日表示，从1开始。

calendar.monthrange(year,month)

返回两个整数。第一个是该月的星期几的日期码，第二个是该月的日期码。日从0（星期一）到6（星期日）;月从1到12。

calendar.prcal(year,w=2,l=1,c=6)

相当于 print calendar.calendar(year,w,l,c).

calendar.prmonth(year,month,w=2,l=1)

相当于 print calendar.calendar（year，w，l，c）。

calendar.setfirstweekday(weekday)

设置每周的起始日期码。0（星期一）到6（星期日）。

calendar.timegm(tupletime)

和time.gmtime相反：接受一个时间元组形式，返回该时刻的时间戳（1970纪0元后经过的浮点秒数）。

calendar.weekday(year,month,day)

返回给定日期的日期码。0（星期一）到6（星期日）。月份为 1（一月） 到 12（12月）。

*   其他相关模块和函数 在Python中，其他处理日期和时间的模块还有： datetime模块 pytz模块 dateutil模块
    

Python 函数
=========

函数是组织好的，可重复使用的，用来实现单一，或相关联功能的代码段。 \* 定义一个函数  
你可以定义一个由自己想要功能的函数，以下是简单的规则： 函数代码块以 def 关键词开头，后接函数标识符名称和圆括号()。 任何传入参数和自变量必须放在圆括号中间。圆括号之间可以用于定义参数。 函数的第一行语句可以选择性地使用文档字符串—用于存放函数说明。 函数内容以冒号起始，并且缩进。 return \[表达式\] 结束函数，选择性地返回一个值给调用方。不带表达式的return相当于返回 None。

def functionname( parameters ):   "函数\_文档字符串"   function\_suite   return \[expression\]

默认情况下，参数值和参数名称是按函数声明中定义的顺序匹配起来的 \* 函数调用  
定义一个函数只给了函数一个名称，指定了函数里包含的参数，和代码块结构。 这个函数的基本结构完成以后，你可以通过另一个函数调用执行，也可以直接从Python提示符执行。 \* 参数传递 在 python 中，类型属于对象，变量是没有类型的： a=\[1,2,3\] a="Runoob" 以上代码中，\[1,2,3\] 是 List 类型，"Runoob" 是 String 类型，而变量 a 是没有类型，她仅仅是一个对象的引用（一个指针），可以是 List 类型对象，也可以指向 String 类型对象。 \* 可更改(mutable)与不可更改(immutable)对象 在 python 中，strings, tuples, 和 numbers 是不可更改的对象，而 list,dict 等则是可以修改的对象。 1. 不可变类型：变量赋值 a=5 后再赋值 a=10，这里实际是新生成一个 int 值对象 10，再让 a 指向它，而 5 被丢弃，不是改变a的值，相当于新生成了a。 2. 可变类型：变量赋值 la=\[1,2,3,4\] 后再赋值 la\[2\]=5 则是将 list la 的第三个元素值更改，本身la没有动，只是其内部的一部分值被修改了。 python 函数的参数传递： 1. 不可变类型：类似 c++ 的值传递，如 整数、字符串、元组。如fun（a），传递的只是a的值，没有影响a对象本身。比如在 fun（a）内部修改 a 的值，只是修改另一个复制的对象，不会影响 a 本身。 2. 可变类型：类似 c++ 的引用传递，如 列表，字典。如 fun（la），则是将 la 真正的传过去，修改后fun外部的la也会受影响 python 中一切都是对象，严格意义我们不能说值传递还是引用传递，我们应该说传不可变对象和传可变对象。 \* python 传不可变对象实例 实例(Python 2.0+)

def ChangeInt( a ):    a = 10b = 2ChangeInt(b)print b # 结果是 2

实例中有 int 对象 2，指向它的变量是 b，在传递给 ChangeInt 函数时，按传值的方式复制了变量 b，a 和 b 都指向了同一个 Int 对象，在 a=10 时，则新生成一个 int 值对象 10，并让 a 指向它。 \* 传可变对象实例 /# 可写函数说明

def changeme( mylist ):   "修改传入的列表"   mylist.append(\[1,2,3,4\]);   print "函数内取值: ", mylist   return

/# 调用changeme函数 mylist = \[10,20,30\]; changeme( mylist ); print "函数外取值: ", mylist 实例中传入函数的和在末尾添加新内容的对象用的是同一个引用，故输出结果如下： \* 参数  
以下是调用函数时可使用的正式参数类型： 必备参数 关键字参数 默认参数 不定长参数 1. 必备参数 必备参数须以正确的顺序传入函数。调用时的数量必须和声明时的一样。 调用printme()函数，你必须传入一个参数，不然会出现语法错误 2. 关键字参数 关键字参数和函数调用关系紧密，函数调用使用关键字参数来确定传入的参数值。 使用关键字参数允许函数调用时参数的顺序与声明时不一致，因为 Python 解释器能够用参数名匹配参数值 3. 默认参数 调用函数时，默认参数的值如果没有传入，则被认为是默认值 4. 不定长参数 你可能需要一个函数能处理比当初声明时更多的参数。这些参数叫做不定长参数，和上述2种参数不同，声明时不会命名。

def functionname(\[formal\_args,\] \*var\_args\_tuple ):   "函数\_文档字符串"   function\_suite   return \[expression\]

加了星号（\*）的变量名会存放所有未命名的变量参数 \* 匿名函数 python 使用 lambda 来创建匿名函数。 lambda只是一个表达式，函数体比def简单很多。 lambda的主体是一个表达式，而不是一个代码块。仅仅能在lambda表达式中封装有限的逻辑进去。 lambda函数拥有自己的命名空间，且不能访问自有参数列表之外或全局命名空间里的参数。 虽然lambda函数看起来只能写一行，却不等同于C或C++的内联函数，后者的目的是调用小函数时不占用栈内存从而增加运行效率。 lambda函数的语法只包含一个语句，如下： lambda \[arg1 \[,arg2,.....argn\]\]:expression /# 可写函数说明 sum = lambda arg1, arg2: arg1 + arg2; /# 调用sum函数 print "相加后的值为 : ", sum( 10, 20 ) \* return 语句 return语句\[表达式\]退出函数，选择性地向调用方返回一个表达式。不带参数值的return语句返回None。 \* 变量作用域 一个程序的所有的变量并不是在哪个位置都可以访问的。访问权限决定于这个变量是在哪里赋值的。 变量的作用域决定了在哪一部分程序你可以访问哪个特定的变量名称。两种最基本的变量作用域如下： 全局变量 局部变量 1. 全局变量和局部变量 定义在函数内部的变量拥有一个局部作用域，定义在函数外的拥有全局作用域。 局部变量只能在其被声明的函数内部访问，而全局变量可以在整个程序范围内访问。调用函数时，所有在函数内声明的变量名称都将被加入到作用域中

Python 模块
=========

Python 模块(Module)，是一个 Python 文件，以 .py 结尾，包含了 Python 对象定义和Python语句。 模块让你能够有逻辑地组织你的 Python 代码段。 把相关的代码分配到一个模块里能让你的代码更好用，更易懂。 模块能定义函数，类和变量，模块里也能包含可执行的代码 support.py 模块：

def print\_func( par ):   print "Hello : ", par   return

*   import 语句 模块的引入 模块定义好后，我们可以使用 import 语句来引入模块，语法如下： import module1\[, module2\[,... moduleN\]\] 比如要引用模块 math，就可以在文件最开始的地方用 import math 来引入。在调用 math 模块中的函数时，必须这样引用： 模块名.函数名 当解释器遇到 import 语句，如果模块在当前的搜索路径就会被导入。 搜索路径是一个解释器会先进行搜索的所有目录的列表。如想要导入模块 support.py，需要把命令放在脚本的顶端： /# 导入模块 import support /# 现在可以调用模块里包含的函数了 support.print\_func("Runoob") 一个模块只会被导入一次，不管你执行了多少次import。这样可以防止导入模块被一遍又一遍地执行。
    
*   from…import 语句 Python 的 from 语句让你从模块中导入一个指定的部分到当前命名空间中。语法如下： from modname import name1\[, name2\[, ... nameN\]\] 例如，要导入模块 fib 的 fibonacci 函数，使用如下语句： from fib import fibonacci 这个声明不会把整个 fib 模块导入到当前的命名空间中，它只会将 fib 里的 fibonacci 单个引入到执行这个声明的模块的全局符号表。
    
*   from…import\* 语句 把一个模块的所有内容全都导入到当前的命名空间也是可行的，只需使用如下声明： from modname import \* 这提供了一个简单的方法来导入一个模块中的所有项目。然而这种声明不该被过多地使用。 例如我们想一次性引入 math 模块中所有的东西，语句如下： from math import \*
    
*   搜索路径 当你导入一个模块，Python 解析器对模块位置的搜索顺序是： 1、当前目录 2、如果不在当前目录，Python 则搜索在 shell 变量 PYTHONPATH 下的每个目录。 3、如果都找不到，Python会察看默认路径。UNIX下，默认路径一般为/usr/local/lib/python/。 模块搜索路径存储在 system 模块的 sys.path 变量中。变量里包含当前目录，PYTHONPATH和由安装过程决定的默认目录。
    
*   PYTHONPATH 变量 作为环境变量，PYTHONPATH 由装在一个列表里的许多目录组成。PYTHONPATH 的语法和 shell 变量 PATH 的一样。 在 Windows 系统，典型的 PYTHONPATH 如下： set PYTHONPATH=c:\\python27\\lib; 在 UNIX 系统，典型的 PYTHONPATH 如下： set PYTHONPATH=/usr/local/lib/python
    
*   命名空间和作用域 变量是拥有匹配对象的名字（标识符）。命名空间是一个包含了变量名称们（键）和它们各自相应的对象们（值）的字典。 一个 Python 表达式可以访问局部命名空间和全局命名空间里的变量。如果一个局部变量和一个全局变量重名，则局部变量会覆盖全局变量。 每个函数都有自己的命名空间。类的方法的作用域规则和通常函数的一样。 Python 会智能地猜测一个变量是局部的还是全局的，它假设任何在函数内赋值的变量都是局部的。 因此，如果要给函数内的全局变量赋值，必须使用 global 语句。 global VarName 的表达式会告诉 Python， VarName 是一个全局变量，这样 Python 就不会在局部命名空间里寻找这个变量了。 例如，我们在全局命名空间里定义一个变量 Money。我们再在函数内给变量 Money 赋值，然后 Python 会假定 Money 是一个局部变量。然而，我们并没有在访问前声明一个局部变量 Money，结果就是会出现一个 UnboundLocalError 的错误。取消 global 语句的注释就能解决这个问题。 Money = 2000 def AddMoney(): # 想改正代码就取消以下注释: # global Money Money = Money + 1 print Money AddMoney() print Money
    
*   dir()函数 dir() 函数一个排好序的字符串列表，内容是一个模块里定义过的名字。 返回的列表容纳了在一个模块里定义的所有模块，变量和函数 在这里，特殊字符串变量**name**指向模块的名字，**file**指向该模块的导入文件名。
    
*   globals() 和 locals() 函数 根据调用地方的不同，globals() 和 locals() 函数可被用来返回全局和局部命名空间里的名字。 如果在函数内部调用 locals()，返回的是所有能在该函数里访问的命名。 如果在函数内部调用 globals()，返回的是所有在该函数里能访问的全局名字。 两个函数的返回类型都是字典。所以名字们能用 keys() 函数摘取。
    
*   reload() 函数 当一个模块被导入到一个脚本，模块顶层部分的代码只会被执行一次。 因此，如果你想重新执行模块里顶层部分的代码，可以用 reload() 函数。该函数会重新导入之前导入过的模块。 reload(module\_name) 在这里，module\_name要直接放模块的名字，而不是一个字符串形式。比如想重载 hello 模块 reload(hello)
    
*   Python中的包 包是一个分层次的文件目录结构，它定义了一个由模块及子包，和子包下的子包等组成的 Python 的应用环境。 简单来说，包就是文件夹，但该文件夹下必须存在**init**.py 文件, 该文件的内容可以为空。**init**.py 用于标识当前文件夹是一个包。 考虑一个在 package\_runoob 目录下的 runoob1.py、runoob2.py、**init**.py 文件
    

test.pypackage\_runoob|-- \_\_init\_\_.py|-- runoob1.py|-- runoob2.py

package\_runoob/runoob1.py/#!/usr/bin/python/# -\*- coding: UTF-8 -\*-def runoob1():   print "I'm in runoob1"

package\_runoob/runoob2.py/#!/usr/bin/python/# -\*- coding: UTF-8 -\*-def runoob2():   print "I'm in runoob2"

现在，在 package\_runoob 目录下创建**init**.py：

package\_runoob/\_\_init\_\_.py/#!/usr/bin/python/# -\*- coding: UTF-8 -\*-if \_\_name\_\_ == '\_\_main\_\_':    print '作为主程序运行'else:    print 'package\_runoob 初始化'

然后我们在 package\_runoob 同级目录下创建 test.py 来调用 package\_runoob 包

test.py/#!/usr/bin/python/# -\*- coding: UTF-8 -\*-/# 导入 Phone 包from package\_runoob.runoob1 import runoob1from package\_runoob.runoob2 import runoob2runoob1()runoob2()

Python 文件I/O
============

*   打印到屏幕 最简单的输出方法是用print语句，你可以给它传递零个或多个用逗号隔开的表达式。
    
*   读取键盘输入 Python提供了两个内置函数从标准输入读入一行文本，默认的标准输入是键盘。如下： raw\_input input
    

1.  raw\_input函数 raw\_input(\[prompt\]) 函数从标准输入读取一个行，并返回一个字符串（去掉结尾的换行符）
    
2.  input函数 input(\[prompt\]) 函数和 raw\_input(\[prompt\]) 函数基本类似，但是 input 可以接收一个Python表达式作为输入，并将运算结果返回 str = input("请输入：") print "你输入的内容是: ", str 请输入：\[x\*5 for x in range(2,10,2)\] 你输入的内容是: \[10, 20, 30, 40\]
    

打开和关闭文件 现在，您已经可以向标准输入和输出进行读写。现在，来看看怎么读写实际的数据文件。 Python 提供了必要的函数和方法进行默认情况下的文件基本操作。你可以用 file 对象做大部分的文件操作

1.  open 函数 你必须先用Python内置的open()函数打开一个文件，创建一个file对象，相关的方法才可以调用它进行读写。 语法： file object = open(file\_name \[, access\_mode\]\[, buffering\]) 各个参数的细节如下： file\_name：file\_name变量是一个包含了你要访问的文件名称的字符串值。 access\_mode：access\_mode决定了打开文件的模式：只读，写入，追加等。所有可取值见如下的完全列表。这个参数是非强制的，默认文件访问模式为只读(r)。 buffering:如果buffering的值被设为0，就不会有寄存。如果buffering的值取1，访问文件时会寄存行。如果将buffering的值设为大于1的整数，表明了这就是的寄存区的缓冲大小。如果取负值，寄存区的缓冲大小则为系统默认。
    

t

文本模式 (默认)。

x

写模式，新建一个文件，如果该文件已存在则会报错。

b

二进制模式。

+

打开一个文件进行更新(可读可写)。

U

通用换行模式（不推荐）。

r

以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。

rb

以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。这是默认模式。一般用于非文本文件如图片等。

r+

打开一个文件用于读写。文件指针将会放在文件的开头。

rb+

以二进制格式打开一个文件用于读写。文件指针将会放在文件的开头。一般用于非文本文件如图片等。

w

打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。

wb

以二进制格式打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。

w+

打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。

wb+

以二进制格式打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。

a

打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。

ab

以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。

a+

打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。

ab+

以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件用于读写。

![file](http://www.runoob.com/wp-content/uploads/2013/11/2112205-861c05b2bdbc9c28.png)

模式

r

r+

w

w+

a

a+

读

+

+

  

+

  

+

写

  

+

+

+

+

+

创建

  

  

+

+

+

+

覆盖

  

  

+

+

  

  

指针在开始

+

+

+

+

  

  

指针在结尾

  

  

  

  

+

+

*   File对象的属性 一个文件被打开后，你有一个file对象，你可以得到有关该文件的各种信息。 file.closed 返回true如果文件已被关闭，否则返回false。 file.mode 返回被打开文件的访问模式。 file.name 返回文件的名称。 file.softspace 如果用print输出后，必须跟一个空格符，则返回false。否则返回true。
    

1.  close()方法 File 对象的 close（）方法刷新缓冲区里任何还没写入的信息，并关闭该文件，这之后便不能再进行写入。 当一个文件对象的引用被重新指定给另一个文件时，Python 会关闭之前的文件。用 close（）方法关闭文件是一个很好的习惯
    
2.  write()方法 write()方法可将任何字符串写入一个打开的文件。需要重点注意的是，Python字符串可以是二进制数据，而不是仅仅是文字。 write()方法不会在字符串的结尾添加换行符('\\n')：
    
3.  read()方法 read（）方法从一个打开的文件中读取一个字符串。需要重点注意的是，Python字符串可以是二进制数据，而不是仅仅是文字。 fileObject.read(\[count\]) 在这里，被传递的参数是要从已打开文件中读取的字节计数。该方法从文件的开头开始读入，如果没有传入count，它会尝试尽可能多地读取更多的内容，很可能是直到文件的末尾。
    
4.  文件定位 tell()方法告诉你文件内的当前位置, 换句话说，下一次的读写会发生在文件开头这么多字节之后。 seek（offset \[,from\]）方法改变当前文件的位置。Offset变量表示要移动的字节数。From变量指定开始移动字节的参考位置。 如果from被设为0，这意味着将文件的开头作为移动字节的参考位置。如果设为1，则使用当前的位置作为参考位置。如果它被设为2，那么该文件的末尾将作为参考位置。
    
5.  重命名和删除文件 Python的os模块提供了帮你执行文件处理操作的方法，比如重命名和删除文件。 要使用这个模块，你必须先导入它，然后才可以调用相关的各种功能。 rename()方法： rename()方法需要两个参数，当前的文件名和新文件名。 os.rename(current\_file\_name, new\_file\_name) remove()方法 你可以用remove()方法删除文件，需要提供要删除的文件名作为参数。 os.remove(file\_name)
    

Python里的目录： 所有文件都包含在各个不同的目录下，不过Python也能轻松处理。os模块有许多方法能帮你创建，删除和更改目录。

1.  mkdir()方法 可以使用os模块的mkdir()方法在当前目录下创建新的目录们。你需要提供一个包含了要创建的目录名称的参数。 os.mkdir("newdir")
    
2.  chdir()方法 可以用chdir()方法来改变当前的目录。chdir()方法需要的一个参数是你想设成当前目录的目录名称。
    
3.  getcwd()方法： getcwd()方法显示当前的工作目录。
    
4.  rmdir()方法 rmdir()方法删除目录，目录名称以参数传递。 在删除这个目录之前，它的所有内容应该先被清除。 以下是删除" /tmp/test"目录的例子。目录的完全合规的名称必须被给出，否则会在当前目录下搜索该目录。
    

文件、目录相关的方法 File 对象和 OS 对象提供了很多文件与目录的操作方法，可以通过点击下面链接查看详情： File 对象方法: file 对象提供了操作文件的一系列方法。 OS 对象方法: 提供了处理文件及目录的一系列方法。

Python File(文件) 方法
==================

open() 方法 Python open() 方法用于打开一个文件，并返回文件对象，在对文件进行处理过程都需要使用到这个函数，如果该文件无法被打开，会抛出 OSError。 注意：使用 open() 方法一定要保证关闭文件对象，即调用 close() 方法。 open() 函数常用形式是接收两个参数：文件名(file)和模式(mode)。 open(file, mode='r') 完整的语法格式为： open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None) 参数说明: file: 必需，文件路径（相对或者绝对路径）。 mode: 可选，文件打开模式 buffering: 设置缓冲 encoding: 一般使用utf8 errors: 报错级别 newline: 区分换行符 closefd: 传入的file参数类型 opener:

file.close()

关闭文件。关闭后文件不能再进行读写操作。

file.flush()

刷新文件内部缓冲，直接把内部缓冲区的数据立刻写入文件, 而不是被动的等待输出缓冲区写入。

file.fileno()

返回一个整型的文件描述符(file descriptor FD 整型), 可以用在如os模块的read方法等一些底层操作上。

file.isatty()

如果文件连接到一个终端设备返回 True，否则返回 False。

file.next()

返回文件下一行。

file.read(\[size\])

从文件读取指定的字节数，如果未给定或为负则读取所有。

file.readline(\[size\])

读取整行，包括 ”\\\\n” 字符。

file.readlines(\[sizeint\])

读取所有行并返回列表，若给定sizeint>0，则是设置一次读多少字节，这是为了减轻读取压力。

file.seek(offset\[, whence\])

设置文件当前位置

file.tell()

返回文件当前位置。

file.truncate(\[size\])

截取文件，截取的字节通过size指定，默认为当前文件位置。

file.write(str)

将字符串写入文件，返回的是写入的字符长度。

file.writelines(sequence)

向文件写入一个序列字符串列表，如果需要换行则要自己加入每行的换行符。

Python 异常处理
===========

python提供了两个非常重要的功能来处理python程序在运行中出现的异常和错误。你可以使用该功能来调试python程序。 异常处理: 本站Python教程会具体介绍。 断言(Assertions):本站Python教程会具体介绍。 \* 异常处理  
捕捉异常可以使用try/except语句。 try/except语句用来检测try语句块中的错误，从而让except语句捕获异常信息并处理。 如果你不想在异常发生时结束你的程序，只需在try里捕获它。 语法： 以下为简单的try....except...else的语法：

try:<语句>        #运行别的代码except <名字>：<语句>        #如果在try部份引发了'name'异常except <名字>，<数据>:<语句>        #如果引发了'name'异常，获得附加的数据else:<语句>        #如果没有异常发生

try的工作原理是，当开始一个try语句后，python就在当前程序的上下文中作标记，这样当异常出现时就可以回到这里，try子句先执行，接下来会发生什么依赖于执行时是否出现异常。 如果当try后的语句执行时发生异常，python就跳回到try并执行第一个匹配该异常的except子句，异常处理完毕，控制流就通过整个try语句（除非在处理异常时又引发新的异常）。 如果在try后的语句里发生了异常，却没有匹配的except子句，异常将被递交到上层的try，或者到程序的最上层（这样将结束程序，并打印缺省的出错信息）。 如果在try子句执行时没有发生异常，python将执行else语句后的语句（如果有else的话），然后控制流通过整个try语句。

try:    fh = open("testfile", "w")    fh.write("这是一个测试文件，用于测试异常!!")except IOError:    print "Error: 没有找到文件或读取文件失败"else:    print "内容写入文件成功"    fh.close()

*   使用except而不带任何异常类型 你可以不带任何异常类型使用except，如下实例：
    

try:    正常的操作   ......................except:    发生异常，执行这块代码   ......................else:    如果没有异常执行这块代码

以上方式try-except语句捕获所有发生的异常。但这不是一个很好的方式，我们不能通过该程序识别出具体的异常信息。因为它捕获所有的异常 \* 使用except而带多种异常类型 你也可以使用相同的except语句来处理多个异常信息，如下所示：

try:    正常的操作   ......................except(Exception1\[, Exception2\[,...ExceptionN\]\]\]):   发生以上多个异常中的一个，执行这块代码   ......................else:    如果没有异常执行这块代码

*   try-finally 语句 try-finally 语句无论是否发生异常都将执行最后的代码。 try: <语句> finally: <语句> #退出try时总会执行 raise
    
*   异常的参数 一个异常可以带上参数，可作为输出的异常信息参数。 你可以通过except语句来捕获异常的参数 try: 正常的操作 ...................... except ExceptionType, Argument: 你可以在这输出 Argument 的值...
    
*   触发异常 我们可以使用raise语句自己触发异常 raise语法格式如下： raise \[Exception \[, args \[, traceback\]\]\] 语句中 Exception 是异常的类型（例如，NameError）参数标准异常中任一种，args 是自已提供的异常参数。 最后一个参数是可选的（在实践中很少使用），如果存在，是跟踪异常对象。
    
*   用户自定义异常 通过创建一个新的异常类，程序可以命名它们自己的异常。异常应该是典型的继承自Exception类，通过直接或间接的方式。 以下为与RuntimeError相关的实例,实例中创建了一个类，基类为RuntimeError，用于在异常触发时输出更多的信息。 在try语句块中，用户自定义的异常后执行except块语句，变量 e 是用于创建Networkerror类的实例。 class Networkerror(RuntimeError): def**init**(self, arg): self.args = arg
    

Python OS 文件/目录方法
=================

os 模块提供了非常丰富的方法用来处理文件和目录。

Python 内置函数
===========

Python 面向对象
===========

Python从设计之初就已经是一门面向对象的语言，正因为如此，在Python中创建一个类和对象是很容易的。本章节我们将详细介绍Python的面向对象编程。  
\* 面向对象技术简介  
类(Class): 用来描述具有相同的属性和方法的对象的集合。它定义了该集合中每个对象所共有的属性和方法。对象是类的实例。  
类变量：类变量在整个实例化的对象中是公用的。类变量定义在类中且在函数体之外。类变量通常不作为实例变量使用。  
数据成员：类变量或者实例变量, 用于处理类及其实例对象的相关的数据。  
方法重写：如果从父类继承的方法不能满足子类的需求，可以对其进行改写，这个过程叫方法的覆盖（override），也称为方法的重写。  
局部变量：定义在方法中的变量，只作用于当前实例的类。  
实例变量：在类的声明中，属性是用变量来表示的。这种变量就称为实例变量，是在类声明的内部但是在类的其他成员方法之外声明的。  
继承：即一个派生类（derived class）继承基类（base class）的字段和方法。继承也允许把一个派生类的对象作为一个基类对象对待。例如，有这样一个设计：一个Dog类型的对象派生自Animal类，这是模拟"是一个（is-a）"关系（例图，Dog是一个Animal）。  
实例化：创建一个类的实例，类的具体对象。  
方法：类中定义的函数。  
对象：通过类定义的数据结构实例。对象包括两个数据成员（类变量和实例变量）和方法。  
\* 创建类  
使用 class 语句来创建一个新类，class 之后为类的名称并以冒号结尾:

class ClassName:   '类的帮助信息'   #类文档字符串   class\_suite  #类体

类的帮助信息可以通过ClassName.**doc**查看。 class\_suite 由类成员，方法，数据属性组成。

empCount 变量是一个类变量，它的值将在这个类的所有实例之间共享。你可以在内部类或外部类使用 Employee.empCount 访问。 第一种方法**init**()方法是一种特殊的方法，被称为类的构造函数或初始化方法，当创建了这个类的实例时就会调用该方法 self 代表类的实例，self 在定义类的方法时是必须有的，虽然在调用时不必传入相应的参数。 \* self代表类的实例，而非类 类的方法与普通的函数只有一个特别的区别——它们必须有一个额外的第一个参数名称, 按照惯例它的名称是 self。 \* 创建实例对象 实例化类其他编程语言中一般用关键字 new，但是在 Python 中并没有这个关键字，类的实例化类似函数调用方式。 以下使用类的名称 Employee 来实例化，并通过**init**方法接收参数。 "创建 Employee 类的第一个对象" emp1 = Employee("Zara", 2000) "创建 Employee 类的第二个对象" emp2 = Employee("Manni", 5000) \* 访问属性 您可以使用点号 . 来访问对象的属性。使用如下类的名称访问类变量:

你也可以使用以下函数的方式来访问属性： getattr(obj, name\[, default\]) : 访问对象的属性。 hasattr(obj,name) : 检查是否存在一个属性。 setattr(obj,name,value) : 设置一个属性。如果属性不存在，会创建一个新属性。 delattr(obj, name) : 删除属性。 \* Python内置类属性**dict**: 类的属性（包含一个字典，由类的数据属性组成）**doc**:类的文档字符串**name**: 类名**module**: 类定义所在的模块（类的全名是'**main**.className'，如果类位于一个导入模块mymod中，那么className.**module**等于 mymod）**bases**: 类的所有父类构成元素（包含了一个由所有父类组成的元组） \* python对象销毁(垃圾回收) Python 使用了引用计数这一简单技术来跟踪和回收垃圾。 在 Python 内部记录着所有使用中的对象各有多少引用。 一个内部跟踪变量，称为一个引用计数器。 当对象被创建时， 就创建了一个引用计数， 当这个对象不再需要时， 也就是说， 这个对象的引用计数变为0 时， 它被垃圾回收。但是回收不是"立即"的， 由解释器在适当的时机，将垃圾对象占用的内存空间回收。 垃圾回收机制不仅针对引用计数为0的对象，同样也可以处理循环引用的情况。循环引用指的是，两个对象相互引用，但是没有其他变量引用他们。这种情况下，仅使用引用计数是不够的。Python 的垃圾收集器实际上是一个引用计数器和一个循环垃圾收集器。作为引用计数的补充， 垃圾收集器也会留心被分配的总量很大（及未通过引用计数销毁的那些）的对象。 在这种情况下， 解释器会暂停下来， 试图清理所有未引用的循环。

实例 析构函数**del**，**del**在对象销毁的时候被调用，当对象不再被使用时，**del**方法运行： 注意：通常你需要在单独的文件中定义一个类， \* 类的继承 面向对象的编程带来的主要好处之一是代码的重用，实现这种重用的方法之一是通过继承机制。 通过继承创建的新类称为子类或派生类，被继承的类称为基类、父类或超类。 继承语法 class 派生类名(基类名) ... 在python中继承中的一些特点： 1、如果在子类中需要父类的构造方法就需要显示的调用父类的构造方法，或者不重写父类的构造方法。详细说明可查看：python 子类继承父类构造函数说明。 2、在调用基类的方法时，需要加上基类的类名前缀，且需要带上 self 参数变量。区别在于类中调用普通函数时并不需要带上 self 参数 3、Python 总是首先查找对应类型的方法，如果它不能在派生类中找到对应的方法，它才开始到基类中逐个查找。（先在本类中查找调用的方法，找不到才去基类中找）。 如果在继承元组中列了一个以上的类，那么它就被称作"多重继承" 。 派生类的声明，与他们的父类类似，继承的基类列表跟在类名之后，如下所示： class SubClassName (ParentClass1\[, ParentClass2, ...\]): ... 你可以使用issubclass()或者isinstance()方法来检测。 issubclass() - 布尔函数判断一个类是另一个类的子类或者子孙类，语法：issubclass(sub,sup) isinstance(obj, Class) 布尔函数如果obj是Class类的实例对象或者是一个Class子类的实例对象则返回true。

*   方法重写 如果你的父类方法的功能不能满足你的需求，你可以在子类重写你父类的方法：
    
*   基础重载方法
    

\_\_init\_\_ ( self \[,args…\] )

构造函数 简单的调用方法: obj = className(args)

\_\_del\_\_( self )

析构方法, 删除一个对象 简单的调用方法 : del obj

\_\_repr\_\_( self )

转化为供解释器读取的形式 简单的调用方法 : repr(obj)

\_\_str\_\_( self )

用于将值转化为适于人阅读的形式 简单的调用方法 : str(obj)

\_\_cmp\_\_ ( self, x )

对象比较 简单的调用方法 : cmp(obj, x)

*   运算符重载 Python同样支持运算符重载
    
*   类属性与方法
    
    *   类的私有属性 \_\_private\_attrs：两个下划线开头，声明该属性为私有，不能在类的外部被使用或直接访问。在类内部的方法中使用时 self.\_\_private\_attrs。
        
    *   类的方法 在类的内部，使用 def 关键字可以为类定义一个方法，与一般函数定义不同，类方法必须包含参数 self,且为第一个参数
        
    *   类的私有方法**private\_method：两个下划线开头，声明该方法为私有方法，不能在类的外部调用。在类的内部调用 self.\_\_private\_methods Python不允许实例化的类访问私有数据，但你可以使用 object._className__attrName（ 对象名._类名**私有属性名 ）访问属性
        
*   单下划线、双下划线、头尾双下划线说明：
    
    *   **foo**: 定义的是特殊方法，一般是系统定义名字 ，类似**init**() 之类的。
        
    *   \_foo: 以单下划线开头的表示的是 protected 类型的变量，即保护类型只能允许其本身与子类进行访问，不能用于 from module import \*
        
    *   \_\_foo: 双下划线的表示的是私有类型(private)的变量, 只能是允许这个类本身进行访问了。
链接:[Python语法速览（二）](https://bbs.huaweicloud.com/blogs/3eafa660fde311e8bd5a7ca23e93a891)