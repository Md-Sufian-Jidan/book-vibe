export const getBook = () => {
    const savedBook = localStorage.getItem('books');
    if(savedBook){
        return JSON.parse(savedBook);
    }
    return [];
}
export const saveToLocalStorage = (book)=> {
    const intId = book.id;
    const savedBook = getBook();
    const isExists = savedBook.find((b) => b.id === parseInt(intId))
    if(!isExists){
        savedBook.push(savedBook);
        console.log(savedBook);
        localStorage.setItem('books', JSON.stringify(savedBook));
        alert('You successfully added the book')
    }
    else{
        alert('lalsjdklf')
    }
    console.log(book, 'i am from local storage')
};
