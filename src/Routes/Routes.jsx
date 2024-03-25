import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <div>error</div>,
            children: [
                {
                    path: 'book',
                    element: <div>Book</div>
                }
            ]
        }
    ])

export default router;