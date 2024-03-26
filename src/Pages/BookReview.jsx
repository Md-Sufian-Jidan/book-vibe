import { NavLink } from "react-router-dom";
import UseBooksData from "../Hooks/UseBooksData";

const BookReview = () => {
    const { books } = UseBooksData();
    return (
        <div>
            {
                books?.map((book) => {
                    const { review, img, id } = book;
                    return (
                        <div key={book.id} >
                            <div className="mx-auto border my-2 w-1/2 p-5 rounded-xl border-[#a9933f]">
                                <div className="text-center">
                                    <img className="mx-auto " src={img} alt="" />
                                </div>
                                <p><span className="font-bold text-2xl"> Review</span> : {review} </p>
                                <div>
                                    <NavLink to={`/BookCard/${id}`} className={({ isActive }) => isActive === true ? 'text-[#23BE0A] border border-[#23BE0A] font-bold btn text-center' : 'font-semibold btn text-center'}>Read More</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default BookReview;