etch('http://localhost:5000/gfg-articles')
.then((res) => res.json())
.then((gfg_articles) => console.log(gfg_articles));