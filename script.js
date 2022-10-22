numberId = 1;

function Book(title, authour, pages, read) {
  (this.title = title),
    (this.authour = authour),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary() {
  const askBook = prompt('put a book');
  const askAuthour = prompt('put an authour');
  const askPages = prompt('put a number of pages');
  const askReadNo = 'No';
  const askReadYes = 'Yes';
  const askRead = askReadYes + '    ' + askReadNo;
  // const newBook = new Book(askBook, askAuthour, askPages, askRead);

  const titleResult = document.createElement('p');
  const authourResult = document.createElement('p');
  const pagesResult = document.createElement('p');
  const readResult = document.createElement('p');

  titleResult.innerHTML = 'Title of the book :   ' + askBook;
  authourResult.innerHTML = 'Authour of the book :' + askAuthour;
  pagesResult.innerHTML = 'Number of pages : ' + askPages;
  readResult.innerHTML = 'Have you Read? : No';

  // create card and append card to body
  const card = document.createElement('div');
  card.classList.add(
    'card',
    'bg-green-200',
    'border-lime-900',
    'border-2',
    'p-10',
    'm-12'
  );

  card.setAttribute('id', numberId);

  card.appendChild(titleResult);
  card.appendChild(authourResult);
  card.appendChild(pagesResult);
  card.appendChild(readResult);

  document.body.appendChild(card);

  // Remove button

  let btn = document.createElement('button');
  btn.classList.add(
    'btn',
    'bg-red-200',
    'border-lime-900',
    'border-2',
    'p-3',
    'rounded-full'
  );
  btn.innerHTML = 'Remove This Book';
  const removeBookId = document.getElementById(numberId);
  btn.onclick = function (removeBook) {
    numberId--;

    removeBookId.remove();
  };
  card.appendChild(btn);

  // add a switch button who says yes or no

  let switchButton = document.createElement('button');
  switchButton.classList.add(
    'btn',
    'bg-red-200',
    'border-lime-900',
    'border-2',
    'p-3',
    'rounded-full'
  );
  switchButton.innerHTML = 'Have you read this book?';

  switchButton.addEventListener('click', () => {
    console.log(numberId);

    if (readResult.innerHTML.includes('No')) {
      readResult.innerHTML = readResult.innerHTML.replace('No', 'Yes');
    } else {
      readResult.innerHTML = readResult.innerHTML.replace('Yes', 'No');
    }
    debugger;
  });

  card.appendChild(switchButton);

  numberId++;
}

// add a button for adding a book
