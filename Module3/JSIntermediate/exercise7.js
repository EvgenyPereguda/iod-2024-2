const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

    function getBookTitle(bookId){
        return books.find((book)=>book.id == bookId).title;
    }

    console.log(getBookTitle(3));

    function getOldBooks(){
        return books.filter((book) => 1950 > book.year);
    }

    console.log(getOldBooks());

    function addGenre(){
        
        let lresult = books.map((book) => {book.genre = 'classic'; return book;});

        return lresult;
    }

    console.log(addGenre());

    function getTitles(authorInitial){
        return books.filter((book) => book.author == authorInitial).map((book) => {return book.title;});
    }

    console.log(getTitles('Harper Lee'));

    function latestBook(){

        let latestBook = null;

        books.forEach((book) => {
            
            latestBook = books.find((currentBook)=> currentBook.year > book.year);

        });

        return latestBook;
    }

    
    console.log(latestBook());