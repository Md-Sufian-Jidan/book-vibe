
import { getBook } from "../../Utils/LocalStorage";
import ReadDetails from "./ReadDetails";

const ReadBooks = () => {
    const storedData = getBook()
    // const {id} = useParams();
    // const book = books.find((b) => b.id === id);
    // console.log(storedData);
    return (
        <div>
            {
                storedData?.map(book => <ReadDetails key={book.id} book={book}/>)
            }
                
        </div>
    );
};

export default ReadBooks;