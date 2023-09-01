import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
   const {id} = useParams(); // fetches the id from browser router
  return <h1>{id}</h1>;
};

export default Details;
