import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        // element: <App></App>
        Component: App,
        children: [
            {
                index: true,
                // path: 'user',
                Component: User
            },
            {
                index: true,
                path: 'user',
                Component: User
            },
            {
                path: 'tasks',
                Component: Tasks
            }
        ],
        errorElement: <div>Error page</div>
    }
])

export default router;