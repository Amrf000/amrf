[https://www.cnblogs.com/xia-weiwen/p/6806709.html](https://www.cnblogs.com/xia-weiwen/p/6806709.html)  

[https://blog.csdn.net/xiaoaid01/article/details/17998013](https://blog.csdn.net/xiaoaid01/article/details/17998013)

[http://shouce.jb51.net/qt-beginning/28.html](http://shouce.jb51.net/qt-beginning/28.html)

第23篇 数据库（三）利用`QSqlQuery`类执行SQL语句
================================

导语
--

SQL即结构化查询语言，是关系数据库的标准语言。前面两节中已经在Qt里利用`QSqlQuery`类执行了SQL语句，这一节我们将详细讲解该类的使用。需要说明，因为我们重在讲解Qt中的数据库使用，而非专业的讲解数据库知识，所以不会对数据库中的一些知识进行深入讲解。

环境：Windows Xp + Qt 4.8.4+Qt Creator2.6.2

目录
--

*   一、创建数据库连接
    
*   二、操作结果集
    
*   三、在SQL语句中使用变量
    
*   四、批处理操作
    
*   五、事务操作
    

正文
--

一、创建数据库连接

前面我们是在主函数中创建数据库连接，然后打开并使用。实际中为了明了方便，一般将数据库连接单独放在一个头文件中。下面来看一个例子。

1．新建Qt Gui应用，项目名称为`myquery`，基类为`QMainWindow`，类名为`MainWindow`。完成后打开`myquery.pro`并将第一行代码更改为：

QT       += coregui sql

然后保存该文件。

2．向项目中添加新的C++头文件，名称为`connection.`h，然后打开该文件，更改如下：

#ifndef CONNECTION\_H#define CONNECTION\_H#include <QMessageBox>#include <QSqlDatabase>#include <QSqlQuery>static bool createConnection(){
    QSqlDatabase db = QSqlDatabase::addDatabase("QSQLITE");
    db.setDatabaseName(":memory:");    if (!db.open()) {
       QMessageBox::critical(0, qApp->tr("Cannot open database"),
           qApp->tr("Unable to establisha database connection."
                     ), QMessageBox::Cancel);       return false;
    }
    QSqlQuery query;
    query.exec("create table student (id int primary key, "
               "name varchar(20))");
    query.exec("insert into student values(0, 'first')");
    query.exec("insert into student values(1, 'second')");
    query.exec("insert into student values(2, 'third')");
    query.exec("insert into student values(3, 'fourth')");
    query.exec("insert into student values(4, 'fifth')");    return true;
}#endif // CONNECTION\_H

在这个头文件中我们添加了一个建立连接的函数，使用这个头文件的目的就是要简化主函数中的内容。这里先创建了一个SQLite数据库的默认连接，设置数据库名称时使用了`“:memory:”`，表明这个是建立在内存中的数据库，也就是说该数据库只在程序运行期间有效，等程序运行结束时就会将其销毁。当然，大家也可以将其改为一个具体的数据库名称，比如`“my.db”`，这样就会在项目目录中创建该数据库文件了。下面使用`open()`函数将数据库打开，如果打开失败，则弹出提示对话框。最后使用`QSqlQuery`创建了一个`student`表，并插入了包含`id`和`name`两个属性的五条记录，如下图所示。其中，`id`属性是`int`类型的，`“primary key”`表明该属性是主键，它不能为空，而且不能有重复的值；而`name`属性是`varchar`类型的，并且不大于20个字符。这里使用的SQL语句都要包含在双引号中，如果一行写不完，那么分行后，每一行都要使用两个双引号引起来。

![](http://shouce.jb51.net/qt-beginning/img/23-1.jpg)

需要注意，代码中的`query`没有进行任何指定就可以操作前面打开的数据库，这是因为现在只有一个数据库连接，它就是默认连接，这时候所有的操作都是针对该连接的。但是如果要同时操作多个数据库连接，就需要进行指定了，这方面内容可以参考《Qt Creator快速入门》的第17章。

3．下面我们到`main.cpp`中调用连接函数。

#include "mainwindow.h"#include <QApplication>#include "connection.h"int main(int argc, char \*argv\[\]){    QApplication a(argc, argv);    if (!createConnection())           return 1;

    MainWindow w;
    w.show();    return a.exec();
}

4．我们往界面上添加一个按钮来实现查询操作。双击`mainwindow.ui`文件进入设计模式。然后将一个`Push Button`拖到界面上，并修改其显示文本为“查询”。效果如下图所示。

![](http://shouce.jb51.net/qt-beginning/img/23-2.jpg)

5．在查询按钮上点击鼠标右键，选择“转到槽”，然后选择`clicked()`单击信号槽并点击确定，如下图所示。

![](http://shouce.jb51.net/qt-beginning/img/23-3.jpg)

6．将槽的内容更改如下：

void MainWindow::on\_pushButton\_clicked()
{
    QSqlQuery query;
    query.exec("select \* from student");    while(query.next())
    {
       qDebug() << query.value(0).toInt()
                                      << query.value(1).toString();
    }
}

7．在`mainwindow.cpp`文件中添加头文件：

#include <QSqlQuery>#include <QDebug>

8．运行程序，然后按下查询按钮，在应用程序输出窗口将会输出结果，效果如下图所示。

![](http://shouce.jb51.net/qt-beginning/img/23-4.jpg)

二、操作结果集

在前面的程序中，我们使用`query.exec("select * from student");`查询出表中所有的内容。其中的SQL语句`“select * from student”`中`“*”`号表明查询表中记录的所有属性。而当`query.exec("select * from student");`这条语句执行完后，我们便获得了相应的执行结果，因为获得的结果可能不止一条记录，所以称之为结果集。

结果集其实就是查询到的所有记录的集合，在`QSqlQuery`类中提供了多个函数来操作这个集合，需要注意这个集合中的记录是从0开始编号的。最常用的操作有：

*   `seek(int n)`：`query`指向结果集的第n条记录；
    
*   `first()`：`query`指向结果集的第一条记录；
    
*   `last()`：`query`指向结果集的最后一条记录；
    
*   `next()`：`query`指向下一条记录，每执行一次该函数，便指向相邻的下一条记录；
    
*   `previous()`：`query`指向上一条记录，每执行一次该函数，便指向相邻的上一条记录；
    
*   `record()`：获得现在指向的记录；
    
*   `value(int n)`：获得属性的值。其中`n`表示你查询的第n个属性，比方上面我们使用`“select * from student`”就相当于`“select id, name from student”`，那么`value(0)`返回`id`属性的值，`value(1)`返回`name`属性的值。该函数返回`QVariant`类型的数据，关于该类型与其他类型的对应关系，可以在帮助中查看QVariant。
    
*   `at()`：获得现在`query`指向的记录在结果集中的编号。
    

需要特别注意，刚执行完`query.exec("select *from student");`这行代码时，`query`是指向结果集以外的，我们可以利用`query.next()`使得`query`指向结果集的第一条记录。当然我们也可以利用`seek(0)`函数或者`first()`函数使`query`指向结果集的第一条记录。但是为了节省内存开销，推荐的方法是，在`query.exec("select * from student");`这行代码前加上`query.setForwardOnly(true);`这条代码，此后只能使用`next()`和`seek()`函数。

下面我们通过例子来演示一下这些函数的使用。将槽更改如下：

void MainWindow::on\_pushButton\_clicked()
{
    QSqlQuery query;
    query.exec("select \* from student");
    qDebug() << "exec next() :";    //开始就先执行一次next()函数，那么query指向结果集的第一条记录
    if(query.next())
    {       //获取query所指向的记录在结果集中的编号
       int rowNum = query.at();       //获取每条记录中属性（即列）的个数
       int columnNum = query.record().count();       //获取"name"属性所在列的编号，列从左向右编号，最左边的编号为0
       int fieldNo = query.record().indexOf("name");       //获取id属性的值，并转换为int型
       int id = query.value(0).toInt();       //获取name属性的值
       QString name = query.value(fieldNo).toString();       //将结果输出
       qDebug() << "rowNum is : " << rowNum
                 << " id is : " << id
                 << " name is : " << name
                 << " columnNum is : " << columnNum;
    }//定位到结果集中编号为2的记录，即第三条记录，因为第一条记录的编号为0
    qDebug() << "exec seek(2) :";    if(query.seek(2))
    {
       qDebug() << "rowNum is : " << query.at()
                 << " id is : " << query.value(0).toInt()
                 << " name is : " << query.value(1).toString();
    }    //定位到结果集中最后一条记录
    qDebug() << "exec last() :";    if(query.last())
    {
       qDebug() << "rowNum is : " << query.at()
                 << " id is : " << query.value(0).toInt()
                 << " name is : " << query.value(1).toString();
    }
}

最后在`mainwindow.cpp`中添加`#include <QSqlRecord>`头文件包含，运行程序，点击查询按钮，输出结果如下图所示。

![](http://shouce.jb51.net/qt-beginning/img/23-5.jpg)

三、在SQL语句中使用变量

1．我们先来看一个例子。首先在设计模式往界面上添加一个`Spin Box`部件，如下图所示。

![](http://shouce.jb51.net/qt-beginning/img/23-6.jpg)

2．将查询按钮槽里面的内容更改如下：

void MainWindow::on\_pushButton\_clicked()
{
    QSqlQuery query;    int id = ui->spinBox->value();
    query.exec(QString("select name from student where id =%1")
               .arg(id));
    query.next();
    QString name = query.value(0).toString();
    qDebug() << name;
}

这里使用了`QString`类的`arg()`函数实现了在SQL语句中使用变量，我们运行程序，更改`Spin Box`的值，然后点击查询按钮，效果如下图所示。

![](http://shouce.jb51.net/qt-beginning/img/23-7.jpg)

3．其实在`QSqlQuery`类中提供了数据绑定同样可以实现在SQL语句中使用变量，虽然它也是通过占位符来实现的，不过使用它形式上更明了一些。下面先来看一个例子，将查询按钮槽更改如下：

void MainWindow::on\_pushButton\_clicked()
{
    QSqlQuery query;
    query.prepare("insert into student (id, name) "
                  "values (:id, :name)");
    query.bindValue(0, 5);
    query.bindValue(1, "sixth");
    query.exec();
    query.exec("select \* from student");
    query.last();    int id = query.value(0).toInt();
    QString name = query.value(1).toString();
    qDebug() << id << name;
}

这里在`student`表的最后又添加了一条记录。然后我们先使用了`prepare()`函数，在其中利用了`“:id”`和`“:name”`来代替具体的数据，而后又利用`bindValue()`函数给`id`和`name`两个属性赋值，这称为绑定操作。其中编号0和1分别代表`“:id”`和`“:name”`，就是说按照`prepare()`函数中出现的属性从左到右编号，最左边是0 。

特别注意，在最后一定要执行`exec()`函数，所做的操作才能被真正执行。运行程序，点击查询按钮，可以看到前面添加的记录的信息。这里的`“:id”`和`“:name”`，叫做占位符，这是ODBC数据库的表示方法，还有一种Oracle的表示方法就是全部用“？”号。例如：

query.prepare("insert into student(id, name) "
                  "values (?, ?)");
query.bindValue(0, 5);
query.bindValue(1, "sixth");
query.exec();

也可以利用`addBindValue()`函数，这样就可以省去编号，它是按顺序给属性赋值的，如下：

query.prepare("insert into student(id, name) "
                  "values (?, ?)");
query.addBindValue(5);
query.addBindValue("sixth");
query.exec();

当用ODBC的表示方法时，我们也可以将编号用实际的占位符代替，如下：

query.prepare("insert into student(id, name) "
                      "values (:id, :name)");
query.bindValue(":id", 5);
query.bindValue(":name", "sixth");
query.exec();

以上各种形式的表示方式效果是一样的。

4．下面我们演示一下通过绑定操作在SQL语句中使用变量。更改槽函数如下：

void MainWindow::on\_pushButton\_clicked()
{
    QSqlQuery query;
    query.prepare("select name from student where id = ?");    int id = ui->spinBox->value();
    query.addBindValue(id);
    query.exec();
    query.next();
    qDebug() << query.value(0).toString();
}

运行程序，可以实现通过`Spin Box`的值来进行查询。

四、批处理操作

当要进行多条记录的操作时，我们就可以利用绑定进行批处理。将槽更改如下：

void MainWindow::on\_pushButton\_clicked()
{
    QSqlQuery q;
    q.prepare("insert into student values (?, ?)");
    QVariantList ints;
    ints << 10 << 11 << 12 << 13;
    q.addBindValue(ints);
    QVariantList names;    // 最后一个是空字符串，应与前面的格式相同
        names << "xiaoming" << "xiaoliang"
                      << "xiaogang" << QVariant(QVariant::String);
    q.addBindValue(names);    if (!q.execBatch()) //进行批处理，如果出错就输出错误
       qDebug() << q.lastError();    //下面输出整张表
    QSqlQuery query;
    query.exec("select \* from student");    while(query.next())
    {       int id = query.value(0).toInt();
       QString name = query.value(1).toString();
       qDebug() << id << name;
    }
}

然后需要在`mainwindow.cpp`上添加头文件包含：`#include <QSqlError>`。我们在程序中利用列表存储了同一属性的多个值，然后进行了值绑定。最后执行`execBatch()`函数进行批处理。注意程序中利用`QVariant(QVariant::String)`来输入空值`NULL`，因为前面都是`QString`类型的，所以这里要使用`QVariant::String`使格式一致化。 运行程序，效果如下图所示：

![](http://shouce.jb51.net/qt-beginning/img/23-8.jpg)

五、事务操作

事务可以保证一个复杂的操作的原子性，就是对于一个数据库操作序列，这些操作要么全部做完，要么一条也不做，它是一个不可分割的工作单位。在Qt中，如果底层的数据库引擎支持事务，那么`QSqlDriver::hasFeature(QSqlDriver::Transactions)`会返回`true`。可以使用`QSqlDatabase::transaction()`来启动一个事务，然后编写一些希望在事务中执行的SQL语句，最后调用`QSqlDatabase::commit()`或者`QSqlDatabase::rollback()`。当使用事务时必须在创建查询以前就开始事务，例如：

QSqlDatabase::database().transaction();
QSqlQuery query;
query.exec("SELECT id FROMemployee WHERE name = 'Torild Halvorsen'");if (query.next()) {    int employeeId = query.value(0).toInt();
    query.exec("INSERT INTO project(id, name, ownerid) "
               "VALUES (201, 'ManhattanProject', "
               + QString::number(employeeId) + ')');
}
QSqlDatabase::database().commit();

结语
--

对执行SQL语句我们就介绍这么多，其实Qt中提供了更为简单的不需要SQL语句就可以操作数据库的方法，我们在下一节讲述这些内容。

涉及到的源码:

[https://www.devbean.net/2013/06/qt-study-road-2-database/](https://www.devbean.net/2013/06/qt-study-road-2-database/)

Qt 学习之路 2（55）：数据库操作
===================

[豆子](https://www.devbean.net/author/devbean/ "由豆子发布") 2013年6月14日 [Qt 学习之路 2](https://www.devbean.net/category/qt-study-road-2/ "View all posts in Qt 学习之路 2") [79条评论](https://www.devbean.net/2013/06/qt-study-road-2-database/#comments)

Qt 提供了 QtSql 模块来提供平台-独立的基于 SQL 的数据库操作。这里我们所说的“平台-独立”，既包括操作系统平台，又包括各个数据库平台。另外，我们强调了“基于 SQL”，因为 NoSQL 数据库至今没有一个通用查询方法，所以不可能提供一种通用的 NoSQL 数据库的操作。Qt 的数据库操作还可以很方便的与 model/view 架构进行整合。通常来说，我们对数据库的操作更多地在于对数据库表的操作，而这正是 model/view 架构的长项。

Qt 使用`QSqlDatabase`表示一个数据库连接。更底层上，Qt 使用驱动（drivers）来与不同的数据库 API 进行交互。Qt 桌面版本提供了如下几种驱动：

 驱动

数据库

QDB2

IBM DB2 (7.1 或更新版本)

QIBASE

Borland InterBase

QMYSQL

MySQL

QOCI

Oracle Call Interface Driver

QODBC

Open Database Connectivity (ODBC) – Microsoft SQL Server 及其它兼容 ODBC 的数据库

QPSQL

PostgreSQL (7.3 或更新版本)

QSQLITE2

SQLite 2

QSQLITE

SQLite 3

QSYMSQL

针对 Symbian 平台的SQLite 3

QTDS

Sybase Adaptive Server (自 Qt 4.7 起废除)

不过，由于受到协议的限制，Qt 开源版本并没有提供上面所有驱动的二进制版本，而仅仅以源代码的形式提供。通常，Qt 只默认搭载 QSqlite 驱动（这个驱动实际还包括 Sqlite 数据库，也就是说，如果需要使用 Sqlite 的话，只需要该驱动即可）。我们可以选择把这些驱动作为 Qt 的一部分进行编译，也可以当作插件编译。

如果习惯于使用 SQL 语句，我们可以选择`QSqlQuery`类；如果只需要使用高层次的数据库接口（不关心 SQL 语法），我们可以选择`QSqlTableModel`和`QSqlRelationalTableModel`。本章我们介绍`QSqlQuery`类，在后面的章节则介绍`QSqlTableModel`和`QSqlRelationalTableModel`。

在使用时，我们可以通过

C/C++

1 lines

QSqlDatabase::drivers();

找到系统中所有可用的数据库驱动的名字列表。我们只能使用出现在列表中的驱动。由于默认情况下，QtSql 是作为 Qt 的一个模块提供的。为了使用有关数据库的类，我们必须早 .pro 文件中添加这么一句：

QT += sql

这表示，我们的程序需要使用 Qt 的 core、gui 以及 sql 三个模块。注意，如果需要同时使用 Qt4 和 Qt5 编译程序，通常我们的 .pro 文件是这样的：

Plain Text

2 lines

QT += core gui sql
greaterThan(QT\_MAJOR\_VERSION, 4): QT += widgets

这两句也很明确：Qt 需要加载 core、gui 和 sql 三个模块，如果主板本大于 4，则再添加 widgets 模块。

下面来看一个简单的函数：

C/C++

15 lines

bool connect(const QString &dbName)
{
    QSqlDatabase db = QSqlDatabase::addDatabase("QSQLITE");
//    db.setHostName("host");
//    db.setDatabaseName("dbname");
//    db.setUserName("username");
//    db.setPassword("password");
    db.setDatabaseName(dbName);
    if (!db.open()) {
        QMessageBox::critical(0, QObject::tr("Database Error"),
                              db.lastError().text());
        return false;
    }
    return true;
}

我们使用`connect()`函数创建一个数据库连接。我们使用`QSqlDatabase::addDatabase()`静态函数完成这一请求，也就是创建了一个`QSqlDatabase`实例。注意，数据库连接使用自己的名字进行区分，而不是数据库的名字。例如，我们可以使用下面的语句：

C/C++

QSqlDatabase db=QSqlDatabase::addDatabase("QSQLITE", QString("con%1").arg(dbName));

此时，我们是使用`addDatabase()`函数的第二个参数来给这个数据库连接一个名字。在这个例子中，用于区分这个数据库连接的名字是`QString("conn%1").arg(dbName)`，而不是 “QSQLITE”。这个参数是可选的，如果不指定，系统会给出一个默认的名字`QSqlDatabase::defaultConnection`，此时，Qt 会创建一个默认的连接。如果你给出的名字与已存在的名字相同，新的连接会替换掉已有的连接。通过这种设计，我们可以为一个数据库建立多个连接。

我们这里使用的是 sqlite 数据库，只需要指定数据库名字即可。如果是数据库服务器，比如 MySQL，我们还需要指定主机名、端口号、用户名和密码，这些语句使用注释进行了简单的说明。

接下来我们调用了`QSqlDatabase::open()`函数，打开这个数据库连接。通过检查`open()`函数的返回值，我们可以判断数据库是不是正确打开。

QtSql 模块中的类大多具有`lastError()`函数，用于检查最新出现的错误。如果你发现数据库操作有任何问题，应该使用这个函数进行错误的检查。这一点我们也在上面的代码中进行了体现。当然，这只是最简单的实现，一般来说，更好的设计是，不要在数据库操作中混杂界面代码（并且将这个`connect()`函数放在一个专门的数据库操作类中）。

接下来我们可以在`main()`函数中使用这个`connect()`函数：

C/C++

int main(int argc, char \*argv\[\])
{
    QApplication a(argc, argv);
    if (connect("demo.db")) {
        QSqlQuery query;
        if (!query.exec("CREATE TABLE student ("
                        "id INTEGER PRIMARY KEY AUTOINCREMENT,"
                        "name VARCHAR,"
                        "age INT)")) {
            QMessageBox::critical(0, QObject::tr("Database Error"),
                                  query.lastError().text());
            return 1;
        }
    } else {
        return 1;
    }
    return a.exec();
}

`main()`函数中，我们调用这个`connect()`函数打开数据库。如果打开成功，我们通过一个`QSqlQuery`实例执行了 SQL 语句。同样，我们使用其`lastError()`函数检查了执行结果是否正确。

注意这里的`QSqlQuery`实例的创建。我们并没有指定是为哪一个数据库连接创建查询对象，此时，系统会使用默认的连接，也就是使用没有第二个参数的`addDatabase()`函数创建的那个连接（其实就是名字为`QSqlDatabase::defaultConnection`的默认连接）。如果没有这么一个连接，系统就会报错。也就是说，如果没有默认连接，我们在创建`QSqlQuery`对象时必须指明是哪一个`QSqlDatabase`对象，也就是`addDatabase()`的返回值。

我们还可以通过使用`QSqlQuery::isActive()`函数检查语句执行正确与否。如果`QSqlQuery`对象是活动的，该函数返回 true。所谓“活动”，就是指该对象成功执行了`exec()`函数，但是还没有完成。如果需要设置为不活动的，可以使用`finish()`或者`clear()`函数，或者直接释放掉这个`QSqlQuery`对象。这里需要注意的是，如果存在一个活动的 SELECT 语句，某些数据库系统不能成功完成`connect()`或者`rollback()`函数的调用。此时，我们必须首先将活动的 SELECT 语句设置成不活动的。

创建过数据库表student 之后，我们开始插入数据，然后将其独取出来：

C/C++

if (connect("demo.db")) {
    QSqlQuery query;
    query.prepare("INSERT INTO student (name, age) VALUES (?, ?)");
    QVariantList names;
    names << "Tom" << "Jack" << "Jane" << "Jerry";
    query.addBindValue(names);
    QVariantList ages;
    ages << 20 << 23 << 22 << 25;
    query.addBindValue(ages);
    if (!query.execBatch()) {
        QMessageBox::critical(0, QObject::tr("Database Error"),
                              query.lastError().text());
    }
    query.finish();
    query.exec("SELECT name, age FROM student");
    while (query.next()) {
        QString name = query.value(0).toString();
        int age = query.value(1).toInt();
        qDebug() << name << ": " << age;
    }
} else {
    return 1;
}

依旧连接到我们创建的 demo.db 数据库。我们需要插入多条数据，此时可以使用`QSqlQuery::exec()`函数一条一条插入数据，但是这里我们选择了另外一种方法：批量执行。首先，我们使用`QSqlQuery::prepare()`函数对这条 SQL 语句进行预处理，问号 ? 相当于占位符，预示着以后我们可以使用实际数据替换这些位置。简单说明一下，预处理是数据库提供的一种特性，它会将 SQL 语句进行编译，性能和安全性都要优于普通的 SQL 处理。在上面的代码中，我们使用一个字符串列表 names 替换掉第一个问号的位置，一个整型列表 ages 替换掉第二个问号的位置，利用`QSqlQuery::addBindValue()`我们将实际数据绑定到这个预处理的 SQL 语句上。需要注意的是，names 和 ages 这两个列表里面的数据需要一一对应。然后我们调用`QSqlQuery::execBatch()`批量执行 SQL，之后结束该对象。这样，插入操作便完成了。

另外说明一点，我们这里使用了 ODBC 风格的 ? 占位符，同样，我们也可以使用 Oracle 风格的占位符：

C/C++

query.prepare("INSERT INTO student (name, age) VALUES (:name, :age)");

此时，我们就需要使用

C/C++

query.bindValue(":name", names);
query.bindValue(":age", ages);

进行绑定。Oracle 风格的绑定最大的好处是，绑定的名字和值很清晰，与顺序无关。但是这里需要注意，`bindValue()`函数只能绑定一个位置。比如

C/C++

query.prepare("INSERT INTO test (name1, name2) VALUES (:name, :name)");
// ...
query.bindValue(":name", name);

只能绑定第一个 :name 占位符，不能绑定到第二个。

接下来我们依旧使用同一个查询对象执行一个 SELECT 语句。如果存在查询结果，`QSqlQuery::next()`会返回 true，直到到达结果最末，返回 false，说明遍历结束。我们利用这一点，使用 while 循环即可遍历查询结果。使用`QSqlQuery::value()`函数即可按照 SELECT 语句的字段顺序获取到对应的数据库存储的数据。

对于数据库事务的操作，我们可以使用`QSqlDatabase::transaction()`开启事务，`QSqlDatabase::commit()`或者`QSqlDatabase::rollback()`结束事务。使用`QSqlDatabase::database()`函数则可以根据名字获取所需要的数据库连接。

MFC中的sqlite操作
=============

  
[GitHub - Hygens/UsersRegistrationSPA: .NET Core Web + Web API + SQLite3 + AngularJS(1.7.5) + Webpack + Automations](https://github.com/Hygens/UsersRegistrationSPA)  
[VC++、MFC Sqlite3数据库的使用 - 付栋 - 博客园](https://www.cnblogs.com/fudong071234/p/6424856.html)  
[VC连接SQLite3的方法(MFC封装类) - 无幻 - CSDN博客](https://blog.csdn.net/akof1314/article/details/5937103)  
[How to use sqlite library in mfc aplication?](https://social.msdn.microsoft.com/Forums/vstudio/en-US/42f9b356-24b1-4f38-8f78-228559c545d2/how-to-use-sqlite-library-in-mfc-aplication?forum=vcgeneral)  
[SQLite3 MFC Wrapper - CodeProject](https://www.codeproject.com/Articles/10060/SQLite3-MFC-Wrapper)  
[SQLite-with-MFC-in-Chinese/MFCwithSQLiteSample at master · Jia-Hong-Peng/SQLite-with-MFC-in-Chinese](https://github.com/Jia-Hong-Peng/SQLite-with-MFC-in-Chinese)  
[SRombauts/SQLiteCpp: SQLiteC++ (SQLiteCpp) is a smart and easy to use C++ SQLite3 wrapper.](https://github.com/SRombauts/SQLiteCpp)  
[A small example program using SQLite with C++](https://gist.github.com/2424514)  
[A small example program using SQLite with C++](https://gist.github.com/enile8/2424514)  
[Jia-Hong-Peng/sqlite: sqlite](https://github.com/jhpeng/sqlite)  
[Jia-Hong-Peng/sqlite: sqlite](https://github.com/Jia-Hong-Peng/sqlite)  
[sqlite/sqlite at master · Jia-Hong-Peng/sqlite](https://github.com/Jia-Hong-Peng/sqlite/tree/master/sqlite)  
[SQLite-with-MFC-in-Chinese/MFCwithSQLiteSample at master · Jia-Hong-Peng/SQLite-with-MFC-in-Chinese](https://github.com/Jia-Hong-Peng/SQLite-with-MFC-in-Chinese/tree/master/MFCwithSQLiteSample)
链接:[[ 转载]Qt数据库操作(附MFC sqlite c++ wrapper)](https://bbs.huaweicloud.com/blogs/197c180011c911e9bd5a7ca23e93a891)