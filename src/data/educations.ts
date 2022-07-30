/* Images/SVG */
import { ReactComponent as SchoolSVG } from "assets/svg/school.min.svg";
import { ReactComponent as SeniorSchoolSVG } from "assets/svg/senior-school.min.svg";
import { ReactComponent as CollegeSVG } from "assets/svg/college.min.svg";

export interface EducationType {
    title: string;
    year: string;
    location: string;
    link?: string;
    image: any;
}

const EducationsArray: EducationType[] = [
    {
        title: "Senior Sec. - 10th",
        year: "2014 - 2015",
        location: "KV No.2 AFS, Srinagar, J&K",
        image: SchoolSVG,
    },
    {
        title: "Higher Sec. - 12th",
        year: "2015 - 2017",
        location: "SGGS Senior Sec. School, Sector 34, Chandigarh",
        image: SeniorSchoolSVG,
    },
    {
        title: "Graduation",
        year: "2017 - 2021",
        location: "Chitkara University, Rajpura, Punjab",
        link: "https://drive.google.com/file/d/1Qro87eCS9XFlA8R_KtYC2UPO4WJf4vmY/view?usp=sharing",
        image: CollegeSVG,
    },
];

export default EducationsArray;
