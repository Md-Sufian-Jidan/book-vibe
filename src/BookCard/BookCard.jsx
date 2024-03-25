import { NavLink } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const BookCard = ({book}) => {
    const {id ,img ,title , publisher ,book_type ,rating } = book; 
    // console.log(book)
    return (
        <div className="border p-3">
            <NavLink to={`/bookCard/${id}`} className={'my-5'} >
                <div className="card card-compact shadow-xl ">
            <div className="bg-gray-100 mx-5 rounded-xl">
            <figure><img className="h-[200px] mt-2" src={img} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <p className="w-28 bg-gray-300 p-3 text-center rounded-[30px] text-[#23BE0A] font-bold text-lg">{book_type}</p>
                <h2 className="card-title">{title}</h2>
                <p className="my-2">By: {publisher}</p>
                <hr className="text-black"/>
            </div>
            <div className="flex justify-between mx-10 mb-5">
                    <p >{book_type}</p>
                    <p className="flex items-center gap-2">{rating}<CiStar size={22}/></p>
                </div>
        </div>
       </NavLink>
        </div>
         
    );
};

export default BookCard;