import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import PagesRead from "../Pages/PagesRead";
import ListedBooks from "../Pages/ListedBooks";
import Root from "../Layout/Root";
import BookDetails from "../Components/BookDetalis/BookDetails";
// import ReadBooks from "../Components/NestedCard/ReadBooks";
// import WishList from "../Components/NestedCard/WishList";

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            errorElement: <div>error</div>,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/listedBooks',
                    element: <ListedBooks />
                },
                {
                    path:'/BookCard/:id',
                    element : <BookDetails />,
                },
                {
                    path: '/pagesRead',
                    element: <PagesRead />
                }
            ]
        }
    ])

    // children: [
    //     {
    //         index: true,
    //         path: '',
    //         element:<ReadBooks />
    //     },
    //     {
    //         path: 'wishlist',
    //         element: <WishList />
    //     }
    // ]
export default router;