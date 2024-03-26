import { NavLink } from "react-router-dom";
import UseBooksData from "../Hooks/UseBooksData";
import BSection from "./BSection";

const BookSection = () => {
    const {books} = UseBooksData();
    // console.log(data)
    return (
        <div>
            <h3 className='text-2xl text-center my-2'><span className='text-primary'>MoreBooks</span><span className='text-secondary'>AreComing</span>...</h3>
            <p className='text-[#9c7d2f] font-bold text-center text-2xl my-3'>To Read More Books Always Connect with us</p>
            <div className="text-center">
            <NavLink to={'/'} className="text-[#23BE0A] btn text-3xl ">BookVibe</NavLink>
            </div>
        <div className="grid md:grid-cols-3 gap-10 mx-10 my-5">
            {
                books?.map((book) => <BSection key={book.id} book={book}/>)
            }
        </div>
        </div>
    );
};

export default BookSection;