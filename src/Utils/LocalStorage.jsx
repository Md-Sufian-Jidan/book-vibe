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
        toast.success('Book Data Saved Successfully');

    }
};
export const saveWishList = (wish) => {
    const data = JSON.parse(localStorage.getItem("wish")) || [];
    const savedBook = data.find(item => item.id == wish.id);
    // -----------if you click first on read books the data will not add in wish list
    const readBook = getBook();
    const isExists = readBook.find((book) => book.id == wish.id);
    if (isExists) {
        return toast.error('You Have All Ready Read The Book')
    }


    if (savedBook) {
        return toast.error('Book Data All Ready Exists In WishList')
    }
    else {
        data.push(wish);
        localStorage.setItem("wish", JSON.stringify(data))
        toast.success('Book Saved Successfully In WishList')

    }
}

export const getWish = () => {
    const data = JSON.parse(localStorage.getItem("wish")) || [];
    return data;
}
// export const readBookIsExists = () => {
//     const readBook = getBook();
//     const wishBook = getWish();
//     const singleRead = readBook.filter((item) => item.id);
//     const singleWish = wishBook.filter((item) => item.id);
//     const isAdded = singleRead === singleWish;
//     if (isAdded) {
//         return toast.error('You Have All Ready Read The Book');
//     }
// }