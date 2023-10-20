import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const Dettaglio = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  const getProjectById = (value) => {
    const project = data.find((p) => p.id === value);
    return project ? setItem(project) : null;
  };
  useEffect(() => {
    getProjectById(id);
  }, [id]);

  return <div>ciao</div>;
};

export default Dettaglio;
