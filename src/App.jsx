import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./layout/defaultLayout";
import Homepage from "./pages/Homepage";
import Filmpage from "./pages/Filmpage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route element={<Filmpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
