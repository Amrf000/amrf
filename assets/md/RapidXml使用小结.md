还是那句话，代码使用的粗陋，但是可以参考：(注意变量生命周期)

void saveAsXml(const CString& path)
{
	if (m\_pRoot)
	{
		//::DeleteFile(path);

        //using namespace rapidxml;
        //xml\_document<> doc;
		root->remove\_all\_nodes();
		root->remove\_all\_attributes();
		m\_pRoot->SaveConfigureAsXml(doc, root);
		std::string xml\_as\_string;
		rapidxml::print(std::back\_inserter(xml\_as\_string), doc);
		std::ofstream fileStored("file.xml");
		fileStored << xml\_as\_string;
		fileStored.close();
		//doc.clear();
		/\*CFile file;
		file.Open(path, CFile::modeCreate | CFile::modeReadWrite);
		file.Write(pBuffer, Used);
		file.Close();\*/
	}
}
void loadFromXml(const CString& path, int xmlVersion/\* = 0\*/)
{
	//xml\_node<> \* root\_node;
	const auto xmlFile = loadFile(path);//"file\_stored.xml"
	if (!xmlFile.empty()) {
		const auto tmp = xmlFile;
		processXmlFile(xmlFile.data(), xmlVersion);
	}
}
void processXmlFile(const char\* data, int xmlVersion) {
	enum {
		PARSE\_FLAGS = rapidxml::parse\_non\_destructive
	};

	// NOTE : There is a \`const\_cast<>\`, but \`rapidxml::parse\_non\_destructive\`
	//        guarantees \`data\` is not overwritten.
	rapidxml::xml\_document<> xmlDoc;
	xmlDoc.parse<PARSE\_FLAGS>(const\_cast<char\*>(data));//root\_node = doc.first\_node("root")->first\_node("XXXRectangle");
	//walk(doc.first\_node(),0,xmlVersion);//doc.first\_node()

	xml\_node<>\* node = xmlDoc.first\_node();
	std::vector<const xml\_node<>\*> vec0;
	vec0.push\_back(node);
	std::vector<std::vector<const xml\_node<>\*>> vecAll;
	vecAll.push\_back(vec0);
	for (int indent = 0;; ++indent){
		if (indent>=vecAll.size()) {
			break;
		}
		std::vector<const xml\_node<>\*>& vec=vecAll\[indent\];
		std::vector<const xml\_node<>\*> add;
		for (int i = 0; i < vec.size();++i)
		{
			node = const\_cast<xml\_node<>\*>(vec\[i\]);
			const auto ind = std::string(indent \* 4, ' ');
			printf("%s", ind.c\_str());

			const node\_type t = node->type();
			switch (t) {
			case node\_element:
			{
				if (xmlVersion == 2) {
					if (!strncmp(node->name(), "mxCell", 6)) {
						xml\_attribute<>\* a = node->first\_attribute("id"),\*b=NULL;
						string id(a->value(), a->value\_size());
						if (std::stoi(id) != 0) {
							//if (std::stoi(id) == 1) {
							//} else {
							a = node->first\_attribute("style");
							b = node->first\_attribute("value");


							if (a != NULL) {
								string\* style = new string(a->value(), a->value\_size());
								if (b != NULL && b->value\_size()>0) {
									string value(b->value(), b->value\_size());
									size\_t start = value.find("&quot;&gt;&lt;b&gt;");
									if (start != string::npos) {
										size\_t end = value.find("&lt;", start + 19);
										if (end != string::npos) {
											LoadXXXText2(const\_cast<xml\_node<>\*>(node), xmlVersion);
										}else {
											LoadXXXRectangle2(const\_cast<xml\_node<>\*>(node), xmlVersion);
										}
									}else {
									    start = value.find("&quot;&gt;");
									    if (start != string::npos) {
										    LoadXXXText2(const\_cast<xml\_node<>\*>(node), xmlVersion);
									    }else {
										    LoadXXXRectangle2(const\_cast<xml\_node<>\*>(node), xmlVersion);
									    }
									}

								}
								else if (style->find("。。。。") != string::npos ||
									     style->find("。。。。")!=string::npos || 
									     style->find("。。。。") != string::npos) {
									LoadXXXStaticDrawing2(const\_cast<xml\_node<>\*>(node), xmlVersion);//圆
								}else if (style->find("whiteSpace") != string::npos) {
									LoadXXXRectangle2(const\_cast<xml\_node<>\*>(node), xmlVersion);
								}else if (style->find("startArrow") != string::npos) {//折线
									LoadXXXStaticDrawing2(const\_cast<xml\_node<>\*>(node), xmlVersion);
								}else if (style->find("endArrow") != string::npos) {//线段
									LoadXXXLine2(const\_cast<xml\_node<>\*>(node), xmlVersion);
								}
								delete style;
							}
							//}
						}
					}
				}
				else {
					//printf("<%.\*s", node->name\_size(), node->name());
					if (!strncmp(node->name(), "XXXBase", 11)) {
						LoadXXXBase2(const\_cast<xml\_node<>\*>(node), xmlVersion);
					}
					else if (!strncmp(node->name(), "XXXRectangle", 16)) {
						if (strncmp(node->first\_attribute("Parent")->value(), "-1", 2))
						{
							LoadXXXRectangle2(const\_cast<xml\_node<>\*>(node), xmlVersion);
						}
					}
					else if (!strncmp(node->name(), "XXXRadioButton", 18)) {
						LoadXXXRadioButton2(const\_cast<xml\_node<>\*>(node), xmlVersion);
					}
					else if (!strncmp(node->name(), "XXXText", 11)) {
						LoadXXXText2(const\_cast<xml\_node<>\*>(node), xmlVersion);
					}
					else if (!strncmp(node->name(), "XXXLine", 11)) {
						LoadXXXLine2(const\_cast<xml\_node<>\*>(node), xmlVersion);
					}
					else if (!strncmp(node->name(), "XXXStaticDrawing", 20)) {
						LoadXXXStaticDrawing2(const\_cast<xml\_node<>\*>(node), xmlVersion);
					}
				}
				//for (const xml\_attribute<>\* a = node->first\_attribute(); a; a = a->next\_attribute()) {
				//	printf(" %.\*s", a->name\_size(), a->name());
				//	printf("='%.\*s'", a->value\_size(), a->value());
				//}
				//printf(">\\n");
				for (const xml\_node<>\* n = node->first\_node(); n; n = n->next\_sibling()) {
					add.push\_back(n);
					//walk(n, indent + 1, xmlVersion);
				}
				//printf("%s</%.\*s>\\n", ind.c\_str(), node->name\_size(), node->name());
			}
			break;

			case node\_data:
				printf("DATA:\[%.\*s\]\\n", node->value\_size(), node->value());
				break;

			default:
				printf("NODE-TYPE:%d\\n", t);
				break;
			}
		}
		if (add.size() > 0) {
			vecAll.push\_back(add);
		}
	}
}
void init(xml\_node<>\* node, XXXBase\* m\_pRoot, xml\_document<>& doc, int xmlVersion)
{
	data.FatherId = GetIntValueByName(node, "Parent", -1, xmlVersion);
	...
	data.ResetEcho = GetStrValueByName(node, "ResetEcho", "reset", xmlVersion);
	//============
	data.D90 = GetIntValueByName(node, "D90", 0, xmlVersion);
	...
	data.Ziti = GetStrValueByName(node, "Ziti", "黑体", xmlVersion);
	if (true || node == NULL || xmlVersion == 2) {
		this->m\_node = doc.allocate\_node(node\_element, "XXXRectangle");
		this->m\_node->append\_attribute(doc.allocate\_attribute("Parent", doc.allocate\_string(std::to\_string(data.FatherId).c\_str())));
		this->m\_node->append\_attribute(doc.allocate\_attribute("ID", doc.allocate\_string(std::to\_string(data.ID).c\_str())));
		this->m\_node->append\_attribute(doc.allocate\_attribute("NameofIt", doc.allocate\_string(data.NameofIt.c\_str())));
		...
		this->m\_node->append\_attribute(doc.allocate\_attribute("BitCheckedValueFrm", doc.allocate\_string(std::to\_string(data.BitCheckedValueFrm).c\_str())));
		this->m\_node->append\_attribute(doc.allocate\_attribute("BitCheckedValueToo", doc.allocate\_string(std::to\_string(data.BitCheckedValueToo).c\_str())));
		...
		//===
		this->m\_node->append\_attribute(doc.allocate\_attribute("D90", doc.allocate\_string(std::to\_string(data.D90).c\_str())));
		...
	}
	XXXBase\* pParent = GetWidgetById(m\_pRoot, data.FatherId);
	pParent->AddChild(this);
	this->WidgetId = data.ID;
	if (theApp.GlobalIndex <= data.ID) theApp.GlobalIndex = data.ID + 1;
	ANSIToUnicode(data.NameofIt.c\_str(), this->NameofItPlus);
	this->LcX = data.LcX;
	...
	this->pFramePen = new Pen(Color(data.pFramePenColorA, data.pFramePenColorR, data.pFramePenColorG, data.pFramePenColorB), data.PenWidth);
	this->dashVals\[0\] = data.dashVals\[0\];
	this->dashVals\[1\] = data.dashVals\[1\];
	if (this->dashVals\[0\]>0. && this->dashVals\[1\]>0.)
	{
		this->pFramePen->SetDashPattern(this->dashVals, 2);
	}
	this->pMainBrush = new SolidBrush(Color(data.pMainBrushColorA, data.pMainBrushColorR, data.pMainBrushColorG, data.pMainBrushColorB));
	this->m\_pAboutReg = FindRegObject(strtoul(data.m\_ulBaseAddress.c\_str(), NULL, 16), strtoul(data.m\_ulOffsetAddress.c\_str(), NULL, 16));
	if (this->m\_pAboutReg)
	{
		AddRegToTable(this->m\_pAboutReg);
	}
	this->m\_pFuncSetEnable = (FUN\_SET\_ENABLE)FindFunction(CString(data.m\_pFuncSetEnable.c\_str()));
	...
	//===
	this->D90 = data.D90;
	this->DrawBk = data.DrawBk;
	...
	this->TextSize = data.TextSize;
	ANSIToUnicode(data.ShowText.c\_str(), this->ShowText);
	this->pTextBrush = new SolidBrush(Color(data.pTextBrushColorA, data.pTextBrushColorR, data.pTextBrushColorG, data.pTextBrushColorB));
	ANSIToUnicode(data.Ziti.c\_str(), this->Ziti);
}
BOOL SaveConfigureAsXml(xml\_document<>& doc, xml\_node<> \* parent)
{
	XXXBase\* pEachSon = pFirstSun;
	while (NULL != pEachSon)
	{
		pEachSon->SaveConfigureAsXml(doc, m\_node);
		pEachSon = pEachSon->pBrother;
	}
	if (theApp.GlobalIndex <= data.ID) theApp.GlobalIndex = data.ID + 1;
	//==
	char rsut\[128\];
	UnicodeToANSI(this->NameofItPlus, rsut);
	this->m\_node->first\_attribute("NameofIt")->value(doc.allocate\_string(rsut));
	...
	Color c;
	this->pFramePen->GetColor(&c);
	this->m\_node->first\_attribute("pFramePenColorA")->value(doc.allocate\_string(std::to\_string(static\_cast<int>(c.GetA())).c\_str()));
	...
	this->pMainBrush->GetColor(&c);
	this->m\_node->first\_attribute("pMainBrushColorA")->value(doc.allocate\_string(std::to\_string(static\_cast<int>(c.GetA())).c\_str()));
	...
	if (m\_pAboutReg)
	{
		CString FloatString;
		FloatString.Format("0x%08X", m\_pAboutReg->m\_ulBaseAddress);	
		this->m\_node->first\_attribute("m\_ulBaseAddress")->value(doc.allocate\_string(FloatString));//mark
		FloatString.Format("0x%04X", m\_pAboutReg->m\_ulOffsetAddress);
		this->m\_node->first\_attribute("m\_ulOffsetAddress")->value(doc.allocate\_string(FloatString));
	}
	this->m\_node->first\_attribute("m\_pFuncSetEnable")->value(doc.allocate\_string(GetFuncNameByAddr(this->m\_pFuncSetEnable)));
	...
	UnicodeToANSI(this->ResetEcho, rsut);
	this->m\_node->first\_attribute("ResetEcho")->value(doc.allocate\_string(rsut));
	//===
	if (this->TextSize > 0) {
		this->m\_node->first\_attribute("D90")->value(doc.allocate\_string(std::to\_string(this->D90).c\_str()));
		this->m\_node->first\_attribute("DrawBk")->value(doc.allocate\_string(std::to\_string(this->DrawBk).c\_str()));
		....
		UnicodeToANSI(this->ShowText, rsut);
		this->m\_node->first\_attribute("ShowText")->value(doc.allocate\_string(rsut));
	}
	if (this->pTextBrush) {
		this->pTextBrush->GetColor(&c);
		this->m\_node->first\_attribute("pTextBrushColorA")->value(doc.allocate\_string(std::to\_string(c.GetA()).c\_str()));
		....
		UnicodeToANSI(this->Ziti, rsut);
		this->m\_node->first\_attribute("Ziti")->value(doc.allocate\_string(rsut));
	}
	parent->append\_node(m\_node);
	return TRUE;
}

