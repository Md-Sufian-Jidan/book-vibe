export const getBook = () => {
    const data = JSON.parse(localStorage.getItem("books")) || [];
    return data;
}
export const saveToLocalStorage = (book)=> {
    const data = JSON.parse(localStorage.getItem("books")) || [];
        const savedBook = data.find(item => item.id === book.id);
        if(savedBook){
            alert('data asa')
        }
        else{
            data.push(book);
            localStorage.setItem("books", JSON.stringify(data))
        }
};
