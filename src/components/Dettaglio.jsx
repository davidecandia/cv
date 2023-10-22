import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data";

//icone
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Dettaglio = () => {
  const [item, setItem] = useState();
  const { id } = useParams();
  const getProjectById = (value) => {
    const project = data.find((p) => p.id === value);
    return project ? setItem(project) : null;
  };
  useEffect(() => {
    getProjectById(id);
  }, [id]);
  if (item === undefined) {
    return <h1>nessun elemento</h1>;
  }
  const {
    name,
    descrizione,
    mini_descrizione,
    tecnologie,
    image_open,
    image,
    url_git,
    url,
  } = item;
  return (
    <article className="mt-[160px] mb-[80px]">
      <div className="contain grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="col-span-3">
          <h1 className=" font-bold sm:text-3xl lg:text-5xl mb-10">
            {mini_descrizione} : {name}
          </h1>
          <div className="mb-10">
            <img
              className="rounded-xl w-full"
              src={image_open || image}
              alt={name}
            />
          </div>
          <div className="mb-10">
            <h1 className=" font-bold sm:text-3xl lg:text-5xl mb-10">
              Descrizione progetto
            </h1>
            <p>{descrizione}</p>
          </div>

          <div>
            <h1 className=" font-bold sm:text-3xl lg:text-5xl mb-10">
              Tecnologie utilizzate
            </h1>
            <p>{tecnologie}</p>
          </div>
        </div>
        <div className="relative">
          {url !== "" ? (
            <div className="lg:fixed">
              <span className="flex gap-4 items-center">
                <a href={url} target="blank">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    style={{ color: "#ffffff", fontSize: "2.5rem" }}
                  />
                </a>
                <p> Vedi demo</p>
              </span>
              <br />
              <span className="flex gap-4 items-center">
                <a href={url_git} target="blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: "#ffffff", fontSize: "2.5rem" }}
                  />
                </a>
                <p> Vedi progetto git</p>
              </span>
            </div>
          ) : (
            <div className="lg:fixed">
              <span className="flex gap-4 items-center">
                <a href={url_git} target="blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: "#ffffff", fontSize: "2.5rem" }}
                  />
                </a>
                <p> Vedi progetto git</p>
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Dettaglio;
