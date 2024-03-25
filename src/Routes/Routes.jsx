import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import PagesRead from "../Pages/PagesRead";
import ListedBooks from "../Pages/ListedBooks";
import Banner from "../Components/Banner/Banner";

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <div>error</div>,
            children: [
                {
                    path: '/',
                    element: <Banner />
                },
                {
                    path: '/listedBooks',
                    element: <ListedBooks />
                },
                {
                    path: '/pagesRead',
                    element: <PagesRead />
                }
            ]
        }
    ])

export default router;