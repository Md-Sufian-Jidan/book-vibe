import { NavLink } from "react-router-dom";
import UseBooksData from "../../Hooks/UseBooksData";

const Banner = () => {
    const {books} = UseBooksData([]);

    return (
        <div className="lg:mx-28 mx-5 my-5">
            <div className="hero min-h-screen bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={books[0]?.img || books[0]?.img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold ">Books to freshen up<br /> your bookshelf</h1>
                    <NavLink to={'/listedBooks'}><button className="btn bg-[#23BE0A] my-5">View The List</button></NavLink>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;