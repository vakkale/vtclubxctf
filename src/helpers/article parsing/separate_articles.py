# find const articles = [ ... ] in the file articles.jsx and separate the articles into individual files
# save them to ./articles

# articles is in the following format:
# const articles: {
#     title: string;
#     url: string;
#     year: string;
#     date: string;
#     season: string;
#     category: string;
#     image: string;
#     content: JSX.Element;
# }[]

# where the date is written as
#     year: "YYYY",
#     date: "9 - 30",

# each file should be named article_<date>.json where <date> is the date of the article
# convert the date to the format MM-DD-YYYY only in the filename

# TODO: fix this bruh

import re
import json
from typing import List

def separate_articles(articles: List[dict]):
    for article in articles:
        # extract the date
        date = article['date']
        date = date.split(' - ')
        month = date[0]
        day = date[1]
        year = article['year']
        date = f'{month}-{day}-{year}'
        article['date'] = date
        # save to ./articles as a json file
        with open(f'./articles/article_{date}.json', 'w', encoding='utf-8') as file:
            json.dump(article, file, ensure_ascii=False, indent=4)

# open the file articles.jsx and read the content
with open('../../data/articles copy.jsx', 'r', encoding='utf-8', errors='ignore') as file:
    data = file.read()

# find the articles list
articles = re.search(r'const articles: {.*?}', data, flags=re.DOTALL)

# extract the articles
articles = re.findall(r'{.*?}', articles, flags=re.DOTALL)

# convert the articles to a list of dictionaries
articles = [eval(article) for article in articles]

# separate the articles
separate_articles(articles)

# print the number of articles
print(f'{len(articles)} articles separated')