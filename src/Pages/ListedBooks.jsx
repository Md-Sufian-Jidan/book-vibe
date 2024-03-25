import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  
    const [tabIndex , setTabIndex] = useState(0)

    return (
        <div>
            <div className="bg-[#1313130D] my-5 p-5 text-center mx-5 rounded-3xl">
        <h2 className="text-3xl font-bold">Books</h2>
    </div>
    <div className="flex items-center rounded-2xl mx-4 my-5 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-gray-100 text-gray-800">
        <Link to={''} onClick={()=> setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-600 text-gray-900`}>
            <span>Read Books</span>
        </Link>
        <Link to={`wishlist`} onClick={()=> setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1? 'border border-b-0' : 'border-b'} border-gray-600 text-gray-600`}>
            <span>WishList Books</span>
        </Link>
    </div>
    <Outlet/>
            
        </div>
    );
};

export default ListedBooks;