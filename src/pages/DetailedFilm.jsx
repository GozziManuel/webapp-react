import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Starcreator from "../components/Starcreator";
import { useMainContext } from "../context/MainContext";
import ReviewForm from "../components/forms/ReviewForm";

const InitialFormNames = {
  name: "",
  vote: "",
  abstract: "",
};
export default function DetailedFilm() {
  const [detailedProduct, SetDetailedProduct] = useState();
  const [formData, setFormData] = useState(InitialFormNames);
  const { setIsLoading } = useMainContext();
  const { id } = useParams();

  const GetIdProduct = () => {
    setIsLoading(true);
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      console.log(res.data.result);
      SetDetailedProduct(res.data.result);
      setIsLoading(false);
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    postRequest();
    setFormData(InitialFormNames);
  };
  const postRequest = () => {
    setIsLoading(true);
    axios
      .post(`http://localhost:3000/movies/${id}/review`, formData)
      .then((res) => {
        console.log(res.data);
        GetIdProduct();
        setIsLoading(false);
      });
  };

  useEffect(GetIdProduct, []);
  if (!detailedProduct) return <></>;

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
            <div className="containeReview" key={el.id}>
              <h4 className="m-0">{el.name}</h4>
              <p className="mb-2">
                {el.text} <Starcreator vote={el.vote} maxvote={5} />
              </p>
            </div>
          );
        })}
      </div>

      <div>
        <div class="card mt-4">
          <div class="card-header fs-1">Add Review</div>
          <div class="card-body">
            <ReviewForm
              onSubmit={handleFormSubmit}
              data={formData}
              setFormData={setFormData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
