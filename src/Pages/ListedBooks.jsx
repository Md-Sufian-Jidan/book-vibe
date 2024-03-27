import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaArrowDown, FaRegFile } from "react-icons/fa";
import { getBook } from "../Utils/LocalStorage";
import UseBooksData from "../Hooks/UseBooksData";
import { FaLocationDot } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const ListedBooks = () => {
    const { books } = UseBooksData();

    const [bk, setB] = useState();
    const [displayBooks, setDisplayBooks] = useState();

    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        const storedBook = getBook();
        // console.log(storedBook);
        if (storedBook.length > 0) {
            const booksList = [];
            for (const strBook of storedBook) {
                const book = storedBook.find((book) => book.id === strBook.id);
                booksList.push(book);
            }
            setB(booksList);
            setDisplayBooks(booksList)
        }
    }, [books]);
    const singleRating = bk?.map(book => book.rating);
    const singleNumberOfPages = bk?.map(book => book.number_of_pages);
    const singlePublish_year = bk?.map(book => book.publish_year);
    //-------descending data
    const ratingDes = singleRating?.sort((a,b) => b - a);
    const numberOfPagesDes = singleNumberOfPages?.sort((a,b) => b - a);
    const publishYearDes = singlePublish_year?.sort((a,b) => b - a);

    const handleBooksFilter = (filter) => {
        // console.log(filter)
        // console.log(ratingDes)

        if(filter == ratingDes){
            const remaining = bk?.filter((book) => console.log(book?.rating) == console.log(filter));
            const sort = remaining?.sort((rem1 , rem2) => rem2?.rating - rem1?.rating)
            console.log(sort);
            setDisplayBooks(sort)
        }
        else if (filter == numberOfPagesDes) {
            const remaining = bk?.filter((book) => console.log(book.number_of_pages) == console.log(filter));
            const sort = remaining?.sort((rem1 , rem2) => rem2.number_of_pages - rem1.number_of_pages)
            console.log(sort);
            setDisplayBooks(sort)
        }
        else if (filter == publishYearDes) {
            const remaining = bk?.filter((book) => console.log(book?.publish_year) == console.log(filter));
            const sort = remaining?.sort((rem1 , rem2) => rem2.publish_year - rem1.publish_year);
            console.log(sort)
            setDisplayBooks(sort)
        }
    }

    return (
        <div>
            <div className="bg-[#1313130D] my-5 p-5 text-center mx-5 rounded-3xl">
                <h2 className="text-3xl font-bold">Books</h2>
            </div>
            <div>
                <div className="dropdown dropdown-end lg:mx-[610px]  mx-[250px]">
                    <div tabIndex={0} role="button" className="btn m-1 text-white bg-[#23BE0A]">Sort By<FaArrowDown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li onClick={() => handleBooksFilter("all")}><a>All</a></li> */}
                        <li onClick={() => handleBooksFilter(`${ratingDes}`)}><a>Rating</a></li>
                        <li onClick={() => handleBooksFilter(`${numberOfPagesDes}`)}><a>Number of pages</a></li>
                        <li onClick={() => handleBooksFilter(`${publishYearDes}`)}><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center rounded-xl mx-4 my-5 overflow-x-auto overflow-y-hidden  flex-nowrap bg-gray-100 text-gray-800 p-1">
                <Link to={''} onClick={() => setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-600 text-gray-900`}>
                    <span>Read Books</span>
                </Link>
                <Link to={`wishlist`} onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} border-gray-600 text-gray-600`}>
                    <span>WishList Books</span>
                </Link>
            </div>
            <div>
                {
                    displayBooks?.map((book) => {
                        const { publisher, publish_year, title, review, number_of_pages, book_type, rating, id , tags} = book;
                        const [first , second] = tags;
                        return (
                            <div key={book.id} className="lg:flex gap-10 mx-28 border my-2 rounded-lg">
                                <div className="flex justify-center mx-28 my-5 bg-gray-300 p-3">
                                    <img className="" src={book?.img} alt="" />
                                </div>
                                <div>
                                    <h1 className="text-5xl font-bold">{title}</h1>
                                    <p className="mt-3">By : {publisher}</p>
                                    <div>
                                        <p className="mt-3"><span className="font-bold text-lg">Review :</span> {review}</p>
                                        <p className="mt-4"><span className="font-bold text-xl">Tag </span><span className="bg-gray-300 p-3 text-center rounded-[30px] text-[#23BE0A] font-bold text-lg mx-5">#{first}</span><span className="bg-gray-300 p-3 text-center rounded-[30px] text-[#23BE0A] font-bold text-lg">#{second}</span></p>
                                        <p className="flex items-center gap-2 mt-5"><FaLocationDot />Year Of Publishing : {publish_year}</p>
                                    </div>
                                    <div>
                                        <p className="flex gap-2 items-center mt-2"><CgProfile />Publisher : {publisher}</p>
                                        <p className="flex gap-2 items-center mt-2"><FaRegFile />Number of Pages: <span>{number_of_pages}</span></p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="my-3 lg:flex items-center gap-5">
                                        <p className="btn bg-[#328EFF26] text-[#328EFF] rounded-xl w-48 my-3">Category : {book_type}</p>
                                        <p className="btn bg-[#FFAC3326] text-[#FFAC33] w-48 rounded-xl">Rating : {rating}</p>
                                        <NavLink to={`/BookCard/${id}`}><button className="btn bg-[#23BE0A] my-5">View Details</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Outlet />
        </div>
    );
};

export default ListedBooks;