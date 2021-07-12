import React from "react";

/* Styles */
import "./index.scss";

/* Images/SVG */
import { ReactComponent as SchoolSVG } from "../Assets/SVG/school.min.svg";
import { ReactComponent as SeniorSchoolSVG } from "../Assets/SVG/senior-school.min.svg";
import { ReactComponent as CollegeSVG } from "../Assets/SVG/college.min.svg";

const CardComponent = React.memo(({ title, year, location, image }) => (
  <div className="education_details_page__main__card p-1 m-3">
    <div className="education_details_page__main__card__icon text-center m-4 p-4">
      {image}
    </div>
    <div className="education_details_page__main__card__content text-center">
      <h3 className="m-0">
        <strong>
          <u>{title}</u>
        </strong>
      </h3>
      <p>
        <br />
        {year}
        <br />
        {location}
      </p>
    </div>
  </div>
));

function education_details_page() {
  return (
    <section id="education_details_page" className="m-2 p-2 pt-4">
      <div className="education_details_page__header text-center">
        <h4 className="text-secondary-color m-0">Education History</h4>
        <h1>
          <u>EDUCATION</u>
        </h1>
      </div>
      <div className="education_details_page__main mt-4 mt-xl-5">
        <div className="container">
          <div className="row flex-column flex-md-row">
            <CardComponent
              title="Senior Sec. - 10th"
              year="2014 -2015"
              location="KV No.2 AFS, Srinagar, J&amp;K"
              image={<SchoolSVG />}
            />
            <CardComponent
              title="Higher Sec. - 12th"
              year="2015 - 2017"
              location="SGGS Senior Sec. School, Sector 34, Chandigarh"
              image={<SeniorSchoolSVG />}
            />

            <CardComponent
              title="Graduation"
              year="2017 - 2021*"
              location="Chitkara University, Rajpura, Punjab"
              image={<CollegeSVG />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(education_details_page);
