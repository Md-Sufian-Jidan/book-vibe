import { toast } from "react-toastify";


export const getBook = () => {

    const data = JSON.parse(localStorage.getItem("books")) || [];
    return data;
}
export const saveToLocalStorage = (book) => {
    const data = JSON.parse(localStorage.getItem("books")) || [];
    const savedBook = data.find(item => item.id === book.id);
    if (savedBook) {
        return toast.error('Book Data All Ready Exists')
    }
    else {
        data.push(book);
        localStorage.setItem("books", JSON.stringify(data))
        toast.success('Book Data Saved Successfully')

    }
};
