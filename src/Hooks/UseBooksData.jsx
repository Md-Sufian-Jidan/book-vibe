import { useEffect, useState } from "react";

const UseBooksData = () => {
    // const [loading , setLoading] = useState(true);
    //     // setLoading(true);
    //         setLoading(false);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

return { books };
};

export default UseBooksData;