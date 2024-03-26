import { CgProfile } from "react-icons/cg";
import { FaLocationDot, FaRegFile } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const WishListDetails = ({wish}) => {
    const { id ,title, publisher, book_type, rating, review, number_of_pages ,publish_year } = wish;

    return (
        <div className="lg:flex gap-10 mx-28 border my-2">
            <div className="flex justify-center mx-28 my-5 bg-gray-300 p-3">
                    <img className="" src={wish?.img} alt="" />
                </div>
                <div>
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="mt-3">By : {publisher}</p>
                <div>
                <p className="mt-3"><span className="font-bold text-lg">Review :</span> {review}</p>
                <p className="mt-4"><span className="font-bold text-xl">Tag </span><span className="bg-gray-300 p-3 text-center rounded-[30px] text-[#23BE0A] font-bold text-lg mx-5">#{wish?.tags[0]}</span><span className="bg-gray-300 p-3 text-center rounded-[30px] text-[#23BE0A] font-bold text-lg">#{wish?.tags[1]}</span></p>
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
    );
};

export default WishListDetails;