import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <AboutMe /> },
      { path: '/resume', element: <Resume /> },
      { path: '/blog', element: <Blog /> },
      { path: '/contact', element: <Contact /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;