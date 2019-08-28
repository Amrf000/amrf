一个需要注意的细节:

[https://github.com/apache/lucene-solr/blob/master/lucene/queryparser/src/java/org/apache/lucene/queryparser/flexible/standard/QueryParserUtil.java](https://github.com/apache/lucene-solr/blob/master/lucene/queryparser/src/java/org/apache/lucene/queryparser/flexible/standard/QueryParserUtil.java)

使用QueryParserUtil.escape

参考文档:

[https://github.com/Stratio/cassandra-lucene-index/issues/119](https://github.com/Stratio/cassandra-lucene-index/issues/119)

[https://blog.csdn.net/foamflower/article/details/5724823](https://blog.csdn.net/foamflower/article/details/5724823)

[https://stackoverflow.com/questions/17839053/how-to-perform-a-lucene-query-containing-special-character-using-queryparser](https://stackoverflow.com/questions/17839053/how-to-perform-a-lucene-query-containing-special-character-using-queryparser)

\=========================================

1)原来项目里使用的是lucene,和项目耦合的厉害，每次重启项目都要进行相关的初始化很占用时间，现在考虑切换solr独立部署出去;

2)上次把项目中的paoding切成了word,这次还保留word分词;

参考：[在Solr中配置中文分词器word](https://www.jianshu.com/p/935fd849845f)

[全文检索Solr集成HanLP中文分词](http://www.hankcs.com/nlp/segment/full-text-retrieval-solr-integrated-hanlp-chinese-word-segmentation.html)

[Solr-6.5.1配置中文分词器smartcn](https://blog.csdn.net/qq_28988969/article/details/73028544)

[给solr配置中文分词器](https://blog.csdn.net/zcl_love_wx/article/details/52091622)

[https://callan.iteye.com/blog/155602](https://callan.iteye.com/blog/155602)

[https://zq99299.github.io/note-book/elasticsearch-senior/depth-search/26-lucene-score.html#query-normalization-factor](https://zq99299.github.io/note-book/elasticsearch-senior/depth-search/26-lucene-score.html#query-normalization-factor)

[https://baobeituping.iteye.com/blog/847085](https://baobeituping.iteye.com/blog/847085)

[https://blog.csdn.net/dm\_vincent/article/details/42113401](https://blog.csdn.net/dm_vincent/article/details/42113401)

[https://blog.csdn.net/superxlcr/article/details/78932179](https://blog.csdn.net/superxlcr/article/details/78932179)

[https://blog.csdn.net/lwwgtm/article/details/60353812](https://blog.csdn.net/lwwgtm/article/details/60353812)

[https://blog.csdn.net/IsResultXaL/article/details/48683637](https://blog.csdn.net/IsResultXaL/article/details/48683637)

[https://blog.csdn.net/yelllowcong/article/details/78698506](https://blog.csdn.net/yelllowcong/article/details/78698506)

[https://zhuyuehua.iteye.com/blog/1985163](https://zhuyuehua.iteye.com/blog/1985163)

[https://stackoverflow.com/questions/3307890/how-to-query-lucene-with-like-operator](https://stackoverflow.com/questions/3307890/how-to-query-lucene-with-like-operator)

[https://scholarworks.sjsu.edu/cgi/viewcontent.cgi?article=1645&context=etd\_projects](https://scholarworks.sjsu.edu/cgi/viewcontent.cgi?article=1645&context=etd_projects)

[https://github.com/Urthen](https://github.com/Urthen)
链接:[lucence特殊字符转义](https://bbs.huaweicloud.com/blogs/f226772835b811e9bd5a7ca23e93a891)