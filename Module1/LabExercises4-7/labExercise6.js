const book = {
    "title" : "Lorg of the Rings",
    "description" : "Finction",
    "author" : "Tolkien",
    "Number_of_pages" : 987
    }

    function printMemebers(instance){
        for (const [key, value] of Object.entries(instance)) {
            console.log(`${key} = ${value}`);
          }
    }

    printMemebers(book);

    
    console.log(book);


    book.title = "Dune";
    book.description = "Finction";
    book.author = "Frank Gerbert";
    book.Number_of_pages = "300";
    

    printMemebers(book);
    
    console.log(book);


    let books = new Array;

    for (let i = 0; i < 5; i++)    {
        books.push(book);
    }

    console.log(books);