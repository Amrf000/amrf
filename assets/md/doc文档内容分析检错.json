### 背景:

java环境下可以使用:

jacob是java调用com;

poi属于独立解析;

docx4j只支持docx，需要先将doc转换成docx转换;

试了试直接在doc里面写一些vba，感觉分析效率太低了;

考虑到jacob很这种方式机制上比较相似，目前考虑先使用poi看看能不能达到预期;

\==>由于poi不方便在doc格式下添加批注(docx可以)

后来采用了aspose,这个是个有些商业属性的包

### 关于去除aspose功能限制，首先运行下面的初始化代码：

    public static void doInit(){
		 InputStream is = xxxx.class.getClassLoader().getResourceAsStream("\\\\license.xml");
		 License aposeLic = new License();
		 try {
			aposeLic.setLicense(is);
		} catch (Exception e) {
			e.printStackTrace();
		}
    }

运行后可以定位到报错的类和方法

我不是用的javassist进行修改，aspose最近的版本javassit修改结果有问题，

使用jd-gui打开后找到对应的类复制出来，在项目中的对应于该类文件创建一个一样的类，粘贴进去，修改掉一些语法错误，

将target中生成的.class用压缩工具拷贝回jar中对应的位置，

删除jar中的META-INF文件夹

参考：

[aspose.word.19.3](https://onew.me/2019/03/29/java-aspose-crack/)

[aspose.words](https://blog.csdn.net/yiyihuazi/article/details/78589799)

[Aspose-words 18.8](https://cloudstars.iteye.com/blog/2429592)

### 下面这个是个很有意思的问题:

现象p.getRange().replace似乎越界了，也像连续replace导致迭代器失效，下面这个方法可以解决这个问题

[https://forum.aspose.com/t/range-replace-how-to-replace-first-occurence-only/40275](https://forum.aspose.com/t/range-replace-how-to-replace-first-occurence-only/40275)

[https://webcache.googleusercontent.com/search?q=cache:0WkLaYf\_T4oJ:https://forum.aspose.com/t/range-replace-how-to-replace-first-occurence-only/40275+&cd=2&hl=zh-CN&ct=clnk](https://webcache.googleusercontent.com/search?q=cache:0WkLaYf_T4oJ:https://forum.aspose.com/t/range-replace-how-to-replace-first-occurence-only/40275+&cd=2&hl=zh-CN&ct=clnk)

[https://docs.aspose.com/display/wordsnet/Find+and+Replace](https://docs.aspose.com/display/wordsnet/Find+and+Replace)

[https://apireference.aspose.com/java/words/com.aspose.words/IReplacingCallback](https://apireference.aspose.com/java/words/com.aspose.words/IReplacingCallback)

[https://blog.csdn.net/lqzkcx3/article/details/71414693](https://blog.csdn.net/lqzkcx3/article/details/71414693)

[https://blog.csdn.net/WuLex/article/details/81702812](https://blog.csdn.net/WuLex/article/details/81702812)

其他参考:

[https://forum.aspose.com/t/multiple-lines-of-text-in-replace-command/126960](https://forum.aspose.com/t/multiple-lines-of-text-in-replace-command/126960)

[https://webcache.googleusercontent.com/search?q=cache:8jdDEL02sLQJ:https://docs.aspose.com/display/wordsjava/Find%2Band%2BReplace+&cd=2&hl=zh-CN&ct=clnk](https://webcache.googleusercontent.com/search?q=cache:8jdDEL02sLQJ:https://docs.aspose.com/display/wordsjava/Find%2Band%2BReplace+&cd=2&hl=zh-CN&ct=clnk)

[https://forum.aspose.com/t/identifying-the-paragraph-and-edit-replace-delete/53097/2](https://forum.aspose.com/t/identifying-the-paragraph-and-edit-replace-delete/53097/2)

[https://www.cnblogs.com/ggjucheng/p/3423731.html](https://www.cnblogs.com/ggjucheng/p/3423731.html)

[https://blog.csdn.net/weixin\_34409703/article/details/85974476](https://blog.csdn.net/weixin_34409703/article/details/85974476)

测试doc内容

0xDA00
0xDA01
0xDA02
0xDA03
0xDA04#
0xDA05
0xDA06(1256);.
dddd
0xDA00
0xDA01(7788)
dddd
0xDA02(3256)
0xDA03
0xDA04
0xDA05

处理

public class testAspose {
	public static void loopfile(String fileName) {
		try {
			File file = new File(fileName);
			InputStream in = new FileInputStream(file);
			Document doc = new Document(in);
			NodeCollection paragraphs = doc.getChildNodes(NodeType.PARAGRAPH, true);
			FindReplaceOptions options = new FindReplaceOptions();
		    options.setDirection(FindReplaceDirection.FORWARD);
			for(Paragraph p:(Iterable<Paragraph>)paragraphs) {
				String text = p.toString(SaveFormat.TEXT);
				System.out.println(text);
				options.setReplacingCallback(new ReplaceFirstOccourance(")"));
				p.getRange().replace(Pattern.compile("\\\\).+"), ")",options);
				/\*Pattern pt = Pattern.compile("0x\[A-Z0-9\]+\\\\(");
				Matcher m=pt.matcher(text);
				if(m.find()) {
					p.getRange().replace(Pattern.compile("(0x\[A-Z0-9\]+)"), m.group(0));
				}\*/
			}
			doc.save("C:\\\\Users\\\\lyw\\\\Desktop\\\\mir\\\\0xDA001.doc");
			in.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public static void main(String\[\] args) {
		 InputStream is = testAspose.class.getClassLoader().getResourceAsStream("\\\\license.xml");
         License aposeLic = new License();
         try {
			aposeLic.setLicense(is);
		} catch (Exception e) {
			e.printStackTrace();
		}
        loopfile("C:\\\\Users\\\\lyw\\\\Desktop\\\\mir\\\\0xDA00.doc");
        //System.out.println("ddddd");
        System.exit(0);
	}
}
class ReplaceFirstOccourance implements IReplacingCallback{
	String replaceText = "";
	private int mMatchNumber = 0;
	public ReplaceFirstOccourance(String text)
	{
		replaceText = text;
	}
	@Override
	public int replacing(ReplacingArgs e) throws Exception {
		Node currentNode = e.getMatchNode();
		mMatchNumber++;
		if (mMatchNumber == 1){
			if (e.getMatchOffset() > 0) {
				currentNode = SplitRun((Run)currentNode, e.getMatchOffset());
			}
			List<Node> runs = new ArrayList();
			int remainingLength = e.getMatch().group().length();
			while ((remainingLength > 0) &&(currentNode != null) &&
					(currentNode.getText().length() <= remainingLength)){
				runs.add(currentNode);
				remainingLength = remainingLength - currentNode.getText().length();
				do{
					currentNode = currentNode.getNextSibling();
				}while ((currentNode != null) && (currentNode.getNodeType() != NodeType.RUN));
			}
			if ((currentNode != null) && (remainingLength > 0)){
				SplitRun((Run)currentNode, remainingLength);
				runs.add(currentNode);
			}
			DocumentBuilder builder = new DocumentBuilder((Document)e.getMatchNode().getDocument());
			builder.moveTo((Run)runs.get(runs.size() - 1));
			builder.write(replaceText);
			for(Node run:runs) {
				run.remove();
			}
		}
		return ReplaceAction.SKIP;
	}
	private static Run SplitRun(Run run, int position) throws Exception {
		Run afterRun = (Run) run.deepClone(true);
		afterRun.setText(run.getText().substring(position));
		run.setText(run.getText().substring(0, position));
		run.getParentNode().insertAfter(afterRun, run);
		return afterRun;
	}
}

*   aspose添加批注示例
    

	public static void addComment(Document doc,int\[\] commentId,Paragraph para,String text) {
		Comment comment = new Comment(doc, "liuyawu", "DH", new Date());
		Node\[\] runs = para.getChildNodes(NodeType.RUN, true).toArray();	
		//Run firstRun = para.getRuns().get(0);
		//Run lastRun = para.getRuns().get(para.getRuns().getCount()-1);
		if(runs==null || runs.length==0) {
	        para.appendChild(comment);
			comment.getParagraphs().add(new Paragraph(doc));
	        comment.getFirstParagraph().getRuns().add(new Run(doc, "err:"+text.trim()));
	        commentId\[0\]+=1;
		}else {
			CommentRangeStart start = new CommentRangeStart(doc, commentId\[0\]);
			CommentRangeEnd end = new CommentRangeEnd(doc, commentId\[0\]);
			runs\[0\].getParentNode().insertBefore(start,runs\[0\]);
			runs\[runs.length-1\].getParentNode().insertAfter(end,runs\[runs.length-1\]);
			end.getParentNode().insertBefore(comment,end);					
			comment.getParagraphs().add(new Paragraph(doc));
	        comment.getFirstParagraph().getRuns().add(new Run(doc, "err:"+text.trim()));
	        commentId\[0\]+=1;
		}
	}

*   paragraphs遍历示例
    

...
	FileInputStream fis = new FileInputStream(ab);
	Document doc = new Document(fis);
	NodeCollection comments = doc.getChildNodes(NodeType.COMMENT, true);
	comments.clear();
	NodeCollection paragraphs = doc.getChildNodes(NodeType.PARAGRAPH, true);
	int\[\] commentId = {0};
	for (Paragraph para :  (Iterable<Paragraph>)paragraphs){
		if(para.getParagraphFormat().getStyle()!=null && para.getParagraphFormat().getStyle().getName().contains("标题 ")) {
			String text = para.toString(SaveFormat.TEXT);
			if(Pattern.compile("\[\\u4e00-\\u9fa5\]+").matcher(text).find()) {//\[^\\w\] 
				continue;
			}
			....
		}
	}
	for (Paragraph para :  (Iterable<Paragraph>)paragraphs){
		String text = para.toString(SaveFormat.TEXT).trim();
		...
			if(para.getParagraphFormat().getStyle().getName().equals("Table Heading")) {//表格类处理
				CompositeNode parent = para.getParentNode().getParentNode().getParentNode();//-->cell->Row
				NodeCollection rows = parent.getChildNodes(NodeType.ROW, true);
				int ind = 0;
				for(Row row: (Iterable<Row>)rows) {
					if(0==ind) {
						....
						++ind;
						continue;
					}
					Cell cell = row.getFirstCell();
					Paragraph p = cell.getFirstParagraph();
					...
					cell = row.getLastCell();
					p = cell.getFirstParagraph();
					....
					++ind;
				}
			}else {
				...
			}
		...
	}
	doc.save(ab.replace(inPath, outPath));		
	fis.close();
...

...
		
FindReplaceOptions options = new FindReplaceOptions();
options.setDirection(FindReplaceDirection.FORWARD);
...
text = text.replaceAll("（", "(").replaceAll("）", ")");//bmark
if(text.contains("(")) {
	if(text.contains("(0x")) {
		Matcher m = Pattern.compile("\\\\((0x\[A-Z0-9\]+)\\\\)(\[0-9\]+)").matcher(text);
		if(m.find()) {
			options.setReplacingCallback(new ReplaceFirstOccourance(m.group(1)+"("+m.group(2)+")"));
			para.getRange().replace(Pattern.compile("\\\\((0x\[A-Z0-9\]+)\\\\)(\[0-9\]+)"),  m.group(1)+"("+m.group(2)+")",options);
		} 
		right=false;
	...
	}else {
		Matcher m = Pattern.compile("\\\\)\[,.;，。；\]+").matcher(text);
		if(m.find()) {
			options.setReplacingCallback(new ReplaceFirstOccourance(")"));
			para.getRange().replace(Pattern.compile("\\\\)\[,.;，。；\]+"),  ")",options);
			right = false;
		} 
	}
...

*   记录两个比较低级的问题
    

1.  InputStream is=xxx.class.getClassLoader().getResourceAsStream("license.xml");
    
    文件放在了resources目录下，在eclipse中调试启动可以正常找到到，打包成可执行jar找不到这个文件了,
    
    ![image.png](https://bbs-img.huaweicloud.com/blogs/img/1565260504246065.png "1565260504246065.png")
    
    需要将resources路径添加到Source中，这样打包后才会出现在类路径里
    
2.  java 反射传递变长参数的例子
    
    class PWorker extends SwingWorker<Boolean, Map>
    {
    	private String InDir;
        private String OutDir;
        private JButton buttonStart;
        private JProgressBar jpb;
        private JTextArea area;
        private boolean isAddCom;
    	public PWorker(String in,String out,JButton button,JProgressBar pb,JTextArea ea,boolean addCom) {
    		...
    	}
    	protected Boolean doInBackground() throws Exception {
    		try {
    			Method\[\] methods = this.getClass().getSuperclass().getDeclaredMethods();
    		    Method method = this.getClass().getSuperclass().getDeclaredMethod("publish",Object\[\].class);
    			method.setAccessible(true);
    			xxxx(InDir, OutDir,this,method,isAddCom);
    		}catch(Exception e) {
    			e.printStackTrace();
    		}
    		return true;
    	}
    	@Override
    	protected void done() {
    		buttonStart.setEnabled(true);
    	}
    	@Override
    	protected void process(List<Map> chunks) {
    		Map i = chunks.get(chunks.size()-1);
    		jpb.setValue(Integer.valueOf(i.get("int").toString()));
    		area.append(i.get("str").toString());
    	}
    }
    try {
    	Map pu = new HashMap<String,Object>();
    	pu.put("int", pindex);
    	pu.put("str", processInfo);
    	Map\[\] apd = new Map\[\] {pu};
    	method.invoke(target, new Object\[\] {apd} );
    } catch (Exception e) {		
    	e.printStackTrace();
    }
    
3.  jar运行路径下如果放了和jar中类路径相同的.class文件，会导致java.lang.vertify的异常
链接:[doc文档内容分析检错](https://bbs.huaweicloud.com/blogs/d6cb0da8b74b11e9b759fa163e330718)