原文作者:[Ittipon Teerapruettikulchai](https://medium.com/@ittipon.bay)

工作室使用虚幻的第2部分制作动作角色扮演游戏 - 制作主菜单

第2部分：使用一个按钮创建一个简单的主菜单页面。按开始游戏。

实际上，主菜单将在最后编写，但在第1部分中，写下游戏模式。展开游戏模式

首先创建UI的蓝图。创建一个UI文件夹，首先将其添加到ARPG中。保留所有UI的Blueprint / Widget。

通过右键单击并选择用户界面和窗口小部件蓝图，完成创建UI蓝图。

![1_YeTd1WLKJ1vtkxdJBqB53A.png](https://bbs-img.huaweicloud.com/blogs/img/1558588011166704.png "1558588011166704.png")

然后命名为MainMenuBP

![1_ILOezyUgXmqH8_0MfgfOtA.png](https://bbs-img.huaweicloud.com/blogs/img/1558588040320259.png "1558588040320259.png")

完成后，双击打开并添加一个按钮用于启动游戏

通过从调色板拖动按钮并粘贴

![1_JztQxI1JVwzLMUiMX6sn5w.png](https://bbs-img.huaweicloud.com/blogs/img/1558588042926003.png "1558588042926003.png")

然后将文本拖到按钮中，然后输入消息作为“开始游戏”或其他任何内容

![1_BJg3EpAbGjTDpiEwMqxuXg.png](https://bbs-img.huaweicloud.com/blogs/img/1558588049950710.png "1558588049950710.png")

然后选择Hierarchy旁边的按钮。我们将向按钮添加一个事件。

![1_si4flGXqiQkz5t18cbLYzQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558588056678665.png "1558588056678665.png")

选择并转到详细信息（通常在右侧）。转到事件。单击On Clicked上的+ Green按钮。单击按钮时添加要运行的事件。

![1_jo8460diI4g8OrlLDVn1Bw.png](https://bbs-img.huaweicloud.com/blogs/img/1558588065666601.png "1558588065666601.png")

完成并添加了一个命令以使其打开有一件事我想用作场景，我将使用精灵遗址。

![1_dYFqmwpI_WqRqX700vYhhA.png](https://bbs-img.huaweicloud.com/blogs/img/1558588071211008.png "1558588071211008.png")

从箭头绘制一条线并找到“打开级别”并选择创建命令。

![1_eb5hqJQAUPpWz99cfBQNpQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558588081758603.png "1558588081758603.png")

然后将Level Name分配给ElvenRuins

完成后，按编译/保存并关闭。接下来，它将创建一个播放器控制器，用于控制此场景中的按钮按下。

返回Folder ARPG / Blueprints，右键单击并选择Blueprint Class，创建Player Controller Blueprint。

![1_u9I1hJo7e4eTAzZpdevXDA.png](https://bbs-img.huaweicloud.com/blogs/img/1558588083216242.png "1558588083216242.png")

完成一个新窗口，选择播放器控制器

![1_2hibAAtjVGdX1UhT0_DZDQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558588092239480.png "1558588092239480.png")

完成命名MainMenuPlayerController

![1_acJxnvrIKy-KfmQWRgRzMw.png](https://bbs-img.huaweicloud.com/blogs/img/1558588101733221.png "1558588101733221.png")

然后双击打开它接下来，添加一个命令以显示鼠标光标并在游戏开始时创建UI主菜单。

转到我的蓝图。直接图表。双击打开事件BeginPlay。

![1_zOGPoPB7ilQasdCCMEV2bQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558588107293451.png "1558588107293451.png")

从Event BeginPlay中画一条线，找到Set Show Mouse Cursor并选择

![1_diTP6KByHtgznd0ALQa2zQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558588110186902.png "1558588110186902.png")

创建并勾选为了在游戏开始时显示Cursor

![1_ox3PCJUcMcCSKMfbz5S4eg.png](https://bbs-img.huaweicloud.com/blogs/img/1558588120709924.png "1558588120709924.png")

完成后，绘制线来制作它。创建Widget

![1_E_9EblVYnFn8KlHgri1B-g.png](https://bbs-img.huaweicloud.com/blogs/img/1558588128751834.png "1558588128751834.png")

并选择MainMenuBP使其在游戏开始时创建主菜单

![1_DmAUNe4uf21tQyfKjrFcBg.png](https://bbs-img.huaweicloud.com/blogs/img/1558588133572537.png "1558588133572537.png")

完成后，拖动该行以查找“添加到视口”

![1_Gn0spYh-fkuyzyNrE-GRkg.png](https://bbs-img.huaweicloud.com/blogs/img/1558588144579447.png "1558588144579447.png")

并从Create Main Menu BP Widget中绘制返回值。转到Add to Viewport Target，以便添加为游戏创建的主菜单。

![1_NEzD2D6JlACLdM6KvOfONA.png](https://bbs-img.huaweicloud.com/blogs/img/1558588151939364.png "1558588151939364.png")

然后按Compile / Save并关闭。接下来，为Main Menu场景创建游戏模式。转到ARPG / Blueprint。右键单击Create Blueprint。选择Game Mode Base。

![1_7lmfNUT_s7T-XhJEJjUq_Q.png](https://bbs-img.huaweicloud.com/blogs/img/1558588160946856.png "1558588160946856.png")

并命名MainMenuGameMode

![1_gkqjfm86FGTbBoEJwxR5uQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558588168122053.png "1558588168122053.png")

完成后，双击打开它，然后将播放器控制器更改为MainMenuPlayerController。

![1_9B7XPPoUoB8Iyi4ibYvbAw.png](https://bbs-img.huaweicloud.com/blogs/img/1558588181180578.png "1558588181180578.png")

然后编译/保存。接下来，我们将创建一个将用作主菜单的检查点。按File / New Level菜单...

![1_CrtX9U2qdkyf51K-e2Py9Q.png](https://bbs-img.huaweicloud.com/blogs/img/1558588194517169.png "1558588194517169.png")

选择空级别

![1_E2I1gDW1RCQYyRlYmsVDZw.png](https://bbs-img.huaweicloud.com/blogs/img/1558588195100112.png "1558588195100112.png")

并将其保存在名为MainMenu的ARPG / Maps中

接下来，将此阶段的游戏模式更改为MainMenuGameMode右键单击MainMenu Direct World Outline选择World Settings

![1_WCwHLtD6zVhyT47_AlKhUg.png](https://bbs-img.huaweicloud.com/blogs/img/1558588204929597.png "1558588204929597.png")

并且将显示选项卡世界设置以将游戏模式覆盖更改为MainMenuGameMode

![1_9v8Jp3e_MBrVexM6gG-ytQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558588206794478.png "1558588206794478.png")

保存并尝试播放。

按“开始游戏”按钮，它将转到指定的检查点。

![1_xIoSypppR5AxkWyah8E4iA.png](https://bbs-img.huaweicloud.com/blogs/img/1558588214665039.png "1558588214665039.png")

总之，这将显示如何使用游戏模式。如果未设置默认值，则覆盖将使用默认设置。如果MainMenu未设置为游戏模式覆盖，它将使用我们设置的ARPGGameMode第1集GameMode就像用于确定游戏哪一侧将使用玩家控制器的Config。典当，这是什么？但此外，我们还可以为游戏模式添加各种功能。

尝试双击游戏模式，然后按“打开完整蓝图编辑器”并向各种事件添加任何内容。

![1_gfV4faTEt_XyARPa_rbvcQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558588216633715.png "1558588216633715.png")

使用虚幻第4部分制作动作RPG游戏的工作坊 - 基本角色统计
==============================

到达第4集，现在是关于角色统计的一集。现在，您将学习如何使用结构来创建各种统计数据和玩家蓝图以创建统计数据统计数据。

从创建统计结构开始，但在开始创建一个名为Structures in ARPG的文件夹之前

![1_g7hmW3Ti2afD9QFK7HJL_A.png](https://bbs-img.huaweicloud.com/blogs/img/1558588513726561.png "1558588513726561.png")

然后通过右键单击并选择“蓝图/结构”来创建结构

![1_PJN7qvumkDf7PHIccEUKzw.png](https://bbs-img.huaweicloud.com/blogs/img/1558588519925500.png "1558588519925500.png")

并命名CharacterStats然后双击打开以添加统计数据

可以按“新建变量”按钮创建新变量

![1_93Q6mhy2qhjf-ta-xnk1WA.png](https://bbs-img.huaweicloud.com/blogs/img/1558588520761230.png "1558588520761230.png")

我将创建的统计数据是HP，Mana，PAtk，PDef，MAtk，MDef，Evasion，Accuracy。

![1_rcJ9Bj04LDoNxOPd9qyazw.png](https://bbs-img.huaweicloud.com/blogs/img/1558588528795848.png "1558588528795848.png")

然后创建一个CharacterAttributes具有以下变量：力量，智能，敏捷

![1_YD0ElaDB2kFd_c72atxXpg.png](https://bbs-img.huaweicloud.com/blogs/img/1558588536953975.png "1558588536953975.png")

完成后，在ARPG /蓝图中创建一个名为ARPGCharacterComponent的Actor组件。

![1_uDs-AhldoWBntFuhRcUGfg.png](https://bbs-img.huaweicloud.com/blogs/img/1558588538645032.png "1558588538645032.png")

右键单击，选择Blueprints / Blueprint Class

![1_MTbkIYyaFC4qM9lA0IEijQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558588547265053.png "1558588547265053.png")

选择Actor Component

![1_3lnmYa97VosbDueHdUMReA.png](https://bbs-img.huaweicloud.com/blogs/img/1558588556937427.png "1558588556937427.png")

命名为ARPGCharacterComponent

创建时打开以创建变量，包括

*   CurrentHP - HP玩游戏时如果此值为0，则字符将死亡，将变量类型分配给Integer。
    
*   CurrentMana - 玩游戏时的法力如果此值不够，技能将无法使用技能，请将变量类型设置为Integer。
    
*   字符级别 - 级别，将变量类型设置为整数。将默认值设置为1.默认设置可以通过
    

![1_ArW1yHh7vcXyfKqLIavLZQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558588558588388.png "1558588558588388.png")

可以直接设置默认值。详细信息如果没有要编辑的频道，请尝试编译。

*   字符的Exp-Exp，将变量的类型定义为Integer
    
*   StatPoints - 添加各种属性的值，将变量类型定义为Integer。
    
*   SkillPoints - 用于技能的值
    
*   属性 - 字符的属性，将变量的类型定义为CharacterAttributes
    

接下来，创建一个Function，计算名为GetTotalAttributes和Function的所有属性值，计算名为GetTotalStats的所有Stats值。

首先创建Function GetTotalAttributes。

![1_WABJ8szKdoSU3oIEatf3lw.png](https://bbs-img.huaweicloud.com/blogs/img/1558588569134035.png "1558588569134035.png")

按此按钮可以创建新功能

![1_ID6Khy6womXmcUe-pv1QCQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558588574849481.png "1558588574849481.png")

命名为GetTotalAttributes

完成。双击打开GetTotalAttributes图形。将输出类型定义为名为Result的CharacterAttributes。

![1_tCCXFdZyKGan5v9e3QRfzA.png](https://bbs-img.huaweicloud.com/blogs/img/1558588582999560.png "1558588582999560.png")

此时，函数GetTotalAttributes将返回之前的属性，但将来，将使用各种可穿戴项目计算所有属性。

![1_nEh1goc_SNTiVbNNSQpPVA.png](https://bbs-img.huaweicloud.com/blogs/img/1558588583172547.png "1558588583172547.png")

完成了创建GetTotalStats函数回到CharacterStats名为Result

![1_1Ak0OMqOvq8v1qKbt1vLUw.png](https://bbs-img.huaweicloud.com/blogs/img/1558588595756156.png "1558588595756156.png")

并在此函数中创建局部变量或变量。只有名为TotalAttributes的是CharacterAttributes类型。我们将此值用于各种属性统计信息。

![1_C7Ld9hoE0zGS7c-GLqoNuw.png](https://bbs-img.huaweicloud.com/blogs/img/1558588601505953.png "1558588601505953.png")

按+按钮增加局部变量

![1_TiO8JrF79SZ9hkGQDLkU2Q.png](https://bbs-img.huaweicloud.com/blogs/img/1558588607514769.png "1558588607514769.png")

命名为TotalAttributes将变量类型设置为CharacterAttributes

完成后，添加此功能序列进行配置TotalAttributes接受来自Function GetTotalAttributes的值。

![1_eX7m2IVjkXlCbL_OwjHcGg.png](https://bbs-img.huaweicloud.com/blogs/img/1558588610573233.png "1558588610573233.png")

然后使用属性计算统计数据。

*   1力量 - 将增加Hp 10，PAtk 5，PDef 3
    
*   1智能 - 将添加Mana 5，MAtk 5，PDef 3
    
*   1敏捷 - 将增加逃避2，准确性3
    

![1_INnVsa3x03WDMJ2LuZHJmw.png](https://bbs-img.huaweicloud.com/blogs/img/1558588619600472.png "1558588619600472.png")

确定强度计算的值

![1_WYiIrLej20iRcb9igXRxkg.png](https://bbs-img.huaweicloud.com/blogs/img/1558588624416552.png "1558588624416552.png")

确定从计算智能中获得的值

![1_-n9ulpjHWQgEuJws6AACGA.png](https://bbs-img.huaweicloud.com/blogs/img/1558588630180354.png "1558588630180354.png")

确定从敏捷性计算中获得的值

此外，您还可以使用级别计算统计数据。我将从每个级别为您提供统计值。

*   1级 - 将增加5马力，2法力，2个PAtk，1个PDef，2个MAtk，1个MDef
    

![1_HWfw1ZbHeTWqnLaUa7OwZQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558588653865407.png "1558588653865407.png")

使用“级别”计算“统计”值，并将值与旧值组合。

完成，然后恢复这个功能的总结

![1_t1U_FDA70ELmfZ7P_0r2_Q.png](https://bbs-img.huaweicloud.com/blogs/img/1558588660294368.png "1558588660294368.png")

然后将事件图打开到事件开始播放。我们将进行配置。CurrentHp / CurrentMana是所有Hp / Mana Stats的值

![1_p2TPKXXh5f8Lp_NlfL3rZQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558588669388594.png "1558588669388594.png")

将继续添加编译/保存。ARPGCharacterComponent进入ARPGCharacter双击打开ARPGCharacter

![1_rkqjVY0awGarN2p-GAyQnQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558588680759304.png "1558588680759304.png")

单击组件，单击添加组件

![1_UpNq6CfzV8L3eD7K62WaFA.png](https://bbs-img.huaweicloud.com/blogs/img/1558588692223646.png "1558588692223646.png")

完了，选择ARPGCharacterComponent

![1_LdGcgZPxcWx-omsRHh7pRg.png](https://bbs-img.huaweicloud.com/blogs/img/1558588695883487.png "1558588695883487.png")

创建后，新组件将如下所示。

接下来，将配置默认属性。

*   30力量
    
*   15智能
    
*   10敏捷
    

![1_SkDgpRevErT-Z4hqodS94g.png](https://bbs-img.huaweicloud.com/blogs/img/1558588704867285.png "1558588704867285.png")

完成添加图表以通过添加到事件开始播放来打印显示游戏开始时统计数量的消息

![1_jyZQ7iZBzDwpLi28XkU_5w.png](https://bbs-img.huaweicloud.com/blogs/img/1558588708104431.png "1558588708104431.png")

编译/保存并尝试测试。将在游戏开始时显示一条消息显示Stats，如图8所示。

![1_oza53xsc4YYIKwXat4WKQw.png](https://bbs-img.huaweicloud.com/blogs/img/1558588710179961.png "1558588710179961.png")

使用虚幻第6部分制作动作角色扮演游戏的工作坊 - 怪物
===========================

消失了将近2个月你是什么

在这一集中，我们将让Monster随机运行。

首先创建一个文件夹来存储与Monster相关的蓝图。有许多事情要保持易于管理。

![1_5KcWaYPlE13tMl8J1JnRpQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558589172539646.png "1558589172539646.png")

在ARPG /蓝图/怪物中创建文件夹怪物

完成重复（Ctrl + W）ARPGCharacter文件将其命名为ARPGMonster并进入Monsters文件夹

![1_illn3tFD7SOIYZTz9nqv3Q.png](https://bbs-img.huaweicloud.com/blogs/img/1558589175803850.png "1558589175803850.png")

右键单击，选择“复制”

![1_hO7wg1GlUbSnnf4XzccNDQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558589183415010.png "1558589183415010.png")

将文件命名为ARPGMonster并将其拖到Monsters文件夹并选择Move Here。

* * *

完成后，进入Monsters文件夹，创建AIController蓝图并命名MonsterAIController

![1_00S4R3nrK1gGI3lDhftFIQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558589195320417.png "1558589195320417.png")

右键单击，选择Blueprint Class

![1_GWU7TbXTISmv-6OldH61cw.png](https://bbs-img.huaweicloud.com/blogs/img/1558589203777524.png "1558589203777524.png")

键入aicontroller，选择AIController，然后单击“选择”。

![1_ZVpZrBpZxhEndL4QyvqdKg.png](https://bbs-img.huaweicloud.com/blogs/img/1558589209109061.png "1558589209109061.png")

名为MonsterAIController

* * *

接下来，创建一个行为树和黑板并命名它MonsterBehaviorTree和MonsterBlackboard分别

![1_H805LmFBYmCe7yfFkru9vg.png](https://bbs-img.huaweicloud.com/blogs/img/1558589216157790.png "1558589216157790.png")

![1_KgI5LPm6pCDrlsdgsi4UMA.png](https://bbs-img.huaweicloud.com/blogs/img/1558589222581919.png "1558589222581919.png")

* * *

完蛋了MonsterAIController我们将安排使用它的工作。事件图中的MonsterBehaviorTree

![1_r_uDe5O0ao2qPVo9MKNDRw.png](https://bbs-img.huaweicloud.com/blogs/img/1558589230568279.png "1558589230568279.png")

选择BTAsset作为MonsterBehaviorTree。

完成编译/保存并关闭

* * *

接下来，在Blackboard上设置密钥。分配给Blackboard的各种密钥将用于配置和应用行为树中的各种任务。

将作为键添加的键用于确定怪物的去向。它将创建一个名为MoveTarget的Vector键。

![1_Mwu3y8Lh9yNyiQGL30mgZw.png](https://bbs-img.huaweicloud.com/blogs/img/1558589234249942.png "1558589234249942.png")

打开MonsterBlackboard，按New Key并选择Vector。

![1_VtPjr8ZGI6ZZfT5abemvdg.png](https://bbs-img.huaweicloud.com/blogs/img/1558589238513337.png "1558589238513337.png")

然后保存并关闭。

* * *

将继续确定行为MonsterBehaviorTree允许它能够随机行走但在让它到达所需位置之前，您需要创建一个任务来随机化您必须走到的位置，然后在文件夹任务中创建BTTask蓝图并命名它FindRandomMoveTarget

![1_4ofdaqa4J5gMzTGgaGijWg.png](https://bbs-img.huaweicloud.com/blogs/img/1558589242650754.png "1558589242650754.png")

创建一个Task文件夹并进入

![1_00S4R3nrK1gGI3lDhftFIQ (1).png](https://bbs-img.huaweicloud.com/blogs/img/1558589243330838.png "1558589243330838.png")

右键单击，选择Blueprint Class

![1_NtIV01Idcqn7qviwckqyQA.png](https://bbs-img.huaweicloud.com/blogs/img/1558589250806050.png "1558589250806050.png")

键入bttask。选择BTTask\_BlueprintBase并按Select按钮。

![1_GXPd683oZlZ40kodvBYLvg.png](https://bbs-img.huaweicloud.com/blogs/img/1558589255589118.png "1558589255589118.png")

命名为FindRandomMoveTarget

完成了开放我们将安排工作。

创建名为MoveTargetKey的变量将类型设置为Blackboard Key Selector，然后将其缩小.Public允许从其他位置配置它。

![1_SrKzwx1-uobNlICUXOhHfA.png](https://bbs-img.huaweicloud.com/blogs/img/1558589259216283.png "1558589259216283.png")

创建名为MoveTargetKey的变量。将类型设置为Blackboard Key Selector。

![1_xDo7IueBmKQPfgVZDQp7pw.png](https://bbs-img.huaweicloud.com/blogs/img/1558589271669530.png "1558589271669530.png")

被指定为公众

完成打开事件图并确定工作，找到行走的位置。

![1_VI2VkHqVXLKeq5yVjPTDBA.png](https://bbs-img.huaweicloud.com/blogs/img/1558589272452495.png "1558589272452495.png")

创建一个事件接收执行。它将在行为树开始使用此任务时运行。

![1_Mw0cBYAzGZMZTP3fvpKV0g.png](https://bbs-img.huaweicloud.com/blogs/img/1558589280421736.png "1558589280421736.png")

拉动AIController控制的角色的Pawn。

![1_1Q6RkRWAZgXH-iExsaiJ2w.png](https://bbs-img.huaweicloud.com/blogs/img/1558589288400835.png "1558589288400835.png")

获取角色在NavMesh中找到随机位置的位置。

![1_telc2utKjahASOJsCG-0Ow.png](https://bbs-img.huaweicloud.com/blogs/img/1558589297455878.png "1558589297455878.png")

在黑板上配置

![1_gxpWtp1cwyR-3nFOoVl-OQ.png](https://bbs-img.huaweicloud.com/blogs/img/1558589307643937.png "1558589307643937.png")

通过将Success值指定为True来结束任务，以指示此任务已完成。没问题.
链接:[unreal相关](https://bbs.huaweicloud.com/blogs/44a6c0787d1c11e9bd5a7ca23e93a891)