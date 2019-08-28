效果图:

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1545410883634482.png "1545410883634482.png")

代码只是对freetype api的简单使用，只是用来验证参考的：

#include <QString>
#include <iostream>
#include <map>
#include <string>
#define GLEW\_STATIC
#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <glm/glm.hpp>
#include <glm/gtc/matrix\_transform.hpp>
#include <glm/gtc/type\_ptr.hpp>
#include <ft2build.h>
#include FT\_FREETYPE\_H
#include <freetype/ftglyph.h> .
#include "Shader.h"
const GLuint WIDTH = 800, HEIGHT = 600;
struct Character {
    GLuint TextureID;   
    glm::ivec2 Size;    
    glm::ivec2 Bearing;  
    GLuint Advance;    
};
std::map<GLshort, Character> Characters;
GLuint VAO, VBO;
void RenderText(Shader &shader, const QString& text, GLfloat x, GLfloat y, GLfloat scale, glm::vec3 color);
int main(int argc, char \*argv\[\])
{
    glfwInit();
    glfwWindowHint(GLFW\_CONTEXT\_VERSION\_MAJOR, 3);
    glfwWindowHint(GLFW\_CONTEXT\_VERSION\_MINOR, 3);
    glfwWindowHint(GLFW\_OPENGL\_PROFILE, GLFW\_OPENGL\_CORE\_PROFILE);
    glfwWindowHint(GLFW\_RESIZABLE, GL\_FALSE);
    GLFWwindow\* window = glfwCreateWindow(WIDTH, HEIGHT, "LearnOpenGL", nullptr, nullptr); 
    glfwMakeContextCurrent(window);
    glewExperimental = GL\_TRUE;
    glewInit();
    glViewport(0, 0, WIDTH, HEIGHT);
    glEnable(GL\_CULL\_FACE);
    glEnable(GL\_BLEND);
    glBlendFunc(GL\_SRC\_ALPHA, GL\_ONE\_MINUS\_SRC\_ALPHA);
    Shader shader("shaders/text.vs", "shaders/text.frag");
    glm::mat4 projection = glm::ortho(0.0f, static\_cast<GLfloat>(WIDTH), 0.0f, static\_cast<GLfloat>(HEIGHT));
    shader.Use();
    glUniformMatrix4fv(glGetUniformLocation(shader.getProgram(), "projection"), 1, GL\_FALSE, glm::value\_ptr(projection));
    FT\_Library ft;
    if (FT\_Init\_FreeType(&ft))
        std::cout << "ERROR::FREETYPE: Could not init FreeType Library" << std::endl;
    FT\_Face face;
    if (FT\_New\_Face(ft, "fonts/FZSTK.TTF", 0, &face))
        std::cout << "ERROR::FREETYPE: Failed to load font" << std::endl;
if (FT\_Select\_Charmap(face, ft\_encoding\_unicode))
    std::cout << "ERROR::FT\_Select\_Charmap" << std::endl;
    FT\_Set\_Pixel\_Sizes(face, 0, 48);
    glPixelStorei(GL\_UNPACK\_ALIGNMENT, 1);
int charUnicode = 0x6211;
int index =  FT\_Get\_Char\_Index(face,charUnicode);
FT\_Load\_Glyph(face,index, FT\_LOAD\_RENDER);
GLuint texture;
glGenTextures(1, &texture);
glBindTexture(GL\_TEXTURE\_2D, texture);
glTexImage2D(
    GL\_TEXTURE\_2D,
    0,
    GL\_RED,
    face->glyph->bitmap.width,
    face->glyph->bitmap.rows,
    0,
    GL\_RED,
    GL\_UNSIGNED\_BYTE,
    face->glyph->bitmap.buffer
);
glTexParameteri(GL\_TEXTURE\_2D, GL\_TEXTURE\_WRAP\_S, GL\_CLAMP\_TO\_EDGE);
glTexParameteri(GL\_TEXTURE\_2D, GL\_TEXTURE\_WRAP\_T, GL\_CLAMP\_TO\_EDGE);
glTexParameteri(GL\_TEXTURE\_2D, GL\_TEXTURE\_MIN\_FILTER, GL\_LINEAR);
glTexParameteri(GL\_TEXTURE\_2D, GL\_TEXTURE\_MAG\_FILTER, GL\_LINEAR);
Character character = {
    texture,
    glm::ivec2(face->glyph->bitmap.width, face->glyph->bitmap.rows),
    glm::ivec2(face->glyph->bitmap\_left, face->glyph->bitmap\_top),
    face->glyph->advance.x
};
Characters.insert(std::pair<GLshort, Character>(charUnicode, character));
charUnicode = 21644;
index =  FT\_Get\_Char\_Index(face,charUnicode);
FT\_Load\_Glyph(face,index, FT\_LOAD\_RENDER);
glGenTextures(1, &texture);
glBindTexture(GL\_TEXTURE\_2D, texture);
glTexImage2D(
    GL\_TEXTURE\_2D,
    0,
    GL\_RED,
    face->glyph->bitmap.width,
    face->glyph->bitmap.rows,
    0,
    GL\_RED,
    GL\_UNSIGNED\_BYTE,
    face->glyph->bitmap.buffer
);
 glTexParameteri(GL\_TEXTURE\_2D, GL\_TEXTURE\_WRAP\_S, GL\_CLAMP\_TO\_EDGE);
 glTexParameteri(GL\_TEXTURE\_2D, GL\_TEXTURE\_WRAP\_T, GL\_CLAMP\_TO\_EDGE);
 glTexParameteri(GL\_TEXTURE\_2D, GL\_TEXTURE\_MIN\_FILTER, GL\_LINEAR);
 glTexParameteri(GL\_TEXTURE\_2D, GL\_TEXTURE\_MAG\_FILTER, GL\_LINEAR);
Character character1 = {
    texture,
    glm::ivec2(face->glyph->bitmap.width, face->glyph->bitmap.rows),
    glm::ivec2(face->glyph->bitmap\_left, face->glyph->bitmap\_top),
    face->glyph->advance.x
};
Characters.insert(std::pair<GLshort, Character>(charUnicode, character1));
    for (GLubyte c = 0; c < 128; c++)
    {
        if (FT\_Load\_Char(face, c, FT\_LOAD\_RENDER))
        {
            std::cout << "ERROR::FREETYTPE: Failed to load Glyph" << std::endl;
            continue;
        }
        GLuint texture;
        glGenTextures(1, &texture);
        glBindTexture(GL\_TEXTURE\_2D, texture);
        glTexImage2D(
            GL\_TEXTURE\_2D,
            0,
            GL\_RED,
            face->glyph->bitmap.width,
            face->glyph->bitmap.rows,
            0,
            GL\_RED,
            GL\_UNSIGNED\_BYTE,
            face->glyph->bitmap.buffer
        );
        glTexParameteri(GL\_TEXTURE\_2D, GL\_TEXTURE\_WRAP\_S, GL\_CLAMP\_TO\_EDGE);
        glTexParameteri(GL\_TEXTURE\_2D, GL\_TEXTURE\_WRAP\_T, GL\_CLAMP\_TO\_EDGE);
        glTexParameteri(GL\_TEXTURE\_2D, GL\_TEXTURE\_MIN\_FILTER, GL\_LINEAR);
        glTexParameteri(GL\_TEXTURE\_2D, GL\_TEXTURE\_MAG\_FILTER, GL\_LINEAR);
        Character character = {
            texture,
            glm::ivec2(face->glyph->bitmap.width, face->glyph->bitmap.rows),
            glm::ivec2(face->glyph->bitmap\_left, face->glyph->bitmap\_top),
            face->glyph->advance.x
        };
        Characters.insert(std::pair<GLshort, Character>(c, character));
    }
    glBindTexture(GL\_TEXTURE\_2D, 0);
    FT\_Done\_Face(face);
    FT\_Done\_FreeType(ft);
    glGenVertexArrays(1, &VAO);
    glGenBuffers(1, &VBO);
    glBindVertexArray(VAO);
    glBindBuffer(GL\_ARRAY\_BUFFER, VBO);
    glBufferData(GL\_ARRAY\_BUFFER, sizeof(GLfloat) \* 6 \* 4, NULL, GL\_DYNAMIC\_DRAW);
    glEnableVertexAttribArray(0);
    glVertexAttribPointer(0, 4, GL\_FLOAT, GL\_FALSE, 4 \* sizeof(GLfloat), 0);
    glBindBuffer(GL\_ARRAY\_BUFFER, 0);
    glBindVertexArray(0);
    while (!glfwWindowShouldClose(window))
    {
        glfwPollEvents();
        glClearColor(0.2f, 0.3f, 0.3f, 1.0f);
        glClear(GL\_COLOR\_BUFFER\_BIT);
        RenderText(shader, "我This 和eeis sample text", 25.0f, 25.0f, 1.0f, glm::vec3(0.5, 0.8f, 0.2f));
        RenderText(shader, "(C) LearnOpenGL.com", 540.0f, 570.0f, 0.5f, glm::vec3(0.3, 0.7f, 0.9f));
        glfwSwapBuffers(window);
    }
    glfwTerminate();
    return 0;
}
void RenderText(Shader &shader, const QString& text, GLfloat x, GLfloat y, GLfloat scale, glm::vec3 color)
{
    shader.Use();
    glUniform3f(glGetUniformLocation(shader.getProgram(), "textColor"), color.x, color.y, color.z);
    glActiveTexture(GL\_TEXTURE0);
    glBindVertexArray(VAO);
    int nCount = text.count();
    for(int i = 0 ; i < nCount ; i++)
    {
        QChar cha = text.at(i);
        ushort uni = cha.unicode();
        Character ch;
        if(uni >= 0x4E00 && uni <= 0x9FA5)
        {
            if(Characters.find(uni)!=Characters.end())
            {
            }else{
                std::cout<<"unicode:"<<uni<<std::endl;
                continue;
            }
        }
        ch = Characters\[uni\];
        GLfloat xpos = x + ch.Bearing.x \* scale;
        GLfloat ypos = y - (ch.Size.y - ch.Bearing.y) \* scale;
        GLfloat w = ch.Size.x \* scale;
        GLfloat h = ch.Size.y \* scale;
        GLfloat vertices\[6\]\[4\] = {
            { xpos,     ypos + h,   0.0, 0.0 },
            { xpos,     ypos,       0.0, 1.0 },
            { xpos + w, ypos,       1.0, 1.0 },
            { xpos,     ypos + h,   0.0, 0.0 },
            { xpos + w, ypos,       1.0, 1.0 },
            { xpos + w, ypos + h,   1.0, 0.0 }
        };
        glBindTexture(GL\_TEXTURE\_2D, ch.TextureID);
        glBindBuffer(GL\_ARRAY\_BUFFER, VBO);
        glBufferSubData(GL\_ARRAY\_BUFFER, 0, sizeof(vertices), vertices); 
        glBindBuffer(GL\_ARRAY\_BUFFER, 0);
        glDrawArrays(GL\_TRIANGLES, 0, 6);
        x += (ch.Advance >> 6) \* scale; 
    }
    glBindVertexArray(0);
    glBindTexture(GL\_TEXTURE\_2D, 0);
}

