### poi处理表格到现在还记得的一个问题是合并会出现假合并的现象，后来使用setCellType(CellType.BLANK)解决了这个问题

### 下面是poi3.17的poi使用 部分代码乱乱的 不过可以参考：

import org.apache.poi.hssf.usermodel.HSSFCell;

import org.apache.poi.hssf.usermodel.HSSFCellStyle;

import org.apache.poi.hssf.usermodel.HSSFDataFormat;

import org.apache.poi.hssf.usermodel.HSSFFont;

import org.apache.poi.hssf.usermodel.HSSFRichTextString;

import org.apache.poi.hssf.usermodel.HSSFRow;

import org.apache.poi.hssf.usermodel.HSSFSheet;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import org.apache.poi.hssf.util.HSSFColor;

import org.apache.poi.ss.usermodel.BorderStyle;

import org.apache.poi.ss.usermodel.CellType;

import org.apache.poi.ss.usermodel.CreationHelper;

import org.apache.poi.ss.usermodel.FillPatternType;

import org.apache.poi.ss.usermodel.HorizontalAlignment;

import org.apache.poi.ss.usermodel.VerticalAlignment;

import org.apache.poi.ss.util.CellRangeAddress;

import org.springframework.context.ApplicationContext;

public class ExportExcelUtils {

/\*\*

\* 创建一个excel文件

\*/

private HSSFWorkbook wb = null;

/\*\*

\* 创建一个excel工作表

\*/

private HSSFSheet sheet = null;

/\*\*

\* 无参构造函数

\*/

public ExportExcelUtils() {

this(new HSSFWorkbook());

}

/\*\*

\* 一个参数的构造函数（ps:不存在只有sheet的构造函数，因为sheet是从wb中创建而来的）

\* @param wb

\*/

public ExportExcelUtils(HSSFWorkbook wb){

this(wb,wb.createSheet());

}

/\*\*

\* 双参构造函数

\* @param wbexcel文件

\* @param sheet工作表

\*/

public ExportExcelUtils(HSSFWorkbook wb,HSSFSheet sheet){

this.wb = wb;

this.sheet = sheet;

}

/\*\*

\* @return wb

\*/

public HSSFWorkbook getWb() {

return wb;

}

/\*\*

\* @param wbset wb to this.wb

\*/

public void setWb(HSSFWorkbook wb) {

this.wb = wb;

}

/\*\*

\* @returnsheet

\*/

public HSSFSheet getSheet() {

return sheet;

}

/\*\*

\* @param sheetset sheet to this.sheet

\*/

public void setSheet(HSSFSheet sheet) {

this.sheet = sheet;

}

/\*\*

\* 创建通用excel头部

\* @param headString头部显示的字符串

\* @param colSum该报表列数

\*/

public void createNormalHead(String headString,int colSum){

HSSFRow row = sheet.createRow(0);

//设置第一行

HSSFCell cell = row.createCell(0);

//合并第一行前colSum列

sheet.addMergedRegion(new CellRangeAddress(0,0,0,colSum - 1));

//CellRangeAddress类用来替代org.apache.poi.hssf.util.Region,sheet中使用Region的一系列方法都已过期。

//CellRangeAddress中四个参数的意思为，以参数为1,2,3,4为例:将从第0行到第1行,从第2列到第3列的单元格合并。

//定义单元格为字符串类型

//cell.setCellType(HSSFCell.ENCODING\_UTF\_16);//中文处理

cell.setCellValue(new HSSFRichTextString(headString));//设置单元格的值

//定义单元格格式，添加单元格表样式，并添加到工作簿

HSSFCellStyle cellStyle = wb.createCellStyle();

//设置单元格对齐类型

cellStyle.setAlignment(HorizontalAlignment.CENTER);//指定单元格水平居中对齐

cellStyle.setVerticalAlignment(VerticalAlignment.CENTER);//指定单元格垂直居中对齐

cellStyle.setWrapText(true);//指定单元格自动换行

cellStyle.setLeftBorderColor(HSSFColor.BLACK.index);//设置左边框颜色HSSFColorPredefined. .getIndex()

cellStyle.setBorderLeft(BorderStyle.valueOf((short)1));//设置左边框大小

cellStyle.setRightBorderColor(HSSFColor.BLACK.index);//设置右边框颜色

cellStyle.setBorderRight(BorderStyle.valueOf((short)1));//设置右边框大小

//设置单元格字体

HSSFFont font = wb.createFont();

//font.setBoldweight(HSSFFont.BOLDWEIGHT\_BOLD);//设置内容加粗

font.setBold(true);

font.setFontName("宋体");//设置字体

font.setFontHeight((short)600);//设置字体高度

//font.setFontHeightInPoints((short)10);//设置字体大小

cellStyle.setFont(font);

cell.setCellStyle(cellStyle);

}

/\*\*

\* 创建通用excel第二行

\* @param params用来表示第二行中小标题内容的数组

\*/

public void createNormalTwoRow(String\[\] params){

//创建第二行

HSSFRow row = sheet.createRow(1);

row.setHeight((short)400);

HSSFCell cell = row.createCell(0);

//cell.setCellType(HSSFCell.ENCODING\_UTF\_16);

cell.setCellValue(new HSSFRichTextString("" + ""));

//定义单元格格式，添加单元格样式表，并添加到工作簿

HSSFCellStyle cellStyle = wb.createCellStyle();

cellStyle.setAlignment(HorizontalAlignment.CENTER);//设置单元格水平居中

cellStyle.setVerticalAlignment(VerticalAlignment.CENTER);//设置单元格垂直居中

cellStyle.setWrapText(true);//设置单元格自动换行

//设置单元格字体

HSSFFont font = wb.createFont();

//font.setBoldweight(HSSFFont.BOLDWEIGHT\_BOLD);

font.setBold(true);

font.setFontName("宋体");

font.setFontHeight((short)250);

cell.setCellStyle(cellStyle);

for(int i = 0 ; i < params.length ; i ++){

cell = row.createCell(i);

cell.setCellValue(params\[i\]);

}

}

/\*\*

\* 设置工作表列宽

\* @param arg每列宽度

\*/

public void setSheetColumnWidth(int arg\[\]) throws Exception{

for(int i = 0 ;i < arg.length; i ++ ){

//设置工作表列宽

sheet.setColumnWidth(i, arg\[i\]);

}

}

/\*\*

\* 设置excel标题

\* @param columHeader标题字符串数组

\*/

public void createColumHeader(String\[\] columHeader){

//设置列头，在第三行

HSSFRow row = sheet.createRow(2);

//指定行高

row.setHeight((short)600);

//设置单元格格式，添加单元格样式，并添加到工作簿

HSSFCellStyle cellStyle = wb.createCellStyle();

cellStyle.setAlignment(HorizontalAlignment.CENTER);//设置单元格水平居中HSSFCellStyle.ALIGN\_CENTER

cellStyle.setVerticalAlignment(VerticalAlignment.CENTER);//设置单元格垂直居中HSSFCellStyle.VERTICAL\_CENTER

cellStyle.setWrapText(true);//设置单元格自动换行

//单元格字体

HSSFFont font = wb.createFont();

//font.setBoldweight(HSSFFont.BOLDWEIGHT\_BOLD);//设置字体加粗

font.setBold(true);

font.setFontName("宋体");//设置字体格式

font.setFontHeight((short)250);

cellStyle.setFont(font);

//设置单元格背景色

cellStyle.setFillBackgroundColor(HSSFColor.GREY\_25\_PERCENT.index);//HSSFColor.HSSFColorPredefined.GREY\_25\_PERCENT.getIndex()

cellStyle.setFillPattern(FillPatternType.SOLID\_FOREGROUND);

HSSFCell cell = null;

//从第二行开头开始创建单元格，并给每一个单元格赋值

for(int item = 0 ; item < columHeader.length; item ++){

cell = row.createCell(item);

//cell.setCellType(HSSFCell.ENCODING\_UTF\_16);

cell.setCellStyle(cellStyle);

cell.setCellValue(new HSSFRichTextString(columHeader\[item\]));

}

}

private HSSFCellStyle \_headStyle = null;

public HSSFCellStyle getHeadStyle()

{

if(\_headStyle==null)

{

\_headStyle = wb.createCellStyle();

\_headStyle.setAlignment(HorizontalAlignment.CENTER);//设置单元格水平居中

\_headStyle.setVerticalAlignment(VerticalAlignment.CENTER);//设置单元格垂直居中

\_headStyle.setFillForegroundColor(HSSFColor.GREEN.index);

\_headStyle.setFillPattern(FillPatternType.SOLID\_FOREGROUND);

\_headStyle.setBorderBottom(BorderStyle.THIN);

\_headStyle.setBorderTop(BorderStyle.THIN);

\_headStyle.setBorderRight(BorderStyle.THIN);

\_headStyle.setBorderLeft(BorderStyle.THIN);

}

return \_headStyle;

}

private HSSFCellStyle \_contentStyle = null;

public HSSFCellStyle getContentStyle()

{

if(\_contentStyle==null)

{

\_contentStyle = wb.createCellStyle();

\_contentStyle.setAlignment(HorizontalAlignment.LEFT);//设置单元格水平居中HSSFCellStyle.ALIGN\_LEFT

\_contentStyle.setVerticalAlignment(VerticalAlignment.CENTER);//设置单元格垂直居中

\_contentStyle.setBorderBottom(BorderStyle.THIN);

\_contentStyle.setBorderTop(BorderStyle.THIN);

\_contentStyle.setBorderRight(BorderStyle.THIN);

\_contentStyle.setBorderLeft(BorderStyle.THIN);

}

return \_contentStyle;

}

private HSSFCellStyle \_intStyle = null;

public HSSFCellStyle getIntegerStyle()

{

if(\_intStyle==null)

{

\_intStyle = wb.createCellStyle();

//\_intStyle.setAlignment(HorizontalAlignment.LEFT);//设置单元格水平居中HSSFCellStyle.ALIGN\_LEFT

\_intStyle.setVerticalAlignment(VerticalAlignment.CENTER);//设置单元格垂直居中

\_intStyle.setBorderBottom(BorderStyle.THIN);

\_intStyle.setBorderTop(BorderStyle.THIN);

\_intStyle.setBorderRight(BorderStyle.THIN);

\_intStyle.setBorderLeft(BorderStyle.THIN);

// DataFormat format = wb.createDataFormat();

\_intStyle.setDataFormat(HSSFDataFormat.getBuiltinFormat("0"));//#,##format.getFormat("0")

}

return \_intStyle;

}

/\*\*

\* 创建内容单元格

\* @param wbHSSFWorkbook

\* @param rowHSSFRow

\* @param colshort型的列索引

\* @param align对齐方式

\* @param val列值

\*/

public void createCell(HSSFWorkbook wb,HSSFRow row,int col,short align,Object val,boolean head,boolean isInteger){

//根据该行的第几列创建单元格

HSSFCell cell = row.createCell(col);

//设置单元格格式

//cell.setCellType(HSSFCell.ENCODING\_UTF\_16);

if(isInteger==false)

{

if(((String)val).equals("")){

cell.setCellType(CellType.BLANK);

}else {

cell.setCellValue(new HSSFRichTextString((String)val));//设置单元格值

}

}else{

cell.setCellValue((Integer)val);//设置单元格值

}

//设置单元格样式，添加样式到工作簿

HSSFCellStyle cellStyle = isInteger?getIntegerStyle():(head?getHeadStyle():getContentStyle());

cell.setCellStyle(cellStyle);

}

public void createEmptyCell(HSSFWorkbook wb,HSSFRow row,int col,short align,Object val,boolean head,boolean isInteger){

//根据该行的第几列创建单元格

HSSFCell cell = row.createCell(col);

//设置单元格格式

//cell.setCellType(HSSFCell.ENCODING\_UTF\_16);

//设置单元格样式，添加样式到工作簿

HSSFCellStyle cellStyle = isInteger?getIntegerStyle():(head?getHeadStyle():getContentStyle());

cell.setCellStyle(cellStyle);

}

private HSSFCellStyle \_dateStyle =null;

private SimpleDateFormat \_datefmt = new SimpleDateFormat("yyyy/M/d");

public void createDateCell(HSSFWorkbook wb,HSSFRow row,int col,short align,Date val){

if(\_dateStyle==null) {

\_dateStyle = wb.createCellStyle();

CreationHelper createHelper = wb.getCreationHelper();

\_dateStyle.setDataFormat(createHelper.createDataFormat().getFormat("yyyy/m/d"));

\_dateStyle.setBorderBottom(BorderStyle.THIN);

\_dateStyle.setBorderTop(BorderStyle.THIN);

\_dateStyle.setBorderRight(BorderStyle.THIN);

\_dateStyle.setBorderLeft(BorderStyle.THIN);

}

HSSFCell cell = row.createCell(col);

Calendar cal = Calendar.getInstance();

cal.setTime(val);

cal.set(Calendar.HOUR\_OF\_DAY, 0);

cal.set(Calendar.MINUTE, 0);

cal.set(Calendar.SECOND, 0);

cal.set(Calendar.MILLISECOND, 0);

cell.setCellValue(cal);

cell.setCellStyle(\_dateStyle);

}

/\*\*

\* 创建合计行

\* @param colSum需要合并到的列索引

\* @param cellValue列值

\*/

public void createLastSumRow(int colSum,String\[\] cellValue){

HSSFCellStyle cellStyle = wb.createCellStyle();

cellStyle.setAlignment(HorizontalAlignment.CENTER);//设置单元格水平居中

cellStyle.setVerticalAlignment(VerticalAlignment.CENTER);//设置单元格垂直居中

cellStyle.setWrapText(true);//设置单元格自动换行

//单元格字体

HSSFFont font = wb.createFont();

//font.setBoldweight(HSSFFont.BOLDWEIGHT\_BOLD);

font.setBold(true);

font.setFontName("宋体");

font.setFontHeight((short)250);

cellStyle.setFont(font);

//获取工作表最后一行

HSSFRow lastRow = sheet.createRow((short)(sheet.getLastRowNum() + 1));

HSSFCell sumCell = lastRow.createCell(0);

sumCell.setCellValue("合计");//设置单元格内容

sumCell.setCellStyle(cellStyle);

//合并 最后一行的第零列 至 最后一行的第一列

sheet.addMergedRegion(new CellRangeAddress(sheet.getLastRowNum(),sheet.getLastRowNum() - 1

,sheet.getLastRowNum(),colSum));

for(int item = 2 ; item < (cellValue.length + 2) ; item++){

//定义最后一行的第三列

sumCell = lastRow.createCell(item);

sumCell.setCellStyle(cellStyle);

//定义数组，从0开始

sumCell.setCellValue(new HSSFRichTextString(cellValue\[item - 2\]));

}

}

/\*\*

\* 将数据输入到excel文件

\* @param fileName文件名

\*/

public void outputExcel(String fileName){

//定义文件输出流

FileOutputStream fos = null;

try{

File ofi = new File(fileName);

if(!ofi.exists())

{

ofi.createNewFile();

}

fos = new FileOutputStream(ofi);

wb.write(fos);//将数据写入文件中

}catch(Exception e){

e.printStackTrace();

}finally{

//防止资源的浪费，保证了即使出错也会回收资源

try{

fos.close();

}catch(Exception e2){

e2.printStackTrace();

}

}

}

public static HashSet<String> getQALinkUserList(String dateStr)

{

String start = dateStr + " 00:00:00";

String end = dateStr + " 23:59:59";

HashSet<String> res = new HashSet<String>();

try{

String sql = "SELECT sid from tbl\_qa where time>="+start+" AND time<"+end;

ApplicationContext ac = SpringUtil.getApplicationContext();

UserDAOImpl dao = (UserDAOImpl)ac.getBean("userDao");

List<HashMap<String,String>> ret=dao.query(sql);

for(Iterator<HashMap<String,String>> it=ret.iterator();it.hasNext();){

HashMap<String,String> value = it.next();

String sid = value.get("sid");

if(sid!="null"/\* && !answer.equals("")\*/)//TODO:Congirm null "null"

{

res.add(sid);

}

}

}catch(Exception e)

{

e.printStackTrace();

}

return res;

}

static class Detail {

public long identification;

public String time;

public String uid;

public String question;

public String answer;

public String survey;

public int seq;

public Detail(long identification,String time,String uid,String question,String answer,String survey,int seq)

{

this.identification = identification;

this.time = time;

this.uid = uid;

this.question = question;

this.answer = answer;

this.survey = survey;

this.seq = seq;

}

}

private static boolean sameDate(Date d1, Date d2) {

LocalDate localDate1 = ZonedDateTime.ofInstant(d1.toInstant(), ZoneId.systemDefault()).toLocalDate();

LocalDate localDate2 = ZonedDateTime.ofInstant(d2.toInstant(), ZoneId.systemDefault()).toLocalDate();

return localDate1.isEqual(localDate2);

}

static Logger log4j = Logger.getLogger(ExportExcelUtils.class);

public static void genrateQALinkXls(String dateStr,String root)

{

ArrayList<Detail> res = new ArrayList<Detail>();

SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");

String\[\] str=dateStr.split("\_");

if(str.length<2)

{

return;

}

String start = str\[0\] + " 23:59:59";

String end = str\[1\] + " 23:59:59";

//long starttime = 0,endtime = 0;

try{

//starttime = fmt.parse(start).getTime();

//endtime = fmt.parse(end).getTime();

String sql = "SELECT time,sid,question,survey,seq from tbl\_qa where time>='"+start+"' AND time<'"+end+"' order by sid,time";

ApplicationContext ac = SpringUtil.getApplicationContext();

UserDAOImpl dao = (UserDAOImpl)ac.getBean("userDao");

List<HashMap<String,String>> ret=dao.query(sql);

for(Iterator<HashMap<String,String>> it=ret.iterator();it.hasNext();){

HashMap<String,String> value = it.next();

//long identification = rs.getLong("identification");

String time = value.get("time");

String uid1 = value.get("sid");

String question = value.get("question");

//String answer = rs.getString("answer");

String survey = value.get("survey");

Integer seq = Integer.parseInt(value.get("seq"));

question = disTransformHtml(question);

if(uid1.length()>2/\* && !answer.equals("")\*/)

{

Detail child = new Detail(0,time,uid1,question,"",survey,seq);

res.add(child);

}

}

//rs.close();

}catch(Exception e){

log4j.info(e.getMessage());

}

ExportExcelUtils xls = null;

if(res.size()>0)

{

xls = new ExportExcelUtils();

}

//xls.getSheet().setForceFormulaRecalculation(true);

//fmt = new SimpleDateFormat("yyyy-MM-dd");

fmt = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

xls.getSheet().createRow(0);

xls.createCell(xls.getWb(), xls.getSheet().getRow(0), 0, (short)0, "域账号",true,false);

xls.createCell(xls.getWb(), xls.getSheet().getRow(0), 1, (short)0, "访问时间",true,false);

xls.createCell(xls.getWb(), xls.getSheet().getRow(0), 2, (short)0, "用户输入",true,false);

xls.createCell(xls.getWb(), xls.getSheet().getRow(0), 3, (short)0, "用户反馈",true,false);

xls.createCell(xls.getWb(), xls.getSheet().getRow(0), 4, (short)0, "访问次数",true,false);

xls.getSheet().setColumnWidth(0, 12\*256);

xls.getSheet().setColumnWidth(1, 20\*256);

xls.getSheet().setColumnWidth(2, 40\*256);

xls.getSheet().setColumnWidth(3, 32\*256);

xls.getSheet().setColumnWidth(4, 12\*256);

// 同一个人按时间合并单元格 addMergedRegion

Date dStr = null,preDStr=null;

String preUid="";

int mergeStart = 1,mergeEnd = 1,rcount = res.size();

for(int i=0;i<rcount;++i)

{

Detail child = res.get(i);

try {

dStr = fmt.parse(child.time);//((String)child.time).substring(0,10);//fmt.format(child.time);

}catch(Exception e) {

log4j.info(e.getMessage());

dStr = preDStr;

}

HSSFRow row = xls.getSheet().createRow(i+1);

xls.createCell(xls.getWb(), row, 0, (short)0, child.uid,false,false);

xls.createDateCell(xls.getWb(), row, 1, (short)0, dStr);

xls.createCell(xls.getWb(), row, 2, (short)0, child.question,false,false);

xls.createCell(xls.getWb(), row, 3, (short)0, child.survey,false,false);

xls.createCell(xls.getWb(), row, 4, (short)0, child.seq,false,true);//((child.seq==0)?1:child.seq)

if(!preUid.equals(child.uid) || !sameDate(preDStr,dStr) || i==rcount-1){

if(!preUid.equals(child.uid) || !sameDate(preDStr,dStr))

{

mergeEnd = i;

}else if(i==rcount-1){

mergeEnd = i+1;

}

preUid = child.uid;

preDStr = dStr;

//preSeq = child.seq;

if(i>0 && mergeEnd-mergeStart>0)

{

// log4j.info("start="+mergeStart+",end="+mergeEnd);

for(int j=mergeStart+1;j<=mergeEnd;++j)

{

HSSFCell ce = xls.getSheet().getRow(j).getCell(4);

ce.setCellType(CellType.BLANK);

//ce = xls.getSheet().getRow(j).getCell(1);

//ce.setCellType(CellType.BLANK);

//ce = xls.getSheet().getRow(j).getCell(0);

//ce.setCellType(CellType.BLANK);

}

//xls.createCell(xls.getWb(), row, 0, (short)0, child.uid,false,false);

//xls.createCell(xls.getWb(), row, 1, (short)0, dStr,false,false);

//xls.createCell(xls.getWb(), row, 4, (short)0, preSeq,false,true);//((child.seq==0)?1:child.seq)

xls.getSheet().addMergedRegion(new CellRangeAddress(mergeStart,mergeEnd,0,0));

xls.getSheet().addMergedRegion(new CellRangeAddress(mergeStart,mergeEnd,1,1));

xls.getSheet().addMergedRegion(new CellRangeAddress(mergeStart,mergeEnd,4,4));

}

mergeStart = i+1;

mergeEnd = i+1;

}

}

if(xls!=null)

{

xls.outputExcel(root+"Report\_"+dateStr+".xls");

}

}

//生成访问量xls public static void genrateVisitXls(String dateStr,String xlsFilePath) { List<HashMap
链接:[poi合并单元格假合并问题](https://bbs.huaweicloud.com/blogs/9acb5e5ffd3011e8bd5a7ca23e93a891)