import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ZoomToggle } from "./components/common/ZoomToggle";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ZoomToggle />
    </>
  );
}

export default App;
