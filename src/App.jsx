import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {

    const route = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <HomePage/>
                },
                {
                    path: "/about",
                    element: <About/>
                },
                {
                    path: "/contact",
                    element: <Contact/>
                }
            ]
        }
        ]
    )

  return (
  <RouterProvider router={route}/>
  )
}

export default App