参考:[https://www.cnblogs.com/hihilary/archive/2012/11/18/2772983.html](https://www.cnblogs.com/hihilary/archive/2012/11/18/2772983.html)

参考:[https://www.cnblogs.com/chutianyao/p/3246592.html](https://www.cnblogs.com/chutianyao/p/3246592.html)

参考:[https://blog.csdn.net/wqvbjhc/article/details/7662931](https://blog.csdn.net/wqvbjhc/article/details/7662931)

参考:[https://github.com/dwd/rapidxml](https://github.com/dwd/rapidxml)

参考:[https://github.com/dwd/rapidxml/blob/master/test/simple.cpp](https://github.com/dwd/rapidxml/blob/master/test/simple.cpp)

参考:[https://blog.csdn.net/u012209790/article/details/56014779](https://blog.csdn.net/u012209790/article/details/56014779)

参考:[https://stackoverflow.com/questions/4583409/add-number-double-float-as-attribute-to-rapidxml-node](https://stackoverflow.com/questions/4583409/add-number-double-float-as-attribute-to-rapidxml-node)

参考:[http://rapidxml.sourceforge.net/manual.html#namespacerapidxml\_1printing](http://rapidxml.sourceforge.net/manual.html#namespacerapidxml_1printing)

参考:[https://stackoverflow.com/questions/46300376/rapidxml-parsing-misbehavior-when-subfunction-is-used](https://stackoverflow.com/questions/46300376/rapidxml-parsing-misbehavior-when-subfunction-is-used)

参考:[https://github.com/rstudio/rstudio/blob/master/src/cpp/core/include/core/rapidxml/rapidxml.hpp](https://github.com/rstudio/rstudio/blob/master/src/cpp/core/include/core/rapidxml/rapidxml.hpp)

参考:[https://stackoverflow.com/questions/53593933/write-to-xml-with-rapidxml](https://stackoverflow.com/questions/53593933/write-to-xml-with-rapidxml)

参考:[https://stackoverflow.com/questions/45170187/c-rapidxml-edit-node-and-write-to-a-new-xml-file-doesnt-have-the-updated-nod?rq=1](https://stackoverflow.com/questions/45170187/c-rapidxml-edit-node-and-write-to-a-new-xml-file-doesnt-have-the-updated-nod?rq=1)

参考:[https://gist.github.com/JSchaenzle/2726944](https://gist.github.com/JSchaenzle/2726944)

参考:[https://blog.csdn.net/hellokandy/article/details/56834236](https://blog.csdn.net/hellokandy/article/details/56834236)

参考:[https://stackoverflow.com/questions/5203325/rapidxml-how-to-iterate-through-nodes-leaves-out-last-sibling](https://stackoverflow.com/questions/5203325/rapidxml-how-to-iterate-through-nodes-leaves-out-last-sibling)

参考:[https://gist.github.com/t-mat/7150417](https://gist.github.com/t-mat/7150417)

参考:[https://gist.github.com/JSchaenzle/2726944](https://gist.github.com/JSchaenzle/2726944)

参考:[https://stackoverflow.com/questions/2808022/how-to-parse-the-xml-file-in-rapidxml](https://stackoverflow.com/questions/2808022/how-to-parse-the-xml-file-in-rapidxml)
链接:[RapidXml使用小结](https://bbs.huaweicloud.com/blogs/37f5e5780dde11e9bd5a7ca23e93a891)