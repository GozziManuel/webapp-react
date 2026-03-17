import Filmcard from "./Filmcard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FilmcardContainer() {
  const [movie, setMovie] = useState([]);

  useEffect(axiosFilms, []);

  function axiosFilms() {
    axios.get("http://localhost:3000/movies").then((res) => {
      console.log(res.data.results);
      setMovie(res.data.results);
    });
  }
  return (
    <div className="container-sm my-5">
      <div className="row g-3">
        {movie.map((el, id) => {
          return (
            <div className="col-4" key={el.id}>
              <div className="cardcontainer">
                <Filmcard
                  title={el.title}
                  image={el.image}
                  rlsyear={el.release_year}
                  abstract={el.abstract}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
