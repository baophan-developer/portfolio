import { Information, Social, Technical, TYPE_TECH } from "../interfaces";

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

export const myTool: Technical = {
    typeTech: TYPE_TECH.TOOL,
    nameTech: ["VS Code", "Git", "Node.js", "SourceTree"],
};
