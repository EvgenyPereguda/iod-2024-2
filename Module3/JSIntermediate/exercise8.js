const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map();
phoneBookDEF.set('Daryl', '0412312343');
phoneBookDEF.set('Eva', '0433221117');
phoneBookDEF.set('Frank', '0455221182');


phoneBookABC.set('Caroline', '069584')

function printPhoneBook(contacts){

    contacts.forEach((phone, name)=>{console.log(name + ": "+ phone);})
}

const phoneBook = new Map();


phoneBookABC.forEach((phone, name)=>{phoneBook.set(name , phone);})
phoneBookDEF.forEach((phone, name)=>{phoneBook.set(name , phone);})


printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);
printPhoneBook(phoneBook);