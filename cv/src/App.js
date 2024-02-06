import { RouterProvider, createHashRouter } from "react-router-dom";
import Root from "./pages/Root";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <AboutMe /> },
      { path: '/resume', element: <Resume /> },
      { path: '/contact', element: <Contact /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;