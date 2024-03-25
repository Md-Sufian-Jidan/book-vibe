import { useEffect, useState } from "react";

const UseBooksData = () => {
    const [data, setData] = useState([]);
    const [loading , setLoading] = useState(true);
    useEffect(() => {
        // setLoading(true);
        const fetchData = async () => {
            const res = await fetch("/books.json");
            const data = await res.json();
            setData(data);
            setLoading(false);
        }
        fetchData()
    }, []);

    return {data , loading};
};

export default UseBooksData;