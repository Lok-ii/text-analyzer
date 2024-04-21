import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Structure from "./Components/Structure";
import Context from "./Context/Context";
import Word from "./Components/Word";
import Paragraph from "./Components/Paragraph";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Structure />,
      children: [
        {
          path: "/",
          element: <Word />,
        },
        {
          path: "paragraph",
          element: <Paragraph />,
        },
      ],
    },
    {
      path: "*",
      element: <Structure />,
    },
  ]);

  return (
    <Context>
      <RouterProvider router={router} />
    </Context>
  );
}

export default App;
