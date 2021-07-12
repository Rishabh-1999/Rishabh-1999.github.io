import React from "react";

/* Styles */
import "./index.scss";

const CertificateArray = [
  {
    name: "   Server-side Development with NodeJS, Express and MongoDB(Coursera)",
    url: "https://drive.google.com/file/d/1D27cmO6xEfFD7pLFpSm9g2tDLMD7AUz9/preview",
    stack: ["Node JS", "Database"],
  },
  {
    name: " AWS Fundamentals Going Cloud-Native (Coursera)",
    url: "https://drive.google.com/file/d/1CjH7XpWU4E5IiS2HBURIAIwLe3MwO3X8/preview",
    stack: ["Cloud"],
  },
  {
    name: "  Introduction to Git and GitHub (Coursera)",
    url: "https://drive.google.com/file/d/1nbN0QKmEkp0-ajR7HrnuNK5jfJS_MfCR/preview",
    stack: ["Version Control"],
  },
  {
    name: "Programming for Everybody (Getting Started with Python) (Coursera)",
    url: "https://drive.google.com/file/d/1rS34utrZ1-LXFEeL9soq6urLqM_pg3R5/preview",
    stack: ["Others"],
  },
  {
    name: "Python Data Structures (Coursera)",
    url: "https://drive.google.com/file/d/1HPZ42EIU1vmvwgl45i6Jc_edBabXd1-g/preview",
    stack: ["Others", "Data Structures"],
  },
  {
    name: "Using Python to Access Web Data (Coursera)",
    url: "https://drive.google.com/file/d/1gbKJRefg1mEe3cB4bqBPb0jdlaeWSW1-/preview",
    stack: ["Python"],
  },
  {
    name: "Using Databases with Python (Coursera)",
    url: "https://drive.google.com/file/d/1M5Hqux5ogwN5_vHZxy8ZaTTIMDjkWotj/preview",
    stack: ["Others"],
  },
];

function CertificatePage() {
  const [activeIndex, set_activeIndex] = React.useState(0);

  const selected_data = CertificateArray[activeIndex];

  return (
    <section id="certificate_page" className="m-2 p-2 pt-4">
      <div className="certificate_page text-center">
        <h4 className="text-secondary-color m-0">Certificate Earned</h4>
        <h1>
          <u>Certificate</u>
        </h1>
      </div>
      <div className="certificate_page__main container mt-4 mt-xl-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <div
                className="nav nav-pills certificate_list_container"
                id="certificate-tab"
              >
                {CertificateArray.map((temp, index) => {
                  return (
                    <div
                      key={temp.name}
                      className={`nav-link mb-1 ${
                        index === activeIndex ? "active" : ""
                      }`}
                      onClick={() => set_activeIndex(index)}
                    >
                      <h5> {temp.name}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-8 col-12">
              <div className="tab-content" id="certificate-tabContent">
                <div className="tab-pane fade show active">
                  <iframe
                    title={selected_data.name}
                    src={selected_data.url}
                    height="525px"
                    width="100%"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(CertificatePage);
