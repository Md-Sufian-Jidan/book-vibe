import { useParams } from "react-router-dom";
import UseBooksData from "../../Hooks/UseBooksData";


const BookDetails = () => {
    const { books } = UseBooksData();
    const { id } = useParams();

    const idInt = parseInt(id);
    const book = books.find((b) => b.id === idInt);

    const { img, title, publisher, book_type, rating, review, number_of_pages ,publish_year
    } = book || {};
    console.log(book);

    return (
        //     <div className="hero min-h-screen bg-base-200">
        //     <div className="hero-content flex-col lg:flex-row gap-100">
        //         <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
        //         <div>
        //             <h1 className="text-5xl font-bold">{title}</h1>
        //             <p className="my-5">By : {publisher}</p>
        //             <div className="divider">
        //             </div>
        //             <p className="font-bold text-xl">{book_type}</p>
        //             <div className="divider">
        //             </div>
        //             <p className="py-6"><span className="font-bold text-lg">Review :</span> {review}</p>
        //             <p>Tag :</p>
        //             <button className="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>
        <div className="lg:flex justify-between lg:mx-28 mx-36 my-10 ">
            <div className="">
                <img className="bg-base-200 text-center p-16 lg:w-[400px]" src={img} alt="" />
            </div>
            <div>
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="my-5">By : {publisher}</p>
                <div className="divider">
                </div>
                <p className="font-bold text-xl">{book_type}</p>
                <div className="divider">
                </div>
                <p className="py-6"><span className="font-bold text-lg">Review :</span> {review}</p>
                <p><span className="font-bold text-xl">Tag </span><span className="bg-gray-300 p-3 text-center rounded-[30px] text-[#23BE0A] font-bold text-lg mx-5">#{book?.tags[0]}</span><span className="bg-gray-300 p-3 text-center rounded-[30px] text-[#23BE0A] font-bold text-lg">#{book?.tags[1]}</span></p>
                <div className="divider"></div>
                <div className="my-5">
                    <pre>Number of Pages:      <span className="font-bold">{number_of_pages}</span></pre>
                    <pre>Publisher:            <span className="font-bold">{publisher}</span></pre>
                    <pre>Year of Publishing:   <span className="font-bold">{publish_year}</span></pre>
                    <pre>Rating:               <span className="font-bold">{rating}</span></pre>
                </div>
                <div>
                    <button className="btn p-3 border-2 hover:border-black  bg-[#1313134D] mx-2 rounded-xl">Read</button>
                    <button className="btn p-3 bg-[#50B1C9] rounded-lg hover:border-black border-2 text-white">Wishlist</button>
                </div>
            </div>
        </div>

    );
};

export default BookDetails;