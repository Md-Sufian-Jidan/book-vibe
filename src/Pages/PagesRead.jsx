import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getBook } from '../Utils/LocalStorage';

const PagesRead = () => {
    const books = getBook();
    console.log(books)

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div className='lg:mx-16 my-10'>
            {/* <h2>i am from read pages </h2> */}
            <BarChart
                width={1200}
                height={300}
                data={books}
               >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="book_name" />
                <YAxis dataKey={"number_of_pages"}/>
                <Bar dataKey="number_of_pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {books.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesRead;