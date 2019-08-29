丢失的情况下面的方法都不太适用，可以使用navicat打开History文件筛选出点击率高的url备份，只能算一定意义上的补救吧;
-----------------------------------------------------------------

chrome leveldb查看工具  

[https://github.com/jakearchibald/idb/issues/7](https://github.com/jakearchibald/idb/issues/7)

[https://github.com/heapwolf/levelui](https://github.com/heapwolf/levelui)

[https://fastonosql.com/pro\_users\_downloads](https://fastonosql.com/pro_users_downloads)

//=================

如果错误...你删除onetab扩展或你的Chrome崩溃或Windows升级或任何原因，你不能得到你的onetab网址列表...别担心。

在旧的Windows文件夹...转到

C：\\ Windows.old \\ Users \\ <User> \\ AppData \\ Local \\ Google \\ Chrome \\ User Data \\ Default \\ Local Storage \\ leveldb

将所有内容复制到以下位置

C：\\ Users \\ <Users> \\ AppData \\ Local \\ Google \\ Chrome \\ User Data \\ Default \\ Local Storage \\ leveldb

杀死Chrome，如果它打开...然后重新打开...你应该能够看到你以前的所有onetab网址:)

//=============  

您是否碰巧在Chrome设置文件夹中进行了以前的备份？例如

C:\\Users\\YOUR-WINDOWS-USERNAME\\AppData\\Local\\Google\\Chrome\\User Data\\Default

非常确定您的扩展设置在那里（确切地说是Extensions文件夹），您可以恢复旧的扩展设置并查看OneTab是否加载了之前保存的选项卡。

除此之外，你可能运气不好。当您登录Google帐户时，Chrome本身会同步各种内容，例如扩展程序，但它可能已同步当前的OneTab状态，因此您无法以这种方式恢复任何旧设置。

//===========  

这里有Chrome 61.0.3163.100和OneTab 1.18。

刚丢失了我的所有OneTab数据（2个月前做了备份，所以它或多或少都没问题）。试图追踪数据存储的地方。

以前的论坛/堆栈线程表示以下路径和文件：

C:\\Users\\<Username>\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Local Storage\\  
      chrome-extension\_chphlpgkkbolifaimnlloiipkdnihall\_0.localstorage-journal
      chrome-extension\_chphlpgkkbolifaimnlloiipkdnihall\_0.localstorage

该_chphlpgkkbolifaimnlloiipkdnihall_正对所有安装一样，因为它是OneTab的Play商店中的ID（URL）。

问题：

*   文件不在那里。执行Recuva（深度扫描）不会显示任何内容（甚至不可恢复的剩余物）。
    
*   OneTab再次运行：我可以添加新条目（在空白页面中），退出Chrome，重新启动它，OneTab会记住这些新条目。仍然没有.localstorage文件。
    
*   AppData \\ Local \\ Google \\ Chrome \\User Data \\ Default \\ Extensions有一个_chphlpgkkbolifaimnlloiipkdnihall_文件夹（Chrome浏览器的整个用户数据文件夹中唯一的文件夹），但其大小（根据MS Windows资源管理器属性）在添加或添加时似乎没有变化从OneTab删除条目（即使关闭Chrome后）。  
    该文件夹包含所有这些文件的哈希值的javascripts，默认HTML页面（空数据），图像，字体，CSS和JSON，而不是数据。
    
*   AppData \\ Local \\ Google \\ Chrome \\User Data \\ Default \\ databases和AppData \\ Local \\ Google \\ Chrome \\User Data \\ Default \\ IndexedDB不包含任何_chphlpgkkbolifaimnlloiipkdnihall_文件夹或OneTab文件（据我所知）
    
*   AppData \\ Local \\ Google \\ Chrome \\User Data \\ Default \\ Local Storage \\ leveldb包含多个文件，一个可以存储数据的位置（足够大：2MB）。不幸的是，我无法读取.ldb文件（MS Access似乎无法完成，我在处理此类文件/数据库方面根本不了解：s）。
    

编辑：OneTab的用户数据是leveldb中的单个.ldb文件，文件名在任何错误上都会更改。如果Chrome + OneTab停止将.ldb文件识别为有效，则永远将其归类为无效（必须存在某种独特的哈希值）。

为了找到答案，我只是将正确的.ldb文件移出文件夹，启动了Chrome，OneTab是空的。关闭Chrome，将文件移回，启动Chrome，OneTab仍为空。对于丢失OneTab选项卡的所有人来说，哈希/任何系统很可能出于多种原因（随机地，当Chrome或操作系统崩溃时）出现故障，使得现有数据库在扩展程序中无效。

尝试在AppData \\ Local \\ Google \\ Chrome \\ User Data \\ Default \\ Local Storage \\ leveldb中备份/恢复.ldb文件，以防有人弄清楚如何恢复其中的数据。

〜

好消息：如果扩展名无法写入文件_（因为我手动将其设置为只读）_，它将创建一个新的扩展名并且不会删除前一个扩展名。

非常糟糕的新闻：Chrome会每隔x分钟自动从未使用/未标记为必需的扩展名.ldb文件中刷新leveldb文件夹。

因此，如果您没有自己的备份或两个“chrome-extension\_chphlpgkkbolifaimnlloiipkdnihall\_0.localstorage”文件，剩下的就是运行数据恢复软件（下面的注释1）并希望找到正确的.ldb文件然后找出如何打开它来提取数据。

注1：[Recuva](http://127.0.0.1:8580/do/zaak3/otoLkA8A608XLejX/recuva)是免费的，并给出了不错的结果。选择“所有文件”，“在特定位置”，AppData \\ Local \\ Google \\ Chrome \\ User Data \\ Default \\ Local Storage \\ leveldb文件夹的完整路径，“启用深度扫描”并祈祷。

但鉴于Chrome及其扩展程序不断覆盖它们所分配的存储扇区，除非你在文件夹中消失之后立即执行此操作，否则它完全没有希望（我尝试过它，只有3个小时内有3个.ldb文件， 2已被Chrome和我的AV部分覆盖。

〜

故事的道德启示：

OneTab dev（s），by

*   拒绝提供有关如何保存其用户数据的任何文档，
    
*   没有提供联系作者的正确方式（没有任何可用的信息，这也使其成为信任，安全和隐私方面的问题），
    
*   没有提供自动备份系统（历史记录为2到5个版本），因此当无法读取当前版本时，可以恢复以前的状态，
    
*   依赖Chrome中不断变化的数据存储解决方案，如果没有标记，则会刷新，
    
*   依赖于一个伟大但非常脆弱的技术（[levelDB](http://127.0.0.1:8580/do/z__k3/NiLoRTRkgfAGLj8y/tACA/LevelDB#Bugs_and_reliability)：_“LevelDB因其不可靠而广受关注，它管理的数据库容易出现腐败。过去版本的LevelDB的学术研究发现，在某些文件系统下，存储的数据在系统崩溃或电源故障后，这些版本的LevelDB可能会变得不一致。“_
    

......使用户体验不确定且风险很大。在完整性和访问方面，经常手动备份HTML页面是确保用户数据得以保留的唯一方法。在我看来，这是一个重大缺陷。

我曾经是OneTab的忠实粉丝，但我可能只是放弃了另一个扩展（比如Tabs Outliner，只是安装它）。

如果您决定使用OneTab，请始终自行备份已填充的OneTab HTML页面（浏览器中的页面）。

//====================  

希望您已经拥有OneTab导出，或者仍然可以访问OneTab选项卡，以便创建一个。

无论如何，如果您决定继续使用OneTab，您应该知道如何导出OneTab选项卡。不幸的是，[OneTab帮助](https://www.one-tab.com/help)页面没有解释如何导出，所以这里是步骤：

1.  单击OneTab Chrome扩展程序图标
    
2.  单击“导出/导入URL”
    
3.  复制“导出URL”部分中的所有文本
    
4.  将它们粘贴到Google Doc，Word文档或文本文件中
    
5.  如果您的OneTab标签再次消失，请将文件保存在安全的地方
    

如果你很幸运最近手动导出了OneTab标签，那么这是恢复丢失标签的最佳方法：

1.  单击OneTab Chrome扩展程序图标
    
2.  单击“导出/导入URL”
    
3.  展开“导入URL”部分
    
4.  打开OneTab导出文件
    
5.  将文件中的所有网址复制并粘贴到“导入网址”部分
    
6.  单击“导入”以还原丢失的选项卡
    

OneTab备份不包括选项卡组的任何已加星标或已锁定状态。这意味着您需要在还原后手动重新锁定并重新标记所有选项卡组。

//===========================
链接:[Onetab数据丢失之后!!!](https://bbs.huaweicloud.com/blogs/fa4e58ad238711e9bd5a7ca23e93a891)