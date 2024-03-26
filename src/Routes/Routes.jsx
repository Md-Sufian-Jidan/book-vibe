import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import PagesRead from "../Pages/PagesRead";
import ListedBooks from "../Pages/ListedBooks";
import Root from "../Layout/Root";
import BookDetails from "../Components/BookDetalis/BookDetails";
import ReadBooks from "../Components/NestedCard/ReadBooks";
import WishList from "../Components/NestedCard/WishList";
import ErrorPage from "../Components/Error/ErrorPage";
import BookSection from "../Pages/BookSection";
import BookReview from "../Pages/BookReview";
// import ReadBooks from "../Components/NestedCard/ReadBooks";
// import WishList from "../Components/NestedCard/WishList";

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/listedBooks',
                    element: <ListedBooks />,
                    children: [
                        {
                            index: true,
                            path: 'readBooks',
                            element:<ReadBooks />
                        },
                        {
                            path: 'wishlist',
                            element: <WishList />
                        }
                    ]
                },
                {
                    path:'/BookCard/:id',
                    element : <BookDetails />,
                },
                {
                    path: '/pagesRead',
                    element: <PagesRead />
                },
                {
                    path: '/bookSection',
                    element: <BookSection />
                },
                {
                    path: '/bookReview',
                    element: <BookReview />
                }
            ]
        }
    ])

    
export default router;