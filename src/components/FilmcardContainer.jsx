import Filmcard from "./Filmcard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useMainContext } from "../context/MainContext";

export default function FilmcardContainer() {
  const [movie, setMovie] = useState([]);
  const { setIsLoading } = useMainContext();

  useEffect(axiosFilms, []);

  function axiosFilms() {
    setIsLoading(true);
    axios.get("http://localhost:3000/movies").then((res) => {
      console.log(res.data.results);
      setMovie(res.data.results);
      setIsLoading(false);
    });
  }
  return (
    <div className="container-sm my-5">
      <div className="row g-3">
        {movie.map((el, id) => {
          return (
            <div className="col-4" key={el.id}>
              <Link to={"/Filmpage/" + el.id}>
                <div className="cardcontainer">
                  <Filmcard
                    title={el.title}
                    image={el.image}
                    rlsyear={el.release_year}
                    abstract={el.abstract}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
