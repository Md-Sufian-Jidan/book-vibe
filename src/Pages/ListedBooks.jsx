import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { getBook } from "../Utils/LocalStorage";
import UseBooksData from "../Hooks/UseBooksData";
// import UseBooksData from "../Hooks/UseBooksData";

const ListedBooks = () => {
    const { books } = UseBooksData();
    const [book , setBooks] = useState()
    const [tabIndex, setTabIndex] = useState(0);
    const [b, setB] = useState()

    useEffect(() => {
        const bk = getBook();
        setB(bk)
        setBooks(books)
        // console.log(books)
    }, [])

    const handleBooksFilter = (filter) => {
        if (filter === 'rating') {
            const rating = listedBooks.filter((book) => book.rating === "rating")
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
                <div className="dropdown dropdown-end lg:mx-[600px]  mx-[250px]">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By<FaArrowDown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleBooksFilter('rating')}><a>Rating</a></li>
                        <li onClick={() => handleBooksFilter('number_of_pages')}><a>Number of pages</a></li>
                        <li onClick={() => handleBooksFilter('publisher_year')}><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>
            <div>
                {
                    b?.map(item => <div key={item.id}></div>)
                }
            </div>

            <div className="flex items-center rounded-2xl mx-4 my-5 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-gray-100 text-gray-800">
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