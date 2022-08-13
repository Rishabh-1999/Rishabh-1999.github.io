export interface CertificateType {
    name: string;
    url: string;
    stack: string[];
}

const CertificatesArray: CertificateType[] = [
    {
        name: "Server-side Development with NodeJS, Express and MongoDB (Coursera)",
        url: "https://drive.google.com/file/d/1D27cmO6xEfFD7pLFpSm9g2tDLMD7AUz9/preview",
        stack: ["Frontend", "Backend", "Database"],
    },
    {
        name: "Understanding TypeScript - 2022 Edition (Udemy)",
        url: "https://drive.google.com/file/d/1BQNZ1wqpFywQyFfBTX8SfBhBR1DrKSCW/preview",
        stack: ["Frontend", "Backend", "Programming Language"],
    },
    {
        name: "Docker & Kubernetes: The Practical Guide (Udemy)",
        url: "https://drive.google.com/file/d/1GRGOltaJmhPui6-22bshLNUmDn1R-uWw/preview",
        stack: ["Dev-Ops"],
    },
    {
        name: "AWS Fundamentals Going Cloud-Native (Coursera)",
        url: "https://drive.google.com/file/d/1CjH7XpWU4E5IiS2HBURIAIwLe3MwO3X8/preview",
        stack: ["Cloud", "Dev-Ops"],
    },
    {
        name: "Programming for Everybody (Getting Started with Python) (Coursera)",
        url: "https://drive.google.com/file/d/1rS34utrZ1-LXFEeL9soq6urLqM_pg3R5/preview",
        stack: ["Programming Language", "Python", "Others"],
    },
    {
        name: "Getting Started with Data Analytics on AWS (Coursera)",
        url: "https://drive.google.com/file/d/1z9IiytFDkr1lCNdVe1_Dm9Eu21GUVqxv/preview",
        stack: ["Data Analytics"],
    },
    {
        name: "Introduction to Git and GitHub (Coursera)",
        url: "https://drive.google.com/file/d/1nbN0QKmEkp0-ajR7HrnuNK5jfJS_MfCR/preview",
        stack: ["Others"],
    },
    {
        name: "Python Data Structures (Coursera)",
        url: "https://drive.google.com/file/d/1HPZ42EIU1vmvwgl45i6Jc_edBabXd1-g/preview",
        stack: ["Python", "Data Structures", "Others"],
    },
    {
        name: "Using Python to Access Web Data (Coursera)",
        url: "https://drive.google.com/file/d/1gbKJRefg1mEe3cB4bqBPb0jdlaeWSW1-/preview",
        stack: ["Python"],
    },
    {
        name: "Using Databases with Python (Coursera)",
        url: "https://drive.google.com/file/d/1M5Hqux5ogwN5_vHZxy8ZaTTIMDjkWotj/preview",
        stack: ["Python", "Others"],
    },
];

export default CertificatesArray;
