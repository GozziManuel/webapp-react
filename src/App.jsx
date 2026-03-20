import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./layout/defaultLayout";
import Homepage from "./pages/Homepage";
import Filmpage from "./pages/Filmpage";
import DetailedFilm from "./pages/DetailedFilm";
import { MainContextProvider } from "./context/MainContext";

export default function App() {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/Filmpage" element={<Filmpage />} />
            <Route path="/Filmpage/:id" element={<DetailedFilm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainContextProvider>
  );
}
