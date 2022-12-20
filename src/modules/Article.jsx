import "./Article.scss";

export default function Article({ article, image }) {

    return (
        <>
            <div className="article-container">
                <div className="image-container">
                    <img src={image} style={{ width: '100%', objectFit: 'cover', objectPosition: 'center' }}></img>
                </div>
                <div className="html-container">
                    {article}
                </div>
            </div>
        </>
    );
}