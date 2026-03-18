import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DetailedFilm() {
  const [detailedProduct, SetDetailedProduct] = useState([]);

  const { id } = useParams();
  const GetIdProduct = () => {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      console.log([res.data.result]);
      SetDetailedProduct([res.data.result]);
    });
  };
  useEffect(GetIdProduct, []);

  return (
    <div>
      {detailedProduct.map((el) => {
        return (
          <div key={el.id} className="d-flex">
            <div className="mx-3 DetailedImg">
              <h1 className="mt-3">{el.title}</h1>
              <img src={el.image} alt={el.image} className="w-100" />
            </div>
            <div className="DetailedAb">
              <h5>Abstract</h5>
              <p>{el.abstract}</p>
              <h5>Genre</h5>
              <p>{el.genre}</p>
              <h5>release_year</h5>
              <p>{el.release_year}</p>
              <h5>Director</h5>
              <p>{el.director}</p>
            </div>
          </div>
        );
      })}
      <div>
        {/* {detailedProduct.reviews.map((el) => {
          return (
            <>
              <h1>{el}</h1>
            </>
          );
        })} */}
      </div>
    </div>
  );
}