参考：[文字渲染](https://learnopengl-cn.readthedocs.io/zh/latest/06%20In%20Practice/02%20Text%20Rendering/)  
参考：[Text Rendering](https://learnopengl.com/In-Practice/Text-Rendering)  
参考：[GLSL Font](http://lazyfoo.net/tutorials/OpenGL/35_glsl_font/index.php)  
参考：[FreeType-2.9.1 API参考](https://www.freetype.org/freetype2/docs/reference/ft2-base_interface.html#FT_Load_Glyph)  
参考：[I. Simple Glyph Loading](https://www.freetype.org/freetype2/docs/tutorial/step1.html)  
参考：[eetype不能显示字母、数字、标点符号，可以显示汉字是怎么回事？](https://bbs.csdn.net/topics/390629916?page=1)  
参考：[OpenGL显示文字--显示汉字](https://blog.csdn.net/u014047672/article/details/71514487)  
参考：[OpenGL渲染绘制中文字符](http://www.icodelogic.com/?p=210)  
参考：[opengl绘制汉字](https://blog.csdn.net/t_w_s/article/details/16992203)  
参考：[OpenGL显示字体](https://blog.csdn.net/xuguangsoft/article/details/7982175)  
参考：[OpenGL点阵字体绘制终极解决方案!哈!](http://www.cppblog.com/zmj/archive/2015/11/07/212209.html)  
参考：[OpenGL 图形库的使用（四十六）—— 实战之文本渲染Text Rendering](https://www.jianshu.com/p/bef7e25114f4)  
参考：[OpenGL 绘制简单的英文字符](http://www.voidcn.com/article/p-qjsbizmx-bqa.html)  
参考：[glProject](https://github.com/wyj302/glProject/blob/master/Shader.h)  
参考：[透過 FreeType 繪製 Unicode ASCII Art](http://blog.linux.org.tw/~jserv/archives/002050.html)  
参考：[利用freetype显示unicode字符](https://blog.csdn.net/liqinghan/article/details/51901861)  
参考：[freetype\_test.cpp](https://gist.github.com/er91/e4f8dd352ad6f01a8922)  
参考：[游戏如何处理渲染亚洲unicode文本？](https://gamedev.stackexchange.com/questions/81401/how-do-games-handle-rendering-asian-unicode-text)  
参考：[freetype-gl](https://code.google.com/archive/p/freetype-gl/)  
参考：[利用freetype显示unicode字符](http://www.voidcn.com/article/p-cjlpydbt-vn.html)  
参考：[第二人生的源码分析(五十八)使用FreeType字体](https://yuanjinxiu.iteye.com/blog/1418985)  
参考：[fatal\_font.cpp](https://github.com/Atmosphere-NX/Atmosphere/blob/master/stratosphere/fatal/source/fatal_font.cpp)  
参考：[OpenGL显示unicode编码的三维汉字的方法](https://yiyu.iteye.com/blog/784949)  
参考：[Qt中获取字符串中的汉字](https://blog.csdn.net/wdl20170204/article/details/70670486)  
参考：[将freetype位图复制到opengl纹理的问题](https://stackoverflow.com/questions/15209494/problems-copying-freetype-bitmap-to-opengl-texture)  
参考：[Glyph Hell](http://chanae.walon.org/pub/ttf/ttf_glyphs.htm)  
参考：[Problem with GLEW on Windows when building a static library within another project](https://github.com/nigels-com/glew/issues/161)  
参考：[【OpenGL】使用FreeType库加载字体并在GL中绘制文字](https://www.cnblogs.com/crsky/p/7261090.html)  
参考：[freetype库实现文字显示](https://blog.csdn.net/guoke312/article/details/79562920)  
参考：[利用freetype显示中文字符](https://blog.csdn.net/wudebao5220150/article/details/39299659)  
参考：[使用freetype来显示中文汉字和英文字符](https://www.cnblogs.com/ynxf/p/6274067.html)  

第二阶段:

汉字那么多，康熙字典有3万印象中是这个数量级，常用汉字3000多，还有繁体简体的，怎么高效的渲染呢?

将所绘制的文字都放到一个较大的纹理上去，然后再纹理上做索引，当绘制的时候，去查表。在将纹理贴到网格上绘制出来.

表中可以先包含3000个常用字，然后没出现的动态注册添加到大纹理中去

参考:[\[置顶\]OpenGL11-绘制汉字最高效方法(使用Freetype)（代码已更新）](https://blog.csdn.net/qq_26280299/article/details/46741857)  
参考:[OpenGL11-绘制汉字最高效方法(使用Freetype)（代码已更新）](http://www.cnblogs.com/zhanglitong/p/3206497.html)  
参考:[\[置顶\]OpenGL11-绘制汉字最高效方法(使用Freetype)（代码已更新）](https://yq.aliyun.com/ziliao/569257)  
参考:[python+freetype+opencv 图片中文（汉字）显示 详细图文教程和项目完整源代码](https://blog.csdn.net/wyx100/article/details/75579581)  
参考:[FreeType使用的总结](http://www.cppblog.com/liangairan/archive/2016/09/11/214270.html)  
参考:[让irrlicht支持中文输入和输出](http://www.23book.net/SoftwareDev/VC/54899.htm)  
参考:[让OGRE支持中文（二）](http://dev.gameres.com/Program/Visual/3D/ogre/ttf.htm)  
参考:[Step 2 — managing glyphs](https://tools.ietf.org/doc/libfreetype6/tutorial/step2.html)  
参考:[freetype2 中文显示](http://blog.51cto.com/general/324523)  
参考:[在OpenGL繪製中文字](http://mudream.logdown.com/posts/257996/in-opengl-rendering-of-text)  
参考:[第二部分 管理字形](https://my.oschina.net/u/3773235/blog/1612640)  
参考:[freetype显示带有空格时，下一行的内容就不能显示了](http://bbs.100ask.org/thread-15894-1-1.html)  
参考:[修改cocos2dx-3.0有些字体描边偏移的问题](https://my.oschina.net/u/1414326/blog/279456)  
参考:[FT\_LOAD\_FLAGS](https://freetype-py.readthedocs.io/en/latest/ft_load_flags.html)  

后记:
---

打算让rtcw/quake系列的游戏也支持中文渲染，从上面的文章已经有了思路，可是还是想不好到底怎么修改，游戏渲染部分的代码还是要细细看明白才能找到正确的切入点；

网上看到ET支持unicode渲染，测试了一下

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1545922434125476.png "1545922434125476.png")

ET中的思路和原来ascii的渲染逻辑所以整体结构改变不是很大，但毕竟达到了效果 可以参考
链接:[freetype中文字符渲染](https://bbs.huaweicloud.com/blogs/41c31a61054011e9bd5a7ca23e93a891)