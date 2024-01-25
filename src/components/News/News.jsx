import React, { useState, useEffect } from 'react';
import './News.css';

const Trending = () => {
    const apikey = '7e694e9ad9b4469cd02e99e6799cfd2c';
    const url = 'https://gnews.io/api/v4/search?q=nike+sneakers&lang=en&country=us+uk&max=10&apikey=' + apikey;

    const [articles, setArticles] = useState([]);
    const [highlightedArticle, setHighlightedArticle] = useState(null); 

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setArticles(data.articles);
                setHighlightedArticle(data.articles[0]);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <h2>Trending</h2>
            <div className='pageContainer'>

            {highlightedArticle && (
                <div className='highlighted-article'>
                    <img className='image' src={highlightedArticle.image} alt={`Image for ${highlightedArticle.title}`} />
                    <div className='Newscontent'>
                        <h2 className='title'>{highlightedArticle.title}</h2>
                        <p className='description'>{highlightedArticle.description}</p>
                        <a className='link' href={highlightedArticle.url} target="_blank" rel="noopener noreferrer">
                            <button type="button">Visit Website</button>
                        </a>
                    </div>
                </div>
            )}

            <div className='news-card'>
                {articles.map((article, index) => (
                    <div key={index} className='NewsCard'>
                        <img className='image' src={article.image} alt={`Image for ${article.title}`} />
                        <div className='Newscontent'>
                            <h2 className='title'>{article.title}</h2>
                            <p className='description'>{article.description}</p>
                            <a className='link' href={article.url} target="_blank" rel="noopener noreferrer">
                                <button type="button">Visit Website</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    );
}

export default Trending;
