console.log('...App Started...')

function CallAPI(){
fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=adc895caff6f4b029e868245a583417e')
.then(res => res.json())
.then((res)=>{
        renderUI(res)
})
}
 CallAPI()


 function renderUI(res){

    //bougth the articles from data
    const articles=res.articles
     console.log(articles)

    for(let i=0;i<articles.length;i++)
    {
        const ar=articles[i]

        //created parent
        const root=document.getElementById('root')
        const div=document.createElement("div")
        div.setAttribute("class","news-cars")
        const h3=document.createElement("h3")
        h3.innerText=ar.title
    
        const img=document.createElement("img")
        img.src=ar.urlToImage

        const p=document.createElement("p")
        p.innerText=ar.description   
        
        const a=document.createElement("a")
        a.innerText="Read More"
        a.target='_blank'
        a.href=ar.url   
        
      
        div.appendChild(h3)
        div.appendChild(img)
        div.appendChild(p)
        div.appendChild(a)
        root.appendChild(div)
    }

    //single article from the article array
   




 }

