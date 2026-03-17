import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DetailedFilm() {
  const [detailedProduct, SetDetailedProduct] = useState([]);

  const { id } = useParams();
  const GetIdProduct = () => {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      console.log(res.data);
      SetDetailedProduct(res.data);
    });
  };
  useEffect(GetIdProduct, []);
  return (
    <>
      <h1>Test {id}</h1>
    </>
  );
}
