import axios from "axios";
import { useEffect } from "react";

export default function FilmcardContainer() {
  useEffect(axiosFilms, []);
  function axiosFilms() {
    axios.get("http://localhost:3000/movies");
  }
}
