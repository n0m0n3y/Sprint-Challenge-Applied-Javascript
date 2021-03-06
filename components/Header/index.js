// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerDiv = document.createElement('div'),
          span = document.createElement('span'),
          title = document.createElement('h1'),
          temp = document.createElement('span');

           //class below
           headerDiv.classList.add('header');
           span.classList.add('date');
           temp.classList.add('temp');
          // textContents bellow
           span.textContent = 'SMARCH 28, 2019';
           title.textContent = 'Labmbda Times';
           temp.textContent ='98°';
         // appending
           headerDiv.appendChild(span);
           headerDiv.appendChild(title);
           headerDiv.appendChild(temp);

           return headerDiv;

}

document.querySelector('.header-container').appendChild(Header());






