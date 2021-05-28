import React from "react";

/* Styles */
import "./index.scss";

import data from "./techiuse.js";

function Card({ title, src }) {
  return (
    <div className="tech_i_know__main__card row p-1 py-3">
      <div className="tech_i_know__main__card__icon">
        <img src={src} alt={title} />
      </div>
      <div className="tech_i_know__main__card__title w-100">
        <h2 className="text-secondary-color ">{title}</h2>
      </div>
    </div>
  );
}

function CardHolder({ heading, data }) {
  return (
    <div className="tech_i_know__main__card__holder m-2 p-2">
      <div className="tech_i_know__main__card__holder__heading text-center p-2">
        <h3>{heading}</h3>
      </div>
      <div className="tech_i_know__main__card__holder__main p-1">
        {data.map((temp) => (
          <Card key={temp.title} {...temp} />
        ))}
      </div>
    </div>
  );
}

function TechIUsePage() {
  return (
    <section id="tech_i_know" className="m-2 p-2 pt-4">
      <div className="tech_i_know__header container flex-column justify-content-center">
        <h4 className="text-center text-secondary-color m-0">
          Knowledge I Gathered
        </h4>
        <h1 className="text-center">
          <u>Tech I Know</u>
        </h1>
      </div>
      <div className="tech_i_know__main mt-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <CardHolder heading={"Front End (React)"} data={data.react} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <CardHolder heading={"Front End"} data={data.frontend} />
              <CardHolder heading={"Back End"} data={data.backend} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <CardHolder heading={"Database"} data={data.databases} />
              <CardHolder heading={"Dev Ops"} data={data.devops} />
              <CardHolder
                heading={"Cloud Services"}
                data={data.cloud_services}
              />
              <CardHolder
                heading={"Version Control"}
                data={data.versionControl}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(TechIUsePage);
