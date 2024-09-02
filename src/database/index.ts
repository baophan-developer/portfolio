import { Information, ListExperience, Social, Technical, TYPE_TECH } from "../interfaces";

export const mySumary: string =
    "I have one year of experience in developing websites within the finance and banking sector. My expertise includes using programming languages and related libraries such as React, Typescript, React Router Dom, React Hook Form and TanStack Query. With My experience, I am confident in my ability to contribute value and help develop high-quality products for the company.";

export const myObjective: string =
    "As a front-end developer, I want to provide the best user interface experience possible. I'll constantly try to improve myself and learn more to bring new things to the user experience and the core value of a front-end developer. I've had some experience working with dashboards in my career. I hope I can work with many different types of websites to learn more and bring more value to your business.";

export const myInformation: Information = {
    firstName: "Bao",
    lastName: "Phan Hoai",
    address: "Bui Van Ba, District 7, Ho Chi Minh, Viet Nam",
    phoneNumber: "+84 946310531",
    currentLevel: "Fresher",
};

export const mySocial: Social = {
    linkIn: "https://www.linkedin.com/in/baophandev/",
    gitHub: "https://github.com/baophan-developer",
};

export const myProgrammingLanguages: Technical = {
    typeTech: TYPE_TECH.PROGRAMMING_LANGUAGE,
    nameTech: ["Javascript", "Typescript"],
};

export const myTool: Technical = {
    typeTech: TYPE_TECH.TOOL,
    nameTech: ["VS Code", "Git", "Node.js", "SourceTree"],
};

export const myBackEnd: Technical = {
    typeTech: TYPE_TECH.BECK_END,
    nameTech: ["Express", "MongoDB"],
};

export const myFrontEnd: Technical = {
    typeTech: TYPE_TECH.FRONT_END,
    nameTech: [
        "HTML/CSS",
        "React",
        "Next.js",
        "Redux",
        "TanStack Query",
        "React Hook Form",
        "React Router Dom",
        "Ant Design",
        "Meterial UI",
        "Styled component",
    ],
};

export const myExperience: ListExperience = [
    {
        nameCompany: "Silicon Stack",
        nameProject: "Booking Room",
        teamSize: 2,
        rangeTime: ["July, 1 2023", "July, 31 2023"],
        technicalUsed: [
            "React",
            "Next.js",
            "Typescript",
            "Ant Design",
            "Ant Form Builder",
            "Full Calendar",
            "Recoil",
            "Styled component",
        ],
        description:
            "This project is part of the company's programming training. The goal of the project is to provide user with interactive features on the website, such as viewing bookings on a calendar and checking room availability. Administrators are provided with features to manage user permissions and monitor the availability status of room.",
        tasks: [
            "Be reponsible for developing the front end that allows user interaction.",
            "Be reponsible for adding the pages login, register and forgot password.",
            "Be reponsible for adding the pages management meeting room, user and rule of user.",
            "Be reponsible for adding the page management booking room allows user book, view and cancel bookings.",
        ],
    },
    {
        nameCompany: "Can Tho University",
        nameProject: "Website for selling used phone",
        teamSize: 1,
        rangeTime: ["Aug, 1 2023", "Nov, 31 2023"],
        technicalUsed: [
            "React",
            "Next.js",
            "Typescript",
            "Ant Design",
            "Express",
            "Nodemailer",
            "MongoDB",
            "Socket.io",
            "Recoil",
            "Styled component",
            "Cloudinary",
        ],
        description:
            "This project is part of the graduation capstone. It is a website that allows users to interact and perform actions such as shopping for products, tracking orders and viewing product details. Administrators are provided with features to manage the products on the website.",
        tasks: [
            "Be responsible for design flow of website, interaction between database, backend and frontend.",
            "Be responsible for design database and api of backend.",
            "Using Nodemailer for send mail. Using Cloudinary saved images. Using Socket.io for send notification.",
            "Be responsible for development a website that allows users to shop with features likes a cart, payment and tracking orders.",
            "Be responsible for development a website that allows admin to management products",
        ],
    },
    {
        nameCompany: "Unit Corporation",
        nameProject: "POC AB Bank",
        teamSize: 8,
        rangeTime: ["May, 13 2024", "My, 24 2024"],
        technicalUsed: [
            "React",
            "Typescript",
            "Material UI",
            "TanStack Query",
            "React Hook Form",
            "React Router Dom",
        ],
        description:
            "The AB Bank's POC project is a project demonstrating the credit process.",
        tasks: [
            "Division of user interface developments tasks.",
            "Be responsible for the development of the website's management proposal screen.",
            "Be responsible for the development of the website's dashboard screen.",
            "Be responsible for the development of the website's initial and editable proposal screen.",
        ],
    },
    {
        nameCompany: "Unit Corporation",
        nameProject: "Paperless - Ministry of Finance",
        teamSize: 7,
        rangeTime: ["June, 1 2024", "July, 15 2024"],
        technicalUsed: [
            "React",
            "Typescript",
            "Material UI",
            "TanStack Query",
            "React Hook Form",
            "React Router Dom",
        ],
        description:
            "The paperless project is being developed with aim of supporting goverment officals in experimenting with payment feels for allowances.",
        tasks: [
            "Be responsible for the development of the ePortal web application.",
            "Be responsible for the development of the website's dashboard screen.",
            "The page management for travel permit application files.",
            "The page management for advance request files.",
            "The page management for payment request files.",
            "Create component modal show information travel permit, advance request and payment file.",
        ],
    },
    {
        nameCompany: "Unit Corporation",
        nameProject: "International Payment of Sacombank",
        teamSize: 21,
        rangeTime: ["Aug, 1 2024", "Now"],
        technicalUsed: [
            "React",
            "Typescript",
            "Material UI",
            "TanStack Query",
            "React Hook Form",
            "React Router Dom",
        ],
        description:
            "The project enables users to efficiently handle and manage documents associated with import and export activities. Its streamlines the workflow, ensuring accuracy and compliance in the entire process.",
        tasks: [
            "Be responsible for maintaining and update of the page handles import and export.",
            "Update the page with result detail of import document.",
            "Update the page with information general of import document.",
            "Be responsible for adding the page checker management in the web admin.",
            "Create new the page checker limit range.",
            "Create new the page checker master data.",
        ],
    },
];
