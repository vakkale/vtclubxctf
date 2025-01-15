import re
import os

def parse_jsx_file(file_path):
    # Read the JSX file
    with open(file_path, 'r', encoding='utf-8') as file:
        jsx_content = file.read()

    # Regular expression to match each article's content
    content_pattern = re.compile(
        r"content:\s*\(\s*<div class=\"article-content\">(.*?)\),", re.DOTALL
    )

    # Find all matches
    matches = content_pattern.findall(jsx_content)

    # Clean up the extracted content
    cleaned_articles = []
    for match in matches:
        cleaned_content = re.sub(r"\s+", " ", match).strip()  # Minimize whitespace
        cleaned_content = cleaned_content.replace("&nbsp;", " ")  # Replace HTML entities
        cleaned_articles.append(cleaned_content)

    return cleaned_articles


def save_to_html_file(contents, file_path):
    total_articles = len(contents)
    with open(file_path, 'w', encoding='utf-8') as output_file:
        output_file.write("<html>\n<head>\n<title>All Articles</title>\n</head>\n<body>\n")
        
        # Add content in reverse order
        for index, content in enumerate(reversed(contents), 1):
            article_number = total_articles - index + 1
            output_file.write(f"<h1><b>{article_number}</b></h1>\n")  # Add bold article number
            output_file.write(f"{content}\n<br><hr><br>\n")
        
        output_file.write("</body>\n</html>\n")
    
    print(f"Content saved to '{file_path}'.")


def main():
    jsx_file_path = "articles.jsx"
    output_file_name = "all_articles_just_content.html"
    
    # Parse articles from JSX file
    articles_content = parse_jsx_file(jsx_file_path)
    
    # Save parsed content to an HTML file
    output_file_path = os.path.join(os.path.dirname(jsx_file_path), output_file_name)
    save_to_html_file(articles_content, output_file_path)


if __name__ == "__main__":
    main()
