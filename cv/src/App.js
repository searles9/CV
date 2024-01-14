import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // children: [
    //   { index: true, element: <AboutMe /> },
    //   { path: '/resume', element: <Resume /> },
    //   { path: '/blog', element: <Blog /> },
    //   { path: '/contact', element: <Contact /> }
    // ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;