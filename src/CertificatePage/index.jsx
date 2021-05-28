import React from "react";

/* Styles */
import "./index.scss";

const CerificateArray = [
  {
    name: "   Server-side Development with NodeJS, Express and MongoDB(Coursera)",
    url: "https://drive.google.com/file/d/1D27cmO6xEfFD7pLFpSm9g2tDLMD7AUz9/preview",
  },
  {
    name: " AWS Fundamentals Going Cloud-Native (Coursera)",
    url: "https://drive.google.com/file/d/1CjH7XpWU4E5IiS2HBURIAIwLe3MwO3X8/preview",
  },
  {
    name: "  Introduction to Git and GitHub (Coursera)",
    url: "https://drive.google.com/file/d/1nbN0QKmEkp0-ajR7HrnuNK5jfJS_MfCR/preview",
  },
  {
    name: "Programming for Everybody (Getting Started with Python) (Coursera)",
    url: "https://drive.google.com/file/d/1rS34utrZ1-LXFEeL9soq6urLqM_pg3R5/preview",
  },
  {
    name: "Python Data Structures (Coursera)",
    url: "https://drive.google.com/file/d/1HPZ42EIU1vmvwgl45i6Jc_edBabXd1-g/preview",
  },
  {
    name: "Using Python to Access Web Data (Coursera)",
    url: "https://drive.google.com/file/d/1gbKJRefg1mEe3cB4bqBPb0jdlaeWSW1-/preview",
  },
  {
    name: "Using Databases with Python (Coursera)",
    url: "https://drive.google.com/file/d/1M5Hqux5ogwN5_vHZxy8ZaTTIMDjkWotj/preview",
  },
];

function CertificatePage() {
  const [activeIndex, setactiveIndex] = React.useState(0);

  const selected_data = CerificateArray[activeIndex];

  return (
    <section id="certificatepage" className="m-1 p-1 pt-4">
      <div className="certificatepage__header container d-flex justify-content-center">
        <div className="d-flex flex-column justify-content-center">
          <h4 className="text-center text-secondary-color ">
            Certificate Earned
          </h4>
          <h1>
            <u>Certificate</u>
          </h1>
        </div>
      </div>
      <div className="certificatepage__main container">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="nav flex-column nav-pills" id="certificate-tab">
              {CerificateArray.map((temp, index) => {
                return (
                  <div
                    key={temp.name}
                    className={`nav-link ${
                      index === activeIndex ? "active" : ""
                    }`}
                    onClick={() => setactiveIndex(index)}
                  >
                    <h5> {temp.name}</h5>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-8 col-12">
            <div className="tab-content" id="certificate-tabContent">
              <div className={`tab-pane fade show active`}>
                <iframe
                  title={selected_data.name}
                  src={selected_data.url}
                  height="500px"
                  width="100%"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(CertificatePage);
