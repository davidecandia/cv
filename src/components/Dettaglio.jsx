import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data";

//icone
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Dettaglio = () => {
  const [item, setItem] = useState();
  const [altezza, setAltezza] = useState();
  const { id } = useParams();

  const getProjectById = (value) => {
    const project = data.find((p) => p.id === value);
    return project ? setItem(project) : null;
  };
  useEffect(() => {
    getProjectById(id);
  }, [id]);

  const h1Ref = useRef(null);

  useEffect(() => {
    if (h1Ref.current) {
      const altezzaH1 = h1Ref.current.offsetHeight;
      setAltezza(altezzaH1);
    }
  }, [item]);

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
          <h1 ref={h1Ref} className=" font-bold text-4xl lg:text-5xl mb-10">
            {mini_descrizione} : {name}
          </h1>
          <div className="mb-10">
            <a href={url || url_git} target="blank">
              <img
                className="rounded-xl w-full"
                src={image_open || image}
                alt={name}
              />
            </a>
          </div>
          <div className="mb-10">
            <h1 className=" font-bold text-2xl lg:text-4xl mb-10">
              Descrizione progetto
            </h1>
            <p className="text-base lg:text-lg">{descrizione}</p>
          </div>

          <div>
            <h1 className=" font-bold text-2xl lg:text-4xl mb-10">
              Tecnologie utilizzate
            </h1>
            <p className="text-base lg:text-lg">{tecnologie}</p>
          </div>
        </div>
        <div
          style={{
            marginTop: `${
              window.innerWidth > 1024 && altezza !== undefined
                ? parseInt(altezza, 10) + 40
                : 0
            }px`,
          }}
          className="relative ">
          {url !== "" ? (
            <div className="lg:fixed">
              <a href={url} target="blank">
                <span className="flex gap-4 items-center">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    style={{ color: "#ffffff", fontSize: "2.5rem" }}
                  />
                  <p> Vedi demo</p>
                </span>
              </a>
              <br />
              <a href={url_git} target="blank">
                <span className="flex gap-4 items-center">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: "#ffffff", fontSize: "2.5rem" }}
                  />
                  <p> Vedi progetto git</p>
                </span>
              </a>
            </div>
          ) : (
            <div className="lg:fixed">
              <a href={url_git} target="blank">
                <span className="flex gap-4 items-center">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: "#ffffff", fontSize: "2.5rem" }}
                  />
                  <p> Vedi progetto git</p>
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Dettaglio;
