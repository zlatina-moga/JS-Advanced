function getArticleGenerator(articles) {  
    return function createArticle() {
        const div = document.getElementById('content')
        if (articles.length > 0){
            let article = document.createElement('article');           
            article.textContent = articles.shift();
            div.appendChild(article)
        }
    }
}



