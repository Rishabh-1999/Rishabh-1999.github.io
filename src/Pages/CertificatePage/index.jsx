import React from "react";

/* Styles */
import "./index.scss";

/* Utils */
import { md_width, getWindowDimensions } from "../../utils/windowSize.js";

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
  const [certificates, set_certificates] = React.useState(CertificateArray);
  const [stack_selected, set_stack_selected] = React.useState("all");
  const [activeIndex, set_activeIndex] = React.useState(0);
  const [width, set_width] = React.useState(getWindowDimensions());

  // eslint-disable-next-line no-unused-vars
  const [stacks, set_stacks] = React.useState(() => {
    const certificates = new Set();

    CertificateArray.forEach((certificate_temp) => {
      certificate_temp?.stack.forEach((temp) => certificates.add(temp));
    });

    return Array.from(certificates);
  }, []);

  React.useEffect(() => {
    let temp_array = [];

    if (stack_selected !== "all")
      CertificateArray.forEach((temp) => {
        if (temp.stack && temp.stack.includes(stack_selected)) {
          temp_array.push(temp);
        }
      });
    else temp_array = CertificateArray;

    set_certificates(temp_array);
  }, [stack_selected]);

  const setWindowSize = () => {
    const width = getWindowDimensions();
    set_width(width);
  };

  React.useEffect(() => {
    window.addEventListener("resize", setWindowSize);
    return () => {
      window.removeEventListener("resize", setWindowSize);
    };
  }, []);

  const selected_data = CertificateArray[activeIndex];

  const handleSelect = (e) => {
    set_stack_selected(e.target.value);
  };

  return (
    <section id="certificate_page" className="px-4 pt-4">
      <div className="text-center">
        <h4 className="text-secondary-color m-b0">Certificate Earned</h4>
        <h1>
          <u>Certificate</u>
        </h1>
      </div>
      <div className="certificate_page__main mx-2 md:mx-auto px-2 md:px-4 md:pr-8 pt-4 md:pt-10">
        <div className="container mx-auto px-4">
          {stacks && Array.isArray(stacks) && (
            <select className="md:ml-5" onChange={handleSelect}>
              <option value={"all"}>Show All Certificate</option>
              {stacks.map((temp) => {
                return (
                  <option key={temp} value={temp}>
                    {temp}
                  </option>
                );
              })}
            </select>
          )}
          <div className="flex">
            <div className="certificate_list_container" id="certificate-tab">
              {md_width > width ? (
                <>
                  <select onChange={(e) => set_activeIndex(e.target.value)}>
                    {certificates.map((temp, index) => {
                      return (
                        <option key={temp.name} value={index}>
                          {temp.name}
                        </option>
                      );
                    })}
                  </select>
                </>
              ) : (
                <>
                  {certificates.map((temp, index) => {
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
                </>
              )}
            </div>

            <div className="tab-content" id="certificate-tabContent">
              <div className="tab-pane fade show active">
                <iframe
                  title={selected_data.name}
                  src={selected_data.url}
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
