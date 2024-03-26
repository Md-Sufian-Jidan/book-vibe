import { NavLink,  } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaRegFile } from "react-icons/fa";

const ReadDetails = ({book}) => {
    const { title, publisher, book_type, rating, review, number_of_pages ,publish_year } = book;
    return (
        <div className="flex gap-20">
            <div>
                    <img src={book?.img} alt="" />
                </div>
                <div>
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="my-5">By : {publisher}</p>
                <div>
                <p className="py-6"><span className="font-bold text-lg">Review :</span> {review}</p>
                <p><span className="font-bold text-xl">Tag </span><span className="bg-gray-300 p-3 text-center rounded-[30px] text-[#23BE0A] font-bold text-lg mx-5">#{book?.tags[0]}</span><span className="bg-gray-300 p-3 text-center rounded-[30px] text-[#23BE0A] font-bold text-lg">#{book?.tags[1]}</span></p>
                <p><FaLocationDot />Year Of Publishing : {publish_year}</p>
                </div>
                <div>
                    <p><CgProfile />Publisher : {publisher}</p>
                    <p><FaRegFile />Number of Pages: <span className="font-bold">{number_of_pages}</span></p>
                </div>
                <div className="my-5">
                    <p className="p-2 bg-[#328EFF] text-[#328EFF]">Category : {book_type}</p>
                    <p className="p-2 bg-[#FFAC3326] text-[#FFAC3326]">Rating : {rating}</p>
                <NavLink to={'/listedBooks'}><button className="btn bg-[#23BE0A] my-5">View Details</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ReadDetails;