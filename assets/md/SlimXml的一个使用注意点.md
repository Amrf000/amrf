setString/getString特殊字符不会自动转义

\-----后来发现有个SLIM\_TRANSFER\_CHARACTER宏，开启即可

assignString函数运行报错，修正为

setString(temp);
//memcpy(str, temp.c\_str(), sizeof(Char) \* actualLength);
//str\[actualLength\] = 0;

buffer = const\_cast<slim::Char\*>(found + 1);
if (length >= 6)
{
	if (Strncmp(buffer, T("quot;"), 5) == 0)//此外转义符号里面没有分号，类似我也处理一下

### 下面是rapidxml中的转义和解转义方法

*   转义
    

// Copy characters from given range to given output iterator and expand
        // characters into references (&lt; &gt; &apos; &quot; &amp;)
        template<class OutIt, class Ch>
        inline OutIt copy\_and\_expand\_chars(const Ch \*begin, const Ch \*end, Ch noexpand, OutIt out)
        {
            while (begin != end)
            {
                if (\*begin == noexpand)
                {
                    \*out++ = \*begin;    // No expansion, copy character
                }
                else
                {
                    switch (\*begin)
                    {
                    case Ch('<'):
                        \*out++ = Ch('&'); \*out++ = Ch('l'); \*out++ = Ch('t'); \*out++ = Ch(';');
                        break;
                    case Ch('>'): 
                        \*out++ = Ch('&'); \*out++ = Ch('g'); \*out++ = Ch('t'); \*out++ = Ch(';');
                        break;
                    case Ch('\\''): 
                        \*out++ = Ch('&'); \*out++ = Ch('a'); \*out++ = Ch('p'); \*out++ = Ch('o'); \*out++ = Ch('s'); \*out++ = Ch(';');
                        break;
                    case Ch('"'): 
                        \*out++ = Ch('&'); \*out++ = Ch('q'); \*out++ = Ch('u'); \*out++ = Ch('o'); \*out++ = Ch('t'); \*out++ = Ch(';');
                        break;
                    case Ch('&'): 
                        \*out++ = Ch('&'); \*out++ = Ch('a'); \*out++ = Ch('m'); \*out++ = Ch('p'); \*out++ = Ch(';'); 
                        break;
                    default:
                        \*out++ = \*begin;    // No expansion, copy character
                    }
                }
                ++begin;    // Step to next character
            }
            return out;
        }

*   解转义
    

// Skip characters until predicate evaluates to true while doing the following:
        // - replacing XML character entity references with proper characters (&apos; &amp; &quot; &lt; &gt; &#...;)
        // - condensing whitespace sequences to single space character
        template<class StopPred, class StopPredPure, int Flags>
        static Ch \*skip\_and\_expand\_character\_refs(Ch \*&text)
        {
            // If entity translation, whitespace condense and whitespace trimming is disabled, use plain skip
            if (Flags & parse\_no\_entity\_translation && 
                !(Flags & parse\_normalize\_whitespace) &&
                !(Flags & parse\_trim\_whitespace))
            {
                skip<StopPred, Flags>(text);
                return text;
            }
            
            // Use simple skip until first modification is detected
            skip<StopPredPure, Flags>(text);

            // Use translation skip
            Ch \*src = text;
            Ch \*dest = src;
            while (StopPred::test(\*src))
            {
                // If entity translation is enabled    
                if (!(Flags & parse\_no\_entity\_translation))
                {
                    // Test if replacement is needed
                    if (src\[0\] == Ch('&'))
                    {
                        switch (src\[1\])
                        {

                        // &amp; &apos;
                        case Ch('a'): 
                            if (src\[2\] == Ch('m') && src\[3\] == Ch('p') && src\[4\] == Ch(';'))
                            {
                                \*dest = Ch('&');
                                ++dest;
                                src += 5;
                                continue;
                            }
                            if (src\[2\] == Ch('p') && src\[3\] == Ch('o') && src\[4\] == Ch('s') && src\[5\] == Ch(';'))
                            {
                                \*dest = Ch('\\'');
                                ++dest;
                                src += 6;
                                continue;
                            }
                            break;

                        // &quot;
                        case Ch('q'): 
                            if (src\[2\] == Ch('u') && src\[3\] == Ch('o') && src\[4\] == Ch('t') && src\[5\] == Ch(';'))
                            {
                                \*dest = Ch('"');
                                ++dest;
                                src += 6;
                                continue;
                            }
                            break;

                        // &gt;
                        case Ch('g'): 
                            if (src\[2\] == Ch('t') && src\[3\] == Ch(';'))
                            {
                                \*dest = Ch('>');
                                ++dest;
                                src += 4;
                                continue;
                            }
                            break;

                        // &lt;
                        case Ch('l'): 
                            if (src\[2\] == Ch('t') && src\[3\] == Ch(';'))
                            {
                                \*dest = Ch('<');
                                ++dest;
                                src += 4;
                                continue;
                            }
                            break;

                        // &#...; - assumes ASCII
                        case Ch('#'): 
                            if (src\[2\] == Ch('x'))
                            {
                                unsigned long code = 0;
                                src += 3;   // Skip &#x
                                while (1)
                                {
                                    unsigned char digit = internal::lookup\_tables<0>::lookup\_digits\[static\_cast<unsigned char>(\*src)\];
                                    if (digit == 0xFF)
                                        break;
                                    code = code \* 16 + digit;
                                    ++src;
                                }
                                insert\_coded\_character<Flags>(dest, code);    // Put character in output
                            }
                            else
                            {
                                unsigned long code = 0;
                                src += 2;   // Skip &#
                                while (1)
                                {
                                    unsigned char digit = internal::lookup\_tables<0>::lookup\_digits\[static\_cast<unsigned char>(\*src)\];
                                    if (digit == 0xFF)
                                        break;
                                    code = code \* 10 + digit;
                                    ++src;
                                }
                                insert\_coded\_character<Flags>(dest, code);    // Put character in output
                            }
                            if (\*src == Ch(';'))
                                ++src;
                            else
                                RAPIDXML\_PARSE\_ERROR("expected ;", src);
                            continue;

                        // Something else
                        default:
                            // Ignore, just copy '&' verbatim
                            break;

                        }
                    }
                }
                
                // If whitespace condensing is enabled
                if (Flags & parse\_normalize\_whitespace)
                {
                    // Test if condensing is needed                 
                    if (whitespace\_pred::test(\*src))
                    {
                        \*dest = Ch(' '); ++dest;    // Put single space in dest
                        ++src;                      // Skip first whitespace char
                        // Skip remaining whitespace chars
                        while (whitespace\_pred::test(\*src))
                            ++src;
                        continue;
                    }
                }

                // No replacement, only copy character
                \*dest++ = \*src++;

            }

            // Return new end
            text = src;
            return dest;

        }

### 为slimxml添加相关转义的功能

参考:[https://stackoverflow.com/questions/9904051/is-there-c-function-that-replace-xml-special-character-with-their-escape-seque](https://stackoverflow.com/questions/9904051/is-there-c-function-that-replace-xml-special-character-with-their-escape-seque)

void escape(std::wstring& xml)
std::map<wchar\_t, std::wstring> transformations;
    transformations\[L'&'\]  = std::wstring(L"&amp;");
    transformations\[L'\\''\] = std::wstring(L"&apos;");
    transformations\[L'"'\]  = std::wstring(L"&quot;");
    transformations\[L'>'\]  = std::wstring(L"&gt;");
    transformations\[L'<'\]  = std::wstring(L"&lt;");

    // Build list of characters to be searched for.
    //
    std::string reserved\_chars;
    for (auto ti = transformations.begin(); ti != transformations.end(); ti++)
    {
        reserved\_chars += ti->first;
    }

    size\_t pos = 0;
    while (std::wstring::npos != (pos = xml.find\_first\_of(reserved\_chars, pos)))
    {
        xml.replace(pos, 1, transformations\[xml\[pos\]\]);
        pos++;
    }
}
//=================================
void replace\_all(std::string& str, const std::string& old, const std::string& repl) {
    size\_t pos = 0;
    while ((pos = str.find(old, pos)) != std::string::npos) {
        str.replace(pos, old.length(), repl);
        pos += repl.length();
    }
}

std::string escape\_xml(std::string str) {
    replace\_all(str, std::string("&"), std::string("&amp;"));
    replace\_all(str, std::string("'"), std::string("&apos;"));
    replace\_all(str, std::string("\\""), std::string("&quot;"));
    replace\_all(str, std::string(">"), std::string("&gt;"));
    replace\_all(str, std::string("<"), std::string("&lt;"));

    return str;
}
//========================
std::string unescape\_xml(std::string str) {
    replace\_all(str, std::string("&amp;"), std::string("&"));
    replace\_all(str, std::string("&apos;"), std::string("'"));
    replace\_all(str, std::string("&quot;"), std::string("\\""));
    replace\_all(str, std::string("&gt;"), std::string(">"));
    replace\_all(str, std::string("&lt;"), std::string("<"));

    return str;
}

需要好好考虑的是怎么修改才能避免应该解析和格式化的效率;
链接:[SlimXml的一个使用注意点](https://bbs.huaweicloud.com/blogs/61d8e1a1bbf411e9b759fa163e330718)