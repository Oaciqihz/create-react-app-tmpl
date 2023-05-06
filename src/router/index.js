import Blog from "@/views/Blog";
import Home from "@/views/Home"

const routes = [
    { 
      path: "/",
      element: <Home />,
    },
    { 
      path: "/blog",
      element: <Blog />,
    }
];
export default routes