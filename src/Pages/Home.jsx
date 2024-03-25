import BookCard from "../BookCard/BookCard";
import BookTitle from "../BookCard/BookTitle";
import Banner from "../Components/Banner/Banner";
import UseBooksData from "../Hooks/UseBooksData";

const Home = () => {
    const {books} = UseBooksData([])
    return (
        <div>
            <Banner />
            <BookTitle />
            <div className="grid md:grid-cols-3 mx-10 gap-5 my-5">
                {
                    books.map((book) => <BookCard key={book.id} book={book}/>)
                }
            </div>
        </div>
    );
};

export default Home;