import { useParams } from "react-router-dom";
import UseBooksData from "../../Hooks/UseBooksData";
import { saveToLocalStorage, saveWishList } from "../../Utils/LocalStorage";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  
const BookDetails = () => {
    const { books } = UseBooksData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find((b) => b.id === idInt);

    const { img, title, publisher, book_type, rating, review, number_of_pages ,publish_year
    } = book || {};
    
    // console.log(book);
    const handleReadBtn =()=> {
        saveToLocalStorage(book);        
    }
    const handleWishList =()=> {
        saveWishList(book);
    }

    return (
        <div className="lg:flex justify-between lg:mx-28 mx-36 my-10 ">
            <div className="">
                <img className="bg-base-200 text-center p-16 lg:w-[400px]" src={img} alt="" />
            </div>
            <div>
                <h1 className="text-5xl font-bold my-4">{title}</h1>
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
                    <button onClick={()=> handleReadBtn()} className="btn p-3 border-2 hover:border-black  bg-[#1313134D] hover:text-white hover:bg-[#23BE0A] mx-2 rounded-xl">Read</button>
                    <button onClick={()=> handleWishList()} className="btn p-3 bg-[#50B1C9] rounded-lg hover:border-black border-2 text-white">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default BookDetails;