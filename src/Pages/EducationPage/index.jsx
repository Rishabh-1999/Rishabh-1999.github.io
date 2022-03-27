import React from "react";

/* Styles */
import "./index.scss";

/* Images/SVG */
import { ReactComponent as SchoolSVG } from "../../Assets/SVG/school.min.svg";
import { ReactComponent as SeniorSchoolSVG } from "../../Assets/SVG/senior-school.min.svg";
import { ReactComponent as CollegeSVG } from "../../Assets/SVG/college.min.svg";

const CardComponent = React.memo(({ title, year, location, image }) => (
  <div className="education_details_page__main__card rounded-2xl flex flex-col flex-1 items-center justify-center flex-grow m-3 p-1">
    <div className="text-center m-3 p-3">{image}</div>
    <div className="text-center">
      <h3 className="font-medium underline mb-0">{title}</h3>
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
    <section id="education_details_page" className="px-4 pt-4">
      <div className="text-center">
        <h4 className="text-secondary-color mb-0">Education History</h4>
        <h1>
          <u>EDUCATION</u>
        </h1>
      </div>
      <div className="education_details_page__main mx-2 md:mx-auto px-2 md:px-8 pt-4 md:pt-10">
        <div className="container flex flex-col md:flex-row flex-wrap">
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
            year="2017 - 2021"
            location="Chitkara University, Rajpura, Punjab"
            image={<CollegeSVG />}
          />
        </div>
      </div>
    </section>
  );
}

export default React.memo(education_details_page);
