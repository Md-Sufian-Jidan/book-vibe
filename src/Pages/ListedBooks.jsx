import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { getBook } from "../Utils/LocalStorage";
import UseBooksData from "../Hooks/UseBooksData";
// import UseBooksData from "../Hooks/UseBooksData";

const ListedBooks = () => {
    const { books } = UseBooksData();
    const [book , setDisplayBooks] = useState()
    const [bk, setB] = useState();
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        const storedBook = getBook();
        console.log(storedBook);
        if(storedBook.length > 0){
            const booksList = [];
            for(const id of storedBook){
                const book = storedBook.find((book) => book.id === id);
                booksList.push(book);
            }
            console.log(booksList)
            setB(booksList)
            setDisplayBooks(booksList)
        }
    }, [books]);

    const handleBooksFilter = (filter) => {
        console.log(filter);
        console.log(bk.rating)
        if (filter === bk.rating) {
            const rating = bk.filter((book) => book.rating === bk.rating)
            setDisplayBooks(rating);
        }
        else if (filter === 'number_of_pages') {
            const pages = listedBooks.filter((job) => job.remote_or_onsite === 'number_of_pages')
            setDisplayBooks(pages);
        }
        else if (filter === 'publisher_year') {
            const publisher_years = listedBooks.filter((job) => job.remote_or_onsite === 'publisher_year');
            setDisplayBooks(publisher_years)
        }
    }


    return (
        <div>
            <div className="bg-[#1313130D] my-5 p-5 text-center mx-5 rounded-3xl">
                <h2 className="text-3xl font-bold">Books</h2>
            </div>
            <div>
                <div className="dropdown dropdown-end lg:mx-[610px]  mx-[250px]">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By<FaArrowDown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleBooksFilter(`${bk.rating}`)}><a>Rating</a></li>
                        <li onClick={() => handleBooksFilter(`${book.number_of_pages}`)}><a>Number of pages</a></li>
                        <li onClick={() => handleBooksFilter(`${book.publisher_year}`)}><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center rounded-xl mx-4 my-5 overflow-x-auto overflow-y-hidden  flex-nowrap bg-gray-100 text-gray-800 p-1">
                <Link to={'readBooks'} onClick={() => setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-600 text-gray-900`}>
                    <span>Read Books</span>
                </Link>
                <Link to={`wishlist`} onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} border-gray-600 text-gray-600`}>
                    <span>WishList Books</span>
                </Link>
            </div>
            <Outlet />
        </div>
    );
};

export default ListedBooks;