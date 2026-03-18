import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DetailedFilm() {
  const [detailedProduct, SetDetailedProduct] = useState();

  const { id } = useParams();
  const GetIdProduct = () => {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      console.log(res.data.result);
      SetDetailedProduct(res.data.result);
    });
  };
  useEffect(GetIdProduct, []);
  if (!detailedProduct) return <div>Loading.....</div>;
  return (
    <div className="container-sm">
      <div key={detailedProduct.id} className="d-flex">
        <div className="mx-3 DetailedImg">
          <h1 className="mt-3">{detailedProduct.title}</h1>
          <img
            src={detailedProduct.image}
            alt={detailedProduct.image}
            className="w-100"
          />
        </div>
        <div className="DetailedAb">
          <h5>Abstract</h5>
          <p>{detailedProduct.abstract}</p>
          <h5>Genre</h5>
          <p>{detailedProduct.genre}</p>
          <h5>release_year</h5>
          <p>{detailedProduct.release_year}</p>
          <h5>Director</h5>
          <p>{detailedProduct.director}</p>
        </div>
      </div>

      <div className="p-3">
        <h2 className="mt-5">Reviews</h2>
        {detailedProduct.reviews.map((el) => {
          return (
            <div className="containeReview">
              <h4 className="m-0">{el.name}</h4>
              <p className="mb-2">
                {el.text} <strong>{el.vote}/5</strong>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
