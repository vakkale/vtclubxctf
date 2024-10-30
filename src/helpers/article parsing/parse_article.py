import re

# read the html file, ignoring problematic characters
with open('article.html', 'r', encoding='utf-8', errors='ignore') as file:
    data = file.read()

# remove <span style="color: rgb(x, x, x)"> or <span style="color: rgb(x, x, x) ... newline> but keep the text inside
data = re.sub(r'<span\s+style="color:\s*rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)\s*"\s*>\s*(.*?)\s*</span\s*>', r'\1', data, flags=re.DOTALL)

# remove <span style="color: inherit"> but keep the text inside
data = re.sub(r'<span\s+style="color:\s*inherit\s*"\s*>\s*(.*?)\s*</span\s*>', r'\1', data, flags=re.DOTALL)

# remove <li style="color: rgb(0, 0, 0)"> but keep the rest of the <li> tag content
data = re.sub(r'<li\s+style="color:\s*rgb\(0,\s*0,\s*0\)\s*"', r'<li', data)

# write the cleaned data to a new file, also using utf-8 encoding
with open('article_cleaned.html', 'w', encoding='utf-8', errors='ignore') as file:
    file.write(data)
