// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: 
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cards = document.querySelector('.cards-container');
function cardsCreator(element){
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          newImageContainer =document.createElement('div'),
          newImg = document.createElement('img'),
          span = document.createElement('span');


          //adding some Class here
        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        newImageContainer.classList.add('img-container');
        //img src
        newImg.src = element.authorPhoto;

        //TextCon
        headline.textContent = element.headline;
        span.textContent =`By ${element.authorName}`;

        //appending childs
        card.appendChild(headline);
        card.appendChild(author);
        card.appendChild(newImageContainer);
        card.appendChild(newImg);
        author.appendChild(span);
        cards.appendChild(card);
        //RETURN!!!
        
        return card;
}



axios.get('https://lambda-times-backend.herokuapp.com/articles').then((response)=>{
    console.log(response.data.articles)
    const bootstrap = response.data.articles.bootstrap,
          javaScript = response.data.articles.javascript,
          jquery = response.data.articles.jquery,
          node = response.data.articles.node,
          technology = response.data.articles.technology;
// iterating 
            bootstrap.forEach(element =>{
            const card = cardsCreator(element);
            cards.appendChild(card);
            })
            javaScript.forEach(element =>{
            const card = cardsCreator(element);
            cards.appendChild(card);
            })
            jquery.forEach(element =>{
            const card = cardsCreator(element);
            cards.appendChild(card);
            })

            node.forEach(element =>{
                const card = cardsCreator(element);
                cards.appendChild(card);
            })

            technology.forEach(element =>{
                const card = cardsCreator(element);
                cards.appendChild(card);
            })
    })

.catch((error)=>{
    console.log(error);
})