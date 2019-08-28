问题的现象是:

使用shutil.copytree拷贝文件夹后，后来在拷贝的目标文件夹里再次创建的文件的创建时间异常;

改用shutil.copy拷贝单个文件就没有这个现象;

推测是拷贝文件夹的时候把文件夹信息带过来了;

[https://stackoverflow.com/questions/32720237/using-shutil-copytree-without-copystat](https://stackoverflow.com/questions/32720237/using-shutil-copytree-without-copystat)

现象挺有迷惑性的，就是程序创建的xlxs文件显示的文件创建和修改时间有时候正确有时候快8小时有时候又正常，推测是时区相关的问题，开始以为是其他文件拷贝其他电脑上的文件带来的影响，后来发现其实那些显示不正常的右键属性里的时间信息是正确的，但是用excel打开后在excel里查看到的时间信息是有误的,然后恍然大悟,一开始其实也考虑过是excel写入信息里带的时间信息有误，但是被现象误导到了别的方向去了，然后现在恍然大悟，xlxs这种富xml格式的时间信息有两块，一块是作为一个普通文件的信息，另一块信息是作为数据写到文件里的，explorer最初会显示原始的文件时间信息，后来会显示文件中写入的时间信息；

(从这个角度考虑那些显示正常的情况下其实用excel打开后时间信息也是不正确的，只是explorer显示没有刷新还显示的文件原始属性而已)

然后修改qxlsx中的这段代码

QDateTime::currentDateTime().toString(Qt::ISODate)
=》QDateTime::currentDateTime().toTimeSpec(Qt::OffsetFromUTC).toString(Qt::ISODate)

这个是使用qxlxs创建保存表格时的情况;然后使用python 的openpyxl保存时也会有同样的情况，推测也是同样的问题，openpyxl的实现的dll里应该也有这个问题;

参考：

[https://stackoverflow.com/questions/21976264/qt-isodate-formatted-date-time-including-timezone](https://stackoverflow.com/questions/21976264/qt-isodate-formatted-date-time-including-timezone)

[https://stackoverflow.com/questions/18750569/qdatetime-isodate-with-timezone](https://stackoverflow.com/questions/18750569/qdatetime-isodate-with-timezone)
链接:[程序创建的xlxs文件创建时间和修改时间不正确的问题](https://bbs.huaweicloud.com/blogs/c0feb702700e11e9bd5a7ca23e93a891)